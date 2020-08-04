## 安装shadowsocks
```
pip install shadowsocks
```

## 查询主机名
记住Static hostname值作为下一步的servev主机名
```shell
hostnamectl status
# Static hostname: zhangsan
#          Icon name: computer-vm
#            Chassis: vm
#         Machine ID: ********************************
#            Boot ID: ********************************
#     Virtualization: kvm
#   Operating System: CentOS Linux 7 (Core)
#        CPE OS Name: cpe:/o:centos:centos:7
#             Kernel: Linux 3.10.0-1062.9.1.el7.x86_64
#       Architecture: x86-64
```

## 配置
```
cd /etc
```
创建shadowsocks.json
```json
{
	"servev":"iZ6wefo123232445mZ",
	"server_port":443,
	"local_address":"127.0.0.1", 
	"local_port":1080,
	"password":"123456",
	"timeout":300,
	"method":"aes-256-cfb",
	"fast_open":false,
	"workers":5
}
{
	"servev":"iZ6wefo123232445mZ", //主机名
	"server_port":443,      //端口
	"local_address":"127.0.0.1", 
	"local_port":1080,
	"password":"123456",//密码
	"timeout":300,
	"method":"aes-256-cfb",
	"fast_open":false,
	"workers":5
}
```

## 开启服务
```shell
# 开启
ssserver -c shadowsocks.json -d start
# 关闭
# ssserver -c /etc/shadowsocks.json -d stop
```

## 关闭防火墙
```shell
# 关闭
systemctl stop firewalld.service
# 开启
# systemctl start firewalld.service
```

## 客户端


## end！