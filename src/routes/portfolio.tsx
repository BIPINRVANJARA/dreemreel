import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { PortfolioGrid } from "@/components/site/portfolio-grid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Collection Archive — Desai Siddhraj" },
      { name: "description", content: "Fashion reels, store collaborations, and outfit showcases by Desai Siddhraj in Himmatnagar, Gujarat." },
      { property: "og:title", content: "Collection Archive — Desai Siddhraj" },
      { property: "og:description", content: "Every look. Every drop. One tap away." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-dvh bg-[#050507] text-white">
      <SiteNav />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 pt-8 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">COLLECTION ARCHIVE</p>
          <h1 className="mt-2 text-3xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Fashion & Reel Portfolio
          </h1>
        </div>
        <PortfolioGrid />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
