npm i --save request
npm i --save request-promise
npm i --save cheerio

var rp = require('request-promise');
var cheerio = require('cheerio');
var fs = require('fs');

//请求页面
rp('http://www.baidu.com')
  .then((body) => {
    console.log(body);
  })
  .catch ((err)=>{throw err});

//请求并下载
rp('http://www.baidu.com')
  .pipe(fs.createWriteStream('b.html'));

rp('https://api.douban.com/v2/book/1220562')
  .pipe(fs.createWriteStream('g.json'));

rp('http://wx3.sinaimg.cn/mw600/538add77ly1fxklue68knj20qn0q9di4.jpg')
  .pipe(fs.createWriteStream('s.jpg'))

//请求页面并操作dom生成json
BDSearch("node")
function BDSearch (word) {
  rp(`http://www.baidu.com/s?wd=${word}`)
  .then((body) => {
    let jg = [], tit,con,
        $ = cheerio.load(body);
    $('#content_left >div').each(function (index, item) { 
      let tit = $(this).find("h3.t a"),
          con = $(this).find(".c-abstract");
      if (!tit.text()) return true;
      jg.push({
          tit:tit.text(),
          href:tit.attr("href"),
          con:con.text()
      })
    });
    console.log(JSON.stringify(jg))
  })
  .catch ((err)=>{throw err});
}


//填写表单

//登录
