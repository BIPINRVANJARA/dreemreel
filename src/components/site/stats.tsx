import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/mock";

function Counter({ value }: { value: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n}</span>;
}

export function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-xl p-8 text-center transition hover:border-primary/30 hover:bg-surface/50 hover:-translate-y-1 duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
              {/* Subtle top border gradient glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <p className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                <Counter value={s.value} />
                <span className="text-primary font-semibold">{s.suffix}</span>
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
