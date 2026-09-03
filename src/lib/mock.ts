export type ReelCategory =
  | "new_collection"
  | "mens_wear"
  | "womens_wear"
  | "festive_collection"
  | "outfit_showcase"
  | "streetwear"
  | "ethnic"
  | "store_promotion"
  | "other";

export type Reel = {
  id: string;
  title: string;
  category: ReelCategory;
  store_name?: string;
  collection_name?: string;
  views_count?: string;
  location?: string;
  video_url: string;
  thumbnail_url: string;
  duration_seconds: number;
  featured?: boolean;
  sort_order?: number;
};

export const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;

export const MOCK_REELS: Reel[] = [];

export const HERO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export const CATEGORY_LABELS: Record<ReelCategory | "all", string> = {
  all: "All Looks",
  new_collection: "New Drops",
  mens_wear: "Men's Wear",
  womens_wear: "Women's Wear",
  festive_collection: "Festive Collections",
  outfit_showcase: "Outfit Showcases",
  streetwear: "Streetwear",
  ethnic: "Ethnic & Royal",
  store_promotion: "Store Promos",
  other: "Collaborations",
};

export const SERVICES = [
  {
    slug: "new-collection-reels",
    icon: "shirt",
    title: "New Collection Reels",
    description: "Showcase your newest arrivals by having them worn, styled, and filmed with cinematic movement that makes customers want the look.",
    deliverables: ["Styled lookbook reel (9:16)", "Cinematic color grade & sound design", "High-retention transitions", "Store location tag & promo caption"],
  },
  {
    slug: "fashion-promotion",
    icon: "film",
    title: "Fashion Promotion",
    description: "Short-form promotional content engineered specifically for Instagram Reels, algorithm virality, and maximum store discovery.",
    deliverables: ["Trending audio integration", "Hook-optimized first 3 seconds", "Call-to-action for store visits", "Direct shareable reel file"],
  },
  {
    slug: "outfit-showcases",
    icon: "sparkles",
    title: "Outfit Showcases",
    description: "Highlight individual outfits, layer combinations, texture details, accessories, and complete color palettes in crystal-clear 4K.",
    deliverables: ["Detailed fabric & texture closeups", "Full 360-degree outfit motion", "Styling breakdown", "Story highlights support"],
  },
  {
    slug: "festive-collections",
    icon: "flame",
    title: "Festive Collections",
    description: "Seasonal promotional drops tailored for Diwali, Navratri, Wedding Season, Eid, New Year, and high-demand shopping festivals.",
    deliverables: ["Festive-themed music & pacing", "Traditional & Indo-western styling", "Multi-look transition cuts", "Targeted local campaign boost"],
  },
  {
    slug: "social-media-content",
    icon: "smartphone",
    title: "Social Media Ready",
    description: "Ready-to-post vertical assets with optimized aspect ratios, store handles, and captions that clothing brands can post right away.",
    deliverables: ["Native 9:16 vertical resolution", "Optimized cover thumbnail", "Pre-written post copy & hashtags", "Fast 24-48 hr delivery"],
  },
  {
    slug: "store-collaborations",
    icon: "handshake",
    title: "Store Collaborations",
    description: "Long-term creator partnerships and monthly brand ambassador packages for regular new arrival releases and foot-traffic growth.",
    deliverables: ["Monthly content schedules", "Exclusive brand representation", "Priority shoot availability", "Dedicated store spotlight"],
  },
];

export const CREATOR_ADVANTAGES = [
  {
    number: "01",
    title: "Real Person",
    desc: "Customers don't just see clothes on a hanger. They see how the fabric flows, fits, and looks when actually worn by a real model.",
  },
  {
    number: "02",
    title: "Local Audience",
    desc: "Content connects authentically with the fashion-conscious community across Himmatnagar, Sabarkantha, and Gujarat.",
  },
  {
    number: "03",
    title: "Reels First",
    desc: "Every cut, transition, and beat drop is structured around Instagram's short-form algorithm for maximum organic reach.",
  },
  {
    number: "04",
    title: "Personality Driven",
    desc: "Natural, energetic creator presence that feels genuine and relatable rather than like a forced, traditional advertisement.",
  },
  {
    number: "05",
    title: "Store Focused",
    desc: "Every reel is crafted with one clear objective: showcasing the collection to drive customer curiosity and store visits.",
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Discover", desc: "The clothing store shares the upcoming collection, new drop, or festive theme." },
  { n: "02", title: "Select", desc: "We handpick the strongest outfits, standout colors, and high-impact combinations." },
  { n: "03", title: "Style", desc: "Create complete looks with matching accessories, footwear, and setting aesthetics." },
  { n: "04", title: "Shoot", desc: "Film dynamic fashion walks, cinematic angles, detail close-ups, and smooth transitions." },
  { n: "05", title: "Edit", desc: "Color grading, beat-sync sound design, pacing refinement, and export in 4K." },
  { n: "06", title: "Publish", desc: "The final reel goes live, putting your collection in front of thousands of potential buyers." },
];

export const COLLABORATIONS = [
  {
    id: "collab-1",
    store_name: "One Way Fashion Hue",
    category: "Men's Wear & Ethnic",
    location: "Himmatnagar",
    campaign: "Festive Collection & New Drop '26",
    description: "Turned their latest festive collection into an engaging series of high-energy fashion reels that drove significant local customer inquiries.",
    instagram_tag: "@onewayfashionhue",
  },
  {
    id: "collab-2",
    store_name: "The Urban Store",
    category: "Streetwear & Casuals",
    location: "Himmatnagar",
    campaign: "Summer Drop '26",
    description: "Styled and shot monochrome casuals and oversized tees with fast-paced aesthetic transitions tailored for viral reach.",
    instagram_tag: "@theurbanstore",
  },
];

export const COMMUNITY_STATS = [
  { value: 1.6, suffix: "K+", label: "Instagram Community", sub: "@desaii_sidhdhraj" },
  { value: 50, suffix: "+", label: "Outfits Styled", sub: "Collections featured" },
  { value: 100, suffix: "%", label: "Reels Focused", sub: "Engineered for reach" },
  { value: 1, suffix: "", label: "Himmatnagar", sub: "Local creator presence" },
];

export function getDirectVideoUrl(url: string): string {
  if (!url) return "";

  // 1. Dropbox
  if (url.includes("dropbox.com")) {
    return url.replace("dl=0", "raw=1").replace("dl=1", "raw=1");
  }

  // 2. Google Drive
  if (url.includes("drive.google.com")) {
    const matches = url.match(/\/d\/([^/]+)/) || url.match(/id=([^&]+)/);
    if (matches && matches[1]) {
      return `https://drive.google.com/uc?export=download&id=${matches[1]}`;
    }
  }

  return url;
}
