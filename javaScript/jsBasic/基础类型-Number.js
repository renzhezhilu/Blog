//转成整数
parseInt("3.99") //3
parseInt(23*2) //46
parseInt("0056.455") //56
parseInt("764jkd34") //764 
~~"3.99" //3
//转成四舍五入整数
Math.round(19.799) //19
+(3.6542.toFixed(0)) //4

//转成浮点数、小数
parseFloat("3.999") //3.999
parseFloat("4.3fd034") //4.3
//截取小数点后N位,!!!!!!!!有精度问题!!!!!!
1.5994.toFixed(2) //1.60  正确
1.335.toFixed(2) //1.33  错误

// var toFixed_ok =function(value,num){
//   value-0
//   let int_num ="";
//   for(let i =0;i<num;i++){
//     int_num=int_num+"0"
//   }
//   let int_num2="1"+int_num;
//   let jg = Math.round(value*int_num2)/int_num2
//   if (typeof jg === 'number' && jg%1 === 0) return jg+"."+int_num
//   else return jg+""
// }
//解决精度问题
var toFixedBest =function(value,num,keep_zero,rounding){
  //设置默认值
  if(!value || !num) return console.log(" 缺少数值！！！\n toFixedBest函数参数：\nvalue(必选),\n num(必选),\n keep_zero(默认flash,是否保留小数点后的0),\n rounding(默认true,四舍五入)")
  if (!keep_zero) keep_zero=false
  if (!rounding) rounding=true
  let t ={
    value:value, //需处理的值 ,keep_zero,keep_zero,rounding
    num:num, //精确到
    keep_zero:keep_zero, //是否保留小数点后的0 -> 87.00、13.000
    rounding:rounding, //四舍五入
    value_num:"",value_num2:"",value_num3:"", value_num_dot:"",result:0,i:0,y:0
  }
  if (isNaN(+t.value)) return console.log("非有效值-"+t.value)
  t.value=t.value-0
  for(t.i =0;t.i<t.num;t.i++){
    t.value_num=t.value_num+"0"
  }
  t.value_num2=+("1"+t.value_num)
  t.value_num_dot="."+ t.value_num
  //四舍五入
  if(t.rounding) t.result = Math.round(t.value*t.value_num2)/t.value_num2 
  else t.result = parseInt(t.value*t.value_num2)/t.value_num2
  //小数点后的0
  if(t.keep_zero){
    t.result=t.result+""
    if (t.result.indexOf(".")=== -1){
      return t.result+t.value_num_dot
    }
    else {
      for(t.y=-1;t.y<(t.num - (t.result.length - t.result.indexOf(".")));t.y++){
        t.value_num3=t.value_num3+"0"
      }
      return t.result+t.value_num3
    }
  }
  else return t.result+""
}

//数字保持同样的长度  10232.23->10232.2   2.34332132 -> 2.34332
var numSameLength = function (value,num,keep_zero,rounding){
  value=value+""
  let value_l = num - value.indexOf(".")
  return toFixedBest(value,value_l,keep_zero,rounding)
}

//数值的次方   //沙雕，有Math.pow(num,power)还自己写
function PowerOfNum (num,power){
  var i=0,j=1
  while(i<power){
  j=j*num  
  i++
  }
  return j
}
PowerOfNum(2,3) //8
Math.pow(2,3) //8 真香





var numSameLength = function (value,num,keep_zero,rounding){的次方
