import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { Hero } from "@/components/site/hero";
import { ReelsShowcase } from "@/components/site/reels-showcase";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { Services } from "@/components/site/services";
import { BeforeAfter } from "@/components/site/before-after";
import { Testimonials } from "@/components/site/testimonials";
import { WhyChoose } from "@/components/site/why-choose";
import { Stats } from "@/components/site/stats";
import { Process } from "@/components/site/process";
import { Contact } from "@/components/site/contact";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <ReelsShowcase />
        <PortfolioGrid compact />
        <Services />
        <BeforeAfter />
        <Stats />
        <WhyChoose />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
