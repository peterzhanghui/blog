# IE 兼容问题及解决方案

> 因为有办公电脑依然使用 windows 的老版 ie 浏览器，所以 ie9 - ie11 的兼容还是需要考虑的

## 使用的工具

- 检查 属性和方法在各个浏览器，各版本兼容性的网站
  [caniuse](https://caniuse.com/)

### flex 兼容

在 ie11 下 flex: 1 解析为 1 1 0, 而不是其他浏览器的 1 1 auto, 所以这时还要对 flex: 1 进行修改，使用 flex-grow: 1

```
.content-wrapper {
  display: flex;
  flex-grow: 1; /* flex:1 改变成flex-grow: 1 */
}
```
