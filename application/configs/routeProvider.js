angular
	.module('app')
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/forside');

		for(var state in window.routes) {
			$stateProvider.state(state, window.routes[state]);
		};
	}]);