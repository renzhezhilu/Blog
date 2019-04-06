### 



1.[gulp-less](https://github.com/stevelacy/gulp-less)（less编译）

2.[gulp-](https://github.com/stevelacy/gulp-less)pug (pug编译)

3.[gulp-sass](https://github.com/dlmanning/gulp-sass)(sass编译)

4.[gulp-compass](https://github.com/appleboy/gulp-compass)(sass编译)

5.[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)(添加CSS3前缀)

6.[gulp-clean-css](https://github.com/scniro/gulp-clean-css)(压缩CSS)

7.[gulp-include](https://github.com/wiledal/gulp-include)（文件包含）

8.[gulp-concat](https://github.com/contra/gulp-concat)(文件合并)

9.[del](https://github.com/sindresorhus/del)(文件删除)

10.[gulp-uglify](https://github.com/terinjokes/gulp-uglify)(压缩js)

11.[gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)(合成[雪碧](https://www.baidu.com/s?wd=%E9%9B%AA%E7%A2%A7&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)图)

12.[run-sequence](https://github.com/OverZealous/run-sequence)(队列执行)

13.[browser-sync](https://github.com/BrowserSync/browser-sync)(浏览器同步刷新)

14.[gulp-babel](https://github.com/babel/gulp-babel)(js编译)

15.[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)(图片压缩)

* [gulp-imageisux](https://github.com/targetkiller/gulp-imageisux)([腾讯](https://www.baidu.com/s?wd=%E8%85%BE%E8%AE%AF&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)智图压缩，慎用)
* [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran)(jpg图片压缩)
* [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant)(png图片压缩)
* [gulp-image-resize](https://github.com/scalableminds/gulp-image-resize)(图片大小调整)

16.[gulp-rename](https://github.com/hparra/gulp-rename)(重命名)

17.[gulp-live-server](https://github.com/gimm/gulp-live-server)(轻量[服务器](https://www.baidu.com/s?wd=%E6%9C%8D%E5%8A%A1%E5%99%A8&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd))

18.[gulp-livereload](https://github.com/vohof/gulp-livereload)

19.[gulp-util](https://github.com/gulpjs/gulp-util)(工具集)

20.[require-dir](https://github.com/aseemk/requireDir)(引入整个文件夹文件)

21.[connect-livereload](https://github.com/intesso/connect-livereload)(热更新同步)

22.[gulp-if](https://github.com/robrich/gulp-if)(是否运行插件)

23.[gulp-plumber](https://github.com/floatdrop/gulp-plumber)

24.[gulp-eslint](https://github.com/adametry/gulp-eslint)(eslint[代码检查](https://www.baidu.com/s?wd=%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd))

25.[gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)(html压缩)

26.[gulp-clean](https://github.com/peter-vilja/gulp-clean)(删除文件/文件夹)

27.[gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)(加载gulp插件)

28.`gulp-watch` (监听修改后的文件，实时更新)

29.`gulp-sourcemaps`


30.`gulp-ssh` 运行命令行
示例
```javascript
const gulp = require('gulp')
const GulpSSH = require('gulp-ssh')

const config = {
  host: '111.22.xx.xx',
  port: 22,
  username: 'root123',
  password: '123456@qq.com'
}

const commandDel = [`rm -rf /data/wwwroot/frontend`]

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('upload', ['execSSH'], cb => {
  console.log('5s后开始上传文件...')
  gulp.src([`./dist/**`]).pipe(gulpSSH.dest(`/data/wwwroot/fffff`))
})

gulp.task('execSSH', cb => {
  console.log('删除服务器上现有文件...')
  return gulpSSH
    .shell(commandDel, { filePath: 'commands.log' })
    .pipe(gulp.dest('logs'))
})

gulp.task('default', ['upload'])
```