var Chord = {
  root: "",
  chordMap: {"C": 1, "C#": 2, "D": 3,"D#": 4, "E": 5, "F": 6,
  "F#": 7, "G": 8, "G#": 9,"A": 10, "A#": 11, "B": 12},
  //コードの種類ごとに一般化されているイメージ
  //Major7th系のコードを返すメソッド
  makeMajorSeventh: function(root, octave, extendedList) {
    switch(root) {
      case 'C':
      if(extendedList.indexOf('9') >= 0 &&
        extendedList.indexOf('11') === -1 &&
        extendedList.indexOf('13') === -1) {
          //9th
        return ['C' + octave , 'E' + octave, 'G' + octave, 'B' + octave, 'D' + (octave+1)];
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
