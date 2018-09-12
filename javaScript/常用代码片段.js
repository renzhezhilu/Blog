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

var toFixed_best =function(value,num,keep_zero,keep_zero,rounding){
  let t ={
    value:value-0, //需处理的值
    num:2, //精确到
    keep_zero:true, //是否保留小数点后的0 -> 87.00、13.000
    rounding:true, //四舍五入
    value_num:"",
    value_num2:"",
    i:0
  }
  t.value-0
  for(t.i =0;t.i<t.value_num;t.i++){
    t.value_num=t.value_num+"0"
  }
  t.value_num2="1"+int_num;
  let jg = Math.round(value*int_num2)/int_num2
  if (typeof jg === 'number' && jg%1 === 0) return jg+"."+int_num
  else return jg+""
  
}

