angular.module('app').run(function(IdService, UserStoreService, SaleService, TagService) {

	// Load Users and Stores
	UserStoreService.load(
		function() {
			$users = UserStoreService.getAll().users;
			IdService.loadUsers($users);
		}, 
		function() {
			console.warn("Users are empty, can that be right?");
		},
		function() {
			$stores = UerStoreService.getAll().stores;
			IdService.loadStores($stores);
		},
		function() {
			console.warn("Stores are empty, can that be right?");
		});

	// Load Sales
	SaleService.load(
		function() {
			$sales = SaleService.getAll();
			IdService.loadSales($sales);
		},
		function() {
			console.warn("Sales are empty, can that be right?");
		});

	// Load tags
	TagService.load(
		function() {
			$tags = TagService.getAll();
			IdService.loadTags($tags);
		},
		function() {
			console.warn("Tags are empty, can that be right?");
		});
});