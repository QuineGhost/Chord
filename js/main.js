$(document).ready(function() {
    var $chords = $(".chord");
    for(chord of $chords) {
        $("#volume").after($("<select>").append("<option>" + chord.textContent));
    }

    var freeverb = new Tone.Freeverb(0.9).toMaster();
    //create tone object
    var synth = new Tone.PolySynth(5, Tone.MonoSynth).connect(freeverb);
    synth.volume.value = -20;

    //get weather
    var weatherStatus = "";
    var volumeColor = "#008080";
    var temperature = "";
    var $volumeList = $(".volume-block");
    var currentOpacityList = [];
    var query = "select * from json where url = "
        + "'http://weather.livedoor.com/forecast/webservice/json/v1?city=130010'"

    $.getJSON("http://query.yahooapis.com/v1/public/yql?q="+query+"&format=json")
      .done(function(data) {
        var IdWeather = data.query.results.json;
        var IdWeatherNow = IdWeather.forecasts[0];
        var date = new Date();
        $('.id-title').text(date.toString() + ": Tokyo Current Weather");
        $('#weather_icon').attr("src", IdWeather.forecasts[0].image.url);
        weatherStatus = IdWeather.forecasts[0].telop;

        // set volume panel color
        volumeColor = setVolumePanelColor(weatherStatus);

        //volume panel create
        var opacityValue = 0.1;
        for(var i = 0; i < 10; i++) {
            $("#volume-" + i).css("background-color", volumeColor);
            $("#volume-" + i).css("opacity", (opacityValue));
            opacityValue = opacityValue + 0.1;
        }

        //volume-block opacity list
        var i = 0
        for(volume of $volumeList) {
            currentOpacityList[i] = volume.style.opacity;
            i++
        }
      })
      .fail(function(data) {
        console.dir(data);
      });

    //change volume level
    $volumeList.on('click', function() {
        var thisId = parseInt($(this).attr("id").slice(-1));

        switch(thisId) {
            case 0:
                synth.volume.value = -100;
                break;
            case 1:
                synth.volume.value = -90;
                break;
            case 2:
                synth.volume.value = -80;
                break;
            case 3:
                synth.volume.value = -70;
                break;
            case 4:
                synth.volume.value = -60;
                break;
            case 5:
                synth.volume.value = -50;
                break;
            case 6:
                synth.volume.value = -40;
                break;
            case 7:
                synth.volume.value = -30;
                break;
            case 8:
                synth.volume.value = -20;
                break;
        }

        //volume-panel background changes
        var nextId = thisId + 1;
        var preId = thisId - 1;
        var nexeOpacity = $("#volume-" + nextId.toString()).css("opacity");
        var preOpacity = $("#volume-" + preId.toString()).css("opacity");
        var rightElementOpacity = $("#volume-" + nextId.toString()).css("opacity");
        var leftElementOpacity = $("#volume-" + preId.toString()).css("opacity");

        //volume down
        if($(this).css("opacity") != "0" ) {
            for(var i = thisId+1; i < $volumeList.length; i++) {
                $("#volume-" + i.toString()).css("opacity", "0.0");
            }
            //volume up
        } else if($(this).css("opacity") === "0"){
            for(var i = 0; i < thisId + 1; i++) {
                if(thisId != 10) {
                    $("#volume-" + i.toString()).css("opacity", currentOpacityList[i]);
                }
            }
        }
    });

    //Chord Section
    var $aMode = $('#aMode'),
        $bMode = $('#bMode');
    $(window).keydown(function(e) {
      var keyState = e.metaKey && e.ctrlKey && e.keyCode;
      //cmd+ctrl+A
      if(keyState === 65) {
        if($aMode[0].checked) {
          $aMode[0].checked = false;
        } else {
          $aMode[0].checked = true;
          $bMode[0].checked = false;
        }
        //cmd+ctrl+B
      } else if (keyState === 66) {
        if($bMode[0].checked) {
          $bMode[0].checked = false;
        } else {
          $bMode[0].checked = true;
          $aMode[0].checked = false;
        }
      }

      if($aMode[0].checked && !$bMode[0].checked) {
        try {
            switch(keyState) {
              case 37:
              console.log($("#left-chord").text().substr(0, 1));
                synth.triggerAttackRelease(Chord.makeMajorSeventh(
                    $("#left-chord").text().substr(0, 1), 4, ['9', '11', '13']), '18n');
                break;
              case 38:
              console.log($("#top-chord").text().substr(0, 1));
                synth.triggerAttackRelease(Chord.makeMajorSeventh(
                     $("#top-chord").text().substr(0, 1), 2, ['9', '11', '13']), '4n');
                break;
              case 39:
              console.log($("#right-chord").text().substr(0, 1));
                synth.triggerAttackRelease(Chord.makeMajorSeventh(
                    $("#right-chord").text().substr(0, 1), 4, ['9', '11', '13']), '18n');
                break;
              case 40:
              console.log($("#bottom-chord").text().substr(0, 1));
                synth.triggerAttackRelease(Chord.makeMajorSeventh(
                    $("#bottom-chord").text().substr(0, 1), 4, ['9', '11', '13']), '18n');
                break;
            }
        } catch(e) {
            console.log(e);
        }
      }
    });

    function setVolumePanelColor(status) {
        if(status.search(/曇|くもり/g) != -1){
            return "#a9a9a9";
        } else if(status.search(/晴|はれ/g) != 1) {
            return "#ff7f50";
        } else if(status.search(/雨|あめ/g) != 1) {
            return "#6495ed";
        }
    };
});
