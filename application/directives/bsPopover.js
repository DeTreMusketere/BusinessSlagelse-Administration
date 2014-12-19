angular.module('app').directive('bsPopover', function() {
	return function(scope, element, attrs) {
		element.find("[data-toggle=popover]").popover({ html: 'true'});
	};
});