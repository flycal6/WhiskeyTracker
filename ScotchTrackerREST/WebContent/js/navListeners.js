// $(document).ready(function () {
//     console.log('navListeners.js loaded');
// });

$('#newLink').click(function (e) {
	$('#content').empty();
    newScotch.reset();
	$('#formDiv').show();
    $('#createSubmit').show();
    $('#updateSubmit').hide();
});

$('#navHome').click(function (e) {
    getData();
});

$('#navReport').click(function (e) {
    getReportData();
});
