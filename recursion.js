function getDependencies(tree) {
	if (!tree || !tree.hasOwnProperty('dependencies')) return []
	var deps = tree.dependencies
	return [].concat.apply([], Object.keys(deps).map(function(key) {
		var depName = key + "@" + deps[key].version
		return  [depName].concat(getDependencies(deps[key]))
	})).filter(function(dep, pos, self) {
		return self.indexOf(dep) == pos;
	}).sort();
}

module.exports = getDependencies
