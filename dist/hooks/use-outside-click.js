"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = useOutsideClick;

var _react = require("react");

function useOutsideClick(_ref) {
  var ref = _ref.ref,
      handler = _ref.handler;
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener, false);
    document.addEventListener('touchstart', listener, false);
    return function () {
      document.removeEventListener('mousedown', listener, false);
      document.removeEventListener('touchstart', listener, false);
    };
  }, [ref, handler]);
}