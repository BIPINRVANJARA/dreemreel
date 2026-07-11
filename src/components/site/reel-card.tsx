import { Play, Clock } from "lucide-react";
import type { Reel } from "@/lib/mock";
import { CATEGORY_LABELS } from "@/lib/mock";
import { useRef, useState, useEffect } from "react";

export function ReelCard({ reel, onOpen, size = "md", autoplay = false }: { reel: Reel; onOpen: () => void; size?: "md" | "lg"; autoplay?: boolean }) {
  const vRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [reel.video_url]);

  const w = size === "lg" ? "w-[280px] sm:w-[320px]" : "w-[220px] sm:w-[260px]";

  return (
    <button
      onClick={onOpen}
      className={`group relative shrink-0 ${w} aspect-[9/16] overflow-hidden rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md transition hover:-translate-y-1 duration-300 hover:border-primary/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] cursor-pointer`}
    >
      <video 
        key={reel.video_url}
        ref={vRef} 
        src={reel.video_url} 
        muted 
        loop 
        playsInline 
        autoPlay={true}
        preload="auto"
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/35" />
      <div className="absolute inset-x-3 top-3 flex items-center justify-between">
        <span className="label rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur border border-white/5">{CATEGORY_LABELS[reel.category] || "Other"}</span>
        <span className="label inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur border border-white/5">
          <Clock className="h-3 w-3 text-primary" />{reel.duration_seconds || 30}s
        </span>
      </div>
      <div className="absolute inset-x-3 bottom-3 text-left">
        <p className="text-sm font-semibold leading-tight text-white tracking-wide">{reel.title}</p>
        {reel.location && <p className="mt-1 text-[10px] font-medium text-white/70">{reel.location}</p>}
      </div>
      <span className="absolute inset-0 grid place-items-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl scale-95 group-hover:scale-105 transition-transform duration-300">
          <Play className="h-4 w-4 fill-current ml-0.5" />
        </span>
      </span>
    </button>
  );
}
