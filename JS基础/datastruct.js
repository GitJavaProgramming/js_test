$(function () {
    $.DataStruct = (function () {
        this.Stack = (function () {
            let stack = {};
            let arr = [];
            stack.top = 0;
            stack.push = function (item) {
                arr[stack.top++] = item;
            }
            stack.pop = function () {
                return arr[--stack.top];
            }
            return stack;
        }());
        return this;
    }());
    let stack = $.DataStruct.Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.top);
});