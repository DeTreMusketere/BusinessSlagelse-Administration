angular.module('app').controller('MinProfilController', function($scope, SessionService, UserService, ValidationService) {
	var l = Ladda.create( document.getElementById('saveButton') );
	
	$scope.submitted = false;
	$scope.load = function() {
		$scope.user = SessionService.getUser();
		$scope.originalUser = angular.copy(SessionService.getUser());
	}

	$scope.load();

	$scope.save = function() {
		l.start();
		if($scope.profileForm.$valid) {
			if($scope.isPhoneValid()){
				$scope.user.phone = ValidationService.phoneValidation($scope.user.phone);
				UserService.save($scope.user, 
					function() {
						$scope.originalUser = angular.copy($scope.user);
						$.simplyToast('Ændringerne blev gemt', 'success');
						$scope.submitted = false;
						l.stop();
					},
					function() {
						$.simplyToast('Ændringerne blev ikke gemt', 'danger');
						$scope.submitted = true;
						l.stop();
					})
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