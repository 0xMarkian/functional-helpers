"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var iterate = exports.iterate = function iterate(_ref, callback) {
  var _ref$max = _ref.max,
      max = _ref$max === undefined ? 0 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 0 : _ref$min,
      _ref$step = _ref.step,
      step = _ref$step === undefined ? 1 : _ref$step,
      _ref$decrease = _ref.decrease,
      decrease = _ref$decrease === undefined ? false : _ref$decrease,
      _ref$includeLimits = _ref.includeLimits,
      includeLimits = _ref$includeLimits === undefined ? true : _ref$includeLimits;
  var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!includeLimits && max === min) return [];

  var decreaseIter = function decreaseIter(i, acc) {
    if (includeLimits && i < min || !includeLimits && i <= min) return acc;

    return decreaseIter(i - 1, callback(i, acc));
  };

  var increaseIter = function increaseIter(i, acc) {
    if (includeLimits && i > max || !includeLimits && i >= max) return acc;

    return increaseIter(i + 1, callback(i, acc));
  };

  if (decrease) return decreaseIter(max, initialValue);
  return increaseIter(min, initialValue);
};

var storeConsts = exports.storeConsts = function storeConsts() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args[args.length - 1].apply(args, _toConsumableArray(args.slice(0, args.length)));
};
