import { motion } from "framer-motion";
import { Play, ArrowRight, ChevronDown } from "lucide-react";
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
      el.style.setProperty("--mx", `${x * 20}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative isolate min-h-dvh w-full overflow-hidden grain">
      {/* video bg */}
      <video
        autoPlay muted loop playsInline preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-70 [transform:translate3d(var(--mx,0),var(--my,0),0)_scale(1.06)] transition-transform"
        src={HERO_VIDEO}
        poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.5)_45%,rgba(5,5,7,0.95)_85%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      {/* glow */}
      <div className="pointer-events-none absolute -left-1/4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent-2/20 blur-[120px]" />

      {/* particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animation: `float${i % 3} ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float0 { to { transform: translateY(-30px) } }
        @keyframes float1 { to { transform: translate(20px,-25px) } }
        @keyframes float2 { to { transform: translate(-15px,-35px) } }
      `}</style>

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label text-primary"
        >
          Reel Creator · Khedbrahma
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Every moment deserves a{" "}
          <span className="italic text-primary">cinematic</span> story.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          We craft unforgettable reels that turn memories into masterpieces — pre-wedding, birthdays, brand and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-xl emerald-glow transition hover:scale-[1.02]">
            Book your shoot
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#reels" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-surface">
            <Play className="h-4 w-4 fill-current" /> View portfolio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute inset-x-0 bottom-6 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="label text-[10px]">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
