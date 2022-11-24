(function() {
    $.functions = function() {
        function showName(age) {
            return this.name + ",age:" + age;
        }
        let obj = {
            name:"nihao"
        };
        console.log(showName.call(obj, 18)); // call改变this指向
        console.log(showName.apply(obj, [99]));
        let fn = showName.bind(obj, 21); // showName.bind只能绑定一次
        console.log(fn()); // nihao
        let obj2 = {
            name:"nihao"
        };
        let fn2 = showName.bind(obj2, 22);
        console.log(fn2()); // nihao
    }
}());