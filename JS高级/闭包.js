console.log("****************闭包与this****************");
(function () {
    // "use strict";
    $.closure = (function () {
        function fn() {
            var a = 2;
            function fn2() {
                console.log(++a);
            }
            return fn2;
        }
        var f = fn();
        f(); // 函数外部操作函数内局部变量
        f();
        console.log(f);
        fn()(); // 重新调用
        f = null; // 闭包死亡 包含闭包的函数对象成为了垃圾对象

        function func() {
            var a = 10;
            var o = {
                getA: function () { return a },
                addA: function () { a++ },
                subA: function () { a-- },
                showA: function () { console.log(a) }
            };
            return o;
        }

        var obj = func();
        obj.addA();
        obj.showA();
        obj.subA();
        obj.subA();
        obj.showA();
    }());
    $.$this = (function () {
        // 非严格模式下 
        // this对象会在运行时绑定到执行函数的上下文
        // 如果作为某个对象的方法调用，则this等于这个对象
        window.identity = "The Window";
        let obj = {
            identity: "identity",
            fn1: function () {
                let that = this;
                return function fn2() {
                    // return this.identity; // The Window
                    return that.identity; // identity
                }
            }
        };
        console.log(obj.fn1()());
    });
}());
$.$this();