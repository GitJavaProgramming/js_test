console.log("****************数据类型****************");
// 位 布尔 字节 字符 数值 数组 字符串
// 运算符 表达式 语句 函数
// 语言特性
(function () {
    $.$type = (function () {
        // var u; // 当声明的变量未初始化时，该变量的默认值是undefined
        var t = (typeof u);
        console.log(t); // undefined

        var obj = null;
        t = typeof obj;
        console.log(t); // object

        obj = false;
        t = typeof obj;
        console.log(t); // boolean

        obj = 99;
        t = typeof obj;
        console.log(t); // number

        obj = "123";
        t = typeof obj;
        console.log(t); // string

        function a() { }
        console.log(typeof a); // function
    });
}());
// $.$type();