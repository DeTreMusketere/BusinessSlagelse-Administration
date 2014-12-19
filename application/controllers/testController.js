angular.module('app').controller('TestController', function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover()
});