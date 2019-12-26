#### ⚠️ 表示会操作会修改自身

###### 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#

###### 目录：

### 00. 判断数据类型是否是数组

``` javascript
Array.isArray([])
// true
```

### 01. 新建

``` javascript
let arr = new Array() //[]
let arr2 = new Array(3) //[empty × 3]
let arr3 = new Array(1, 2, 3) //[1, 2, 3]
let arr4 = ['a', 'b', [1, 2]] //["a", "b", Array(2)]
```

### 02. 属性⚠️

``` javascript
//length可读可写
[1, 2, 3].length //3
    [1, 2].length = 5 //[1,2,,,]
[1, 2, 3, 4, 5].length = 2 //[1,2]
let arr5 = [3, 2, 1]
arr5[6] = 6 //[3, 2, 1, empty × 3, 6]
arr5[4] //undefined
let arr6 = []
arr6.length //0 
```

### 03. 插入/添加/新增⚠️

``` javascript
////头部插入
let arr7 = [1, 2, 3]
arr7.unshift(0) //[0,1,2,3]
////任意位置插入
arr7.splice(1, 0, '666') //[1, "666", 2, 3]
////尾部插入
arr7.push(4) //[0, 1, 2, 3, 4]
arr7.concat('intFoot', 'end') //[1, 2, 3, "intFoot"]
```

通过名称插入

``` javascript
let insertByName_easy = (arr, item, fun) => arr.splice(arr.findIndex(fun), 0, item)
let shu = ['一', '二', '三']
insertByName_easy(shu, '插入十', n => n === '二')
console.log(shu)
//["一", "插入十", "二", "三"]

function insertByName(arr, item, fun, isAfter = false) {
    let index = arr.findIndex(fun)
    if (index === -1) return false
    if (isAfter) index++
    arr.splice(index, 0, item)
    return item
}

let yan = ["大眼怪怪怪", '小眼怪', {
    a: 123
}, "无眼怪"]
//在之后插入
insertByName(yan, '新增的中眼怪', n => n === '小眼怪', true)
console.log(yan)
//["大眼怪怪怪", "小眼怪", "新增的中眼怪", {…}, "无眼怪"]
insertByName(yan, '巨眼怪', n => n.a === 123)
console.log(yan)
//["大眼怪怪怪", "小眼怪", "新增的中眼怪", "巨眼怪", {…}, "无眼怪"]
insertByName(yan, '巨眼怪', n => n.a === 1231111)
//false
```

### 04. 删除⚠️

``` javascript
let arr8 = [3, 4, 5]
arr8.shift() //[4,5]
//任意位置删除
arr8.splice(1, 1) //[3,5]
//尾部删除
arr8.pop() //[3,4]
```

通过名称删除

``` javascript
let deleteByName_easy = (arr, fun) => arr.splice(arr.findIndex(fun), 1)

function deleteByName(arr, fun) {
    let index = arr.findIndex(fun)
    if (index === -1) return false
    let item = [arr[index]]
    arr.splice(index, 1)
    return item
}

let yan = ["大眼怪怪怪", "中眼怪", '小眼怪', "无眼怪", 1, 3, {
    a: 123,
    b: 999
}]
deleteByName(yan, n => n === '中眼怪')
console.log(yan)
//["大眼怪怪怪","中眼怪",'小眼怪',"无眼怪",1,3,{"a":123,"b":999}]
deleteByName(yan, n => n.a === 123)
console.log(yan)
//["大眼怪怪怪", "小眼怪", "无眼怪", 1, 3]
//
```

### 05. 修改/替换⚠️

``` javascript
//头部修改
let arr9 = [6, 7, 8]
arr9[0] = 1 //[1, 7, 8]
arr9.splice(0, 1, '第一') //["第一", 7, 8]
//任意位置修改
arr9[1] = 22 //[6, 22, 8]
arr9.splice(1, 1, '任意') //[6, "任意", 8]
//尾部修改
arr9[arr9.length - 1] = 0 //[6, 7, 0]
arr9.splice(arr9.length - 1, 1, '最后') //[6, 7, "最后"]
```

通过名称替换

``` javascript
let replaceByName_easy = (arr, item, fun) => arr.splice(arr.findIndex(fun), 1, item)

function replaceByName(arr, item, fun) {
    let index = arr.findIndex(fun)
    if (index === -1) return false
    arr.splice(index, 1, item)
    return item
}

let yan = ["大眼怪怪怪", "中眼怪", '小眼怪', "无眼怪"]
replaceByName(yan, '超级大眼怪', n => n === '中眼怪')
console.log(yan)
//["大眼怪怪怪","中眼怪",'小眼怪',"无眼怪",1,3,{"a":123,"b":999}]
```

### 06. 查询

``` javascript
//头部查询
let arr10 = [7, 8, 9, 10]
arr10[0] //7
//任意位置查询
arr10[2] //9
//尾部查询
arr10[arr10.length - 1] //10
//批量查询
arr10.slice(1, 3) //[8, 9]
arr10.slice(0, 3) //[7, 8, 9]
```

### 07. 截取/裁剪

``` javascript
let arr11 = [7, 8, 9, 10, 11, 12, 13, 14, 15]
//前几位
arr11.slice(0, 3) //[7, 8, 9]
//后几位
arr11.slice(-2) //[14, 15]
//不要前几位
arr11.slice(2) //[9, 10, 11, 12, 13, 14, 15]
//不要后几位     // 不就是要前几位吗❓在想想还是有点不同的
arr11.slice(0, arr11.length - 3) //[7, 8, 9, 10, 11, 12]
//任意位置裁
arr11.slice(3, 7) //[10, 11, 12, 13]
arr11.slice(-3, -1) //[13, 14]
//暴力裁
arr11.length = 2 //[7,8]⚠️
```

### 08. 合并

``` javascript
let num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
let nums = num1.concat(num2, num3) //[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, [9, 8, 7]].concat(0, 0, {
    a: 'iImA'
}) //[1, 2, Array(3), 0, 0, {…}]
//暴力合并，仅适合1维字符串类型数组😒😒😒
let a = [1, 2, 3],
    b = [5, 5, 5]
    (a + ',' + b).split(',') //["1", "2", "3", "5", "5", "5"]
```

``` javascript
//es6
[...num1, ...num2, ...num3]
```

### 09. 拷贝/复制
浅拷贝
``` javascript
let arr11 = [7, 6, 5]
let arr12 = arr11.slice(0) //[7,6,5]
let arr13 = arr11.concat() //[7,6,5]
//es6
let arr14 = [...arr11] //[7,6,5]
```
深拷贝
``` javascript
let deepCopy = arr => JSON.parse(JSON.stringify(arr))

let shen = [1,2,{isOk:false,time:1},3]
let p = deepCopy(shen)
shen[2].time = '1111'
console.log('p:',JSON.stringify(p),'\nshen:',JSON.stringify(shen))
/*
p: [1,2,{"isOk":false,"time":1},3] 
shen: [1,2,{"isOk":false,"time":"1111"},3]
*/
```

### 10. 排序⚠️

``` javascript
//首字母字符串化Unicode码点顺序（乱的）
let arr17 = [1, '计算', 11, 'er', 3, 12, 'abc', 'ABC', '1888', '2018-2-1', 89]
arr17.sort() // [1, 11, 12, "1888", "2018-2-1", 3, 89, "ABC", "abc", "er", "计算"]

//字母顺序（不分大小写）
let arr18 = ['abc', 'About', 'AAAAA', 'ok', 'ci', 'En', 'CN']
arr18.sort((a, b) => {
    return a.localeCompare(b);
}) //["AAAAA", "abc", "About", "ci", "CN", "En", "ok"]

//数字大小排序
let arr14 = [1, 99, 11, 34, 3, 12, 77, 1009, '1888', '73', 89]
arr14.sort((a, b) => {
    a = +a;
    b = +b;
    return a - b
}) //[1, 3, 11, 12, 34, "73", 77, 89, 99, 1009, "1888"]

//时间排序
let arr15 = ['2014-01-13', '2014/01/07', '2014.01.01', '2014-04-12', '2019-12-03', '2019-03-01']
arr15.sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime()
}) //["2014.01.01", "2014/01/07", "2014-01-13", "2014-04-12", "2019-03-01", "2019-12-03"]

//本地排序/拼音首字母
let arr16 = ['阿花', '曹操', '哥哥', '鼻子', '必须', '德国']
arr16.sort((a, b) => {
    return a.localeCompare(b);
}) //["阿花", "鼻子", "必须", "曹操", "德国", "哥哥"]

//多重排序
let arr18 = [{
        age: 38,
        name: '福气'
    },
    {
        age: 22,
        name: '张三丰'
    },
    {
        age: 24,
        name: '成月'
    },
    {
        age: 22,
        name: '阿花'
    },
    {
        age: 24,
        name: '闭月'
    }
]
arr18.sort((a, b) => {
    if (a.age == b.age) {
        return (a.name).localeCompare(b.name);
    }
    return (a.age) - (b.age);
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

### 11. 类型转换

``` javascript
//数组转字符串   只能用在基本类型的1维数组😒😒😒
let arr14 = [1, 2, 3]
arr14.join(',') //"1", "2", "3" 下同
arr14 + ''
arr14.toString()
String(arr14)
//字符串转数组
'i am renzhe zhilu'.split(' ') //["i", "am", "renzhe", "zhilu"]
Object.entries('foo')
// [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]
```

``` javascript
//es6-字符串转数组-正确识别四个字节的 Unicode 字符
'x\uD83D\uDE80y' // "x🚀y"
'x\uD83D\uDE80y'.length // 4
    'x\uD83D\uDE80y'.split('') //["x", "�", "�", "y"]
[...'x\uD83D\uDE80y'] // ["x", "🚀", "y"]
```

### 12. 反转/颠倒⚠️

``` javascript
let array1 = ['one', 'two', 'three']
array1.reverse() //["three", "two", "one"]
```

### 13.1. 迭代/循环/遍历

# for of ✅

* forin 加强版
* 访问key, value, 键值对
* 支持break, continue 和 return
* 支持字符串

``` javascript
for (const iterator of object) {
    console.log(iterator);
}
//可访问下标，第一个值才是下标
for (const [index, val] of [111, 2, 3, 4].entries()) {
    console.log(index)
}
```

#### ES6新增

``` javascript
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

## forEach 🈲️

* 访问值和下标
* 跳过空值
* 不支持aysnc/await

``` javascript
let arr16 = [1, 2, 3, 4, 5, 6]
//forEach
let add = 0
arr16.forEach((x, index) => add += x) //21/
```

## for in 🈲️

* 访问下标
* 会把自定义属性也搞出来，要hack下
* 可能随机顺序
* 跳过空值

``` javascript
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
    }
}
```

### 13.2. 语意化的迭代/循环/遍历

## map()

* 每个元素都是回调函数的结果
* 不会跳过任何值，包括空值

### 语法

``` javascript
let new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array 
} [, thisArg])
//currentValue  (必选) 当前元素
//index         当前元素的索引
//array         被调用的数组  
//thisArg       函数时使用的this 值
```

### 实例

#### `求平方根` 

``` javascript
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

#### `链式调用` 

``` javascript
[1, 4, 9, 16].map(x => x * 2).map(x => x * 3)
// [6, 24, 54, 96]
```

#### `格式化数组` 

``` javascript
let kvArray = [{
        key: 1,
        value: 10
    },
    {
        key: 2,
        value: 20
    },
    {
        key: 3,
        value: 30
    }
];
let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}], 

// kvArray 数组未被修改: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]
```

#### `类数组的处理` 

``` javascript
let map = Array.prototype.map
let a = map.call("Hello World", x => {
    return x.charCodeAt(0);
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

``` javascript
let elems = document.querySelectorAll('select option:checked');
let values = Array.prototype.map.call(elems, obj => {
    return obj.value;
});
```

#### `特别的技巧` 

> .map[方法], 这里的方法必须是只有一个参数

``` javascript
[1, '33', '123', '199'].map(Number)
//[1, 33, 123, 199]
[1, '33', '123', '199'].map(Boolean)
//[true, true, true, true]
```

#### ❓尝试理解['1', '2', '3'].map( Array.of )的结果

___

## filter()

* 符合条件才会返回，反之则返回空数组
* 就是过滤数组

#### 实例

``` javascript
[12, 5, 8, 130, 44].filter(x => x > 10)
//[12, 130, 44]

let w = ['apple', 'banana', 'grapes', 'mango', 'orange']
w.filter(x => {
    return x.includes('ap')
})
//["apple", "grapes"]
```

___

## every()

* 是否全部符合条件，只要有一个不符合就返回 `false` ，反之返回 `true` 
* 空值元素返回 `true` , 因为会跳过
* 空数组也是返回 `true` 

#### 实例

``` javascript
[, , , , 13, 32, 1232, 94].every(x => x > 1)
//true
[0, 13, 32, 1232, 94].every(x => x > 1)
//false
[2, 2, , , 13, 32, 1232, 94].every(x => x > 1)
//true
```

___

## some()

* 只要有一个元素符合条件，就返回 `true` ，房子返回 `false` 
* 空值元素返回 `false` , 因为会跳过
* 空数组也是返回 `false` 

#### 实例

``` javascript
[, , , , , 2, 5, 8, 1, 4].some(x => x >= '8');
//true
['apple', 'banana', 'mango', 'guava'].some(x => x === 'banana')
//true
```

___

## xxxx

* xxx

#### 实例

``` javascript
xxx
```

___

### 14. 过滤/搜索/筛选/包含/索引

``` javascript
let arr14 = [1, 3, 4, 2, 1, 'g', 'a']
    //是否包含
    !!~arr14.indexOf(1) //true
    !!~arr14.indexOf(88) //false
//语义清晰点
arr14.includes('gss') //false
[1, 2, NaN].includes(NaN) // true
```

##### 返回值

``` javascript
[1, 5, 10, 15].find((value, index, arr) => value > 9)
//10
[1, 5, NaN].find((value, index, arr) => Object.is(NaN, value))
//NaN
```

##### 返回索引

``` javascript
[1, 5, 10, 15].findIndex((value, index, arr) => value > 9)
//2
[1, 5, NaN].findIndex((value, index, arr) => Object.is(NaN, value))
//2
arr14.indexOf(3)
//1
arr14.lastIndexOf(1)
//4
```

### 15. 取最大/最小值

``` javascript
let n = [1, 2, 3, 4, 5]
let max = Math.max.apply(Math, n)
let min = Math.min.apply(Math, n)
//es6
Math.max(...n)
Math.min(...n)
```

### 16. 取随机值

``` javascript
let ran = [1, 2, 3, 4, 5, [1, 1, 1], 'kll']
let n = ran[Math.floor(Math.random() * ran.length)]
//or//ran[~~(Math.random() * ran.length)]
//指定范围
let max = 4,
    min = 1
let n2 = ran[Math.floor(Math.random() * (max - min + 1)) + min]
```

### 17. 打乱数组

``` javascript
var numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
numbers = numbers.sort(function() {
    return Math.random() - 0.5
});
```

### 18. 生成数据

##### 随机字母字符串

``` javascript
function setRandomStr(len, type) {
    let str = ""
    let radix = 36
    type === 'num' ? radix = 10 : null
    while (str.length < len) {
        str += Math.random().toString(radix).substr(2)
        type === 'str' ? str = str.replace(/[0-9]/ig, "") : null
    }
    return str.substr(0, len);
}
setRandomStr(13)
//"z8pv55d9vg0du"
setRandomStr(11, 'num')
//"39064092292"
setRandomStr(9, 'str')
//"bxlmujmap"
```

##### 范围/生成从0到指定值的数字数组

``` javascript
function range(start, end, skip = 1, sort = 1) {
    let arr = [...arguments]
    let jg = null
    if (arr.length === 1) {
        jg = [...Array(Math.abs(start)).keys()].map(k => start < 0 ? -k : k)
    } else {
        if (end - start < 0) {
            [start, end] = [end + 1, start + 1]
            sort = -1
        }
        jg = [...Array(end - start).keys()].map(k => k + start)
        jg = jg.filter(f => f % skip === 0)
    }
    sort === -1 ? jg.reverse() : null
    return jg
}

range(6)
//[0, 1, 2, 3, 4, 5]
range(-6)
//[-0, -1, -2, -3, -4, -5]
range(9, 3)
//[9, 8, 7, 6, 5, 4]
range(-3, 2)
//[-3, -2, -1, 0, 1]
range(0, 101, 30)
//[0, 30, 60, 90]
range(0, 101, 20, -1)
//[100, 80, 60, 40, 20, 0]
```

### 19. 去重、重复数据

``` javascript
//简单去重
let k = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3]
k = Array.from(new Set(k));
k = [...new Set(k)]
    (5)[1, 2, 3, 4, 5]
```

``` javascript
//对象去重 arr:数组，val：数组内的对象某个键名
let oneArr = [{
    name: "2323",
    id: 'dk2'
}, {
    name: "1234",
    id: 'dk1'
}, {
    name: "553",
    id: 'dk3'
}, {
    name: "553",
    id: 'dk4'
}, {
    name: "1234",
    id: 'dk5'
}]

function unique(arr, val) {
    let hash = {};
    let newArr = [];
    newArr = arr.reduce(function(item, next) {
        hash[next[val]] ? '' : hash[next[val]] = true && item.push(next)
        return item
    }, [])
    return newArr
}
let oneArr02 = unique(oneArr, 'name')
console.log(oneArr02)
/*
0: {name: "2323", id: "dk2"}
1: {name: "1234", id: "dk1"}
2: {name: "553", id: "dk3"}
*/
```

### 20. 元素重复次数/出现的次数/计数/统计

``` javascript
let fenci0 = ['wo', 'wo', 101, 101, 3, 'wo', 4, 42, 1, 3, 102, 302]
let arrayCount =(arr,item)=>arr.filter(f=>f===item).length
arrayCount(fenci0,'wo')
//3
```

### 21. 扁平化/降维/平面化

``` javascript
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
[1, [2, [3, [4, [5, [6, [7]]]]]]].flat(Infinity)
// [1, 2, 3, 4, 5, 6, 7]

//注意这里数字变字符串里 
[11, [22, 33], [44, 55], 66].join().split(',')
// ["11", "22", "33", "44", "55", "66"]
```

### 22. 找出相同和不同的部分

``` javascript
function findExactlyString(arr) {
    if (arr.length <= 1) return {
        leg: 0,
        str: '',
        diffArr: arr
    }
    let leg = 0
    let arr00 = arr[0]
    for (let i = 0; i < arr00.length; i++) {
        if (arr.every(x => x[i] == arr00[i])) {
            leg++
        } else {
            break
        }
    }
    let diffArr = arr.map(x => x.substr(leg, x.length))
    return {
        leg: leg,
        str: arr00.substr(0, leg),
        diffArr
    }
}
//示例
let ppp = ["https://cdn3.volusion.com/h5yxa.x5v9u/v/vspfiles/photos/CN470883-2.jpg", "https://cdn3.volusion.com/h5yxa.x5v9u/v/vspfiles/photos/CN470883-3.jpg"]
findExactlyString(ppp)
/*
diffArr: 
    0: "2.jpg"
    1: "3.jpg"
leg: 65
str: "https://cdn3.volusion.com/h5yxa.x5v9u/v/vspfiles/photos/CN470883-"
*/
```

### 23.reduce 累积计算

reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

> accumulator 累计器 

> currentValue 当前值 

> currentIndex 当前索引 

> array 数组

##### 数据累加，accumulator初始值是数据的第一个值（0），currentValue初始值为数据的第二个值（1），currentIndex（1）

``` javascript
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
})
//10
```

##### 最好还是要提供初始值，accumulator初始值（10），currentValue（0），currentIndex（0）

``` javascript
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
}, 10)
//20
[0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0)
//6
```

##### 扁平化数组

``` javascript
[
    [0, 1],
    [2, 3],
    [4, 5]
].reduce((acc, cur) => acc.concat(cur), [])
//[0, 1, 2, 3, 4, 5]
```

##### 计算数组中每个元素出现的次数

``` javascript
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
let countedNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {})
//{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```

### 24. 填充/初始化/批量替换

fill方法使用给定值，填充一个数组

> value 填充的值

> startIndex 起始位置）

> endIndex 结束位置

``` javascript
['a', 'b', 'c'].fill(7)
// [7, 7, 7]
new Array(3).fill(7)
// [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```

##### 注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象

``` javascript
let arr = new Array(3).fill({
    name: "Mike"
});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]
let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]
```

### 25. 切割/分割/按数量分组

``` javascript
function chunk(arr, len = 1) {
    let newArr = []
    while (arr.length > 0) {
        newArr.push(arr.splice(0, len))
    }
    return newArr
}
chunk([1, 2, 3, 4], 3)
// [Array(3), Array(1)]
```

### 26. 交集/相同点

``` javascript
function intersection() {
    let arr = [...arguments]
    return arr.reduce((a, b) => a.filter(c => b.includes(c)))
}
intersection([1, 2, 3, 4, 'jd', ], [, 3, 'jd'])
//[3, "jd"]
intersection([1, 2, 3, 4, 'jd', ], [, 3, 'jd', 1], [0, 3, 1], [7, 2, 3])
//[3]
```

### 27. 差集/差别/差异/不同点

``` javascript
function difference() {
    let arr = [...arguments]
    return arr.reduce((a, b) => a.filter(c => !b.includes(c)))
}
difference([2, 3, 4, 5], [0, 1, 3, 4])
//[2, 5]
difference([2, 3, 4, 5], [0, 1, 3, 4], [3, 4, 5, 101], [102, 103, 101])
//[2]
```

### 27-02. 对称差集

``` javascript
function sysmmetricDifference() {
    let arr = [...arguments]
    let inter = arr.reduce((a, b) => a.filter(c => b.includes(c)))
    return [...new Set(arr.flat())].filter(f => !inter.includes(f))
}
sysmmetricDifference([2, 3, 4, 5], [0, 1, 3, 4])
//[2, 5, 0, 1]
sysmmetricDifference([2, 3, 4, 5], [0, 1, 3, 4], [3, 4, 5, 101], [102, 103, 101])
//[2, 3, 4, 5, 0, 1, 101, 102, 103]
```

### 28. 并集/合并/联合

``` javascript
function union() {
    let arr = [...arguments].flat()
    return [...new Set(arr)]
}
union([, 1, 2, 3], [2, 3, 100], [1, 2, "aa"])
//[1, 2, 3, 100, "aa"]
```

### 20.xxxx

`
``
javascript

``` 

### 20.xxxx

``` javascript
``
`

### 20. xxxx

`
``
javascript
```

### 20.xxxx

``` javascript
``
`

### 20. xxxx

`
``
javascript
```

