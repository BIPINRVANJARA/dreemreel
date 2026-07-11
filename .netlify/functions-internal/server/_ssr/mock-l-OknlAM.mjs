//#region node_modules/.nitro/vite/services/ssr/assets/mock-l-OknlAM.js
var IMG = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;
var MOCK_REELS = [
	{
		id: "r1",
		title: "Elegant Birthday Celebration",
		category: "birthday",
		location: "Ahmedabad",
		video_url: "/videos/birthday.mp4",
		thumbnail_url: IMG("1530103862676-de8c9debad1d"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r2",
		title: "Glitz & Glam Birthday Shoot",
		category: "birthday",
		location: "Khedbrahma",
		video_url: "/videos/birthday.mp4",
		thumbnail_url: IMG("1513151233558-d860c5398176"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r3",
		title: "Magic Moments Birthday",
		category: "birthday",
		location: "Studio",
		video_url: "/videos/birthday.mp4",
		thumbnail_url: IMG("1516450360452-9312f5e86fc7"),
		duration_seconds: 30
	},
	{
		id: "r4",
		title: "Blushing Bridal Portraits",
		category: "bridal",
		location: "Udaipur",
		video_url: "/videos/bridal.mp4",
		thumbnail_url: IMG("1519741497674-611481863552"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r5",
		title: "Cinematic Bridal Entry",
		category: "bridal",
		location: "Jaipur",
		video_url: "/videos/bridal.mp4",
		thumbnail_url: IMG("1591604466107-ec97de577aff"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r6",
		title: "A New Beginning Baby Shower",
		category: "baby_shower",
		location: "Vadodara",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1519689680058-324335c77eba"),
		duration_seconds: 30
	},
	{
		id: "r7",
		title: "Baby Shower Highlight Film",
		category: "baby_shower",
		location: "Home",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1555252333-9f8e92e65df9"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r8",
		title: "Joyous Baby Shower",
		category: "baby_shower",
		location: "Studio",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1502086223501-7ea6ecd79368"),
		duration_seconds: 30
	},
	{
		id: "r9",
		title: "Warm Baby Welcome Home",
		category: "baby_welcome",
		location: "Home",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1531050117351-3244a2c5a085"),
		duration_seconds: 30,
		featured: true
	},
	{
		id: "r10",
		title: "Sweet Baby Welcome Celebrations",
		category: "baby_welcome",
		location: "Ahmedabad",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1440404653325-ab127d49abc1"),
		duration_seconds: 30
	},
	{
		id: "r11",
		title: "Timeless Anniversary Film",
		category: "anniversary",
		location: "Mount Abu",
		video_url: "/videos/event.mp4",
		thumbnail_url: IMG("1519225421980-715cb0215aed"),
		duration_seconds: 30,
		featured: true
	}
];
var HERO_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4";
var CATEGORY_LABELS = {
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
	anniversary: "Anniversary Shoots"
};
var SERVICES = [
	{
		slug: "cinematic-reels",
		icon: "clapperboard",
		title: "Cinematic Reels",
		description: "Story-driven vertical films crafted for Instagram, packed with mood, motion and music.",
		duration: "48 hr turnaround",
		deliverables: [
			"1 hero reel (9:16)",
			"3 platform cutdowns",
			"Color-graded master",
			"Music licensing"
		],
		price_from: "₹1,800 / reel"
	},
	{
		slug: "pre-wedding",
		icon: "heart",
		title: "Pre-Wedding Shoot",
		description: "Location-scouted cinematic day with couple direction and edited highlight film.",
		duration: "Full-day shoot",
		deliverables: [
			"1 cinematic film (2-3 min)",
			"1 teaser reel",
			"50+ edited stills",
			"RAW backup"
		],
		price_from: "₹1,800 / reel"
	},
	{
		slug: "birthday",
		icon: "cake",
		title: "Birthday Shoot",
		description: "Candid moments, décor detail, and a reel that plays back the whole day.",
		duration: "4-6 hr coverage",
		deliverables: [
			"1 cinematic reel",
			"Event highlight film",
			"30+ stills"
		],
		price_from: "₹1,800 / reel"
	},
	{
		slug: "reel-editing",
		icon: "scissors",
		title: "Instagram Reel Editing",
		description: "Send your footage — we return a scroll-stopping edit with color, cuts and captions.",
		duration: "24-48 hr",
		deliverables: [
			"Beat-matched edit",
			"Color grade",
			"Text/motion graphics",
			"2 revisions"
		],
		price_from: "₹1,800 / reel"
	},
	{
		slug: "pro-video",
		icon: "video",
		title: "Professional Video Shoot",
		description: "Multi-cam brand, product or event coverage with a full crew and creative direction.",
		duration: "Half / full day",
		deliverables: [
			"4K master",
			"Social cutdowns",
			"Motion graphics"
		],
		price_from: "₹1,800 / reel"
	}
];
var TESTIMONIALS = [
	{
		name: "Aarav & Meera",
		handle: "@aarav.meera",
		rating: 5,
		quote: "Watching our reel felt like watching a film about us. Every frame was worth it.",
		avatar_url: IMG("1494790108377-be9c29b29330")
	},
	{
		name: "Riya Patel",
		handle: "@riyaaa",
		rating: 5,
		quote: "The birthday reel had my whole family in tears. DreamReel just gets emotion.",
		avatar_url: IMG("1438761681033-6461ffad8d80")
	},
	{
		name: "Silk Threads",
		handle: "@silkthreads",
		rating: 5,
		quote: "Our sales tripled after posting the reels they made. Insanely cinematic.",
		avatar_url: IMG("1500648767791-00dcc994a43e")
	},
	{
		name: "Kabir Sharma",
		handle: "@kabir.s",
		rating: 5,
		quote: "Best decision we made for our wedding. The team is calm, creative, professional.",
		avatar_url: IMG("1507003211169-0a1dd7228f2d")
	},
	{
		name: "Neha Joshi",
		handle: "@nehaj",
		rating: 5,
		quote: "Fast delivery, beautiful color grading, and they actually listen to feedback.",
		avatar_url: IMG("1573497019940-1c28c88b4f3e")
	}
];
var WHY_US = [
	{
		icon: "camera",
		title: "Cinema-grade equipment",
		desc: "Sony FX series, Ronin gimbals, DJI drones."
	},
	{
		icon: "sparkles",
		title: "Creative direction",
		desc: "We shape the story before we shoot a frame."
	},
	{
		icon: "zap",
		title: "Fast delivery",
		desc: "Reels in 48 hrs. Films in 7 days."
	},
	{
		icon: "sliders",
		title: "4K color grading",
		desc: "Every project finished in a color-managed pipeline."
	},
	{
		icon: "navigation",
		title: "Drone coverage",
		desc: "DGCA-friendly aerial cinematography."
	},
	{
		icon: "music",
		title: "Sound & music",
		desc: "Beat-matched licensed music, cleaned dialogue."
	},
	{
		icon: "users",
		title: "Zero-stress process",
		desc: "One point of contact, no surprises."
	}
];
var PROCESS_STEPS = [
	{
		n: "01",
		title: "Contact",
		desc: "Tell us the date, the vibe, the vision."
	},
	{
		n: "02",
		title: "Discussion",
		desc: "We build the shoot plan together."
	},
	{
		n: "03",
		title: "Shoot",
		desc: "We show up early, direct gently, capture cinematically."
	},
	{
		n: "04",
		title: "Editing",
		desc: "Story-first cut, color grade, sound design."
	},
	{
		n: "05",
		title: "Delivery",
		desc: "Files delivered in HD/4K, ready to post."
	}
];
var STATS = [
	{
		value: 100,
		suffix: "+",
		label: "Projects"
	},
	{
		value: 500,
		suffix: "+",
		label: "Reels edited"
	},
	{
		value: 50,
		suffix: "+",
		label: "Happy clients"
	},
	{
		value: 5,
		suffix: "★",
		label: "Average rating"
	}
];
//#endregion
export { SERVICES as a, WHY_US as c, PROCESS_STEPS as i, HERO_VIDEO as n, STATS as o, MOCK_REELS as r, TESTIMONIALS as s, CATEGORY_LABELS as t };
