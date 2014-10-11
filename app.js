angular.module('mongoList', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.mySomething = 'Hello world!';
        }]);