//http://www.cnblogs.com/zhoujie/p/nodejs4.html

用法
```base
$ npm install pm2 -g                 # 命令行安装 pm2 
$ pm2 start app.js -i 4              # 后台运行pm2，启动4个app.js 
                                     # 也可以把'max' 参数传递给 start
                                     # 正确的进程数目依赖于Cpu的核心数目
$ pm2 start app.js --name my-api     # 命名进程
$ pm2 list                           # 显示所有进程状态
$ pm2 monit                          # 监视所有进程
$ pm2 logs                           # 显示所有进程日志
$ pm2 stop all                       # 停止所有进程
$ pm2 restart all                    #重启所有进程
```
```
$ pm2 reload all                     # 0秒停机重载进程 (用于 NETWORKED 进程)
$ pm2 stop 0                         # 停止指定的进程
$ pm2 restart 0                      # 重启指定的进程
$ pm2 startup                        # 产生 init 脚本 保持进程活着
$ pm2 web                            # 运行健壮的 computer API endpoint (http://localhost:9615)
$ pm2 delete 0                       # 杀死指定的进程
$ pm2 delete all                     # 杀死全部进程
$ pm2 describe 0                     # 显示特定进行id的详细信息

运行进程的不同方式：
$ pm2 start app.js -i max            # 根据有效CPU数目启动最大进程数目
$ pm2 start app.js -i 3              #启动3个进程
```

```
$ pm2 start app.js -x                # 用fork模式启动 app.js 而不是使用 cluster
$ pm2 start app.js -x -- -a 23       # 用fork模式启动 app.js 并且传递参数 (-a 23)
$ pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone
$ pm2 stop serverone                 # 停止 serverone 进程
$ pm2 start app.json                 # 启动进程, 在 app.json里设置选项
$ pm2 start app.js -i max -- -a 23   #在--之后给 app.js 传递参数
$ pm2 start app.js -i max -e err.log -o out.log  # 启动 并 生成一个配置文件

你也可以执行用其他语言编写的app  ( fork 模式):
$ pm2 start my-bash-script.sh    -x --interpreter bash
$ pm2 start my-python-script.py -x --interpreter python

0秒停机重载:
    这项功能允许你重新载入代码而不用失去请求连接。
注意：
    仅能用于web应用
    运行于Node 0.12.x版本
    运行于 cluster 模式（默认模式）
$ pm2 reload all
    CoffeeScript:
$ pm2 start my_app.coffee  #这就是全部
```

### JSON配置启动应用

```javascript
{
  "name"             : "node-app",                        //应用名称
  "cwd"              : "/srv/node-app/current",           //应用所在绝对路径
  "args"             : ["--toto=heya coco", "-d", "1"],   //传递的参数
  "script"           : "app.js",                          //脚本名称
  "node_args"        : ["--harmony", " --max-stack-size=102400000"],
  "log_date_format"  : "YYYY-MM-DD HH:mm Z",              //日志输出格式
  "error_file"       : "./logs/errors.log",               //错误日志
  "out_file"         : "./logs/access.log",               //访问日志
  "pid_file"         : "./pids/node-geo-api.pid",         //pid
  "instances"        : 6, //or 0 => 'max'                 //启动6个app.js
  "min_uptime"       : "200s", // 200 seconds, defaults to 1000 //最小更新时间
  "max_restarts"     : 10, // defaults to 15              //连续不稳定的重启数超过10则PM2重启
  "max_memory_restart": "1M", // 1 megabytes, e.g.: "2G", "10M", "100K", 1024 the default unit is byte.                                                 //如果PM2启动的程序占用内存超过1M则重启
  "cron_restart"     : "1 0 * * *",                        //支持任务模式重启程序(只支持cluster)
  "watch"            : false,                             //是否开启事实监控文件改变(重要)
  "ignore_watch"      : ["[\\/\\\\]\\./", "node_modules"],//忽略监控
  "merge_logs"       : true,                              //是否合并日志
  "exec_interpreter" : "node",                            //node执行
  "exec_mode"        : "fork",                            //执行方式(culster集群模式)
  "autorestart"      : false,// enable/disable automatic restart when an app crashes or exits
  "vizion"           : false, // enable/disable vizion features (versioning control)
  "env": {
    "NODE_ENV": "production",
    "AWESOME_SERVICE_API_TOKEN": "xxx"
  }
}
```