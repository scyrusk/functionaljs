function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(user) {
			return goodUsers.some(function(gu) {
				return user.id === gu.id;
			});
		});
	}
}

module.exports = checkUsersValid
