import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// Server function to sync Instagram feed using credentials stored in the DB
export const syncInstagramFeed = createServerFn({ method: "POST" })
  .handler(async () => {
    // 1. Fetch Instagram config from site_settings (service role key bypasses RLS)
    const { data: configRow, error: configError } = await supabaseAdmin
      .from("site_settings")
      .select("value")
      .eq("key", "instagram_config")
      .maybeSingle();

    if (configError) {
      throw new Error(`Database error fetching config: ${configError.message}`);
    }

    if (!configRow || !configRow.value) {
      throw new Error("Instagram Feed is not configured yet. Set credentials in the Instagram tab.");
    }

    const { access_token, business_account_id } = configRow.value as {
      access_token?: string;
      business_account_id?: string;
    };

    if (!access_token || !business_account_id) {
      throw new Error("Access token or Instagram Business Account ID is missing in configuration.");
    }

    // 2. Fetch the latest 12 media posts from the Instagram Graph API
    const url = `https://graph.facebook.com/v19.0/${business_account_id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}&limit=12`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "Failed to fetch Instagram feed from Graph API.");
      }

      const feed = data.data || [];

      // 3. Save the fetched feed into site_settings cache
      const { error: saveError } = await supabaseAdmin
        .from("site_settings")
        .upsert({
          key: "instagram_feed_cache",
          value: {
            last_updated: new Date().toISOString(),
            feed: feed,
          },
        });

      if (saveError) {
        throw new Error(`Failed to save Instagram feed cache: ${saveError.message}`);
      }

      return { success: true, count: feed.length, feed };
    } catch (e: any) {
      console.error("[Instagram Sync Error]:", e);
      throw new Error(e.message || "An unexpected error occurred during sync.");
    }
  });

// Server function to update the Instagram configuration credentials in DB
export const updateInstagramConfig = createServerFn({ method: "POST" })
  .validator((data: { access_token: string; business_account_id: string }) => data)
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("site_settings")
      .upsert({
        key: "instagram_config",
        value: {
          access_token: data.access_token,
          business_account_id: data.business_account_id,
        },
      });

    if (error) {
      throw new Error(`Failed to save Instagram configuration: ${error.message}`);
    }

    return { success: true };
  });
