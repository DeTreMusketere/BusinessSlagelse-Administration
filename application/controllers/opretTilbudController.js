angular.module('app').controller('OpretTilbudController', function($scope, SaleService, $state) {
	// $scope.createButton = Ladda.create( document.getElementById('buttonCreate') );
	
	$scope.create = function() {
		if($scope.sale) {
			$scope.createButton.start();
			SaleService.create($scope.sale,
				function() {
					$.simplyToast('Success', 'success');
					$state.go('butikker_oversigt');
				},
				function() {
					$.simplyToast('Der skete en uventet fejl da salget skulle oprettes', 'danger');
					$scope.createButton.stop();
					
				});
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt korrekt', 'danger');
			$scope.createButton.stop();

			$scope.createForm.saleName.$dirty = true;
		};
	};
});