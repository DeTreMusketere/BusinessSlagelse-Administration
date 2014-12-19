angular.module('app').controller("ButikOversigtController", function($scope, $rootScope, StoreService, UserService, SaleService){
	
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
	};

	$scope.load();

	// Delete
	$scope.store;
	$scope.user;
	$scope.sales;

	$scope.setStoreToDelete = function(store) {
		$scope.store = store;
		$scope.user = store.user;
		SaleService.getByStore($scope.store, function(response) {
			$scope.sales = response;
		});
	};

	$scope.delete = function() {
		$scope.sales.forEach(function(sale) {
			SaleService.deleteTagConnections(sale,
				function() {
					console.log("Sale connections deleted, deleting sale now...");
					SaleService.delete(sale,
						function() {
							console.log(" Sale deleted :D");
						},
						function() {
							console.error(" Could not delete sale :(");
						});
				},
				function(){
					console.error("Could not delete tag connections (Sale was not deleted either)");
				});
		});


		StoreService.delete($scope.store.id_store,
			function() {
				console.log("Store was deleted, deleting user now...");
				UserService.delete($scope.user.id_user,
					function() {
						$.simplyToast('Butikken blev slettet', 'success');
						$scope.load();
						$('#deleteModal').modal('hide');
						console.log(" User was deleted :D");
					},
					function() {
						$.simplyToast('Butikken kunne ikke slettes', 'danger');
						$('#deleteModal').modal('hide');
						console.error(" User could not be deleted :(");
					});
			},
			function() {
				console.error("Could not delete store");
				$.simplyToast('Butikken kunne ikke slettes', 'danger');
			});
	};

	// Edit

	$scope.setStoreToEdit = function(store){
		$rootScope.storeToEdit = store;
	};

});