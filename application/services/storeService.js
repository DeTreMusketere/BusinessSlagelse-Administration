angular.module('app').service('StoreService', function(SQLService) {
	this.create = function() {

	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.get = function(id_store, callback) {
		SQLService.select("store", ["name", "description", "address", "phone"], ["id_store"], [id_store]).success(function(response) {
			callback(response[0]);			
		});
	};

	this.getAll = function() {

	};
});