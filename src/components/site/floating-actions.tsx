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
    <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2">
      <a href="https://wa.me/917043081426?text=Hi%20DreamReel%2C%20I'd%20love%20to%20book%20a%20shoot." aria-label="WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl emerald-glow transition hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30" aria-hidden />
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href="tel:+917043081426" aria-label="Call"
        className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition">
        <Phone className="h-5 w-5" />
      </a>
      <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition">
        <Instagram className="h-5 w-5" />
      </a>
      {show && (
        <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition animate-fade-in">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
