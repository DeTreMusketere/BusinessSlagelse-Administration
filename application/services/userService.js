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

	this.delete = function(id_user, success, fail) {
		SQLService.remove(table, "id_user", id_user).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.get = function(id_user, callback) {
		SQLService.select("user", ["id_user", "name", "email", "phone", "store_id", "administrator"], ["id_user"], [id_user]).success(function(response) {
			callback(response[0]);			
		});
	};

	this.getFromStoreId = function(id_store, callback) {
		SQLService.select("user", ["id_user", "name", "email", "phone", "store_id", "administrator"], ["store_id"], [id_store]).success(function(response) {
			//callback(response[0]);			
		});
	};

	this.getAll = function(callback) {
		SQLService.selectAll("user").success(function(response) {
			callback(response);
		});
	};
});