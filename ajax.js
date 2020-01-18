/*
* 异步JavaScript通信 -- 更新网页的部分内容而不需要刷新整个页面
* XMLHttpRequest ActiveXObject参考
* -- onreadystatechange* 指定当readyState属性改变时的事件处理句柄。只写
* -- readyState  返回当前请求的状态，只读.
* -- responseBody  将回应信息正文以unsigned byte数组形式返回.只读
* -- responseStream 以Ado Stream对象的形式返回响应信息。只读
* -- responseText 将响应信息作为字符串返回.只读
* -- responseXML 将响应信息格式化为Xml Document对象并返回，只读
* -- status 返回当前请求的http状态码.只读
* -- statusText  返回当前请求的响应行状态，只读

* http协议--参考 HTTP权威指南 ch03 HTTP报文 ch11 客户端识别与cookie机制等
* HTTP报文三个组成部分：起始行、首部、实体的主体部分
* -- 请求报文的起始行：eg. GET /home HTTP/1.1
* -- 响应报文起始行： eg. HTTP/1.1 200 OK
* */
import {$} from './prototype_chain'/*.js*/; // 模块导入
(function () {
    $.ajax = function (options) {
        options = {
            type: options.type || "POST", // http请求方法
            url: options.url || "", // http请求URL
            timeout: options.timeout || 5000, // 请求超时时间
            onComplete: options.onComplete || function () {
            },
            onError: options.onError || function () {
            },
            onSuccess: options.onSuccess || function () {
            },
            data: options.data || "" // 响应主体
        };
        let xhr = new XMLHttpRequest();
        alert(JSON.stringify(xhr));
        // oXMLHttpRequest.open(bstrMethod, bstrUrl, varAsync, bstrUser, bstrPassword);
        xhr.open("GET", "https://developer.mozilla.org/api/v1/whoami", true);

        /* 模拟ajax请求超时，设置状态位requestDone */
        let requestDone = false;
        setTimeout(function () {
            requestDone = true;
        }, options.timeout);

        /**
         * 指定当readyState属性改变时的事件处理句柄。readyState变量，此属性只读，状态用长度为4的整型表示.定义如下：
         * -- 0 (未初始化) 对象已建立，但是尚未初始化（尚未调用open方法）
         * -- 1 (初始化) 对象已建立，尚未调用send方法
         * -- 2 (发送数据) send方法已调用，但是当前的状态及http头未知
         * -- 3 (数据传送中) 已接收部分数据，因为响应及http头不全，这时通过responseBody和responseText获取部分数据会出现错误，
         * -- 4 (完成) 数据接收完毕,此时可以通过通过responseBody和responseText获取完整的回应数据
         * */
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && !requestDone) {
                if (httpSuccess(xhr)) {
                    options.onSuccess(httpData(xhr, options.type));
                } else {
                    options.onError();
                }
                options.onComplete();
                xhr = null; // help GC
            }
        };
        xhr.send(); // 发送请求到http服务器并接收回应

        function httpSuccess(xhr) { // 响应状态码
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                console.info(JSON.stringify(xhr.responseText));
                return true;
            } else {
                console.info("Request was unsuccessful : " + xhr.status);
                return false;
            }
        }

        /**
         * 处理数据--响应主体
         * content-type 是一个实体首部（查看HTTP权威指南 ch03 3.5首部），它指示这个主体的对象类型
         * 比如 WEB 浏览器通过查看返回的内容类型，来确定如何显示对象
         * content-type: application/json 等
         * eval是一个ECMAScript全局对象 见 https://www.w3school.com.cn/jsref/jsref_obj_global.asp
         * eval(string)
         * -- string 必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。
         * */
        function httpData(xhr, type) {
            let ct = xhr.getResponseHeader("content-type");
            let data = !type && ct && ct.indexOf("xml") >= 0;
            data = type == "xml" || data ? xhr.responseXML : xhr.responseText;
            if (type == "script") {
                // /**
                //  * Evaluates JavaScript code and executes it.
                //  * @param x A String value that contains valid JavaScript code.
                //  */
                // declare function eval(x: string): any;
                eval.call(window, data);
            }
            return data;
        }
    };
})($);

