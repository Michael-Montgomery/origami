var app = angular.module('origami', [
    'ngRoute',
    'origami.welcome',
    'origami.work',
    'origami.contact'
]);

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

app.controller('mainController', function($scope) {

    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('.header').css({
                'background-color': 'white',
                'border-bottom': '2px solid #0F9FF3'
            });
            $('.header nav a').css('color', '#377ADA');

        } else {
            $('.header').css({
                'background-color': 'transparent',
                'opacity': '1',
                'border-bottom': 'none'
            });
            $('.header nav a').css('color', 'white')
        }
    });




    $scope.openResponsive = function() {
        if($('.responsive-menu').height() == 0) {
            $('.responsive-menu').css('height', '90vh');
        } else {
            $('.responsive-menu').css('height', '0')
        }
    }
    $scope.closeResponsive = function() {
        $('.responsive-menu').css('height', '0')
    }
})