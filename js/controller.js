var myApp = angular.module("myApp", ["anguvideo"]);

myApp.controller("AppCtrl",['$scope', function AppCtrl($scope, $http) {
		
		$scope.youTubeURL = "http://www.youtube.com/watch?v=vabnZ9-ex7o";
		$scope.youTubeShareURL = "http://youtu.be/5EVMjnHFg-w";
		$scope.youTubeEmbededURL = "http://www.youtube.com/embed/u9hauSrihYQ";
		$scope.vimeoURL = "http://vimeo.com/35514005";
		// $scope.fun =function() {
		// 	var sum =0
		// 	for (var i = 0; i<100; i++) {
		// 		sum = i*i + sum;
		// 	}
		// 	return sum
		// }
			
		// var a = 0, 
		// 	b = 1,
		// 	c = $scope.fun(),
		// 	d = a+b,
		// 	e = d +c;
		// console.log(a,b,c,d,e)	

		
    }
]);

