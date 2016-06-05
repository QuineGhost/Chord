var query = "select * from json where url = 'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010'"

$.getJSON("http://query.yahooapis.com/v1/public/yql?q="+query+"&format=json")
  .done(function(data) {
    var IdWeather = data.query.results.json;
    var IdWeatherNow = IdWeather.forecasts[0];
    var date = new Date();

    $('.id-title').text(date.toString() + ": Tokyo Current Weather");
    $('#weather_icon').attr("src", IdWeather.forecasts[0].image.url);
  })
  .fail(function(data) {
    console.dir(data);
  });
