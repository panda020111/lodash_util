/**
 * 对象的拷贝；
 * 关于数组的浅拷贝一般使用arr.comcat() 或者arr.slice(0)来产生一个新的数组；
 */

 // 浅拷贝；
 function shallowCopu (obj) {
   if (typeof obj !== 'object') return ;
   var newObject = obj instanceof Array ? [] : {};
   for (var key in obj) {
     if (obj.hasOwnProperty(key)) {
       newObject[key] = obj[key]
     }
   }
   return newObject; 
 }

// 深拷贝, 对比浅拷贝多一个类型判断和递归
function deepCopy (obj) {
  if (typeof obj !== 'object') return ;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 使用typeof function 为function，function就是个指针；
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}


