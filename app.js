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
            $scope.mySomething = 'Hello world!';
        }]);