var app = angular.module('origami.welcome', []);


app.controller('welcomeController', function($scope) {

    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('.header').css({
                'background-color': 'white'
            });
            $('.header nav a').css('color', '#377ADA')
        } else {
            $('.header').css({
                'background-color': 'transparent',
                'opacity': '1'
            });
            $('.header nav a').css('color', 'white')
        }
    });


    var hideAllMiniDivs = function() {
        $('.welcome-our-team-wrapper, .welcome-our-mission-wrapper, .welcome-what-we-do-wrapper ').hide();
        $('.welcome-sub-nav nav a').removeClass('selected');
    };

    $scope.showOurTeamDiv = function() {
        hideAllMiniDivs();
        $('.welcome-our-team-wrapper').show();
        $('#our-team-link').addClass('selected');
    };

    $scope.showOurMissionDiv = function() {
        hideAllMiniDivs();
        $('.welcome-our-mission-wrapper').show();
        $('#our-mission-link').addClass('selected')
    };

    $scope.showWhatWeDoDiv = function() {
        hideAllMiniDivs();
        $('.welcome-what-we-do-wrapper').show();
        $('#what-we-do-link').addClass('selected');
    };

    $scope.loadWhatWeDo = function(){
        $scope.showWhatWeDoDiv();
        $('html, body').animate({
            scrollTop: $(".welcome-sub-nav").offset().top - 70
        }, 1500);
    }



    $scope.team = [
        {
            name: 'Michael Montgomery',
            title: 'CEO',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/E5qxqJ6.jpg'
        },
        {
            name: 'Justin Paoletta',
            title: 'Web Developer',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/5Zcmihd.jpg'
        },
        {
            name: 'Alisa Hokett',
            title: 'Marketing Specialist',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/jImJ7zu.jpg'
        },
        {
            name: 'John Sharpe',
            title: 'Sales Engineer',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/pf3gyUr.jpg'
        },
        {
            name: 'Some Chick',
            title: 'Administrative Specialist',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/69CgKeb.jpg'
        }
    ]
})