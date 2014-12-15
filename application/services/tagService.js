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

	this.save = function(tag, success, fail) {
		$table = "tag";
		$columns = ["id_tag", "name", "description"];
		$values = [tag.id_tag, "'" + tag.name + "'", "'" + tag.description + "'"];
		$whereColumns = ["id_tag"];
		$whereData = [tag.id_tag];

		SQLService.update($table, $columns, $values, $whereColumns, $whereData).
			success(function(response) {
				if(response == true) {
					success();
				} else {
					fail();
				};
			});
	};

	this.delete = function() {

	};

	this.get = function(id_tag, callback) {
		SQLService.select("tag", ["id_tag", "name", "description"], ["id_tag"], [id_tag]).success(function(response) {
			callback(response[0]);
			console.log(response[0]);			
		});
	};

	this.getAll = function(callback) {
		SQLService.selectAll("tag").success(function(response) {
			callback(response);
		});
	};
});