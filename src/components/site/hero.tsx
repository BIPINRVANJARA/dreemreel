import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
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
      {/* Siddhraj Hero Image Backdrop - High Intensity & Vibrant */}
      <img
        src="/images/siddhraj-hero.jpg"
        alt="Desai Siddhraj - Brand Promoter"
        className="absolute inset-0 h-full w-full object-cover object-center sm:object-[center_20%] opacity-80 [transform:translate3d(var(--mx,0),var(--my,0),0)_scale(1.03)] transition-transform duration-700 pointer-events-none select-none"
      />

      {/* Cinematic Lighter Gradient (Enhances backdrop visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/80 via-transparent to-[#050507]/95 pointer-events-none" />

      {/* Subtle Glow Accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-6 py-10 sm:py-16 text-center items-center">
        {/* Creator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-md shadow-lg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          DESAI SIDDHRAJ · PAID PROMOTIONS
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-balance text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg"
        >
          Your brand deserves <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 italic font-serif">
            more than a flyer.
          </span>
        </motion.h1>

        {/* Tagline Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-xl text-sm sm:text-lg font-medium text-white/90 leading-relaxed italic drop-shadow"
        >
          "I don't just promote your business. I make people want to visit it."
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] transition hover:scale-[1.03] hover:bg-white/90"
          >
            Book Paid Promotion
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#reels"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> View Reels
          </a>
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
