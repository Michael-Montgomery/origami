var app = angular.module('origami.welcome', []);


app.controller('welcomeController', function($scope) {



    $('.footer-right-div input').keyup(function() {
        if($('.footer-right-div input').val().length > 3) {
            $('.footer-right-div button').css('visibility', 'visible');
        } else {
            $('.footer-right-div button').css('visibility', 'hidden');
        }
    })


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
            photoUrl: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/189381_192406970793825_114382_n.jpg?oh=62c23240144771b7e0a2c5d423631d30&oe=5A23AF9D'
        },
        {
            name: 'Alisa Hokett',
            title: 'Marketing Specialist',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/11080988_10203992807527892_5394468453804242708_n.jpg?oh=6563efd5ea243c65e7488d0afc7c6b8f&oe=5A1ED334'
        },
        {
            name: 'Adrian Barton',
            title: 'Operations Specialist',
            bio: 'hgjfdhgjfkdls ghfjkd lsghjfksdl ghfjkdsl gjfdgfd.gfjhd ghfdklg fhjdklsghfjdk glshfdkj slghjfkdlhsgjf' +
            'gjhfdjklsghj fdjhgs fjdsgfds.gfjdklg fhdklgj;hfkdl gjfklsgjfdk gl fdgjfdklsg; fdjgfdkjf.',
            photoUrl: 'http://i.imgur.com/pf3gyUr.jpg'
        }
    ]
})