function countWords(inputWords) {
	return inputWords.reduce(function(cum, curr) {
		cum[curr] = (cum[curr] || 0) + 1
		return cum;
	}, {}); 
}

module.exports = countWords
