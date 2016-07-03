angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider){
		$mdThemingProvider.theme('default')
						  .primaryPalette('blue')
						  .accentPalette('red');

	})
	.directive("helloWorld", function(){
		return {
			template: "<h1>{{ name.lastName + ' '  + name.firstName }}</h1>"
		}
	});