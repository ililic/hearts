var hearts = angular.module('hearts', ['ngRoute']);

hearts.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
    	templateUrl: 'static/otherwise.html'
    }).when('/clubs', {
        templateUrl: 'static/clubs.html'
    }).when('/diamonds', {
        templateUrl: 'static/diamonds.html'
    }).when('/spades', {
        templateUrl: 'static/spades.html'
    }).when('/hearts', {
        templateUrl: 'static/hearts.html'
    }).otherwise({ redirectTo: '/' });
}]);
