import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  LogOut,
  ExternalLink,
  Loader2,
  Plus,
  Trash2,
  Edit2,
  Upload,
  Link2,
  Play,
  Check,
  Copy,
  RefreshCw,
  Eye,
  EyeOff,
  Video,
  FileImage,
  Layers,
  Heart,
  Mail,
  UserCheck,
  Smartphone
} from "lucide-react";
import { toast } from "sonner";
import { CATEGORY_LABELS, type ReelCategory, type Reel } from "@/lib/mock";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Admin — DreamReel" }, { name: "robots", content: "noindex" }] }),
  component: Admin,
});

type Lead = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  event_type: string | null;
  event_date: string | null;
  message: string | null;
  created_at: string;
};

// Thumbnail generator removed

function AdminReelVideo({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [src]);
  return (
    <video
      key={src}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedData={() => setLoaded(true)}
      className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}

function Admin() {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState<"leads" | "reels">("leads");
  
  // States
  const [leads, setLeads] = useState<Lead[]>([]);
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [currentUserId, setCurrentUserId] = useState("");
  const [copiedSql, setCopiedSql] = useState(false);

  // Form States for Reels
  const [showReelModal, setShowReelModal] = useState(false);
  const [editingReelId, setEditingReelId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState<ReelCategory>("birthday");
  const [formLocation, setFormLocation] = useState("");
  const [formDuration, setFormDuration] = useState(30);
  const [formFeatured, setFormFeatured] = useState(false);
  const [formPublished, setFormPublished] = useState(true);
  
  // Video source: "upload" | "url"
  const [videoSource, setVideoSource] = useState<"upload" | "url">("upload");
  const [videoUrlInput, setVideoUrlInput] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const [savingReel, setSavingReel] = useState(false);



  // Load Data
  const loadData = async () => {
    setLoading(true);
    const { data: u } = await supabase.auth.getUser();
    if (!u.user) {
      setLoading(false);
      return;
    }
    setCurrentUserId(u.user.id);

    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
    const admin = (roles ?? []).some(r => r.role === "admin");
    setIsAdmin(admin);

    if (!admin) {
      setLoading(false);
      return;
    }

    // Fetch leads and reels
    const [leadsRes, reelsRes] = await Promise.all([
      supabase.from("leads").select("*").order("created_at", { ascending: false }),
      supabase.from("reels").select("*").order("sort_order", { ascending: true }),
    ]);

    setLeads(leadsRes.data ?? []);
    setReels((reelsRes.data as Reel[]) ?? []);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    nav({ to: "/auth", replace: true });
  };

  // SQL query to copy-paste for auto-claim
  const claimAdminSql = `-- Run this in your Supabase SQL Editor to fully initialize your database:

-- 1. Create custom types if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'user');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'reel_category') THEN
    CREATE TYPE public.reel_category AS ENUM ('wedding','pre_wedding','birthday','commercial','instagram_reel','event','drone','other');
  END IF;
END
$$;

-- 2. Create user_roles table first (needed by has_role functions)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- 3. Create has_role functions (both enum and text overloads)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role text)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role::text = _role) $$;

-- 4. Create other tables
CREATE TABLE IF NOT EXISTS public.reels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category public.reel_category NOT NULL DEFAULT 'other',
  location text,
  video_url text NOT NULL,
  thumbnail_url text,
  duration_seconds int,
  orientation text NOT NULL DEFAULT 'vertical',
  featured boolean NOT NULL DEFAULT false,
  published boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  icon text,
  description text,
  duration text,
  deliverables jsonb NOT NULL DEFAULT '[]'::jsonb,
  price_from text,
  sort_order int NOT NULL DEFAULT 0,
  published boolean NOT NULL DEFAULT true
);

CREATE TABLE IF NOT EXISTS public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  handle text,
  avatar_url text,
  rating int NOT NULL DEFAULT 5,
  quote text NOT NULL,
  published boolean NOT NULL DEFAULT true,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text,
  event_type text,
  event_date date,
  message text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.site_settings (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- 5. Grant table permissions and enable RLS
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "users read own roles" ON public.user_roles;
CREATE POLICY "users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

GRANT SELECT ON public.reels TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.reels TO authenticated;
GRANT ALL ON public.reels TO service_role;
ALTER TABLE public.reels ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "reels public read" ON public.reels;
DROP POLICY IF EXISTS "reels admin read all" ON public.reels;
DROP POLICY IF EXISTS "reels admin write" ON public.reels;
CREATE POLICY "reels public read" ON public.reels FOR SELECT USING (published = true);
CREATE POLICY "reels admin read all" ON public.reels FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "reels admin write" ON public.reels FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

GRANT SELECT ON public.services TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.services TO authenticated;
GRANT ALL ON public.services TO service_role;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "services public read" ON public.services;
DROP POLICY IF EXISTS "services admin write" ON public.services;
CREATE POLICY "services public read" ON public.services FOR SELECT USING (published = true);
CREATE POLICY "services admin write" ON public.services FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

GRANT SELECT ON public.testimonials TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "testimonials public read" ON public.testimonials;
DROP POLICY IF EXISTS "testimonials admin write" ON public.testimonials;
CREATE POLICY "testimonials public read" ON public.testimonials FOR SELECT USING (published = true);
CREATE POLICY "testimonials admin write" ON public.testimonials FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "leads anyone can submit" ON public.leads;
DROP POLICY IF EXISTS "leads admin read" ON public.leads;
DROP POLICY IF EXISTS "leads admin write" ON public.leads;
CREATE POLICY "leads anyone can submit" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "leads admin read" ON public.leads FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "leads admin write" ON public.leads FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

GRANT SELECT ON public.site_settings TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "settings public read" ON public.site_settings;
DROP POLICY IF EXISTS "settings admin write" ON public.site_settings;
CREATE POLICY "settings public read" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "settings admin write" ON public.site_settings FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- 6. Grant admin role directly to your current logged-in user (auto-detects last registered user)
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role
FROM auth.users
ORDER BY created_at DESC
LIMIT 1
ON CONFLICT DO NOTHING;

-- 7. Enable new categories in reel_category enum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'bridal') THEN
    ALTER TYPE public.reel_category ADD VALUE 'bridal';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'baby_shower') THEN
    ALTER TYPE public.reel_category ADD VALUE 'baby_shower';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'baby_welcome') THEN
    ALTER TYPE public.reel_category ADD VALUE 'baby_welcome';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'anniversary') THEN
    ALTER TYPE public.reel_category ADD VALUE 'anniversary';
  END IF;
END
$$;

-- 8. Setup the auto-claim trigger so all future sign-ups get admin role immediately
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'admin')
  ON CONFLICT DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('reels', 'reels', true, 52428800, ARRAY['video/mp4', 'video/quicktime', 'video/webm']),
  ('thumbnails', 'thumbnails', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public Access Reels" ON storage.objects;
DROP POLICY IF EXISTS "Public Access Thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Reels" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Thumbnails" ON storage.objects;

CREATE POLICY "Public Access Reels" ON storage.objects FOR SELECT TO public USING (bucket_id = 'reels');
CREATE POLICY "Public Access Thumbnails" ON storage.objects FOR SELECT TO public USING (bucket_id = 'thumbnails');
CREATE POLICY "Admin Upload Reels" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin')) WITH CHECK (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin Upload Thumbnails" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin')) WITH CHECK (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin'));

-- 10. Seed database reels
DELETE FROM public.reels;
INSERT INTO public.reels (title, category, location, video_url, thumbnail_url, duration_seconds, featured, published, sort_order)
VALUES
  ('Elegant Birthday Celebration', 'birthday', 'Ahmedabad', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=70', 30, true, true, 1),
  ('Glitz & Glam Birthday Shoot', 'birthday', 'Khedbrahma', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=70', 30, true, true, 2),
  ('Magic Moments Birthday', 'birthday', 'Studio', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=70', 30, false, true, 3),
  ('Blushing Bridal Portraits', 'bridal', 'Udaipur', '/videos/bridal.mp4', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70', 30, true, true, 4),
  ('Cinematic Bridal Entry', 'bridal', 'Jaipur', '/videos/bridal.mp4', 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=70', 30, true, true, 5),
  ('A New Beginning Baby Shower', 'baby_shower', 'Vadodara', '/videos/event.mp4', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=70', 30, false, true, 6),
  ('Baby Shower Highlight Film', 'baby_shower', 'Home', '/videos/event.mp4', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=70', 30, true, true, 7),
  ('Joyous Baby Shower', 'baby_shower', 'Studio', '/videos/event.mp4', 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=70', 30, false, true, 8),
  ('Warm Baby Welcome Home', 'baby_welcome', 'Home', '/videos/event.mp4', 'https://images.unsplash.com/photo-1531050117351-3244a2c5a085?auto=format&fit=crop&w=800&q=70', 30, true, true, 9),
  ('Sweet Baby Welcome Celebrations', 'baby_welcome', 'Ahmedabad', '/videos/event.mp4', 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=70', 30, false, true, 10),
  ('Timeless Anniversary Film', 'anniversary', 'Mount Abu', '/videos/event.mp4', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=70', 30, true, true, 11);

-- 6. Enable new categories in reel_category enum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'bridal') THEN
    ALTER TYPE public.reel_category ADD VALUE 'bridal';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'baby_shower') THEN
    ALTER TYPE public.reel_category ADD VALUE 'baby_shower';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'baby_welcome') THEN
    ALTER TYPE public.reel_category ADD VALUE 'baby_welcome';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid WHERE t.typname = 'reel_category' AND e.enumlabel = 'anniversary') THEN
    ALTER TYPE public.reel_category ADD VALUE 'anniversary';
  END IF;
END
$$;

-- 7. Setup the auto-claim trigger so all future sign-ups get admin role immediately
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'admin')
  ON CONFLICT DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 8. Create storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('reels', 'reels', true, 52428800, ARRAY['video/mp4', 'video/quicktime', 'video/webm']),
  ('thumbnails', 'thumbnails', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public Access Reels" ON storage.objects;
DROP POLICY IF EXISTS "Public Access Thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Reels" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Thumbnails" ON storage.objects;

CREATE POLICY "Public Access Reels" ON storage.objects FOR SELECT TO public USING (bucket_id = 'reels');
CREATE POLICY "Public Access Thumbnails" ON storage.objects FOR SELECT TO public USING (bucket_id = 'thumbnails');
CREATE POLICY "Admin Upload Reels" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin')) WITH CHECK (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admin Upload Thumbnails" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin')) WITH CHECK (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin'));

-- 9. Seed database reels
DELETE FROM public.reels;
INSERT INTO public.reels (title, category, location, video_url, thumbnail_url, duration_seconds, featured, published, sort_order)
VALUES
  ('Elegant Birthday Celebration', 'birthday', 'Ahmedabad', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=70', 30, true, true, 1),
  ('Glitz & Glam Birthday Shoot', 'birthday', 'Khedbrahma', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=70', 30, true, true, 2),
  ('Magic Moments Birthday', 'birthday', 'Studio', '/videos/birthday.mp4', 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=70', 30, false, true, 3),
  ('Blushing Bridal Portraits', 'bridal', 'Udaipur', '/videos/bridal.mp4', 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70', 30, true, true, 4),
  ('Cinematic Bridal Entry', 'bridal', 'Jaipur', '/videos/bridal.mp4', 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=70', 30, true, true, 5),
  ('A New Beginning Baby Shower', 'baby_shower', 'Vadodara', '/videos/event.mp4', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=70', 30, false, true, 6),
  ('Baby Shower Highlight Film', 'baby_shower', 'Home', '/videos/event.mp4', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=70', 30, true, true, 7),
  ('Joyous Baby Shower', 'baby_shower', 'Studio', '/videos/event.mp4', 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=70', 30, false, true, 8),
  ('Warm Baby Welcome Home', 'baby_welcome', 'Home', '/videos/event.mp4', 'https://images.unsplash.com/photo-1531050117351-3244a2c5a085?auto=format&fit=crop&w=800&q=70', 30, true, true, 9),
  ('Sweet Baby Welcome Celebrations', 'baby_welcome', 'Ahmedabad', '/videos/event.mp4', 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=70', 30, false, true, 10),
  ('Timeless Anniversary Film', 'anniversary', 'Mount Abu', '/videos/event.mp4', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=70', 30, true, true, 11);
`;

  const copyClaimSql = () => {
    navigator.clipboard.writeText(claimAdminSql);
    setCopiedSql(true);
    toast.success("SQL copied! Paste it in the Supabase SQL Editor.");
    setTimeout(() => setCopiedSql(false), 3000);
  };

  // Video Upload file change
  const handleVideoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setVideoFile(file);
  };

  // File Upload Helper (Cloudinary Signed Upload)
  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudName = "aq0tldut";
    const apiKey = "179994451972317";
    const apiSecret = "EL1senqfqEdZbjFEYbDFx9cc1uw";
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const folder = "dreamreel";

    const paramsToSign = {
      folder: folder,
      timestamp: timestamp,
    };
    
    const sortedKeys = Object.keys(paramsToSign).sort();
    const stringToSign = sortedKeys
      .map(key => `${key}=${paramsToSign[key as keyof typeof paramsToSign]}`)
      .join("&") + apiSecret;

    const encoder = new TextEncoder();
    const data = encoder.encode(stringToSign);
    const hashBuffer = await window.crypto.subtle.digest("SHA-1", data);
    const hashHex = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("folder", folder);
    formData.append("signature", hashHex);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || "Failed to upload to Cloudinary.");
    }

    const resData = await res.json();
    return resData.secure_url;
  };

  // Reel Save Form
  const saveReel = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingReel(true);
    toast.loading("Saving reel...", { id: "saving-reel" });

    try {
      let finalVideoUrl = "";

      if (videoSource === "url") {
        if (!videoUrlInput) {
          throw new Error("Please enter a video link.");
        }
        finalVideoUrl = videoUrlInput;
      } else {
        // Upload source
        if (videoFile) {
          finalVideoUrl = await uploadToCloudinary(videoFile);
        } else if (editingReelId) {
          finalVideoUrl = videoUrlInput;
        } else {
          throw new Error("Please select a video file to upload.");
        }
      }

      if (!finalVideoUrl) throw new Error("Video file or link is required.");

      const payload = {
        title: formTitle,
        category: formCategory,
        location: formLocation || null,
        video_url: finalVideoUrl,
        thumbnail_url: null,
        duration_seconds: formDuration,
        featured: formFeatured,
        published: formPublished,
        sort_order: reels.length + 1
      };

      if (editingReelId) {
        const { error } = await supabase.from("reels").update(payload).eq("id", editingReelId);
        if (error) throw error;
        toast.success("Reel updated successfully!", { id: "saving-reel" });
      } else {
        const { error } = await supabase.from("reels").insert([payload]);
        if (error) throw error;
        toast.success("Reel added successfully!", { id: "saving-reel" });
      }

      setShowReelModal(false);
      resetReelForm();
      loadData();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to save reel.", { id: "saving-reel" });
    } finally {
      setSavingReel(false);
    }
  };

  const resetReelForm = () => {
    setEditingReelId(null);
    setFormTitle("");
    setFormCategory("birthday");
    setFormLocation("");
    setFormDuration(30);
    setFormFeatured(false);
    setFormPublished(true);
    setVideoSource("upload");
    setVideoUrlInput("");
    setVideoFile(null);
  };

  const editReel = (reel: Reel) => {
    resetReelForm();
    setEditingReelId(reel.id);
    setFormTitle(reel.title);
    setFormCategory(reel.category);
    setFormLocation(reel.location ?? "");
    setFormDuration(reel.duration_seconds);
    setFormFeatured(!!reel.featured);
    setFormPublished(true); // default to true since it's editable
    
    // Auto-detect if video is an upload (Supabase Storage) or external link
    const isUpload = reel.video_url.includes("/storage/v1/object/public/");
    setVideoSource(isUpload ? "upload" : "url");
    setVideoUrlInput(reel.video_url);
    setShowReelModal(true);
  };

  const deleteReel = async (id: string) => {
    if (!confirm("Are you sure you want to delete this reel?")) return;
    try {
      const { error } = await supabase.from("reels").delete().eq("id", id);
      if (error) throw error;
      toast.success("Reel deleted.");
      loadData();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete reel.");
    }
  };

  const toggleFeatured = async (reel: Reel) => {
    try {
      const { error } = await supabase.from("reels").update({ featured: !reel.featured }).eq("id", reel.id);
      if (error) throw error;
      toast.success(reel.featured ? "Removed from Mockup Showcase" : "Added to Mockup Showcase");
      loadData();
    } catch (err: any) {
      toast.error(err.message || "Failed to update reel.");
    }
  };



  if (loading) {
    return (
      <div className="grid min-h-dvh place-items-center bg-[#050507]">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  // Display user ID and SQL helper if not admin
  if (!isAdmin) {
    return (
      <div className="grid min-h-dvh place-items-center bg-[#050507] px-4">
        <div className="max-w-2xl text-center rounded-3xl border border-border bg-surface p-8 shadow-2xl">
          <p className="label text-primary flex items-center justify-center gap-1.5">
            <UserCheck className="h-4 w-4" /> Setup Assistant
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Almost there! Granting Admin Access</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You're successfully signed in. To finish setting up admin access, copy the generated SQL script below and execute it inside the SQL Editor of your Supabase Dashboard.
          </p>

          <div className="mt-6 text-left">
            <div className="flex items-center justify-between rounded-t-xl bg-background border-t border-x border-border px-4 py-2">
              <span className="text-xs text-muted-foreground font-mono">setup_admin_tables.sql</span>
              <button
                onClick={copyClaimSql}
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium cursor-pointer"
              >
                {copiedSql ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copiedSql ? "Copied" : "Copy SQL"}
              </button>
            </div>
            <pre className="rounded-b-xl border border-border bg-black/60 p-4 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-[300px] leading-relaxed">
              {claimAdminSql}
            </pre>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition cursor-pointer"
            >
              Open Supabase Dashboard <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-white hover:bg-surface transition cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Checked / Reload
            </button>
          </div>
          <button onClick={signOut} className="mt-6 text-xs text-muted-foreground hover:underline">
            Sign out of account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-[#050507] text-white">
      <header className="border-b border-border bg-surface/50 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90"
            >
              D
            </Link>
            <div>
              <p className="text-sm font-semibold text-white">DreamReel Admin</p>
              <p className="text-xs text-muted-foreground">Manage your portfolio</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden sm:flex items-center gap-1 bg-background/50 border border-border rounded-full p-1">
            <button
              onClick={() => setActiveTab("leads")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
                activeTab === "leads" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"
              }`}
            >
              Leads
            </button>
            <button
              onClick={() => setActiveTab("reels")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
                activeTab === "reels" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"
              }`}
            >
              Manage Reels
            </button>

          </nav>

          <button
            onClick={signOut}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-surface transition cursor-pointer text-white"
          >
            <LogOut className="h-3.5 w-3.5" /> Sign out
          </button>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="sm:hidden flex border-t border-border bg-surface">
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex-1 py-3 text-center text-xs font-medium border-b-2 transition ${
              activeTab === "leads" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            Leads
          </button>
          <button
            onClick={() => setActiveTab("reels")}
            className={`flex-1 py-3 text-center text-xs font-medium border-b-2 transition ${
              activeTab === "reels" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            Reels
          </button>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        {/* LEADS TAB */}
        {activeTab === "leads" && (
          <section className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard label="Total Leads" value={leads.length} />
              <StatCard
                label="New This Week"
                value={leads.filter((l) => Date.now() - new Date(l.created_at).getTime() < 7 * 864e5).length}
              />
              <StatCard
                label="Database Status"
                value="Connected"
                valueClassName="text-emerald-400 text-2xl font-semibold mt-2"
              />
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Recent inquiries</h2>
                <a
                  href="https://wa.me/917043081426"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  WhatsApp Dashboard <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto rounded-2xl border border-border bg-surface/30">
                <table className="w-full text-sm">
                  <thead className="bg-surface/80 text-left text-xs text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4">When</th>
                      <th className="p-4">Name</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Event Type</th>
                      <th className="p-4">Message</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {leads.map((l) => (
                      <tr key={l.id} className="hover:bg-surface/20 transition-colors">
                        <td className="p-4 text-xs text-muted-foreground">
                          {new Date(l.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="p-4 font-medium text-white">{l.name}</td>
                        <td className="p-4 text-xs">
                          {l.phone && <div className="text-white">{l.phone}</div>}
                          {l.email && <div className="text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" />{l.email}</div>}
                        </td>
                        <td className="p-4 text-xs">
                          <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-primary text-[10px] font-semibold">
                            {l.event_type ?? "General"}
                          </span>
                          <div className="text-muted-foreground mt-1 text-[11px]">{l.event_date ?? ""}</div>
                        </td>
                        <td className="p-4 text-xs text-muted-foreground max-w-[280px] truncate">{l.message ?? "—"}</td>
                        <td className="p-4">
                          {l.phone && (
                            <a
                              href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-400 hover:bg-emerald-500/20 transition"
                            >
                              WhatsApp <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                    {leads.length === 0 && (
                      <tr>
                        <td colSpan={6} className="p-12 text-center text-sm text-muted-foreground">
                          No leads received yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {leads.map((l) => (
                  <div key={l.id} className="rounded-2xl border border-border bg-surface/30 p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-white text-sm">{l.name}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {new Date(l.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-primary text-[10px] font-semibold shrink-0">
                        {l.event_type ?? "General"}
                      </span>
                    </div>
                    <div className="text-xs space-y-1">
                      {l.phone && <div className="text-white">{l.phone}</div>}
                      {l.email && <div className="text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" />{l.email}</div>}
                      {l.event_date && <div className="text-muted-foreground text-[11px]">Event: {l.event_date}</div>}
                    </div>
                    {l.message && (
                      <p className="text-xs text-muted-foreground line-clamp-2">{l.message}</p>
                    )}
                    {l.phone && (
                      <a
                        href={`https://wa.me/${l.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs text-emerald-400 hover:bg-emerald-500/20 transition"
                      >
                        WhatsApp <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                ))}
                {leads.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
                    No leads received yet.
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* REELS TAB */}
        {activeTab === "reels" && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-white">Reel Media Portfolio</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Upload video clips directly, manage categories, and choose which reels appear in the Phone Mockup Showcase.
                </p>
              </div>
              <button
                onClick={() => {
                  resetReelForm();
                  setShowReelModal(true);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 sm:px-4 sm:py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition cursor-pointer"
              >
                <Plus className="h-4 w-4" /> Add Reel
              </button>
            </div>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {reels.map((r) => (
                <div
                  key={r.id}
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) video.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                  className="group relative rounded-2xl border border-border bg-surface/20 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <AdminReelVideo src={r.video_url} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      <span className="label rounded-full bg-black/60 px-2.5 py-1 text-[10px] text-white backdrop-blur border border-white/10">
                        {CATEGORY_LABELS[r.category] || "Other"}
                      </span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <p className="text-sm font-semibold text-white leading-snug">{r.title}</p>
                      {r.location && <p className="text-[10px] text-muted-foreground mt-0.5">{r.location}</p>}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition duration-300">
                      <div className="flex gap-2">
                        <button
                          onClick={() => editReel(r)}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white text-black hover:scale-105 transition cursor-pointer"
                          title="Edit Reel"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => toggleFeatured(r)}
                          className={`grid h-9 w-9 place-items-center rounded-full transition cursor-pointer ${
                            r.featured ? "bg-primary text-primary-foreground" : "bg-black/60 text-white hover:bg-black"
                          }`}
                          title={r.featured ? "Remove from Mockup Showcase" : "Show inside Phone Mockup Showcase"}
                        >
                          <Smartphone className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteReel(r.id)}
                          className="grid h-9 w-9 place-items-center rounded-full bg-red-600 text-white hover:scale-105 transition cursor-pointer"
                          title="Delete Reel"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-border flex items-center justify-between bg-surface/40 text-xs">
                    <span className="text-muted-foreground">Duration: {r.duration_seconds}s</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Video className="h-3.5 w-3.5 text-emerald-400" /> Direct Video
                    </span>
                  </div>
                </div>
              ))}

              {reels.length === 0 && (
                <div className="col-span-full py-16 text-center border border-dashed border-border rounded-3xl bg-surface/10">
                  <Video className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-white font-medium">No reels uploaded yet</p>
                  <p className="text-xs text-muted-foreground mt-1">Add your first reel to build your portfolio.</p>
                </div>
              )}
            </div>
          </section>
        )}


      </main>

      {/* REEL ADD / EDIT MODAL */}
      {showReelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="w-full max-w-xl rounded-3xl border border-border bg-surface p-6 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto text-left">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {editingReelId ? "Edit Reel Media" : "Add Reel Media"}
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Fill in the details to publish a new video.
              </p>
            </div>

            <form onSubmit={saveReel} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted-foreground">Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Riya's Sangeet Highlight"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as ReelCategory)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-white focus:outline-none focus:border-primary"
                  >
                    {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
                      if (key === "all") return null;
                      return (
                        <option key={key} value={key} className="bg-[#050507]">
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Udaipur"
                    value={formLocation}
                    onChange={(e) => setFormLocation(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* VIDEO SOURCE SELECTOR */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-muted-foreground">Video Source</label>
                  <div className="flex bg-background border border-border rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => setVideoSource("url")}
                      className={`px-3 py-1 text-[10px] font-semibold rounded-md transition cursor-pointer ${
                        videoSource === "url" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <Link2 className="h-3.5 w-3.5 inline mr-1" /> Paste Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setVideoSource("upload")}
                      className={`px-3 py-1 text-[10px] font-semibold rounded-md transition cursor-pointer ${
                        videoSource === "upload" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <Upload className="h-3.5 w-3.5 inline mr-1" /> Upload File
                    </button>
                  </div>
                </div>

                {videoSource === "url" ? (
                  <div className="space-y-1.5">
                    <input
                      type="url"
                      required
                      placeholder="e.g. https://www.dropbox.com/s/xyz/video.mp4?dl=0 or direct MP4 link"
                      value={videoUrlInput}
                      onChange={(e) => setVideoUrlInput(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary"
                    />
                    <p className="text-[10px] text-amber-400 font-medium leading-relaxed">
                      ⚠️ Social media links (Instagram, YouTube) are webpage templates and cannot autoplay natively or support sound toggles. Please upload the file directly, or paste a Dropbox / Google Drive link (we automatically convert these to raw streams to save your Supabase space!).
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="rounded-xl border border-dashed border-border p-4 bg-background text-center">
                      <input
                        type="file"
                        accept="video/mp4,video/quicktime,video/webm"
                        onChange={handleVideoFileChange}
                        className="hidden"
                        id="video-file-input"
                      />
                      <label htmlFor="video-file-input" className="cursor-pointer block space-y-2">
                        <Video className="h-8 w-8 text-primary mx-auto" />
                        <div className="text-xs font-medium text-white">
                          {videoFile ? videoFile.name : "Select MP4, MOV, or WEBM file"}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Max size: 50MB</div>
                      </label>
                    </div>
                    {editingReelId && !videoFile && (
                      <p className="text-[10px] text-muted-foreground mt-1">
                        Keep empty to retain the current video, or select a new file to replace it.
                      </p>
                    )}
                  </>
                )}
              </div>



              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted-foreground">Duration (sec)</label>
                  <input
                    type="number"
                    min={1}
                    value={formDuration}
                    onChange={(e) => setFormDuration(parseInt(e.target.value) || 30)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="flex items-center h-full pt-5">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-white" title="Check this to display the video inside the Phone Mockup Showcase slider on the home page">
                    <input
                      type="checkbox"
                      checked={formFeatured}
                      onChange={(e) => setFormFeatured(e.target.checked)}
                      className="rounded border-border bg-background text-primary focus:ring-primary h-4 w-4"
                    />
                    Show in Phone Mockup Showcase
                  </label>
                </div>
                <div className="flex items-center h-full pt-5">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-white">
                    <input
                      type="checkbox"
                      checked={formPublished}
                      onChange={(e) => setFormPublished(e.target.checked)}
                      className="rounded border-border bg-background text-primary focus:ring-primary h-4 w-4"
                    />
                    Published
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setShowReelModal(false)}
                  className="rounded-full border border-border px-5 py-2 text-sm font-medium text-white hover:bg-surface cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingReel}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60 cursor-pointer"
                >
                  {savingReel && <Loader2 className="h-4 w-4 animate-spin" />}
                  {editingReelId ? "Update Reel" : "Publish Reel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  valueClassName = "mt-2 text-3xl font-semibold text-white"
}: {
  label: string;
  value: string | number;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-surface/30 via-surface/20 to-surface/10 p-5 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
      <p className="label text-[10px] text-muted-foreground tracking-wider uppercase font-bold">{label}</p>
      <p className={valueClassName}>{value}</p>
    </div>
  );
}
