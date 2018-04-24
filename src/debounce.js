// 防抖函数
function debounce(func, wait) {
  var timeout;
  return function() {
    
    var context = this;
    var args = arguments; // 需要将arguments传入到处理的function中;

    // 理论上也可以不删除；
    clearTimeout(timeout);

    timeout = setTimeout(function() {
      func.apply(context, args); // 将this指向window定义的域;
    }, wait);
  }
}