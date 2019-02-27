/////没有自己的this,适合匿名函数
//语法
(a,b) => {
  let p = 3.14
  return a*p + b*p
}
//没有参数就()
() => {
  let p = 3.14
  return p*p 
}
//单个参数可以省略()
a => {
  let p = 3.14
  return a*p 
}
//返回单行表达式可以省略{}
a => a*3.14  // 相当于 (a) => { return a*3.14 }

let timeNum = () => new Date().getTime()

//三元运算符
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

// 空的箭头函数返回 undefined
let empty = () => {};

setTimeout( () => {
    console.log('I happen later');
}, 1000);

//箭头函数体的闭包（ i=0 是默认参数）
var Add = (i=0) => {return (() => (++i) )};
var v = Add();
v();           //1
v();           //2

var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );
fact(5);       // 120
