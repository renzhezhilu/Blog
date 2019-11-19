


### 01. 获取参数列表
```javascript
function arg (){
    console.log([...arguments])
}
arg ('arg',22,33)
//["arg", 22, 33]

function ok (...rest){
	console.log(rest)
}
ok(1,2,3,4)
//[1, 2, 3, 4]

function ok02 (a,b,...rest){
	console.log(a,b,rest)
}
ok02('aa','bbb',3,4)
//aa bbb [3, 4]

```

### 02. 获取函数名称
```javascript
function foo() { 
    console.log(arguments.callee.name)
}
foo()
//foo
```

### 03. 防抖
```javascript
function debounce(func, wait, immediate) {
  var timeout
  return function() {
  	var context = this, args = arguments;
  	clearTimeout(timeout)
  	timeout = setTimeout(function() {
  		timeout = null
  		if (!immediate) func.apply(context, args)
  	}, wait)
  	if (immediate && !timeout) func.apply(context, args)
  }
}

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));
```

### 00. xxxxxxx
```javascript
```

### 00. xxxxxxx
```javascript
```

### 00. xxxxxxx
```javascript
```

### 00. xxxxxxx
```javascript
```

### 00. xxxxxxx
```javascript
```


### 00. xxxxxxx
```javascript
```