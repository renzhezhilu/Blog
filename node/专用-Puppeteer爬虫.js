//文档->              https://pptr.dev/
//在线测试[翻⚠️]->    https://try-puppeteer.appspot.com/  
//文章 ->             http://www.cnblogs.com/dolphinX/p/7715268.html

//打开浏览器
const browser = await puppeteer.launch({
  headless: false,    //无界面模式
  slowMo:250,         //指定的毫秒减慢Puppeteer的操作
  devtools:true,      //控制台
  defaultViewport:{   //界面大小
    width:1200,
    height:800
  },
  executablePath:'../谷歌浏览器exe或app的路径/.../' //指定Chromium or Chrome 
})
//关闭浏览器
browser.close();  

//新开标签
const page = await browser.newPage();
//跳转
await page.goto('https://baidu.com');
//关闭标签
page.close()

//等待
await page.waitFor(1000);   //等待1000ms
await page.waitFor('body'); //等待body加载完成

/////////输入
//点击
page.click('#su')
//双击
//键盘输入
await page.type('#kw', 'puppeteer', {delay: 100});
//滚轮
//右键


/////////注入
//原生js

//jquery

////////输出
//PDF  
await page.pdf({path: 'page.pdf',format:'A4'}); //智能在无界面模式
//截图


/////////模拟手机设备
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

puppeteer.launch()
  .then(async browser => {
    const page = await browser.newPage();
    await page.emulate(iPhone);
    await page.goto('https://www.example.com');
    // other actions...
    await browser.close();
});
