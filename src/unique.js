/**
 * 数组去重；
 * @param {*} arr 
 */

 /**
  * 第一种方式直接用双循环的方式；
  */
function unique(arr) {

  if (!arr) {
    return ;
  }

  var res = []
  for (var i=0, arrLen = arr.length; i<arrLen; i++) {
    for (var j=0, resLen = res.length; j<resLen; j++) {
      if (arr[i] == res[j]) {
        break;
      }
    }

    // 这个写法，很好的处理了边界问题；
    if (j === resLen) {
      res.push(arr[i])
    }
  }
  return res;
}

// 或者直接用indexOf简化内部循环；


// 排序后去重；
function unique(arr) {
  var res = [];

  // 通过comcat copy一个新数组进行排序，不然排序会改变老数组，影响外部的值；
  var sortedArray = arr.comcat().sort(); 
  var seen;
  for (var i=0, len = sortedArray.length; i<len; i++) {
    if (seen !== sortedArray[i]) {
      res.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
}

// 使用filter和indexOf来简化循环；这个写法简单易懂；
function unique(arr) {
  var res = array.filter((item, index, array) => {
    return array.indexOf(item) === index;
  })

  return res;
}


// 引入map数据结构
function unique(arr) {
  var obj = {}
  var res = arr.filter((item, index, array) => {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true)
  })
  return res
}

// ES6中的实现
var unique = (a) => [...new Set(a)]


// 多个数组的合并
_union([1,23,3], [32,6,5]); //这种去重；