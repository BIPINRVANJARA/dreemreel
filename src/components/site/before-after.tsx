import { useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="label text-primary">Before / After</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">From raw footage to a cinematic reel.</h2>
            <p className="mt-3 text-muted-foreground">Drag the slider. Left is straight from the camera. Right is what you post.</p>
          </div>
          <div ref={ref}
            onMouseMove={e => e.buttons === 1 && drag(e.clientX)}
            onTouchMove={e => drag(e.touches[0].clientX)}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border select-none"
          >
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80&sat=-100&exp=-10" alt="Before"
              className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80" alt="After"
                className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${pos}%` }}>
              <div
                onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); }}
                onPointerMove={e => e.buttons === 1 && drag(e.clientX)}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 cursor-ew-resize place-items-center rounded-full bg-primary text-primary-foreground shadow-lg border border-white/10 hover:scale-105 active:scale-95 transition"
              >
                <ChevronsLeftRight className="h-4 w-4" />
              </div>
            </div>
            <span className="label absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1">Raw</span>
            <span className="label absolute right-3 top-3 rounded-full bg-primary/90 px-2 py-1 text-primary-foreground">Edited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
