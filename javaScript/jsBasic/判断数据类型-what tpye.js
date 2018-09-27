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

//对Array、Object、null、Date、RegExp无法识别，另外NaN也需要判断
function typeOfData (data) {
  if(typeof(data)==="number" && !isNaN(data)){return "number"}
  else if(typeof(data)==="string"){return "string"}
  else if(typeof(data)==="boolean"){return "boolean"}
  else if(typeof(data)==="function"){return "function"}
  else if(typeof(data)==="undefined"){return "undefined"}
  else if(isNaN(data)&&typeof(data)!=="object"){return "NaN"}
  else if(data===null){return "null"}
  //数组才有sort方法
  else if(typeof(data.sort)==="function"){return "array"}
  //日期才有getTime()
  else if(typeof(data.getTime)==="function"){return "Data"}
  //正则表达式才有test()
  else if(typeof(data.test)==="function"){return "RegExp"}
  else if(typeof(data)==="object"){return "object"}
  else {return "这是什么鬼类型？"}
}
