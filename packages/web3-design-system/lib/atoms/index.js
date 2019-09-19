"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledSystemHtml = require("styled-system-html");

var _Absolute = _interopRequireDefault(require("./Absolute"));

var _BackgroundImage = _interopRequireDefault(require("./BackgroundImage"));

var _BackgroundGradient = _interopRequireDefault(require("./BackgroundGradient"));

var _Box = _interopRequireDefault(require("./Box"));

var _Button = _interopRequireDefault(require("./Button"));

var _Container = _interopRequireDefault(require("./Container"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _Heading = _interopRequireDefault(require("./Heading"));

var _Image = _interopRequireDefault(require("./Image"));

var _Paragraph = _interopRequireDefault(require("./Paragraph"));

var _Span = _interopRequireDefault(require("./Span"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Atoms
module.exports.BackgroundImage = _BackgroundImage.default;
module.exports.Box = _Box.default;
module.exports.Container = _Container.default;
module.exports.Button = _Button.default;
module.exports.Flex = _Flex.default;
module.exports.Heading = _Heading.default;
module.exports.Image = _Image.default;
module.exports.Paragraph = _Paragraph.default;
module.exports.pan = _Span.default;
module.exports.Text = _Text.default;
var _default = {
  // Design System
  Absolute: _Absolute.default,
  BackgroundImage: _BackgroundImage.default,
  BackgroundGradient: _BackgroundGradient.default,
  Box: _Box.default,
  Button: _Button.default,
  Container: _Container.default,
  Flex: _Flex.default,
  Heading: _Heading.default,
  Image: _Image.default,
  Paragraph: _Paragraph.default,
  Span: _Span.default,
  Text: _Text.default,
  // Styled System HTML
  Div: _styledSystemHtml.Div,
  Header: _styledSystemHtml.Header,
  Footer: _styledSystemHtml.Footer,
  Main: _styledSystemHtml.Main,
  Section: _styledSystemHtml.Section,
  Article: _styledSystemHtml.Article,
  Span: _Span.default,
  Small: _styledSystemHtml.Small,
  A: _styledSystemHtml.A,
  UL: _styledSystemHtml.UL,
  OL: _styledSystemHtml.OL,
  LI: _styledSystemHtml.LI,
  Nav: _styledSystemHtml.Nav,
  Form: _styledSystemHtml.Form,
  Legend: _styledSystemHtml.Legend,
  Label: _styledSystemHtml.Label,
  Input: _styledSystemHtml.Input,
  Select: _styledSystemHtml.Select,
  TextArea: _styledSystemHtml.TextArea,
  Pre: _styledSystemHtml.Pre,
  Code: _styledSystemHtml.Code,
  Table: _styledSystemHtml.Table,
  THead: _styledSystemHtml.THead,
  TBody: _styledSystemHtml.TBody,
  TH: _styledSystemHtml.TH,
  TR: _styledSystemHtml.TR,
  TD: _styledSystemHtml.TD,
  Figure: _styledSystemHtml.Figure,
  FigCaption: _styledSystemHtml.FigCaption,
  Img: _styledSystemHtml.Img
};
exports.default = _default;