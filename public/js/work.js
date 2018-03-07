var app = angular.module('origami.work', []);


app.controller('workController', function($scope) {
    $scope.projects = [

        
        {
            name: 'Legacy',
            backgroundUrl: 'https://static.pexels.com/photos/164516/pexels-photo-164516.jpeg',
            link: 'https://michael-montgomery.github.io/legacy/#/welcome'
        },
        {
            name: 'Health First',
            backgroundUrl: 'http://hlknweb.tamu.edu/sites/hlknweb.tamu.edu/files/styles/main_page_photo/public/health%20check.jpg?itok=aAKbZUcC',
            link: 'https://michael-montgomery.github.io/hfhp/'
        },
        {
            name: 'WMTEK',
            backgroundUrl: 'https://static.pexels.com/photos/161281/cross-christian-religion-church-161281.jpeg',
            link: 'https://michael-montgomery.github.io/wmtekdemo/#/welcome'
        }
    ];

    $scope.loadUrl = function(idx) {
        window.open($scope.projects[idx].link, '_blank');
    };
});