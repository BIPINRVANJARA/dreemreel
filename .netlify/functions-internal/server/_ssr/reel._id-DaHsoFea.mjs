import { o as __toESM } from "../_runtime.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as MapPin, I as Clock, K as ArrowLeft, N as Heart, i as Volume2, r as VolumeX } from "../_libs/lucide-react.mjs";
import { t as Route } from "./reel._id-C-xRPMbe.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reel._id-DaHsoFea.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReelPage() {
	const { reel } = Route.useLoaderData();
	const nav = useNavigate();
	const videoRef = (0, import_react.useRef)(null);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [hearts, setHearts] = (0, import_react.useState)([]);
	const [showMutePrompt, setShowMutePrompt] = (0, import_react.useState)(false);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLoaded(false);
	}, [reel.video_url]);
	const handleSingleClick = (e) => {
		e.stopPropagation();
		setIsMuted((prev) => !prev);
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
	(0, import_react.useEffect)(() => {
		if (videoRef.current) videoRef.current.muted = isMuted;
	}, [isMuted]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-[#050507] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[150px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					if (window.history.length > 1) window.history.back();
					else nav({ to: "/portfolio" });
				},
				className: "absolute top-6 left-6 z-30 flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 backdrop-blur transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-[300px] sm:w-[340px] aspect-[9/19.5] transition-transform duration-500 hover:scale-[1.01] my-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full h-full rounded-[48px] border-[11px] border-zinc-900 bg-zinc-950 p-[1px] ring-1 ring-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-between px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-zinc-800" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 rounded-full bg-zinc-900" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: handleSingleClick,
						onDoubleClick: handleDoubleClick,
						className: "relative w-full h-full rounded-[38px] overflow-hidden bg-[#0a0a0c] cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: videoRef,
								src: reel.video_url,
								muted: isMuted,
								playsInline: true,
								loop: true,
								autoPlay: true,
								controls: true,
								onLoadedData: () => setLoaded(true),
								className: `w-full h-full object-cover select-none bg-black transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`
							}, reel.video_url),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/25 pointer-events-none z-10" }),
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
									children: reel.category
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
								className: "absolute bottom-12 inset-x-4 z-20 pointer-events-none text-left space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-white tracking-wide",
									children: reel.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-[10px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: reel.location })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-4 bottom-12 z-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => {
										e.stopPropagation();
										setIsMuted((prev) => !prev);
									},
									className: "bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 backdrop-blur shadow cursor-pointer flex items-center justify-center",
									children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5" })
								})
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { ReelPage as component };
