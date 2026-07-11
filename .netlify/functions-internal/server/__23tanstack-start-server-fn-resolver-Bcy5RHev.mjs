//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Bcy5RHev.js
var manifest = {
	"5af48b25fe3e96d9d5c6dccf205e27fd954919d9b6cf8e713549f4988be44125": {
		functionName: "syncInstagramFeed_createServerFn_handler",
		importer: () => import("./_ssr/instagram-actions-DhcyBOyV.mjs")
	},
	"6b24c1defd73c1302e8388f93eabc0bae30d82dbdeaf2125d42a0171ad61fc0a": {
		functionName: "updateInstagramConfig_createServerFn_handler",
		importer: () => import("./_ssr/instagram-actions-DhcyBOyV.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
