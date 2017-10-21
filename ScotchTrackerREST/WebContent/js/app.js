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
		console.log(data);
		$('#content').empty();
		buildTable(data);
	}).fail(function(err) {
		console.error('ajax fail');
		console.error(err);
	});
}

function buildTable(data) {
	console.log('in buildTable()');
	var table = $('<table> <thead> <tr><th>Scotch Tracker</th></tr> </thead>');
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

	var ul = $('<ul>');
	ul.attr("id", "detailViewList")

	Object.keys(scotch).forEach(function(s, idx) {
//		console.log(scotch[s]);
		var li = $('<li>')

		if (idx % 2 == 0) {
			li.addClass('stripe');
		}
//		console.log(s);
		li.text(scotch[s]);
//		if (s == 'id')
//			li.attr("id", scotch[s] + "li");

		ul.append(li);
	});
	var btn = $('<button>');
	btn.text("Scotch Index");
	btn.attr("id", "indexButton");
	btn.click(function(e){
		getData();
	});
	
	$('#content').append(ul, btn);
}