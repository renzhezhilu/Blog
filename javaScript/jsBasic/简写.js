var str = '123456'
if(~str.indexOf(0)){
  console.log('因为取反之后不为零，说明indexOf的结果不等于-1，所以表示str字符串里包含了对应字符')
} else {
  console.log('xxxxxx')
}
