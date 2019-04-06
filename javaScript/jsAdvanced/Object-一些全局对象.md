# [new FormData()](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
#### FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据
```javascript
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); //数字123456会被立即转换成字符串 "123456"

// HTML 文件类型input，由用户选择
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like 对象
var content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```
```javascript
 {
    append: append(),
    delete: delete(),
    entries: entries(),
    forEach: forEach(),
    get: (),
    getAll: getAll(),
    has: has(),
    keys: keys(),
    set: (),
    values: values(),
    constructor: FormData(),
    Symbol(Symbol.iterator): entries(),
    Symbol(Symbol.toStringTag): "FormData",
  }
```
___
# [new FileReader()](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
#### `FileReader` 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，可以是来自用户在一个`<input>`元素上选择文件后返回的`FileList`对象。
```javascript
 document.getElementById("file22").addEventListener(
    "change",
    () => {
        var reader = new FileReader();
        reader.onload = (e) => {
        compress(this.result) //base64
        console.log(this)
        };
        reader.readAsDataURL(this.files[0]);
    },
    false
    );
```
```javascript
{
  error: null,
  onabort: null,
  onerror: null,
  onload: null,
  onloadend: null,
  onloadstart: null,
  onprogress: null,
  readyState: 0,
  result: null,
}
```


___
# [new File()](https://developer.mozilla.org/zh-CN/docs/Web/API/File)
#### 常情况下， `File` 对象是来自用户在一个 `<input> `元素上选择文件后返回的 `FileList` 对象
#### `File `对象是特殊类型的 `Blob`，且可以用在任意的 `Blob` 类型的 `context` 中。
```javascript
var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});
```
```javascript
{
  lastModified: 1554545163250,
  lastModifiedDate: Sat Apr 06 2019 18:06:03 GMT+0800 (中国,标准时间) {},
  name: "foo.txt",
  size: 3,
  type: "text/plain",
  webkitRelativePath: "",
}
```


___
# [new Image()](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image)
#### `Image()`函数将会创建一个新的HTMLImageElement实例。它的功能等价于 `document.createElement('img')`
```javascript
var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);
```
上面的代码相当于在 <body>中定义了下面的HTML:
```html
<img width="100" height="200" src="picture.jpg">
```


___
# [new Uint8Array()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
#### `Uint8Array` 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。
```javascript
new Uint8Array(); // ES2017 最新语法
new Uint8Array(length); // 创建初始化为0的，包含length个元素的无符号整型数组
new Uint8Array(typedArray);
new Uint8Array(object);
new Uint8Array(buffer [, byteOffset [, length]]);
```
```javascript
{
  buffer: {
    [[Int8Array]]: Int8Array []
    [[Int16Array]]: Int16Array []
    [[Int32Array]]: Int32Array []
    [[Uint8Array]]: Uint8Array []
  }
byteLength: 0
__proto__: ArrayBuffer
byteLength: 0
byteOffset: 0
length: 0
Symbol(Symbol.toStringTag): undefined
__proto__: TypedArray
}
```
## 类似对象
* nt8Array()
* Uint8Array()
* Uint8ClampedArray()
* Int16Array()
* Uint16Array()
* Int32Array()
* Uint32Array()
* Float32Array()
* Float64Array()
* BigInt64Array()
* BigUint64Array()

___
# [new Blob()](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)
#### Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是JavaScript原生格式的数据。File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件
```javascript
var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // 一个包含DOMString的数组
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // 得到 blob
```
```javascript
{
  size: 32
  type: "text/html"
}
```


___
# [xx](xx)
#### xxx
```javascript
xxxx
```


