/*
 * Takes a bottleWeight and scale of the bottle to its contents
 * and returns the weight of its contents
 * @param {int} bottleWeight:
 *  The weight of the entire bottle and contents
 * @param {string} scale:
 *  A string comparing the weight of the bottle contents to the weight of the bottle by itself
 * Acceptable values: ('2 times larger', '4 times larger', '50 times smaller')
 */
function contentWeight(bottleWeight, scale) {
	var p = bottleWeight / (parseInt(scale) + 1);
	return scale.slice(-3) == 'ser' ? p : p * parseInt(scale)
}
console.log(contentWeight(120, "2 times larger"));

/*
使用正则表达，我该学习正则表达式了
 */
function contentWeight(bottleWeight, scale) {
  var s = parseInt(scale);
  return /larger/.test(scale) ? bottleWeight * s / (s+1) : bottleWeight / (s+1);
}
/*
更简单的写法
 */
function contentWeight(w,s){r=parseFloat(s);return(/g/.test(s)?r:1)*w/(r+1)}