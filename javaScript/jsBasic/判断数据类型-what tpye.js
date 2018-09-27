typeof(...) //适合判断基础类型,返回字符串,全小写
       
typeof (1) //"number"
typeof (!1) //"boolean"
typeof (true) //"boolean"
typeof ("123") //"string"
typeof ([1,2]) //"object"
typeof (function(){}) //"function"
typeof ({a:1,b:2}) //"object"
typeof (new Date()) //"object"
typeof (null) //"object"
typeof (NaN) //"number"
typeof (undefined) //"undefined"

//对Array、Object、null无法识别，另外NaN也需要判断
function typeOfData (data) {
  if(typeof(data)==="number" && !isNaN(data)){return "number"}
  else {}
  if(typeof(data)==="string"){return "string"}
  if(typeof(data)==="boolean"){return "boolean"}
  if(typeof(data)==="function"){return "function"}
  if(typeof(data)==="undefined"){return "undefined"}
  if(isNaN(data)&&typeof(data)!=="object"){return "NaN"}
  if(data===null){return "null"}[]
  if(typeof(data)==="object"){return "object"}
  
  //数组才有sort方法
  if(typeof(data.sort)==="function"){return "array"}
  //
  if(typeof(data.sort)==="function"){return "array"}
  
}
