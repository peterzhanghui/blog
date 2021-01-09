# js 防止按钮重复点击

> 业务需求场景，项目中涉及到保存，修改数据的时候，多次点击按钮，因为数据处理需要时间，会造成重复操作的情况。

### 解决方案一： 表单按钮修改 disabled 属性， 或者在 js 事件中设置标签判断。简单粗暴，不够优雅，每个事件里都要加重复的逻辑，没有分离开

```
this.disabled = true;
```

### 方案二：使用函数防抖（自定义，或者直接使用 lodash 的 debounce 方法）

```
// 防抖
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
 // 绑定的按钮点击事件调用防抖方法
 debounce(submit, 1000)
```

### 方案三：可以添加 loading 动画

如果涉及 http 请求，可以等 http 响应开始添加 loading 动画，完成后关闭。
