console.log("****************函数****************");
(function () {
    $.callApplyBind = function () {
        function showName(age) {
            return this.name + ",age:" + age;
        }
        let obj = {
            name: "nihao"
        };
        console.log(showName.call(obj, 18)); // call改变this指向
        console.log(showName.apply(obj, [99]));
        let fn = showName.bind(obj, 21); // showName.bind只能绑定一次
        console.log(fn()); // nihao
        let obj2 = {
            name: "nihao22"
        };
        let fn2 = showName.bind(obj2, 22);
        console.log(fn2()); // nihao
    }
    $.args = function () {
        function fn(age, name, job) {
            console.log("实参个数：", arguments.length);
            for(let i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
            console.log(arguments);
        }
        fn();
        fn(22);
        fn(22, "pp", "coder");
        console.log($.args.length);
        console.log(fn.length);
    }
}());
// $.callApplyBind();
$.args();