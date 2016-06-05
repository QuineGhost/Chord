var Chord = {
  root: "",
  chordMap: {1: "C", 2: "C#", 3: "D",4: "D#", 5: "E", 6: "F",
  7: "F#", 8: "G", 9: "G#",10: "A", 11: "A#", 12: "B"},
  //コードの種類ごとに一般化されているイメージ
  //Major7th系のコードを返すメソッド
  makeMajorSeventh: function(root, octave, extendedList) {
    var chord = this;
    switch(root) {
      case 'C':
      if(extendedList.indexOf('9') >= 0 &&
        extendedList.indexOf('11') === -1 &&
        extendedList.indexOf('13') === -1) {
          //9th
        return [chord.chordMap[1] + octave,
            chord.chordMap[5] + octave,
            chord.chordMap[8] + octave,
            chord.chordMap[12] + octave,
            chord.chordMap[3] + (octave+1)];
    } else if(extendedList.indexOf('9') === -1 &&
        extendedList.indexOf('11') >= 0 &&
        extendedList.indexOf('13') === -1) {
          //#11th
          return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave, 'F#' + (octave+1)];
      } else if(extendedList.indexOf('9') === -1 &&
        extendedList.indexOf('11') === -1 &&
        extendedList.indexOf('13') >= 0) {
        //13th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave, 'A' + octave];
    } else if(extendedList.indexOf('9') >= 0 &&
        extendedList.indexOf('11') >= 0 &&
        extendedList.indexOf('13') === -1) {
        //9th + #11th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave,
        'D' + (octave+1), 'F#' + (octave+1)];
    } else if(extendedList.indexOf('9') >= 0 &&
        extendedList.indexOf('11') === -1 &&
        extendedList.indexOf('13') >= 0) {
        //9th + 13th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave,
        'D' + (octave+1), 'A' + (octave+1)];
    } else if(extendedList.indexOf('9') === -1 &&
        extendedList.indexOf('11') >= 0 &&
        extendedList.indexOf('13') >= 0) {
        //11th + 13th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave,
        'F#' + (octave+1), 'A' + (octave+1)];
    } else if(extendedList.indexOf('9') >= 0 &&
        extendedList.indexOf('11') >= 0 &&
        extendedList.indexOf('13') >= 0) {
        //9th + 11th + 13th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave,
        'D' + (octave+1), 'F#' + (octave+1), 'A' + (octave+1)];
      }
      return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave];
      break;
    }
  }
}
