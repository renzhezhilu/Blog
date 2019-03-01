## 1.查询ARM 平台

```bash
uname -m
# ARMV7l
```

## 2.下载对应的node二进制安装包

##### https://nodejs.org/en/download/ - >

##### Linux Binaries (ARM) - >

###### 在[ARMv7]右键获取下载地址(https://nodejs.org/dist/v10.15.2/node-v10.15.2-linux-armv7l.tar.xz)

备选----wget https://npm.taobao.org/mirrors/node/latest/node-v10.15.2-linux-armv7l.tar.xz

```bash
wget https://nodejs.org/dist/v10.15.2/node-v10.15.2-linux-armv7l.tar.xz
```

## 3.解压并安装

解压

```bash
xz -d node-v10.15.2-linux-armv7l.tar.xz
tar -xavf node-v10.15.2-linux-armv7l.tar
```

移动至usr ,如果系统内原本存在 /usr/bin/node ，先将其删除 sudo rm -rf /usr/bin/node

```bash
sudo mv ./node-v10.15.2-linux-armv7l /usr/local/node
```

创建软连接

```bash
sudo ln -s /usr/local/node/bin/node /usr/bin/node
sudo ln -s /usr/local/node/bin/npm /usr/bin/npm
```

## 4.收尾

```bash
node -v   # v10.15.2
npm -v    # 5.6.0
```

使用cnpm 

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

更新node 安装n模块

```bash
sudo cnpm install -g n
n stable
```

end！
