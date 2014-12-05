angular.module('app').controller('TilbudOversigtController', function($scope, SaleService) {
	$scope.sales = [];

	$scope.load = function() {
		SaleService.getAll(function(response) {
			$scope.sales = response;
		});
	};

	$scope.load();

	// DeleteSale
	$scope.saleToDelete;

	$scope.setSaleToDelete = function(sale) {
		$scope.saleToDelete = sale;
	};

	$scope.delete = function() {
		SaleService.delete($scope.saleToDelete,
			function() {
				$('#deleteModal').modal('hide');
				$.simplyToast('Tilbudet blev slettet', 'success');
				$scope.load();
			},
			function() {
				$.simplyToast('Tilbudet kunne ikke slettes', 'danger');
			});
	};
});