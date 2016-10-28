function reduce(arr, fn, initial) {
	if (!arr.length) return initial;
	var head = arr[0], tail = arr.slice(1);
	initial = fn(initial, head)
	return reduce(tail, fn, initial);
}

module.exports = reduce
