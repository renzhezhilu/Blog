//信息提示
console.log("普通信息") 
console.warn("警告")
console.error("错误")

//一组提示
console.group("组提示开始")
console.warn("内容01")
console.log("内容02") 
console.groupEnd("结束")

//执行次数
var c=0;
while(c<5){
  console.count("执行了");
  c++;
}

//执行时间
console.time("是我")
var a = [];
for(var i=0; i<1e6; i++){
  a.push(i);
}
console.timeEnd("是我")

