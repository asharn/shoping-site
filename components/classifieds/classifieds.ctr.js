(function(){
	"Use Strict";

	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl",function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
		var vm =this;

			vm.openSidenav = openSidenav;
			vm.closeSidenav = closeSidenav;
			vm.saveClassified = saveClassified;
			vm.editClassified = editClassified;
			vm.deleteClassified = deleteClassified;
			vm.editSave = editSave;
			vm.editing;
			vm.classifieds;
			vm.categories;

		classifiedsFactory.getClassifieds().then(function (classifieds){
			 console.log(classifieds.data);
			vm.classifieds = classifieds.data;
			vm.categories = getCategories(vm.classifieds);
		});

		$scope.$on('newClassified',function(event, classified){
			classified.id=vm.classifieds.length+1;
			vm.classifieds.push(classified);
			showToast("New classified Saved!");
		});

		$scope.$on('editClassified',function(event, message){
			showToast(message);
		});
        
		var contacts={
				name: "Ashish Karn",
				phone: "5246895689",
				email: "er.ashish.karn@gmail.com"
				}
		function openSidenav(){
			$state.go('classifieds.new');
		}
		function closeSidenav(){
			$mdSidenav('left').close();
		}
		function saveClassified(classified){

			if(classified)
			{
				classified.contacts=contacts;
				vm.classifieds.push(classified);
				vm.classified={};
				closeSidenav();
				showToast("New classified Saved!");
			}
		}
		function editClassified(classified){
			$state.go('classifieds.edit', {
					id: classified.id, 
				classified: classified
			});
		}
		function editSave(classified){
			vm.editing=false;
			vm.classified=classified;
			closeSidenav();
			showToast("Edit classified Saved!");
		}
		function deleteClassified(event, classified){

				var confirm =$mdDialog.confirm()
									  .title("Are You Sure want to delete "+ classified.title + " ?")
									  .ok("Okay")
									  .cancel("Nope")
									  .targetEvent(event);
					$mdDialog.show(confirm).then(function(){
						var index = vm.classifieds.indexOf(classified);
						vm.classifieds.splice(index,1);
						showToast("Classified Deleted!");

					}, function(){
						showToast("Classified Not Deleted!");
					});
		}
		function showToast(message){
			$mdToast.show(
					$mdToast.simple()
					.content(message)
					.position("top, right")
					.hideDelay(3000)
					);
		}

		function getCategories(classifieds){
			var categories = [];
			angular.forEach(classifieds, function(item){
				angular.forEach(item.categories, function(category){
					categories.push(category);
				});
			});
			return _.uniq(categories);
		}
	});


})();