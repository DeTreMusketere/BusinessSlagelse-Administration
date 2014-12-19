angular.module('app').controller("RedigerButikController", function($scope, $rootScope, StoreService, UserService, $state, ValidationService){
	
	var l = Ladda.create( document.getElementById('buttonSave') );

	$scope.submitted = false;
	$scope.load = function(){		
		$scope.store = $rootScope.storeToEdit;
		$scope.originalStore = angular.copy($scope.store);
		$rootScope.storeToEdit = undefined;
	};

	$scope.load();

	

	$scope.save = function(){
		if($scope.editForm.$valid){	
			if($scope.isPhoneValid()){	
				StoreService.save($scope.store, function(){
					UserService.save($scope.store.user, function(){
						$.simplyToast('Dine ændringer er gemt', 'success');
						$state.go('butikker_oversigt');
					}, function(){
						$.simplyToast('Der skete en fejl da brugeren skulle gemmes', 'danger');	
					});
				}, function(){
					$.simplyToast('Der skete en fejl da butikken skulle gemmes', 'danger');	
				});		

			} else {
				$.simplyToast('Telefonnummeret er ugyldigt', 'danger');
				$scope.submitted = true;
			}
		} else {
			$.simplyToast('Alle felter skal udfyldes', 'danger');
			$scope.submitted = true;
		}
	};

	$scope.isChanged = function(){
		if($scope.store === undefined){
			return false;
		} else {
			if($scope.store.name != $scope.originalStore.name || $scope.store.description != $scope.originalStore.description || $scope.store.address != $scope.originalStore.address || $scope.store.phone != $scope.originalStore.phone
				|| $scope.store.user.name != $scope.originalStore.user.name || $scope.store.user.username != $scope.originalStore.user.username || $scope.store.user.phone != $scope.originalStore.user.phone || $scope.store.user.email != $scope.originalStore.user.email){
				return true;
			} else {
				return false;
			}
		}
	};

	$scope.isPhoneValid = function(string){
		if($scope.store === undefined){
			return false;
		}
		if(string == "store"){
			if(ValidationService.phoneValidation($scope.store.phone) == null){			
				return false;
			}
			return true;
		} 
		if(string == "user"){
			if(ValidationService.phoneValidation($scope.store.user.phone) == null){
				return false;
			}		
			return true;
		}
		return false;
	}

});