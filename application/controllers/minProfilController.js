angular.module('app').controller('MinProfilController', function($scope, SessionService, UserStoreService) {
	$scope.user = SessionService.getUser();

	$scope.save = function() {
		if($scope.profileForm.$valid) {

			$.simplyToast('The form is valid', 'success');
		} else {
			$.simplyToast('The form is not valid', 'danger');
		};
	};
});