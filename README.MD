    IDE： WebStorm
    在线测试工具： https://jsbin.com/paximakoso/edit?js,output
    专题目录
        ECMAScript内置对象
        原型继承与原型链
        JS事件
        Ajax
    参考资料：
        JavaScript高级程序设计 第二版
        精通JavaScript（图灵系列）
        JavaScript权威指南 第六版
        官方ECMA-262语言标准：http://www.ecma-international.org/publications/standards/Ecma-262.htm
        参考学习网址：https://www.w3school.com.cn/js/index_pro.asp 参考其中【ECMAScript函数】章节
        https://www.w3school.com.cn/js/pro_js_object_types.asp ECMA对象类型
        ECMAScript 6规范 参考其中【ECMA内置对象】章节
    
    JavaScript 由三部分组成ECMAScript BOM DOM 本项目主要考虑面向对象JS
    
    ECMAScript函数本质
    ECMAScript 的函数实际上是功能完整的对象。每个函数都会自动创建一个 prototype 属性，以满足函数会被当作构造器的可能性。
    
    在基于浏览器的JS的全局变量都是window对象的属性---精通Javascript p26
    
    ECMAScript内置对象
    Object
    Function --- new Function (p1, p2, … , pn, body)
    ECMAScript中，函数都是Function类型的实例（对象），并且都具有属性和方法。
    参考：ECMAScript-262 5.1规范 Function.prototype对象的属性
       Function.prototype.constructor
       Function.prototype.toString()
       Function.prototype.apply
       Function.prototype.call
       Function.prototype.bind // 用 Function.prototype.bind 创建的函数对象没有 prototype 属性。???
        
    函数内部有两个内置对象：arguments和this 
        参考 Javascript高级程序设计 p56 理解参数 p96 函数内部属性
        ECMAScript-262 5.1规范  可执行代码与执行环境 Arguments对象
    当控制器进入到函数代码的执行环境时，将创建一个 arguments 对象，除非它作为标识符 "arguments" 出现在该函数的形参列表中，
    或者是该函数代码内部的变量声明标识符或函数声明标识符。
    ECMAScript中的所有参数传递的都是值，不可能通过引用传递参数。
    arguments是一个类数组对象用于保存函数参数。其他语言中可能需要先创建一个函数签名，在调用中必须与该签名一致，但在ECMAScript
    中，没有这些条条框框，解析器不会验证命名参数。通过访问arguments对象的length属性可以知道有多少个参数传递给了函数。如：
        function howManyArgs() {alert(arguments.length);};
        howManyArgs("string", 34); // 2
        howManyArgs(); // 0
        howManyArgs(12); // 1
    对于没有传递值的命名参数将自动被赋予undefined值。这就跟定义了变量但又没有初始化一样。  
    arguments对象还有一个callee属性，它是一个指针，指向拥有这个arguments对象的函数。如：
        function factorial(num) {
          if(num <= 1) {
            return 1;
          } else {
            return num * arguments.callee(num - 1); // 函数执行与函数名解耦
          }
        }
    this表示当前对象，是函数在执行时所处的作用域（当在网页的全局作用域调用函数时，this对象引用的就是window）。
    call、apply--都允许显示的指定调用的this值，即任何函数可以作为任何对象的方法来调用，哪怕这个函数不是这个对象的方法
      call、apply作用完全一样，只是接受参数的方式不太一样。
      call、apply的第一个实参是要调用函数的母对象，它是调用上下文，在函数体内通过this来获得它的引用。
          f.call(o, arg1, arg2);
          f.apply(o, [arg1, arg2]);
      
    每个函数都包含两个属性：length 和 prototype。其中length表示函数希望接收的命名参数的个数。如：
        function sum(n1,n2){return n1+n2;}; // length = 2
        function say() {}; // length = 0
    prototype--理解原型  参考 Javascript高级程序设计 p119 以及 图6-1
    无论何时，只要创建一个新函数，就会根据一组特定的规则（？？）为该函数创建一个prototype属性。
    默认情况下，所有prototype属性都会自动获得一个constructor（构造函数）属性，这个属性包含一个指向prototype属性所在函数的指针
    如Person.prototype.constructor指向Person。
    创建了自定义的构造函数之后，原型属性默认只会取得constructor属性，至于其他方法则都是从Object（内置对象）继承而来。
    
    原型化继承--原型链
    
    事件
    
    Ajax