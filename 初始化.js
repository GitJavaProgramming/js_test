console.log("****************初始化****************");
(function () {
    "use strict";
    let constants = {
        FUNCTION: "function"
    };
    let jQuery = function (func) {
        func = func || function() {};
        return new jQuery.fn.init(func);
    }
    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        each: function () {
            console.log("each...");
            return this;
        }
    };
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
        return this;
    }
    jQuery.fn.init.prototype = jQuery.prototype; // 让jQuery实例可以调用原型上添加的方法
    // jQuery.extends = jQuery.fn.extends = function () {
    //     let target = arguments[0] || {},
    //         length = arguments.length;
    //     if (1 === length) {
    //         target = this;
    //     }
    // };
    window.jQuery = window.$ = jQuery;
    return jQuery;
}());