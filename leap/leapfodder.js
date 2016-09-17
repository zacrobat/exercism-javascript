// var Year = function(year) {
//   this.year = year;
// };
//
// Year.prototype.isLeap = function() {
//   var year = this.year;
//   if (year % 4 === 0 && year % 100 !== 0 | year % 400 === 0) {
//     return true;
//   }
//   return false;
// };
//
// module.exports = Year;

// Since the result of year % 4 === 0 && year % 100 !== 0 | year % 400 === 0 is going to be either true or `false, you can just return that without the conditional.
// var year = this.year;
// return year % 4 === 0 && year % 100 !== 0 |

//NEXT:
// var leap = function(year) {
//   this.year = year;
// };
//
// leap.prototype.isLeap = function() {
//   var year = this.year;
//   var divBy4 = year % 4 === 0;
//   var divBy100 = year % 100 === 0;
//   var divBy400 = year % 400 === 0;
//
//   if (divBy4 && !divBy100 || divBy400) {
//     return true;
//   }
//
//   return false;
// };
//
// module.exports = leap;

//NEXT http://exercism.io/submissions/50b65b646ded47fca7859609c55dcbf1 BY marocchino

// module.exports = class Year {
//   constructor(year) {
//     this.year = year;
//   }
//
//   isLeap() {
//     const year = this.year
//     return year % 4 === 0 &&
//       (year % 100 !== 0 || year % 400 === 0)
//   }
// };
