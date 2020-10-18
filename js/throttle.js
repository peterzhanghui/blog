/**
 * 节流throttle（时间戳）
 * 持续触发scroll事件时，并不立即执行handle函数，每隔1000毫秒才会执行一次handle函数。
 * 
 * 鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
 *
 * */
var throttle = function (func, delay) {
  var prev = Date.now();
  return function () {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
};
function handle() {
  console.log(Math.random());
}
window.addEventListener("scroll", throttle(handle, 1000));

/**
 * 节流throttle（定时器）
 *
 * */
var throttle2 = function(func, delay){
  var timer = null;
  return function() {
    var context = this;               
    var args = arguments;  
    if (timer) {
      clearTimeout(timer)
    } else {
      timer = setTimeout(function(){
        func.apply(context,args);
        timer = null;
      }, delay);
    }
  }
  
}