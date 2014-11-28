window.routes =
{
    "forside": {
    	url: '/forside',
        templateUrl: 'pages/forside.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: false
    },
    "tilbud_oversigt": {
        url: '/tilbud_oversigt',
        templateUrl: 'pages/tilbudoversigt.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: true
    },
    "tilbud_opret": {
        url: '/tilbud_opret',
        templateUrl: 'pages/oprettilbud.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: true
    },
    "butikker_oversigt": {
        url: '/butikker_oversigt',
        templateUrl: 'pages/butikoversigt.html', 
        requireLogin: true,
        requireAdmin: true,
        requireNotAdmin: false
    },
    "butikker_opret": {
        url: '/butikker_opret',
        templateUrl: 'pages/opretbutik.html',
        controller: 'OpretButikController',
        requireLogin: true,
        requireAdmin: true,
        requireNotAdmin: false
    },
    "tags_oversigt": {
        url: '/tags_oversigt',
        templateUrl: 'pages/tagoversigt.html', 
        requireLogin: true,
        requireAdmin: true,
        requireNotAdmin: false
    },
    "tags_opret": {
        url: '/tags_opret',
        templateUrl: 'pages/oprettag.html', 
        requireLogin: true,
        requireAdmin: true,
        requireNotAdmin: false
    },
    "minbutik": {
        url: '/minbutik',
        templateUrl: 'pages/minbutik.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: true
    },
    "minprofil": {
        url: '/minprofil',
        templateUrl: 'pages/minprofil.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: false
    },
    "hjelp": {
        url: '/hjelp',
        templateUrl: 'pages/hjelp.html', 
        requireLogin: true,
        requireAdmin: false,
        requireNotAdmin: false
    },
    "login": {
        url: '/login',
        templateUrl: 'pages/login.html',
        controller: 'LoginController',
        requireLogin: false,
        requireAdmin: false,
        requireNotAdmin: false
    },
    "error-admin": {
        url: '/error-admin',
        templateUrl: 'pages/error-admin.html',
        requireLogin: false,
        requireAdmin: false,
        requireNotAdmin: false
    },
    "error-notadmin": {
        url: '/error-notadmin',
        templateUrl: 'pages/error-notadmin.html',
        requireLogin: false,
        requireAdmin: false,
        requireNotAdmin: false
    }
};