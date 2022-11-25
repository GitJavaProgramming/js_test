console.log("****************面向对象的js****************");
(function () {
    // "use strict";
    $.createPerson = (function () {
        /******************************************************
     * 创建对象的三种方式：工厂模式、构造函数模式、原型模式 
     * 
    *******************************************************/
        // 工厂模式
        function Person(name, age, job) {
            let o = {};
            o.name = name;
            o.age = age;
            o.job = job;
            o.sayname = function () {
                console.log(name);
            }
            return o;
        }
        // 构造函数模式
        function Person(name, age, job) {
            this.name = name;
            this.age = age;
            this.job = job;
            this.sayname = sayname;
        }
        function sayname() {
            console.log(this.name);
        }
        let o = new Object();
        Person.call(o, "afad", 33, "coder");
        o.sayname();
        // 原型模式
        var Person = function () { }
        Person.prototype.name = "fdakll";
        Person.prototype.age = 22;
        Person.prototype.job = "engineer";
        Person.prototype.sayname = function () {
            console.log(this.name);
        }
        let p = new Person();
        p.sayname();
    }());
    $.inherit = (function () {
        /****************************************
         * 
         * 每个构造函数有一个prototype对象
         * 每个prototype对象有一个constructor属性，指回构造函数
         * 每个实例有一个内部指针[[prototype]]指向原型
         * 
         ****************************************/
        (function () {
            let Person = function () { }
            console.log("构造函数：", Person);
            console.log("原型：", Person.prototype);
            let p = new Person();
            console.log("实例：", p, typeof p);
        }());
        // 原型链
        // 默认情况下，所有引用类型都继承自Object
        // 任何函数默认原型都是一个Object的实例 原型拥有constructor、对象实例拥有[[prototype]]   
        //    
        // 在使用原型实现继承时，原型实际上变成了另一个类型的实例
        (function () {
            function SuperType(value) {
                this.value = value;
                this.colors = { a: "100" };
            }
            function SubType() {
                SuperType.call(this, true);
                this.subValue = false;
            }
            SubType.prototype = new SuperType(); // 原型指向对象实例
            SubType.prototype.getSubValue = function () {
                return this.subValue;
            }
            SuperType.prototype.getSuperValue = function () {
                return this.value;
            }
            let instance = new SubType();
            console.log(instance.getSuperValue()); // SuperType原型方法
            console.log(instance.toString()); // Object原型方法
            // 确定原型与实例的关系
            // 1 instanceof关键字:如果一个实例的原型链中出现过相应的构造函数
            // 2 isPrototypeOf()
            console.log(instance instanceof SuperType, instance instanceof Object, instance instanceof SubType);
            console.log(SuperType.prototype.isPrototypeOf(instance), Object.prototype.isPrototypeOf(instance), SubType.prototype.isPrototypeOf(instance));
            // 组合原型链与盗用构造函数-继承
            let instance2 = new SubType();
            instance2.colors.a = "fahfdk";
            console.log(instance2.colors);
            console.log(instance.colors);
        }());
        console.log("******原型继承******");
        // 原型式继承
        (function () {
            // 函数定义
            function SuperType(value) {
                this.value = value;
                this.colors = { a: "100" };
            }
            function SubType() {
                SuperType.call(this, true); // 继承实例属性
                this.subValue = false;
            }
            SuperType.prototype.getSuperValue = function () {
                return this.value;
            }
            function create(o) {
                function F() { };
                F.prototype = o;
                return new F();
            }
            function inheritPrototype(subType, superType) { // 继承原型
                let prototype = create(superType.prototype);
                prototype.constructor = subType; // 为实例对象添加构造器属性
                subType.prototype = prototype;
            }
            inheritPrototype(SubType, SuperType);
            let instance3 = new SubType();
            instance3.colors.a = "wuioxcj";
            console.log(instance3.colors);

            instance3 = new SubType();
            console.log(instance3.getSuperValue()); // true
        }());
        // js可不可以多继承???
    });
    // debug查看定义的各个方法所在位置
    // 对象：User u
    // 方法：setAge setName setJob
    $.prototypeChain = function () {
        function User() { }
        User.prototype.setAge = function (age) { // User原型上添加方法
            this.age = age;
        }
        let u = new User();
        u.setAge(22);
        // 构造函数也是对象
        User.setJob = function (job) { // 函数作为Function实例对象，在其上添加方法
            this.job = job;
        }
        // 原型链上的Function原型添加方法
        User.__proto__.setName = function (name) { // User函数对象所指向的原型上添加方法
            this.name = name;
        }
        console.log(User.__proto__ === Function.prototype);
        User.setName("nihao");
        User.setJob("coder");
        console.log(User);
        console.log(u);
    }
}());
$.inherit();
// $.prototypeChain();