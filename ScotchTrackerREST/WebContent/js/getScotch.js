$(document).ready(function () {
    console.log("getScotch.js loaded");
});

function getScotch(scotchId) {
	// console.log(scotchId);
	$.ajax({
		type : 'GET',
		url : 'rest/scotch/' + scotchId,
		dataType : 'json'
	}).done(function(scotch) {
		// console.log(scotch);
		$('#content').empty();
		$('#formDiv').hide();
		viewScotch(scotch);
	}).fail(function(err) {
		console.error('ajax fail');
		console.error(err);
	});
}

function viewScotch(scotch) {
	$('.navbar-brand').text(scotch.name);

	var dl = $('<dl>');
	dl.attr("id", "detailViewList")
	dl.addClass("row");

	Object.keys(scotch).forEach(function(s, idx) {
//		console.log(scotch[s]);
		var dt = $('<dt>');
		dt.addClass("col-sm-2");
		var dd = $('<dd>');
		dd.addClass("col-sm-10");

//		console.log(s);
		dt.text(s);
		dd.text(scotch[s]);

		dl.append(dt, dd);
	});

	var indexBtn = $('<button>');
	indexBtn.text("Scotch Index");
	indexBtn.attr("id", "indexButton");
	indexBtn.addClass("btn");
	indexBtn.click(function(e){
		getData();
	});

	var updateBtn = $('<button>');
	updateBtn.text('Update Entry');
	updateBtn.attr("id", "updateButton");
	updateBtn.addClass("btn btn-primary");
	updateBtn.click(function(e){
		// console.log(scotch);
		viewScotchToUpdate(scotch);
	});

    var deleteBtn = $('<button>');
    deleteBtn.text('Delete Entry');
    deleteBtn.attr("id", "deleteButton");
    deleteBtn.addClass("btn btn-danger");
    deleteBtn.click(function (e) {
        deleteScotch(scotch);
    });

	$('#content').append(dl, indexBtn, updateBtn, deleteBtn);
}
