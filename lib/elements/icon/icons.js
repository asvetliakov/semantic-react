'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        icons: props.defaultClasses
    };
    classes[props.size] = !!props.size;
    return classes;
}

/**
 * Group of icons
 */
var Icons = function Icons(props) {
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var children = props.children;
    var size = props.size;

    var other = _objectWithoutProperties(props, ['component', 'defaultClasses', 'children', 'size']);

    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClasses(props));
    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Icons.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    component: 'i'
});

exports.default = Icons;
//# sourceMappingURL=icons.js.map