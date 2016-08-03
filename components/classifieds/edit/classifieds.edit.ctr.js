(function(){
	"Use Strict";

	angular
	.module("ngClassifieds")
	.controller("editClassifiedsCtrl",function(classifiedsFactory, $scope, $state, $timeout, $mdSidenav, $mdToast, $mdDialog){
		var vm =this;
		vm.closeSidenav = closeSidenav;
		vm.sidenavOpen;
		vm.editSave = editSave;
		vm.classified = $state.params.classified;
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

		function editSave(){
				$scope.$emit('editClassified', "Classified Edited !!!");
				vm.sidenavOpen = false;
		}
	});
})();