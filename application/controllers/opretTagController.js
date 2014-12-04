angular.module('app').controller("OpretTagController", function($scope, TagService){
	$scope.create = function(){
		if($scope.createTag.$valid){
			TagService.create($scope.tag, function() {
				$.simplyToast($scope.tag.name + ' blev oprettet', 'success');
				$scope.tag.name = "";
				$scope.tag.description = "";
			}, function() {
				$.simplyToast('Der skete en uventet fejl under oprettelsen af tagget', 'danger');
			});
		} else {
			$.simplyToast('Alle felter skal udfyldes', 'danger');
			$scope.createTag.submitted = true;
			
		}
	};
});