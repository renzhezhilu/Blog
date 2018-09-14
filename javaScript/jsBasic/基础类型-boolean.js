Boolean(value)		//转换函数，功能函数，返回true或fasle
new Boolean(value)	//构造函数，生成一个新的对象

Boolean(value) //将value转换为布尔值
// 当value为 空 或 0 -0 null false NaN undefined ""空字符串 时，则生成的值为 false
Boolean() //false
Boolean(0) //false
Boolean(-0) //false
Boolean(null) //false
Boolean(false) //false
Boolean(NaN) //false
Boolean(undefined) //false
Boolean("") //false

//其他则生成的值都为ture
//包括 Number Array Object Function 不为空的String 值为true的Boolean
Boolean("123") //true
Boolean([1,2]) //true
Boolean([]) //true
Boolean(100) //true
Boolean(true) //true
Boolean("false") //true
//❕new Boolean(false)这个对象的逻辑值为 false ,但是因为它是对象，所以是返回 true
Boolean(new Boolean(false)) //true
new Boolean(false).toString() //把逻辑值转换为字符串，并返回结果
Boolean({}) //true
Boolean(new String()) //true
Boolean(function abc(){}) //true
Boolean({a:1}) //true
Boolean(/abc/g) //true

//特别注意⚠️ 不要将基本类型中的布尔值 true 和 false 与值为 true 和 false 的 Boolean 对象弄混了。
Boolean(Boolean(false)) //false 实际为 Boolean(false)
Boolean(new Boolean(false)) //true 实际为 Boolean(Object)

//缩写 !!
!!123 //true
!!0 //false
!!false //false
!!new Boolean(false) //true

//取反操作符 ! 强制转换为布尔值并取反
!123 //false
!"123" //false
![] //false
!function(){} //false
!Boolean(new Boolean(false)) //false
!true===false //true
!false //true
!Boolean(false) //true
!"" //true
!0 //true
!null //true
