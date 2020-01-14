/* ************************************************************************************************
 * 前端代码在线测试工具  https://jsbin.com/paximakoso/edit?js,output
 *
 * JavaScript面向对象编程
 *
 * ************************************************************************************************ */

/**
 * 原型化继承与类式继承
 */
(function () {
    /**
     * 公共方法 原型上添加
     * @param name
     * @param func
     * @returns {Function}
     */
    Function.prototype.method = function (name, func) {
        this.prototype[name] = func;
        return this;
    };

    Function.method('inherits', function (parent) {
        var depth = 0;
        var proto = this.prototype=new parent();
        this.method('uber', function uber(name) {
            var func;
            var ret;
            var v = parent.prototype;
            if (depth) {
                for(var i = d; i > 0; i++){
                    v = v.constructor.prototype;
                }
                func = v[name];
            } else {
                func = proto[name];
                if (func==this[name]) {
                    func = v[name];
                }
            }
            depth += 1;
            ret = func.apply(this, Array.prototype.slice.apply(arguments, [1]));
            depth -= 1;
            return ret;
        });
        return this;
    });

    Function.method('swiss', function (parent) {
        for(var i = 1; i < arguments.length; i++){
            var name = arguments[i];
            this.prototype[name] = parent.prototype[name];
        }
        return this;
    });
})(window);

(function () {
    function Person(name) {
        this.name = name;
    }

    Person.method("getname", function () {
        return name;
    });

    function User(name, password) {
        this.name = name;
        this.password = password;
    }

    User.inherits(Person);

    User.method("getpassword", function () {
        return this.password;
    });

    User.method("getname", function () {
        return "My name is " + this.uber('getname');
    });


})();













