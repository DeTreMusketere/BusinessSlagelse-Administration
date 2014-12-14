angular.module('app').controller("TagOversigtController", function($scope, TagService){
	
	$scope.tags = [];

	$scope.load = function(){
		TagService.getAll(function(response){
			$scope.tags = response;			
		});
	};

	$scope.load();
});