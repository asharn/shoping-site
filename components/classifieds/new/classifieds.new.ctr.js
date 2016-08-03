(function(){
	"Use Strict";

	angular
	.module("ngClassifieds")
	.controller("newClassifiedsCtrl",function(classifiedsFactory, $scope, $state, $timeout, $mdSidenav, $mdToast, $mdDialog){
		var vm =this;
		vm.closeSidenav = closeSidenav;
		vm.sidenavOpen;
		vm.saveClassified = saveClassified;
		$timeout(function(){
			$mdSidenav('left').open();
		});


		$scope.$watch('vm.sidenavOpen', function(sidenav){
			console.log(sidenav);
			if(sidenav === false ){
				$mdSidenav('left')
				.close()
				.then(function(){
					$state.go('classifieds');
				});
			}
		});
		function closeSidenav(){
			vm.sidenavOpen = false;
		}

		function saveClassified(classified){

            classified.contacts={
				phone: "5246895689",
				email: "er.ashish.karn@gmail.com"
				}
			if(classified)
			{
				$scope.$emit('newClassified', classified);
				vm.sidenavOpen = false;
			}
		}
	});
})();