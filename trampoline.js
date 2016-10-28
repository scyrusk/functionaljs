function repeat(operation, num) {
	if (num <= 0) return;
	operation()
	return repeat.bind(null, operation, --num);
}

function trampoline(fn) {
	var nextStep = fn
	while ((nextStep = nextStep()));
}


module.exports = function(operation, num) {
	return trampoline(repeat(operation, num));
}
