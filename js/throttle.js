/**
 * 节流throttle（时间戳）
 * 持续触发scroll事件时，并不立即执行handle函数，每隔1000毫秒才会执行一次handle函数。
 *
 * 鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
 *
 * */
var throttle1 = function (func, delay) {
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
window.addEventListener("scroll", throttle1(handle, 1000));

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

// 对比优缺点
// 定时器的实现，缺点最后一次时间不够一次delay仍然会触发执行
// 时间戳的实现，缺点时间不够一次delay，不会触发执行, 第一次会立即执行
// 最佳实践，组合定时器时间戳实现


/** 
* @method    组合防抖节流
* @param     {int} delay 防抖执行的时间间隔
* @param     {int} mustRunDelay 节流执行的时间间隔
* @return    {返回值类型} 返回值说明
*/

var throttle = function(fn, delay, mustRunDelay) {
  let startTime = Date.now();
  let timer = null;
  let isFirst = true; //断是否是第一次执行，是第一次就不立即执行
  return function() {
    let context = this;
    let args = [].slice.call(arguments);
    let remaining = mustRunDelay-(Date.now()-startTime);
    clearTimeout(timer)

    if (remaining <= 0){
      startTime = Date.now();
      if (!isFirst){
        fn.apply(context, args);
      } else {
        isFirst = false;
      } 
    } else{
      timer = setTimeout(function(){
        fn.apply(context, args);
      },delay)
    }
  }
}
window.addEventListener("scroll", throttle(function(){console.log(1)}, 1000, 2000));

// 组合的的办法有一个小问题，就是每次第一次会立即执行，可以添加一个标记判断是否是第一次执行，这样就可以完美实现了。