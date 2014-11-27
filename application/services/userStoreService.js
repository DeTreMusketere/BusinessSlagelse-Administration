angular.module('app').service('UserStoreService', function(SQLService) {
	var users;
	var stores;

	this.create = function(user, store, success, fail) {
		// Create store
		$table = "store";
		$columns = ["id_store", "name", "description", "address", "phone"];
		$values = [store.id_store, "'" + store.name + "'", "'" + store.description + "'", "'" + store.address + "'", "'" + store.phone + "'"];

		SQLService.insert($table, $columns, $values).success(function(response) {
			if(response === true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.get = function() {

	};

	this.getAll = function() {

	};
});