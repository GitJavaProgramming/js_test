export const Observe = function (value) {
    this.value = value || {};
    this.walk = function (obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    }
    function defineReactive(obj, key, val) {
        if (arguments.length === 2) {
            val = obj[key];
        }
        if (typeof val === 'object') {
            new Observe(val);
        }
        Object.defineProperty(obj, key, {
            get() {
                console.log("属性被访问");
                return val;
            },
            set(newVal) {
                console.log("属性被修改,旧值：,新值：");
                val = newVal
            }
        });
    }
    if (Array.isArray(value)) {
        // 数组的逻辑
    } else {
        this.walk(value);
    }
}