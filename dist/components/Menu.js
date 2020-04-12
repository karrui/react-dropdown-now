"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Option = _interopRequireDefault(require("./Option"));

var _OptionGroup = _interopRequireDefault(require("./OptionGroup"));

var _helpers = require("../helpers");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var setNextTabIndexFunction = function setNextTabIndexFunction() {
  var startIndex = 0;
  return function () {
    var nextStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var index = startIndex;
    startIndex += nextStart;
    return index;
  };
};

var Menu = function Menu(_ref) {
  var selected = _ref.selected,
      baseClassName = _ref.baseClassName,
      options = _ref.options,
      onSelect = _ref.onSelect,
      noOptionsDisplay = _ref.noOptionsDisplay;
  var setNextTabIndex = setNextTabIndexFunction();

  if (options.length === 0) {
    return _react["default"].createElement("div", {
      className: "".concat(baseClassName, "-noresults")
    }, noOptionsDisplay);
  }

  return options.map(function (option) {
    return option.type === 'group' ? _react["default"].createElement(_OptionGroup["default"], {
      key: (0, _helpers.getOptionName)(option),
      option: option,
      selected: selected,
      onSelect: onSelect,
      startTabIndex: setNextTabIndex(option.items.length)
    }) : _react["default"].createElement(_Option["default"], {
      key: (0, _helpers.getOptionValue)(option),
      option: option,
      selected: selected,
      onSelect: onSelect,
      tabIndex: setNextTabIndex(),
      className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, option.className, !!option.className))
    });
  });
};

Menu.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS, {
  noOptionsDisplay: 'No options found'
});
var _default = Menu;
exports["default"] = _default;