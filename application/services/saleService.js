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
				//Add tags to sale
				for($tagCounter = 0; $tagCounter < tagArray.length; $tagCounter + 1) {
					$temp_tag_id_variable = tagArray[$tagCounter].tag_id; //Get seperate variable for tag id
					$second_table = "sale_tag"; // Make table
					$second_columns = ["id_sale", "tag_id"]; // Columns
					$second_values = [sale.id_sale,  $temp_tag_id_variable]; //Values
					//Add tag
					SQLService.insert($second_table, $second_columns, $second_values).success(function(second_response) {
						if(second_response != true) {
							$failed_loop = true; //Ensure fail if the loop fails
						}
					});
				}
				//,Only success state
				if(!failed_loop) {
					success();
				} else {
					fail(); // Loop fail
				}
			} else {
				fail(); // Main fail
			};
			console.log(response);
		});
	};

	this.save = function() {

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

	this.get = function() {

	};

	this.getAll = function(callback) {
		SQLService.selectAll("sale").success(function(response) {
			callback(response);
		});
	};
});