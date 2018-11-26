//HTTP服务器

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
