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

//返回指定开始位置（包括开始位置，若为负数则从末尾处开始计算起始位置，即-1表示倒数第一个）
//到指定结束位置（不包括结束位置，若未指定此参数，则包括从指定的开始位置开始到字符串结尾的所有字符）的字符串
"She is Good Dancer".slice(0,3) //"She"
"She is Good Dancer".slice(-6,-1) //"Dance"

//substr(index,length)：提取从指定index（索引，必需，若为负数则从末尾处开始计算起始位置，即-1表示倒数第一个）
//开始的length（长度，可选，若未指定此参数，则包括从指定的index开始到字符串结尾的所有字符）个字符
"She is Good Dancer".substr(4,3) //"is "
"She is Good Dancer".substr(-6,6) //"Dancer"

//提取指定开始位置（包括开始位置）到结束位置（不包括结束位置，可选，若未指定此参数，
//则包括从指定的开始位置开始到字符串结尾的所有字符）的字符
//与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数
"She is Good Dancer".substring(0,3) //"She"
"She is Good Dancer".substring(-1,7) //负数变成0 "She is "
"She is Good Dancer".substring(-19,7) //"She is "

//将字符串分割为子字符串数组（第二个参数可指定返回的数组的最大长度，可选）
"do not want to work".split(" ") //返回数组 ["do", "not", "want", "to", "work"]

//将字符串转换为小写
"Yo~ Bro Wath is up".toLowerCase() //"yo~ bro wath is up"
//转换为大写
"Yo~ Bro Wath is up".toUpperCase() //"YO~ BRO WATH IS UP"

//返回字符串
[1,2,3].toString() //"1,2,3"
"do not want to work".split(" ").toString() //"do,not,want,to,work"

//////////////////////////////////////////////////////////////////////////////////////////

//搜索字符并添加标记
var searchStr = function(content,regexp){
  value=value.toString()
  var patt1=new RegExp(value);
  content.replace(regexp,"#"+)
  
}

//学习：https://www.cnblogs.com/guoyeqiang/p/8178336.html

