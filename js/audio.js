$(document).ready(function() {
    var $chords = $(".chord");
    for(chord of $chords) {
        $("#volume").after($("<select>").append("<option>" + chord.textContent));
    }

    //create tone object
    var synth = new Tone.PolySynth(5, Tone.MonoSynth).toMaster();
    synth.volume.value = -20;

    //volume-panel bkg create
    var opacityValue = 0.1;
    for(var i = 0; i < 9; i++) {
        $("#volume-" + i).css("background-color", "#008080");
        $("#volume-" + i).css("opacity", (opacityValue + 0.1));
        opacityValue = opacityValue + 0.1;
    }

    //volume opacity
    var $volumeList = $(".volume-block");
    var currentOpacityList = [];
    var i = 0
    for(volume of $volumeList) {
        currentOpacityList[i] = volume.style.opacity;
        i++
    }

    //volume change
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

        //ボリュームブロック背景色変更
        var nextId = thisId + 1;
        var preId = thisId - 1;
        var nexeOpacity = $("#volume-" + nextId.toString()).css("opacity");
        var preOpacity = $("#volume-" + preId.toString()).css("opacity");
        var rightElementOpacity = $("#volume-" + nextId.toString()).css("opacity");
        var leftElementOpacity = $("#volume-" + preId.toString()).css("opacity");

        if($(this).css("opacity") != "0" ) {
            for(var i = thisId; i < $volumeList.length; i++) {
                $("#volume-" + i.toString()).css("opacity", "0.0");
            }
        } else if($(this).css("opacity")){
            for(var i = 0; i < thisId + 1; i++) {
                if(thisId != 9) {
                    $("#volume-" + i.toString()).css("opacity", currentOpacityList[i]);
                }
            }
        }
    });

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
                synth.triggerAttackRelease(
                Chord.makeMajorSeventh("C", 4, ['9', '11', '13']), '24n');
                break;
              case 38:
                var fMajorSeventh = ['F3', 'A3', 'C4', 'E4', 'G4'];
                synth.triggerAttackRelease(fMajorSeventh, '24n');
                break;
              case 39:
                var gMajorSeventh = ['Bb3', 'C4', 'D4', 'F4', 'A4'];
                synth.triggerAttackRelease(gMajorSeventh, '24n');
                break;
              case 40:
                var D = ['D2'];
                synth.triggerAttackRelease(D, '24n');
                break;
            }
        } catch(e) {
            console.log(e);
        }
      }
    });
});
