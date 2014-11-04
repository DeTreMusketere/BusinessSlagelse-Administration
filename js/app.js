var app = angular.module('app', ['ngAnimate', 'oitozero.ngSweetAlert']);

app.controller('PageController', function() {
	this.page = 1;
	this.setPage = function(page) {
		this.page = page;
	};
	this.isSet = function(page) {
		return this.page === page;
	};
});

app.controller('AlertController', function(SweetAlert) {
    this.deleteWarning = function(title, message) {
        SweetAlert.swal({
            title: title,
            text: message,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Slet"
        },
        function(){ 
            SweetAlert.success("DONE!");
        });
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