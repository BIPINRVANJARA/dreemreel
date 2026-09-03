import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Hero } from "@/components/site/hero";
import { ReelsShowcase } from "@/components/site/reels-showcase";
import { FeaturedCollaboration } from "@/components/site/featured-collaboration";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { Services } from "@/components/site/services";
import { WhyChoose } from "@/components/site/why-choose";
import { Process } from "@/components/site/process";
import { Stats } from "@/components/site/stats";
import { AboutSiddhraj } from "@/components/site/about-siddhraj";
import { Contact } from "@/components/site/contact";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-[#050507] text-white">
      <SiteNav />
      <main>
        <Hero />
        <ReelsShowcase />
        <FeaturedCollaboration />
        <PortfolioGrid />
        <Services />
        <WhyChoose />
        <Process />
        <Stats />
        <AboutSiddhraj />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
