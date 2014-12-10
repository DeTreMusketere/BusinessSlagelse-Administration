angular.module('app').service('SQLService', ['$http', function($http) {
	var site = "http://localhost:8888/BusinessSlagelse-Administration/";

	this.insert = function($table, $columns, $values) {
		var page = "php/insert.php";

		$data = {
			'table' : $table,
			'columns' : $columns,
			'values' : $values
		};

		return $http.post(site + page, $data);
	};
	this.update = function($table, $columns, $values, $whereColumns, $whereData) {
		var page = "php/update.php";

		$data = {
			'table' : $table,
			'columns' : $columns,
			'values' : $values,
			'whereColumns' : $whereColumns,
			'whereData' : $whereData
		};

		return $http.post(site + page, $data);
	};
	this.remove = function($table, $idColumn, $id) {
		var page = "php/delete.php";

		$data = {
			'table' : $table,
			'idColumn' : $idColumn,
			'id' : $id
		};

		return $http.post(site + page, $data);
	};
	this.select = function($table, $columns, $whereColumns, $whereData) {
		var page = "php/select.php";

		$data = {
			'table' : $table,
			'columns' : $columns,
			'whereColumns' : $whereColumns,
			'whereData' : $whereData
		};

		return $http.post(site + page, $data);
	};
	this.selectAll = function($table) {
		var page = "php/selectAll.php";

		return $http.post(site + page, $table);
	};
}]);