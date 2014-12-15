angular.module('app').controller("ButikOversigtController", function($scope, StoreService, UserService){
	
	$scope.stores = [];
	$scope.users = [];
	$scope.load = function(){
		StoreService.getAll(function(response){
			$scope.stores = response;
			$scope.loadUsers();			
		});
	};

	$scope.loadUsers = function() {
		UserService.getAll(function(response){
			$scope.users = response;

			$scope.stores.forEach(function(store){
				$scope.users.forEach(function(user){
					if(user.store_id == store.id_store) {
						store.user = user;
					};
				});
			});
		});
		console.log($scope.stores);
	};

	$scope.load();
});