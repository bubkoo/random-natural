'use strict';


var clamp     = require('clamp');
var randomInt = require('random-integral');

var MAX_SAFE_INTEGER = 9007199254740991;

function fixme(val) {

  if (typeof val !== 'number') {
    val = parseInt(val, 10);
  }

  val = isNaN(val) || !isFinite(val) ? 0 : val;

  return clamp(val, 0, MAX_SAFE_INTEGER);

}

module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = 0;
    max = MAX_SAFE_INTEGER;
  } else if (length === 1) {
    max = fixme(min);
    min = 0;
  } else {
    min = fixme(min);
    max = fixme(max);
  }

  return randomInt(min, max);
};
