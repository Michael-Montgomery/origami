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
            document.getElementById('logo').src = 'http://i.imgur.com/Fvy5W9u.png'
        } else {
            $('.header').css({
                'background-color': 'transparent',
                'opacity': '1',
                'border-bottom': 'none'
            });
            $('.header nav a').css('color', 'white');
            document.getElementById('logo').src = 'http://i.imgur.com/dcMc0rP.png';
        }
    });




    $scope.openResponsive = function() {
        if($('.responsive-menu').height() == 0) {
            $('.responsive-menu').css({
                'height': '90vh',
                'border-top': '2px solid white'
            });
        } else {
            $('.responsive-menu').css({
                'height': '0',
                'border-top': 'none'
            })
        }
    };
    $scope.closeResponsive = function() {
        $('.responsive-menu').css('height', '0')
    }
})