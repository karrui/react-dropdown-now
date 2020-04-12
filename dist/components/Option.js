"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../helpers");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isOptionSelected(currentValue, selection) {
  if (!selection) {
    return false;
  }

  return currentValue === (0, _helpers.getOptionValue)(selection);
}

var Option = function Option(_ref) {
  var _classNames;

  var option = _ref.option,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      className = _ref.className,
      baseClassName = _ref.baseClassName,
      tabIndex = _ref.tabIndex;
  var value = (0, _helpers.getOptionValue)(option);
  var label = (0, _helpers.getOptionLabel)(option);
  var isSelected = isOptionSelected(value, selected);
  var optionClassName = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(baseClassName, "-option"), true), (0, _defineProperty2["default"])(_classNames, 'is-selected', isSelected), _classNames));

  var handleSelect = function handleSelect(e) {
    return onSelect(e, value, label);
  };

  return _react["default"].createElement("div", {
    className: optionClassName.trim(),
    onKeyDown: handleSelect,
    onMouseDown: handleSelect,
    onClick: handleSelect,
    role: "option",
    "aria-selected": String(isSelected),
    tabIndex: tabIndex
  }, label);
};

Option.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS, {
  tabIndex: -1
});
var _default = Option;
exports["default"] = _default;