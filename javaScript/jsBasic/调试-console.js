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

//快捷
$_ //上次执行的结果
$0,$1,$2,$3,$4 //最近审查的元素div

//重写样式
console.log("%c"+"文档劳斯莱斯来的",'font-size:50px;font-weight:blod;color:#31aae5;')
//
console.log("%c"+[
	"11111           11111  			   ",                                                                                                                    
    "11111           11111                 ",
    "11111           11111                 ",
   "Release 0.1.0 Powered by ",
    ].join("\n"),'font-size:10px;font-weight:blod;color:#31aae5;')
