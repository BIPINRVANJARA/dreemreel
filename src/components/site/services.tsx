import { SERVICES } from "@/lib/mock";
import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, Clapperboard, Heart, Cake, Scissors, Video, HelpCircle, Check, Clock } from "lucide-react";
import { useState } from "react";

function getServiceIcon(icon: string) {
  switch (icon) {
    case "clapperboard": return <Clapperboard className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    case "heart": return <Heart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    case "cake": return <Cake className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    case "scissors": return <Scissors className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    case "video": return <Video className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    case "clock": return <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
    default: return <HelpCircle className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />;
  }
}

export function Services() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].slug);
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[120px] z-0" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="label text-primary">Services</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white">A menu of cinematic services.</h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">Pick a lane, or mix a few — we shape every project around your day.</p>
        </div>
        
        <div className="mt-12 divide-y divide-white/5 border-y border-white/5">
          {SERVICES.map(s => {
            const isOpen = open === s.slug;
            return (
              <div key={s.slug} className="group/item transition-colors duration-300 hover:bg-white/[0.01]">
                <button onClick={() => setOpen(isOpen ? null : s.slug)}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left border-0 bg-transparent text-white cursor-pointer select-none">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface border border-white/5 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                    {getServiceIcon(s.icon)}
                  </span>
                  <span className="min-w-0 pr-4">
                    <p className="text-lg font-semibold sm:text-xl text-white transition-colors duration-300 group-hover:text-primary">{s.title}</p>
                    <p className="mt-1 truncate text-sm text-muted-foreground">{s.description}</p>
                  </span>
                  <span className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "border-primary bg-primary text-primary-foreground rotate-180" : "border-white/10 text-muted-foreground hover:text-white"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-8 pt-2 sm:grid-cols-3 pl-0 sm:pl-16">
                    <div className="bg-surface/20 border border-white/5 rounded-2xl p-5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Duration</p>
                      <p className="mt-2 font-medium text-white text-sm sm:text-base">{s.duration}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-5">Starts at</p>
                      <p className="mt-2 text-2xl font-bold text-primary">{s.price_from}</p>
                    </div>
                    <div className="sm:col-span-1 bg-surface/20 border border-white/5 rounded-2xl p-5 shadow-sm">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Deliverables</p>
                      <ul className="mt-3 space-y-2 text-sm">
                        {s.deliverables.map(d => (
                          <li key={d} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-end pb-1">
                      <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.98] shadow-lg emerald-glow">
                        Book {s.title}
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
