angular.module('app').controller("MinButikController", function($scope, StoreService, SessionService){
$scope.store = [];
	
	$scope.load = function(){
		console.log("Hai");
		StoreService.get(SessionService.getUser().store_id, function(response){
			$scope.store = response;
			
		});

	};

	$scope.load();

	$scope.save = function(){
		console.log($scope.store.name);
	}
});