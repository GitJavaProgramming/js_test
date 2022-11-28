(function () {
    console.log("****************设计模式****************");
    function Universe() {
        if (typeof Universe.instance === "object") {
            return Universe.instance;
        }
        Universe.instance = this;
        return this;
    }
    function Singlton() {
        let instance = this;
        Singlton = function Singlton() { // 重写构造函数
            return instance;
        }
        Singlton.prototype = this;
        instance = new Singlton();
        instance.constructor = Singlton;
    }
    let instance1 = new Singlton();
    let instance2 = new Singlton();
    console.log(instance1 === instance2);
}());