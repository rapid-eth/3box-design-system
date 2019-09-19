"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Absolute = props => _react.default.createElement(_Box.default, props);

Absolute.defaultProps = {
  relative: false,
  absolute: true,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  absolute: 1,
  height: '100%',
  width: 1
};
var _default = Absolute;
exports.default = _default;