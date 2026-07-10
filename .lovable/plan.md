
# DreamReel Production — Build Plan

Cinematic, mobile-first marketing site for DreamReel Production with a Cloud-backed admin dashboard and live Instagram reels feed.

## Design system

Palette (from your uploaded Remixed Resonance ref):
- Background `#050507`, Surface `#18181B`, Border `#27272A`
- Primary `#10B981` (emerald), Accent `#0EA5E9` (sky)
- Text `#FFFFFF` / muted `#A1A1AA`

Type: Inter (display + body), JetBrains Mono (labels/eyebrows/counters).
Radii: card 16px, control 8px, pill full. Spacing base 8/16/24/80.
Motion: Framer Motion for reveals + magnetic buttons; Lenis smooth scroll; subtle grain + emerald glow gradients; parallax hero.

All tokens go into `src/styles.css` via `@theme` (oklch conversions of the hexes) so Tailwind utilities like `bg-primary`, `text-accent` work everywhere. No hardcoded colors in components.

## Pages / routes

Single-page marketing flow with anchored sections + a couple standalone routes:

- `/` — Home (hero, reels feed, portfolio, services, before/after, testimonials, stats, process, Instagram, contact)
- `/portfolio` — Full filterable portfolio grid
- `/reel/$id` — Fullscreen reel player (deep-linkable, swipe/keyboard nav)
- `/auth` — Admin sign-in (public)
- `/_authenticated/admin` — Dashboard: reels CRUD, testimonials, services, leads, analytics

## Home sections

1. **Sticky navbar** — logo, links, "Book Now" pill; mobile hamburger with animated slide-over.
2. **Hero** — full-screen autoplay muted looping cinematic video, dark gradient overlay, emerald glow, headline "Every Moment Deserves a Cinematic Story.", sub, two CTAs (Book Now / View Portfolio), scroll indicator, subtle mouse-parallax + floating particles.
3. **Latest Reels (Instagram-style)** — horizontal snap-scroll of 9:16 preview cards; hover autoplay, tap for fullscreen modal, mute toggle, like/share, duration + category chips.
4. **Live Portfolio** — filter chips (All / Wedding / Birthday / Commercial / Reels / Events / Drone), search, lazy-loaded grid, infinite scroll; each card = cover video + hover zoom + title/location.
5. **Fullscreen Reel Player** — modal with HD video, controls, progress, prev/next, keyboard arrows, swipe on mobile.
6. **Services** — 5 interactive expanding cards (Cinematic Reels, Pre Wedding, Birthday, IG Reel Editing, Pro Video Shoot) with duration, deliverables, Book button.
7. **Before/After** — drag slider comparing raw footage → edited reel.
8. **Testimonials** — auto-scrolling marquee of animated cards (photo, name, IG handle, stars, quote).
9. **Why Choose Us** — animated timeline of 7 differentiators with icons.
10. **Stats** — 4 animated counters (100+, 500+, 50+, 5★) triggered on view.
11. **Booking Process** — 5-step animated timeline (Contact → Discussion → Shoot → Editing → Delivery).
12. **Instagram Feed** — live grid of latest reels via X-style connector (Instagram Graph API through backend).
13. **Contact** — big CTA, WhatsApp / Call / Email / Maps buttons, business info (+91 7043081426, oneclickphotography631@gmail.com).
14. **Footer** — quick links, socials, copyright.
15. **Floating actions** — WhatsApp, Call, Instagram, Back-to-top with pulse animation, always visible on mobile.

## Backend (Lovable Cloud)

Enable Cloud. Schema:

- `reels` — id, title, category, location, video_url, thumbnail_url, duration_seconds, orientation, featured (bool), published (bool), sort_order, created_at
- `services` — id, slug, title, icon, description, duration, deliverables (jsonb), price_from, sort_order
- `testimonials` — id, name, handle, avatar_url, rating, quote, published, sort_order
- `leads` — id, name, phone, email, event_type, event_date, message, source, created_at
- `site_settings` — key/value (hero video, headline, IG handle, WhatsApp number, etc.)
- `user_roles` (+ `app_role` enum, `has_role` security-definer fn) — admin gating

RLS: public SELECT on published rows for `reels/services/testimonials/site_settings` (anon); INSERT on `leads` from anon (contact form); admin-only writes via `has_role(auth.uid(), 'admin')`. Grants on every public-schema table.

Storage bucket `media` (public) for reel videos + thumbnails uploaded by admin.

Admin auth: email/password (per Cloud defaults). First admin role assigned via migration seed after user signs up (documented for you). No public signup UI — `/auth` is sign-in only.

## Instagram feed

Use the X-style Standard Connector flow for **Instagram**. On enable, I'll walk you through connecting; a TanStack server function calls the gateway to fetch latest reels/media and caches into a `instagram_cache` table (5-min TTL) so the public site reads fast and stays within rate limits.

## Admin dashboard (`/_authenticated/admin`)

- Overview: lead count, visits (basic pageview counter), latest inquiries
- Reels manager: upload video + thumbnail to Storage, set category/location/featured/published, drag-reorder
- Services & Testimonials CRUD
- Leads inbox with WhatsApp deep-link on each entry
- Site settings editor (hero video URL, headline/sub, contact info)

## Media

Placeholders for now — I'll use generated cinematic thumbnails and a tasteful sample hero video reference; you'll swap real footage via the admin uploader once you send files.

## Tech notes

- TanStack Start (already scaffolded), Tailwind v4, Framer Motion, Lenis, shadcn/ui.
- `react-player` or native `<video>` with IntersectionObserver for lazy autoplay.
- Route-level `head()` metadata per page for SEO (Khedbrahma keywords, og:image from hero).
- All heavy media lazy-loaded; posters + `preload="metadata"`; WebP thumbnails.

## Build order

1. Enable Cloud + connect Instagram connector.
2. Design tokens + global styles + fonts + layout shell (navbar, footer, floating actions).
3. Home sections top-to-bottom with placeholders.
4. Reel player modal + `/reel/$id` route.
5. `/portfolio` filtered grid.
6. Contact form → `leads` insert + WhatsApp deep link.
7. DB schema + RLS + roles + storage bucket.
8. `/auth` + `/_authenticated/admin` dashboard.
9. Instagram server function + cache table + feed section wiring.
10. SEO passes + performance polish.

Approve to start with step 1 (Cloud + Instagram connector).
