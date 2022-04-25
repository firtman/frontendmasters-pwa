"use strict";
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ getCourseConfig)
});

;// CONCATENATED MODULE: ./course.json
const course_namespaceObject = JSON.parse('{"author":{"name":"Maximiliano Firtman","company":"firt.dev"},"title":"Introduction to Kotlin and Android app development","subtitle":"for Frontend Masters","frontendMastersLink":"https://frontendmasters.com/courses/","social":{"linkedin":"firtman","github":"firtman","twitter":"firt"},"description":"Workshop for Frontend Masters to learn Kotlin and Android app development with Jetpack Compose","keywords":["kotlin","android development","jetpack compose","mobile apps"],"productionBaseUrl":"/intro-android"}');
;// CONCATENATED MODULE: ./data/course.js

const DEFAULT_CONFIG = {
    author: {
        name: "An Author",
        company: "An Author's Company"
    },
    title: "A Superb Course",
    subtitle: "That Teaches Nice Things",
    frontendMastersLink: "",
    description: "A nice course for nice people.",
    keywords: [
        "a nice course",
        "for people",
        "to learn",
        "nice things"
    ],
    social: {
        linkedin: "btholt",
        github: "btholt",
        twitter: "holtbt"
    },
    productionBaseUrl: "/"
};
function getCourseConfig() {
    return Object.assign({}, DEFAULT_CONFIG, course_namespaceObject);
};


/***/ })

};
;