import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#reels", label: "Reels" },
  { href: "/#collaborations", label: "Collaborations" },
  { href: "/#what-i-create", label: "What I Create" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#050507]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" : "py-5 bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-black font-black text-sm tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-105 transition">
              DS
            </span>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-white/90">
                DESAI SIDDHRAJ
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground -mt-1">
                Fashion Creator
              </span>
            </div>
          </Link>
          <div className="hidden items-center gap-1.5 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/70 transition hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="/#contact" className="hidden rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] transition hover:bg-white/90 hover:scale-[1.02] sm:inline-flex items-center gap-1.5">
              Work With Me <span className="text-xs">→</span>
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(v => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
      {/* mobile slide-over */}
      <div className={`fixed inset-0 z-30 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute inset-x-0 top-0 pt-24 pb-8 px-6 bg-[#09090c] border-b border-white/10 transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold uppercase tracking-wider text-white/90 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-white px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black">
              Work With Me →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
