"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/predict/route";
exports.ids = ["app/api/predict/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=%2Fhome%2Frunner%2FDeerIdentifierAI2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2FDeerIdentifierAI2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=%2Fhome%2Frunner%2FDeerIdentifierAI2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2FDeerIdentifierAI2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_runner_DeerIdentifierAI2_app_api_predict_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/predict/route.ts */ \"(rsc)/./app/api/predict/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/predict/route\",\n        pathname: \"/api/predict\",\n        filename: \"route\",\n        bundlePath: \"app/api/predict/route\"\n    },\n    resolvedPagePath: \"/home/runner/DeerIdentifierAI2/app/api/predict/route.ts\",\n    nextConfigOutput,\n    userland: _home_runner_DeerIdentifierAI2_app_api_predict_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/predict/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVkaWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcmVkaWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJlZGljdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcnVubmVyJTJGRGVlcklkZW50aWZpZXJBSTIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZydW5uZXIlMkZEZWVySWRlbnRpZmllckFJMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcmlkZW50aWZpZXJhaTIvPzRiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvcnVubmVyL0RlZXJJZGVudGlmaWVyQUkyL2FwcC9hcGkvcHJlZGljdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJlZGljdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ByZWRpY3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ByZWRpY3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9ydW5uZXIvRGVlcklkZW50aWZpZXJBSTIvYXBwL2FwaS9wcmVkaWN0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3ByZWRpY3Qvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=%2Fhome%2Frunner%2FDeerIdentifierAI2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2FDeerIdentifierAI2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/predict/route.ts":
/*!**********************************!*\
  !*** ./app/api/predict/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sharp */ \"sharp\");\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function analyzeImage(imageBuffer) {\n    try {\n        const { data, info } = await sharp__WEBPACK_IMPORTED_MODULE_1___default()(imageBuffer).resize(224, 224, {\n            fit: \"cover\"\n        }).grayscale().raw().toBuffer({\n            resolveWithObject: true\n        });\n        const averageBrightness = Array.from(data).reduce((sum, value)=>sum + value, 0) / (info.width * info.height);\n        return {\n            averageBrightness\n        };\n    } catch (error) {\n        console.error(\"Image analysis error:\", error);\n        throw new Error(\"画像の解析に失敗しました\");\n    }\n}\nasync function predictDeerType(imageStats) {\n    const deerTypes = [\n        \"ニホンジカ\",\n        \"エゾシカ\",\n        \"ヤクシカ\",\n        \"その他\"\n    ];\n    // デモ用の簡易的な分類ロジック\n    const type = deerTypes[0] // デモのため常にニホンジカを返す\n    ;\n    const confidence = 85.5;\n    return {\n        type,\n        confidence\n    };\n}\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const image = formData.get(\"image\");\n        if (!image || !(image instanceof File)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"画像ファイルが必要です\"\n            }, {\n                status: 400\n            });\n        }\n        const buffer = Buffer.from(await image.arrayBuffer());\n        const imageStats = await analyzeImage(buffer);\n        const prediction = await predictDeerType(imageStats);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(prediction);\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error instanceof Error ? error.message : \"予測中にエラーが発生しました\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByZWRpY3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUM5QjtBQUV6QixlQUFlRSxhQUFhQyxXQUFtQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1KLDRDQUFLQSxDQUFDRSxhQUNoQ0csTUFBTSxDQUFDLEtBQUssS0FBSztZQUFFQyxLQUFLO1FBQVEsR0FDaENDLFNBQVMsR0FDVEMsR0FBRyxHQUNIQyxRQUFRLENBQUM7WUFBRUMsbUJBQW1CO1FBQUs7UUFFdEMsTUFBTUMsb0JBQW9CQyxNQUFNQyxJQUFJLENBQUNWLE1BQU1XLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxRQUFVRCxNQUFNQyxPQUFPLEtBQU1aLENBQUFBLEtBQUthLEtBQUssR0FBR2IsS0FBS2MsTUFBTTtRQUM3RyxPQUFPO1lBQUVQO1FBQWtCO0lBQzdCLEVBQUUsT0FBT1EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxNQUFNLElBQUlFLE1BQU07SUFDbEI7QUFDRjtBQUVBLGVBQWVDLGdCQUFnQkMsVUFBeUM7SUFDdEUsTUFBTUMsWUFBWTtRQUFDO1FBQVM7UUFBUTtRQUFRO0tBQU07SUFFbEQsaUJBQWlCO0lBQ2pCLE1BQU1DLE9BQU9ELFNBQVMsQ0FBQyxFQUFFLENBQUUsa0JBQWtCOztJQUM3QyxNQUFNRSxhQUFhO0lBRW5CLE9BQU87UUFBRUQ7UUFBTUM7SUFBVztBQUM1QjtBQUVPLGVBQWVDLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsUUFBUUQsU0FBU0UsR0FBRyxDQUFDO1FBRTNCLElBQUksQ0FBQ0QsU0FBUyxDQUFFQSxDQUFBQSxpQkFBaUJFLElBQUcsR0FBSTtZQUN0QyxPQUFPakMsa0ZBQVlBLENBQUNrQyxJQUFJLENBQ3RCO2dCQUFFZCxPQUFPO1lBQWMsR0FDdkI7Z0JBQUVlLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1DLFNBQVNDLE9BQU92QixJQUFJLENBQUMsTUFBTWlCLE1BQU1PLFdBQVc7UUFDbEQsTUFBTWQsYUFBYSxNQUFNdEIsYUFBYWtDO1FBQ3RDLE1BQU1HLGFBQWEsTUFBTWhCLGdCQUFnQkM7UUFFekMsT0FBT3hCLGtGQUFZQSxDQUFDa0MsSUFBSSxDQUFDSztJQUMzQixFQUFFLE9BQU9uQixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxjQUFjQTtRQUM1QixPQUFPcEIsa0ZBQVlBLENBQUNrQyxJQUFJLENBQ3RCO1lBQUVkLE9BQU9BLGlCQUFpQkUsUUFBUUYsTUFBTW9CLE9BQU8sR0FBRztRQUFpQixHQUNuRTtZQUFFTCxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZXJpZGVudGlmaWVyYWkyLy4vYXBwL2FwaS9wcmVkaWN0L3JvdXRlLnRzPzNkZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuXG5hc3luYyBmdW5jdGlvbiBhbmFseXplSW1hZ2UoaW1hZ2VCdWZmZXI6IEJ1ZmZlcik6IFByb21pc2U8eyBhdmVyYWdlQnJpZ2h0bmVzczogbnVtYmVyIH0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEsIGluZm8gfSA9IGF3YWl0IHNoYXJwKGltYWdlQnVmZmVyKVxuICAgICAgLnJlc2l6ZSgyMjQsIDIyNCwgeyBmaXQ6ICdjb3ZlcicgfSlcbiAgICAgIC5ncmF5c2NhbGUoKVxuICAgICAgLnJhdygpXG4gICAgICAudG9CdWZmZXIoeyByZXNvbHZlV2l0aE9iamVjdDogdHJ1ZSB9KVxuXG4gICAgY29uc3QgYXZlcmFnZUJyaWdodG5lc3MgPSBBcnJheS5mcm9tKGRhdGEpLnJlZHVjZSgoc3VtLCB2YWx1ZSkgPT4gc3VtICsgdmFsdWUsIDApIC8gKGluZm8ud2lkdGggKiBpbmZvLmhlaWdodClcbiAgICByZXR1cm4geyBhdmVyYWdlQnJpZ2h0bmVzcyB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignSW1hZ2UgYW5hbHlzaXMgZXJyb3I6JywgZXJyb3IpXG4gICAgdGhyb3cgbmV3IEVycm9yKCfnlLvlg4/jga7op6PmnpDjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZWRpY3REZWVyVHlwZShpbWFnZVN0YXRzOiB7IGF2ZXJhZ2VCcmlnaHRuZXNzOiBudW1iZXIgfSk6IFByb21pc2U8eyB0eXBlOiBzdHJpbmc7IGNvbmZpZGVuY2U6IG51bWJlciB9PiB7XG4gIGNvbnN0IGRlZXJUeXBlcyA9IFtcIuODi+ODm+ODs+OCuOOCq1wiLCBcIuOCqOOCvuOCt+OCq1wiLCBcIuODpOOCr+OCt+OCq1wiLCBcIuOBneOBruS7llwiXVxuICBcbiAgLy8g44OH44Oi55So44Gu57Ch5piT55qE44Gq5YiG6aGe44Ot44K444OD44KvXG4gIGNvbnN0IHR5cGUgPSBkZWVyVHlwZXNbMF0gIC8vIOODh+ODouOBruOBn+OCgeW4uOOBq+ODi+ODm+ODs+OCuOOCq+OCkui/lOOBmVxuICBjb25zdCBjb25maWRlbmNlID0gODUuNVxuXG4gIHJldHVybiB7IHR5cGUsIGNvbmZpZGVuY2UgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gICAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJylcblxuICAgIGlmICghaW1hZ2UgfHwgIShpbWFnZSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICfnlLvlg4/jg5XjgqHjgqTjg6vjgYzlv4XopoHjgafjgZknIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGltYWdlLmFycmF5QnVmZmVyKCkpXG4gICAgY29uc3QgaW1hZ2VTdGF0cyA9IGF3YWl0IGFuYWx5emVJbWFnZShidWZmZXIpXG4gICAgY29uc3QgcHJlZGljdGlvbiA9IGF3YWl0IHByZWRpY3REZWVyVHlwZShpbWFnZVN0YXRzKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByZWRpY3Rpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignQVBJIGVycm9yOicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ+S6iOa4rOS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnycgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInNoYXJwIiwiYW5hbHl6ZUltYWdlIiwiaW1hZ2VCdWZmZXIiLCJkYXRhIiwiaW5mbyIsInJlc2l6ZSIsImZpdCIsImdyYXlzY2FsZSIsInJhdyIsInRvQnVmZmVyIiwicmVzb2x2ZVdpdGhPYmplY3QiLCJhdmVyYWdlQnJpZ2h0bmVzcyIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsInN1bSIsInZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsInByZWRpY3REZWVyVHlwZSIsImltYWdlU3RhdHMiLCJkZWVyVHlwZXMiLCJ0eXBlIiwiY29uZmlkZW5jZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZm9ybURhdGEiLCJpbWFnZSIsImdldCIsIkZpbGUiLCJqc29uIiwic3RhdHVzIiwiYnVmZmVyIiwiQnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJwcmVkaWN0aW9uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/predict/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpredict%2Froute&page=%2Fapi%2Fpredict%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpredict%2Froute.ts&appDir=%2Fhome%2Frunner%2FDeerIdentifierAI2%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Frunner%2FDeerIdentifierAI2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();