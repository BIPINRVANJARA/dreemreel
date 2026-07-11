import { createFileRoute, useNavigate, notFound } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MOCK_REELS } from "@/lib/mock";
import { ArrowLeft, Clock, MapPin, Volume2, VolumeX, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import type { Reel } from "@/lib/mock";

export const Route = createFileRoute("/reel/$id")({
  loader: async ({ params }) => {
    // Try database first
    try {
      const { data, error } = await supabase
        .from("reels")
        .select("*")
        .eq("id", params.id)
        .single();
      if (!error && data) {
        return { reel: data as Reel };
      }
    } catch (e) {
      console.error(e);
    }
    
    // Fallback to mock
    const reel = MOCK_REELS.find(r => r.id === params.id);
    if (!reel) throw notFound();
    return { reel };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.reel.title} — DreamReel` },
      { name: "description", content: `Watch "${loaderData.reel.title}" — a cinematic reel by DreamReel Production.` },
      { property: "og:title", content: `${loaderData.reel.title} — DreamReel` },
      { property: "og:image", content: loaderData.reel.thumbnail_url },
    ] : [{ title: "Reel — DreamReel" }, { name: "robots", content: "noindex" }],
  }),
  errorComponent: ({ reset }) => (
    <div className="grid min-h-dvh place-items-center bg-[#050507] text-white">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Failed to load video player</p>
        <button onClick={reset} className="rounded-full bg-primary px-6 py-2 text-sm font-semibold hover:bg-primary/90 transition">
          Retry
        </button>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="grid min-h-dvh place-items-center bg-[#050507] text-muted-foreground">
      Reel not found.
    </div>
  ),
  component: ReelPage,
});

function ReelPage() {
  const { reel } = Route.useLoaderData();
  const nav = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isMuted, setIsMuted] = useState(false);
  const [hearts, setHearts] = useState<{ id: string; x: number; y: number; rotate: number }[]>([]);
  const [showMutePrompt, setShowMutePrompt] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [reel.video_url]);

  // Handle single tap to toggle mute
  const handleSingleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(prev => !prev);
    setShowMutePrompt(true);
    setTimeout(() => setShowMutePrompt(false), 800);
  };

  // Handle double click for floating heart animation
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHeart = {
      id: crypto.randomUUID(),
      x,
      y,
      rotate: Math.random() * 40 - 20,
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 850);
  };

  // Sync mute state on video tag
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="min-h-dvh bg-[#050507] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="pointer-events-none absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]" />

      {/* Back button */}
      <button 
        onClick={() => {
          if (window.history.length > 1) {
            window.history.back();
          } else {
            nav({ to: "/#portfolio" });
          }
        }} 
        className="absolute top-6 left-6 z-30 flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur transition"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      {/* Phone Mockup Wrapper */}
      <div className="relative w-[300px] sm:w-[340px] aspect-[9/19.5] transition-transform duration-500 hover:scale-[1.01] my-8">
        {/* Outer Phone Frame */}
        <div className="relative w-full h-full rounded-[48px] border-[11px] border-zinc-900 bg-zinc-950 p-[1px] ring-1 ring-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden">
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span className="w-1 h-1 rounded-full bg-zinc-900" />
          </div>

          {/* Video Containment Screen */}
          <div 
            onClick={handleSingleClick}
            onDoubleClick={handleDoubleClick}
            className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0a0a0c] cursor-pointer"
          >
            {/* Main Video */}
            <video
              key={reel.video_url}
              ref={videoRef}
              src={reel.video_url}
              muted={isMuted}
              playsInline
              loop
              autoPlay
              controls
              onLoadedData={() => setLoaded(true)}
              className={`w-full h-full object-cover select-none bg-black transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/25 pointer-events-none z-10" />

            {/* Floating Hearts Container */}
            <AnimatePresence>
              {hearts.map((h) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 0, scale: 0.5, x: h.x - 24, y: h.y - 24, rotate: h.rotate }}
                  animate={{ opacity: 1, scale: 1.6, y: h.y - 120, rotate: h.rotate }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute pointer-events-none text-red-500 z-40"
                >
                  <Heart className="h-12 w-12 fill-current filter drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Visual Mute Banner */}
            <AnimatePresence>
              {showMutePrompt && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 m-auto z-30 h-fit w-fit bg-black/60 backdrop-blur rounded-2xl px-4 py-2 text-xs flex items-center gap-1.5 text-white font-medium border border-white/10"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {isMuted ? "Audio Muted" : "Audio Playing"}
                </motion.div>
              )}
            </AnimatePresence>

            {/* UI Badges - Top left (Category) */}
            <div className="absolute top-12 left-4 z-20 pointer-events-none">
              <span className="rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[10px] font-semibold tracking-wider text-white border border-white/10 uppercase">
                {reel.category}
              </span>
            </div>

            {/* UI Badges - Top right (Duration) */}
            <div className="absolute top-12 right-4 z-20 pointer-events-none">
              <span className="rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                <Clock className="h-3 w-3 text-primary" /> {reel.duration_seconds || 30}s
              </span>
            </div>

            {/* UI Badges - Bottom Metadata */}
            <div className="absolute bottom-12 inset-x-4 z-20 pointer-events-none text-left space-y-1">
              <h3 className="text-sm font-semibold text-white tracking-wide">
                {reel.title}
              </h3>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <MapPin className="h-3 w-3 text-primary shrink-0" />
                <span>{reel.location}</span>
              </div>
            </div>

            {/* Volume overlay indicator */}
            <div className="absolute right-4 bottom-12 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(prev => !prev);
                }}
                className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 backdrop-blur shadow cursor-pointer flex items-center justify-center"
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
