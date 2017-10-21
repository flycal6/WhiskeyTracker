$(document).ready(function() {
	console.log('app.js loaded');
	getData();
});

function getData() {
	$.ajax({
		type : 'GET',
		url : 'rest/scotch/',
		dataType : 'json'
	}).done(function(data) {
//		console.log(data);
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
	$('h1').text('Scotch Tracker');
//	var thead = $('<thead> <tr><th>Scotch Tracker</th></tr> </thead>');
//	table.append(thead);

	var tbody = $('<tbody>');
	var tBodyHead = $('<tr><th>Name</th><th>Type</th><th>Price</th><th>Taste</th>');
	tbody.append(tBodyHead);
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
	// console.log(quizId);
	$.ajax({
		type : 'GET',
		url : 'rest/scotch/' + scotchId,
		dataType : 'json'
	}).done(function(scotch) {
		// console.log(quiz);
		$('#content').empty();
		viewScotch(scotch);
	}).fail(function(err) {
		console.error('ajax fail');
		console.error(err);
	});
}

function viewScotch(scotch) {
	$('h1').text(scotch.name);

	var dl = $('<dl>');
	dl.attr("id", "detailViewList")
	dl.addClass("row");

	Object.keys(scotch).forEach(function(s, idx) {
//		console.log(scotch[s]);
		var dt = $('<dt>');
		dt.addClass("col-sm-2");
		var dd = $('<dd>');
		dd.addClass("col-sm-10");
		

//		if (idx % 2 == 0) {
//			li.addClass('stripe');
//		}
//		console.log(s);
		dt.text(s);
		dd.text(scotch[s]);
//		if (s == 'id')
//			li.attr("id", scotch[s] + "li");

		dl.append(dt, dd);
	});
	var btn = $('<button>');
	btn.text("Scotch Index");
	btn.attr("id", "indexButton");
	btn.addClass("btn");
	btn.click(function(e){
		getData();
	});

	$('#content').append(dl, btn);
}
