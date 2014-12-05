angular.module('app').controller('TilbudOversigtController', function($scope, SaleService) {
	var l = Ladda.create( document.getElementById('buttonDelete') );

	$scope.sales = [];

	$scope.load = function() {
		SaleService.getAll(function(response) {
			$scope.sales = response;
		});
	};

	$scope.load();

	// DeleteSale
	$scope.saleToDelete;
	$scope.deleting = false;

	$scope.setSaleToDelete = function(sale) {
		$scope.saleToDelete = sale;
	};

	$scope.delete = function() {
		l.start();
		$scope.deleting = true;
		SaleService.delete($scope.saleToDelete,
			function() {
				$('#deleteModal').modal('hide');
				$.simplyToast('Tilbudet blev slettet', 'success');
				$scope.load();
				l.stop();
				$scope.deleting = false;
			},
			function() {
				$.simplyToast('Tilbudet kunne ikke slettes', 'danger');
				l.stop();
				$scope.deleting = false;
			});
	};
});