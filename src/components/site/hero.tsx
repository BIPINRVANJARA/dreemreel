import { motion } from "framer-motion";
import { Play, ArrowRight, ChevronDown, Sparkles, MapPin } from "lucide-react";
import { HERO_VIDEO } from "@/lib/mock";
import { useEffect, useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${x * 15}px`);
      el.style.setProperty("--my", `${y * 15}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const tickerItems = [
    "VISIT STORE",
    "CAPTURE PRODUCTS",
    "SCRIPT THE HOOK",
    "CINEMATIC 4K EDIT",
    "VIRAL PROMOTION",
    "LOCAL GUJARAT REACH",
    "MORE CUSTOMER FOOTFALL",
    "BOOST STORE SALES",
  ];

  return (
    <section ref={ref} className="relative isolate min-h-dvh w-full overflow-hidden bg-[#050507] flex flex-col justify-between pt-24 sm:pt-28">
      {/* Siddhraj Hero Image Backdrop */}
      <img
        src="/images/siddhraj-hero.jpg"
        alt="Desai Siddhraj - Brand Promoter"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45 [transform:translate3d(var(--mx,0),var(--my,0),0)_scale(1.04)] transition-transform duration-700 pointer-events-none select-none"
      />

      {/* Cinematic Vignette Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/90 via-[#050507]/50 to-[#050507] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.75)_65%,#050507_100%)] pointer-events-none" />

      {/* Subtle Glow Accents */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-6 py-12 sm:py-20 text-center items-center">
        {/* Creator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-md shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          DESAI SIDDHRAJ · Paid Promotions & Store Commercials
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-4xl text-balance text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]"
        >
          Your brand deserves <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 italic font-serif">
            more than a flyer.
          </span>
        </motion.h1>

        {/* Tagline Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-xl font-medium text-white/90 leading-relaxed italic"
        >
          "I don't just promote your business. I make people want to visit it."
        </motion.p>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          I create high-converting promotional reels for retail shops, cafes, showrooms, gyms, and brands across Gujarat that turn viewers into paying customers.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transition hover:scale-[1.03] hover:bg-white/90"
          >
            Book Paid Promotion
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#reels"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30"
          >
            <Play className="h-4 w-4 fill-current" /> View Promo Reels
          </a>
        </motion.div>

        {/* Location & Availability footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex items-center gap-2 text-xs font-medium text-white/50"
        >
          <MapPin className="h-3.5 w-3.5 text-emerald-400" />
          Based in Mehtapura, Himmatnagar · Available for Commercial & Store Promotions Across Gujarat
        </motion.div>
      </div>

      {/* Kinetic Statement Ticker */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-black/60 backdrop-blur-md py-3.5">
        <div className="flex w-max animate-marquee space-x-8 whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-emerald-400">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
