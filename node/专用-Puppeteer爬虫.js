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

await page.setDefaultNavigationTimeout(0) //页面超时设置
await page.waitForNavigation({ timeout: 3000 });

await page.screenshot({path: 'jd.png'}) //第一屏截图
await page.screenshot({
  path: 'jd.png',
  fullPage: true,//全屏截图
})

//等待
await page.waitFor(1000);   //等待1000ms
await page.waitFor('body'); //等待body加载完成
await page.waitFor('ul.product > li:nth-child(1)')

page.reload() //刷新

page.click('#su') //单击
//键盘输入
await page.type('#kw', 'puppeteer', {delay: 100});
//滚轮

//右键


/////////注入
await page.evaluate(fs.readFileSync('../public/jquery.js', 'utf8'))

//原生js

//jquery

////////输出
//PDF  
await page.pdf({path: 'page.pdf',format:'A4'}); //智能在无界面模式
//截图

//cookie
const cookie = {
  name: 'login_email',
  value: 'set_by_cookie@domain.com',
  domain: '.paypal.com',
  url: 'https://www.paypal.com/',
  path: '/',
  httpOnly: true,
  secure: true
}
await page.setCookie(cookie)


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


//异常处理
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'chromium/Chromium.app/Contents/MacOS/Chromium',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://jartto.wang');
  await page.screenshot({path: 'temp/blog.png'});
  await browser.close();
})().catch(error => console.log('error: ', error.message));

//代理
const browser = await puppeteer.launch({
        args: [
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--proxy-server=10.24.51.125:8411',
            '--ignore-certificate-errors',
            '--window-size=375,812',
            '--remote-debugging-port=9222'
        ],
        ignoreHTTPSErrors: true,
        headless: false,
        executablePath: "/chrome-mac/Chromium.app/Contents/MacOS/Chromium",
    });