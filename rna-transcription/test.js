var DnaTranscriber = function() {

  DnaTranscriber.prototype.toRna = function(string) {
    var newString = '';

    for (var i = 0; i < string.length; i++) {
      if (string[i] === 'G') {
        newString = newString + 'C';
      } else if (string[i] === 'C') {
        newString = newString + 'G';
      } else if (string[i] === 'T') {
        newString = newString + 'A';
      } else if (string[i] === 'A') {
        newString = newString + 'U';
      }
    }
    return newString;

  };
};

module.exports = DnaTranscriber;
console.log(DnaTranscriber.toRna);
console.log("hello world");
