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
  value+""
  let dot = (value.length)-(value.indexOf("."))-2
  let int_num ="";
  for(let i =0;i<num;i++){
    int_num=int_num+"0"
  }
  int_num="1"+int_num;
  return Math.round(value*int_num)/int_num
  //return ((value*int_num).toFixed(num))/int_num
}

