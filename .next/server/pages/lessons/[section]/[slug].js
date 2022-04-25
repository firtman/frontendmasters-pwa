"use strict";
(() => {
var exports = {};
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 7394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zt": () => (/* binding */ Provider),
/* harmony export */   "_y": () => (/* binding */ Context)
/* harmony export */ });
/* unused harmony export Consumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const headerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([
    {},
    ()=>{}
]);
const Provider = headerContext.Provider;
const Consumer = headerContext.Consumer;
const Context = headerContext;


/***/ }),

/***/ 8556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LessonSlug),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_lesson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3187);
/* harmony import */ var _data_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(749);
/* harmony import */ var _components_corner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7038);
/* harmony import */ var _context_headerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_lesson__WEBPACK_IMPORTED_MODULE_3__]);
_data_lesson__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// export const meta = (routeData) => {
//   return {
//     title: `${routeData.data.section} – ${routeData.data.title}`,
//     description: routeData.data.attributes.description,
//   };
// };
function LessonSlug({ post  }) {
    const courseInfo = (0,_data_course__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { 0: _ , 1: setHeader  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_headerContext__WEBPACK_IMPORTED_MODULE_6__/* .Context */ ._y);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHeader({
            section: post.section,
            title: post.title,
            icon: post.icon
        });
        return ()=>setHeader({})
        ;
    }, []);
    const title = post.title ? `${post.title} – ${courseInfo.title}` : courseInfo.title;
    const description = post.description ? post.description : courseInfo.description;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:image",
                        content: `${"/intro-android"}/images/social-share-cover.jpg`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lesson-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lesson",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lesson-content",
                                dangerouslySetInnerHTML: {
                                    __html: post.html
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lesson-links",
                                children: [
                                    post.prevSlug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: post.prevSlug,
                                        className: "prev",
                                        children: "\u2190 Previous"
                                    }) : null,
                                    post.nextSlug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: post.nextSlug,
                                        className: "next",
                                        children: "Next \u2192"
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_corner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
async function getStaticProps({ params  }) {
    const post = await (0,_data_lesson__WEBPACK_IMPORTED_MODULE_3__/* .getLesson */ .d)(params.section, params.slug);
    return {
        props: {
            post
        }
    };
}
async function getStaticPaths() {
    const sections = await (0,_data_lesson__WEBPACK_IMPORTED_MODULE_3__/* .getLessons */ .t)();
    const lessons = sections.map((section)=>section.lessons
    );
    const slugs = lessons.flat().map((lesson)=>lesson.fullSlug
    );
    return {
        paths: slugs,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5473:
/***/ ((module) => {

module.exports = require("title-case");

/***/ }),

/***/ 1000:
/***/ ((module) => {

module.exports = import("highlight.js");;

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [749,240], () => (__webpack_exec__(8556)));
module.exports = __webpack_exports__;

})();