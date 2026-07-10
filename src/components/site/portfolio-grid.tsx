import { useMemo, useState } from "react";
import { MOCK_REELS, CATEGORY_LABELS, type ReelCategory, type Reel } from "@/lib/mock";
import { useReelStore } from "@/lib/reel-store";
import { ReelCard } from "./reel-card";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const CATS: (ReelCategory | "all")[] = [
  "all",
  "wedding",
  "pre_wedding",
  "birthday",
  "bridal",
  "baby_shower",
  "baby_welcome",
  "anniversary",
  "commercial",
  "instagram_reel",
  "event",
  "drone",
];

export function PortfolioGrid({ compact = false }: { compact?: boolean }) {
  const [cat, setCat] = useState<ReelCategory | "all">("all");
  const [q, setQ] = useState("");
  const store = useReelStore();

  const { data: dbReels } = useQuery({
    queryKey: ["reels"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reels")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Reel[];
    },
  });

  const reelsList = dbReels && dbReels.length > 0 ? dbReels : MOCK_REELS;

  const items = useMemo(() => {
    return reelsList.filter(r =>
      (cat === "all" || r.category === cat) &&
      (q === "" || (r.title + " " + (r.location ?? "")).toLowerCase().includes(q.toLowerCase()))
    );
  }, [reelsList, cat, q]);

  const displayItems = compact ? items.slice(0, 8) : items;


  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {!compact && (
          <div className="mb-10 max-w-2xl">
            <p className="label text-primary">Portfolio</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Every project, one tap away.</h2>
          </div>
        )}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition cursor-pointer select-none ${
                  cat === c ? "bg-primary text-primary-foreground shadow-md" : "border border-white/5 bg-surface/40 text-muted-foreground hover:bg-surface hover:text-white hover:border-white/10"
                }`}>
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
          <label className="relative flex items-center shrink-0">
            <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground/60" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search projects..."
              className="w-full rounded-full border border-white/10 bg-surface/50 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200 sm:w-64" />
          </label>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {displayItems.map((r, idx) => (
            <div key={r.id} className="[&>button]:w-full">
              <ReelCard reel={r} onOpen={() => store.open(displayItems, r.id)} autoplay={idx === 0} />
            </div>
          ))}
          {displayItems.length === 0 && (
            <p className="col-span-full py-16 text-center text-sm text-muted-foreground">
              No reels match — try a different filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
