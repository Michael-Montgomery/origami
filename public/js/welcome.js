var app = angular.module('origami.welcome', []);


app.controller('welcomeController', function($scope) {
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