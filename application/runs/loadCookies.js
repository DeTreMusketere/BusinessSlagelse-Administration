angular.module('app').run(function($rootScope, $cookieStore, SessionService) {
	$.simplyToast('This website uses cookies', 'info');
	
    var user = $cookieStore.get(1);
    if(user) {
		SessionService.setUserAuthenticated(user);
    }
});