export type ReelCategory =
  | "wedding" | "pre_wedding" | "birthday" | "commercial"
  | "instagram_reel" | "event" | "drone" | "other"
  | "bridal" | "baby_shower" | "baby_welcome" | "anniversary";

export type Reel = {
  id: string;
  title: string;
  category: ReelCategory;
  location?: string;
  video_url: string;
  thumbnail_url: string;
  duration_seconds: number;
  featured?: boolean;
};

export const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;


export const MOCK_REELS: Reel[] = [
  { id: "r1", title: "Elegant Birthday Celebration", category: "birthday", location: "Ahmedabad", video_url: "/videos/birthday.mp4", thumbnail_url: IMG("1530103862676-de8c9debad1d"), duration_seconds: 30, featured: true },
  { id: "r2", title: "Glitz & Glam Birthday Shoot", category: "birthday", location: "Khedbrahma", video_url: "/videos/birthday.mp4", thumbnail_url: IMG("1513151233558-d860c5398176"), duration_seconds: 30, featured: true },
  { id: "r3", title: "Magic Moments Birthday", category: "birthday", location: "Studio", video_url: "/videos/birthday.mp4", thumbnail_url: IMG("1516450360452-9312f5e86fc7"), duration_seconds: 30 },
  { id: "r4", title: "Blushing Bridal Portraits", category: "bridal", location: "Udaipur", video_url: "/videos/bridal.mp4", thumbnail_url: IMG("1519741497674-611481863552"), duration_seconds: 30, featured: true },
  { id: "r5", title: "Cinematic Bridal Entry", category: "bridal", location: "Jaipur", video_url: "/videos/bridal.mp4", thumbnail_url: IMG("1591604466107-ec97de577aff"), duration_seconds: 30, featured: true },
  { id: "r6", title: "A New Beginning Baby Shower", category: "baby_shower", location: "Vadodara", video_url: "/videos/event.mp4", thumbnail_url: IMG("1519689680058-324335c77eba"), duration_seconds: 30 },
  { id: "r7", title: "Baby Shower Highlight Film", category: "baby_shower", location: "Home", video_url: "/videos/event.mp4", thumbnail_url: IMG("1555252333-9f8e92e65df9"), duration_seconds: 30, featured: true },
  { id: "r8", title: "Joyous Baby Shower", category: "baby_shower", location: "Studio", video_url: "/videos/event.mp4", thumbnail_url: IMG("1502086223501-7ea6ecd79368"), duration_seconds: 30 },
  { id: "r9", title: "Warm Baby Welcome Home", category: "baby_welcome", location: "Home", video_url: "/videos/event.mp4", thumbnail_url: IMG("1531050117351-3244a2c5a085"), duration_seconds: 30, featured: true },
  { id: "r10", title: "Sweet Baby Welcome Celebrations", category: "baby_welcome", location: "Ahmedabad", video_url: "/videos/event.mp4", thumbnail_url: IMG("1440404653325-ab127d49abc1"), duration_seconds: 30 },
  { id: "r11", title: "Timeless Anniversary Film", category: "anniversary", location: "Mount Abu", video_url: "/videos/event.mp4", thumbnail_url: IMG("1519225421980-715cb0215aed"), duration_seconds: 30, featured: true },
];

export const HERO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4";

export const CATEGORY_LABELS: Record<ReelCategory | "all", string> = {
  all: "All",
  wedding: "Wedding",
  pre_wedding: "Pre-Wedding",
  birthday: "Birthday Shoots",
  commercial: "Commercial",
  instagram_reel: "Reels",
  event: "Events",
  drone: "Drone",
  other: "Other",
  bridal: "Bridal Shoots",
  baby_shower: "Baby Shower",
  baby_welcome: "Baby Welcome",
  anniversary: "Anniversary Shoots",
};

export const SERVICES = [
  { slug: "wedding-highlight-reel", icon: "clapperboard", title: "Wedding Highlight Reel", description: "Premium, cinematic film capturing your big day's best emotions, highlights, and grand moments.", duration: "Full-day / multi-day coverage", deliverables: ["Cinematic highlight film", "Drone coverage included", "Color-graded master", "4K delivery"], price_from: "Starting from ₹4,999" },
  { slug: "engagement-reel", icon: "heart", title: "Engagement Reel", description: "Beautiful vertical reel capturing the exchange of rings, candid smiles, and couple portraits.", duration: "2-4 hours coverage", deliverables: ["1 cinematic reel (9:16)", "Color-graded edit", "Licensed background music", "Fast turnaround"], price_from: "₹2,499" },
  { slug: "one-reel-shoot-edit", icon: "video", title: "1 Reel Shoot + Edit", description: "Single reel shoot with pro camera equipment and a high-end edit tailored for your feed.", duration: "1-2 hours shoot", deliverables: ["1 polished vertical reel", "Professional transition editing", "Color grading & sound design", "Social media ready"], price_from: "₹1,599" },
  { slug: "three-reels-shoot-edit", icon: "video", title: "3 Reels Shoot + Edit", description: "Bundle of 3 custom reels shot and edited. Perfect for consistent social presence and brand building.", duration: "Half-day shoot", deliverables: ["3 cinematic vertical reels", "Custom branding/captions", "Sound design & color grading", "High retention edits"], price_from: "₹3,499" },
  { slug: "emergency-booking", icon: "clock", title: "Emergency Booking", description: "Last-minute booking request? Skip the queue and secure your slot with priority support.", duration: "Instant scheduling", deliverables: ["Priority slot allocation", "Same-day communication", "Accelerated delivery options"], price_from: "Extra charges apply" },
];

export const TESTIMONIALS = [
  { name: "Aarav & Meera", handle: "@aarav.meera", rating: 5, quote: "Watching our reel felt like watching a film about us. Every frame was worth it.", avatar_url: IMG("1494790108377-be9c29b29330") },
  { name: "Riya Patel", handle: "@riyaaa", rating: 5, quote: "The birthday reel had my whole family in tears. DreamReel just gets emotion.", avatar_url: IMG("1438761681033-6461ffad8d80") },
  { name: "Silk Threads", handle: "@silkthreads", rating: 5, quote: "Our sales tripled after posting the reels they made. Insanely cinematic.", avatar_url: IMG("1500648767791-00dcc994a43e") },
  { name: "Kabir Sharma", handle: "@kabir.s", rating: 5, quote: "Best decision we made for our wedding. The team is calm, creative, professional.", avatar_url: IMG("1507003211169-0a1dd7228f2d") },
  { name: "Neha Joshi", handle: "@nehaj", rating: 5, quote: "Fast delivery, beautiful color grading, and they actually listen to feedback.", avatar_url: IMG("1573497019940-1c28c88b4f3e") },
];

export const WHY_US = [
  { icon: "camera", title: "Cinema-grade equipment", desc: "Sony FX series, Ronin gimbals, DJI drones." },
  { icon: "sparkles", title: "Creative direction", desc: "We shape the story before we shoot a frame." },
  { icon: "zap", title: "Fast delivery", desc: "Reels in 48 hrs. Films in 7 days." },
  { icon: "sliders", title: "4K color grading", desc: "Every project finished in a color-managed pipeline." },
  { icon: "navigation", title: "Drone coverage", desc: "DGCA-friendly aerial cinematography." },
  { icon: "music", title: "Sound & music", desc: "Beat-matched licensed music, cleaned dialogue." },
  { icon: "users", title: "Zero-stress process", desc: "One point of contact, no surprises." },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Contact", desc: "Tell us the date, the vibe, the vision." },
  { n: "02", title: "Discussion", desc: "We build the shoot plan together." },
  { n: "03", title: "Shoot", desc: "We show up early, direct gently, capture cinematically." },
  { n: "04", title: "Editing", desc: "Story-first cut, color grade, sound design." },
  { n: "05", title: "Delivery", desc: "Files delivered in HD/4K, ready to post." },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 500, suffix: "+", label: "Reels edited" },
  { value: 50, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "★", label: "Average rating" },
];

export function getEmbedUrl(url: string): string | null {
  if (!url) return null;

  // 1. YouTube
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("shorts/")) {
      videoId = url.split("shorts/")[1]?.split(/[?#]/)[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1]?.split(/[?#]/)[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split(/[?#]/)[0];
    } else if (url.includes("embed/")) {
      videoId = url.split("embed/")[1]?.split(/[?#]/)[0];
    }
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0`;
    }
  }

  // 2. Instagram
  if (url.includes("instagram.com")) {
    let shortcode = "";
    const matches = url.match(/(?:reel|p)\/([^/?#]+)/);
    if (matches && matches[1]) {
      shortcode = matches[1];
    }
    if (shortcode) {
      return `https://www.instagram.com/reel/${shortcode}/embed/`;
    }
  }

  return null;
}
