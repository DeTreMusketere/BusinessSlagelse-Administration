angular.module('app').controller("MinButikController", function($scope, StoreService, SessionService, ValidationService){

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
			if($scope.isPhoneValid()){
				$scope.store.phone = ValidationService.phoneValidation($scope.store.phone);
				StoreService.save($scope.store, function(response){
					$.simplyToast('Dine ændringer er gemt', 'success');					
				});
			} else {
				$.simplyToast('Telefonnummeret er ugyldigt', 'danger');
				$scope.submitted = true;
			}
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

	$scope.isPhoneValid = function(){
		if($scope.store === undefined){
			return false;
		}
		if(ValidationService.phoneValidation($scope.store.phone) == null){			
			return false;
		}		
		return true;
	}

});