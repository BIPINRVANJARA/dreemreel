import { P as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-cEeaNeyL.mjs";
import { r as MOCK_REELS } from "./mock-l-OknlAM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reel._id-C-xRPMbe.js
var $$splitComponentImporter = () => import("./reel._id-DaHsoFea.mjs");
var $$splitNotFoundComponentImporter = () => import("./reel._id-xUMBYqBC.mjs");
var $$splitErrorComponentImporter = () => import("./reel._id-DTWQCEtD.mjs");
var Route = createFileRoute("/reel/$id")({
	loader: async ({ params }) => {
		try {
			const { data, error } = await supabase.from("reels").select("*").eq("id", params.id).single();
			if (!error && data) return { reel: data };
		} catch (e) {
			console.error(e);
		}
		const reel = MOCK_REELS.find((r) => r.id === params.id);
		if (!reel) throw notFound();
		return { reel };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.reel.title} — DreamReel` },
		{
			name: "description",
			content: `Watch "${loaderData.reel.title}" — a cinematic reel by DreamReel Production.`
		},
		{
			property: "og:title",
			content: `${loaderData.reel.title} — DreamReel`
		},
		{
			property: "og:image",
			content: loaderData.reel.thumbnail_url
		}
	] : [{ title: "Reel — DreamReel" }, {
		name: "robots",
		content: "noindex"
	}] }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
