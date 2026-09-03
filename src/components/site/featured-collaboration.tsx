import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, Sparkles, MapPin, Instagram, Heart } from "lucide-react";
import { useRef, useState } from "react";
import { getDirectVideoUrl } from "@/lib/mock";

export function FeaturedCollaboration() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);

  const sampleVideo = getDirectVideoUrl("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="collaborations" className="relative py-20 sm:py-32 bg-[#07070a] overflow-hidden border-y border-white/10">
      {/* Glow aura */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Center Phone Reel */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] rounded-[42px] border-[10px] border-zinc-900 bg-zinc-950 p-[1px] ring-1 ring-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden group">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <span className="w-1 h-1 rounded-full bg-zinc-900" />
              </div>

              {/* Video */}
              <video
                ref={videoRef}
                src={sampleVideo}
                muted={isMuted}
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover select-none"
              />

              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-12 left-4 z-20">
                <span className="rounded-full bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/15">
                  Spotlight Collab
                </span>
              </div>

              {/* Volume Button */}
              <button
                onClick={toggleMute}
                className="absolute top-12 right-4 z-20 rounded-full bg-black/70 backdrop-blur-md p-2 text-white border border-white/15 hover:bg-black/90 transition cursor-pointer"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
              </button>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 inset-x-4 z-20 text-left space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  One Way Fashion Hue
                </p>
                <h4 className="text-sm font-bold text-white leading-tight">
                  Festive Royal Indo-Western Edit '26
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[10px] text-white/70">
                    <MapPin className="h-3 w-3" />
                    <span>Himmatnagar</span>
                  </div>
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-1 text-[10px] font-bold text-white/90 cursor-pointer"
                  >
                    <Heart className={`h-3.5 w-3.5 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
                    <span>{liked ? "45.9K" : "45.8K"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Story & Breakdown */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              SPOTLIGHT COLLABORATION
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              ONE LOOK. <br />
              <span className="text-white/70 italic font-serif">ONE REEL. ONE STORY.</span>
            </h2>

            <div className="space-y-4 pt-2">
              <div className="border-l-2 border-white/20 pl-4 py-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  One Way Fashion Hue
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                  Men's Fashion & Festive Wear · Himmatnagar
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
                From selecting the outfit combinations to executing dynamic cinematic transitions, every detail is engineered to make the collection stand out and drive real foot-traffic to the store.
              </p>
            </div>

            {/* Collab highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Campaign</p>
                <p className="text-sm font-bold text-white mt-1">Festive Drop '26</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Format</p>
                <p className="text-sm font-bold text-white mt-1">4K Styled Reel</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 col-span-2 sm:col-span-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">Organic Reach</p>
                <p className="text-sm font-bold text-white mt-1">45K+ Local Views</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition hover:scale-[1.02] hover:bg-white/90"
              >
                Collaborate With Me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/desaii_sidhdhraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
              >
                <Instagram className="h-4 w-4" /> View On Instagram
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
