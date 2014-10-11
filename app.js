angular.module('mongoList', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('listings', {
                    url: '/listings/{id}',
                    templateUrl: '/listings.html',
                    controller: 'ListingsCtrl'
                });

            $urlRouterProvider.otherwise('home');
        }])
    .controller('ListingsCtrl', [
        '$scope',
        function($scope){
            $scope.mySomething = 'Hello world!';
        }])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.listings = [
                {title: 'listing 1', likes: 2},
                {title: 'listing 2', likes: 1},
                {title: 'listing 3', likes: 3},
                {title: 'listing 4', likes: 9},
                {title: 'listing 5', likes: 22},
                {title: 'listing 6', likes: 0},
                {title: 'listing 7', likes: 1},
            ];
        }]);