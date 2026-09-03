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

export const MOCK_REELS: Reel[] = [
  {
    id: "r1",
    title: "Festive Kurta & Royal Indo-Western Edit",
    category: "festive_collection",
    store_name: "One Way Fashion Hue",
    collection_name: "Festive Drop '26",
    views_count: "45.8K",
    location: "Himmatnagar",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 30,
    featured: true,
    sort_order: 1
  },
  {
    id: "r2",
    title: "Urban Streetwear & Oversized Drops",
    category: "streetwear",
    store_name: "Urban Threads",
    collection_name: "Monochrome Street",
    views_count: "38.2K",
    location: "Mehtapura",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 28,
    featured: true,
    sort_order: 2
  },
  {
    id: "r3",
    title: "Premium Men's Linen & Casual Blazers",
    category: "mens_wear",
    store_name: "The Men's Club",
    collection_name: "Summer Linen '26",
    views_count: "29.4K",
    location: "Himmatnagar",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 30,
    featured: true,
    sort_order: 3
  },
  {
    id: "r4",
    title: "Royal Heritage Sherwani & Wedding Lookbook",
    category: "ethnic",
    store_name: "Shreeji Ethnic Studio",
    collection_name: "Royal Groom Wear",
    views_count: "62.1K",
    location: "Gujarat",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 30,
    featured: true,
    sort_order: 4
  },
  {
    id: "r5",
    title: "Navratri Special Chaniya Choli & Kediya Drop",
    category: "festive_collection",
    store_name: "Heritage Attire",
    collection_name: "Garba Vibes '26",
    views_count: "54.7K",
    location: "Himmatnagar",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 30,
    featured: false,
    sort_order: 5
  },
  {
    id: "r6",
    title: "Store Launch & Festive Collection Showcase",
    category: "store_promotion",
    store_name: "One Way Fashion Hue",
    collection_name: "Store Grand Opening",
    views_count: "41.3K",
    location: "Himmatnagar",
    video_url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail_url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=75",
    duration_seconds: 30,
    featured: true,
    sort_order: 6
  }
];

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
