// Declaring variables
var searchBtn = $("#searchBtn");
var formInput = $(".form-input").val().trim();
var cityInput = $("#city-input");
var temp = $("#temp"); 
var wind = $("#wind");
var humidity = $("#humidity");
var uvIndex = $("#uv-index"); 
 
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=29.7946641&lon=-98.7319703&units=imperial&appid=9950dfaebba12c6034f0b5a4e90ddc2a';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                console.log("test");
                cityInput.textContent = data[i].name;
        };
    })
};


$("#searchBtn").on("click", getApi);





/* $("#searchBtn").on("click", function() {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=29.7946641&lon=-98.7319703&units=imperial&appid=9950dfaebba12c6034f0b5a4e90ddc2a'
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data))
    .catch(err => alert("wrong city name"))

    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            cityInput.textContent = data[i].name;
        }
    })
}); */


