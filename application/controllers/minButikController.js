angular.module('app').controller("MinButikController", function($scope, StoreService, SessionService){

	$scope.submitted = false;
	$scope.load = function(){		
		StoreService.get(SessionService.getUser().store_id, function(response){
			$scope.store = response;
			$scope.originalStore = angular.copy(response);
		});

	};

	$scope.load();

	$scope.save = function(){
		if($scope.minButik.$valid){
			StoreService.save($scope.store, function(response){
				$.simplyToast('Dine ændringer er gemt', 'success');
				console.log(response);
			});
		} else {
			$.simplyToast('Alle felter skal udfyldes', 'danger');
			$scope.submitted = true;
		}
	}

	$scope.isChanged = function(){
		if($scope.store === undefined){
			return false;
		} else {
			if($scope.store.name != $scope.originalStore.name || $scope.store.description != $scope.originalStore.description || $scope.store.address != $scope.originalStore.address || $scope.store.phone != $scope.originalStore.phone){
				return true;
			} else {
				return false;
			}
		}
	};

});