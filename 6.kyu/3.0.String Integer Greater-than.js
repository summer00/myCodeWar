/**
 *   比较入参大小
 *   http://www.codewars.com/kata/string-integer-greater-than/javascript
 *   @param  {string}   a 
 *   @param  {string}   b 
 *   @return {bool}     a>b re ture, a<=b re false
 *   @create 2015-03-25
 *   @update 2015-03-25
 */
//解法一：转换为数字，考虑精度问题，用递归方法解决大于16长度的字符串的比较，考虑太多，实际可以直接用比较字符串的值成为返回值，解法二、三为此。
function stringIntGreaterThan(a, b) {
	if (a.length < 16 && b.length < 16) {
		return Number(a) > Number(b);
	} else {
		var signA = a[0] != '-',
			signB = b[0] != '-';
		if (signA != signB) {
			return signA ? true : false;
		} else {
			var sign = signA;
			var al = a.length,
				bl = b.length;
			if (al != bl) {
				re = al > bl ? true : false;
			} else {
				a = a.slice(1, al), b = b.slice(1, bl);
				aa = a.slice(0, 16), bb = b.slice(0, 16);
				re = Number(aa) > Number(bb) ? true : Number(aa) < Number(bb) ? false : stringIntGreaterThan(a.slice(16, a.length), b.slice(16, b.length));
			}
			return sign ? re : !re;
		}
	}
}
/*
Description:

You are to write a function, stringIntGreaterThan that must accept arguments, each being the string representation of an positive or negative integer of any length (could contain a thousand digits, or more; also, integers will not have leading zeros).

The function should then return true if the first argument is greater than the second argument, false if not.
 */
