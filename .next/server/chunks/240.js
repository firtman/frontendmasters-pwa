"use strict";
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 7038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Corner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Corner() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "details-bg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: "154",
            height: "154",
            viewBox: "0 0 154 154",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                            id: "clip-path",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                id: "Rectangle_2238",
                                "data-name": "Rectangle 2238",
                                width: "154",
                                height: "154",
                                transform: "translate(9467 350)",
                                fill: "#fff",
                                stroke: "#707070",
                                strokeWidth: "1"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                            id: "clip-corner-image-active",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                width: "154",
                                height: "154"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    id: "corner-image-active",
                    clipPath: "url(#clip-corner-image-active)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        id: "Corner-image-active-2",
                        "data-name": "Corner-image-active",
                        transform: "translate(-9467 -350)",
                        clipPath: "url(#clip-path)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            id: "Subtraction_34",
                            "data-name": "Subtraction 34",
                            d: "M-3857.365,1740.766h0l-7.07-7.07,12.89-12.89v14.142l-5.818,5.818Zm-14.142-14.142h0l-7.071-7.07,27.033-27.033v14.143l-19.96,19.96Zm-14.143-14.143h0l-7.07-7.069,41.175-41.175v14.142Zm-14.142-14.142h0l-7.07-7.069,55.317-55.317v14.142Zm-14.142-14.142h0l-7.07-7.069,69.459-69.459v14.142Zm-14.142-14.142h0l-7.07-7.069,76.739-76.739h6.862v7.28Zm-14.143-14.143h0l-7.07-7.069,62.6-62.6h14.142Zm-14.142-14.142h0l-7.07-7.069,48.454-48.454h14.142Zm-14.142-14.142h0l-7.07-7.069,34.312-34.312h14.142Zm-14.142-14.142h0l-7.07-7.069,20.17-20.17h14.142Zm-14.142-14.142h0l-7.071-7.071,6.027-6.027h14.144l-13.1,13.1Zm367.24-56.114v-.909l.455.455-.453.453Z",
                            transform: "translate(13472.546 -1236.766)",
                            fill: "var(--corner-fill)"
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 3187:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getLessons),
/* harmony export */   "d": () => (/* binding */ getLesson)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var title_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5473);
/* harmony import */ var title_case__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(title_case__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8974);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_4__, highlight_js__WEBPACK_IMPORTED_MODULE_5__]);
([marked__WEBPACK_IMPORTED_MODULE_4__, highlight_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






marked__WEBPACK_IMPORTED_MODULE_4__.marked.setOptions({
    baseUrl:  true ? "/intro-android" + "/" : 0,
    highlight: function(code, lang) {
        const language = highlight_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLanguage(lang) ? lang : "plaintext";
        return highlight_js__WEBPACK_IMPORTED_MODULE_5__["default"].highlight(code, {
            language
        }).value;
    },
    langPrefix: "hljs language-"
});
const DEFAULT_ICON = "info-circle";
const lessonsPath = path__WEBPACK_IMPORTED_MODULE_0___default().join("/Users/firt/Library/Mobile Documents/com~apple~CloudDocs/Trainings/FEM/CompanionSite/intro-android", "lessons");
function getTitle(slug, override) {
    let title = override;
    if (!title) {
        title = (0,title_case__WEBPACK_IMPORTED_MODULE_3__.titleCase)(slug.split("-").join(" "));
    }
    return title;
}
async function getMeta(section) {
    let meta = {};
    try {
        const file = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, section, "meta.json"));
        meta = JSON.parse(file.toString());
    } catch (e) {
    // no meta.json, nothing to do
    }
    return meta;
}
function slugify(inputPath) {
    const pathParts = inputPath.split("-");
    const pathOrder = pathParts.shift();
    const pathSlug = pathParts.join("-");
    return {
        slug: pathSlug,
        order: pathOrder,
        title: (0,title_case__WEBPACK_IMPORTED_MODULE_3__.titleCase)(pathParts.join(" "))
    };
}
async function getLessons() {
    const dir = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(lessonsPath);
    const sections = [];
    for (let dirFilename of dir){
        const dirStats = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().lstat(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dirFilename));
        if (dirStats.isFile()) {
            continue;
        }
        const lessonsDir = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dirFilename));
        let { title: sectionTitle , order: sectionOrder , slug: sectionSlug ,  } = slugify(dirFilename);
        let icon = DEFAULT_ICON;
        const meta = await getMeta(dirFilename);
        if (meta.title) {
            sectionTitle = meta.title;
        }
        if (meta.icon) {
            icon = meta.icon;
        }
        const lessons = [];
        for (let lessonFilename of lessonsDir){
            if (lessonFilename.slice(-3) !== ".md") {
                continue;
            }
            const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dirFilename, lessonFilename);
            const file = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath);
            const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2__(file.toString());
            let slug = lessonFilename.replace(/\.md$/, "");
            const slugParts = slug.split("-");
            const lessonOrder = slugParts.shift();
            slug = slugParts.join("-");
            const title = getTitle(slug, data.title);
            lessons.push({
                slug,
                fullSlug: `/lessons/${sectionSlug}/${slug}`,
                title,
                order: `${sectionOrder}${lessonOrder}`,
                path: filePath
            });
        }
        sections.push({
            icon,
            title: sectionTitle,
            slug: sectionSlug,
            lessons,
            order: sectionOrder
        });
    }
    return sections;
}
async function getLesson(targetDir, targetFile) {
    const dir = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(lessonsPath);
    for(let i = 0; i < dir.length; i++){
        const dirPath = dir[i];
        if (dirPath.endsWith(targetDir)) {
            const lessonDir = (await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dirPath))).filter((str)=>str.endsWith(".md")
            );
            for(let j = 0; j < lessonDir.length; j++){
                const slugPath = lessonDir[j];
                if (slugPath.endsWith(targetFile + ".md")) {
                    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dirPath, slugPath);
                    const file = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath);
                    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2__(file.toString());
                    const html = (0,marked__WEBPACK_IMPORTED_MODULE_4__.marked)(content);
                    const title = getTitle(targetFile, data.title);
                    const meta = await getMeta(dirPath);
                    const section = getTitle(targetDir, meta.title);
                    const icon = meta.icon ? meta.icon : DEFAULT_ICON;
                    let nextSlug;
                    let prevSlug;
                    // get next
                    if (lessonDir[j + 1]) {
                        // has next in section
                        const { slug: next  } = slugify(lessonDir[j + 1]);
                        nextSlug = `${targetDir}/${next.replace(/\.md$/, "")}`;
                    } else if (dir[i + 1]) {
                        // has next in next section
                        const nextDir = (await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dir[i + 1]))).filter((str)=>str.endsWith(".md")
                        );
                        const nextDirSlug = slugify(dir[i + 1]).slug;
                        const nextLessonSlug = slugify(nextDir[0]).slug.replace(/\.md$/, "");
                        nextSlug = `${nextDirSlug}/${nextLessonSlug}`;
                    } else {
                        // last section
                        nextSlug = null;
                    }
                    // get prev
                    if (lessonDir[j - 1]) {
                        // has prev in section
                        const { slug: prev  } = slugify(lessonDir[j - 1]);
                        prevSlug = `${targetDir}/${prev.replace(/\.md$/, "")}`;
                    } else if (dir[i - 1]) {
                        // has prev in prev section
                        const prevDir = (await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readdir(path__WEBPACK_IMPORTED_MODULE_0___default().join(lessonsPath, dir[i - 1]))).filter((str)=>str.endsWith(".md")
                        );
                        const prevDirSlug = slugify(dir[i - 1]).slug;
                        const prevLessonSlug = slugify(prevDir[prevDir.length - 1]).slug.replace(/\.md$/, "");
                        prevSlug = `${prevDirSlug}/${prevLessonSlug}`;
                    } else {
                        // first section
                        prevSlug = null;
                    }
                    const base =  true ? "/intro-android" : 0;
                    return {
                        attributes: data,
                        html,
                        slug: targetFile,
                        title,
                        section,
                        icon,
                        filePath,
                        nextSlug: nextSlug ? path__WEBPACK_IMPORTED_MODULE_0___default().join(base, "lessons", nextSlug) : null,
                        prevSlug: prevSlug ? path__WEBPACK_IMPORTED_MODULE_0___default().join(base, "lessons", prevSlug) : null
                    };
                }
            }
        }
    }
    return false;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;