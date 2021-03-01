/**
 * 在进行窗口的resize、scroll
 *  高频率的事件调用，限制调用次数
 * 
 * search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
 * window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
 *
 * */
// 防抖
function debounce(func, wait) {
  var timeout = null;
  return function (...args) {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(()=>{
      func.apply(this, args)
    }, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// eg：滚动事件
window.addEventListener("scroll", debounce(handle, 1000));
