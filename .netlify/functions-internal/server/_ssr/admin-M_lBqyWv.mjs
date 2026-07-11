import { o as __toESM } from "../_runtime.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bcy5RHev.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { t as CATEGORY_LABELS } from "./mock-l-OknlAM.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as LoaderCircle, F as Copy, M as Instagram, O as Mail, P as ExternalLink, V as Check, a as Video, c as Upload, f as Smartphone, g as RefreshCw, j as Link2, k as LogOut, l as Trash2, s as UserCheck, v as Plus, x as Pen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-M_lBqyWv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var syncInstagramFeed = createServerFn({ method: "POST" }).handler(createSsrRpc("5af48b25fe3e96d9d5c6dccf205e27fd954919d9b6cf8e713549f4988be44125"));
var updateInstagramConfig = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("6b24c1defd73c1302e8388f93eabc0bae30d82dbdeaf2125d42a0171ad61fc0a"));
function AdminReelVideo({ src }) {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		src,
		muted: true,
		loop: true,
		playsInline: true,
		preload: "metadata",
		onLoadedData: () => setLoaded(true),
		className: `h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`
	}, src);
}
function Admin() {
	const nav = useNavigate();
	const [activeTab, setActiveTab] = (0, import_react.useState)("leads");
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [reels, setReels] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(null);
	const [currentUserId, setCurrentUserId] = (0, import_react.useState)("");
	const [copiedSql, setCopiedSql] = (0, import_react.useState)(false);
	const [showReelModal, setShowReelModal] = (0, import_react.useState)(false);
	const [editingReelId, setEditingReelId] = (0, import_react.useState)(null);
	const [formTitle, setFormTitle] = (0, import_react.useState)("");
	const [formCategory, setFormCategory] = (0, import_react.useState)("birthday");
	const [formLocation, setFormLocation] = (0, import_react.useState)("");
	const [formDuration, setFormDuration] = (0, import_react.useState)(30);
	const [formFeatured, setFormFeatured] = (0, import_react.useState)(false);
	const [formPublished, setFormPublished] = (0, import_react.useState)(true);
	const [videoSource, setVideoSource] = (0, import_react.useState)("url");
	const [videoUrlInput, setVideoUrlInput] = (0, import_react.useState)("");
	const [videoFile, setVideoFile] = (0, import_react.useState)(null);
	const [savingReel, setSavingReel] = (0, import_react.useState)(false);
	const [igAccessToken, setIgAccessToken] = (0, import_react.useState)("");
	const [igBusinessId, setIgBusinessId] = (0, import_react.useState)("");
	const [syncingIg, setSyncingIg] = (0, import_react.useState)(false);
	const [savingIgConfig, setSavingIgConfig] = (0, import_react.useState)(false);
	const [feedCacheInfo, setFeedCacheInfo] = (0, import_react.useState)(null);
	const loadData = async () => {
		setLoading(true);
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) {
			setLoading(false);
			return;
		}
		setCurrentUserId(u.user.id);
		const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
		const admin = (roles ?? []).some((r) => r.role === "admin");
		setIsAdmin(admin);
		if (!admin) {
			setLoading(false);
			return;
		}
		const [leadsRes, reelsRes, igConfigRes, igCacheRes] = await Promise.all([
			supabase.from("leads").select("*").order("created_at", { ascending: false }),
			supabase.from("reels").select("*").order("sort_order", { ascending: true }),
			supabase.from("site_settings").select("value").eq("key", "instagram_config").maybeSingle(),
			supabase.from("site_settings").select("value").eq("key", "instagram_feed_cache").maybeSingle()
		]);
		setLeads(leadsRes.data ?? []);
		setReels(reelsRes.data ?? []);
		if (igConfigRes.data?.value) {
			const val = igConfigRes.data.value;
			setIgAccessToken(val.access_token ?? "");
			setIgBusinessId(val.business_account_id ?? "");
		}
		if (igCacheRes.data?.value) {
			const val = igCacheRes.data.value;
			setFeedCacheInfo({
				last_updated: val.last_updated,
				count: val.feed?.length ?? 0
			});
		}
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const signOut = async () => {
		await supabase.auth.signOut();
		toast.success("Signed out");
		nav({
			to: "/auth",
			replace: true
		});
	};
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
		setTimeout(() => setCopiedSql(false), 3e3);
	};
	const handleVideoFileChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setVideoFile(file);
	};
	const uploadToStorage = async (file, bucket) => {
		const ext = file.name.split(".").pop();
		const fileName = `${crypto.randomUUID()}.${ext}`;
		const { error } = await supabase.storage.from(bucket).upload(fileName, file);
		if (error) throw error;
		const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
		return data.publicUrl;
	};
	const saveReel = async (e) => {
		e.preventDefault();
		setSavingReel(true);
		toast.loading("Saving reel...", { id: "saving-reel" });
		try {
			let finalVideoUrl = videoUrlInput;
			if (videoSource === "upload") {
				if (!videoFile) throw new Error("Please select a video file to upload.");
				finalVideoUrl = await uploadToStorage(videoFile, "reels");
			}
			if (!finalVideoUrl) throw new Error("Video URL or File is required.");
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
		} catch (err) {
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
		setVideoSource("url");
		setVideoUrlInput("");
		setVideoFile(null);
	};
	const editReel = (reel) => {
		resetReelForm();
		setEditingReelId(reel.id);
		setFormTitle(reel.title);
		setFormCategory(reel.category);
		setFormLocation(reel.location ?? "");
		setFormDuration(reel.duration_seconds);
		setFormFeatured(!!reel.featured);
		setFormPublished(true);
		setVideoSource("url");
		setVideoUrlInput(reel.video_url);
		setShowReelModal(true);
	};
	const deleteReel = async (id) => {
		if (!confirm("Are you sure you want to delete this reel?")) return;
		try {
			const { error } = await supabase.from("reels").delete().eq("id", id);
			if (error) throw error;
			toast.success("Reel deleted.");
			loadData();
		} catch (err) {
			toast.error(err.message || "Failed to delete reel.");
		}
	};
	const toggleFeatured = async (reel) => {
		try {
			const { error } = await supabase.from("reels").update({ featured: !reel.featured }).eq("id", reel.id);
			if (error) throw error;
			toast.success(reel.featured ? "Removed from Mockup Showcase" : "Added to Mockup Showcase");
			loadData();
		} catch (err) {
			toast.error(err.message || "Failed to update reel.");
		}
	};
	const saveIgConfig = async (e) => {
		e.preventDefault();
		setSavingIgConfig(true);
		try {
			await updateInstagramConfig({
				access_token: igAccessToken,
				business_account_id: igBusinessId
			});
			toast.success("Instagram credentials saved!");
			loadData();
		} catch (err) {
			toast.error(err.message || "Failed to save configuration.");
		} finally {
			setSavingIgConfig(false);
		}
	};
	const triggerIgSync = async () => {
		setSyncingIg(true);
		toast.loading("Syncing feed from Instagram Graph API...", { id: "ig-sync" });
		try {
			const res = await syncInstagramFeed();
			toast.success(`Synced ${res.count} items successfully! Feed updated.`, { id: "ig-sync" });
			loadData();
		} catch (err) {
			console.error(err);
			toast.error(err.message || "Failed to sync Instagram feed.", { id: "ig-sync" });
		} finally {
			setSyncingIg(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-[#050507]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" })
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-dvh place-items-center bg-[#050507] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl text-center rounded-3xl border border-border bg-surface p-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "label text-primary flex items-center justify-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-4 w-4" }), " Setup Assistant"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-semibold text-white",
					children: "Almost there! Granting Admin Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "You're successfully signed in. To finish setting up admin access, copy the generated SQL script below and execute it inside the SQL Editor of your Supabase Dashboard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-t-xl bg-background border-t border-x border-border px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground font-mono",
							children: "setup_admin_tables.sql"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: copyClaimSql,
							className: "inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium cursor-pointer",
							children: [copiedSql ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), copiedSql ? "Copied" : "Copy SQL"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "rounded-b-xl border border-border bg-black/60 p-4 text-[11px] font-mono text-emerald-400 overflow-x-auto max-h-[300px] leading-relaxed",
						children: claimAdminSql
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://supabase.com/dashboard",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition cursor-pointer",
						children: ["Open Supabase Dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => window.location.reload(),
						className: "inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-white hover:bg-surface transition cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" }), " Checked / Reload"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: signOut,
					className: "mt-6 text-xs text-muted-foreground hover:underline",
					children: "Sign out of account"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-[#050507] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border bg-surface/50 backdrop-blur sticky top-0 z-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90",
								children: "D"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-white",
								children: "DreamReel Admin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Manage your portfolio"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden sm:flex items-center gap-1 bg-background/50 border border-border rounded-full p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab("leads"),
									className: `rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${activeTab === "leads" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"}`,
									children: "Leads"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab("reels"),
									className: `rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${activeTab === "reels" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"}`,
									children: "Manage Reels"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveTab("instagram"),
									className: `rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${activeTab === "instagram" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-white"}`,
									children: "Instagram Feed"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: signOut,
							className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-surface transition cursor-pointer text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), " Sign out"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:hidden flex border-t border-border bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("leads"),
							className: `flex-1 py-3 text-center text-xs font-medium border-b-2 transition ${activeTab === "leads" ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
							children: "Leads"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("reels"),
							className: `flex-1 py-3 text-center text-xs font-medium border-b-2 transition ${activeTab === "reels" ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
							children: "Reels"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab("instagram"),
							className: `flex-1 py-3 text-center text-xs font-medium border-b-2 transition ${activeTab === "instagram" ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`,
							children: "Instagram"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-7xl px-6 py-8",
				children: [
					activeTab === "leads" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Total Leads",
									value: leads.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "New This Week",
									value: leads.filter((l) => Date.now() - new Date(l.created_at).getTime() < 7 * 864e5).length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
									label: "Database Status",
									value: "Connected",
									valueClassName: "text-emerald-400 text-2xl font-semibold mt-2"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold text-white",
								children: "Recent inquiries"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/917043081426",
								target: "_blank",
								rel: "noreferrer",
								className: "text-xs text-primary hover:underline flex items-center gap-1",
								children: ["WhatsApp Dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto rounded-2xl border border-border bg-surface/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-surface/80 text-left text-xs text-muted-foreground border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "When"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Contact"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Event Type"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "p-4",
											children: "Message"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "p-4" })
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
									className: "divide-y divide-border",
									children: [leads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "hover:bg-surface/20 transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-xs text-muted-foreground",
												children: new Date(l.created_at).toLocaleDateString(void 0, {
													month: "short",
													day: "numeric",
													year: "numeric"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 font-medium text-white",
												children: l.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 text-xs",
												children: [l.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-white",
													children: l.phone
												}), l.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-muted-foreground flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }), l.email]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												className: "p-4 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-primary text-[10px] font-semibold",
													children: l.event_type ?? "General"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground mt-1 text-[11px]",
													children: l.event_date ?? ""
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4 text-xs text-muted-foreground max-w-[280px] truncate",
												children: l.message ?? "—"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "p-4",
												children: l.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: `https://wa.me/${l.phone.replace(/\D/g, "")}`,
													target: "_blank",
													rel: "noreferrer",
													className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-400 hover:bg-emerald-500/20 transition",
													children: ["WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
												})
											})
										]
									}, l.id)), leads.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										colSpan: 6,
										className: "p-12 text-center text-sm text-muted-foreground",
										children: "No leads received yet."
									}) })]
								})]
							})
						})] })]
					}),
					activeTab === "reels" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold text-white",
								children: "Reel Media Portfolio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Upload video clips directly, manage categories, and choose which reels appear in the Phone Mockup Showcase."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									resetReelForm();
									setShowReelModal(true);
								},
								className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Reel"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
							children: [reels.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: (e) => {
									const video = e.currentTarget.querySelector("video");
									if (video) video.play().catch(() => {});
								},
								onMouseLeave: (e) => {
									const video = e.currentTarget.querySelector("video");
									if (video) {
										video.pause();
										video.currentTime = 0;
									}
								},
								className: "group relative rounded-2xl border border-border bg-surface/20 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[9/16] bg-black",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminReelVideo, { src: r.video_url }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-3 left-3 flex flex-wrap gap-1",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label rounded-full bg-black/60 px-2.5 py-1 text-[10px] text-white backdrop-blur border border-white/10",
												children: CATEGORY_LABELS[r.category] || "Other"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute bottom-3 inset-x-3 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold text-white leading-snug",
												children: r.title
											}), r.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground mt-0.5",
												children: r.location
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition duration-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => editReel(r),
														className: "grid h-9 w-9 place-items-center rounded-full bg-white text-black hover:scale-105 transition cursor-pointer",
														title: "Edit Reel",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => toggleFeatured(r),
														className: `grid h-9 w-9 place-items-center rounded-full transition cursor-pointer ${r.featured ? "bg-primary text-primary-foreground" : "bg-black/60 text-white hover:bg-black"}`,
														title: r.featured ? "Remove from Mockup Showcase" : "Show inside Phone Mockup Showcase",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "h-4 w-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => deleteReel(r.id),
														className: "grid h-9 w-9 place-items-center rounded-full bg-red-600 text-white hover:scale-105 transition cursor-pointer",
														title: "Delete Reel",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
													})
												]
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 border-t border-border flex items-center justify-between bg-surface/40 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"Duration: ",
											r.duration_seconds,
											"s"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground flex items-center gap-1",
										children: r.video_url.includes("instagram.com") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-3.5 w-3.5 text-primary" }), " IG Embed"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-3.5 w-3.5 text-emerald-400" }), " Direct Video"] })
									})]
								})]
							}, r.id)), reels.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-full py-16 text-center border border-dashed border-border rounded-3xl bg-surface/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-10 w-10 text-muted-foreground mx-auto mb-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white font-medium",
										children: "No reels uploaded yet"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "Add your first reel to build your portfolio."
									})
								]
							})]
						})]
					}),
					activeTab === "instagram" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-2xl mx-auto rounded-3xl border border-border bg-surface/25 p-8 shadow-xl space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-xl font-semibold text-white flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-primary" }), " Instagram Business Feed"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "Link your Instagram Business Account (via Facebook Login) to display your actual Instagram feed in the footer."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: saveIgConfig,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-muted-foreground",
											children: "Facebook/IG Access Token"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "password",
											required: true,
											placeholder: "EAAW...",
											value: igAccessToken,
											onChange: (e) => setIgAccessToken(e.target.value),
											className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none text-white"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-muted-foreground",
											children: "Instagram Business Account ID"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "178414...",
											value: igBusinessId,
											onChange: (e) => setIgBusinessId(e.target.value),
											className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none text-white"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: savingIgConfig,
										className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60 cursor-pointer transition",
										children: [savingIgConfig && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Save Configuration"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "border-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold text-white",
										children: "Synchronization Cache"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Synchronize and cache feed items in database settings. This prevents API rate limits and speeds up page loads."
									})] }),
									feedCacheInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-background/50 border border-border p-4 text-xs space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Last Synced:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-white",
												children: new Date(feedCacheInfo.last_updated).toLocaleString()
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "Cached Posts count:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-semibold text-white",
												children: [feedCacheInfo.count, " items"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: triggerIgSync,
										disabled: syncingIg || !igAccessToken || !igBusinessId,
										className: "w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface py-2.5 text-sm font-medium hover:bg-background disabled:opacity-60 cursor-pointer transition text-white",
										children: [syncingIg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4 text-primary" }), "Sync Instagram Feed Now"]
									})
								]
							})
						]
					})
				]
			}),
			showReelModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-xl rounded-3xl border border-border bg-surface p-6 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-semibold text-white",
						children: editingReelId ? "Edit Reel Media" : "Add Reel Media"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Fill in the details to publish a new video."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveReel,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. Riya's Sangeet Highlight",
									value: formTitle,
									onChange: (e) => setFormTitle(e.target.value),
									className: "w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground",
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: formCategory,
										onChange: (e) => setFormCategory(e.target.value),
										className: "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-white focus:outline-none focus:border-primary",
										children: Object.entries(CATEGORY_LABELS).map(([key, label]) => {
											if (key === "all") return null;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: key,
												className: "bg-[#050507]",
												children: label
											}, key);
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground",
										children: "Location"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "e.g. Udaipur",
										value: formLocation,
										onChange: (e) => setFormLocation(e.target.value),
										className: "w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground",
										children: "Video Source"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex bg-background border border-border rounded-lg p-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setVideoSource("url"),
											className: `px-3 py-1 text-[10px] font-semibold rounded-md transition cursor-pointer ${videoSource === "url" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-3 w-3 inline mr-1" }), " Paste URL"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setVideoSource("upload"),
											className: `px-3 py-1 text-[10px] font-semibold rounded-md transition cursor-pointer ${videoSource === "upload" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3 w-3 inline mr-1" }), " Upload File"]
										})]
									})]
								}), videoSource === "url" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									required: true,
									placeholder: "https://www.instagram.com/reel/... or direct .mp4 URL",
									value: videoUrlInput,
									onChange: (e) => setVideoUrlInput(e.target.value),
									className: "w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-dashed border-border p-4 bg-background text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: "video/mp4,video/quicktime,video/webm",
										onChange: handleVideoFileChange,
										className: "hidden",
										id: "video-file-input"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										htmlFor: "video-file-input",
										className: "cursor-pointer block space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-8 w-8 text-primary mx-auto" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-medium text-white",
												children: videoFile ? videoFile.name : "Select MP4, MOV, or WEBM file"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-muted-foreground",
												children: "Max size: 50MB"
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-muted-foreground",
											children: "Duration (sec)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 1,
											value: formDuration,
											onChange: (e) => setFormDuration(parseInt(e.target.value) || 30),
											className: "w-full rounded-xl border border-border bg-background px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center h-full pt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-white",
											title: "Check this to display the video inside the Phone Mockup Showcase slider on the home page",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: formFeatured,
												onChange: (e) => setFormFeatured(e.target.checked),
												className: "rounded border-border bg-background text-primary focus:ring-primary h-4 w-4"
											}), "Show in Phone Mockup Showcase"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center h-full pt-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: formPublished,
												onChange: (e) => setFormPublished(e.target.checked),
												className: "rounded border-border bg-background text-primary focus:ring-primary h-4 w-4"
											}), "Published"]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex justify-end gap-3 pt-4 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowReelModal(false),
									className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-white hover:bg-surface cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: savingReel,
									className: "inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60 cursor-pointer",
									children: [savingReel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), editingReelId ? "Update Reel" : "Publish Reel"]
								})]
							})
						]
					})]
				})
			})
		]
	});
}
function StatCard({ label, value, valueClassName = "mt-2 text-3xl font-semibold text-white" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface/20 p-5 shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label text-[10px] text-muted-foreground tracking-wider uppercase font-bold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: valueClassName,
			children: value
		})]
	});
}
//#endregion
export { Admin as component };
