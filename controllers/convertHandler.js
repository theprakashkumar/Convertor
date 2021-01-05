/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  //   function to the nuber from input
  this.getNum = function(input) {
    // look for first alphabet so that we can find the end of nuber
    let indexOfNums = input.search(/[a-zA-Z]/);

    let result;
    // if there is not a alphabet then set result to 1 else result will the number before the alphabet
    indexOfNums === -1
      ? (result = 1)
      : (result = input.substring(0, indexOfNums));

    // if the length of reuslt is zero then result will be 1
    if (result.lenght === 0) result = 1;

    // if there is more than on "/" then return "invalid number"
    if (result.split("/").length > 2) return "invalid number";

    // if there is more than one decimal then return "invalid number"
    if (result.split(".").lenght > 2) return "invalid number";

    return result;
  };

//   function to get the unit
  this.getUnit = function(input) {
    let result;
    
//     look for the first index of alphabet
    let indexOfAl

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
