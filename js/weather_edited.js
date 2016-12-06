const apiKey = "1a4f97ef098818cd32c2f6eac963d1dc";
var currentTemp = [];
farenheit = true;
var longitude, latitude, city;


const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
var icons = new Skycons({"color":"orange"});

$.ajax({
  url:'http://ip-api.com/json',
  async:false,
  dataType: 'json',
  success: function (json) {
    longitude = json.lon;
    latitude = json.lat;
    if (json.region){
      city = json.city+", "+json.region;
    } else {
      city = json.city;
    }
  }
});


/*
$.getJSON("http://ip-api.com/json", function(data){
  console.log(data.lon)
  saveCoords(data.lon,data.lat);
});*/
  
 
console.log(weatherAPI+"lat="+latitude+"&lon="+longitude+"&units=imperial&APPID="+apiKey);
 
$.getJSON(weatherAPI+"lat="+latitude+"&lon="+longitude+"&units=imperial&APPID="+apiKey, function(data) {
    document.getElementById("cityName").innerHTML=city;
    currentTemp.push(data.main.temp);
    currentTemp.push((data.main.temp-32) / (9/5))
    document.getElementById("temperature").innerHTML=currentTemp[0].toFixed(1)+"&deg F";
    getConditionImage(data.weather[0].id);
});


   
   
   
   
function changeDegrees() {
    if (farenheit){
        farenheit = false;
        document.getElementById("temperature").innerHTML=currentTemp[1].toFixed(1)+"&deg C";
    } else {
        farenheit = true;
        document.getElementById("temperature").innerHTML=currentTemp[0].toFixed(1)+"&deg F";
    }
}

function getConditionImage(code) {
    console.log(code);
    if (code < 233) {
        //thunderstorm
        icons.set("skyconImage",Skycons.SLEET);
    } else if ((code>299) && (code<322)){
        //Drizzle
        icons.set("skyconImage", Skycons.RAIN);
    } else if ((code > 499) && (code < 532)) {
        //rain
        icons.set("skyconImage", Skycons.RAIN);
    } else if ((code > 599) && (code < 623)) {
        //snow
        icons.set("skyconImage", Skycons.SNOW);
    } else if ((code > 700) && (code < 782)) {
        //atmosphere (i.e. mist, smoke, haze, fog)
        icons.set("skyconImage", Skycons.FOG);
    } else if ((code > 800) && (code < 805)) {
        //clouds
        icons.set("skyconImage", Skycons.CLOUDY);
    } else if ((code > 899) && (code < 907)) {
        //extreme weather
        icons.set("skyconImage", Skycons.WIND);
    } else {
        //clear sky
        icons.set("skyconImage", Skycons.CLEAR_DAY);
    }
    icons.play();
};