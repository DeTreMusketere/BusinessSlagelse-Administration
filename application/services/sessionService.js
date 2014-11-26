angular.module('app').service('SessionService', function($cookieStore){
    var user;

    this.setUserAuthenticated = function(userToAuthenticate){
        user = userToAuthenticate;
        if(user) {
            $cookieStore.put(1, userToAuthenticate);
        } else {
            $cookieStore.remove(1);
        };
    };

    this.getAuthenticated = function(){
        if(user) {
            return true;
        } else {
            return false;
        };
    };

    this.getIsAdmin = function() {
        if(user) {
            if(user.administrator == 0) {
                return false;
            } else {
                return true;
            };
        } else {
            return false;
        };
    };

    this.getUser = function() {
    	return user;
    };
});