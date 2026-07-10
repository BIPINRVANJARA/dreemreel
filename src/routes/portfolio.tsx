import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { PortfolioGrid } from "@/components/site/portfolio-grid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — DreamReel Production" },
      { name: "description", content: "Cinematic reels, wedding films, brand videos and more from DreamReel Production." },
      { property: "og:title", content: "Portfolio — DreamReel Production" },
      { property: "og:description", content: "Every project, one tap away." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <p className="label text-primary">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Our latest work.</h1>
        </div>
        <PortfolioGrid />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
