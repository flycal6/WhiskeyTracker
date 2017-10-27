angular.module('appModule').component('scotch', {
	templateUrl : 'app/appModule/scotch/scotch.component.html',
	controller : function(scotchService, $routeParams, $location) {
		var vm = this;
		
//		scotch selected for detail view
		vm.selected = null;
//		track whether or not to show loading gif
		vm.loading = 0;
		
		vm.scotches = [];

/********** Index Loading/Refreshing ******************************/
		var reload = function(){
			vm.loading = 1;
			scotchService.index().then(function(res){
				console.log(res)
				vm.loading = 0;
				vm.scotches = res.data;
			});
		};
		
		reload();
		
/********** View Detail Single Scotch *****************************************/
		vm.showSingle = function(id){
			vm.loading = 1;
			scotchService.show(id).then(function(res){
				vm.loading = 0;
				vm.selected = res.data;
			})
			.catch(function(err){
				$location.path('/404');
			})
		}
		
	},
	controllerAs: 'vm'
});