import { CREATOR_ADVANTAGES } from "@/lib/mock";
import { Sparkles, UserCheck, Users, Flame, HeartHandshake, Store } from "lucide-react";

function getAdvantageIcon(num: string) {
  switch (num) {
    case "01": return <UserCheck className="h-5 w-5 text-white" />;
    case "02": return <Users className="h-5 w-5 text-white" />;
    case "03": return <Flame className="h-5 w-5 text-white" />;
    case "04": return <HeartHandshake className="h-5 w-5 text-white" />;
    case "05": return <Store className="h-5 w-5 text-white" />;
    default: return <Sparkles className="h-5 w-5 text-white" />;
  }
}

export function WhyChoose() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#050507] overflow-hidden border-t border-white/10">
      {/* Glow aura */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              THE CREATOR ADVANTAGE
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              WHY BRANDS <br />
              <span className="text-white/70 italic font-serif">WORK WITH ME</span>
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Instead of hiring a photographer, booking a separate model, and struggling to create engaging reels yourself — you get the complete package: <span className="text-white font-semibold">Model + Presenter + Content Creator</span>.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-white/90 transition"
              >
                Start A Campaign →
              </a>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {CREATOR_ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className="group relative rounded-2xl border border-white/10 bg-zinc-950/80 p-6 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/90"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 border border-white/10 text-white font-mono font-bold text-xs group-hover:scale-105 group-hover:border-white/30 transition">
                    {adv.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight flex items-center gap-2">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
