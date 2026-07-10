import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", event_type: "", event_date: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast.error("Please add your name"); return; }
    setSending(true);
    const { error } = await supabase.from("leads").insert({ ...form, source: "website", event_date: form.event_date || null });
    setSending(false);
    if (error) { toast.error("Couldn't send — try WhatsApp instead"); return; }
    toast.success("Got it! We'll be in touch shortly.");
    setForm({ name: "", phone: "", email: "", event_type: "", event_date: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label text-primary">Contact</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Ready to create something amazing?
          </h2>
          <p className="mt-4 text-muted-foreground">
            One quick note and we'll reply on WhatsApp — usually within an hour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/917043081426" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground emerald-glow hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+917043081426" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface">
              <Phone className="h-4 w-4" /> +91 70430 81426
            </a>
            <a href="mailto:oneclickphotography631@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://maps.google.com/?q=Khedbrahma" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface">
              <MapPin className="h-4 w-4" /> Khedbrahma
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mx-auto mt-14 grid max-w-3xl gap-6 rounded-3xl border border-white/5 bg-surface/20 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="grid gap-6 sm:grid-cols-2">
            <Input label="Your name" value={form.name} onChange={v => setForm({...form, name: v})} required placeholder="John Doe" />
            <Input label="Phone / WhatsApp" value={form.phone} onChange={v => setForm({...form, phone: v})} placeholder="+91 XXXXX XXXXX" />
            <Input label="Email" value={form.email} onChange={v => setForm({...form, email: v})} type="email" placeholder="john@example.com" />
            <Input label="Event date" value={form.event_date} onChange={v => setForm({...form, event_date: v})} type="date" />
          </div>
          <Input label="What are you planning?" value={form.event_type} onChange={v => setForm({...form, event_type: v})} placeholder="Pre-wedding, birthday, brand reel..." />
          <label className="grid gap-2 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tell us the vision</span>
            <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
              placeholder="Tell us about the vibes, locations, music taste, or anything special you want to capture..."
              className="rounded-xl border border-white/10 bg-background/50 p-3.5 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200 resize-none" />
          </label>
          <button type="submit" disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.98] disabled:opacity-60 cursor-pointer shadow-lg emerald-glow">
            {sending && <Loader2 className="h-4 w-4 animate-spin" />}
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, type = "text", required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-left">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </span>
      <input type={type} required={required} value={value} placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200" />
    </label>
  );
}
