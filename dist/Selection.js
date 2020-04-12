"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var _helpers = require("./helpers");

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Selection(_ref) {
  var _classNames;

  var options = _ref.options,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      baseClassName = _ref.baseClassName,
      className = _ref.className,
      noOptionsDisplay = _ref.noOptionsDisplay;

  var _useState = (0, _react.useState)((0, _helpers.parseOptionsValue)(options, value)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var fireChangeEvent = function fireChangeEvent(newSelectedState) {
    if (newSelectedState !== selected && onChange) {
      onChange(newSelectedState);
    }
  };

  var setValue = function setValue(newValue, newLabel) {
    if (disabled) {
      return null;
    }

    var newSelectedState = (0, _helpers.parseOptionsValue)(options, newValue) || {
      value: newValue,
      label: newLabel
    };
    fireChangeEvent(newSelectedState);
    return setSelected(newSelectedState);
  };

  var menuClass = (0, _classnames["default"])('Selection-menu', (_classNames = {}, (0, _defineProperty2["default"])(_classNames, className, !!className), (0, _defineProperty2["default"])(_classNames, "".concat(baseClassName, "-menu"), true), (0, _defineProperty2["default"])(_classNames, "".concat(baseClassName, "-disabled"), disabled), _classNames));
  return _react["default"].createElement("div", {
    className: menuClass
  }, _react["default"].createElement(_Menu["default"], {
    selected: selected,
    options: options,
    baseClassName: baseClassName,
    noOptionsDisplay: noOptionsDisplay,
    onSelect: function onSelect(e, selectedValue, label) {
      return setValue(selectedValue, label);
    }
  }));
}

Selection.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS, {
  onChange: function onChange() {}
});
var _default = Selection;
exports["default"] = _default;