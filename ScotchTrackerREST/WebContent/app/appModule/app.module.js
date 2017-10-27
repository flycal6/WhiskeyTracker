angular.module('appModule', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/scotch', {
			template: '<scotch></scotch>'
		})
		.when('/', {
			template: '<scotch></scotch>'
		})
		.otherwise({
			template: '<not-found></not-found>'
		})
});