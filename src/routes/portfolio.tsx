import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { PortfolioGrid } from "@/components/site/portfolio-grid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Store & Brand Promotions — Desai Siddhraj" },
      { name: "description", content: "Commercial reels, store grand openings, cafe showcases, and business promotional campaigns by Desai Siddhraj across Gujarat." },
      { property: "og:title", content: "Store & Brand Promotions — Desai Siddhraj" },
      { property: "og:description", content: "Every store. Every campaign. One tap away." },
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">COMMERCIAL PORTFOLIO</p>
          <h1 className="mt-2 text-3xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Store & Brand Promotions
          </h1>
        </div>
        <PortfolioGrid />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
