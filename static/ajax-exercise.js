"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
    var fortune = results;
    $('#fortune-text').html(fortune);
}


function showFortune(evt) {
    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune',replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER
function showForecast(results) {
    console.dir(results);
    console.log(results);
    alert("Today's forecast is: " + results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    $.get('/weather.json', url, showForecast);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


