function Spy(target, method) {
	var retval = { count: 0 }
	var innerMethod = target[method]
	target[method] = function() {
		retval.count++;
		return innerMethod.apply(target, arguments)
	}
	return retval;
}

module.exports = Spy
