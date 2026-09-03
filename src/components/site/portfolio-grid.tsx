import { useMemo, useState } from "react";
import { MOCK_REELS, CATEGORY_LABELS, type ReelCategory, type Reel } from "@/lib/mock";
import { useReelStore } from "@/lib/reel-store";
import { ReelCard } from "./reel-card";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const CATS: (ReelCategory | "all")[] = [
  "all",
  "new_collection",
  "festive_collection",
  "mens_wear",
  "streetwear",
  "ethnic",
  "store_promotion",
];

export function PortfolioGrid({ compact = false }: { compact?: boolean }) {
  const [cat, setCat] = useState<ReelCategory | "all">("all");
  const [q, setQ] = useState("");
  const store = useReelStore();

  const { data: dbReels } = useQuery({
    queryKey: ["reels"],
    queryFn: async () => {
      try {
        const qSnap = query(
          collection(db, "reels"),
          where("published", "==", true)
        );
        const snap = await getDocs(qSnap);
        const docs = snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Reel[];
        docs.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
        return docs;
      } catch (err) {
        console.error("Failed to fetch reels from Firestore:", err);
        return [] as Reel[];
      }
    },
  });

  const reelsList = dbReels && dbReels.length > 0 ? dbReels : MOCK_REELS;

  const items = useMemo(() => {
    return reelsList.filter(r =>
      (cat === "all" || r.category === cat) &&
      (q === "" || (r.title + " " + (r.store_name ?? "") + " " + (r.collection_name ?? "") + " " + (r.location ?? "")).toLowerCase().includes(q.toLowerCase()))
    );
  }, [reelsList, cat, q]);

  const displayItems = compact ? items.slice(0, 8) : items;

  return (
    <section id="portfolio" className="relative py-20 sm:py-28 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6">
        {!compact && (
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">COLLECTION ARCHIVE</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Every look. Every drop.
            </h2>
            <p className="mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Explore curated reels created for clothing stores, festive campaigns, and trend drops.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer select-none ${
                  cat === c ? "bg-white text-black shadow-lg" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}>
                {CATEGORY_LABELS[c]}
              </button>
            ))}
          </div>
          <label className="relative flex items-center shrink-0">
            <Search className="pointer-events-none absolute left-3.5 h-4 w-4 text-white/40" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search store, outfit, drop..."
              className="w-full rounded-full border border-white/15 bg-white/5 pl-10 pr-4 py-2.5 text-xs font-medium text-white placeholder:text-white/40 focus:border-white/40 focus:ring-1 focus:ring-white/20 focus:outline-none transition duration-200 sm:w-64" />
          </label>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {displayItems.map((r, idx) => (
            <div key={r.id} className="[&>button]:w-full">
              <ReelCard reel={r} onOpen={() => store.open(displayItems, r.id)} autoplay={idx === 0} />
            </div>
          ))}
          {displayItems.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-3xl bg-zinc-950/60 p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-white">No Reels In This Category Yet</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Upload your collection reels via the Admin dashboard to show them here.
              </p>
              <div className="mt-5">
                <a
                  href="/admin"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-white/90 transition"
                >
                  Go To Admin →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
