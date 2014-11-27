angular.module('app').service("TagService", function(SQLService) {
	var tags;

	this.create = function(){

	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.get = function() {

	};

	this.getAll = function() {
		return tags;
	};

	this.load = function(success, empty) {
		SQLService.selectAll("tag").success(function(response) {
			tags = response;
			if(success && empty) {
				if(response.length > 0) {
					success();
				} else {
					empty();
				};
			};
		});
	};
});