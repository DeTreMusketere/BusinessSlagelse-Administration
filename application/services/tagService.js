angular.module('app').service("TagService", function(SQLService, IdService) {

    var active_tag;

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

	this.delete = function(tag, success, fail) {
		$table = "tag";
		$table_two = "sale_tag";
		$idColumn = "id_tag";
		$id = tag.id_tag;
		SQLService.remove($table, $idColumn, $id).
		success(function(response) {
			if(response == true) {
				SQLService.remove($table_two, $idColumn, $id).
					success(function(second_response) {
						if(second_response == true) {
							success();
						} else {
							success();
						};
					});
			} else {
				fail();
			};
		});
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


    this.getActiveTag = function() {
    	var active_tag = $cookieStore.get('active_tag_cookie');
    	$cookieStore.remove('active_tag_cookie');
        return active_tag;
    };

    this.setActiveTag = function(new_active_tag) {
        $cookieStore.put('active_tag_cookie', new_active_tag);
    };
});