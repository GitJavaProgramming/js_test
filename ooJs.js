/* ************************************************************************************************
 * 前端代码在线测试工具  https://jsbin.com/paximakoso/edit?js,output
 *
 * JavaScript面向对象编程
 *
 * ************************************************************************************************ */

/**
 * 给User对象设置属性
 * @param properties
 * @constructor
 */
(function () {
    function User(properties) {
        for (let i in properties) {
            (function (which) {
                let p = i;
                which["get" + p] = function () {
                    return properties[p];
                };
                which["set" + p] = function (val) {
                    properties[p] = val;
                };
            })(this);
        }

        /**
         * 私有方法，只能在函数内部使用，无法在函数外部调用
         */
        function privateMethod() {
            console.info("call privateMethod");
        }

        /**
         * 特权方法，有权方法私有变量、私有函数的公有方法
         * */
        this.display = function () {
            console.info("call display.");
            privateMethod();
        };
    }

    /**
     * 公共方法，在原型上添加
     */
    User.prototype.say = function () {
        console.info("call say");
    };

    User.cloneUser = function (user) {
        return new User(user.getname(), user.getage());
    };

    /* ************************************************************************************
     * 测试
     * ************************************************************************************/
    function test01(user) {
        console.info(user.name);
        console.info(user.getname() === "pengpeng");
        user.setname("pp");
        console.info(user.getname());
        user.display();
        user.say();
    }

    const user = new User({
        name: "pengpeng",
        age: "31"
    });
    test01(user);
    const user2 = User.cloneUser(user);
    test01(user2);// 调用时 user2.getname() 方法报错  原型继承
})(window);