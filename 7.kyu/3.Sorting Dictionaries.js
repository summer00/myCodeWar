/**
 *   对象按照值进行排序
 *   @param  {Object}   dict 传入对象
 *   @return {Array}    排序后的数组
 *   @create 2015-03-26
 *   @update 2015-03-26
 */
function sortDict(dict) {
	return Object.keys(dict).map(function(v) {
		return [isNaN(v) ? [v, dict[v]] : [Number(v), dict[v]]];
	}).sort(function(a, b) {
		return b[1] - a[1];
	});
}

console.log(sortDict({
	1: 3,
	2: 2,
	3: 1,
	a: 9
}));