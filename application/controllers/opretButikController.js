angular.module('app').controller('OpretButikController', function($scope, UserStoreService, $state) {
	$scope.createButton = Ladda.create( document.getElementById('buttonCreate') );
	
	$scope.create = function() {
		if($scope.store && $scope.user) {
			$scope.createButton.start();
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
			console.error("Some fields where not filled out, or some where filled incorrectly");
			$.simplyToast('Nogle felter blev ikke udfyldt korrekt', 'danger');
			$scope.createButton.stop();

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
});