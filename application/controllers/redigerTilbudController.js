angular.module('app').controller("RedigerTilbudController", function($scope, $state, $cookieStore, SaleService){
	$scope.saveButton = Ladda.create( document.getElementById('saveButton') );
	var active_sale;

	$scope.load = function(){	
		var active_sale = $cookieStore.get('active_sale_cookie');
    	$cookieStore.remove('active_sale_cookie');	
		SaleService.get(active_sale.id_sale, function(response){
			$scope.sale = response;
			$scope.originalSale = angular.copy(response);
		});
	};

	$scope.load();

	$scope.save = function(){
		$scope.saveButton.start();
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
			$scope.saveButton.stop();
			$.simplyToast('Nogle felter blev ikke udfyldt', 'danger');
		};
	}

});