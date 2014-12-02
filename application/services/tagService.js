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

	this.getAll = function(callback) {
		SQLService.selectAll("tag").success(function(response) {
			callback(response);
		});
	};
});