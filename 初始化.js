console.log("****************初始化****************");
(function () {
    "use strict";
    let constants = {
        FUNCTION: "function"
    };
    let jQuery = function (func) {
        if (typeof func === constants.FUNCTION) {
            return new jQuery.fn.init(func);
        }
    }
    jQuery.fn = jQuery.prototype;
    jQuery.fn.init = function (func) {
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            func();
        }
        if (document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)) {
            window.setTimeout(func);
        } else {
            document.addEventListener("DOMContentLoaded", completed);
            window.addEventListener("load", completed);
        }
    }
    window.jQuery = window.$ = jQuery;
    return jQuery;
}());