
//函数声明
//必须命名,会被提升到附属作用域的顶层，可以在声明前调用
fun() //is fun
function fun () { console.log("is fun")}
fun() //is fun

//函数表达式
fun2() //fun2 is not defined
var fun2 = function(){ console.log("fun2函数表达式")}
fun2() //fun2函数表达式

//立即执行函数表达式(IIFE)
//创建私有变量和作用域，外部无法获取，防止污染全局
( function (){console.log("just do")} ) () //just do
!function (val){ console.log(val)} ("我是参数") //我是参数
~function(){/* code */}();
-function(){/* code */}();
+function(){/* code */}();

//自执行函数
function auto (){ auto()} //注意⚠️死循环

//快捷调用
function fast(n){
	console.log(n)
	return fast;
}
fast(1)(2)(3) //1 2 3

//闭包
//阅读：https://segmentfault.com/a/1190000007569312#articleHeader5
//在代码执行完毕后保留私有变量，可通过变量所属的作用域的函数来调用
//相当于留个口子来访问私有变量，这个变量状态是可持续的，同时又只能局部访问
var bibao = (function(){
  var siyou = 1
  return {
    fun01: function(){
      siyou="fun01111"
      return console.log(siyou)
    },
    fun02: function(){
      siyou=siyou+"fun02222"
      return console.log(siyou)
    }
  }
}())
bibao.fun01() //fun01111
bibao.fun02() //fun01111fun02222
bibao.siyou // undefined 
siyou //ReferenceError: siyou is not defined

//比较麻烦的
function fff () {
	var nn = 1;
  return {
    f1: function () {
      return nn=nn+2
    } 
  }
}
fff() //要先执行一次 {f1: ƒ}
fff.f1 // undefined
fff().f1() //3

//参数不同执行
function todo () {
	if(arguments.length===2)  console.log("2个参数就执行");
	if(arguments.length===3)  console.log("3个参数就执行");
}


//函数封装
http://www.cnblogs.com/kuailingmin/p/3838322.html













