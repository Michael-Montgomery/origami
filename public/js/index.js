var app = angular.module('origami', [
    'ngRoute',
    'origami.welcome',
    'origami.work',
    'origami.contact'
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
    });

    $routeProvider.when('/contact', {
        templateUrl: 'public/views/templates/contact.tpl.html',
        controller: 'contactController'
    })
});