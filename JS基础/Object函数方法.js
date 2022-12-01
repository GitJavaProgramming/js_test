(function () {
    console.log("****************Object静态方法****************");
    let o = {};
    o.fn1 = function (assign) {
        let target = arguments[0] || {};
        if (arguments.length === 1) {
            target = this;
        }
        return Object.assign(target, assign);
    }
    o.fn2 = function (obj) {
        Object.keys(obj).forEach(prop => {
            let value = obj[prop];
            Object.defineProperty(obj, prop, { // 第三个参数：属性描述符
                get: function () {
                    console.log("属性：[", prop, "]被访问！");
                    return value;
                },
                set: function (newValue) {
                    if (value !== newValue) {
                        console.log("属性：[", prop, "]值被修改！");
                        value = newValue;
                    }
                }
            });
        });
    }
    let o1 = { a: "11", b: 22 };
    console.log(o.fn1(o1));
    // Object.freeze(o1);
    o.fn2(o1);
    let descriptor = Object.getOwnPropertyDescriptor(o1, "a");
    console.log(descriptor);
    Object.seal(o1);
    Object.freeze(o1);
    console.log("是否可扩展：", Object.isExtensible(o1));
    console.log("是否被冻结：", Object.isFrozen(o1));
    o1.a = "100";
    console.log(o1.a);
    return o;
}());
(function () {
    let data = {
        number: 0,
        o: {
            a: '1',
            b: 21
        }
    }

    observe(data);

    console.log(data.number);
    data.number = 1 // 值发生变化

    console.log(data.o.a);

    function observe(data) {
        if (!data || typeof (data) !== 'object') {
            return
        }
        this.defineReactive = function (data, key, value) {
            observe(value) // 遍历嵌套对象
            Object.defineProperty(data, key, {
                get: function () {
                    console.log("属性：[", key, "]被访问！");
                    return value
                },
                set: function (newValue) {
                    if (value !== newValue) {
                        console.log('值发生变化', 'newValue:' + newValue + ' ' + 'oldValue:' + value)
                        value = newValue
                    }
                }
            })
        }
        const self = this
        Object.keys(data).forEach(key =>
            self.defineReactive(data, key, data[key])
        )
    }
}());