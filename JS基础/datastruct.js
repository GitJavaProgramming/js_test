console.log("****************数据结构****************");
(function () {
    let dataStruct = (function () {
        this.Stack = (function () {
            let stack = {};
            let arr = [];
            stack.top = 0;
            stack.push = function (item) {
                arr[stack.top++] = item;
            }
            stack.pop = function () {
                let elem = arr[--stack.top];
                arr = arr.slice(0, -1);
                return elem;
            }
            stack.print = function () {
                console.log(arr);
            }
            return stack;
        });
        return this;
    }());
    let stack = dataStruct.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.print();
    let stack2 = new dataStruct.Stack();
    stack2.push(11);
    stack2.push(22);
    stack2.push(33);
    stack2.print();

    function Stack() {
        this.top = 0;
        this.arr = [];
    }
    Stack.prototype.push = function (elem) {
        this.arr[this.top++] = elem;
    }
    Stack.prototype.pop = function () {
        let elem = this.arr[--this.top];
        this.arr = this.arr.slice(0, -1);
        return elem;
    }
    Stack.prototype.print = function () {
        console.log(this.arr);
    }
    let s = new Stack();
    s.push(10);
    s.push(34);
    s.push(12);
    s.print();
    s.pop();
    s.print();
}());