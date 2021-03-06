angular.module('app').service("SaleService", function(SQLService, SessionService, IdService) {
	var sales;

	this.create = function(sale, tagArray, success, fail){
		sale.id_sale = IdService.getNextSaleId();
		sale_store_id = SessionService.getUser().store_id;

		// Create sale
		$table = "sale";
		$columns = ["id_sale", "name", "price", "description", "start", "end", "publish", "store_id"];
		$values = [sale.id_sale, "'" + sale.name + "'", sale.price, "'" + sale.description + "'", sale.start, sale.end,  sale.publish, sale_store_id];
		SQLService.insert($table, $columns, $values).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail(); // Main fail
			};
		});
	};

	this.save = function(sale, callback) {
		$table = "sale";
		$columns = ["id_sale", "name", "price", "description", "start", "end", "publish", "store_id"];
		$values = [sale.id_sale, "'" + sale.name + "'", sale.price, "'" + sale.description + "'", sale.start, sale.end,  sale.publish, sale.store_id];
		$whereColumn = ["id_sale"];
		$whereData = [sale.id_sale];

		SQLService.update($table, $columns, $values, $whereColumn, $whereData).success(function(response) {
			callback(response[0]);
		});
	};

	this.deleteTagConnections = function(sale, success, fail) {
		$table = "sale_tag"
		$idColumn = "sale_id";
		$id = sale.id_sale;
		SQLService.remove($table, $idColumn, $id).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.deleteByStore = function(store, success, fail) {
		$table = "sale";
		$idColumn = "store_id";
		$id = store.id_store;
		SQLService.remove($table, $idColumn, $id).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			}
		});
	};

	this.delete = function(sale, success, fail) {
		$table = "sale";
		$idColumn = "id_sale";
		$id = sale.id_sale;
		SQLService.remove($table, $idColumn, $id).
		success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.getByStore = function(store, callback) {
		$table = "sale";
		$columns = ["id_sale", "name", "price", "description", "start", "end", "publish", "store_id"];
		$whereColumns = ["store_id"];
		$whereData = [store.id_store];
		SQLService.select($table, $columns, $whereColumns, $whereData).success(function(response) {
			callback(response);
		});
	};

	this.get = function(id_sale, callback) {
		SQLService.select("sale", ["id_sale", "name", "price", "description", "start", "end", "publish", "store_id"], ["id_sale"], [id_sale]).success(function(response) {
			callback(response[0]);			
		});
	};

	this.getAll = function(callback) {
		SQLService.selectAll("sale").success(function(response) {
			callback(response);
		});
	};
});