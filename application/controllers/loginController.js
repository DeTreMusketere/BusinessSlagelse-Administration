angular.module('app').controller('LoginController', function($scope, authService, SessionService, $state) {
	$scope.login = function() {
		if($scope.user) {
			$scope.loginForm.submitted = true;
			authService.authenticate($scope.user, 
			function(response) {
				SessionService.setUserAuthenticated(response[0]);
				console.log("LoginController: User " + SessionService.getUser().name + " was authenticated successfully");
				$.simplyToast('Velkommen tilbage ' + SessionService.getUser().name, 'success');
				$state.go('forside');
			}, 
			function() {
				console.error("LoginController: User " + $scope.user.username + " could not be authenticated, check credentials...");
				$.simplyToast('Brugernavn eller adgangskode er forkert', 'danger');
				$scope.user.password = "";
			});
		} else {
			$scope.loginForm.submitted = true;
			console.error("LoginController: Username and password is needed");
			$.simplyToast('Brugernavn og adgangskode skal udfyldes', 'danger');
		};
	};
});