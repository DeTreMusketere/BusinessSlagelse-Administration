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
				stores.push(store);
				console.log("Store got inserted successfully");

				// Create user
				$table = "user";
				$columns = ["id_user", "name", "username", "password", "email", "phone", "store_id", "administrator"];
				$values = [user.id_user, "'" + user.name + "'", "'" + user.username + "'", "'" + user.password + "'", "'" + user.email + "'", "'" + user.phone + "'", user.store_id, user.administrator];

				SQLService.insert($table, $columns, $values).success(function(response) {
					if(response === true) {
						users.push(user);
						console.log("User got inserted successfully");
						success();
					} else {
						console.log("Could not insert user");
						fail(2);
					};
				});
			} else {
				console.error("Could not insert store");
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

	this.getAll = function() {
		$data = {
			'users' : users,
			'stores' : stores
		};
		return $data;
	};

	this.load = function(successUsers, emptyUsers, successStores, emptyStores) {
		// Load users
		SQLService.selectAll("user").success(function(response) {
			users = response;
			if(successUsers && emptyUsers) {
				if(response.length > 0) {
					successUsers();
				} else {
					emptyUsers();
				};
			};
		});
		
		// Load stores
		SQLService.selectAll("store").success(function(response) {
			stores = response;
			if(successStores && emptyStores) {
				if(response.length > 0) {
					successStores();
				} else {
					emptyStores();
				};
			};
		});
	};
});