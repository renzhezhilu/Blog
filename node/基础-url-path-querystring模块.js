//////////////////// url模块
var url = require("url");

//url字符串->url对象
//参数parseQueryString生成query对象而不是'id=123&name=rzzl'
console.dir(
  url.parse('https://github.com/renzhezhilu/Blog/edit/master/node/?id=123&name=rzzl',{parseQueryString:true})
);
var Url = {
  protocol: 'https:', //协议
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,         //哈希字符
  search: '?id=123&name=rzzl',
  query: { id: '123', name: 'rzzl' },
  pathname: '/renzhezhilu/Blog/edit/master/node/',
  path: '/renzhezhilu/Blog/edit/master/node/?id=123&name=rzzl',
  href: 'https://github.com/renzhezhilu/Blog/edit/master/node/?id=123&name=rzzl' 
}

//url对象->url字符串
console.dir(
  url.format(Url) 
  //https://github.com/renzhezhilu/Blog/edit/master/node/?id=123&name=rzzl
);

//插入或替换URL内容
console.log(
  url.resolve("/one/two/three","asdw"), ///one/two/asdw
  url.resolve("/one/two/3u4h3j4hj3443j43.jpg","a.jpg") // /one/two/a.jpg
);


//////////////////// path模块
var path = require("path");

//规范化的路径格式
console.log(
  path.normalize('http:///img.jandan.net/////news///2018///07/8271a4f27b0e62d9c327377a73917edb.jpg'),
  //http:/img.jandan.net/news/2018/07/8271a4f27b0e62d9c327377a73917edb.jpg
  path.normalize(`${__dirname}/1.json`) 
  // /Users/mac/Desktop/fs/1.json
);

//合并路径
var p1 = 'congif/',
    p2 = '/src/ff',
    p3 = '../icon.png'; // 向上一层自动去除/ff
console.log(
  path.join(p1,p2,p3)   //congif/src/icon.png
);

//绝对路径
console.log(
  path.resolve('json/1.json') == `${__dirname}/json/1.json`,  // true 
  path.resolve('json/1.json')                                 // /Users/mac/Desktop/fs/json/1.json
);

//相对路径
console.log(
  path.relative( 'json/pic/01/03/1.json','json' ) // ../../../..
);

//获取目录名
console.log(
  path.dirname('/json/src01/0903.json') ///json/src01
);

//获取文件名
console.log(
  path.basename('http://ws1.sinaimg.cn/mw600/006g87eSgy1fxla01gdumj30hk0qoacc.jpg','.jpg'), 
  //006g87eSgy1fxla01gdumj30hk0qoacc
  path.basename('http://ws1.sinaimg.cn/mw600/006g87eSgy1fxla01gdumj30hk0qoacc.jpg') 
  //006g87eSgy1fxla01gdumj30hk0qoacc.jpg
);

//获取扩展名，无则返空
console.log(
  path.extname('http://ws1.cn/001111.jpg') //.jpg
);

//文件分隔符&目录分隔符
console.log(
  path.sep,       //   /   window是'\\', Unix是'/'
  path.delimiter  //   :   window是';', Unix中是':'
);

//////////////////// querystring模块
var querystring = require('querystring');

//字符串化
console.log(
  querystring.stringify({
    page:3,
    user:['LiLei','WangMeiMei'],
    age:12
  },'$$',"::") // 默认'&' '='
  //page::12$$user::LiLei$$user::WangMeiMei$$age::12
  //page=3&user=LiLei&user=WangMeiMei&age=12
);

//解析
console.log(
  querystring.parse('page::12$$user::LiLei$$user::WangMeiMei$$age::12','$$',"::") // 默认'&' '='
  //Object {page: "12", user: Array(2), age: "12"}
);

//转义
console.log(
  querystring.escape('123abcAB---C*&……%¥#@---中午---チェス') 
  //123abcAB---C*%26%E2%80%A6%E2%80%A6%25%C2%A5%23%40---%E4%B8%AD%E5%8D%88---%E3%83%81%E3%82%A7%E3%82%B9
);

//反转义
console.log(
  querystring.unescape('123abcAB---C*%26%E2%80%A6%E2%80%A6%25%C2%A5%23%40---%E4%B8%AD%E5%8D%88---%E3%83%81%E3%82%A7%E3%82%B9') 
  //123abcAB---C*&……%¥#@---中午---チェス
);
