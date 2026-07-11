import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/instagram-actions-DhcyBOyV.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseAdminClient() {
	const getEnv = (key) => {
		if (typeof globalThis !== "undefined" && globalThis.__server_env__) return globalThis.__server_env__[key];
		if (typeof globalThis.Deno !== "undefined" && globalThis.Deno.env) return globalThis.Deno.env.get(key);
		if (typeof process !== "undefined" && process.env) return process.env[key];
	};
	const SUPABASE_URL = getEnv("SUPABASE_URL") || getEnv("VITE_SUPABASE_URL");
	const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY");
	if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []].join(", ")}.`;
		console.warn(`[Supabase Admin] ${message}`);
		return createClient(SUPABASE_URL || "https://placeholder.supabase.co", SUPABASE_SERVICE_ROLE_KEY || "placeholder-key");
	}
	return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_SERVICE_ROLE_KEY) },
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		}
	});
}
var _supabaseAdmin;
var supabaseAdmin = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
	return Reflect.get(_supabaseAdmin, prop, receiver);
} });
var syncInstagramFeed_createServerFn_handler = createServerRpc({
	id: "5af48b25fe3e96d9d5c6dccf205e27fd954919d9b6cf8e713549f4988be44125",
	name: "syncInstagramFeed",
	filename: "src/lib/instagram-actions.ts"
}, (opts) => syncInstagramFeed.__executeServer(opts));
var syncInstagramFeed = createServerFn({ method: "POST" }).handler(syncInstagramFeed_createServerFn_handler, async () => {
	const { data: configRow, error: configError } = await supabaseAdmin.from("site_settings").select("value").eq("key", "instagram_config").maybeSingle();
	if (configError) throw new Error(`Database error fetching config: ${configError.message}`);
	if (!configRow || !configRow.value) throw new Error("Instagram Feed is not configured yet. Set credentials in the Instagram tab.");
	const { access_token, business_account_id } = configRow.value;
	if (!access_token || !business_account_id) throw new Error("Access token or Instagram Business Account ID is missing in configuration.");
	const url = `https://graph.facebook.com/v19.0/${business_account_id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${access_token}&limit=12`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		if (!res.ok) throw new Error(data.error?.message || "Failed to fetch Instagram feed from Graph API.");
		const feed = data.data || [];
		const { error: saveError } = await supabaseAdmin.from("site_settings").upsert({
			key: "instagram_feed_cache",
			value: {
				last_updated: (/* @__PURE__ */ new Date()).toISOString(),
				feed
			}
		});
		if (saveError) throw new Error(`Failed to save Instagram feed cache: ${saveError.message}`);
		return {
			success: true,
			count: feed.length,
			feed
		};
	} catch (e) {
		console.error("[Instagram Sync Error]:", e);
		throw new Error(e.message || "An unexpected error occurred during sync.");
	}
});
var updateInstagramConfig_createServerFn_handler = createServerRpc({
	id: "6b24c1defd73c1302e8388f93eabc0bae30d82dbdeaf2125d42a0171ad61fc0a",
	name: "updateInstagramConfig",
	filename: "src/lib/instagram-actions.ts"
}, (opts) => updateInstagramConfig.__executeServer(opts));
var updateInstagramConfig = createServerFn({ method: "POST" }).validator((data) => data).handler(updateInstagramConfig_createServerFn_handler, async ({ data }) => {
	const { error } = await supabaseAdmin.from("site_settings").upsert({
		key: "instagram_config",
		value: {
			access_token: data.access_token,
			business_account_id: data.business_account_id
		}
	});
	if (error) throw new Error(`Failed to save Instagram configuration: ${error.message}`);
	return { success: true };
});
//#endregion
export { syncInstagramFeed_createServerFn_handler, updateInstagramConfig_createServerFn_handler };
