//我的写法，主要是符号的取值，可以改进
function stringIntGreaterThan(a, b) {
	if ((a[0] == '-') != (b[0] == '-')) {
		return a[0] == '-' ? false : true;
	}
	if (a.length != b.length) {
		return a[0] == '-' ? !(a.length > b.length) : (a.length > b.length);
	}

	return a[0] == '-' ? !(a >= b) : a > b;
}

//简洁易懂
function stringIntGreaterThan(a, b) {
  // Signs
  var aSign = a[0] == '-' ? -1 : 1
  var bSign = b[0] == '-' ? -1 : 1
  if (aSign !== bSign) return aSign > bSign
  
  // Length
  var aLen = a.length
  var bLen = b.length
  if (aLen !== bLen) return aSign < 0 ? aLen < bLen : aLen > bLen
  
  // Value
  return aSign < 0 ? a < b : a > b
}