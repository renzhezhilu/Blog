//声明
var a=1,
    b=2,
    c=3;

//数字string -> number
+"123"
//反过来
123+""

//float -> int 下舍
~~12.97484  //12

//日期 -> 时间戳
+new Date() //1542685752976

//array -> string 一维数组
[1,2,3,4]+','+[5,6,7]  //"1,2,3,4,5,6,7"


var str = '123456'
if(~str.indexOf(0)){
  console.log('因为取反之后不为零，说明indexOf的结果不等于-1，所以表示str字符串里包含了对应字符')
} else {
  console.log('xxxxxx')
}
