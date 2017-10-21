$(document).ready(function() {
    console.log("updateScotch.js loaded");
});

function viewScotchToUpdate(scotch) {
    console.log('in updateScotch()');
    // console.log(scotch);
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

    $('#updateSubmit').click(function (e) {
        e.preventDefault();

        var scotchToUpdate = {
            id: scotch.id,
            name : $(newScotch.name).val(),
            type : $(newScotch.type).val(),
            price : $(newScotch.price).val(),
            taste : $(newScotch.taste).val(),
            age : $(newScotch.age).val(),
            purchasePlace : $(newScotch.purchasePlace).val(),
            notes : $(newScotch.notes).val(),
        };
        performUpdate(scotch.id, scotchToUpdate);
    });
}
function performUpdate(id, scotch) {
    console.log("id: " + id);
    console.log(scotch);
    $.ajax({
        type: 'PUT',
        url: 'rest/scotch/' + id,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(scotch)
    })
    .done(function(data) {
        // console.log(data);
        getScotch(data.id);
    })
    .fail(function(err) {
        console.error('ajax failure');
        console.error(err);
    });

}
