; (function ($) {
    $.fn.extend({
        "color": function (value) {
            if (value === undefined) {
                return this.css("color");
            }
            return this.css("color", value);
        },
        "border": function (value) {
            if (value === undefined) {
                return this.css("border");
            }
            return this.css("border", value);
        }
    });
}(jQuery));