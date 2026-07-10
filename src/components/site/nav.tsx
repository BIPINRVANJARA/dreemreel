import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#reels", label: "Reels" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
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
        className={`fixed inset-x-0 top-0 z-40 transition-all ${
          scrolled ? "glass py-2" : "py-4 bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">D</span>
            <span className="text-lg font-semibold tracking-tight">DreamReel</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="/#contact" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition hover:opacity-90 sm:inline-block">
              Book Now
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(v => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
      {/* mobile slide-over */}
      <div className={`fixed inset-0 z-30 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute inset-x-0 top-0 pt-20 pb-8 px-6 glass border-b border-border transition-transform ${open ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-lg font-medium hover:bg-surface">
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
