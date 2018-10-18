
### 体验只需三番钟

#### 01.安装cnpm加速
```javascript
https://npm.taobao.org/
```
#### 02.全局安装gulp 
```javascript
cnpm install -g gulp
//https://www.gulpjs.com.cn/docs/getting-started/
```
#### 03.项目安装gulp-随便新建个文件夹并进入 
```javascript
cd /src/page/windowpage //例
cnpm install --save-dev gulp
```
#### 04.项目根目录下创建gulpfile.js并写入
```javascript
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
#### 05.终端运行
```javascript
gulp
```

### 初步尝试
#### 01.gulpfile.js是重点

```javascript
var gulp = require('gulp'),
    less = require('gulp-less'); //引入less模块
 
gulp.task('testLess', function () {
    gulp.src(['css/main.less','css/page.less'])
        .pipe(less())
        .pipe(gulp.dest('css'));
});

//监听less改动
gulp.task('testWatch', function () {
    gulp.watch('css/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});

gulp.task('default', ['testLess','testWatch']);
```
#### 02.运行
Mac需要sudo 
```javascript
sudo gulp
```
#### 03.开始工作
保存less文件时会自动编译好同名css
```
//终端输出
[16:46:28] Finished 'testLess' after 2.84 ms
[16:47:49] Starting 'testLess'...
[16:47:49] Finished 'testLess' after 942 μs
[03:50:26] Starting 'testLess'...
[03:50:26] Finished 'testLess' after 22 ms
```
#### 04.全局安装 BrowserSync
```javascript
npm install -g browser-sync
```
#### 05.跑起来
browser会自动创建http服务器，根目录就是cd进的文件夹
```javascript
//监听css文件改动自动刷新
cd /src/page/windowpage //例
browser-sync start --server --files "css/*.css"
```
```
//终端输出
  Local: http://localhost:3000
    External: http://192.168.3.12:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
```
#### 06.轻松点，目录下的任何文件改动都会刷新被访问的页面
```javascript
browser-sync start --server --files "**/**.*"
```
#### 07.试试用pc和手机访问同一个页面然后进行一些点击滑动之类的操作


