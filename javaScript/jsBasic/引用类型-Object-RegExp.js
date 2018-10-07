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

//匹配规则 

//点字符"."
//表示除回车（r）、换行(n) 、行分隔符（u2028）和段分隔符（u2029）以外的所有字符
//一个点一个字符
"fu*k funk far fook".match(/f..k/g) //(3表示["fu*k", "funk", "fook"]
"fu*k funk far fook".match(/f.k/g) // null
//如果不确定中间多少字符或者很多怎么办，可以用.* 或见[^]
"fu*k funk far fook".match(/f.*k/g) //["fu*k funk far fook"]

//位置字符  "$"、"^"  (shift+6)
//^ 字符串的开始位置
//$ 字符串的结束位置
/^abc/.test("abc def") //true
/^abc/.test("0 abc def") //false
"wath is the def".search(/def$/) // 12

//选择符 "|" 或的意思
/123|a/.test("123456") //true
/321|abc/.test("123456") //false

//转义符 "\"
//特殊含义的元字符需要先转义,有12个字符需要转义：^  .  |  [  $  (  )  *  +  ?  {  。
/1+1/.test("1+1+2") //false
/1\+1/.test("1+1+2") //true
//RegExp方法生成，需要两个\\
(new RegExp('1\+1')).test('1+1') //false
(new RegExp('1\\+1')).test('1+1') //true

////字符类
//只要匹配其中一个a或b或c就可以
/[操干逼屎]/.test("麻痹今天差点踩到狗屎了") //true
/[操干逼屎]/.test("今天操作可以啊") //true

//脱字符 "^"
//如果方括号内的第一个字符是[^xyz]表示除了x、y、z之外都可以匹配：
/[^abc]/.test('hello world') // true
/[^abc]/.test('bbc') // false
//[^]，就表示匹配一切字符，其中包括换行符。相比之下，点号作为元字符（.）是不包括换行符的。
var s = 'Please yes\nmake my day!';
s.match(/yes.*day/) // null
s.match(/yes[^]*day/) // [ 'yes\nmake my day']

//连字符 "-"
//对于连续序列的字符，连字符（-）用来提供简写形式
//[abc]可以写成[a-c] [0-9] [a-z] [A-Z] 
/a-z/.test('b') // false
/[a-z]/.test('b') // true 
[0-9.,]
[0-9a-fA-F]
[a-zA-Z0-9-]
[1-31] //表示1到3不是1到31
"24".match(/[1-31]/) //["2", index: 0, input: "24", groups: undefined]

////预定义模式 

// d 匹配0-9之间的任一数字，相当于[0-9]。
// D 匹配所有0-9以外的字符，相当于[^0-9]。
// w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
// W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
// s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
// S 匹配非空格的字符，相当于[^ \t\r\n\v\f]。
// b 匹配词的边界。
// B 匹配非词边界，即在词的内部。














