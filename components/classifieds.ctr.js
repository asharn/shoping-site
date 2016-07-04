(function(){
	"Use Strict";

	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl",function($scope, $http){
		$http.get('data/classified.json').then(function (classified){
			//console.log(data);
			$scope.classifieds = classified.data;
		});
		//$scope.classifieds =
	});


})();