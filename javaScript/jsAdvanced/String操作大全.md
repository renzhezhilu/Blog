
//https://www.cnblogs.com/wyaocn/p/5811014.html
### 01.去除两边的空格/换行
```javascript
"  hello world w t f    ".trim()  
//"hello world w t f"

```

### 01.只保留数字 [^0-9]
```javascript
'https://apps.apple.com/cn/app/id1455211711'.replace(/[^0-9]/ig,"")
//1455211711
```

### 02.只保留数字/字母/汉字 [^a-zA-Z0-9\u4e00-\u9fa5]
```javascript
let rests = /[^a-zA-Z0-9\u4e00-\u9fa5]/g

'《名侦探柯南》1222动画JSJSN“」「）（&¥#&*（里有没有什么值得被称为经典||》《？”：¥@！～@……J的集数？'.replace(rests,"")

//"名侦探柯南1222动画JSJSN里有没有什么值得被称为经典J的集数"
```


