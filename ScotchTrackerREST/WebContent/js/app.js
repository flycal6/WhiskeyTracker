$(document).ready(function() {
	console.log('app.js loaded');
//	$(newScotch).hide();
	getData();
});

function getData() {
	$.ajax({
		type : 'GET',
		url : 'rest/scotch/',
		dataType : 'json'
	}).done(function(data) {
		$('#content').empty();
		buildTable(data);
	}).fail(function(err) {
		console.error('ajax fail');
		console.error(err);
	});
}

function buildTable(data) {
//	console.log('in buildTable()');
	var table = $('<table>');
	table.addClass("table");
	table.addClass("table-striped");
	table.addClass("table-hover");
	$('.navbar-brand').text('Scotch Tracker');

	var tbody = $('<tbody>');
	var thead = $('<thead><tr><th>Name</th><th>Type</th><th>Price</th><th>Taste</th></thead>');
	thead.addClass("table-primary");
	table.append(thead);
	table.append(tbody);

	data.forEach(function(scotch, idx) {
		// console.log(scotch);
		var tr = $('<tr>');
		var td1 = $('<td>');
		var td2 = $('<td>');
		var td3 = $('<td>');
		var td4 = $('<td>');

		if (idx % 2 == 0) {
			tr.addClass('stripe');
		}
		tr.attr("id", scotch.id)

		td1.text(scotch.name);
		// td1.attr("id", scotch.id);
		//
		td2.text(scotch.type);
		// td2.attr("class", "gallons");
		//
		td3.text(scotch.price);
		// td3.attr("class", "odo");

		td4.text(scotch.taste);

		tr.click(function() {
			getScotch(scotch.id);
		});

		tr.append(td1, td2, td3, td4);
		tbody.append(tr);

	});
	$('#content').append(table);
}

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
		console.log("index button var");
		getData();
	});

	var updateBtn = $('<button>');
	console.log("update button var");
	updateBtn.text('Update Entry');
	updateBtn.attr("id", "updateButton");
	updateBtn.addClass("btn btn-primary");
	updateBtn.click(function(e){
		console.log("update button clicked");
	});

	$('#content').append(dl, indexBtn, updateBtn);
}
