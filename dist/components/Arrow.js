"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Arrow = function Arrow(_ref) {
  var _classNames;

  var isOpen = _ref.isOpen,
      arrowClassName = _ref.arrowClassName,
      arrowClosed = _ref.arrowClosed,
      arrowOpen = _ref.arrowOpen,
      baseClassName = _ref.baseClassName;
  var arrowClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(baseClassName, "-arrow"), true), (0, _defineProperty2["default"])(_classNames, arrowClassName, !!arrowClassName), _classNames));
  var arrow = isOpen ? arrowOpen : arrowClosed;
  return _react["default"].createElement("div", {
    className: "".concat(baseClassName, "-arrow-wrapper")
  }, arrowOpen && arrowClosed ? arrow : _react["default"].createElement("span", {
    className: arrowClass
  }));
};

Arrow.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS);
var _default = Arrow;
exports["default"] = _default;