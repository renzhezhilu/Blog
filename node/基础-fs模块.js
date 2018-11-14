/////////////////////////////////////////////////////////////////////文件
//*******************打开*******************//
//fs.open(路径,模式,权限,(err,fd)=>{...})
//fd是文件描述符
fs.open('123.json', 'r', '0666', (err, fd) => {
    if(err) throw err;
    console.log(fd); //19
});

//*******************读取*******************//
////fs.readFile('路径','编码','模式',回调(error,data){...})
//输出Buffer类型数据，需转换
fs.readFile('./123.json',function(err,data){
    if(err) throw err;
    console.log(data); //Buffer(16) [91, 34, 49, 50, 51, 231, 154, 132, …]
    console.log(data.toString());//["123的内容"]
    console.log(JSON.parse(data));//Array(1) ["123的内容"]
})
//增加格式参数可以直接输出字符串
fs.readFile('./123.json','utf8',function(err,data){
    if(err) throw err;
    console.log(data); //["123的内容"]
})
////常见err
//Error: ENOENT: no such file or directory, open 没有这样的文件或目录
////同步
var json123 = fs.readFileSync('123.json','utf8');
console.log(json123);//["123的内容"]

//*******************是否存在*******************//
////文件or文件夹
//不要在open方法之前调用exists方法，open方法本身就能检查文件是否存在
//不管结果如何，都会回调,所以不写if(err)...了
fs.exists('./123.json', function (exists) {
    console.log(exists ? "yes" : "no");
});
//同步
var file = './http';
console.log( fs.existsSync(file) ? file+"存在" : file+"不存在" );


//*******************监听*******************//
////fs.watch（绝对路径，回调(event, filename){...}）
//系统原生监听
//文件or目录
var kk = fs.watch(__dirname, (event, filename)=>{
    console.log(event,filename);
}) 
setTimeout(() => {
    kk.close();
    console.log('关闭watch')
}, 15000);
/*
rename p.png
change 123.json
rename 123的副本.json
change .DS_Store
rename p.png
rename p的副本.png
关闭watch
*/

/////fs.watchFile('文件','参数(对象)',回调(curr, prev){...})
//变化后curr，变化前prev
//用fs.watch(...)性能更好
fs.watchFile('./123.json', {interval: 2000 }, (curr, prev) => {
    console.log('curr:',curr,'prev:',prev);
});
// 取消监听
setTimeout(() => {
fs.unwatchFile(__dirname+'/123.json');
}, 5000);
/*
curr:
{
    atime:Wed Nov 14 2018 10:32:59 GMT+0800 (China Standard Time) {}
    atimeMs:1542162779505.3528
    birthtime:Sat Nov 10 2018 10:32:14 GMT+0800 (China Standard Time) {}
    birthtimeMs:1541817134609.5735
    blksize:4194304
    blocks:8
    ctime:Wed Nov 14 2018 10:32:59 GMT+0800 (China Standard Time) {}
    ctimeMs:1542162779484.097
    dev:16777222
    gid:20
    ino:8597644239
    mode:33188
    mtime:Wed Nov 14 2018 10:32:59 GMT+0800 (China Standard Time) {}
    mtimeMs:1542162779484.097
    nlink:1
    rdev:0
    size:12100
    uid:501
}
prev:
{
    atime:Wed Nov 14 2018 10:32:50 GMT+0800 (China Standard Time) {}
    atimeMs:1542162770335.4802
    birthtime:Sat Nov 10 2018 10:32:14 GMT+0800 (China Standard Time) {}
    birthtimeMs:1541817134609.5735
    blksize:4194304
    blocks:8
    ctime:Wed Nov 14 2018 10:31:52 GMT+0800 (China Standard Time) {}
    ctimeMs:1542162712693.218
    dev:16777222
    gid:20
    ino:8597644239
    mode:33188
    mtime:Wed Nov 14 2018 10:31:52 GMT+0800 (China Standard Time) {}
    mtimeMs:1542162712693.218
    nlink:1
    rdev:0
    size:43
    uid:501
}
*/

//更复杂点
const watchcall = function(curr, prev){
    if(Date.parse(prev.ctime) == 0){
        console.log("123.json被创建");
    }else if(Date.parse(curr.ctime) == 0){
        console.log("123.json被删除");
    }else if(Date.parse(prev.mtime) != Date.parse(curr.mtime)){
        console.log("123.json被修改");
    }
}
fs.watchFile('./123.json', {interval: 1000 }, watchcall);
 setTimeout(() => {
    fs.unwatchFile(__dirname+'/123.json',watchcall);
    console.log("取消监听");
 }, 50000);

//*******************重命名*******************//
//fs.rename(原路径,新路径,回调(err){...})
////重命名
fs.rename('123.json','1111.json', (err)=> {
    if(err) throw err;
    console.log('重命名成功');
})
//*****************移动&剪切*****************//
fs.rename('123.json','ss/111.json',(err)=>{
    if(err) throw err;
    console.log('移动文件并改名成功');
})


//*******************修改*******************//


//*******************写入*******************//
////fs.readFile('路径',‘内容’,'编码默认utf8',回调(error,data){...})
//如果存在则覆盖
fs.writeFile("333.txt","33333",(err)=>{
    if (err) throw err;
    console.log('saved!');
})
////同步
fs.writeFileSync("666.txt","666666",'utf8');
////error
//Error: ENOENT: no such file or directory 

//*******************追加*******************//
//fs.appendFile(路径,内容,回调(err)=>{...})
fs.appendFile('123.json','[1,2,3]',(err)=>{
    if(err) console.log(err);
    console.log('追加成功');
})

//*******************删除*******************//


//*******************覆盖*******************//










/////////////////////////////////////////////////////////////////////文件夹

//*******************读取*******************//
//当前路径'./' 当前运行js所在目录 '__dirname'
fs.readdir(__dirname,(err,jg)=>{
    if (err) throw err;
    jg.forEach((item)=>{
        console.log(item);
    })
})
//同步
console.log(
    '返回数组：%s',
    fs.readdirSync('./')
);



//*******************新建*******************//
//fs.mkdir(目录名称,权限,回调(err){...})
fs.mkdir('./a',0777, function (err) {
    if (err) throw err;
});
//同步
fs.mkdirSync('./b',0777);

//*******************重命名*******************//



//*******************修改*******************//


//*******************写入*******************//


//*******************追加*******************//


//*******************删除*******************//
//*******************删除空的目录*******************//
fs.rmdir("tt",(err)=>{
    if(err) throw err;
    console.log('删除成功');
})
//同步
fs.rmdirSync("tt");
//error
//Error: ENOTEMPTY: directory not empty 目录不为空

//*******************覆盖*******************//


/////////////////////////////////////////////////////////////////////判断
//判断是文件还是目录
fs.stat('./123.json', (err, stats) => {
    if (err) throw err;
    console.log(
        stats.isFile(),
        stats.isDirectory(),
        JSON.stringify(stats)
    );
}) 
/* 
true false
{
    "dev": 16777222,
    "mode": 16877,
    "nlink": 10,
    "uid": 501,
    "gid": 20,
    "rdev": 0,
    "blksize": 4194304,
    "ino": 8597475163,
    "size": 320,
    "blocks": 0,
    "atimeMs": 1542160887871.3687,
    "mtimeMs": 1542158748198.276,
    "ctimeMs": 1542158748198.276,
    "birthtimeMs": 1541811260036.9626,
    "atime": "2018-11-14T02:01:27.871Z",
    "mtime": "2018-11-14T01:25:48.198Z",
    "ctime": "2018-11-14T01:25:48.198Z",
    "birthtime": "2018-11-10T00:54:20.037Z"
}
*/


/////////////////////////////////////////////////////////////////////实用函数






