
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

//匿名函数
function () {}


