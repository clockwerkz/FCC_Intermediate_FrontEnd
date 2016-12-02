const apiKey = "1a4f97ef098818cd32c2f6eac963d1dc";
const weatherIcon = "http://openweathermap.org/img/w/";
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139

const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?";

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


/* navigator.geolocation.getCurrentPosition(function(pos){
  console.log(pos.coords.latitude+"  "+pos.coords.longitude);
  $.getJSON(weatherAPI+"lat="+pos.coords.latitude+"&lon="+pos.coords.longitude+"&units=imperial&APPID="+apiKey, function(data) {
    $(".cityName").html("City: "+data.name);
    $(".weatherStatus").attr("src",weatherIcon+data.weather[0].icon+".png");
    document.getElementById("temperature").innerHTML+=data.main.temp+"&deg";
  });
}); */

document.getElementById("cityName").innerHTML=testResult.name;
document.getElementById("weatherIcon").setAttribute("src",weatherIcon+testResult.weather[0].icon+".png");
document.getElementById("temperature").innerHTML=testResult.main.temp+"&deg";


function changeDegrees() {
    console.log("Degrees changed.");
}



