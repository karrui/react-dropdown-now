"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOptionsValue = exports.parseOptionValue = exports.getOptionValue = exports.getOptionLabel = exports.getOptionName = exports.isValidLabelOrValue = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isValidLabelOrValue = function isValidLabelOrValue(value) {
  return /string|boolean|number/.test((0, _typeof2["default"])(value));
};

exports.isValidLabelOrValue = isValidLabelOrValue;

var getOptionName = function getOptionName(option) {
  return option.name;
};

exports.getOptionName = getOptionName;

var getOptionLabel = function getOptionLabel(option) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : option;

  if (isValidLabelOrValue(option.label)) {
    return option.label;
  }

  if (isValidLabelOrValue(option.value)) {
    return option.value;
  }

  return label;
};

exports.getOptionLabel = getOptionLabel;

var getOptionValue = function getOptionValue(option) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : option;

  if (isValidLabelOrValue(option.value)) {
    return option.value;
  }

  if (isValidLabelOrValue(option.label)) {
    return option.label;
  }

  return value;
};

exports.getOptionValue = getOptionValue;

var parseOptionValue = function parseOptionValue(option, value) {
  var optionValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (option.type === 'group') {
    var match = option.items.filter(function (item) {
      return item.value === value;
    });

    if (match.length) {
      return match[0];
    }
  } else if (isValidLabelOrValue(option.value) && getOptionValue(option) === value) {
    return option;
  }

  return optionValue;
};

exports.parseOptionValue = parseOptionValue;

var parseOptionsValue = function parseOptionsValue(options, value) {
  if (typeof value === 'string') {
    for (var i = options.length, optionValue; i--;) {
      optionValue = parseOptionValue(options[i], value);

      if (optionValue !== null) {
        return optionValue;
      }
    }
  }

  return value;
};

exports.parseOptionsValue = parseOptionsValue;