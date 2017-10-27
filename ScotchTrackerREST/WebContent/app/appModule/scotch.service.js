angular.module('appModule')
.factory('scotchService', function($http){
	var service = {};
	var scotches = [];
	
	service.index = (function(){
		return $http({
			method: 'GET',
			url: 'rest/scotch/'
		});
	});
	
	service.show = (function(id){
		return $http({
			method: 'GET',
			url: 'rest/scotch/' + id
		});
	});
	
	service.create = (function(scotch){
		return $http({
			method: 'POST',
			url: 'rest/scotch/',
			headers: {
				'Content-Type': 'application/json'
			},
			data: scotch
		});
	});
	
	service.destroy = (function(id){
		return $http({
			method: 'DELETE',
			url: 'rest/scotch/' + id
		});
	});
	
	service.update = (function(scotch){
		return $http({
			method: 'PUT',
			url: 'rest/scotch/' + scotch.id,
			headers: {
				'Content-Type': 'application/json'
			},
			data: scotch
		});
	});
	
	return service;
})