var sum_pairs = function(ints, s) {
	seen = [];
	for (i = 0; i < ints.length; i++) {
		item = ints[i];
		console.log(seen);
		if (seen.indexOf(s - item) != -1) return [s - item, item];
		if (seen.indexOf(item) == -1) seen.push(item);
	}
	return undefined;
};
console.log(sum_pairs([10, 5, 2, 3, 7, 5, 8, 9, 100], 10))