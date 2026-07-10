-- Enable new categories in public.reel_category enum
-- Since ALTER TYPE ADD VALUE cannot run inside a transaction in Postgres < 12, and Supabase handles transactions, we run them sequentially.
-- If these fail because ADD VALUE IF NOT EXISTS is not supported, we can do it inside a PL/pgSQL block.
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

-- Trigger to auto-assign admin role on sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'admin')
  ON CONFLICT DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop trigger if exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Auto-claim admin for any existing users
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role FROM auth.users
ON CONFLICT DO NOTHING;

-- Seed reels table with the 11 real reels
-- First clear out mock reels if any exist to make it clean
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

-- Create buckets if they don't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('reels', 'reels', true, 52428800, ARRAY['video/mp4', 'video/quicktime', 'video/webm']),
  ('thumbnails', 'thumbnails', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
ON CONFLICT (id) DO NOTHING;

-- Storage policies
DROP POLICY IF EXISTS "Public Access Reels" ON storage.objects;
DROP POLICY IF EXISTS "Public Access Thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Reels" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Thumbnails" ON storage.objects;

CREATE POLICY "Public Access Reels" ON storage.objects FOR SELECT TO public USING (bucket_id = 'reels');
CREATE POLICY "Public Access Thumbnails" ON storage.objects FOR SELECT TO public USING (bucket_id = 'thumbnails');

CREATE POLICY "Admin Upload Reels" ON storage.objects FOR ALL TO authenticated 
  USING (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'reels' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin Upload Thumbnails" ON storage.objects FOR ALL TO authenticated 
  USING (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'thumbnails' AND public.has_role(auth.uid(), 'admin'));
