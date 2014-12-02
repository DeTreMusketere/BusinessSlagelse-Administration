angular.module('app').service('UserStoreService', function(SQLService, IdService) {

	this.create = function(user, store, success, fail) {
		store.id_store = IdService.getNextStoreId();
		user.id_user = IdService.getNextUserId();
		user.store_id = store.id_store;

		// Create store
		$table = "store";
		$columns = ["id_store", "name", "description", "address", "phone"];
		$values = [store.id_store, "'" + store.name + "'", "'" + store.description + "'", "'" + store.address + "'", "'" + store.phone + "'"];

		SQLService.insert($table, $columns, $values).success(function(response) {
			if(response == true) {
				// Create user
				$table = "user";
				$columns = ["id_user", "name", "username", "password", "email", "phone", "store_id", "administrator"];
				$values = [user.id_user, "'" + user.name + "'", "'" + user.username + "'", "'" + user.password + "'", "'" + user.email + "'", "'" + user.phone + "'", user.store_id, "0"];

				SQLService.insert($table, $columns, $values).success(function(response) {
					if(response == true) {
						success();
					} else {
						fail(2);
					};
				});
			} else {
				fail(1);
			};
		});
	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.getStore = function() {

	};

	this.getUser = function() {

	};

	this.login = function(user, success, fail) {
		 SQLService.select("user", ["username", "password", "name", "administrator"], ["username", "password"], ["'"+user.username+"'", "'"+user.password+"'"]).
		 success(function($response) {
		 	if($response.length == 0) {
		 		fail();
		 	} else {
		 		success($response);
		 	};
		 });
	};

	this.getAll = function(callbackUsers, callbackStores) {
		SQLService.selectAll("user").success(function(response) {
			callbackUsers(response);
		});
		
		SQLService.selectAll("store").success(function(response) {
			callbackStores(response);
		});
	};
});