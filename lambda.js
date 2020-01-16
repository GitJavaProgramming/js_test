/**
 * 闭包 执行环境与函数作用域链
 * 关于令 T = (function(){})()
 * let f = function(){}; // let是ECMA 6的新语法，指定变量仅在块级作用域内有效
 * f(); ==> (f)() => T 括号表示块级作用域 有很多常见形式：例如 for(;;) while()中的括号
 *
 * let singleton = function(){}() 函数表达式 执行到这里才会赋值
 *
 * 闭包 参考
 * http://jibbering.com/faq/notes/closures/
 * JS高级程序设计 ch07 匿名函数 闭包 块作用域
 * */
(function () {
    /* 闭包中的变量 */
    function createFunctions() {
        let result = new Array();
        for(let i = 0; i < 5; i++) {
            result[i] = function (num) {
                return function () { // 闭包 访问外部函数作用域中的变量的匿名函数
                    return num;
                };
            }(i);
        }
        return result;
    }
    let func = createFunctions();
    /**
     * [function () { // 闭包 访问外部函数作用域中的变量的匿名函数
     *   return num;
     * },...]
     */
    console.info(func);
    for(let i = 0; i < func.length; i++) {
        console.info(func[i]());
    }

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
    object.getName()(); // "JS Bin Output "
    alert(object.getName()()); // 弹框 "pengpeng" 控制台输出 "JS Bin Output "
})();