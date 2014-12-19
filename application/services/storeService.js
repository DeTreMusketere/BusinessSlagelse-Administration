angular.module('app').service('StoreService', function(SQLService) {
	this.create = function() {

	};

	this.save = function(store, success, fail) {
		$table = "store";
		$columns = ["id_store", "name", "description", "address", "phone"];
		$values = [store.id_store, "'" + store.name + "'", "'" + store.description + "'", "'" + store.address + "'", "'" + store.phone + "'"];
		$whereColumn = ["id_store"];
		$whereData = [store.id_store];

		SQLService.update($table, $columns, $values, $whereColumn, $whereData).success(function(response) {
			if(response == true){
				success();
			} else {
				fail();
			}
		});
	};

	this.delete = function(id_store, success, fail) {
		SQLService.remove("store", "id_store", id_store).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.get = function(id_store, callback) {
		SQLService.select("store", ["id_store", "name", "description", "address", "phone"], ["id_store"], [id_store]).success(function(response) {
			callback(response[0]);			
		});
	};

	this.getAll = function(callback) {
		SQLService.selectAll("store").success(function(response) {
			callback(response);
		});
	};
});