angular.module('app').service("TagService", function(SQLService, IdService) {
	var tags;

	this.create = function(tag, success, fail){
		tag.id_tag = IdService.getNextTagId();
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