$(document).ready(function(){




    function operation(lat, lon){

	
	var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat + '&lon=' + lon + '&appid=d3cddc39c8389212f004085ec4ba3be8';

    	$.getJSON(api, function(json){
        	var t = json.main.temp;
        	$(".temp").html(Math.floor(t - 273));
        	//$("#tempf").{setTemp(Math.floor(json.main.temp - 273))};
        	$(".wind").html(json.wind.speed);
        	$(".pressure").html(json.main.pressure);
        	$(".humidity").html(json.main.humidity);
        	$(".place").html(json.name + ", " + json.sys.country);
        	$(".date").html(json.dt);
        	$(".condition").html(json.weather.main);
        	$(".image").html(json.icon);

    		});
    	}


 /*   var x =false;
    function setTemp(t)
	{
    if(x)
    	{
        	$("#temp").html(t);
        	$("#tempf").html("Celcius");
        	x = false;
    	}
    else
    	{
        	$("#temp").html(t * 9 / 5 + 32);
        	$("#tempf").html("Farhaneit");
        	x = true;
    	}
	}
*/

    var lon;
    var lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(pos){
            lon = pos.coords.longitude;
            lat = pos.coords.latitude;
            operation(lat, lon);
        	});
    }

});
