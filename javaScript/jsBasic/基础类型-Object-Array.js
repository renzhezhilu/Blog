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

//通过索引增加,从index开始,返回[] ???蛤
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
lz.splice(1,4,"2到5")
// [1, "2到5", 6]





