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
				
				var found = false;
				if (!vm.selected && !isNaN(parseInt($routeParams.id))) {
					vm.scotches.forEach(function(scotch, idx, arr) {
						if (scotch.id == $routeParams.id) {
							vm.selected = scotch;
							found = true;
						}
					})
					if(!found){
						$location.path('/these-are-not-the-links-you-are-looking-for');
					}
				}
				else if(isNaN(parseInt($routeParams.id)) && typeof $routeParams.id == 'string'){
					$location.path('/these-are-not-the-links-you-are-looking-for');
				}
			});
		};
		
		reload();
		
/** ******** View Detail Single Scotch **************************************** */
		vm.showSingle = function(id){
			vm.adding = null;
			vm.loading = 1;
			scotchService.show(id).then(function(res){
				vm.loading = 0;
				vm.selected = res.data;
				console.log(id)
				$location.path('/scotch/' + id);
				console.log(vm.selected);
			})
			.catch(function(err){
				$location.path('/these-are-not-the-links-you-are-looking-for');
			})
		};
		
		
/** ******** View Detail Single Scotch **************************************** */
		vm.returnToIndex = function() {
			vm.selected = null;
			vm.updateScotch = null;
			$location.path('/scotch');
		}
		
	
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