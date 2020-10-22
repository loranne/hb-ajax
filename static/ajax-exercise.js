"use strict";


// PART 1: SHOW A FORTUNE


// NON-ARROW FUNCTION

// function randomFortune(fortune) {
//     $('#fortune-text').html(fortune);
// }

// function showFortune(evt) {
//     $.get('/fortune', randomFortune);
// }

// $('#get-fortune-button').on('click', showFortune);

function showFortune(evt) {
    $.get('/fortune', (fortune) => $('#fortune-text').html(fortune));
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function displayForecast(zipCode) {
    $('#weather-info').html(zipCode.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, displayForecast)
   
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function submitOrder(orderData) {
    if (orderData.code === 'ERROR') {
        $('#order-status').addClass('order-error');
        $('#order-status').html('<p>' + orderData.msg + '</p>');
    } else {
        $('#order-status').removeClass('order-error');
        $('#order-status').html('<p>' + orderData.msg + '</p>');

    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let inputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    };

    $.post('/order-melons.json', inputs, submitOrder)

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


