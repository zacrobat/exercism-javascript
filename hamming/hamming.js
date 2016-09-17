var Hamming = function(hamming) {
  this.hamming = hamming;
};

Hamming.prototype.compute = function(strand01, strand02) {
  var counter = 0;
  if (strand01.length !== strand02.length)
    throw new Error('DNA strands must be of equal length.');
  else
    for (var i = 0; i < strand01.length; i++)
      if (strand01[i] !== strand02[i])
      // if (strand01.charAt(i) !== strand02.charAt(i))
        counter++;
  return (counter);
};

module.exports = Hamming;
