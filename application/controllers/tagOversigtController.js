angular.module('app').controller("TagOversigtController", function($scope, TagService, SessionService){
	var l = Ladda.create( document.getElementById('buttonDelete') );

	$scope.tags = [];

	$scope.load = function(){
		TagService.getAll(function(response){
			$scope.tags = response;			
		});
	};

	$scope.load();
	$('#showDesc').popover();

	// Delete Tag
	$scope.tagToDelete;
	$scope.deleting = false;

	$scope.setTagToDelete = function(tag) {
		$scope.tagToDelete = tag;
	};

	$scope.delete = function() {
		l.start();
		$scope.deleting = true;
		TagService.delete($scope.tagToDelete,
			function() {
				$('#deleteModal').modal('hide');
				$.simplyToast('Tagget blev slettet', 'success');
				$scope.load();
				l.stop();
				$scope.deleting = false;
			},
			function() {
				$.simplyToast('Tagget kunne ikke slettes', 'danger');
				l.stop();
				$scope.deleting = false;
			});
	};



	$scope.gotoEditTag = function(tag) {
		SessionService.setActiveTag(tag);
	};
});