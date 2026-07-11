import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Heart, MapPin, Clock, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MOCK_REELS, type Reel, getEmbedUrl } from "@/lib/mock";
import { useReelStore } from "@/lib/reel-store";

const FALLBACK_THUMBNAILS: Record<string, string> = {
  birthday: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=70",
  bridal: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=70",
  pre_wedding: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70",
  baby_shower: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=70",
  baby_welcome: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=70",
  anniversary: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=70",
  commercial: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=70",
  drone: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=70",
  other: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=70"
};

export function ReelsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Drag scroll states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Audio state
  const [isMuted, setIsMuted] = useState(true);

  // Active playing index
  const [activeId, setActiveId] = useState<string>("");

  // Auto-mute showcase video when scrolled out of view (e.g. down to portfolio section)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
          setIsMuted(true);
        }
      },
      {
        threshold: [0, 0.15, 0.5],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fetch reels from database
  const { data: dbReels } = useQuery({
    queryKey: ["reels"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reels")
        .select("*")
        .eq("published", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Reel[];
    },
  });

  const reelsList = dbReels && dbReels.length > 0 ? dbReels : MOCK_REELS;
  const featured = reelsList.filter(r => r.featured);
  const reels = (featured.length > 0 ? featured : reelsList).slice(0, 9);

  // Set first item as active initially
  useEffect(() => {
    if (reels.length > 0 && !activeId) {
      setActiveId(reels[0].id);
    }
  }, [reels, activeId]);

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeft - walk;
  };

  // Centering intersection logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = container.children;
      let closestId = activeId;
      let minDistance = Infinity;
      const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const childId = child.getAttribute("data-id");
        if (!childId) continue;
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = childId;
        }
      }

      if (closestId && closestId !== activeId) {
        setActiveId(closestId);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(handleScroll, 300);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [activeId]);

  return (
    <section ref={sectionRef} id="reels" className="relative py-24 sm:py-32 overflow-hidden bg-[#050507]">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] z-0" />
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/5 blur-[130px] z-0" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label text-primary">Featured Showcase</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl text-white">
              Cinematic Reel Showcase
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground text-sm sm:text-base">
              Scroll and interact directly with our customized reel showcase. Double-tap to show love, or single-tap to unmute audio.
            </p>
          </div>
          <a 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-5 py-2.5 text-xs font-semibold hover:bg-surface text-white transition self-start md:self-auto"
          >
            See all projects <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Snap Scroll Wrapper */}
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex w-full overflow-x-auto select-none gap-6 sm:gap-8 px-[12vw] sm:px-[25vw] md:px-[35vw] py-8 scroll-smooth scroll-snap-x-mandatory scrollbar-none relative z-10 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reels.map((reel) => (
          <ShowcasePhoneCard
            key={reel.id}
            reel={reel}
            isPlaying={activeId === reel.id}
            isMuted={isMuted}
            onMuteToggle={() => setIsMuted(!isMuted)}
          />
        ))}
      </div>
    </section>
  );
}

function ShowcasePhoneCard({
  reel,
  isPlaying,
  isMuted,
  onMuteToggle,
}: {
  reel: Reel;
  isPlaying: boolean;
  isMuted: boolean;
  onMuteToggle: () => void;
}) {
  const store = useReelStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hearts, setHearts] = useState<{ id: string; x: number; y: number; rotate: number }[]>([]);
  const [showMutePrompt, setShowMutePrompt] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const embedUrl = getEmbedUrl(reel.video_url);

  useEffect(() => {
    if (embedUrl) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [reel.video_url, embedUrl]);

  // Play / Pause video based on intersection observer result and global store state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying && !store.currentId) {
      video.play().catch((err) => {
        console.log("Autoplay blocked by browser.", err);
      });
    } else {
      video.pause();
      if (!isPlaying) {
        video.currentTime = 0;
      }
    }
  }, [isPlaying, store.currentId]);

  // Sync global mute state to the local video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle single tap to toggle mute
  const handleSingleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Stop any playing portfolio reel so sounds don't overlap
    if (store.currentId) {
      store.close();
    }
    onMuteToggle();
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

  const getCategoryLabel = (cat: string) => {
    if (cat === "birthday") return "Birthday Shoot";
    if (cat === "wedding") return "Wedding Shoot";
    if (cat === "pre_wedding") return "Pre Wedding";
    if (cat === "bridal") return "Bridal Shoot";
    return "Cinematic";
  };

  return (
    <div
      data-id={reel.id}
      className="group relative shrink-0 scroll-snap-align-center w-[270px] sm:w-[310px] aspect-[9/19.5] transition-transform duration-500 hover:scale-[1.03]"
      style={{ scrollSnapAlign: "center" }}
    >
      {/* Outer Phone Frame */}
      <div className="relative w-full h-full rounded-[44px] border-[10px] border-zinc-900 bg-zinc-950 p-[1px] ring-1 ring-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden">
        
        {/* Dynamic Island Notch */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
          <span className="w-1 h-1 rounded-full bg-zinc-900" />
        </div>

        {/* Video Containment Screen */}
        <div 
          onClick={handleSingleClick}
          onDoubleClick={handleDoubleClick}
          className="relative w-full h-full rounded-[34px] overflow-hidden bg-[#0a0a0c] cursor-pointer"
        >
          {/* Main Video or Embed */}
          {embedUrl ? (
            <iframe
              src={isPlaying ? embedUrl : ""}
              className="w-full h-full border-0 bg-black"
              allow="autoplay; encrypted-media"
            />
          ) : (
            <video
              key={reel.video_url}
              ref={videoRef}
              src={reel.video_url}
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
              onLoadedData={() => setLoaded(true)}
              className={`w-full h-full object-cover select-none bg-black transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          )}

          {/* Vignette / Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/25 pointer-events-none z-10" />

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

          {/* Visual Mute/Unmute Banner Prompt */}
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
              {getCategoryLabel(reel.category)}
            </span>
          </div>

          {/* UI Badges - Top right (Duration) */}
          <div className="absolute top-12 right-4 z-20 pointer-events-none">
            <span className="rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
              <Clock className="h-3 w-3 text-primary" /> {reel.duration_seconds || 30}s
            </span>
          </div>

          {/* UI Badges - Bottom Metadata */}
          <div className="absolute bottom-5 inset-x-4 z-20 pointer-events-none text-left space-y-1">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {reel.title}
            </h3>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <MapPin className="h-3 w-3 text-primary shrink-0" />
              <span>{reel.location}</span>
            </div>
          </div>

          {/* Volume overlay indicator showing only on hover */}
          <div className="absolute right-4 bottom-5 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMuteToggle();
              }}
              className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 backdrop-blur shadow opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
            >
              {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
