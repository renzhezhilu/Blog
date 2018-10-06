var reg = /xyz/  //字面量 更好
var regex = new RegExp('xyz') //构造函数

/x/.test("XP is old") //false
/x/i.test("XP is old") //true 加i忽略大小写

/x/i.exec("XP is old xdddd") // 忽略大小写找到第一个匹配的["X", index: 0, input: "XP is old xdddd", groups: undefined]
/x/g.exec("XP is old xdddd") // 全局搜索  ["x", index: 10, input: "XP is old xdddd", groups: undefined]
/y/i.exec("XP is old xdddd") //null

//exec在g全局模式下可以依次匹配被返回被搜索字符的index //必须赋值变量来进行
var rr = /d/gi
var str = "dog is Dos dark abcD dao"
//第1次
rr.exec(str) // ["d", index: 0, input: "dog is Dos dark abcD dao", groups: undefined]
//第2次
rr.exec(str) // ["D", index: 7, input: "dog is Dos dark abcD dao", groups: undefined]
//第3次
rr.exec(str) // ["d", index: 11, input: "dog is Dos dark abcD dao", groups: undefined]
//第4次
rr.exec(str) //["D", index: 19, input: "dog is Dos dark abcD dao", groups: undefined]
//第5次
rr.exec(str) //["d", index: 21, input: "dog is Dos dark abcD dao", groups: undefined]
//第6次
rr.exec(str) //null
//第7次 循环 ...
rr.exec(str) // ["d", index: 0, input: "dog is Dos dark abcD dao", groups: undefined]

// match可以一次性以数组返回结果 没有index 
str.match(rr) // (5) ["d", "D", "d", "D", "d"]

// search搜索,返回第1个匹配的index,没有返回-1
str.search(rr) //0
str.search(/k/gi) //14
str.search(/m/gi) // -1
//可以这样 ~取反 -1取反就是0 好做判断
~(str.search(/d/gi)) // -1
~(str.search(/m/gi)) // 0
!!~(str.search(/m/gi)) //false
!!~(str.search(/k/gi)) // true

