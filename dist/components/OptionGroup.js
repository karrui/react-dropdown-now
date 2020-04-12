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

var _helpers = require("../helpers");

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OptionGroup = function OptionGroup(_ref) {
  var option = _ref.option,
      selected = _ref.selected,
      onSelect = _ref.onSelect,
      className = _ref.className,
      baseClassName = _ref.baseClassName,
      startTabIndex = _ref.startTabIndex;

  var groupTitle = _react["default"].createElement("div", {
    className: "".concat(baseClassName, "-title")
  }, option.name);

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(baseClassName, "-group"), className),
    key: option.name,
    role: "listbox",
    tabIndex: "-1"
  }, groupTitle, option.items.map(function (item, i) {
    return _react["default"].createElement(_Option["default"], {
      option: item,
      key: (0, _helpers.getOptionValue)(item),
      selected: selected,
      onSelect: onSelect,
      baseClassName: baseClassName,
      tabIndex: startTabIndex + i,
      className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, item.className, !!item.className))
    });
  }));
};

OptionGroup.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS);
var _default = OptionGroup;
exports["default"] = _default;