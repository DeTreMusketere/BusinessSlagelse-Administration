angular.module('app').controller('LoginController', function($scope, UserStoreService, SessionService, $state) {
	$scope.login = function() {
		if($scope.user) {
			$scope.loginForm.submitted = true;
			UserStoreService.login($scope.user, 
			function(response) {
				SessionService.setUserAuthenticated(response[0]);
				$.simplyToast('Velkommen tilbage ' + SessionService.getUser().name, 'success');
				$state.go('forside');
			}, 
			function() {
				$.simplyToast('Brugernavn eller adgangskode er forkert', 'danger');
				$scope.user.password = "";
			});
		} else {
			$scope.loginForm.submitted = true;
			$.simplyToast('Brugernavn og adgangskode skal udfyldes', 'danger');
		};
	};
});