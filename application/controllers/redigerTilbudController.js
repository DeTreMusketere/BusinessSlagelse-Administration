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
		$titelCheck = document.getElementById('inputTitel').value;
		$descriptionCheck = document.getElementById('inputBeskrivelse').value;
		$priceCheck = document.getElementById('inputPris').value;
		$startCheck = document.getElementById('inputStartDato').value;
		$endCheck = document.getElementById('inputSlutDato').value;
		$publishCheck = document.getElementById('inputPublishDato').value;
		if($scope.sale && $publishCheck != "" && $titelCheck != "" && $descriptionCheck != "" && $priceCheck != "" && $startCheck != "" && $endCheck != "") {
			SaleService.save($scope.sale, function(response){
				$.simplyToast('Dine ændringer er gemt', 'success');	
				$state.go('tilbud_oversigt');				
			});
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt', 'danger');
		};
	}

});