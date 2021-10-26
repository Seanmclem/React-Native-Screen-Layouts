'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var styled = _interopDefault(require('styled-components/native'));
var stack = require('@react-navigation/stack');

var NoNavNoScrollKeyboardAvoid = function NoNavNoScrollKeyboardAvoid(_ref) {
  var children = _ref.children;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNative.KeyboardAvoidingView, {
    behavior: reactNative.Platform.OS === 'ios' ? 'padding' : 'height'
  }, React__default.createElement(reactNative.SafeAreaView, null, children)));
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
    behavior: reactNative.Platform.OS === 'ios' ? 'padding' : 'height'
  }, React__default.createElement(reactNative.SafeAreaView, {
    style: {
      flex: 0,
      backgroundColor: topColor || 'transparent'
    }
  }), React__default.createElement(SafeAreaViewContainer, {
    bottomColor: bottomColor
  }, children));
};
var KeyboardAvoidingViewContainer = /*#__PURE__*/styled(reactNative.KeyboardAvoidingView)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer = /*#__PURE__*/styled(reactNative.SafeAreaView)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n  flex: 1;\n  background-color: ", ";\n"])), function (_ref2) {
  var bottomColor = _ref2.bottomColor;
  return bottomColor ? bottomColor : 'transparent';
});

var _templateObject$1, _templateObject2$1;
var NoScrollYesNavKeyboardAvoid = function NoScrollYesNavKeyboardAvoid(_ref) {
  var children = _ref.children;
  var headerHeight = stack.useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (reactNative.StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$1, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: reactNative.Platform.OS === 'ios' ? 'padding' : 'height',
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$1, null, children));
};
var KeyboardAvoidingViewContainer$1 = /*#__PURE__*/styled(reactNative.KeyboardAvoidingView)(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$1 = /*#__PURE__*/styled(reactNative.SafeAreaView)(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));

var _templateObject$2, _templateObject2$2, _templateObject3;
var YesScrollYesNavBottomButtonsKeyboardAvoid = function YesScrollYesNavBottomButtonsKeyboardAvoid(_ref) {
  var children = _ref.children,
      bottomFixed = _ref.bottomFixed;
  var headerHeight = stack.useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (reactNative.StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$2, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: reactNative.Platform.OS === 'ios' ? 'padding' : undefined,
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$2, null, React__default.createElement(ScrollViewContainer, {
    contentContainerStyle: {
      flexGrow: 1
    }
  }, children)), bottomFixed);
};
var KeyboardAvoidingViewContainer$2 = /*#__PURE__*/styled(reactNative.KeyboardAvoidingView)(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$2 = /*#__PURE__*/styled(reactNative.SafeAreaView)(_templateObject2$2 || (_templateObject2$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  flex: 1;\n"])));
var ScrollViewContainer = /*#__PURE__*/styled(reactNative.ScrollView)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /* height: 100%; */\n  background-color: green;\n"])));

var _templateObject$3, _templateObject2$3, _templateObject3$1;
var YesScrollYesNavKeyboardAvoid = function YesScrollYesNavKeyboardAvoid(_ref) {
  var children = _ref.children;
  var headerHeight = stack.useHeaderHeight();
  var KEYBOARD_VERTICAL_OFFSET = headerHeight + (reactNative.StatusBar.currentHeight || 0);
  return React__default.createElement(KeyboardAvoidingViewContainer$3, {
    nativeID: "NoScrollKeyboardAvoid",
    behavior: reactNative.Platform.OS === 'ios' ? 'padding' : undefined,
    keyboardVerticalOffset: KEYBOARD_VERTICAL_OFFSET
  }, React__default.createElement(SafeAreaViewContainer$3, null, React__default.createElement(ScrollViewContainer$1, null, children)));
};
var KeyboardAvoidingViewContainer$3 = /*#__PURE__*/styled(reactNative.KeyboardAvoidingView)(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var SafeAreaViewContainer$3 = /*#__PURE__*/styled(reactNative.SafeAreaView)(_templateObject2$3 || (_templateObject2$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  height: 100%;\n"])));
var ScrollViewContainer$1 = /*#__PURE__*/styled(reactNative.ScrollView)(_templateObject3$1 || (_templateObject3$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  /* height: 100%; */\n  background-color: green;\n"])));

var Thing = function Thing() {
  return React.createElement("div", null, "the snozzberries taste like snozzberries");
};

exports.NoNavNoScrollKeyboardAvoid = NoNavNoScrollKeyboardAvoid;
exports.NoScrollKeyboardAvoid = NoScrollKeyboardAvoid;
exports.NoScrollYesNavKeyboardAvoid = NoScrollYesNavKeyboardAvoid;
exports.Thing = Thing;
exports.YesScrollYesNavBottomButtonsKeyboardAvoid = YesScrollYesNavBottomButtonsKeyboardAvoid;
exports.YesScrollYesNavKeyboardAvoid = YesScrollYesNavKeyboardAvoid;
//# sourceMappingURL=react-native-screen-layouts.cjs.development.js.map
