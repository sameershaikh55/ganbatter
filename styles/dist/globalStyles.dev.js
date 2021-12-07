"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PageContainer = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  @media (max-width: 500px) {\n    padding-bottom: 60px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  max-width: 1700px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (max-width: 1000px) {\n    width: 90%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');\n\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Rubik', sans-serif;\n    }\n\n    a{\n        text-decoration: none;\n        display: block;\n    }\n\n    button{\n        border: none;\n        outline: none;\n        background-color: transparent;\n    }\n\n    input{\n        border: none;\n        outline: none;\n        background-color: transparent;\n    }\n\n    /* SIZES */\n    h1{\n        font-size: 48px;\n    }\n    .fs-24px{\n        font-size: 24px;\n    }\n    .fs-28px{\n        font-size: 28px;\n    }\n    .fs-20px{\n        font-size: 20px;\n    }\n    .fs-16px{\n        font-size: 16px;\n    }\n    .fs-18px{\n        font-size: 18px;\n    }\n    .fs-36px{\n        font-size: 36px;\n    }\n    .fs-30px{\n        font-size: 30px;\n    }\n\n    /* colors */\n    .gray{\n        color: #263238;\n    }\n    .white{\n        color: white;\n    }\n    .purple{\n      color: #5C0C40;\n    }\n    .light-purple{\n      color : #763D8E;\n    }\n    .bg-purple{\n      background:#4a114a ;\n    }\n\n    /* font-weights */\n    .weight-9 {\n        font-weight: 900;\n    }\n    .weight-8 {\n        font-weight: 800;\n    }\n    .weight-7 {\n        font-weight: 700;\n    }\n    .weight-6 {\n        font-weight: 600;\n    }\n    .weight-5 {\n        font-weight: 500;\n    }\n    .weight-4 {\n        font-weight: 400;\n    }\n    .weight-3 {\n        font-weight: 300;\n    }\n\n\n\n    /* margins */\n.mb-5px {\n  margin-bottom: 5px;\n}\n.mb-10px {\n  margin-bottom: 10px;\n}\n.mb-15px {\n  margin-bottom: 15px;\n}\n.mb-20px {\n  margin-bottom: 20px;\n}\n.mb-25px {\n  margin-bottom: clamp(5px, 1.7361111111111112vw, 25px);\n}\n.mb-30px {\n  margin-bottom: clamp(18px, 2.0833333333333335vw, 30px);\n}\n.mb-35px {\n  margin-bottom: 35px;\n}\n.mb-40px {\n  margin-bottom: 40px;\n}\n.mb-45px {\n  margin-bottom: 45px;\n}\n.mb-50px {\n  margin-bottom: clamp(20px, 3.4722222222222223vw, 50px);\n}\n.mb-55px {\n  margin-bottom: 55px;\n}\n.mb-60px {\n  margin-bottom: clamp(40px, 4.166666666666667vw, 60px);\n}\n.mb-70px {\n  margin-bottom: clamp(40px, 4.861111111111111vw, 70px);\n}\n.mb-75px {\n  margin-bottom: clamp(35px, 5.208333333333333vw, 75px);\n}\n.mb-80px {\n  margin-bottom: 80px;\n}\n.mb-100px {\n  margin-bottom: clamp(40px, 6.944444444444445vw, 100px);\n}\n.mb-150px {\n  margin-bottom: clamp(80px, 10.416666666666666vw, 150px);\n}\n\n.margin-center {\n  margin: 0 auto;\n}\n\n\n/* CONFIGURATIONS */\n.pointer{\n    cursor: pointer;\n}\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Container = _styledComponents["default"].div(_templateObject2());

exports.Container = Container;

var PageContainer = _styledComponents["default"].div(_templateObject3());

exports.PageContainer = PageContainer;
var _default = GlobalStyle;
exports["default"] = _default;