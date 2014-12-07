angular.module('app').controller('OpretTilbudController', function($scope, SaleService, $state, TagService) {
	$scope.createButton = Ladda.create( document.getElementById('buttonCreate') );
	
	$scope.availableTags = [];
	$scope.selectedTags = [];
	$scope.tempSelectIndex = 0;

	$scope.load = function() {
		TagService.getAll(function(response) {
			$scope.availableTags = response;
			$scope.availableTags.sort(); //Sorting looks nice
		});
	};

	$scope.load();

	$scope.moveSelectedTag = function() {
		//Get index first
		$scope.tempSelectIndex = document.getElementById("AvailableTagsID").selectedIndex;
		//Add selected element to array
		$scope.selectedTags.push($scope.availableTags[$scope.tempSelectIndex]);
		//Delete selected element + sorting
		delete $scope.availableTags[$scope.tempSelectIndex];
		$scope.availableTags.reverse();
		$scope.availableTags.pop();
		$scope.availableTags.sort();
		$scope.selectedTags.sort();
	}

	$scope.removeSelectedTag = function() {
		//Get index first
		$scope.tempSelectIndex = document.getElementById("SelectedTagsID").selectedIndex;
		//Add selected element to array
		$scope.availableTags.push($scope.selectedTags[$scope.tempSelectIndex]);
		//Delete selected element + sorting
		delete $scope.selectedTags[$scope.tempSelectIndex];
		$scope.selectedTags.reverse();
		$scope.selectedTags.pop();
		$scope.selectedTags.sort();
		$scope.availableTags.sort();
	}

	$scope.create = function() {
		if($scope.sale) {
			$scope.createButton.start();
			SaleService.create($scope.sale, $scope.selectedTags,
				function() {
					$.simplyToast('Success', 'success');
					$state.go('tilbud_oversigt');
				},
				function() {
					$.simplyToast('Der skete en uventet fejl da salget skulle oprettes', 'danger');
					$scope.createButton.stop();
					
				});
		} else {
			$.simplyToast('Nogle felter blev ikke udfyldt korrekt', 'danger');
			$scope.createButton.stop();

			$scope.createForm.saleName.$dirty = true;
		};
	};
});