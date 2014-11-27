angular.module('app').service('IdService', function() {
	var currentUserId = 0;
	var currentStoreId = 0;
	var currentSaleId = 0;
	var currentTagId = 0;

	this.loadUsers = function(users) {
		users.forEach(function(user) {
			if(user.id_user > currentUserId) {
				currentUserId = user.id_user;
			};
		});
		console.log("CurrentUserId: " + currentUserId);
	};

	this.loadStores = function(stores) {
		stores.forEach(function(store) {
			if(store.id_store > currentStoreId) {
				currentStoreId = store.id_store;
			};
		});
		console.log("CurrentStoreId: " + currentStoreId);
	};

	this.loadSales = function(sales) {
		sales.forEach(function(sale) {
			if(sale.id_sale > currentSaleId) {
				currentSaleId = sale.id_sale;
			};
		});
		console.log("CurrentSaleId: " + currentSaleId);
	};

	this.loadTags = function(tags) {
		tags.forEach(function(tag) {
			if(tag.id_tag > currentTagId) {
				currentTagId = tag.id_tag;
			};
		});
		console.log("CurrentTagId: " + currentTagId);
	};

	this.getCurrentUserId = function() {
		return currentUserId;
	};

	this.getCurrentStoreId = function() {
		return currentStoreId;
	};

	this.getCurrentSaleId = function() {
		return currentSaleId;
	};

	this.getCurrentTagId = function() {
		return currentTagId;
	};

	this.getNextUserId = function() {
		return ++currentUserId;
	};

	this.getNextStoreId = function() {
		return ++currentStoreId;
	};

	this.getNextSaleId = function() {
		return ++currentSaleId;
	};

	this.getNextTagId = function() {
		return ++currentTagId;
	};
});