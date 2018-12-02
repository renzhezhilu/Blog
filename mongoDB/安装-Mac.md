#### 01.下载
######  https://www.mongodb.com/download-center/community
######  解压到心水的目录下   `/Users/mac/mongodb`

#### 02.设置终端变量
###### 输入
`sudo vi ~/.bash_profile`
###### 按i 进入编辑模式 输入
`export PATH=/Users/mac/mongodb/bin:$PATH`
###### 按esc后 输入 :wq 回车 
###### 更新配置
`source .bash_profile`
or 重启终端生效

#### 03.新建data/db
###### 进入
`cd /Users/mac/mongodb/bin`
###### 建目录
`sudo mkdir -p /data/db`
###### 给权限
`$sudo chown `id -u` /data/db`

#### 04.启动
###### 输入
`mongod`
###### 访问 http://127.0.0.1:27017 说明启动成功！
`It looks like you are trying to access MongoDB over HTTP on the native driver port.`
###### 此刻可以输入命令访问数据库了
` 。。。`


#### 04.连接
###### 新开窗口输入
`mongo`
###### 出现 >|   安装完毕！
