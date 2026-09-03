import { PROCESS_STEPS } from "@/lib/mock";
import { Sparkles, ArrowRight } from "lucide-react";

export function Process() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">COLLABORATION WORKFLOW</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            FROM COLLECTION TO REEL
          </h2>
          <p className="mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
            A seamless 6-step process designed to take your clothing drop from the shop rack directly into high-converting Instagram reels.
          </p>
        </div>
        <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.n} className="group relative rounded-2xl border border-white/10 bg-zinc-950/70 p-5 transition hover:-translate-y-1 hover:border-white/30 text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white/40 group-hover:text-white transition">
                    {s.n}
                  </span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="hidden xl:inline text-white/20 text-xs font-mono">→</span>
                  )}
                </div>
                <h3 className="mt-3 text-base font-bold text-white uppercase tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
