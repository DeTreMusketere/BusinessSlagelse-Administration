angular.module('app').service("TagService", function(SQLService, IdService) {

	this.create = function(tag, success, fail){
		tag.id_tag = IdService.getNextTagId();

		$table = "tag";
		$columns = ["id_tag", "name", "description"];
		$values = [tag.id_tag, "'" + tag.name + "'", "'" + tag.description + "'"];

		SQLService.insert($table, $columns, $values).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			}
		});
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