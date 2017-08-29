var app = angular.module('origami', [
    'ngRoute',
    'origami.welcome',
    'origami.work'
])

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        reditectTo: '/welcome'
    });

    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    });

    $routeProvider.when('/work', {
        templateUrl: 'public/views/templates/work.tpl.html',
        controller: 'workController'
    })
})