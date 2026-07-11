import { o as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reel-store-DnXhctN3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
function ReelStoreProvider({ children }) {
	const [reels, setReels] = (0, import_react.useState)([]);
	const [currentId, setCurrentId] = (0, import_react.useState)(null);
	const open = (0, import_react.useCallback)((r, id) => {
		setReels(r);
		setCurrentId(id);
	}, []);
	const close = (0, import_react.useCallback)(() => {
		setCurrentId(null);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			open,
			close,
			reels,
			currentId,
			isOpen: currentId !== null
		},
		children
	});
}
function useReelStore() {
	const v = (0, import_react.useContext)(Ctx);
	if (!v) throw new Error("useReelStore requires provider");
	return v;
}
//#endregion
export { useReelStore as n, ReelStoreProvider as t };
