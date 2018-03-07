var app = angular.module('origami.welcome', []);


app.controller('welcomeController', function($scope) {



    $('.footer-right-div input').keyup(function() {
        if($('.footer-right-div input').val().length > 3) {
            $('.footer-right-div button').css('visibility', 'visible');
        } else {
            $('.footer-right-div button').css('visibility', 'hidden');
        }
    });

    $scope.toggleBio = function(idx) {
        if(document.getElementsByClassName('member-wrapper')[idx].style.height != '800px') {
            document.getElementsByClassName('member-wrapper')[idx].style.height = '800px';
            document.getElementsByClassName('member-wrapper')[idx].style.overflowY = 'scroll';
            document.getElementsByClassName('arrow')[idx].innerHTML = '<i class="fa fa-chevron-up" aria-hidden="true"></i>';
            document.getElementsByClassName('member-bio')[idx].style.display = 'inline-block';
        } else {
            document.getElementsByClassName('member-wrapper')[idx].style.height = '400px';
            document.getElementsByClassName('arrow')[idx].innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
            document.getElementsByClassName('member-bio')[idx].style.display = 'none';
            document.getElementsByClassName('member-wrapper')[idx].style.overflowY = 'hidden';
        }
    };


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
    };



    $scope.team = [
        {
            name: 'Michael Montgomery',
            title: 'CEO & Senior Web Developer',
            bio: 'Michael has been lived in Melbourne, FL for 15 years where he studied Web Development at Full Sail ' +
            'University and V School. In 2012, Michael ran for the office of Melbourne, FL ' +
            'City Council and while he did not win, he remains active in local politics today. Before founding Digital Origami ' +
            'LLC, Michael Worked for companies including Bright House Networks and Apple Inc. In addition to CEO, Michael' +
            ' is also the Lead Web Developer with Origami Digital. Michael\'s hobbies includes cycling' +
            ' and spending time with his family. ',
            photoUrl: 'https://i.imgur.com/F6DR9aO.jpg'
        },
        {
            name: 'Justin Paoletta',
            title: 'Junior Web Developer',
            bio: 'Justin recieved his Bachelor\'s of Science degree from the University of Central Florida in psychology. Justin ' +
            'is a primarily self-taught software developer with a niche for front-end tasks. Justin has worked with companies like ' +
            'Apple inc., and currently works with Digital Origami on a consultancy basis. When Justin is not working, he is spending time ' +
            'with his wife or chasing a thrill, usually in the form of skydiving.',
            photoUrl: 'https://i.imgur.com/Vm3ph0W.jpg'
        },
        {
            name: 'Alisa Hokett',
            title: 'Marketing Specialist',
            bio: 'Alisa recieved her Bachelor\'s degree in marketing from Columbia Southern University in 2013. Alisa ' +
            'lives in Colorado and works with Digital Origami on a consultancy basis. Alisa has a knack for brand awareness, clarity ' +
            'and various other facets of the marketing field. Alisa has worked with Bright House Networks and Apple inc. In her free time, ' +
            'Alisa enjoys the great outdoors with her boyfriend.',
            photoUrl: 'https://i.imgur.com/lpteT69.jpg'
        }
    ]
})