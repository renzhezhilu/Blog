#### ⚠️ 表示会操作会修改自身

###### 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#

###### 目录：

### 01.新建

```javascript
let arr = new Array() //[]
let arr2 = new Array(3) //[empty × 3]
let arr3 = new Array(1,2,3) //[1, 2, 3]
let arr4 = ['a','b',[1,2]]  //["a", "b", Array(2)]
```

### 02.属性⚠️

```javascript
//length可读可写
[1,2,3].length //3
[1,2].length=5 //[1,2,,,]
[1,2,3,4,5].length=2 //[1,2]
let arr5 = [3,2,1]
arr5[6]=6 //[3, 2, 1, empty × 3, 6]
arr5[4] //undefined
let arr6 =[]
arr6.length //0 
```

### 03.插入/添加/新增⚠️

```javascript
////头部插入
let arr7 = [1,2,3]
arr7.unshift(0) //[0,1,2,3]
////任意位置插入
arr7.splice(1,0,'666') //[1, "666", 2, 3]
////尾部插入
arr7.push(4) //[0, 1, 2, 3, 4]
arr7.concat('intFoot','end') //[1, 2, 3, "intFoot"]
```

### 04.删除⚠️

```javascript
let arr8 = [3,4,5]
arr8.shift() //[4,5]
//任意位置删除
arr8.splice(1,1) //[3,5]
//尾部删除
arr8.pop() //[3,4]
```

### 05.修改/替换⚠️

```javascript
//头部修改
let arr9 = [6,7,8]
arr9[0]=1 //[1, 7, 8]
arr9.splice(0,1,'第一') //["第一", 7, 8]
//任意位置修改
arr9[1]=22 //[6, 22, 8]
arr9.splice(1,1,'任意') //[6, "任意", 8]
//尾部修改
arr9[arr9.length-1]=0 //[6, 7, 0]
arr9.splice(arr9.length-1,1,'最后') //[6, 7, "最后"]
```

### 06.查询

```javascript
//头部查询
let arr10 = [7,8,9,10]
arr10[0] //7
//任意位置查询
arr10[2] //9
//尾部查询
arr10[arr10.length-1] //10
//批量查询
arr10.slice(1,3) //[8, 9]
arr10.slice(0,3) //[7, 8, 9]
```

### 07.截取/裁剪

```javascript
let arr11 = [7,8,9,10,11,12,13,14,15]
//前几位
arr11.slice(0,3) //[7, 8, 9]
//后几位
arr11.slice(-2) //[14, 15]
//不要前几位
arr11.slice(2) //[9, 10, 11, 12, 13, 14, 15]
//不要后几位     // 不就是要前几位吗❓在想想还是有点不同的
arr11.slice(0,arr11.length-3) //[7, 8, 9, 10, 11, 12]
//任意位置裁
arr11.slice(3,7) //[10, 11, 12, 13]
arr11.slice(-3,-1) //[13, 14]
//暴力裁
arr11.length=2 //[7,8]⚠️
```

### 08.合并

```javascript
let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
let nums = num1.concat(num2, num3) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1,2,[9,8,7]].concat(0,0,{a:'iImA'}) //[1, 2, Array(3), 0, 0, {…}]
//暴力合并，仅适合1维字符串类型数组😒😒😒
let a = [1,2,3],
    b = [5,5,5]
(a+','+b).split(',') //["1", "2", "3", "5", "5", "5"]
```

### 09.拷贝/复制

```javascript
let arr11 = [7,6,5]
let arr12 = arr11.slice(0)   //[7,6,5]
let arr13 = arr11.concat()  //[7,6,5]
```

### 10.排序⚠️

```javascript
//首字母字符串化Unicode码点顺序（乱的）
let arr17 = [1,'计算',11,'er',3,12,'abc','ABC','1888','2018-2-1',89]
arr17.sort() // [1, 11, 12, "1888", "2018-2-1", 3, 89, "ABC", "abc", "er", "计算"]

//字母顺序（不分大小写）
let arr18 = ['abc','About','AAAAA','ok','ci','En','CN']
arr18.sort((a,b)=>{
  return a.localeCompare(b);
}) //["AAAAA", "abc", "About", "ci", "CN", "En", "ok"]

//数字大小排序
let arr14 = [1,99,11,34,3,12,77,1009,'1888','73',89]
arr14.sort((a,b)=>{
  a=+a;b=+b;
  return a-b
}) //[1, 3, 11, 12, 34, "73", 77, 89, 99, 1009, "1888"]

//时间排序
let arr15 = ['2014-01-13','2014/01/07','2014.01.01','2014-04-12','2019-12-03','2019-03-01']
arr15.sort((a,b)=>{
  return new Date(a).getTime() - new Date(b).getTime()
}) //["2014.01.01", "2014/01/07", "2014-01-13", "2014-04-12", "2019-03-01", "2019-12-03"]

//本地排序/拼音首字母
let arr16 = ['阿花','曹操','哥哥','鼻子','必须','德国']
arr16.sort((a,b)=>{
  return a.localeCompare(b);
}) //["阿花", "鼻子", "必须", "曹操", "德国", "哥哥"]

//多重排序
let arr18 = [
  {age:38,name:'福气'},
  {age:22,name:'张三丰'},
  {age:24,name:'成月'},
  {age:22,name:'阿花'},
  {age:24,name:'闭月'}
]
arr18.sort((a,b)=>{
  if(a.age==b.age){
    return (a.name).localeCompare(b.name);
  }
  return (a.age)-(b.age);
})
/*
[
  {age: 22, name: "阿花"},
  {age: 22, name: "张三丰"},
  {age: 24, name: "闭月"},
  {age: 24, name: "成月"},
  {age: 38, name: "福气"}
]
*/
```

### 11.类型转换

```javascript
//数组转字符串   只能用在基本类型的1维数组😒😒😒
let arr14 = [1,2,3]
arr14.join(',') //[]"1", "2", "3" 下同
arr14+'' 
arr14.toString()
String(arr14)
//字符串转数组
'i am renzhe zhilu'.split(' ') //["i", "am", "renzhe", "zhilu"]
```

### 12.反转/颠倒⚠️

```javascript
let array1 = ['one', 'two', 'three']
array1.reverse() //["three", "two", "one"]
```

### 13.迭代/循环/遍历

```javascript
let arr16 = [1,2,3,4,5,6]
//forEach
let add =0
arr16.forEach((x,index) => add += x) //21/
```

### 14.过滤/搜索/筛选

### 15.取最大/最小值
```javascript
let n = [1,2,3,4,5]
let max = Math.max.apply(Math, n) 
let min = Math.min.apply(Math, n)
```

### 16.取随机值
```javascript
let ran = [1,2,3,4,5,[1,1,1],'kll']
let n = ran[Math.floor(Math.random() * ran.length)]
//or//ran[~~(Math.random() * ran.length)]
//指定范围
let max=4,min=1
let n2 = ran[  Math.floor(Math.random() * (max - min + 1)) + min  ]
```

### 17.打乱数组
```javascript
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
```

### 18.生成数据
```javascript
//随机字母字符串
function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
}

//生成从0到指定值的数字数组
var numbersArray = [] , max = 100;
for( var i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100]

```

