"use strict";

function solve(area, vol, dataAsJSON) {
  var figures = JSON.parse(dataAsJSON); // console.log(area.call(figures[1]));
  // console.log(vol.call(figures[1]));

  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = figures[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var figure = _step.value;
      var objArea = area.call(figure);
      var objVolume = vol.call(figure);
      var output = {
        area: objArea,
        vol: objVolume
      };
      result.push(output);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

var example1 = "[\n    {\"x\":\"1\",\"y\":\"2\",\"z\":\"10\"},    \n    {\"x\":\"7\",\"y\":\"7\",\"z\":\"10\"},    \n    {\"x\":\"5\",\"y\":\"2\",\"z\":\"10\"}]";
console.log(solve(area, vol, example1));

function area() {
  return Math.abs(this.x * this.y);
}

;

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

;