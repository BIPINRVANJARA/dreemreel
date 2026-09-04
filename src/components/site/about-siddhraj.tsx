import { motion } from "framer-motion";
import { Sparkles, Instagram, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export function AboutSiddhraj() {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-[#060608] overflow-hidden border-t border-white/10">
      {/* Background glow layers */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-white/5 blur-[150px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Samsung Galaxy S26 Ultra Flagship Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/18.5] rounded-[20px] border-[7px] border-zinc-800/90 bg-zinc-950 p-[1px] ring-1 ring-white/20 shadow-[0_25px_65px_rgba(0,0,0,0.9)] overflow-hidden group">
              
              {/* Samsung Infinity-O Top Center Punch Hole Camera */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black border border-zinc-700/80 z-30 shadow-inner flex items-center justify-center pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 ring-1 ring-blue-500/20" />
              </div>

              {/* Antenna lines / Titanium side bands accent */}
              <div className="absolute top-16 -left-[7px] w-1 h-3 bg-zinc-700/60 rounded-r" />
              <div className="absolute top-28 -right-[7px] w-1 h-6 bg-zinc-700/60 rounded-l" />
              <div className="absolute top-38 -right-[7px] w-1 h-10 bg-zinc-700/60 rounded-l" />

              {/* Screen Container */}
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-zinc-900">
                <img
                  src="/images/siddhraj-portrait.jpg"
                  alt="Desai Siddhraj - Brand Promoter"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 select-none"
                />
                
                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Top Status Tag */}
                <div className="absolute top-8 left-3.5 z-20 pointer-events-none">
                  <span className="rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/15">
                    Official Creator
                  </span>
                </div>

                {/* Bottom Profile Details Glass Card */}
                <div className="absolute bottom-4 inset-x-3 text-left bg-black/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Desai Siddhraj
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5 tracking-tight">
                    Brand Promoter & Commercial Creator
                  </p>
                  <p className="text-[10px] text-white/70 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-emerald-400 shrink-0" /> Mehtapura, Himmatnagar
                  </p>
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
