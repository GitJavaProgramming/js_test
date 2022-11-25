(function () {
    document.write("<div id='block'><div>name<br/></div>");
    document.write("<div>title<br/></div></div>");
}());
// confirm prompt 定时器
// window ===> document location history navigator...
function say(id) {
    let curr = document.getElementById(id);
    let select = confirm("say:" + id);
    if (select) {
        let input = prompt("message:" + id);
        if (typeof input === "string") {
            console.log("input=[", input, "]");
            curr.innerHTML = "这是按钮";
        } else if (input === null) {
            console.log("begin");
            let a = setInterval(function () {
                for (let i = 0; i < 100; i++) {
                    console.log(i);
                }
            }, 1000);
            console.log("here");
            setTimeout(() => {
                clearInterval(a);
                console.log("end");
            }, 2000);
        }
    } else {
        console.log(history.length);
        // console.log(history.back());
        // console.log(history.forward());
        // console.log(history.go(1));
        location.reload(true); // 页面刷新
    }
}
// dom操作
$(function () {
    let list = document.getElementById("list");
    let child = list.childNodes;
    let count = 0;
    let arr = [];
    let text = [];
    let parentNode = null;
    for (let i = 0; i < child.length; i++) {
        if (parentNode === null) {
            parentNode = child[0].parentNode;
        }
        if (child[i].nodeType === 1) {
            arr.push(child[i].nodeName);
            // child[i].style.backgroundColor = "green";
            child[i].childNodes[0].nodeValue = "nihao";
            count++; // 统计子元素
        } else if (child[i].nodeType === 3) { // html代码格式化之后的换行符和tab符
            text.push(child[i]);
        }
    }
    console.log("arr=", arr);
    console.log("text=", text);
    console.log("count=", count);
});
