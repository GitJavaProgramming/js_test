console.log("****************提升****************");
(function () {
    $.elevate = (function () {
        var a = 100;
        console.log(f); // 函数提升
        function f() {
            console.log(a); // 变量提升
            if (!a) {
                var a = 200; // var声明变量是函数作用域 let声明变量是块级作用域
            }
            console.log(a);
        }
    });
}());
// $.elevate();