/**
 *   返回间隔最小的ints中两个元素和为s的元素组成的数组
 *   @param  {array}   ints 输入数组
 *   @param  {int}   s    和
 *   @return {array}        返回的数组
 *   @create 2015-03-24
 *   @update 2015-03-24
 */
var sum_pairs = function(ints, s) {
	// console.log(ints);
	// console.log(s);
	var result = {},
		pos, id, value;
	for (var i = 0; i < ints.length; i++) {
		pos = ints.indexOf(s - ints[i], i + 1);
		if (pos != -1) {
			id = ints[i];
			value = ints[pos];
			result[id] = result[id] ? result[id] > value ? value : result[id] : value;
		}
	}
	// console.log(result);
	for (var i in result) {
		console.log(i);
		return [Number(i), result[i]];
	}
}
console.log(sum_pairs([1, -2, 3, 0, -6, 1, -6, 3, 5, 7, 10, 32, -89], -6));