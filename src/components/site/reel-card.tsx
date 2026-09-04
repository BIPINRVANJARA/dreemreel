import { Play, Clock, Eye, MapPin } from "lucide-react";
import type { Reel } from "@/lib/mock";
import { CATEGORY_LABELS, getDirectVideoUrl } from "@/lib/mock";
import { useRef, useState, useEffect } from "react";

export function ReelCard({ reel, onOpen, size = "md", autoplay = false }: { reel: Reel; onOpen: () => void; size?: "md" | "lg"; autoplay?: boolean }) {
  const vRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  const directUrl = getDirectVideoUrl(reel.video_url);

  useEffect(() => {
    setLoaded(false);
  }, [directUrl]);

  const w = size === "lg" ? "w-[280px] sm:w-[320px]" : "w-full";

  return (
    <button
      onClick={onOpen}
      className={`group relative shrink-0 ${w} aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all hover:-translate-y-1.5 duration-500 hover:border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.7)] cursor-pointer text-left`}
    >
      <video 
        key={directUrl}
        ref={vRef} 
        src={directUrl} 
        muted 
        loop 
        playsInline 
        autoPlay={true}
        preload="auto"
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:scale-105 duration-700 ${loaded ? "opacity-100" : "opacity-0"}`} 
      />
      
      {/* Editorial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/30 transition-opacity duration-300 group-hover:from-black group-hover:via-black/40" />
      
      {/* Top Badges */}
      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 z-10">
        <div className="flex items-center gap-1.5 min-w-0 max-w-[62%] rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white border border-white/15 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="truncate">{reel.store_name || CATEGORY_LABELS[reel.category] || "Promo"}</span>
        </div>
        <div className="shrink-0 inline-flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-md px-2.5 py-1 text-[9px] sm:text-[10px] font-bold text-white border border-white/15 shadow-sm">
          <Eye className="h-3 w-3 text-emerald-400 shrink-0" />
          <span>{reel.views_count ? `${reel.views_count}` : `${reel.duration_seconds || 30}s`}</span>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-3 bottom-3 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2.5 rounded-xl space-y-0.5">
        {reel.collection_name && (
          <span className="inline-block text-[9px] font-black uppercase tracking-widest text-emerald-400">
            {reel.collection_name}
          </span>
        )}
        <p className="text-xs sm:text-sm font-bold leading-tight text-white tracking-tight line-clamp-2">{reel.title}</p>
        <div className="flex items-center justify-between pt-0.5 text-[9px] text-white/60">
          <span>{reel.location || "Himmatnagar"}</span>
          <span className="text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white/80">
            {CATEGORY_LABELS[reel.category]}
          </span>
        </div>
      </div>

      {/* Center Play Button Overlay */}
      <span className="absolute inset-0 grid place-items-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none z-20">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-2xl scale-95 group-hover:scale-105 transition-transform duration-300">
          <Play className="h-5 w-5 fill-current ml-0.5" />
        </span>
      </span>
    </button>
  );
}
