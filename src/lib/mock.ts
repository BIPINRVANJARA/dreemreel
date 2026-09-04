export type ReelCategory =
  | "store_launch"
  | "fashion_clothing"
  | "food_cafes"
  | "electronics_mobile"
  | "jewellery_watches"
  | "fitness_gym"
  | "automotive"
  | "business_promo"
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
  all: "All Promotions",
  store_launch: "Store Launches & Openings",
  fashion_clothing: "Clothing & Fashion",
  food_cafes: "Cafes & Restaurants",
  electronics_mobile: "Mobiles & Gadgets",
  jewellery_watches: "Jewellery & Luxury",
  fitness_gym: "Gym & Fitness",
  automotive: "Cars & Showrooms",
  business_promo: "Local Businesses",
  other: "Special Campaigns",
};

export const SERVICES = [
  {
    slug: "store-launch-campaigns",
    icon: "rocket",
    title: "Store Launches & Openings",
    description: "Generate massive opening hype and day-one footfall for your new shop, showroom, outlet, or cafe with high-energy announcement reels.",
    deliverables: ["Opening hype reel with store tour", "Location and landmark highlights", "Special opening offer callouts", "Viral Instagram promotion"],
  },
  {
    slug: "fashion-retail-promotion",
    icon: "shirt",
    title: "Fashion & Retail Promotion",
    description: "Showcase new clothing drops, footwear, accessories, and seasonal collections styled and worn with high-retention cinematic transitions.",
    deliverables: ["Model-styled lookbook reel", "Fabric closeups & outfit flow", "Store tag & shopping CTA", "4K HDR ready-to-post video"],
  },
  {
    slug: "food-cafe-showcases",
    icon: "coffee",
    title: "Cafes & Restaurants",
    description: "Make mouths water with delicious food videography, aesthetic cafe ambiance tours, kitchen action, and chef signature dish showcases.",
    deliverables: ["Aesthetic ambiance & vibe capture", "Signature dish & drink highlights", "Menu & pricing callouts", "Google Maps / location directions"],
  },
  {
    slug: "tech-mobile-gadgets",
    icon: "smartphone",
    title: "Electronics & Mobile Stores",
    description: "Highlight new smartphone unboxings, gadget features, festive discount deals, and exchange offers with tech-savvy creator presentations.",
    deliverables: ["Device hands-on & key specs", "Store festival discount announcements", "Accessories & warranty highlights", "High-conversion buyer hook"],
  },
  {
    slug: "jewellery-luxury-promos",
    icon: "sparkles",
    title: "Jewellery & Luxury Showcases",
    description: "Give gold, diamond, silver, and bridal jewellery the premium cinematic lighting and detail focus they deserve for wedding season shoppers.",
    deliverables: ["Macro detail & sparkle lighting", "Bridal & festive collection styling", "Trust & hallmarking highlights", "Store visit invitations"],
  },
  {
    slug: "business-brand-partnerships",
    icon: "handshake",
    title: "Paid Brand Collaborations",
    description: "End-to-end promotional creator partnerships for salons, fitness gyms, auto showrooms, clinics, and local services looking for measurable customer growth.",
    deliverables: ["Creator on-camera walkthrough", "Problem-solution hook scripting", "Dedicated audience distribution", "Measurable inquiry generation"],
  },
];

export const CREATOR_ADVANTAGES = [
  {
    number: "01",
    title: "On-Camera Presence",
    desc: "I step in front of the camera as your presenter, model, and narrator — giving your business a human face that customers immediately trust.",
  },
  {
    number: "02",
    title: "Targeted Local Reach",
    desc: "Reach real customers across Himmatnagar, Sabarkantha, and North Gujarat who are ready to visit your store and buy.",
  },
  {
    number: "03",
    title: "Algorithm-First Reels",
    desc: "Hook-focused first 3 seconds, dynamic pacing, and trending audio designed specifically to trigger Instagram's explore algorithm.",
  },
  {
    number: "04",
    title: "All-In-One Production",
    desc: "You don't need separate videographers, models, or scriptwriters. I handle styling, scripting, shooting, editing, and promotion.",
  },
  {
    number: "05",
    title: "Footfall & Revenue Focus",
    desc: "Every reel has one clear objective: driving real walk-in customers, phone inquiries, and sales directly to your store.",
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Brief", desc: "You share your store type, current offers, new launches, or business promotion goals." },
  { n: "02", title: "Concept", desc: "We script an engaging reel concept with a strong opening hook and compelling call-to-action." },
  { n: "03", title: "Visit & Shoot", desc: "I visit your store/location with professional gear to film cinematic angles, products, and ambiance." },
  { n: "04", title: "Edit & Polish", desc: "Fast-paced editing, color grading, beat-matching sound design, and text graphics in 4K." },
  { n: "05", title: "Review", desc: "You preview and approve the final reel before it goes live to ensure 100% brand satisfaction." },
  { n: "06", title: "Promote & Convert", desc: "The reel is published and promoted, driving hundreds of local viewers straight to your business." },
];

export const COLLABORATIONS = [
  {
    id: "collab-1",
    store_name: "One Way Fashion Hue",
    category: "Men's Fashion & Festive Store",
    location: "Himmatnagar",
    campaign: "Festive Collection Launch",
    description: "Executed a viral promotional campaign showcasing their new royal festive collection that drove massive footfall and direct customer inquiries.",
    instagram_tag: "@onewayfashionhue",
  },
];

export const COMMUNITY_STATS = [
  { value: 1.6, suffix: "K+", label: "Instagram Community", sub: "@desaii_sidhdhraj" },
  { value: 100, suffix: "+", label: "Stores & Drops Promoted", sub: "Commercial campaigns" },
  { value: 100, suffix: "%", label: "Reels & Video Focus", sub: "Engineered for reach" },
  { value: 1, suffix: "", label: "Himmatnagar & Gujarat", sub: "Hyper-local impact" },
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
