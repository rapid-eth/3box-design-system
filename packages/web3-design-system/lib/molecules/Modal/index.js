"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lib = require("react-context-portal/lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */

/* --- Local Dependencies --- */
var _default = (_ref) => {
  var {
    content,
    children
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_lib.PortalProvider, null, _react.default.createElement("span", {
    onClick: () => _lib.PortalApi.open(content, 'modal')
  }, children)));
};

exports.default = _default;