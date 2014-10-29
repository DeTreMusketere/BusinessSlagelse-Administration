var app = angular.module('app', []);

app.controller('PageController', function() {
	this.page = 1;
	this.setPage = function(page) {
		this.page = page;
	};
	this.isSet = function(page) {
		return this.page === page;
	};
});

app.directive("siteNavigation", function() {
    return {
      restrict: 'E',
      templateUrl: "navigation.html"
    };
});

app.directive("siteContent", function() {
    return {
      restrict: 'E',
      templateUrl: "content.html"
    };
});