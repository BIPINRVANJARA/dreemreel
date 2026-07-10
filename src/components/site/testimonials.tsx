import { TESTIMONIALS } from "@/lib/mock";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32 bg-[#050507]">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] z-0" />
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent-2/5 blur-[120px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="label text-primary">Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white">Kind words from real couples & brands.</h2>
        </div>
      </div>
      
      <div className="mt-12 [--dur:40s] relative z-10">
        <div className="flex w-max animate-[marquee_var(--dur)_linear_infinite] gap-5 px-6 hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <div key={i} className="group relative w-[320px] shrink-0 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-surface/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar_url} alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10" />
                  <div className="min-w-0">
                    <p className="truncate font-medium text-white">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.handle}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0" />
              </div>
              <div className="mt-4 flex gap-0.5 text-primary">
                {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
}
