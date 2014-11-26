angular.module('app').service('authService', function(SQLService) {
	this.authenticate = function(user, success, fail) {
		 SQLService.select("user", ["username", "password", "name", "administrator"], ["username", "password"], ["'"+user.username+"'", "'"+user.password+"'"]).
		 success(function($response) {
		 	if($response.length == 0) {
		 		fail();
		 	} else {
		 		success($response);
		 	};
		 });
	};
});