/**
 * 算出数组中的最大值
 */

var arr = [2,4,7,6,3,8,1,9];

 // 排序
 arr.sort((a, b) => a - b)
 console.log(arr[arr.length -1])

 // Math.max
 console.log(Math.max.apply(null, arr))

 // 使用ES6进行扩展，扩展运算符；
 // spread... 将一个数组转化为逗号分给的参数序列；
 // array.push(...items); 这样就不用循环push了；
 console.log(Math.max(...arr))