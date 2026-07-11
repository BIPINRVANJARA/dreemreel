import { useRef, useEffect, useState } from "react";
import { useReelStore } from "@/lib/reel-store";
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getDirectVideoUrl } from "@/lib/mock";

export function ReelPlayerModal() {
  const store = useReelStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const { reels, currentId, isOpen, close } = store;
  const currentReel = reels.find((r) => r.id === currentId);
  const currentIndex = reels.findIndex((r) => r.id === currentId);

  const directUrl = currentReel ? getDirectVideoUrl(currentReel.video_url) : "";

  // Reset loaded status on video url change
  useEffect(() => {
    setLoaded(false);
  }, [directUrl]);

  // Handle keyboard events (Escape to close, Left/Right arrows to navigate)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        store.open(reels, reels[currentIndex - 1].id);
      } else if (e.key === "ArrowRight" && currentIndex < reels.length - 1) {
        store.open(reels, reels[currentIndex + 1].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, reels, close, store]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !currentReel) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      store.open(reels, reels[currentIndex - 1].id);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < reels.length - 1) {
      store.open(reels, reels[currentIndex + 1].id);
    }
  };

  return (
    <AnimatePresence>
      <div 
        onClick={close}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
      >
        {/* Navigation - Left Arrow (hidden on first item) */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-55 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition cursor-pointer"
            aria-label="Previous Reel"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Modal content container */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.6}
          onDragEnd={(event, info) => {
            if (Math.abs(info.offset.y) > 100) {
              close();
            }
          }}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-3xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between cursor-grab active:cursor-grabbing"
        >
          {/* Main Video element */}
          <video
            key={directUrl}
            ref={videoRef}
            src={directUrl}
            autoPlay
            playsInline
            controls
            loop
            muted={isMuted}
            onLoadedData={() => setLoaded(true)}
            className={`w-full h-full object-cover select-none bg-black transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Loading spinner */}
          {!loaded && (
            <div className="absolute inset-0 grid place-items-center bg-zinc-950/60 z-30">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
          )}

          {/* Vignette overlays */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

          {/* Close & Mute Controls Header */}
          <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/10 transition cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            
            <button
              onClick={close}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/10 transition cursor-pointer"
              aria-label="Close Player"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Floating Details Footer overlay */}
          <div className="absolute bottom-6 inset-x-5 z-20 text-left pointer-events-none">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide drop-shadow-md">
              {currentReel.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-white/90">
              {currentReel.location && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-white/5 shadow-sm">
                  <MapPin className="h-3 w-3 text-primary" /> {currentReel.location}
                </span>
              )}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur border border-primary/30 shadow-sm text-primary">
                {currentReel.category.replace("_", " ").toUpperCase()}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation - Right Arrow (hidden on last item) */}
        {currentIndex < reels.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-55 hidden sm:grid h-12 w-12 place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition cursor-pointer"
            aria-label="Next Reel"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Mobile Swipe / Tap Navigation Hint overlays */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 pointer-events-none block sm:hidden">
          Swipe or tap outside to dismiss
        </div>
      </div>
    </AnimatePresence>
  );
}
