angular.module('app').run(function($rootScope, SessionService, $state) {
	$rootScope.$on("$locationChangeStart", function(event, next, current) {
		for(var i in window.routes) {
			if(next.indexOf(i) != -1) {
				if(window.routes[i].requireLogin && !SessionService.getAuthenticated()) {
					event.preventDefault();
					$state.go('login');
				} else if(window.routes[i].requireAdmin && !SessionService.getIsAdmin()) {
					event.preventDefault();
					$state.go('error-admin');
				} else if(window.routes[i].requireNotAdmin && SessionService.getIsAdmin()) {
					event.preventDefault();
					$state.go('error-notadmin');
				};
			};
		};
	});
});