var sum_pairs = function(ints, s) {
	for (var i = 1, l = ints.length; i < l; i++) {
		for (var j = 0; j + i < l; j++) {
			console.log(i + '--' + ints[j] + ' ' + ints[j + i]);
			if (ints[j] + ints[j + i] == s) return [ints[j], ints[j + i]];
		}
	}
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5, 8, 9, 100], 10));