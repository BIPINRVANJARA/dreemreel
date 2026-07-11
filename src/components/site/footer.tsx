import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold">D</span>
            <span className="text-lg font-semibold">DreamReel Production</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Cinematic reels and films for couples, families, brands and events. Based in Khedbrahma, shooting across Gujarat and beyond.
          </p>
        </div>
        <div>
          <p className="label text-primary">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/#services" className="hover:text-primary">Services</a></li>
            <li><a href="/portfolio" className="hover:text-primary">Portfolio</a></li>
            <li><a href="/#testimonials" className="hover:text-primary">Testimonials</a></li>
            <li><a href="/#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="label text-primary">Reach us</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="tel:+917043081426" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" />+91 70430 81426</a></li>
            <li><a href="mailto:oneclickphotography631@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />Email us</a></li>
            <li><a href="https://wa.me/917043081426" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
            <li><a href="https://instagram.com" className="flex items-center gap-2 hover:text-primary"><Instagram className="h-4 w-4" />Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground space-y-1">
        <p>Made by <a href="https://instagram.com/kyvraone" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IG @kyvraone</a></p>
        <p>© {new Date().getFullYear()} All rights reserved by kyvraone</p>
      </div>
    </footer>
  );
}
