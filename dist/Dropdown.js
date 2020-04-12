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

var _useOnclickoutside = _interopRequireDefault(require("use-onclickoutside"));

var _Menu = _interopRequireDefault(require("./components/Menu"));

var _Arrow = _interopRequireDefault(require("./components/Arrow"));

var _helpers = require("./helpers");

var _constants = require("./constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Dropdown(_ref) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var placeholder = _ref.placeholder,
      options = _ref.options,
      value = _ref.value,
      disabled = _ref.disabled,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      baseClassName = _ref.baseClassName,
      controlClassName = _ref.controlClassName,
      placeholderClassName = _ref.placeholderClassName,
      menuClassName = _ref.menuClassName,
      arrowClassName = _ref.arrowClassName,
      arrowClosed = _ref.arrowClosed,
      arrowOpen = _ref.arrowOpen,
      className = _ref.className,
      noOptionsDisplay = _ref.noOptionsDisplay;

  var _useState = (0, _react.useState)((0, _helpers.parseOptionsValue)(options, value) || {
    label: typeof placeholder === 'undefined' ? _constants.DEFAULT_PLACEHOLDER_STRING : placeholder,
    value: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var dropdownNode = (0, _react.useRef)();

  var handleOpenStateEvents = function handleOpenStateEvents(dropdownIsOpen, closedBySelection) {
    if (dropdownIsOpen && typeof onOpen === 'function') {
      onOpen();
    }

    if (!dropdownIsOpen && typeof onClose === 'function') {
      onClose(!!closedBySelection);
    }
  };

  (0, _useOnclickoutside["default"])(dropdownNode, function () {
    if (isOpen) {
      setIsOpen(false);
      handleOpenStateEvents(false);
    }
  });

  var handleMouseDown = function handleMouseDown(event) {
    if (typeof onFocus === 'function') {
      onFocus(isOpen);
    }

    if (event.type === 'mousedown' && event.button !== 0) return;
    event.stopPropagation();
    event.preventDefault();

    if (!disabled) {
      var newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      handleOpenStateEvents(newIsOpen);
    }
  };

  var fireChangeEvent = function fireChangeEvent(newSelectedState) {
    if (newSelectedState !== selected && onChange) {
      onChange(newSelectedState);
    }
  };

  var setValue = function setValue(newValue, newLabel) {
    var newSelectedState = (0, _helpers.parseOptionsValue)(options, newValue) || {
      value: newValue,
      label: newLabel
    };
    fireChangeEvent(newSelectedState);
    setSelected(newSelectedState);
    setIsOpen(false);
    handleOpenStateEvents(false, true);
  };

  var isValueSelected = function isValueSelected() {
    return Boolean(typeof selected === 'string' || selected.value !== '');
  };

  var disabledClass = disabled ? "".concat(baseClassName, "-disabled") : '';
  var placeHolderValue = typeof selected === 'string' ? selected : selected.label;
  var dropdownClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(baseClassName, "-root"), true), (0, _defineProperty2["default"])(_classNames, className, !!className), (0, _defineProperty2["default"])(_classNames, 'is-open', isOpen), _classNames));
  var controlClass = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(baseClassName, "-control"), true), (0, _defineProperty2["default"])(_classNames2, controlClassName, !!controlClassName), (0, _defineProperty2["default"])(_classNames2, disabledClass, !!disabledClass), _classNames2));
  var placeholderClass = (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(baseClassName, "-placeholder"), true), (0, _defineProperty2["default"])(_classNames3, placeholderClassName, !!placeholderClassName), (0, _defineProperty2["default"])(_classNames3, 'is-selected', isValueSelected()), _classNames3));
  var menuClass = (0, _classnames["default"])((_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(baseClassName, "-menu"), true), (0, _defineProperty2["default"])(_classNames4, menuClassName, !!menuClassName), _classNames4));

  var valueDisplay = _react["default"].createElement("div", {
    className: placeholderClass
  }, placeHolderValue);

  var menu = isOpen ? _react["default"].createElement("div", {
    className: menuClass,
    "aria-expanded": "true"
  }, _react["default"].createElement(_Menu["default"], {
    selected: selected,
    options: options,
    baseClassName: baseClassName,
    noOptionsDisplay: noOptionsDisplay,
    onSelect: function onSelect(e, selectedValue, label) {
      return setValue(selectedValue, label);
    }
  })) : null;
  return _react["default"].createElement("div", {
    className: dropdownClass,
    ref: dropdownNode
  }, _react["default"].createElement("div", {
    role: "presentation",
    className: controlClass,
    onMouseDown: handleMouseDown,
    onTouchEnd: handleMouseDown,
    "aria-haspopup": "listbox"
  }, valueDisplay, _react["default"].createElement(_Arrow["default"], {
    isOpen: isOpen,
    baseClassName: baseClassName,
    arrowClassName: arrowClassName,
    arrowClosed: arrowClosed,
    arrowOpen: arrowOpen
  })), menu);
}

Dropdown.defaultProps = _objectSpread({}, _constants.BASE_DEFAULT_PROPS, {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
});
var _default = Dropdown;
exports["default"] = _default;