/**
 * 在进行窗口的resize、scroll
 * 输入框内容校验等操作时
 *  高频率的事件调用，限制调用次数
 *
 * */
// 防抖
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// eg：滚动事件
window.addEventListener("scroll", debounce(handle, 1000));
