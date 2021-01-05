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

  // function to get the unit
  this.getUnit = function(input) {
    let result;

    // look for the first index of alphabet
    let indexOfAlpha = input.serach(/[a-zA-Z]/gi);

    // slice from the first index of aplhabet to end of input and change it to be lowercase
    result = input.slice(indexOfAlpha).toLowerCase();

    // if there is space in unit
    if (result.split(" ") > 2) return "invalid unit";
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    var input = ["gal", "l", "mi", "km", "lbs", "kg"];
    var expect = ["L", "gal", "km", "mi", "kg", "lbs"];
    result = expect[input.indexOf(initUnit)];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    var input=['gal','l','mi','km','lbs','kg'];
    var expect=['gallons','liters','miles','kilometers','pounds','kilograms'];
    result=expect[input.indexOf(unit)];
    return result;
  };

  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lToGal = 0.26417;
    const lbsToKg = 0.45359;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.62137;
    let input = ['gal','l','mi','km','lbs','kg'];
    let convert = [galToL, lToGal, miToKm, kmToMi, lbsToKg, kgToLbs];
    result=initNum*convert[input.indexOf(initUnit)];
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    let initUnitFull=this.spellOutUnit()

    return result;
  };
}

module.exports = ConvertHandler;
