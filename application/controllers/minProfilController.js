angular.module('app').controller('MinProfilController', function($scope, SessionService, UserService, ValidationService) {
	
	$scope.submitted = false;
	$scope.load = function() {
		$scope.user = SessionService.getUser();
		$scope.originalUser = angular.copy(SessionService.getUser());
	}

	$scope.load();

	$scope.save = function() {
		if($scope.profileForm.$valid && $scope.isPhoneValid()) {
			UserService.save($scope.user, 
				function() {
					$scope.originalUser = angular.copy($scope.user);
					$.simplyToast('Ændringerne blev gemt', 'success');
					$scope.submitted = false;
				},
				function() {
					$.simplyToast('Ændringerne blev ikke gemt', 'danger');
					$scope.submitted = true;
				})
			
		} else {
			$.simplyToast('The form is not valid', 'danger');
			$scope.submitted = true;
		}
	}

	$scope.isChanged = function() {
		if($scope.user === undefined) {
			return false;
		} else {
			if($scope.user.name != $scope.originalUser.name || $scope.user.phone != $scope.originalUser.phone || $scope.user.email != $scope.originalUser.email) {
				return true;
			} else {
				return false;
			}
		}
	}

	$scope.isPhoneValid = function(){
		if($scope.user === undefined){
			return false;
		}
		if(ValidationService.phoneValidation($scope.user.phone) == null){			
			return false;
		}		
		return true;
	}

});