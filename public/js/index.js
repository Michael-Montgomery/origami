var app = angular.module('origami', [
    'ngRoute',
    'origami.welcome',
    'origami.work',
    'origami.contact',
    'origami.adminlogin'
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
    });

    $routeProvider.when('/admin', {
        templateUrl: 'public/views/templates/adminlogin.tpl.html',
        controller: 'adminLoginController'
    })
});

app.controller('mainController', function($scope, $location) {

    $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
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



    var config = {
        apiKey: "AIzaSyBndM5LP9s8odp2fXaXJA9Phgz7R0Xcai4",
        authDomain: "origami-mailing-list.firebaseapp.com",
        databaseURL: "https://origami-mailing-list.firebaseio.com",
        projectId: "origami-mailing-list",
        storageBucket: "origami-mailing-list.appspot.com",
        messagingSenderId: "92058169875"
    };
    firebase.initializeApp(config);


    var emailsRef = firebase.database().ref('emails');


    $scope.submitEmail = function() {
        saveEmail(document.getElementById('email-input').value);
        document.getElementById('email-signup-form').style.display = 'none';
        document.getElementById('email-thank-you').style.display = 'block';

    };



    function saveEmail(email) {
        var newEmailRef = emailsRef.push();
        newEmailRef.set({
            email: email
        })
    }




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
    };


});