angular.module('app').controller("RedigerTagController", function($scope, $state, TagService, SessionService){

	$scope.load = function(){		
		TagService.get(SessionService.getActiveTag().id_tag, function(response){
			$scope.tag = response;
			$scope.originalTag = angular.copy(response);
			document.getElementById('inputName').value = $scope.tag.name;
			document.getElementById('inputBeskrivelse').value = $scope.tag.description;
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