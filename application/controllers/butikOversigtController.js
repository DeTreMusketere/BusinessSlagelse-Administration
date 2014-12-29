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
					SaleService.delete(sale,
						function() {
							
						},
						function() {
							
						});
				},
				function(){
					
				});
		});


		StoreService.delete($scope.store.id_store,
			function() {
				
				UserService.delete($scope.user.id_user,
					function() {
						$.simplyToast('Butikken blev slettet', 'success');
						$scope.load();
						$('#deleteModal').modal('hide');
					},
					function() {
						$.simplyToast('Butikken kunne ikke slettes', 'danger');
						$('#deleteModal').modal('hide');
					});
			},
			function() {
				$.simplyToast('Butikken kunne ikke slettes', 'danger');
			});
	};

	// Edit

	$scope.setStoreToEdit = function(store){
		$rootScope.storeToEdit = store;
	};

});