angular
	.module('app')
		.controller('StateController', function($state) {
			this.isState = function(state) {
				return $state.is(state);
			};
			this.getState = function() {
				return $state;
			};
		});