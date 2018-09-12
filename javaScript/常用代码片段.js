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
//解决精度问题
var toFixed_ok =function(value,num){
  value-0
  let int_num ="";
  for(let i =0;i<num;i++){
    int_num=int_num+"0"
  }
  let int_num2="1"+int_num;
  let jg = Math.round(value*int_num2)/int_num2
  if (typeof jg === 'number' && jg%1 === 0) return jg+"."+int_num
  else return jg+""
  
}

var toFixed_best =function(value,num){
  let t ={
    value:value, //需处理的值 ,keep_zero,keep_zero,rounding
    num:num, //精确到
    keep_zero:true, //是否保留小数点后的0 -> 87.00、13.000
    rounding:true, //四舍五入
    value_num:"",
    value_num2:"",
    value_num3:"",
    value_num_dot:"",
    result:0,
    i:0,
    y:0
  }
  t.value-0
  for(t.i =0;t.i<t.num;t.i++){
    t.value_num=t.value_num+"0"
  }
  t.value_num2="1"+t.value_num
  t.value_num_dot="."+ t.value_num
  t.result = Math.round(t.value*t.value_num2)/t.value_num2 //(1.23*100)/100
  if(keep_zero){
    t.result+""
    if (t.result.indexOf(".")=== -1){
      return t.result+t.value_num_dot
    }
    else {
      for(t.y=0;t.y<(t.num - (t.result.length - t.result.indexOf(".")));t.y++){
        t.value_num3=t.value_num3+"0"
      }
      return t.result+t.value_num3
    }
  }
  else return t.result+""
  
}

