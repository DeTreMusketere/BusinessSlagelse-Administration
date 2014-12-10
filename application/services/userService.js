angular.module('app').service('UserService', function(SQLService) {

	var table = "user";

	this.create = function() {

	};

	this.save = function(user, success, fail) {
		$columns = ["name", "password", "email", "phone"];
		$values = ["'" + user.name + "'", "'" + user.password + "'", "'" + user.email + "'", "'" + user.phone + "'"];
		$whereColumns = ["id_user"];
		$whereData = [user.id_user];
		SQLService.update(table, $columns, $values, $whereColumns, $whereData).
			success(function(response) {
				if(response == true) {
					success();
				} else {
					fail();
				};
			});
	};

	this.delete = function() {

	};

	this.get = function() {

	};

	this.getAll = function() {

	};
});