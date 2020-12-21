# github 中静态资源加载失败问题解决

### 找到的解决方案都是修改 hosts 文件中 github 相关静态资源域名的 dns 配置。

步骤如下

1. 打开终端,编辑 host 文件

```
sudo vim /etc/hosts

```

2. 配置 dns

> 或者自行通过 dns 查询工具查询最快的 ip 地址 [站长工具 dns 查询](http://tool.chinaz.com/dns/)

```
# GitHub Start
192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.100.133 assets-cdn.github.com
151.101.100.133 raw.githubusercontent.com
151.101.100.133 gist.githubusercontent.com
151.101.100.133 cloud.githubusercontent.com
151.101.100.133 camo.githubusercontent.com
151.101.100.133 avatars0.githubusercontent.com
151.101.100.133 avatars1.githubusercontent.com
151.101.100.133 avatars2.githubusercontent.com
151.101.100.133 avatars3.githubusercontent.com
151.101.100.133 avatars4.githubusercontent.com
151.101.100.133 avatars5.githubusercontent.com
151.101.100.133 avatars6.githubusercontent.com
151.101.100.133 avatars7.githubusercontent.com
151.101.100.133 avatars8.githubusercontent.com
# GitHub End


```

3. 刷新 mac 系统 dns 缓存

```
sudo killall -HUP mDNSResponder

```
