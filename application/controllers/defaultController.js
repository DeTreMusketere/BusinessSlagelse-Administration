angular.module('app').controller('DefaultController', function($scope, $state, SessionService) {

	$scope.date = new Date();

	$scope.logout = function() {
		SessionService.setUserAuthenticated(null);
		$.simplyToast('Du blev logget ud', 'info');
		$state.go('login');
	};

	$scope.isLoggedIn = function() {
		return SessionService.getAuthenticated();
	};

	$scope.isOnState = function(state) {
		return $state.is(state);
	};

	$scope.getLoggedInUser = function() {
		return SessionService.getUser();
	};

	$scope.getIsAdmin = function() {
		return SessionService.getIsAdmin();
	};

});