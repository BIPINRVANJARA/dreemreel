import { useState } from "react";
import { MessageCircle, Phone, MapPin, Instagram, Loader2, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event_type: "Store Grand Opening & Launch",
    event_date: "",
    message: ""
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Please add your name / store name"); return; }
    if (!form.phone.trim()) { toast.error("Please provide your WhatsApp number"); return; }
    setSending(true);
    try {
      await addDoc(collection(db, "leads"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        event_type: form.event_type,
        event_date: form.event_date || null,
        message: form.message ? form.message.trim() : null,
        source: "website_promotion_inquiry",
        created_at: new Date().toISOString(),
      });
      toast.success("Promotion request sent! Siddhraj will connect on WhatsApp shortly.");
      setForm({ name: "", phone: "", event_type: "Store Grand Opening & Launch", event_date: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Couldn't send — please tap the WhatsApp button directly!");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-32 bg-[#050507] border-t border-white/10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[140px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">BOOK A PAID PROMOTION</p>
          <h2 className="mt-3 text-balance text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            LET'S PUT YOUR BUSINESS <br className="hidden sm:inline" />
            <span className="text-white/70 italic font-serif">ON THE FEED.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Opening a new store? Launching a new drop, menu, or discount campaign? Need an on-camera creator to showcase your business? Let's collaborate.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919016353934?text=Hi%20Siddhraj%2C%20I'd%20love%20to%20book%20a%20paid%20promotion%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg hover:bg-white/90 transition"
            >
              <MessageCircle className="h-4 w-4 fill-current" /> WhatsApp Me
            </a>
            <a
              href="tel:+919016353934"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              <Phone className="h-4 w-4" /> +91 90163 53934
            </a>
            <a
              href="https://www.instagram.com/desaii_sidhdhraj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
            >
              <Instagram className="h-4 w-4" /> @desaii_sidhdhraj
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white/70">
              <MapPin className="h-4 w-4 text-emerald-400" /> Mehtapura, Himmatnagar
            </span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-14 grid max-w-2xl gap-5 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-left">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              label="Your Name / Store / Business Name"
              value={form.name}
              onChange={v => setForm({ ...form, name: v })}
              required
              placeholder="e.g. Royal Cafe / Shreeji Store"
            />
            <Input
              label="WhatsApp Number"
              value={form.phone}
              onChange={v => setForm({ ...form, phone: v })}
              required
              placeholder="+91 90163 XXXXX"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                What type of business are you promoting?
              </span>
              <select
                value={form.event_type}
                onChange={e => setForm({ ...form, event_type: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-3 text-xs font-medium text-white focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none transition"
              >
                <option value="Store Grand Opening & Launch">Store Grand Opening & Launch</option>
                <option value="Clothing & Fashion Store Drop">Clothing & Fashion Store Drop</option>
                <option value="Cafe, Restaurant & Food Promo">Cafe, Restaurant & Food Promo</option>
                <option value="Mobiles, Electronics & Gadgets">Mobiles, Electronics & Gadgets</option>
                <option value="Jewellery & Luxury Goods">Jewellery & Luxury Goods</option>
                <option value="Gym, Fitness & Wellness Club">Gym, Fitness & Wellness Club</option>
                <option value="Cars & Showrooms Promo">Cars & Showrooms Promo</option>
                <option value="Special Festival Discount Campaign">Special Festival Discount Campaign</option>
                <option value="Monthly Brand Ambassador">Monthly Brand Ambassador</option>
                <option value="Other Business Promotion">Other Business Promotion</option>
              </select>
            </label>

            <Input
              label="Preferred Promotion / Shoot Date"
              value={form.event_date}
              onChange={v => setForm({ ...form, event_date: v })}
              type="date"
            />
          </div>

          <label className="grid gap-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
              Tell me about your promotion & offers
            </span>
            <textarea
              rows={4}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your store location, special opening offers, products to highlight, or target campaign dates..."
              className="rounded-xl border border-white/10 bg-zinc-900/90 p-3.5 text-xs sm:text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none transition resize-none"
            />
          </label>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 cursor-pointer shadow-xl mt-2"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            SEND COLLABORATION REQUEST →
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-left">
      <span className="text-xs font-bold uppercase tracking-wider text-white/70">
        {label}
        {required && <span className="text-emerald-400 ml-1">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-3 text-xs font-medium text-white placeholder:text-white/30 focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:outline-none transition"
      />
    </label>
  );
}
