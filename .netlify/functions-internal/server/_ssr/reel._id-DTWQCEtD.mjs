import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reel._id-DTWQCEtD.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid min-h-dvh place-items-center bg-[#050507] text-white",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground mb-4",
			children: "Failed to load video player"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: reset,
			className: "rounded-full bg-primary px-6 py-2 text-sm font-semibold hover:bg-primary/90 transition",
			children: "Retry"
		})]
	})
});
//#endregion
export { SplitErrorComponent as errorComponent };
