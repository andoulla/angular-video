/*global angular*/
var myApp = angular.module("myApp", ["anguvideo"]);

myApp.controller("AppCtrl", ['$scope', function ($scope) {
    $scope.youTubeURL = "http://www.youtube.com/watch?v=vabnZ9-ex7o";
    $scope.youTubeShareURL = "http://youtu.be/5EVMjnHFg-w";
    $scope.youTubeEmbededURL = "http://www.youtube.com/embed/u9hauSrihYQ";
    $scope.vimeoURL = "http://vimeo.com/35514005";
}]);

