angular.module('app').controller("OpretTagController", function($scope){
	$scope.create = function(){
		if($scope.createTag.$valid){
			console.log("heeej");
		} else {
			console.log("hfsjbnfjksbgds");
			$scope.createTag.submitted = true;
		}
	};
});