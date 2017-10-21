$(document).ready(function(){
	console.log("updateScotch.js loaded");
});

function updateScotch(scotch) {
    console.log('in updateScotch()');
    console.log(scotch);
    $('#content').empty();
    $('#formDiv').show();
    $('#createSubmit').hide();
    $('#updateSubmit').show();

    $(newScotch.name).val(scotch.name);
    $(newScotch.type).val(scotch.type);
    $(newScotch.price).val(scotch.price);
    $(newScotch.taste).val(scotch.taste);
    $(newScotch.age).val(scotch.age);
    $(newScotch.purchasePlace).val(scotch.purchasePlace);
    $(newScotch.notes).val(scotch.notes);
	// $.ajax({
	// 	type: 'POST',
	// 	url: 'rest/scotch/',
	// 	dataType: 'json',
	// 	contentType: 'application/json',
	// 	data: JSON.stringify(scotch)
	// })
	// .done(function (scotch) {
	// 	console.log(scotch.id);
	// 	getScotch(scotch.id);
	// })
	// .fail(function (err) {
	// 	console.error('ajax failure');
	// 	console.error(err);
	// });
}
