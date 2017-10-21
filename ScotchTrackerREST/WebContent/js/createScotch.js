$(document).ready(function(){
	console.log("createScotch.js loaded");
});
$('#newLink').click(function (e) {
	$('#content').empty();
	$('#formDiv').show();
});
$(newScotch.submit).click(function(e){
	e.preventDefault();
	var scotch = {
		name : $(newScotch.name).val(),
		type : $(newScotch.type).val(),
		price : $(newScotch.price).val(),
		taste : $(newScotch.taste).val(),
		age : $(newScotch.age).val(),
		purchasePlace : $(newScotch.purchasePlace).val(),
		notes : $(newScotch.notes).val(),
	};
	console.log(scotch);
	// createScotch();
});
