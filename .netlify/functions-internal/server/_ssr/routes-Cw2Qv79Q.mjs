import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { a as SERVICES, c as WHY_US, i as PROCESS_STEPS, n as HERO_VIDEO, o as STATS, r as MOCK_REELS, s as TESTIMONIALS } from "./mock-l-OknlAM.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as LoaderCircle, B as ChevronDown, C as Music, D as MapPin, G as ArrowRight, H as Camera, I as Clock, L as Clapperboard, N as Heart, O as Mail, R as CircleQuestionMark, S as Navigation, T as MessageCircle, U as Cake, V as Check, _ as Quote, a as Video, b as Phone, d as Sparkles, h as Scissors, i as Volume2, o as Users, p as SlidersVertical, r as VolumeX, t as Zap, u as Star, v as Plus, w as Minus, y as Play, z as ChevronsLeftRight } from "../_libs/lucide-react.mjs";
import { i as SiteNav, n as PortfolioGrid, r as SiteFooter, t as FloatingActions } from "./portfolio-grid-C1J20Zl6.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cw2Qv79Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width - .5;
			const y = (e.clientY - r.top) / r.height - .5;
			el.style.setProperty("--mx", `${x * 20}px`);
			el.style.setProperty("--my", `${y * 20}px`);
		};
		el.addEventListener("mousemove", onMove);
		return () => el.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative isolate min-h-dvh w-full overflow-hidden grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "auto",
				className: "absolute inset-0 h-full w-full object-cover opacity-70 [transform:translate3d(var(--mx,0),var(--my,0),0)_scale(1.06)] transition-transform",
				src: HERO_VIDEO,
				poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,7,0.5)_45%,rgba(5,5,7,0.95)_85%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-1/4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent-2/20 blur-[120px]" }),
			Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute rounded-full bg-white/40",
				style: {
					width: 2 + i % 3,
					height: 2 + i % 3,
					left: `${i * 37 % 100}%`,
					top: `${i * 53 % 100}%`,
					animation: `float${i % 3} ${6 + i % 5}s ease-in-out ${i * .3}s infinite alternate`
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes float0 { to { transform: translateY(-30px) } }
        @keyframes float1 { to { transform: translate(20px,-25px) } }
        @keyframes float2 { to { transform: translate(-15px,-35px) } }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pt-28 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "label text-primary",
						children: "Reel Creator · Khedbrahma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .1
						},
						className: "mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]",
						children: [
							"Every moment deserves a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "cinematic"
							}),
							" story."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .25
						},
						className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: "We craft unforgettable reels that turn memories into masterpieces — pre-wedding, birthdays, brand and beyond."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .4
						},
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-xl emerald-glow transition hover:scale-[1.02]",
							children: ["Book your shoot", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#reels",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" }), " View portfolio"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.2,
							duration: 1
						},
						className: "absolute inset-x-0 bottom-6 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label text-[10px]",
								children: "Scroll"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 animate-bounce" })]
						})
					})
				]
			})
		]
	});
}
function ReelsShowcase() {
	const scrollRef = (0, import_react.useRef)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const [startX, setStartX] = (0, import_react.useState)(0);
	const [scrollLeft, setScrollLeft] = (0, import_react.useState)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(true);
	const [activeId, setActiveId] = (0, import_react.useState)("");
	const { data: dbReels } = useQuery({
		queryKey: ["reels"],
		queryFn: async () => {
			const { data, error } = await supabase.from("reels").select("*").eq("published", true).order("sort_order", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const reelsList = dbReels && dbReels.length > 0 ? dbReels : MOCK_REELS;
	const featured = reelsList.filter((r) => r.featured);
	const reels = (featured.length > 0 ? featured : reelsList).slice(0, 9);
	(0, import_react.useEffect)(() => {
		if (reels.length > 0 && !activeId) setActiveId(reels[0].id);
	}, [reels, activeId]);
	const handleMouseDown = (e) => {
		const el = scrollRef.current;
		if (!el) return;
		setIsDragging(true);
		setStartX(e.pageX - el.offsetLeft);
		setScrollLeft(el.scrollLeft);
	};
	const handleMouseLeave = () => {
		setIsDragging(false);
	};
	const handleMouseUp = () => {
		setIsDragging(false);
	};
	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const el = scrollRef.current;
		if (!el) return;
		const walk = (e.pageX - el.offsetLeft - startX) * 1.5;
		el.scrollLeft = scrollLeft - walk;
	};
	(0, import_react.useEffect)(() => {
		const container = scrollRef.current;
		if (!container) return;
		const handleScroll = () => {
			const children = container.children;
			let closestId = activeId;
			let minDistance = Infinity;
			const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				const childId = child.getAttribute("data-id");
				if (!childId) continue;
				const rect = child.getBoundingClientRect();
				const childCenter = rect.left + rect.width / 2;
				const distance = Math.abs(childCenter - containerCenter);
				if (distance < minDistance) {
					minDistance = distance;
					closestId = childId;
				}
			}
			if (closestId && closestId !== activeId) setActiveId(closestId);
		};
		container.addEventListener("scroll", handleScroll, { passive: true });
		const timer = setTimeout(handleScroll, 300);
		return () => {
			container.removeEventListener("scroll", handleScroll);
			clearTimeout(timer);
		};
	}, [activeId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "reels",
		className: "relative py-24 sm:py-32 overflow-hidden bg-[#050507]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-1/4 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/5 blur-[130px] z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-primary",
							children: "Featured Showcase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl text-white",
							children: "Cinematic Reel Showcase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted-foreground text-sm sm:text-base",
							children: "Scroll and interact directly with our customized reel showcase. Double-tap to show love, or single-tap to unmute audio."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/portfolio",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur px-5 py-2.5 text-xs font-semibold hover:bg-surface text-white transition self-start md:self-auto",
						children: ["See all projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				onMouseDown: handleMouseDown,
				onMouseLeave: handleMouseLeave,
				onMouseUp: handleMouseUp,
				onMouseMove: handleMouseMove,
				className: `flex w-full overflow-x-auto select-none gap-6 sm:gap-8 px-[12vw] sm:px-[25vw] md:px-[35vw] py-8 scroll-smooth scroll-snap-x-mandatory scrollbar-none relative z-10 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`,
				style: { scrollSnapType: "x mandatory" },
				children: reels.map((reel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowcasePhoneCard, {
					reel,
					isPlaying: activeId === reel.id,
					isMuted,
					onMuteToggle: () => setIsMuted(!isMuted)
				}, reel.id))
			})
		]
	});
}
function ShowcasePhoneCard({ reel, isPlaying, isMuted, onMuteToggle }) {
	const videoRef = (0, import_react.useRef)(null);
	const [hearts, setHearts] = (0, import_react.useState)([]);
	const [showMutePrompt, setShowMutePrompt] = (0, import_react.useState)(false);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
	}, [reel.video_url]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		if (isPlaying) video.play().catch((err) => {
			console.log("Autoplay blocked by browser.", err);
		});
		else {
			video.pause();
			video.currentTime = 0;
		}
	}, [isPlaying]);
	(0, import_react.useEffect)(() => {
		if (videoRef.current) videoRef.current.muted = isMuted;
	}, [isMuted]);
	const handleSingleClick = (e) => {
		e.stopPropagation();
		onMuteToggle();
		setShowMutePrompt(true);
		setTimeout(() => setShowMutePrompt(false), 800);
	};
	const handleDoubleClick = (e) => {
		e.stopPropagation();
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const newHeart = {
			id: crypto.randomUUID(),
			x,
			y,
			rotate: Math.random() * 40 - 20
		};
		setHearts((prev) => [...prev, newHeart]);
		setTimeout(() => {
			setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
		}, 850);
	};
	const getCategoryLabel = (cat) => {
		if (cat === "birthday") return "Birthday Shoot";
		if (cat === "wedding") return "Wedding Shoot";
		if (cat === "pre_wedding") return "Pre Wedding";
		if (cat === "bridal") return "Bridal Shoot";
		return "Cinematic";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-id": reel.id,
		className: "group relative shrink-0 scroll-snap-align-center w-[270px] sm:w-[310px] aspect-[9/19.5] transition-transform duration-500 hover:scale-[1.03]",
		style: { scrollSnapAlign: "center" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full h-full rounded-[44px] border-[10px] border-zinc-900 bg-zinc-950 p-[1px] ring-1 ring-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-zinc-800" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-zinc-900" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: handleSingleClick,
				onDoubleClick: handleDoubleClick,
				className: "relative w-full h-full rounded-[34px] overflow-hidden bg-[#0a0a0c] cursor-pointer",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: reel.video_url,
						muted: isMuted,
						playsInline: true,
						loop: true,
						preload: "metadata",
						onLoadedData: () => setLoaded(true),
						className: `w-full h-full object-cover select-none bg-black transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`
					}, reel.video_url),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/25 pointer-events-none z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: hearts.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .5,
							x: h.x - 24,
							y: h.y - 24,
							rotate: h.rotate
						},
						animate: {
							opacity: 1,
							scale: 1.6,
							y: h.y - 120,
							rotate: h.rotate
						},
						exit: { opacity: 0 },
						transition: {
							duration: .7,
							ease: "easeOut"
						},
						className: "absolute pointer-events-none text-red-500 z-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-12 w-12 fill-current filter drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" })
					}, h.id)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showMutePrompt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: { opacity: 0 },
						className: "absolute inset-0 m-auto z-30 h-fit w-fit bg-black/60 backdrop-blur rounded-2xl px-4 py-2 text-xs flex items-center gap-1.5 text-white font-medium border border-white/10",
						children: [isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" }), isMuted ? "Audio Muted" : "Audio Playing"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-12 left-4 z-20 pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-black/65 backdrop-blur-md px-3 py-1 text-[10px] font-semibold tracking-wider text-white border border-white/10 uppercase",
							children: getCategoryLabel(reel.category)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-12 right-4 z-20 pointer-events-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10 flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-primary" }),
								" ",
								reel.duration_seconds || 30,
								"s"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-5 inset-x-4 z-20 pointer-events-none text-left space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold text-white tracking-wide",
							children: reel.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 text-[10px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: reel.location })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-4 bottom-5 z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: (e) => {
								e.stopPropagation();
								onMuteToggle();
							},
							className: "bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 backdrop-blur shadow opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center",
							children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5" })
						})
					})
				]
			})]
		})
	});
}
function getServiceIcon(icon) {
	switch (icon) {
		case "clapperboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
		case "heart": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
		case "cake": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
		case "scissors": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
		case "video": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" });
	}
}
function Services() {
	const [open, setOpen] = (0, import_react.useState)(SERVICES[0].slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "relative py-24 sm:py-32 bg-background overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[120px] z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white",
						children: "A menu of cinematic services."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground text-sm sm:text-base",
						children: "Pick a lane, or mix a few — we shape every project around your day."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 divide-y divide-white/5 border-y border-white/5",
				children: SERVICES.map((s) => {
					const isOpen = open === s.slug;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group/item transition-colors duration-300 hover:bg-white/[0.01]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : s.slug),
							className: "group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left border-0 bg-transparent text-white cursor-pointer select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface border border-white/5 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]",
									children: getServiceIcon(s.icon)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 pr-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-semibold sm:text-xl text-white transition-colors duration-300 group-hover:text-primary",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 truncate text-sm text-muted-foreground",
										children: s.description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${isOpen ? "border-primary bg-primary text-primary-foreground rotate-180" : "border-white/10 text-muted-foreground hover:text-white"}`,
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: false,
							animate: {
								height: isOpen ? "auto" : 0,
								opacity: isOpen ? 1 : 0
							},
							transition: {
								duration: .35,
								ease: "easeOut"
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 pb-8 pt-2 sm:grid-cols-3 pl-0 sm:pl-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-surface/20 border border-white/5 rounded-2xl p-5 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
												children: "Duration"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 font-medium text-white text-sm sm:text-base",
												children: s.duration
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-5",
												children: "Starts at"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-2xl font-bold text-primary",
												children: s.price_from
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-1 bg-surface/20 border border-white/5 rounded-2xl p-5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
											children: "Deliverables"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2 text-sm",
											children: s.deliverables.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
											}, d))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col justify-end pb-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#contact",
											className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.98] shadow-lg emerald-glow",
											children: [
												"Book ",
												s.title,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
											]
										})
									})
								]
							})
						})]
					}, s.slug);
				})
			})]
		})]
	});
}
function BeforeAfter() {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const drag = (clientX) => {
		const r = ref.current?.getBoundingClientRect();
		if (!r) return;
		setPos(Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Before / After"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "From raw footage to a cinematic reel."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Drag the slider. Left is straight from the camera. Right is what you post."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref,
					onMouseMove: (e) => e.buttons === 1 && drag(e.clientX),
					onTouchMove: (e) => drag(e.touches[0].clientX),
					className: "relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border select-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80&sat=-100&exp=-10",
							alt: "Before",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 overflow-hidden",
							style: { clipPath: `inset(0 0 0 ${pos}%)` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
								alt: "After",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 w-0.5 bg-primary",
							style: { left: `${pos}%` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onPointerDown: (e) => {
									e.currentTarget.setPointerCapture(e.pointerId);
								},
								onPointerMove: (e) => e.buttons === 1 && drag(e.clientX),
								className: "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 cursor-ew-resize place-items-center rounded-full bg-primary text-primary-foreground shadow-lg border border-white/10 hover:scale-105 active:scale-95 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeftRight, { className: "h-4 w-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1",
							children: "Raw"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label absolute right-3 top-3 rounded-full bg-primary/90 px-2 py-1 text-primary-foreground",
							children: "Edited"
						})
					]
				})]
			})
		})
	});
}
function Testimonials() {
	const row = [...TESTIMONIALS, ...TESTIMONIALS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		className: "relative overflow-hidden py-24 sm:py-32 bg-[#050507]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-accent-2/5 blur-[120px] z-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white",
						children: "Kind words from real couples & brands."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 [--dur:40s] relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-[marquee_var(--dur)_linear_infinite] gap-5 px-6 hover:[animation-play-state:paused]",
					children: row.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative w-[320px] shrink-0 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-surface/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.avatar_url,
										alt: "",
										className: "h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium text-white",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-xs text-muted-foreground",
											children: t.handle
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 shrink-0" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex gap-0.5 text-primary",
								children: Array.from({ length: t.rating }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground italic",
								children: [
									"\"",
									t.quote,
									"\""
								]
							})
						]
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes marquee { to { transform: translateX(-50%) } }` })]
			})
		]
	});
}
function getWhyIcon(icon) {
	switch (icon) {
		case "camera": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-4 w-4 text-primary" });
		case "sparkles": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" });
		case "zap": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" });
		case "sliders": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersVertical, { className: "h-4 w-4 text-primary" });
		case "navigation": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-4 w-4 text-primary" });
		case "music": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "h-4 w-4 text-primary" });
		case "users": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 text-primary" });
	}
}
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative py-24 sm:py-32 bg-[#050507]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 md:grid-cols-[1fr_1.3fr] md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:sticky md:top-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-primary",
							children: "Why DreamReel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white",
							children: "Made by people who love cinema."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed",
							children: "We shoot on cinema-grade gear, direct with intention, and edit like every frame counts. Because it does."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "relative border-l border-white/5 pl-8 ml-4 sm:ml-6 space-y-10",
					children: WHY_US.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -left-[48px] top-0.5 grid h-8 w-8 place-items-center rounded-full bg-surface border border-white/10 ring-4 ring-background transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10",
								children: getWhyIcon(w.icon)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold text-white transition-colors duration-300 group-hover:text-primary",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground leading-relaxed",
								children: w.desc
							})
						]
					}, i))
				})]
			})
		})]
	});
}
function Counter({ value }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let started = false;
		const io = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting || started) return;
			started = true;
			const start = performance.now();
			const dur = 1400;
			const tick = (t) => {
				const p = Math.min(1, (t - start) / dur);
				setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: n
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px] z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-xl p-8 text-center transition hover:border-primary/30 hover:bg-surface/50 hover:-translate-y-1 duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-4xl font-bold tracking-tight sm:text-5xl text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: s.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary font-semibold",
								children: s.suffix
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: s.label
						})
					]
				}, i))
			})
		})]
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "Booking process"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Five steps. Zero stress."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-5",
				children: PROCESS_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "label text-primary",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.desc
						}),
						i < PROCESS_STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden md:block absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 translate-x-full bg-border" })
					]
				}, s.n))
			})]
		})
	});
}
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		event_type: "",
		event_date: "",
		message: ""
	});
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!form.name.trim()) {
			toast.error("Please add your name");
			return;
		}
		setSending(true);
		const { error } = await supabase.from("leads").insert({
			...form,
			source: "website",
			event_date: form.event_date || null
		});
		setSending(false);
		if (error) {
			toast.error("Couldn't send — try WhatsApp instead");
			return;
		}
		toast.success("Got it! We'll be in touch shortly.");
		setForm({
			name: "",
			phone: "",
			email: "",
			event_type: "",
			event_date: "",
			message: ""
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl",
						children: "Ready to create something amazing?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "One quick note and we'll reply on WhatsApp — usually within an hour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/917043081426",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground emerald-glow hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+917043081426",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 70430 81426"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:oneclickphotography631@gmail.com",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Email"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://maps.google.com/?q=Khedbrahma",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Khedbrahma"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mx-auto mt-14 grid max-w-3xl gap-6 rounded-3xl border border-white/5 bg-surface/20 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Your name",
								value: form.name,
								onChange: (v) => setForm({
									...form,
									name: v
								}),
								required: true,
								placeholder: "John Doe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Phone / WhatsApp",
								value: form.phone,
								onChange: (v) => setForm({
									...form,
									phone: v
								}),
								placeholder: "+91 XXXXX XXXXX"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Email",
								value: form.email,
								onChange: (v) => setForm({
									...form,
									email: v
								}),
								type: "email",
								placeholder: "john@example.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Event date",
								value: form.event_date,
								onChange: (v) => setForm({
									...form,
									event_date: v
								}),
								type: "date"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "What are you planning?",
						value: form.event_type,
						onChange: (v) => setForm({
							...form,
							event_type: v
						}),
						placeholder: "Pre-wedding, birthday, brand reel..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Tell us the vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							placeholder: "Tell us about the vibes, locations, music taste, or anything special you want to capture...",
							className: "rounded-xl border border-white/10 bg-background/50 p-3.5 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200 resize-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: sending,
						className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.98] disabled:opacity-60 cursor-pointer shadow-lg emerald-glow",
						children: [sending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Send inquiry"]
					})
				]
			})]
		})]
	});
}
function Input({ label, value, onChange, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-2 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary ml-0.5",
				children: "*"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			required,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			className: "w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm text-white placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:outline-none transition duration-200"
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelsShowcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioGrid, { compact: true }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
//#endregion
export { Home as component };
