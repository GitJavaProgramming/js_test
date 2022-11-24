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
        return func();
    }
    window.jQuery = window.$ = jQuery;
    return jQuery;
}());