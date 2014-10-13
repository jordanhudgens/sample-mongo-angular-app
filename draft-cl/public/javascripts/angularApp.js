angular.module('mongoList', ['ui.router', 'ngResource'])
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
    .factory('Listing',
        function($resource){
            var res = $resource('/listings');
            return {
                create: function(attrs) {
                    var listing = new res(attrs);
                    listing.$save();
                },
                all: function() {
                    return res.query();
                }
            };
        })
    .controller('ListingsCtrl', [
        '$scope',
        function($scope){
            $scope.mySomething = 'Hello world!';
        }])
    .controller('MainCtrl', [
        '$scope',
        'Listing',
        function($scope, Listing){
            $scope.listings = Listing.all();
            $scope.addListing = function(){
                var listing = {title: $scope.title, description: $scope.description, likes: 0};
                $scope.listings.push(listing);
                $scope.title = '';
                Listing.create(listing);
            };
        }]);