"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = exports.NavbarBtns = exports.NavContainer = exports.MenueLogo = exports.MenueItem = exports.NavMobileMenu = exports.NavMobile = exports.NavLogo = exports.Nav = void 0;

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 700;\n\n  background: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 58px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 100%;\n\n  @media (max-width: 500px) {\n    display: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 2rem;\n  height: 68px;\n  background: #f1eef0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: #263238;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n\n  font-weight: 500;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  letter-spacing: 0.06em;\n  color: #263238;\n  width: 100%;\n  gap: 10px;\n  height: 66px;\n  cursor: pointer;\n  padding: 0 2rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: ", ";\n  left: 0;\n  background: white;\n  z-index: 100000;\n  width: 100%;\n  transition: ", ";\n  box-shadow: 0px -12px 32px -5px rgba(2, 24, 110, 0.1);\n\n  display: flex;\n  flex-direction: column;\n\n  & > div:not(:last-child) {\n    border-bottom: 1px solid gray;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  display: none;\n\n  @media (max-width: 500px) {\n    display: flex;\n  }\n\n  & > div {\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    align-items: center;\n    font-size: 14px;\n\n    svg {\n      font-size: 22px;\n    }\n  }\n\n  & > p {\n    font-weight: bold;\n    font-size: 16px;\n    letter-spacing: 0.22em;\n    text-transform: uppercase;\n    color: #263238;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  box-shadow: 0px 5px 26px -12px rgba(2, 24, 110, 0.15);\n\n  @media (max-width: 500px) {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1000;\n    background-color: white;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require("styled-components"),
    styled = _require["default"];

var _require2 = require("styles/globalStyles"),
    Container = _require2.Container;

var Nav = styled.div(_templateObject());
exports.Nav = Nav;
var NavLogo = styled.div(_templateObject2());
exports.NavLogo = NavLogo;
var NavMobile = styled.div(_templateObject3());
exports.NavMobile = NavMobile;
var NavMobileMenu = styled.div(_templateObject4(), function (props) {
  return props.open === "true" ? "0" : "-100vh";
}, function (props) {
  return props.open === "true" ? "all 0.2s ease" : "all .7s ease";
});
exports.NavMobileMenu = NavMobileMenu;
var MenueItem = styled.div(_templateObject5());
exports.MenueItem = MenueItem;
var MenueLogo = styled.div(_templateObject6());
exports.MenueLogo = MenueLogo;
var NavContainer = styled(Container)(_templateObject7());
exports.NavContainer = NavContainer;
var NavbarBtns = styled.div(_templateObject8());
exports.NavbarBtns = NavbarBtns;
var NavLink = styled.a(_templateObject9(), function (_ref) {
  var wrap = _ref.wrap;
  return wrap ? "white" : "#763d8e";
}, function (_ref2) {
  var wrap = _ref2.wrap;
  return wrap ? "#763d8e" : "transparent";
}, function (_ref3) {
  var wrap = _ref3.wrap;
  return wrap ? ".8rem 2rem" : "0";
}, function (_ref4) {
  var wrap = _ref4.wrap;
  return wrap ? "4px" : "0";
}, function (_ref5) {
  var wrap = _ref5.wrap;
  return wrap ? "0px 4px 24px -10px rgba(2, 24, 110, 0.2)" : "";
});
exports.NavLink = NavLink;