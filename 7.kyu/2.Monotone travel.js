/**
 *   判断是否是递减关系
 *   @param  {Array}   arr 待考察数组
 *   @return {bool}    递减true 增false
 *   @create 2015-03-26
 *   @update 2015-03-26
 */
var isMonotone = function(arr) {
	return arr.every(function(v, i) {
		return v > arr[i + 1] ? false : true;
	})
}

console.log(isMonotone([5, 4, 3, 2, 1]));