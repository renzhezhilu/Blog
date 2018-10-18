### 01.安装cnpm加速
~
https://npm.taobao.org/
~
### 02.全局安装gulp 
~
cnpm install -g gulp
//https://www.gulpjs.com.cn/docs/getting-started/
~
### 03.进入项目下安装gulp
~
cd /src/page/windowpage 
cnpm install --save-dev gulp
~
### 04.项目根目录下创建gulpfile.js并写入
~
var gulp = require('gulp');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
~
### 05.运行
~
gulp
~
