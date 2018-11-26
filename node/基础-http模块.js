//HTTP服务器

var http = require('http');
var fs = require('fs');
var url = require('url');

////// 创建服务器
http
  .createServer( (request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("This is good");
    response.end();
  })
  .listen(8080, '127.0.0.1');

////// 创建服务器,访问本地index.html
http
  .createServer( (request, response)=>{
    fs.readFile('index.html', function readData(err, data) {
      if (err) throw err;
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    });
  }).listen(8080, '127.0.0.1');
//or
http
  .createServer( (req, res)=>{
    fs.createReadStream(`${__dirname}/index.html`).pipe(res);
  }).listen(8080);

////// 简单路由
http
  .createServer((req, res) => {
    let head = (num) => {
      return res.writeHead(num, {"Content-Type": "text/html"});
    }
    if (req.url == "/") {
      fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    } 
    else if (req.url == "/about") {
      head(200);
      res.end("page!");
    }
    // 404错误
    else {
      head(404);
      res.end("404");
    }
  }).listen(8080, "localhost");

////// request 请求对象
http
  .createServer( (req, res)=>{
    res.end(JSON.stringify(req.headers))
  }).listen(8080);

req.url  // '/'  '/about'  ...
req.method // 'GET'  'POST' ...
req.headers
// {
//     "host": "127.0.0.1:8080",
//     "connection": "keep-alive",
//     "pragma": "no-cache",
//     "cache-control": "no-cache",
//     "upgrade-insecure-requests": "1",
//     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//     "accept-encoding": "gzip, deflate, br",
//     "accept-language": "zh-CN,zh;q=0.9,fr;q=0.8,en;q=0.7,ko;q=0.6,zh-TW;q=0.5,la;q=0.4,ja;q=0.3",
//     "cookie": "_ga=GA1.1.741018563.1492974920; __utma=96992031.741018563.1492974920.1502089855.1502089855.1; Hm_lvt_5bb92667ee5994440b0b9e0e12001001=1530947620"
// }









