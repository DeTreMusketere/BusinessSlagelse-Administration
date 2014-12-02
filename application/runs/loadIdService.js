angular.module('app').run(function(IdService, UserStoreService, TagService, SaleService) {

	UserStoreService.getAll(
		function(response) {
			IdService.loadUsers(response);
		}, 
		function(response) {
			IdService.loadStores(response);
		});

	TagService.getAll(
		function(response) {
			IdService.loadTags(response);
		});

	SaleService.getAll(
		function(response) {
			IdService.loadSales(response);
		});

});