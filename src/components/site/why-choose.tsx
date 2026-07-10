import { WHY_US } from "@/lib/mock";
import { Camera, Sparkles, Zap, Sliders, Navigation, Music, Users, HelpCircle } from "lucide-react";

function getWhyIcon(icon: string) {
  switch (icon) {
    case "camera": return <Camera className="h-4 w-4 text-primary" />;
    case "sparkles": return <Sparkles className="h-4 w-4 text-primary" />;
    case "zap": return <Zap className="h-4 w-4 text-primary" />;
    case "sliders": return <Sliders className="h-4 w-4 text-primary" />;
    case "navigation": return <Navigation className="h-4 w-4 text-primary" />;
    case "music": return <Music className="h-4 w-4 text-primary" />;
    case "users": return <Users className="h-4 w-4 text-primary" />;
    default: return <HelpCircle className="h-4 w-4 text-primary" />;
  }
}

export function WhyChoose() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#050507]">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="md:sticky md:top-28">
            <p className="label text-primary">Why DreamReel</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white">Made by people who love cinema.</h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              We shoot on cinema-grade gear, direct with intention, and edit like every frame counts. Because it does.
            </p>
          </div>
          <ol className="relative border-l border-white/5 pl-8 ml-4 sm:ml-6 space-y-10">
            {WHY_US.map((w, i) => (
              <li key={i} className="group relative">
                <span className="absolute -left-[48px] top-0.5 grid h-8 w-8 place-items-center rounded-full bg-surface border border-white/10 ring-4 ring-background transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10">
                  {getWhyIcon(w.icon)}
                </span>
                <p className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary">{w.title}</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
