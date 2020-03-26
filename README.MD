# 目录概述
    词法、表达式和语句
    执行代码与执行环境
    ECMAScript内置对象
    DOM、JS事件与Ajax
## 执行环境
    解释器为函数创建执行栈，当函数作为另一个函数参数传递时，两个栈以调用顺序压入栈
    
    规范ECMAScript-262-5.1中描述：
    Arguments 对象通过调用抽象方法 CreateArgumentsObject 创建，调用时将以
    下参数传入：func, names, args, env, strict。将要执行的函数对象作为 func 参
    数，将该函数的所有形参名加入一个 List 列表，作为 names 参数，将所有传
    给内部方法 [[Call]] 的实际参数，作为 args 参数，将该函数代码的环境变量作
    为 env 参数，将该函数代码是否为严格代码作为 strict 参数。     
    
## 函数与内置对象的一句话总结:
     (自定义)函数都是Function的实例，每个函数都有prototype属性（对象），每个prototype都有constructor属性，每个实例都包含
     指向prototype的属性(firefox中实现的属性名是__proto__)，通过给prototype属性赋值构造原型链。
        函数名作为new表达式一部分被调用时，作为构造器初始化新创建的对象
        
     规范ECMAScript-262-5.1中描述：
     Function、Object、Array、String等都是ECMA语言内置对象
     Function.prototype对象的属性
        Function.prototype.constructor
        Function.prototype.toString()
        Function.prototype.apply
        Function.prototype.call
        Function.prototype.bind // 用 Function.prototype.bind 创建的函数对象没有 prototype 属性。???
## Javascript总结     
     BOM--Window对象包含DOM文档属性
     DOM--Document 文档对象，HTML文档即网页
     ECMAScript语言提供DOM交互接口
         
     wiki页有简单描述  https://github.com/GitJavaProgramming/js_test/wiki
         
## 参考资料
     JavaScript高级程序设计 第二版
     https://developer.mozilla.org/zh-CN/docs/Web
     https://developer.mozilla.org/zh-CN/docs/Web/API/Window
     ECMAScript-262 5/6
     W3CScool 参考手册 https://www.w3school.com.cn/r.asp
     JavaScript权威指南
     精通JavaScript
     webkit技术内幕 ch02 P31
     TypeScript中文网 https://www.tslang.cn/docs/home.html

## 关于npm
    http://codingdict.com/article/7470
    https://cloud.tencent.com/developer/section/1490249
## 关于webpack
    https://cloud.tencent.com/developer/section/1477234
## MVVM 框架解析之双向绑定
    参考一个链接：实现了一个双向绑定
    https://www.jianshu.com/p/68f401203f66