/**
 *  JS继承--原型链
 *  */
(function () {
    function SuperType() {
        this.property = true;
    }

    function SubType() {
        // this.property = false;
        this.subProperty = false;
    }

    SuperType.prototype.getSuperValue = function () {
        return this.property;
    };
    /* 重写SubType原型 */
    SubType.prototype = new SuperType();

    SuperType.prototype.getSubValue = function () {
        // return this.property;
        return this.subProperty;
    };

    const instance = new SubType();
    test(instance);

    function test(instance) {
        console.info(instance.subProperty); // false
        /***************************
         * instance.constructor.toString()
         * "function SuperType() {
         *     this.property = true;
         *  }"
         * **************************/
        console.info(instance.constructor.toString());

        /*****************************
         * 确定原型和实例关系
         * instanceof操作符 只要构造函数在原型链中出现就返回true
         * instanceof的语法规则可以在ECMAScript-262 5.1规范中找到
         * 详细见 如果看不懂可以先修---《形式语言与自动机理论》
         * 1、类型->引用类型规范->getValue
         * 2、比较运算符 instanceof运算符的产生式规则
         *
         * isPrototypeOf()方法  参考 Object.prototype.isPrototypeOf (V) 语法规则
         * 详细见 ECMAScript-262 5.1规范 --- Object的prototype对象的属性 isPrototypeOf()
         * ***************************/
        console.info(instance instanceof Object);
        console.info(instance instanceof SubType);
        console.info(instance instanceof SuperType);
        console.info(Object.prototype.isPrototypeOf(instance));
        console.info(SubType.prototype.isPrototypeOf(instance));
        console.info(SuperType.prototype.isPrototypeOf(instance));
    }
})();
/**
 * 抽象出公共调用部分
 * */
const $ = {};
(function () {
    $.object = function (o/*传入的对象作为将要创建对象的原型*/) {
        function F() {
        }

        F.prototype = o;
        return new F();
    };

    $.inheritPrototype = function (subType, superType) {
        let prototype = $.object(superType.prototype); // 创建超类原型的副本
        prototype.constructor = subType; // 为创建的副本添加constructor属性，从而弥补重写原型而失去默认的constructor属性
        subType.prototype = prototype; // 创建的对象赋给子类型的原型
    }

})($);
/**
 * JS继承--原型式继承（对象浅拷贝）
 * */
(function () {
    let person = {
        name: "pengpeng",
        friends: ["shelly", "hubayi", "pangzi"]
    }

    let p1 = $.object(person);
    p1.friends.push("qing");
    let p2 = $.object(person);
    p2.friends.push("lian");

    /* 引用类型的浅拷贝 */
    console.info(p2.friends); // ["shelly", "hubayi", "pangzi", "qing", "lian"]

    /* 寄生式继承 */
    function createOther(o) {
        let clone = $.object(o);
        clone.sayHi = function () {
            console.info("hi");
        }
        return clone;
    }

    let createObj = createOther(person);
    createObj.sayHi(); // "hi"

})($);
/**
 * JS继承--组合继承
 * */
(function () {
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
        alert(name); // undefined  pengpeng
    }

    SuperType.prototype.sayName = function () {
        console.info(this.name);
    };

    function SubType(name, age) {
        SuperType.call(this, name); // 在new SubType()时 方案一 二次调用SuperType()
        this.age = age;
    }

    /* 方案1 */
    // SubType.prototype = new SuperType(/**/); // 方案一 第一次调用new SuperType()

    /**
     * 方案2 寄生式组合继承  避免子类原型上面创建不必要的、多余的属性，同时还保持原型链不变
     * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式
     * */
    $.inheritPrototype(SubType, SuperType);

    SubType.prototype.sayAge = function () {
        console.info(this.age);
    };
    new SubType("pengpeng", 31).sayName();
})($);