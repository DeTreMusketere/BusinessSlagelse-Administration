angular.module('app').service('SessionService', function($cookieStore){
    var user;
    var active_sale;

    this.setUserAuthenticated = function(userToAuthenticate){
        user = userToAuthenticate;
        if(user) {
            $cookieStore.put(1, userToAuthenticate);
        } else {
            $cookieStore.remove(1);
        };
    };

    this.reSetUserAuthenticated = function(userToAuthenticate) {
        this.setUserAuthenticated(null);
        this.setUserAuthenticated(userToAuthenticate);
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

    this.getActiveSale = function() {
        return active_sale;
    };

    this.setActiveSale = function(new_active_sale) {
        active_sale = new_active_sale;
    };
});