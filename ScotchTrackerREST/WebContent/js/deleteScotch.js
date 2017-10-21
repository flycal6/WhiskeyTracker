$(document).ready(function() {
    console.log("deleteScotch.js loaded");
});

function deleteScotch(scotch) {
    $.ajax({
            type: 'DELETE',
            url: 'rest/scotch/' + scotch.id
        })
        .done(function(data) {
            console.log('successfully deleted');
            getData(1);
        })
        .fail(function(err) {
            console.log('Delete Failed!');
            console.log(err);
        });
}

function alertSuccess() {
	var div = $('<div class="alert alert-warning alert-dismissible fade show" role="alert">');
    var strong = $('<strong>');

	strong.text('Successfully Deleted');
    div.append(strong);

	var btn = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

	div.append(btn);

    $('#content').prepend(div);

    }
