(function () {
    let xmlHttpRequest = null;
    if (window.ActiveXObject) {
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();
    }
    function callback() {
        // readyState保存XMLHttpRequest的状态。
        // 0：请求未初始化
        // 1：服务器连接已建立
        // 2：请求已收到
        // 3：正在处理请求
        // 4：请求已完成且响应已就绪
        if (xmlHttpRequest.readyState === 1) {
            alert("nihao");
        }
    }
    xmlHttpRequest.onreadystatechange = callback();
    xmlHttpRequest.open("GET", "/", true);
}());