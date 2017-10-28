angular.module('appModule').component('scotch', {
	templateUrl : 'app/appModule/scotch/scotch.component.html',
	controller : function(scotchService, $routeParams, $location) {
		var vm = this;
		
// scotch selected for detail view
		vm.selected = null;
		
		vm.updateScotch = null;
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
		
/** ******** View Detail Single Scotch **************************************** */
		vm.showSingle = function(id){
			vm.adding = null;
			console.log("add val:")
			vm.loading = 1;
			scotchService.show(id).then(function(res){
				vm.loading = 0;
				vm.selected = res.data;
			})
			.catch(function(err){
				$location.path('/404');
			})
		};
	
/** ******** Add a New Scotch **************************************** */

		vm.addScotch = function(scotch){
			vm.adding(false);
			vm.loading = 1;
			scotchService.create(scotch).then(function(res){
				reload();
			});
		};
	
/** ******** Update a Scotch **************************************** */
		vm.showUpdateForm = null;
		vm.setUpdateScotch = function(){
			console.log('setting update')
			vm.updateScotch = vm.selected;
		};
		
		vm.update = function(scotch){
			vm.loading = 1;
			scotchService.update(scotch).then(function(res){
				vm.updateScotch = null;
				vm.selected = null;
				vm.loading = 0;
				reload();
			})
		};
		
/** ******** Remove a Scotch **************************************** */
		vm.remove = function(id){
			vm.loading = 1;
			scotchService.destroy(id).then(function(res){
				vm.loading = 0;
				vm.selected = null;
				reload();
			});
		};
	},
/** ******** View Detail Single Scotch **************************************** */
	
	controllerAs: 'vm'
});