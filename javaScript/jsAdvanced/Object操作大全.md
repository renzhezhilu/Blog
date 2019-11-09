#### ⚠️ 表示会操作会修改自身

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

### 01. 是否包含/存在

``` javascript
!("key" in obj) //不包含
obj.hasOwnProperty("key") //包含
```

### 02. 合并/浅拷贝 ⚠️

``` javascript
//Object.assign(target, ...sources)
//最左是目标，一般设置{}
//越右边优先级越高
const target = {
    a: 1,
    b: 2
};
const source = {
    b: 4,
    c: 5
};
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//浅拷贝 ，如果对象里还有对象就只是引用
const obj = {
    a: 1,
    b: {
        c: 2
    }
};
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 ,{ b: 2 } }
obj.b.c = 33
console.log(copy); // { a: 1 ,b:{c:33} }
```

### 03. 深拷贝

``` javascript
obj1 = {
    a: 0,
    b: {
        c: 0
    }
};
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 1111;
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
```

### 03-02. 带有函数的深拷贝

#### 函数->字符串 或 反之

``` javascript
//拷贝
let fun = {
    a: 1,
    b: function() {
        return 123
    }
}
let str = JSON.stringify(fun,(key, val) => {
        if (typeof val === "function") return val.toString()
        return val
    })
//"{"a":1,"b":"function() {\n        return 123\n    }"}"

//还原
let newfun = JSON.parse(str, (key, val) => {
    if (typeof val === 'string' && val.includes('function(')) {
        return (new Function("", "return " + val))();
    }
    return val
})
//{a: 1, b: ƒ}


newfun === fun
//false
```

### 04. 删除

``` javascript
let l = {
    a: 1,
    b: 2
}
detele l.a
//{b: 2}
```

### 05.判断是否相等
Object.is(value1, value2)
比‘===’更加严谨

``` javascript
Object.is('foo', 'foo')    // true
Object.is(window, window)  // true

Object.is('foo', 'bar')    // false
Object.is([], [])          // false

var foo = { a: 1 }
var bar = { a: 1 }
Object.is(foo, foo)        // true
Object.is(foo, bar)        // false

Object.is(null, null)      // true

// 特例
Object.is(0, -0)           // false
Object.is(0, +0)           // true
Object.is(-0, -0)          // true
Object.is(NaN, 0/0)        // true
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

### 01.xxxxxx

``` javascript
xxxxx
```

