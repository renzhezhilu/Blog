//////////////////////////////////////////文件
//////////读取
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

//////////重命名


//////////修改


//////////写入
////fs.readFile('路径',‘内容’,'编码默认utf8',回调(error,data){...})
//如果存在则覆盖
fs.writeFile("333.txt","33333",(err)=>{
    if (err) throw err;
    console.log('saved!');
})
////同步
fs.writeFileSync("666.txt","666666",'utf8');

//////////追加


//////////删除


//////////覆盖










//////////////////////////////////////////文件夹

//////////读取


//////////重命名



//////////修改


//////////写入


//////////追加


//////////删除


//////////覆盖



//////////////////////////////////////////实用函数




