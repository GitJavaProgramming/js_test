/**
 * 闭包 执行环境与函数作用域链
 * 关于令 T = (function(){})()
 * let f = function(){}; // let是ECMA 6的新语法，指定变量仅在块级作用域内有效
 * f(); ==> (f)() => T 括号表示块级作用域 有很多常见形式：例如 for(;;) while()中的括号
 *
 * let singleton = function(){}() 函数表达式
 * */
(function () {
    /* 闭包中的变量 */
    function createFunctions() {
        let result = new Array();
        for(let i = 0; i < 10; i++) {
            result[i] = function (num) {
                return function () { // 闭包 访问外部函数作用域中的变量的匿名函数
                    return num;
                };
            }(i);
        }
    }
    let func = createFunctions();
    console.info(func);

    /**
     * 闭包中的this
     * object是一个单例--对象字面量创建的单例对象
     * 变量name--私有变量
     * getName--特权方法，有权访问私有变量和私有函数
     *
     * */
    let object = {
        name :"pengpeng",
        getName : function () {
            let $this = this;
            return function () {
                console.info(this.name);
                return $this.name;
            };
        }
    };
    object.getName();
    alert(object.name);
})();