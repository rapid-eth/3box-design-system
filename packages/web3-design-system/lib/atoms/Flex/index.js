"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledBreakpoints = require("styled-breakpoints");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      flex: 1;\n      width: 22%;\n      margin-right: 30px;\n    }\n    & > *:nth-child(4) {\n      margin-right: 0;\n    }\n    & > *:nth-child(n+5) {\n      margin-top: 30px;\n    }\n\n    ", " {\n      flex-wrap: wrap;\n      & > * {\n        width: 45%;\n        margin-right: 30px;\n      }\n      & > *:nth-child(2) {\n        margin-right: 0;\n      }\n\n      & > *:nth-child(n+3) {\n        margin-top: 20px;\n      }\n    }\n\n    ", " {\n      & > * {\n        margin: 0;\n        width: 100% !important;\n      }\n      & > *:nth-child(n+1) {\n        margin-top: 10px;\n      }\n    }\n  "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      width: 30%;\n      margin-right: 5%;\n    }\n    & > *:nth-child(3n) {\n      // align-self: flex-end;\n      margin-right: 0;\n    }\n    & > *:nth-child(n+4) {\n      margin-top: 50px;\n    }\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      flex: 1;\n      width: 45%;\n      margin-right: 5%;\n      max-width: 50%;\n    }\n    & > *:nth-child(2n) {\n      margin-right: 0;\n    }\n\n    & > *:nth-child(n+3) {\n      margin-top: 20px;\n    }\n    \n    & > *:nth-child(n+3):last-of-type {\n      margin-right: 50px;\n    }\n\n    ", " {\n      & > * {\n        margin: 0;\n        width: 100;\n      }\n    }\n\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    justify-content: center;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-evenly;\n  "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    align-items: stretch;\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    align-items: baseline;\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    align-items: flex-start;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    align-content: stretch; /* default */\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    align-content: space-around;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    align-content: space-between;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    align-content: center;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    align-content: flex-end;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    align-content: flex-start;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-around;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-start; /* default */\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap-reverse;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: nowrap; /* default */\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column-reverse;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row-reverse;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row; /* default */\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  /* --------------- */\n  /*     General     */\n  /* --------------- */\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*       Wrap      */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*     Justify     */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*      Align      */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*    Shorthand    */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  /* --------------- */\n  /*     Gutters     */\n  /* --------------- */\n\n  // Gutter 2\n  ", ";\n\n  // Gutter 3\n  ", ";\n\n  // Gutter 4\n  ", ";\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledIs.default)('row')(_templateObject2()), (0, _styledIs.default)('rowReverse')(_templateObject3()), (0, _styledIs.default)('column')(_templateObject4()), (0, _styledIs.default)('columnReverse')(_templateObject5()), (0, _styledIs.default)('nowrap')(_templateObject6()), (0, _styledIs.default)('wrap')(_templateObject7()), (0, _styledIs.default)('wrapReverse')(_templateObject8()), (0, _styledIs.default)('justifyStart')(_templateObject9()), (0, _styledIs.default)('justifyEnd')(_templateObject10()), (0, _styledIs.default)('justifyCenter')(_templateObject11()), (0, _styledIs.default)('justifyBetween')(_templateObject12()), (0, _styledIs.default)('justifyAround')(_templateObject13()), (0, _styledIs.default)('contentStart')(_templateObject14()), (0, _styledIs.default)('contentEnd')(_templateObject15()), (0, _styledIs.default)('contentCenter')(_templateObject16()), (0, _styledIs.default)('contentSpaceBetween')(_templateObject17()), (0, _styledIs.default)('contentSpaceAround')(_templateObject18()), (0, _styledIs.default)('contentStretch')(_templateObject19()), (0, _styledIs.default)('alignStart')(_templateObject20()), (0, _styledIs.default)('alignEnd')(_templateObject21()), (0, _styledIs.default)('alignCenter')(_templateObject22()), (0, _styledIs.default)('alignBaseline')(_templateObject23()), (0, _styledIs.default)('alignStretch')(_templateObject24()), (0, _styledIs.default)('between')(_templateObject25()), (0, _styledIs.default)('evenly')(_templateObject26()), (0, _styledIs.default)('center')(_templateObject27()), (0, _styledIs.default)('jc')(_templateObject28()), (0, _styledIs.default)('ac')(_templateObject29()), (0, _styledIs.default)('full')(_templateObject30()), (0, _styledIs.default)('gutter2')(_templateObject31(), (0, _styledBreakpoints.down)('tablet')), (0, _styledIs.default)('gutter3')(_templateObject32()), (0, _styledIs.default)('gutter4')(_templateObject33(), (0, _styledBreakpoints.down)('desktop'), (0, _styledBreakpoints.down)('tablet')));
Flex.propTypes = {};
Flex.defaultProps = {};
var _default = Flex;
exports.default = _default;