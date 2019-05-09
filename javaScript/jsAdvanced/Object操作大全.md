#### ⚠️ 表示会操作会修改自身

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
### 01.是否包含/存在
```javascript
!("key" in obj)    //不包含
obj.hasOwnProperty("key")   //包含
```

### 02.合并/浅拷贝 ⚠️
```javascript
//Object.assign(target, ...sources)
//最左是目标，一般设置{}
//越右边优先级越高
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//浅拷贝 ，如果对象里还有对象就只是引用
const obj = { a: 1 ,b:{c:2} };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 ,{ b: 2 } }
obj.b.c=33
console.log(copy); // { a: 1 ,b:{c:33} }

```

### 03.深拷贝
```javascript
obj1 = { a: 0 , b: { c: 0}}; 
let obj3 = JSON.parse(JSON.stringify(obj1)); 
obj1.a = 1111; 
console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

### 01.xxxxxx
```javascript
xxxxx
```

