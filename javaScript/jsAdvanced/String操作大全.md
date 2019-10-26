
//https://www.cnblogs.com/wyaocn/p/5811014.html
//http://c.biancheng.net/view/5632.html
### 01.去除两边的空格/换行
```javascript
"  hello world w t f    ".trim()  
//"hello world w t f"

```

### 02.只保留数字 [^0-9]
```javascript
'https://apps.apple.com/cn/app/id1455211711'.replace(/[^0-9]/ig,"")
//1455211711
```

### 03.只保留数字/字母/汉字 [^a-zA-Z0-9\u4e00-\u9fa5]
```javascript
let rests = /[^a-zA-Z0-9\u4e00-\u9fa5]/g

'《名侦探柯南》1222动画JSJSN“」「）（&¥#&*（里有没有什么值得被称为经典||》《？”：¥@！～@……J的集数？'.replace(rests,"")

//"名侦探柯南1222动画JSJSN里有没有什么值得被称为经典J的集数"
```

### 04.生成随机id
```javascript

createUniqueId
console.log(Date.now());
function createUniqueId(n) {
    var random = function() { // 生成10-12位不等的字符串
        return Number(Math.random().toString().substr(2)).toString(36); // 转换成十六进制
    }
    var arr = [];
    function createId() {
        var num = random();
        var _bool = false;
        arr.forEach(v => {
            if(v === num) _bool = true;
        });
        if(_bool) {
            createId();
        }else {
            arr.push(num);
        }
    }
    var i = 0;
    while(i < n) {
        createId();
        i++;
    }
    return arr;
}
console.log(Date.now());

// 关于random函数，还有其它版本
// 版本一：
var random = function() { // 生成10-12位不等的字符串
    return Math.random().toString(36).slice(2); // 截取小数点后的字符串
}
// 版本二：
var random = function(n) { // 生成6位长度的字符串
    return (~~(Math.random() * (1 << 30))).toString(36); // "<<"操作相当于乘上2的n次方，"~~"相当于parseInt
}
// 版本三：
var random = function(n) { // 生成n位长度的字符串
    if(n === 1) return (~~(Math.random() * 36)).toString(36);
    return (~~(Math.random() * 36)).toString(36) + random(n-1); // 递归在性能上不怎么理想，不推荐
}
// 或
var random = function(n) { // 生成n位长度的字符串
    return function(n, s) {
        if(n === 1) return s;
        return random(n -1, (~~(Math.random() * 36)).toString(36) + s);
    }(n, (~~(Math.random() * 36)).toString(36));
}
// 版本四：
var random = function(n) { // 生成n位长度的字符串
    var str = "abcdefghijklmnopqrstuvwxyz0123456789"; // 可以作为常量放到random外面
    var result = "";
    for(var i = 0; i < n; i++) {
        result += str[parseInt(Math.random() * str.length)];
    }
    return result;
}
```



