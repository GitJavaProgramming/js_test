(function () {
    console.log("****************字符串与数组****************");
    // 字符串常用方法
    let o = {};
    o.fn1 = function () {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        let arr = str.split("", 26); // 分割字符串
        console.log("字符串分割：", arr);
        console.log("字符串连接：", str.concat("a", "c", "m"));
        let newStr = str.replace(/[cC]/g, function (subStr, index, str) {
            // console.log(subStr); // "c"
            // console.log(index); // 2
            // console.log(str); // str
            return "{x}";
        });
        console.log("匹配与替换：", newStr);
        console.log("字符串匹配：", str.match(/c/));
        console.log(str.match(/c/g));
        console.log("字符串查找：", str.search(/ABC/g));
        console.log("字符索引：", str.indexOf("f", 2));
        console.log(str.lastIndexOf("f"));
        console.log("获取指定位置字符：" + str.charAt(28));
        console.log("指定位置字符ASCII码:", str.charCodeAt(28));
        console.log("字符提取：", str.slice(-9)); // [start,end)
        console.log(str.slice(-9, -1)); // [start,end)
        console.log("字符串长度：", str.length);
        console.log("字符串补齐：", str.padStart(70, "0"));
    };
    let str = "afjaljfdklasqeerlfajdkfjajlqowfdsajkajdlald";
    // 逆序输出字符串
    o.fn2 = function () {
        let newStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str.charAt(i);
        }
        console.log("逆序：", newStr);
        var arr = Array.from(newStr);
        console.log("逆序：", arr.reverse().join(""));
    };
    // 统计字符串中出现最多的字符和次数
    o.fn3 = function () {
        let o = {};
        let mostChar;
        let max = 0;
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            if (o[char] === undefined) { // 如果o中不存在属性，则初始化属性值为0
                o[char] = 0;
            }
            o[char]++;
            // 统计 方法1
            // if (max < o[char]) {
            //     max = o[char];
            //     mostChar = char;
            // }
        }
        // 统计 方法2
        let newMax = 0;
        for (let p in o) {
            max = Math.max(max, o[p]);
            if (newMax < max) {
                newMax = max;
                mostChar = p;
            }
        }
        console.log("统计：", o);
        console.log("出现最多字符：", mostChar, "，次数：", max);
    };
    // 字符串去重
    o.fn4 = function () {
        let o = {};
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            if (o[char] === undefined) {
                o[char] = true;
                arr.push(char);
            }
        }
        console.log("字符串去重：", arr.join(""));
    };
    // 回文字符串
    o.fn5 = function () {
        // 方法1
        function func(str) {
            for (let i = 0; i < str.length; i++) {
                let char1 = str.charAt(i);
                let char2 = str.charAt(str.length - i - 1);
                if (char1 !== char2) {
                    return false;
                }
            }
            return true;
        }
        // 方法2
        function func2(str) {
            return str === str.split("").reverse().join("");
        }
        let str = "123321";
        console.log("是否是回文：", func(str));
        console.log("是否是回文：", func2(str));
    };
    // 数组常用操作
    o.fn6 = function () {
        let arr = [1, 2, 3, 4, 5, 6];
        console.log(arr.push(4), arr);
        console.log(arr.pop(), arr);
        console.log(arr.unshift(4), arr);
        console.log(arr.shift(4), arr);
        console.log(arr.concat(4, 5, 6), arr);
        console.log(arr.slice(2, 4));
        console.log(arr.splice(1, 2, 8, 9), arr);
        console.log(arr.reverse(), arr);
        console.log(arr.sort(), arr);
        // 数组中查找
        console.log(arr.indexOf(4), arr);
        console.log(arr.lastIndexOf(4), arr);
        console.log(arr.find(p => p === 4), arr);
        console.log(arr.some(p => p === 4), arr);
        console.log(arr.every(p => p === 4), arr);
        // Map和filter
        console.log(arr.map(x => x + 1), arr);
        const cards = [];
        for (let suit of ['H', 'C', 'D', 'S']) {
            for (let value = 1; value <= 13; value++) {
                cards.push({ suit, value });
            }
        }
        console.log(cards);
        console.log(cards.filter(c => c.suit === 'D'));
        console.log(cards.filter(c => c.value > 10 && c.suit === 'D'));
        // reduce
        arr = [1, 2, 3, 4, 5, 6];
        console.log(arr.reduce((p, c) => p + c, 0));
    };
    o.fn1();
    o.fn2();
    o.fn3();
    o.fn4();
    o.fn5();
    o.fn6();
})();