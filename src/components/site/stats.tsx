import { useEffect, useRef, useState } from "react";
import { COMMUNITY_STATS } from "@/lib/mock";
import { Instagram, ArrowRight, Sparkles } from "lucide-react";

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
        const currentVal = value % 1 !== 0 
          ? Number((value * (1 - Math.pow(1 - p, 3))).toFixed(1))
          : Math.round(value * (1 - Math.pow(1 - p, 3)));
        setN(currentVal);
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
    <section className="relative py-20 sm:py-28 bg-[#050507] overflow-hidden border-t border-white/10">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-white/5 blur-[140px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              SOCIAL PROOF
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              THE COMMUNITY
            </h2>
            <p className="mt-2 text-muted-foreground text-xs sm:text-sm">
              Connecting fashion-conscious audiences across Himmatnagar and Gujarat with authentic creator reels.
            </p>
          </div>
          <a
            href="https://www.instagram.com/desaii_sidhdhraj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition self-start md:self-auto"
          >
            <Instagram className="h-4 w-4" /> Follow The Journey →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {COMMUNITY_STATS.map((s, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 text-center transition hover:border-white/30 hover:bg-zinc-900/80 hover:-translate-y-1 duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
              <p className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                <Counter value={s.value} />
                <span className="text-white/70 font-bold">{s.suffix}</span>
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">{s.label}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
