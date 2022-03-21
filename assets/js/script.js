// Declaring variables
var searchBtn = $("#searchBtn");
var formInput = $(".form-input");
var cityInput = $("#city-input");
var currentDate = $(".current-date");
var forecastEl = $("#curent-forecast");
var temp = $("#temp"); 
var wind = $("#wind");
var humidity = $("#humidity");
var uvIndex = $("#uv-index"); 

var todaysDate = moment().format('L');
$(".current-date").html(todaysDate);

 
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=29.7946641&lon=-98.7319703&units=imperial&appid=9950dfaebba12c6034f0b5a4e90ddc2a';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

             for (var i = 0; i < data.length; i++) {
                console.log("test")

                $("#city-input").html(data[i].name);

        }; 
    });
};

$("#searchBtn").on("click", getApi);



