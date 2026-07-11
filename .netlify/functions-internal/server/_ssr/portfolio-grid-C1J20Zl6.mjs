import { o as __toESM } from "../_runtime.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { r as MOCK_REELS, t as CATEGORY_LABELS } from "./mock-l-OknlAM.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { E as Menu, I as Clock, M as Instagram, O as Mail, T as MessageCircle, W as ArrowUp, b as Phone, m as Search, n as X, y as Play } from "../_libs/lucide-react.mjs";
import { n as useReelStore } from "./reel-store-DnXhctN3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-grid-C1J20Zl6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "/#reels",
		label: "Reels"
	},
	{
		href: "/portfolio",
		label: "Portfolio"
	},
	{
		href: "/#services",
		label: "Services"
	},
	{
		href: "/#about",
		label: "About"
	},
	{
		href: "/#testimonials",
		label: "Testimonials"
	},
	{
		href: "/#contact",
		label: "Contact"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 20);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? "glass py-2" : "py-4 bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold",
						children: "D"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold tracking-tight",
						children: "DreamReel"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-3.5 py-2 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						className: "hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition hover:opacity-90 sm:inline-block",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 place-items-center rounded-full border border-border md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-30 md:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: () => setOpen(false),
			className: `absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `absolute inset-x-0 top-0 pt-20 pb-8 px-6 glass border-b border-border transition-transform ${open ? "translate-y-0" : "-translate-y-full"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-xl px-4 py-3 text-lg font-medium hover:bg-surface",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#contact",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground",
					children: "Book Now"
				})]
			})
		})]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-bold",
							children: "D"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-semibold",
							children: "DreamReel Production"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-muted-foreground",
						children: "Cinematic reels and films for couples, families, brands and events. Based in Khedbrahma, shooting across Gujarat and beyond."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "Quick links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#services",
							className: "hover:text-primary",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/portfolio",
							className: "hover:text-primary",
							children: "Portfolio"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#testimonials",
							className: "hover:text-primary",
							children: "Testimonials"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#contact",
							className: "hover:text-primary",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "Reach us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+917043081426",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "+91 70430 81426"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:oneclickphotography631@gmail.com",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Email us"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/917043081426",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://instagram.com",
							className: "flex items-center gap-2 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), "Instagram"]
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 px-6 py-5 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" DreamReel Production. Every moment, cinematically."
			]
		})]
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setShow(window.scrollY > 400);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "https://wa.me/917043081426?text=Hi%20DreamReel%2C%20I'd%20love%20to%20book%20a%20shoot.",
				"aria-label": "WhatsApp",
				className: "group relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl emerald-glow transition hover:scale-105",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-0 animate-ping rounded-full bg-primary opacity-30",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "tel:+917043081426",
				"aria-label": "Call",
				className: "grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://instagram.com",
				"aria-label": "Instagram",
				target: "_blank",
				rel: "noreferrer",
				className: "grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
			}),
			show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Back to top",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "grid h-11 w-11 place-items-center rounded-full glass hover:bg-surface transition animate-fade-in",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
			})
		]
	});
}
function ReelCard({ reel, onOpen, size = "md", autoplay = false }) {
	const vRef = (0, import_react.useRef)(null);
	const store = useReelStore();
	const isPlayingInline = store.currentId === reel.id;
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
	}, [reel.video_url]);
	const w = size === "lg" ? "w-[280px] sm:w-[320px]" : "w-[220px] sm:w-[260px]";
	if (isPlayingInline) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative shrink-0 ${w} aspect-[9/16] overflow-hidden rounded-2xl border border-primary/50 bg-black shadow-2xl z-20`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			src: reel.video_url,
			controls: true,
			autoPlay: true,
			playsInline: true,
			onLoadedData: () => setLoaded(true),
			className: `w-full h-full object-cover bg-black transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`
		}, reel.video_url), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: (e) => {
				e.stopPropagation();
				store.close();
			},
			className: "absolute top-3 right-3 z-30 bg-black/75 hover:bg-black text-white p-1.5 rounded-full backdrop-blur border border-white/10 shadow-lg cursor-pointer",
			"aria-label": "Close Preview",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: onOpen,
		onMouseEnter: () => {
			vRef.current?.play().catch(() => {});
		},
		onMouseLeave: () => {
			if (vRef.current) {
				vRef.current.pause();
				vRef.current.currentTime = 0;
			}
		},
		className: `group relative shrink-0 ${w} aspect-[9/16] overflow-hidden rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md transition hover:-translate-y-1 duration-300 hover:border-primary/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] cursor-pointer`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: vRef,
				src: reel.video_url,
				muted: true,
				loop: true,
				playsInline: true,
				autoPlay: autoplay,
				preload: "metadata",
				onLoadedData: () => setLoaded(true),
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`
			}, reel.video_url),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-3 top-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur border border-white/5",
					children: CATEGORY_LABELS[reel.category] || "Other"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur border border-white/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-primary" }),
						reel.duration_seconds || 30,
						"s"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-3 bottom-3 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold leading-tight text-white tracking-wide",
					children: reel.title
				}), reel.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[10px] font-medium text-white/70",
					children: reel.location
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute inset-0 grid place-items-center opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl scale-95 group-hover:scale-105 transition-transform duration-300",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current ml-0.5" })
				})
			})
		]
	});
}
var CATS = [
	"all",
	"wedding",
	"pre_wedding",
	"birthday",
	"bridal",
	"baby_shower",
	"baby_welcome",
	"anniversary",
	"commercial",
	"instagram_reel",
	"event",
	"drone"
];
function PortfolioGrid({ compact = false }) {
	const [cat, setCat] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const store = useReelStore();
	const { data: dbReels } = useQuery({
		queryKey: ["reels"],
		queryFn: async () => {
			const { data, error } = await supabase.from("reels").select("*").eq("published", true).order("sort_order", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const reelsList = dbReels && dbReels.length > 0 ? dbReels : MOCK_REELS;
	const items = (0, import_react.useMemo)(() => {
		return reelsList.filter((r) => (cat === "all" || r.category === cat) && (q === "" || (r.title + " " + (r.location ?? "")).toLowerCase().includes(q.toLowerCase())));
	}, [
		reelsList,
		cat,
		q
	]);
	const displayItems = compact ? items.slice(0, 8) : items;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Every project, one tap away."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setCat(c),
							className: `rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition cursor-pointer select-none ${cat === c ? "bg-primary text-primary-foreground shadow-md" : "border border-white/5 bg-surface/40 text-muted-foreground hover:bg-surface hover:text-white hover:border-white/10"}`,
							children: CATEGORY_LABELS[c]
						}, c))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative flex items-center shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 h-4 w-4 text-muted-foreground/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search projects...",
							className: "w-full rounded-full border border-white/10 bg-surface/50 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200 sm:w-64"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4",
					children: [displayItems.map((r, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "[&>button]:w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelCard, {
							reel: r,
							onOpen: () => store.open(displayItems, r.id),
							autoplay: idx === 0
						})
					}, r.id)), displayItems.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "col-span-full py-16 text-center text-sm text-muted-foreground",
						children: "No reels match — try a different filter."
					})]
				})
			]
		})
	});
}
//#endregion
export { SiteNav as i, PortfolioGrid as n, SiteFooter as r, FloatingActions as t };
