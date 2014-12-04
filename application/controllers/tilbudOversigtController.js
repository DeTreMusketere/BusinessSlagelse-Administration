angular.module('app').controller('TilbudOversigtController', function($scope, SaleService) {
	$scope.sales = [];

	$scope.load = function() {
		SaleService.getAll(function(response) {
			$scope.sales = response;
		});
	};

	$scope.load();
});