var app = angular.module('origami.work', []);


app.controller('workController', function($scope) {
    $scope.projects = [
        {
            name: 'Legacy',
            backgroundUrl: 'https://static.pexels.com/photos/164516/pexels-photo-164516.jpeg',
            link: 'https://michael-montgomery.github.io/legacy/#/welcome'
        },
        {
            name: 'Luna',
            backgroundUrl: 'https://www.sourpussclothing.com/wordpress/wp-content/uploads/2015/01/LUNA_MARIE_2.jpg',
            link: 'http://www.michaelmontgomery.io/luna/#/home'
        },
        {
            name: 'Health First',
            backgroundUrl: 'http://hlknweb.tamu.edu/sites/hlknweb.tamu.edu/files/styles/main_page_photo/public/health%20check.jpg?itok=aAKbZUcC',
            link: 'http://www.michaelmontgomery.io/hfhp/#/welcome'
        },
        {
            name: 'WMTEK',
            backgroundUrl: 'https://static.pexels.com/photos/161281/cross-christian-religion-church-161281.jpeg',
            link: 'https://michael-montgomery.github.io/wmtekdemo/#/welcome'
        },
        {
            name: 'Pixi',
            backgroundUrl: 'https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg',
            link: 'https://michael-montgomery.github.io/food/#!/welcome'
        }
    ];

    $scope.loadUrl = function(idx) {
        window.location.assign($scope.projects[idx].link)
    };
})