angular.module('app').service("SaleService", function(SQLService, SessionService) {
	var sales;

	this.create = function(sale, success, fail){
		sale.id_sale = IdService.getNextStoreId();
		sale_store_id = SessionService.getUser().store_id;

		// Create sale
		$table = "sale";
		$columns = ["id_sale", "name", "price", "description", "start", "end", "publish", "store_id"];
		$values = [sale.id_sale, "'" + sale.name + "'", "'" + sale.price + "'", "'" + sale.description + "'", "'" + sale.start + "'", "'" + sale.end + "'",  "'" + sale.publish + "'", "" + sale_store_id + ""];
		SQLService.insert($table, $columns, $values).success(function(response) {
			if(response == true) {
				success();
			} else {
				fail();
			};
		});
	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.get = function() {

	};

	this.getAll = function(callback) {
		SQLService.selectAll("sale").success(function(response) {
			callback(response);
		});
	};
});