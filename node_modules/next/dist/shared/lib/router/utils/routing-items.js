"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRoutingItems = getRoutingItems;
var _getMiddlewareRegex = require("./get-middleware-regex");
var _routeMatcher = require("./route-matcher");
var _routeRegex = require("./route-regex");
var _sortedRoutes = require("./sorted-routes");
const MIDDLEWARE_SUFFIX = '/_middleware';
function getRoutingItems(pages, middleware) {
    // append the suffix so that `getSortedRoutes()` can handle middleware properly
    const middlewarePages = middleware.map((m)=>`${m.page}${MIDDLEWARE_SUFFIX}`
    );
    const middlewareMap = new Map(middleware.map((m)=>[
            m.page,
            m
        ]
    ));
    const sortedRoutes = (0, _sortedRoutes).getSortedRoutes([
        ...pages,
        ...middlewarePages
    ]);
    return sortedRoutes.map((page)=>{
        if (page.endsWith(MIDDLEWARE_SUFFIX)) {
            const p = page.slice(0, -MIDDLEWARE_SUFFIX.length) || '/';
            const { ssr  } = middlewareMap.get(p);
            return {
                match: (0, _routeMatcher).getRouteMatcher((0, _getMiddlewareRegex).getMiddlewareRegex(p, !ssr)),
                page: p,
                ssr,
                isMiddleware: true
            };
        } else {
            return {
                match: (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(page)),
                page
            };
        }
    });
}

//# sourceMappingURL=routing-items.js.map