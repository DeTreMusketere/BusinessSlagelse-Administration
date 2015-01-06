angular.module('app').controller('OpretButikController', function($scope, UserStoreService, $state, ValidationService) {
	$scope.createButton = Ladda.create( document.getElementById('buttonCreate') );
	
	$scope.submitted = false;
	$scope.create = function() {
		if($scope.createForm.$valid) {
			if($scope.isPhoneValid('store') && $scope.isPhoneValid('user')){
				$scope.createButton.start();
				$scope.store.phone = ValidationService.phoneValidation($scope.store.phone);	
				$scope.user.phone = ValidationService.phoneValidation($scope.user.phone);
				UserStoreService.create($scope.user, $scope.store,
					function() {
						$.simplyToast('Success', 'success');
						$state.go('butikker_oversigt');
					},
					function(code) {
						if(code == 1) {
							$.simplyToast('Der skete en uventet fejl da butikken skulle oprettes', 'danger');
							$scope.createButton.stop();
						} else if(code == 2) {
							$.simplyToast('Der skete en uventet fejl da brugeren skulle oprettes', 'danger');
							$scope.createButton.stop();
						};
						
					});
			} else {
				$.simplyToast('Telefonnummeret er ugyldigt', 'danger');
				$scope.submitted = true;
				$scope.createButton.stop();
			};
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt korrekt', 'danger');
			$scope.createButton.stop();

			$scope.submitted = true;
			$scope.createForm.storeName.$dirty = true;
			$scope.createForm.storeDescription.$dirty = true;
			$scope.createForm.storeAddress.$dirty = true;
			$scope.createForm.storePhone.$dirty = true;
			$scope.createForm.userName.$dirty = true;
			$scope.createForm.userUsername.$dirty = true;
			$scope.createForm.userPassword.$dirty = true;
			$scope.createForm.userPasswordAgain.$dirty = true;
			$scope.createForm.userPhone.$dirty = true;
			$scope.createForm.userEmail.$dirty = true;
		};
	};

	$scope.isPhoneValid = function(string){
		if($scope.store === undefined || $scope.user === undefined){			
			return false;
		}
		if(string === "store"){
			if(ValidationService.phoneValidation($scope.store.phone) == null){			
				return false;
			}
			return true;
		} 
		if(string === "user"){
			if(ValidationService.phoneValidation($scope.user.phone) == null){
				return false;
			}		
			return true;
		}		
		return false;
	}
});