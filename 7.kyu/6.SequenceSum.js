/**
 *   返回长度为n+1的算术序列的数组
 *   @param  {int}       n 
 *   @return {Array}     算术序列数组
 *   @create 2015-03-28
 *   @update 2015-03-28
 */
function sumOfN(n) {
	var arr = [],
		value;
	for (var i = 0; i <= Math.abs(n); i++) {
		if (i == 0) {
			arr.push(0);
		} else {
			if (n < 0) {
				value = arr[i - 1] - i;
			} else {
				value = arr[i - 1] + i;
			}
			arr.push(value);
		}
	}
	return arr;
};
console.log(sumOfN(-3));