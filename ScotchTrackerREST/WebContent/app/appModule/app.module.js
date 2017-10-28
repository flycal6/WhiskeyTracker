angular.module('appModule', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/scotch/:id', {
			template: '<scotch></scotch>'
		})
		.when('/scotch', {
			template: '<scotch></scotch>'
		})
		.when('/add', {
			template: '<new-scotch-form></new-scotch-form>'
		})
		.when('/', {
			template: '<scotch></scotch>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});