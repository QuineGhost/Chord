var Chord = {
  root: "",
  chordMap: {"C": 1, "C#": 2, "D": 3,"D#": 4, "E": 5, "F": 6,
  "F#": 7, "G": 8, "G#": 9,"A": 10, "A#": 11, "B": 12},
  //コードの種類ごとに一般化されているイメージ
  //Major7th系のコードを返すメソッド
  makeMajorSeventh: function(root, range, extendetList) {
    switch(root) {
      case 'C':
      if(extendetList.indexOf('9') >= 0 &&
        extendetList.indexOf('11') === -1 &&
        extendetList.indexOf('13') === -1) {
          //9th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range, 'D' + (range+1)];
      } else if(extendetList.indexOf('9') === -1 &&
        extendetList.indexOf('11') >= 0 &&
        extendetList.indexOf('13') === -1) {
          //#11th
          return ['C' + range , 'E' + range, 'G' + range, 'B' + range, 'F#' + (range+1)];
      } else if(extendetList.indexOf('9') === -1 &&
        extendetList.indexOf('11') === -1 &&
        extendetList.indexOf('13') >= 0) {
        //13th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range, 'A' + range];
      } else if(extendetList.indexOf('9') >= 0 &&
        extendetList.indexOf('11') >= 0 &&
        extendetList.indexOf('13') === -1) {
        //9th + #11th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range,
        'D' + (range+1), 'F#' + (range+1)];
      } else if(extendetList.indexOf('9') >= 0 &&
        extendetList.indexOf('11') === -1 &&
        extendetList.indexOf('13') >= 0) {
        //9th + 13th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range,
        'D' + (range+1), 'A' + (range+1)];
      } else if(extendetList.indexOf('9') === -1 &&
        extendetList.indexOf('11') >= 0 &&
        extendetList.indexOf('13') >= 0) {
        //11th + 13th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range,
        'F#' + (range+1), 'A' + (range+1)];
      } else if(extendetList.indexOf('9') >= 0 &&
        extendetList.indexOf('11') >= 0 &&
        extendetList.indexOf('13') >= 0) {
        //9th + 11th + 13th
        return ['C' + range , 'E' + range, 'G' + range, 'B' + range,
        'D' + (range+1), 'F#' + (range+1), 'A' + (range+1)];
      }
      return ['C' + range , 'E' + range, 'G' + range, 'B' + range];
      break;
    }
  }
}
