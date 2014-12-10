angular.module('app').service('StoreService', function(SQLService) {
	this.create = function() {

	};

	this.save = function(store, callback) {
		$table = "store";
		$columns = ["id_store", "name", "description", "address", "phone"];
		$values = [store.id_store, "'" + store.name + "'", "'" + store.description + "'", "'" + store.address + "'", "'" + store.phone + "'"];
		$whereColumn = ["id_store"];
		$whereData = [store.id_store];

		SQLService.update($table, $columns, $values, $whereColumn, $whereData).success(function(response) {
			callback(response[0])
		});
	};

	this.delete = function() {

	};

	this.get = function(id_store, callback) {
		SQLService.select("store", ["id_store", "name", "description", "address", "phone"], ["id_store"], [id_store]).success(function(response) {
			callback(response[0]);			
		});
	};

	this.getAll = function() {

	};
});