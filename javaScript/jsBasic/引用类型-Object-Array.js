//创建 Array 对象
new Array(); //[]
new Array(10); //设置length (10) [empty × 10] 10个undefined
[10] //[10]
new Array(1,2,3,4,5); //(5) [1, 2, 3, 4, 5]

//海纳百川的Array
[
  Array(3),
  {a:1,b:2,c:3},
  "num03",
  2,
  ['a','b','c']
] //(5) [Array(3), {…}, "num03", 2, Array(3)]

var rap =["mchotdong","B.I.G","..."]
//通过索引访问数组元素
rap[0] //"mchotdong"
rap[rap.length-1] //最后一个 "..."
//遍历数组 参数：值>索引>数组 名称可自定义
rap.forEach(function ( item,index,array){
  console.log(item,index,array)
})
//参数：索引 in Array
for(x in rap){
  console.log(rap[x])
}
//添加元素到末尾，返回length
rap.push("eminem") //4
rap //(4) ["mchotdong", "B.I.G", "...", "eminem"]
//删除末尾的元素,返回被删除的值 ???有点怪怪的
rap.pop() //"eminem"
rap //(3) ["mchotdong", "B.I.G", "..."]
//添加元素到头部,返回length
rap.unshift("2PAC") //4
rap //(4) ["2PAC", "mchotdong", "B.I.G", "..."]
//删除头部的元素,返回被删除的值
rap.shift() //"2PAC"
rap //(3) ["mchotdong", "B.I.G", "..."]

//数组的length属性可以改变,返回的类型和push()和pop()相反！
//末尾新增
rap[rap.length]="MC" //"MC"
//末尾删除
rap.length-=1 //4


//找出某个元素在数组中的索引，并返回，找不到则返回-1
rap.indexOf("...") //2
rap.indexOf("who") //-1
if(~rap.indexOf("who")) console.log("yes");else console.log("no")

//多功能，数组区间删除，批量新增
//arrayObject.splice(index索引,howmany删除数量,item1,.....,itemX新增项目)
//通过索引删除,返回被删除的值
var lz =["a","b","c","d"]
lz.splice(0,1) //["a"] 删除第一个值，从索引0开始删除1个
lz.splice(lz.length-1,1) //["d"] 删除最后一个值
lz.splice(0,lz.length-0) //清空 (3) ["b", "c", "d"]
//通过索引增加,从index开始,返回[] ???蛤 因为只返回删除的值啊，所以是空
var lz =["a","b","c"]
lz.splice(0,0,"new01","new02") //头部新增
lz //(5) ["new01", "new02", "a", "b", "c"]
lz.splice(0,2) //(2) ["new01", "new02"]
lz //(3) ["a", "b", "c"]
lz.splice(lz.length-1,0,"new03","new04")
lz //(5) ["a", "b", "new03", "new04", "c"]
lz.splice(lz.length,0,"new05","new06") //末尾新增
lz //(5) ["a", "b", "new03", "new04", "c"]
lz //(7) ["a", "b", "new03", "new04", "c", "new05", "new06"]
//替换，先删后增
var lz =[1,2,3,4,5,6]
lz.splice(1,4,"2到5") //(4) [2, 3, 4, 5]
lz // [1, "2到5", 6]

//复制一个数组
var lz =[1,2,3,4,5,6]
var lz2 = lz.slice() //(6) [1, 2, 3, 4, 5, 6]
lz.splice(1,3) // [2, 3, 4]

//合并数组
var a=[1,2,3];b=[4,5,6];c=[7,8]
a.concat(b,c) //(8) [1, 2, 3, 4, 5, 6, 7, 8]
a.concat(["a","b"]) //相当于在末尾新增 [1, 2, 3, "a", "b"]
["a","b"].concat(a) //相当于头部新增 ["a", "b", 1, 2, 3]

//所有元素放入一个字符串
a.join("--")	//"1--2--3"
a.join("") 	//"123" 
a.join() 	//"1,2,3" //相当于数组转字符串
a.toString() 	//"1,2,3"
String(a)	//"1,2,3"
a+''		//"1,2,3"

//颠倒数组中元素的顺序
a.reverse()
//衍生 反转字符串
var d ="Rap Is Cool~"
d.split("").reverse().join("") //"~looC sI paR"

//数组的元素进行排序
//没参数时，将按照字符编码的顺序进行排序,结果就是乱七八糟，所以一定要加参数
//如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，
//然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
    // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    // 若 a 等于 b，则返回 0。
    // 若 a 大于 b，则返回一个大于 0 的值。
arrayObject.sort(sortby)
//数字排序
var arrnum = [10,3,4,5,11,1,100,203,300,1002,99,11,12,14,20,21,22,50,55,59,60,"2223",123,"002","999"]
arrnum.sort((a,b)=>a-b) //正序
arrnum.sort(function(a,b){return b-a}) //倒序
//语言排序 localeCompare本地比较 对非 ASCII 字符排序
var arren =["bann","array","fuck","click","Auu","Mm","Ba"]
arren.sort(function(a,b){return a.localeCompare(b)}) //正序 大写优先
arren.sort(function(a,b){return b.localeCompare(a)}) //倒序

//中文排序 按拼音 牛逼啊 声调也能排
var arrcn =["必须","啊","大爷","鼻子","比较","吃货","逼"]
arrcn.sort(function(a,b){return a.localeCompare(b)}) 
arrcn //["啊", "逼", "鼻子", "比较", "必须", "吃货", "大爷"]

//⚠️ 这些方法会改变原来的数组，而不会创建新的数组
var change = [1,2,3]
change.splice(0,1,"000"); change //["000", 2, 3]
change.reverse(); change //[3, 2, 1]
pop();push();shift();unshift();sort()
//所以最好先slice()一份
var copy=change.slice();
copy.pop(); copy //[1, 2]
change //[1, 2, 3]

////////////////////////////////////////////////////////////////////////////
//分隔数组
var lz =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
//按每份数量
var separationArrayData = function (arraydata,data){
  var array=arraydata.slice();
  var jg =[] //结果
  //份数
  if(!(array.length%data)) var page =array.length/data
  else var page = parseInt(array.length/data) +1
  for(var i=0;i<page;i++){
    var sldata = array.splice(0,data)
    jg.splice(jg.length,0,sldata)
  }
  return jg
}
separationArrayData(lz,10)
/*
(3) [Array(10), Array(10), Array(3)]
0:(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1:(10) [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
2:(3) [21, 22, 23]
*/

//按份数
var lz =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
var separationArrayNum = function (arraydata,num){
  var array=arraydata.slice();
  var jg =[] //结果
  //每份长度
  if(!(array.length%num)) var num_len = array.length/num
  else var num_len = parseInt(array.length/num)+1
//   if(!(array.length%num)) var page =array.length/num
//   else var page = parseInt(array.length/num) +1
  for(var i=0;i<num;i++){
    var sldata = array.splice(0,num_len)
    jg.splice(jg.length,0,sldata)
  }
  return jg
}
separationArrayNum(lz,2)


/////////////////// 判断数组元素是否重复
isArrRepeat(arr) {
  var _arr = arr.sort();
  console.log(_arr)
  for (var i = 0; i < _arr.length; i++) {
    if (_arr[i] === _arr[i + 1]) {
      return true;
    }
  }
  return false;
}

////////////////////数组去重
var ssdd=['卫','国','东','亮','品','阎','奕','宣','品','颜','浩','宇','品','闫','晓','初','潆','龙','浩','然','浩','均','宇','辰','泽','西','泺','西','博','西','淋','西','洛','西','均','泽','若','霖','筠','达','多','多','筠','泽','佳','益','一','唯','靖','埕','征','月','品','严','品','开','发','和','佳','乐','向','春','宇','杰','海','东','家','驹','博','通','文','贤','广','通','学','豪','展','成','展','灰','灰','展','展','森','森','展','展','城','旭','成','成','旭','辉','煌']
for(var i =0; i<ssdd.length;i++){
	for( var j =i+1; j<ssdd.length;j++){
		if(ssdd[i]==ssdd[j]){
			ssdd.splice(j,1)
    }
	}
}
//另一种
function unique1(array){
  var n = []; //一个新的临时数组
  //遍历当前数组
  for(var i = 0; i < array.length; i++){
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}








