/**
 * 数组扁平化
 */

 /**
  * 递归+数组判断来实现flattern；
  */
function flattern(arr) {
  var result = []
  for (var i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattern(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

/**
 * 
 * @param {*} arr 
 * @param {* 是否值处理一层扁平} shallow 
 */
function flatten(arr, shallow) {
  var result = []
  for (var i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (shallow) {
        var j=0, length = arr[i].length;
        while(j<length) result.push(arr[i++])
      } else {
        result.push(arr[i])
      }
    }
  }
}