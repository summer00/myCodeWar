var isMonotone = function(arr) {
	return arr.every(function(v, i) {
		return v > arr[i + 1] ? false : true;
	})
}

console.log(isMonotone([5, 4, 3, 2, 1]));