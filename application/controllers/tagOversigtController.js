angular.module('app').controller("TagOversigtController", function($scope, TagService, SessionService){
	
	$scope.tags = [];

	$scope.load = function(){
		TagService.getAll(function(response){
			$scope.tags = response;			
		});
	};

	$scope.load();
	$('#showDesc').popover();


	$scope.gotoEditTag = function(tag) {
		SessionService.setActiveTag(tag);
	};
});