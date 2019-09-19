"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _rebass = require("rebass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    text-transform: uppercase;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 !important;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px 8px 0 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 0 8px 8px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 99999px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n&:hover {\n  box-shadow: ", ";\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  background: ", ";\n  background-image: -webkit-linear-gradient(", "deg , ", ");\n  background-image: linear-gradient(", "deg , ", " );\n  ", "\n  border-radius: 5px;\n  padding: 15.5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", ";\n\n", "\n\n", ";\n\n", ";\n\n", ";\n\n", ";\n", ";\n\n\n", ";\n", ";\n", ";\n\n  /***************************** text align *****************************/\n  ", ";\n  ", ";\n  ", ";\n\n  /***************************** Gradient *****************************/\n  ", "\n  &:hover {\n    ", "\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = (0, _styledComponents.default)(_rebass.Box)(_templateObject(), (0, _styledIs.default)('card')(_templateObject2(), props => props.theme.gradient['white'][0], props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => "box-shadow: ".concat(props.theme.shadows[0], ";")), (0, _styledIs.default)('shadowMedium')(_templateObject3(), props => "box-shadow: ".concat(props.theme.shadows[4], ";")), (0, _styledIs.default)('cardHover')(_templateObject4(), props => (0, _idx.default)(props, _ => _.theme.shadows['lightHover'])), (0, _styledIs.default)('pointer')(_templateObject5()), (0, _styledIs.default)('curved')(_templateObject6()), (0, _styledIs.default)('rounded')(_templateObject7()), (0, _styledIs.default)('circle')(_templateObject8()), (0, _styledIs.default)('borderBottom')(_templateObject9()), (0, _styledIs.default)('borderTop')(_templateObject10()), (0, _styledIs.default)('borderNone')(_templateObject11()), (0, _styledIs.default)('uppercase')(_templateObject12()), (0, _styledIs.default)('textCenter')(_templateObject13()), (0, _styledIs.default)('textRight')(_templateObject14()), props => props.gradient && (0, _idx.default)(props, _ => _.theme.gradient[props.gradient]) ? "\n      background: ".concat(props.theme.gradient[props.gradient][0], ";\n      background-image: -webkit-linear-gradient(").concat(props.gradientDir ? props.gradientDir : '-90', "deg , ").concat(props.theme.gradient[props.gradient], ");\n      background-image: linear-gradient(").concat(props.gradientDir ? props.gradientDir : '-90', "deg , ").concat(props.theme.gradient[props.gradient], ")\n      ") : null, props => (0, _idx.default)(props, _ => _.hover.boxShadow) && "box-shadow: ".concat(props.theme.shadows[props.hover.boxShadow], ";"), props => (0, _idx.default)(props, _ => _.hover.zIndex) > 0 && "z-index: ".concat(props.hover.zIndex));
var _default = Box;
exports.default = _default;