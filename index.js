'use strict';


var clamp        = require('clamp');
var toInteger    = require('to-integer');
var randomInt    = require('random-integral');
var MAX_SAFE_INT = require('max-safe-int');

function fixme(val, min) {

  if (typeof val !== 'number') {
    val = toInteger(val);
  }

  if (isNaN(val) || !isFinite(val)) {
    val = min ? 0 : MAX_SAFE_INT;
  }

  return clamp(val, 0, MAX_SAFE_INT);
}

module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {

    min = 0;
    max = MAX_SAFE_INT;

  } else if (length === 1) {

    max = fixme(min, false);
    min = 0;

  } else {

    min = fixme(min, true);
    max = fixme(max, false);

  }

  return randomInt(min, max);
};
