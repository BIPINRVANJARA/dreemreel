import { MessageCircle, Phone, Instagram, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2.5">
      <a
        href="https://wa.me/919016353934?text=Hi%20Siddhraj%2C%20I'd%20love%20to%20book%20a%20paid%20promotion%20for%20my%20business."
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-black font-bold shadow-2xl transition hover:scale-110 duration-300"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" aria-hidden />
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
      <a
        href="tel:+919016353934"
        aria-label="Call"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-zinc-900/90 text-white shadow-lg backdrop-blur hover:bg-zinc-800 transition"
      >
        <Phone className="h-4 w-4" />
      </a>
      <a
        href="https://www.instagram.com/desaii_sidhdhraj"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-zinc-900/90 text-white shadow-lg backdrop-blur hover:bg-zinc-800 transition hover:text-pink-400"
      >
        <Instagram className="h-4 w-4" />
      </a>
      {show && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-zinc-900/90 text-white shadow-lg backdrop-blur hover:bg-zinc-800 transition cursor-pointer"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
