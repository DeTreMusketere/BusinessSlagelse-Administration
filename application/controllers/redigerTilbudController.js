angular.module('app').controller("RedigerTilbudController", function($scope, $state, SaleService, SessionService){

	$scope.load = function(){		
		SaleService.get(SessionService.getActiveSale().id_sale, function(response){
			$scope.sale = response;
			$scope.originalSale = angular.copy(response);
			document.getElementById('inputTitel').value = $scope.sale.name;
			document.getElementById('inputBeskrivelse').value = $scope.sale.description;
			document.getElementById('inputPris').value = $scope.sale.price;
			document.getElementById('inputStartDato').value = $scope.sale.start;
			document.getElementById('inputSlutDato').value = $scope.sale.end;
			document.getElementById('inputPublishDato').value = $scope.sale.publish;
		});
	};

	$scope.load();

	$scope.save = function(){
		SaleService.save($scope.sale, function(response){
			$.simplyToast('Dine ændringer er gemt', 'success');	
			$state.go('tilbud_oversigt');				
		});
	}

});