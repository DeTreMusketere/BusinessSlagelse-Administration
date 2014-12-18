angular.module('app').controller("RedigerTagController", function($scope, $state, TagService){

	$scope.load = function(){		
		TagService.get(TagService.getActiveTag().id_tag, function(response){
			$scope.tag = response;
			$scope.originalTag = angular.copy(response);
		});
	};

	$scope.load();

	$scope.save = function(){
		$titelCheck = document.getElementById('inputName').value;
		$descriptionCheck = document.getElementById('inputBeskrivelse').value;
		if($scope.tag && $titelCheck != "" && $descriptionCheck != "") {
			TagService.save($scope.tag, function(response){
				$.simplyToast('Dine ændringer er gemt', 'success');	
				$state.go('tags_oversigt');				
			});
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt', 'danger');
		};
	}

});