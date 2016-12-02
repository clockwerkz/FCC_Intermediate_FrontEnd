const apiKey = "1a4f97ef098818cd32c2f6eac963d1dc";
var currentTemp = [];
farenheit = true;
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139

const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
var icons = new Skycons({"color":"orange"});

/*
var testResult = {"coord":{"lon":139,"lat":35},
                    "sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
                    "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
                    "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
                    "wind":{"speed":7.31,"deg":187.002},
                    "rain":{"3h":0},
                    "clouds":{"all":92},
                    "dt":1369824698,
                    "id":1851632,
                    "name":"Shuzenji",
                    "cod":200};
*/

 navigator.geolocation.getCurrentPosition(function(pos){
  console.log(pos.coords.latitude+"  "+pos.coords.longitude);
  $.getJSON(weatherAPI+"lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&units=imperial&APPID="+apiKey, function(data) {
    document.getElementById("cityName").innerHTML=data.name;
    currentTemp.push(data.main.temp);
    currentTemp.push((data.main.temp-32) / (9/5))
    document.getElementById("temperature").innerHTML=currentTemp[0].toFixed(1)+"&deg F";
    getConditionImage(data.weather[0].id);
  });
});
/*
document.getElementById("cityName").innerHTML=testResult.name;
document.getElementById("weatherIcon").setAttribute("src",weatherIcon+testResult.weather[0].icon+".png");
currentTemp.push(testResult.main.temp);
currentTemp.push((testResult.main.temp-32) / (9/5))
document.getElementById("temperature").innerHTML=currentTemp[0].toFixed(1)+"&deg F";
*/

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



