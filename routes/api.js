/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    console.log("se");

    if (initNum === "invalid number") {
      console.log("invalid number")
      if(initUnit === "invalid unit"){
        console.log("invalid number and unt")
        res.json("invalid number and unit");
      }
      res.json("invalid number");
    } else if (initUnit === "invalid unit") {
      console.log("invalid unit")
      res.json("invalid unit");
    } else {
      console.log("else ran");
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      });
    }
  });
};
