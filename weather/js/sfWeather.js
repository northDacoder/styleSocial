$(document).ready(function () {

    var cityLat = 37.78;
    var cityLon = -122.42;

    $("#citySubmit").click(function() {
        var city = $("#city").val();
        var openweatherapi = "http://api.openweathermap.org/data/2.5/weather?q=";
        var cityUrl = "" + openweatherapi + city; 

        $.ajax({
            url: cityUrl,
            success: function (theWeather) {

                // Display the current city
                city = theWeather.name; 
                $("#cityName").text("  " + city); 

                // Get the current temp
                var far = Math.round(1.8 * (theWeather.main.temp - 273.15) + 32);
                var temp_max = theWeather.main.temp_max;
                var temp_min = theWeather.main.temp_min; 

                $("#temp_min").text("    " + temp_min +  "    ");
                $("#temp_max").text("    " + temp_max +  "    "); 

                // Test to see if the temp is less than 20 degrees & display message
                if (far < 40) {
                    $("#cityTemp").text("  " + far + " Better bundle up!");
                } else {
                    $("#cityTemp").text("  " + far + " Fahrenheit today"); 
                }

                // Get the current humidity
                var humidity = theWeather.main.humidity; 
                $("#cityHum").text("Current humidity: " + humidity); 

                // Get the Lat Long of the city
                cityLat = theWeather.coord.lat;
                cityLon = theWeather.coord.lon; 
                var cityCoord = [cityLat, cityLon];
                $("#cityCoord").text("  " + cityLat + ", " + cityLon); 
                initialize();
            }
        });
    }); 

    
    $("#city").keydown(function(e) {
        if (e.keyCode == 13) {
            var city = $("#city").val();
            var openweatherapi = "http://api.openweathermap.org/data/2.5/weather?q=";
            var cityUrl = "" + openweatherapi + city; 

            $.ajax({
                url: cityUrl,
                success: function (theWeather) {

                // Display the current city
                city = theWeather.name; 
                $("#cityName").text("  " + city); 

                // Get the current temp
                var far = Math.round(1.8 * (theWeather.main.temp - 273.15) + 32);
                var temp_max = theWeather.main.temp_max;
                var temp_min = theWeather.main.temp_min; 

                $("#temp_min").text("    " + temp_min +  "    ");
                $("#temp_max").text("    " + temp_max +  "    "); 

                // Test to see if the temp is less than 20 degrees & display message
                if (far < 40) {
                    $("#cityTemp").text("  " + far + " Better bundle up!");
                } else {
                    $("#cityTemp").text("  " + far + " Fahrenheit today"); 
                }

                // Get the current humidity
                var humidity = theWeather.main.humidity; 
                $("#cityHum").text("Current humidity: " + humidity); 

                // Get the Lat Long of the city
                cityLat = theWeather.coord.lat;
                cityLon = theWeather.coord.lon; 
                var cityCoord = [cityLat, cityLon];
                $("#cityCoord").text("  " + cityLat + ", " + cityLon); 
                initialize();
                }
            });
        }
    }); 

    function initialize() {

        var mapOptions = {
            center: new google.maps.LatLng(cityLat, cityLon),  //center: new google.maps.LatLng(37.78, -122.42)
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions);

        /*var marker = new google.maps.Marker({
            position: new google.maps.LatLng(parseFloat(cityLat), 
                                            parseFloat(cityLon),
            map: map,
            title: "new position",
        });*/

    }

    
    $(".instagram").instagram({
        userId: '4489780',
        clientId: '16de7c347c604761bcae480576af41e8',
        image_size:'standard_resolution'
    });


    google.maps.event.addDomListener(window, 'load', initialize);


});