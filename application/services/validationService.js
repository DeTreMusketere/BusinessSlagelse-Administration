angular.module('app').service("ValidationService", function(){

	this.phoneValidation = function(string){
		if(string == undefined){
			return null;
		}
		var numbersCheck = new RegExp("[^0-9]");
		if(string.length == 8){
			if(numbersCheck.test(string)){
				return null;
			} else {
				return "+45" + string;
			}
		} else if (string.length == 11){
			if(string.substr(0, 3) == "+45"){						
				if(numbersCheck.test(string.substr(3))){
					return null;
				} else {
					return string;
				}
			}
		} else if (string.length == 12){
			if(numbersCheck.test(string)){
				return null;
			} else {
				if(string.substr(0, 4) == 4500){
					return "+45" + string.substr(4);
				}
			}
		} 
			return null;		
	};
});