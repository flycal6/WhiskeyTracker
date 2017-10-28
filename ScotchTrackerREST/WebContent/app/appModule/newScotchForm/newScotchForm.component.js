angular.module('appModule').component('newScotchForm', {
	templateUrl : 'app/appModule/newScotchForm/newScotchForm.component.html',
	controller : function(scotchService, $routeParams, $location) {
		var vm = this;
		
// scotch selected for detail view
		vm.selected = null;
// track whether or not to show loading gif
		vm.loading = 0;

		vm.scotches = [];
		
/** ******** Index Loading/Refreshing ***************************** */
		var reload = function(){
			vm.loading = 1;
			scotchService.index().then(function(res){
				vm.loading = 0;
				vm.scotches = res.data;
			});
		};
		
		reload();
	
/** ******** Add a New Scotch **************************************** */

		vm.addScotch = function(scotch){
			vm.loading = 1;
			scotchService.create(scotch).then(function(res){
				reload();
				$location.path('/scotch');
			});
		};
	
	},
	
	controllerAs: 'vm'
	
})