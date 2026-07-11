import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SiteNav, n as PortfolioGrid, r as SiteFooter, t as FloatingActions } from "./portfolio-grid-C1J20Zl6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-D8DfdSAD.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label text-primary",
						children: "Portfolio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl font-semibold tracking-tight sm:text-6xl",
						children: "Our latest work."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioGrid, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {})
		]
	});
}
//#endregion
export { PortfolioPage as component };
