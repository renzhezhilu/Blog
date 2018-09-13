//字符串长度
"string".length
//返回指定索引位置的字符
"abc".charAt(1) //"b"
//返回指定索引位置字符的Unicode编码
"abc诶比西".charCodeAt(1) //98
//Unicode编码转成字符
String.fromCharCode(97) //"a"
//连接字符串
"123".concat("456") //"123456"
"0".concat(123) //"123"
"abc"+"123" //"abc123"
//返回指定字符串第一次出现的位置,没有返回-1
"wtf".indexOf("w") //0  
"1.345,2.2".indexOf(".") //1
//最后一次出现的位置，没有返回-1
"wftwtf".lastIndexOf("w") //3
"wftwtf".lastIndexOf("wtf") //3

//找到一个或多个正则表达式的匹配，没有返回null
"old school".match('o') //返回对象[0 : "o" groups : undefined index : 0 input : "old school" length : 1]
"old school".match(/o/g) //返回数组 ["o", "o", "o"]
"123".match(/0/) //null
var yyu = "123".match(/0/)
Boolean(yyu) //false  //null
var yyu = "123".match(/1/)
Boolean(yyu) //true

//替换与正则表达式匹配的子串
"Hip Hop".replace(/Hop/,'Hop Is Power') //第一个 "Hip Hop Is Power"
"Hip Hop".replace(/p/g,'P') //全局 "HiP HoP"
"Hip Hop".replace(/p/g,'1') //没有找到 "Hip Hop"

//返回与正则表达式匹配的子串的起始位置，没有返回-1
"Popin".search(/i/) //3
"Popin&Locking".search(/in/g) //3
"Popin&Locking".search(/l/i) //6
