import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, j as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { n as QueryClientProvider, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as ReelStoreProvider } from "./reel-store-DnXhctN3.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$6 } from "./reel._id-C-xRPMbe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DBQ1VF1j.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C2GVOyzF.css";
function ReelPlayerModal() {
	return null;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-semibold tracking-tight",
					children: "Scene not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "This page didn't make the final cut."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
					children: "Back to home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "label text-primary",
					children: "Something broke"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-semibold tracking-tight",
					children: "Cut. Let's try that again."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-4 rounded-xl bg-red-950/40 border border-red-500/20 text-left font-mono text-xs text-red-400 overflow-auto max-h-48 whitespace-pre-wrap select-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold text-red-300 mb-1",
						children: [
							error.name,
							": ",
							error.message
						]
					}), error.stack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "opacity-80 leading-relaxed mt-2 text-[10px]",
						children: error.stack
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 cursor-pointer",
						children: "Retry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2.5 text-sm hover:bg-surface cursor-pointer",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DreamReel Production — Cinematic Reels & Wedding Films" },
			{
				name: "description",
				content: "DreamReel Production crafts cinematic reels, pre-wedding films and Instagram-ready content for couples, brands and events in Khedbrahma and across Gujarat."
			},
			{
				name: "author",
				content: "DreamReel Production"
			},
			{
				name: "theme-color",
				content: "#050507"
			},
			{
				property: "og:title",
				content: "DreamReel Production — Cinematic Reels & Wedding Films"
			},
			{
				property: "og:description",
				content: "Every moment deserves a cinematic story. Pre-wedding, birthdays, brand reels — filmed and edited to feel like a movie trailer."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.png",
			type: "image/png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReelStoreProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelPlayerModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				theme: "dark",
				position: "top-center"
			})
		] })
	});
}
var $$splitComponentImporter$4 = () => import("./portfolio-D8DfdSAD.mjs");
var Route$4 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "Portfolio — DreamReel Production" },
		{
			name: "description",
			content: "Cinematic reels, wedding films, brand videos and more from DreamReel Production."
		},
		{
			property: "og:title",
			content: "Portfolio — DreamReel Production"
		},
		{
			property: "og:description",
			content: "Every project, one tap away."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-khUIg4i9.mjs");
var Route$3 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Admin sign in — DreamReel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./route-Di7iQBCH.mjs");
var Route$2 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-Cw2Qv79Q.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin-M_lBqyWv.mjs");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [{ title: "Admin — DreamReel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var PortfolioRoute = Route$4.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$5
});
var AuthRoute = Route$3.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$5
});
var AuthenticatedRouteRoute = Route$2.update({
	id: "/_authenticated",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var ReelIdRoute = Route$6.update({
	id: "/reel/$id",
	path: "/reel/$id",
	getParentRoute: () => Route$5
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	PortfolioRoute,
	ReelIdRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
