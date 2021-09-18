/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2021-09-18 17:36:42
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2021-09-18 17:50:54
 * @Description  : 描述信息
 */
var root = document.documentElement;
console.log(root.style) //对象中所有支持的样式属性作为key
// 检测某个具体的属性值是否支持
var dummy = document.createElement('p');
dummy.style.backgroundImage = "linear-gradient(red,tan)"
console.log(dummy.style.backgroundImage) // 都会有属性值吧
// dummy.style.cc = "ddd"
// console.log(dummy.style.cc) // cc