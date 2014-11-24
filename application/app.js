angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('forside', {
				url: '/',
				templateUrl: 'pages/forside.html'
			})
			.state('tilbud_oversigt', {
				url: '/tilbud_oversigt',
				templateUrl: 'pages/tilbudoversigt.html'
			})
			.state('tilbud_opret', {
				url: '/tilbud_opret',
				templateUrl: 'pages/oprettilbud.html'
			})
			.state('butikker_oversigt', {
				url: '/butikker_oversigt',
				templateUrl: 'pages/butikoversigt.html'
			})
			.state('butikker_opret', {
				url: '/butikker_opret',
				templateUrl: 'pages/opretbutik.html'
			})
			.state('tags_oversigt', {
				url: '/tags_oversigt',
				templateUrl: 'pages/tagoversigt.html'
			})
			.state('tags_opret', {
				url: '/tags_opret',
				templateUrl: 'pages/oprettag.html'
			})
			.state('minbutik', {
				url: '/minbutik',
				templateUrl: 'pages/minbutik.html'
			})
			.state('minprofil', {
				url: '/minprofil',
				templateUrl: 'pages/minprofil.html'
			})
			.state('hjelp', {
				url: '/hjelp',
				templateUrl: 'pages/hjelp.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'pages/login.html'
			})
	}]);