// $(document).ready(function () {
//     console.log('report.js loaded');
// });

function getReportData() {
    $.ajax({
        type: 'GET',
        url: 'rest/scotch/',
        dataType: 'json'
    })
    .done(function (data) {
        console.log(data);
        var numBottles = 0;

        var totalCost = 0;
        var avgCost = 0;

        var tasteVar = 0;
        var bestTaste = '';
        var bestTasteNotes = '';

        var worstTasteVar = 11;
        var worstTasteName = '';

        var cheapest = 10000000;
        var cheapestName = '';

        var maxPrice = 0;
        var maxPriceName = '';

        data.forEach(function (val, idx) {
            console.log('val.taste: ' + val.taste);
            console.log('tasteVar: ' + tasteVar);
            if(parseInt(val.taste) < worstTasteVar){
                worstTasteVar = val.taste;
                worstTasteName = val.name;
            }
            if(parseInt(val.taste) > tasteVar){
                tasteVar = val.taste;
                bestTaste = val.name;
                bestTasteNotes = val.notes;
            }
            if(parseFloat(val.price) < cheapest){
                cheapest = val.price;
                cheapestName = val.name;
            }
            if(parseFloat(val.price) > maxPrice){
                maxPrice = val.price;
                maxPriceName = val.name;
            }
            numBottles++;
            totalCost += parseFloat(val.price);
        });
        avgCost = totalCost / numBottles;
        avgCost = '$' + avgCost.toFixed(2);

        totalCost = '$' + totalCost.toFixed(2);

        buildReport(numBottles, totalCost, avgCost, bestTaste, bestTasteNotes, cheapest, cheapestName, maxPrice, maxPriceName, worstTasteName);

    })
    .fail(function (err) {
        console.error('Failed to get report data!');
        console.error(err);
    });
}

function buildReport(numBottles, totalCost, avgCost, bestTaste, bestTasteNotes, cheapest, cheapestName, maxPrice, maxPriceName, worstTasteName) {
    // console.log('in getReportData()');
    $('#content').empty();
    var h1 = $('<h1>');
    h1.text('Scotch Report');
    $('#content').append(h1);

    buildCard(numBottles, totalCost, avgCost, bestTaste, bestTasteNotes, cheapest, cheapestName, maxPrice, maxPriceName, worstTasteName);
}

function buildCard(numBottles, totalCost, avgCost, bestTaste, bestTasteNotes, cheapest, cheapestName, maxPrice, maxPriceName, worstTasteName) {
/***************Favorite Scotch************************************************/
    var card = $('<div>');
    card.addClass('card text-white bg-primary mb-3');

    var cardHeader = $('<div>');
    cardHeader.addClass('card-header');
    cardHeader.text('Favorite Tasting Scotch');

    var cardBody = $('<div>');
    cardBody.addClass('card-body');

    var h4 = $('<h4>');
    h4.addClass('card-title');
    h4.text(bestTaste);

    var pLeast = $('<p>');
    pLeast.addClass('card-text');
    pLeast.text('Least Favorite: ' + worstTasteName);

    cardBody.append(h4, pLeast);
    card.append(cardHeader, cardBody);
    $('#content').append(card);

    /***************Money Spent************************************************/
    var card2 = $('<div>');
    card2.addClass('card text-white bg-danger mb-3');

    var cardHeader2 = $('<div>');
    cardHeader2.addClass('card-header');
    cardHeader2.text('Money Spent');

    var cardBody2 = $('<div>');
    cardBody2.addClass('card-body');

    var h4Max = $('<h4>');
    h4Max.addClass('card-title');
    h4Max.text('Total Spent: ' + totalCost);

    var p = $('<p>');
    p.addClass('card-text');
    p.text('Average Price: ' + avgCost);

    var pMax = $('<p>');
    pMax.addClass('card-text');
    pMax.text('Most Expensive: ' + maxPriceName +' ($' + maxPrice +')');

    var pMin = $('<p>');
    pMin.addClass('card-text');
    pMin.text('Lease Expensive: ' + cheapestName +' ($' + cheapest +')');

    cardBody2.append(h4Max, p, pMax, pMin);
    card2.append(cardHeader2, cardBody2);
    $('#content').append(card2);
}
