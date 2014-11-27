angular.module('app').service("SaleService", function(SQLService) {
	var sales;

	this.create = function(){

	};

	this.save = function() {

	};

	this.delete = function() {

	};

	this.get = function() {

	};

	this.getAll = function() {
		return sales;
	};

	this.load = function(success, empty) {
		SQLService.selectAll("sale").success(function(response) {
			sales = response;
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