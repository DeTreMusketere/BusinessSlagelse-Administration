angular.module('app').controller("RedigerTagController", function($scope, $state, $cookieStore, TagService){
	var l = Ladda.create( document.getElementById('saveButton') );
	var active_tag;

	$scope.load = function(){	
		var active_tag = $cookieStore.get('active_tag_cookie');
    	$cookieStore.remove('active_tag_cookie');		
		TagService.get(active_tag.id_tag, function(response){
			$scope.tag = response;
			$scope.originalTag = angular.copy(response);
		});
	};

	$scope.load();

	$scope.save = function(){
		l.start();
		$titelCheck = document.getElementById('inputName').value;
		$descriptionCheck = document.getElementById('inputBeskrivelse').value;
		if($scope.tag && $titelCheck != "" && $descriptionCheck != "") {
			TagService.save($scope.tag, function(response){
				$.simplyToast('Dine ændringer er gemt', 'success');	
				$state.go('tags_oversigt');
			});
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt', 'danger');
			l.stop();
		};
	}

});