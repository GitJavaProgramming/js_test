/* ************************************************************************************************
 * 前端代码在线测试工具  https://jsbin.com/?js,output
 *
 * ************************************************************************************************/
(function () {
    "use strict";
    let obj = {
        FUNCTION: "function"
    };
    let jQuery = function (func) {
        if (typeof func === obj.FUNCTION) {
            return new jQuery.fn.init(func);
        }
    }
    jQuery.fn = jQuery.prototype;
    jQuery.fn.init = function (func) {
        return func();
    }
    window.jQuery = window.$ = jQuery;
    return obj;
}());