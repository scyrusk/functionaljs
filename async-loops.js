function loadUsers(userIds, load, done) {
	var users = []
	var callbackCount = 0
	userIds.forEach(function(id, index) {
		load(id, function(user) {
			users[index] = user
			if (++callbackCount === userIds.length) {
				done(users)
			}
		});
	});
}

module.exports = loadUsers
