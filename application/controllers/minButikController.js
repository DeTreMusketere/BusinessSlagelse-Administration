angular.module('app').controller("MinButikController", function($scope, StoreService, SessionService, ValidationService){
	var l = Ladda.create( document.getElementById('saveButton') );

	$scope.submitted = false;
	$scope.load = function(){		
		StoreService.get(SessionService.getUser().store_id, function(response){
			$scope.store = response;
			$scope.originalStore = angular.copy(response);
		});

	};

	$scope.load();

	$scope.save = function(){
		l.start();
		if($scope.minButik.$valid){
			if($scope.isPhoneValid()){
				$scope.store.phone = ValidationService.phoneValidation($scope.store.phone);
				StoreService.save($scope.store, function(response){
					$scope.originalStore = angular.copy($scope.store);
					$.simplyToast('Dine ændringer er gemt', 'success');		
					l.stop();			
				});
			} else {
				$.simplyToast('Telefonnummeret er ugyldigt', 'danger');
				$scope.submitted = true;
				l.stop();
			}
		} else {
			$.simplyToast('Alle felter skal udfyldes', 'danger');
			$scope.submitted = true;
			l.stop();
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