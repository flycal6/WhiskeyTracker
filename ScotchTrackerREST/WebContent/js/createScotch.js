// $(document).ready(function(){
// 	console.log("createScotch.js loaded");
// });

$(newScotch.createSubmit).click(function(e){
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
	// console.log(scotch);
	createScotch(scotch);
});

function createScotch(scotch) {
	$.ajax({
		type: 'POST',
		url: 'rest/scotch/',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(scotch)
	})
	.done(function (scotch) {
		getScotch(scotch.id);
	})
	.fail(function (err) {
		console.error('ajax failure');
		console.error(err);
	});
}
