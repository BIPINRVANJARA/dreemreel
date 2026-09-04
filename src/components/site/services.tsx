import { SERVICES } from "@/lib/mock";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Shirt, Film, Sparkles, Flame, Smartphone, Handshake, Check, Rocket, Coffee } from "lucide-react";
import { useState } from "react";

function getServiceIcon(icon: string) {
  switch (icon) {
    case "rocket": return <Rocket className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "shirt": return <Shirt className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "coffee": return <Coffee className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "film": return <Film className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "sparkles": return <Sparkles className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "flame": return <Flame className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "smartphone": return <Smartphone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    case "handshake": return <Handshake className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
    default: return <Sparkles className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />;
  }
}

export function Services() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].slug);
  return (
    <section id="what-i-create" className="relative py-20 sm:py-32 bg-[#050507] overflow-hidden">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-white/5 blur-[140px] z-0" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-2xl text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">PROMOTION SERVICES</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            WHAT I PROMOTE
          </h2>
          <p className="mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Tailored promotional video packages designed to put retail shops, cafes, showrooms, and local brands directly on the feeds of active local shoppers.
          </p>
        </div>
        
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map(s => {
            const isOpen = open === s.slug;
            return (
              <div key={s.slug} className="group/item transition-colors duration-300 hover:bg-white/[0.02]">
                <button onClick={() => setOpen(isOpen ? null : s.slug)}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left border-0 bg-transparent text-white cursor-pointer select-none">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                    {getServiceIcon(s.icon)}
                  </span>
                  <span className="min-w-0 pr-4">
                    <p className="text-base sm:text-xl font-bold uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-white/90">{s.title}</p>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">{s.description}</p>
                  </span>
                  <span className={`grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "border-white bg-white text-black rotate-180" : "border-white/15 text-white/60 hover:text-white hover:border-white/30"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 pt-2 sm:grid-cols-12 pl-0 sm:pl-16">
                    <div className="sm:col-span-8 bg-zinc-950/70 border border-white/10 rounded-2xl p-5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Included Deliverables</p>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                        {s.deliverables.map(d => (
                          <div key={d} className="flex items-center gap-2 text-white/80">
                            <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="sm:col-span-4 flex flex-col justify-end">
                      <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white/90 active:scale-[0.98] shadow-lg">
                        Request {s.title}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
