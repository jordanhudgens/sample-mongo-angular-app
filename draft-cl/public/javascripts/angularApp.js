angular.module('mongoList', ['ui.router'])
    .factory('listings', [function(){
        var listingObject = {
            listings: []
        };
        return listingObject;
    }])
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
        'listings',
        function($scope, listings){
            $scope.listings = listings.listings;
            $scope.listings = [
                {title: 'listing 1', likes: 2},
                {title: 'listing 2', likes: 1},
                {title: 'listing 3', likes: 3},
                {title: 'listing 4', likes: 9},
                {title: 'listing 5', likes: 22},
                {title: 'listing 6', likes: 0},
                {title: 'listing 7', likes: 1}
            ];
            $scope.addListing = function(){
                $scope.listings.push({title: $scope.title, description: $scope.description,likes: 0});
                $scope.title = '';
            };
        }]);