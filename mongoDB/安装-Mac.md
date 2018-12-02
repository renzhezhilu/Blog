#### 01.下载
###### 1-1. https://www.mongodb.com/download-center/community
###### 1-2. 解压到心水的目录下   `/Users/mac/mongodb`

#### 02.设置终端变量
###### 2-1.输入
`sudo vi ~/.bash_profile`
###### 2-2.按i 进入编辑模式 输入
`export PATH=/Users/mac/mongodb/bin:$PATH`
###### 2-3.按esc后 输入 :wq 回车 

###### 2-4.更新配置
`source .bash_profile`
or 重启终端生效

#### 03.新建data/db
###### 3-1.进入
`cd /Users/mac/mongodb/bin`
###### 3-2.建目录
`sudo mkdir -p /data/db`
###### 3-3.给权限
`$sudo chown `id -u` /data/db`

#### 04.启动
###### 4-1.输入
`mongod`
###### 4-2.访问 http://127.0.0.1:27017 说明启动成功！
`It looks like you are trying to access MongoDB over HTTP on the native driver port.`
###### 4-3.此刻可以输入命令访问数据库了
` 。。。`


#### 04.连接
###### 5-1.新开窗口输入
`mongo`
###### 5-2.出现 >|   安装完毕！
