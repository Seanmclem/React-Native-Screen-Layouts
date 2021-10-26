import React__default, { createElement } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useHeaderHeight } from '@react-navigation/stack';

var NoNavNoScrollKeyboardAvoid = function NoNavNoScrollKeyboardAvoid(_ref) {
  var children = _ref.children;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(KeyboardAvoidingView, {
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
  }, React__default.createElement(SafeAreaView, null, children)));
};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2;
var NoScrollKeyboardAvoid = function NoScrollKeyboardAvoid(_ref) {
  var children = _ref.children,
      topColor = _ref.topColor,
      bottomColor = _ref.bottomColor;
  return React__default.createElement(KeyboardAvoidingViewContainer, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: Platform.OS === 'ios' ? 'padding' : 'height'
  }, React__default.createElement(SafeAreaView, {
    style: {
      flex: 0,
      backgroundColor: topColor || 'transparent'
    }
  }), React__default.createElement(SafeAreaViewContainer, {
    bottomColor: bottomColor
  }, children));
};
var KeyboardAvoidingViewContainer = /*#__PURE__*/styled(KeyboardAvoidingView)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer = /*#__PURE__*/styled(SafeAreaView)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n  flex: 1;\n  background-color: ", ";\n"])), function (_ref2) {
  var bottomColor = _ref2.bottomColor;
  return bottomColor ? bottomColor : 'transparent';
});

var _templateObject$1, _templateObject2$1;
var NoScrollYesNavKeyboardAvoid = function NoScrollYesNavKeyboardAvoid(_ref) {
  var children = _ref.children;
  var headerHeight = useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$1, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$1, null, children));
};
var KeyboardAvoidingViewContainer$1 = /*#__PURE__*/styled(KeyboardAvoidingView)(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$1 = /*#__PURE__*/styled(SafeAreaView)(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));

var _templateObject$2, _templateObject2$2, _templateObject3;
var YesScrollYesNavBottomButtonsKeyboardAvoid = function YesScrollYesNavBottomButtonsKeyboardAvoid(_ref) {
  var children = _ref.children,
      bottomFixed = _ref.bottomFixed;
  var headerHeight = useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$2, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: Platform.OS === 'ios' ? 'padding' : undefined,
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$2, null, React__default.createElement(ScrollViewContainer, {
    contentContainerStyle: {
      flexGrow: 1
    }
  }, children)), bottomFixed);
};
var KeyboardAvoidingViewContainer$2 = /*#__PURE__*/styled(KeyboardAvoidingView)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$2 = /*#__PURE__*/styled(SafeAreaView)(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  flex: 1;\n"])));
var ScrollViewContainer = /*#__PURE__*/styled(ScrollView)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /* height: 100%; */\n  background-color: green;\n"])));

var _templateObject$3, _templateObject2$3, _templateObject3$1;
var YesScrollYesNavKeyboardAvoid = function YesScrollYesNavKeyboardAvoid(_ref) {
  var children = _ref.children;
  var headerHeight = useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$3, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: Platform.OS === 'ios' ? 'padding' : undefined,
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$3, null, React__default.createElement(ScrollViewContainer$1, null, children)));
};
var KeyboardAvoidingViewContainer$3 = /*#__PURE__*/styled(KeyboardAvoidingView)(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$3 = /*#__PURE__*/styled(SafeAreaView)(_templateObject2$3 || (_templateObject2$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var ScrollViewContainer$1 = /*#__PURE__*/styled(ScrollView)(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /* height: 100%; */\n  background-color: green;\n"])));

var Thing = function Thing() {
  return createElement("div", null, "the snozzberries taste like snozzberries");
};

export { NoNavNoScrollKeyboardAvoid, NoScrollKeyboardAvoid, NoScrollYesNavKeyboardAvoid, Thing, YesScrollYesNavBottomButtonsKeyboardAvoid, YesScrollYesNavKeyboardAvoid };
//# sourceMappingURL=react-native-screen-layouts.esm.js.map
