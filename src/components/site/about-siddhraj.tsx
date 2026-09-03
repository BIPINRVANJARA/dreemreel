import { motion } from "framer-motion";
import { Sparkles, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function AboutSiddhraj() {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-[#060608] overflow-hidden border-t border-white/10">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-white/5 blur-[150px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Editorial Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl border border-white/15 bg-zinc-950 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
                alt="Desai Siddhraj - Fashion Creator"
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="absolute bottom-6 inset-x-6 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Desai Siddhraj
                </p>
                <p className="text-base font-bold text-white">
                  Fashion Creator & Reel Promoter
                </p>
                <p className="text-xs text-white/60 flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" /> Mehtapura, Himmatnagar
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Vision */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              MEET SIDDHRAJ
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              FASHION. CAMERA. <br />
              <span className="text-white/70 italic font-serif">COMMUNITY.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              <p>
                I'm <span className="text-white font-bold">Desai Siddhraj</span>, a fashion-focused content creator from Himmatnagar, Gujarat.
              </p>
              <p>
                I create short-form fashion content by wearing and showcasing clothing collections in a way that feels natural, energetic, and made for today's fast-moving social media audience.
              </p>
              <p>
                From new arrivals and streetwear to royal festive and wedding collections, I collaborate with clothing stores to transform their physical racks into high-engagement, shareable Instagram reels that make people stop scrolling and visit the store.
              </p>
            </div>

            {/* Quick Location & Direct Social CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919016353934?text=Hi%20Siddhraj%2C%20I'd%20like%20to%20discuss%20a%20fashion%20collaboration%20for%20my%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-white/90 transition"
              >
                <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp Me
              </a>
              <a
                href="https://www.instagram.com/desaii_sidhdhraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
              >
                <Instagram className="h-4 w-4" /> @desaii_sidhdhraj
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
