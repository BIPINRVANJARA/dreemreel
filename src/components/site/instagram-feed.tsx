import { MOCK_REELS } from "@/lib/mock";
import { useReelStore } from "@/lib/reel-store";
import { Instagram } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

const FEED_FALLBACKS = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=70",
];

function SafeFeedImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const fallback = FEED_FALLBACKS[index % FEED_FALLBACKS.length];
  const [imgSrc, setImgSrc] = useState(src || fallback);

  useEffect(() => {
    setImgSrc(src || fallback);
  }, [src, fallback]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
      className="h-full w-full object-cover transition group-hover:scale-110"
    />
  );
}

export function InstagramFeed() {
  const store = useReelStore();
  const navigate = useNavigate();

  const { data: cache } = useQuery({
    queryKey: ["instagram_feed"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "instagram_feed_cache")
        .maybeSingle();
      if (error) throw error;
      return data?.value as { last_updated: string; feed: any[] } | null;
    },
  });

  const feedItems = cache?.feed || [];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label text-primary flex items-center gap-2">
              <Instagram className="h-3.5 w-3.5" /> Instagram
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fresh from our feed.
            </h2>
          </div>
          <a
            href="https://instagram.com/dreamreel.production"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm hover:bg-surface"
          >
            @dreamreel.production →
          </a>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
          {feedItems.length > 0
            ? feedItems.slice(0, 6).map((item: any, idx: number) => (
                <a
                  key={item.id}
                  href={item.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-lg bg-surface block"
                >
                  <SafeFeedImage
                    src={item.thumbnail_url || item.media_url}
                    alt={item.caption || "Instagram post"}
                    index={idx}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <Instagram className="absolute right-2 top-2 h-4 w-4 text-white opacity-0 transition group-hover:opacity-100" />
                </a>
              ))
            : MOCK_REELS.slice(0, 6).map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => navigate({ to: "/reel/$id", params: { id: r.id } })}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-surface text-left"
                >
                  <SafeFeedImage
                    src={r.thumbnail_url}
                    alt=""
                    index={idx}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <Instagram className="absolute right-2 top-2 h-4 w-4 text-white opacity-0 transition group-hover:opacity-100" />
                </button>
              ))}
        </div>
      </div>
    </section>
  );
}
