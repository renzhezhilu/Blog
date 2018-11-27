//////////////////// url模块

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
//规范化的路径格式
