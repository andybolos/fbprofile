var app = angular.module('fb-view', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'homeCtrl'
        })

});
