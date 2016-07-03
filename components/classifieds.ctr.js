(function(){
	"Use Strict";

	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl",function($scope){
		$scope.classifieds =[
			{
				"title":"First Item",
				"price":10000,
				"description":" Fruits are the means by which angiosperms disseminate seeds.",
				"image":"images/a_christmas_tree_decoration.jpg",
				"contacts": {
					"name":"Ashish Karn",
					"phone":"5246895689",
					"email":"er.ashish.karn@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			]
			},	 			
			{
				"title":"Second Item",
				"price":20000,
				"description":" Fruits are the means by which angiosperms disseminate seeds. ",
				"image":"images/christmas_tree_decoration_4.jpg",
				"contacts": {
					"name":"Manish Karn",
					"phone":"47859868957",
					"email":"manishi4u2002@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			]
			},
			{
				"title":"Third Item",
				"price":30000,
				"description":" Fruits are the means by which angiosperms disseminate seeds. ",
				"image":"images/christmas_tree_decoration.jpg",
				"contacts": {
					"name":"Ramesh Karn",
					"phone":"78458965896",
					"email":"rameshkumar@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			] 
			},
			{
				"title":"Fourth Item",
				"price":40000,
				"description":" Fruits are the means by which angiosperms disseminate seeds. ",
				"image":"images/fruits_market_shop.jpg",
				"contacts": {
					"name":"Umesh  Karn",
					"phone":"789865869",
					"email":"umeshkarn@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			]
			},
			{
				"title":"Fith Item",
				"price":50000,
				"description":" Fruits are the means by which angiosperms disseminate seeds. ",
				"image":"images/fruits_market_shop.jpg",
				"contacts": {
					"name":"Deepak Karn",
					"phone":"47586457",
					"email":"deepakkarn@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			] 
			},
			{
				"title":"Sixth Item",
				"price":60000,
				"description":" Fruits are the means by which angiosperms disseminate seeds. ",
				"image":"images/fruits_market_shop.jpg",
				"contacts": {
					"name":"Vikash Karn",
					"phone":"8569865986",
					"email":"vikashkumar@gmail.com"
				 			},
				 "categories":[
				 	"Vehicles",
				 	"Parts and Assesories"
				 			] 
	}
]

	});


})();