import { Instagram, Phone, MessageCircle, MapPin, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050507]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 text-left">
        <div className="md:col-span-2 space-y-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-black font-black text-xs">DS</span>
            <span className="text-lg font-black uppercase tracking-tight text-white">DESAI SIDDHRAJ</span>
          </Link>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Brand Promoter · Commercial Reels · Store Collaborations
          </p>
          <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Collaborating with retail shops, cafes, showrooms, and local brands across Gujarat to create high-impact, shareable promotional reels that drive customer discovery and store visits.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/60">Explore</p>
          <ul className="mt-3 space-y-2 text-xs font-semibold uppercase tracking-wider">
            <li><a href="/#reels" className="text-white/70 hover:text-white transition">The Promotions</a></li>
            <li><a href="/#collaborations" className="text-white/70 hover:text-white transition">Brand Collabs</a></li>
            <li><a href="/#what-i-create" className="text-white/70 hover:text-white transition">Services</a></li>
            <li><a href="/#about" className="text-white/70 hover:text-white transition">About Siddhraj</a></li>
            <li><a href="/#contact" className="text-white/70 hover:text-white transition">Book Promotion</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/60">Connect</p>
          <ul className="mt-3 space-y-2 text-xs font-semibold">
            <li>
              <a href="https://wa.me/919016353934" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition">
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp: +91 90163 53934
              </a>
            </li>
            <li>
              <a href="tel:+919016353934" className="flex items-center gap-2 text-white/70 hover:text-white transition">
                <Phone className="h-3.5 w-3.5 text-white/70" /> +91 90163 53934
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/desaii_sidhdhraj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition">
                <Instagram className="h-3.5 w-3.5 text-pink-400" /> @desaii_sidhdhraj
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/50 pt-1">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> Mehtapura, Himmatnagar, Gujarat
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Footer Section */}
      <div className="border-t border-white/5 px-6 py-6 text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Desai Siddhraj.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p>
              Made by <a href="https://www.instagram.com/kyvraone" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 font-semibold transition underline underline-offset-2">IG @kyvraone</a>
            </p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p className="text-white/50">All rights reserved by kyvraone</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/40 hidden lg:inline">Brand Promoter & Reel Creator · Himmatnagar & Gujarat</span>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition cursor-pointer"
            >
              <Lock className="h-3 w-3 text-emerald-400" /> Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
