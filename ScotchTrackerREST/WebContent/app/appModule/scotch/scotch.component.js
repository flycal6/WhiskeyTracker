angular.module('appModule').component('scotch', {
	templateUrl : 'app/appModule/scotch/scotch.component.html',
	controller : function(scotchService, $routeParams, $location) {
		var vm = this;
		vm.loading = 0;
		vm.scotches = [];
		
		var reload = function(){
			vm.loading = 1;
			scotchService.index().then(function(res){
				console.log(res)
				vm.loading = 0;
				vm.scotches = res.data;
			});
		};
		
		reload();
		
//		vm.show = function(){
//			vm.loading
//		}
		
	},
	controllerAs: 'vm'
});