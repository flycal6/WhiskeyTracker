angular.module('appModule').component('report', {
	templateUrl: 'app/appModule/report/report.component.html',
	controller: function(scotchService){
		var vm = this;
		var data = [];
		vm.loading = 1;
		
		vm.numBottles = 0;
		
		vm.totalCost = 0;
		vm.avgCost = 0;
		
		vm.tasteVar = 0;
		vm.bestTaste = '';
		vm.bestTasteNotes = '';
		
		vm.worstTasteVar = 11;
		vm.worstTasteName = '';
		
		vm.cheapest = 10000000;
		vm.cheapestName = '';
		
		vm.maxPrice = 0;
		vm.maxPriceName = '';
		
		scotchService.index().then(function(res){
			vm.loading = 0;
			data = res.data;
			console.log(data);
			
			vm.compileData();
		});
		
		vm.compileData = function(){

	        data.forEach(function (val, idx) {
	            if(parseInt(val.taste) < vm.worstTasteVar){
	            	vm.worstTasteVar = val.taste;
	            	vm.worstTasteName = val.name;
	            }
	            if(parseInt(val.taste) > vm.tasteVar){
	            	vm.tasteVar = val.taste;
	            	vm.bestTaste = val.name;
	            	vm.bestTasteNotes = val.notes;
	            }
	            if(parseFloat(val.price) < vm.cheapest){
	            	vm.cheapest = val.price;
	            	vm.cheapestName = val.name;
	            }
	            if(parseFloat(val.price) > vm.maxPrice){
	            	vm.maxPrice = val.price;
	            	vm.maxPriceName = val.name;
	            }
	            vm.numBottles++;
	            vm.totalCost += parseFloat(val.price);
	        });
	        vm.avgCost = vm.totalCost / vm.numBottles;
	        vm.avgCost = '$' + vm.avgCost.toFixed(2);

	        vm.totalCost = '$' + vm.totalCost.toFixed(2);
	        
//	        vm.buildReport(numBottles, totalCost, avgCost, bestTaste, bestTasteNotes, cheapest, cheapestName, maxPrice, maxPriceName, worstTasteName);
		}
	},
	controllerAs: 'vm'
		
});
