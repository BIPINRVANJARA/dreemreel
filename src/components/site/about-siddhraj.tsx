import { motion } from "framer-motion";
import { Sparkles, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function AboutSiddhraj() {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-[#060608] overflow-hidden border-t border-white/10">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-white/5 blur-[150px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Creator Showcase Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] aspect-[4/5] rounded-[32px] p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 border border-white/20 shadow-[0_25px_65px_rgba(0,0,0,0.85)] group">
              
              {/* Ambient Glow Backlight */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-emerald-500/20 via-white/10 to-transparent blur-xl opacity-40 group-hover:opacity-80 transition duration-700 pointer-events-none" />

              {/* Image Inner Container */}
              <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-zinc-950">
                <img
                  src="/images/siddhraj-portrait.jpg"
                  alt="Desai Siddhraj - Brand Promoter & Commercial Creator"
                  className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-all duration-700 select-none"
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white border border-white/20 shadow-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Creator
                  </span>
                  
                  <a
                    href="https://www.instagram.com/desaii_sidhdhraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-white hover:text-pink-400 border border-white/20 shadow-md transition"
                  >
                    <Instagram className="h-3.5 w-3.5 text-pink-400" />
                    @desaii_sidhdhraj
                  </a>
                </div>

                {/* Bottom Profile Details Glass Card */}
                <div className="absolute bottom-3 inset-x-3 text-left bg-black/85 backdrop-blur-md p-4 rounded-[20px] border border-white/15 shadow-2xl z-20 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-black uppercase tracking-widest text-emerald-400">
                      DESAI SIDDHRAJ
                    </p>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15">
                      Himmatnagar
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white tracking-tight leading-snug">
                    Brand Promoter & Commercial Reel Creator
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[10px] text-white/70 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-400" /> Gujarat
                    </span>
                    <span>•</span>
                    <span className="text-white/80">Available for Store Promotions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Vision */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              MEET SIDDHRAJ
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              CREATOR. PROMOTER. <br />
              <span className="text-white/70 italic font-serif">COMMUNITY.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              <p>
                I'm <span className="text-white font-bold">Desai Siddhraj</span>, a commercial reel creator and brand promoter from Himmatnagar, Gujarat.
              </p>
              <p>
                I help retail shops, showrooms, cafes, fitness gyms, tech outlets, and local brands connect with thousands of active local customers through authentic, high-impact video reels.
              </p>
              <p>
                Whether you're hosting a store grand opening, launching a seasonal collection, introducing a new cafe menu, or promoting special festival discounts — I deliver complete end-to-end promotional video production and local audience reach that drives real footfall.
              </p>
            </div>

            {/* Quick Location & Direct Social CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919016353934?text=Hi%20Siddhraj%2C%20I'd%20like%20to%20book%20a%20paid%20promotion%20for%20my%20business."
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
