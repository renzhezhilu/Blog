const fetch = require('node-fetch');
var http = require('http');
var url = require('url');
var axios = require('axios')

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', function(req, res, next) {
    var pathname = url.parse(req.url).query;
    console.log(pathname, 1111);
    fetch(pathname).then(d => d.json()).then(d => {
        res.json(d)
    })
})

app.get('/pic/', function(req, res, next) {
    var pathname = url.parse(req.url).query;
    // fetch(pathname).then(d => d.arrayBuffer()).then(d => {
    //     res.set(200, { "Content-Type": "image/jpeg" });
    //     res.send(d.toString('binary'))      
    // })

    axios.get(pathname, {
        responseType: 'arraybuffer', //这里只能是arraybuffer，不能是json等其他项，blob也不行
      }).then(response => {
        res.set(response.headers) //把整个的响应头塞入更优雅一些
        res.end(response.data.toString('binary'), 'binary') //这句是关键，有两次的二进制转换
      })
})


app.listen(8888, function() {
    console.log('CORS-enabled web server listening on port 80')
})



// http.createServer(function(request, response) {
//     var pathname = url.parse(request.url).query;
//     console.log(pathname, 1111);
//     fetch(pathname).then(d => d.json()).then(d => {
//         console.log(d);
//         response.writeHead(200, {
//             'Content-Type': 'text/json'
//         });
//         response.write(JSON.stringify(d) );
//         response.end();
//     })

// }).listen(8888, '127.0.0.1');