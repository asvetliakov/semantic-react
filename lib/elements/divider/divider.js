'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    return {
        // default
        ui: props.defaultClasses,

        // types
        header: props.header,
        horizontal: props.aligned === 'horizontal',
        vertical: props.aligned === 'vertical',

        // variations
        clearing: props.clearing,
        fitted: props.spacing === 'fitted',
        hidden: props.hidden,
        inverted: props.inverted,
        section: props.spacing === 'padded',

        // component
        divider: props.defaultClasses
    };
}

/**
 * Divider
 */
var Divider = function Divider(props) {
    var aligned = props.aligned;
    var children = props.children;
    var clearing = props.clearing;
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var header = props.header;
    var hidden = props.hidden;
    var inverted = props.inverted;
    var spacing = props.spacing;

    var other = _objectWithoutProperties(props, ['aligned', 'children', 'clearing', 'component', 'defaultClasses', 'header', 'hidden', 'inverted', 'spacing']);

    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClasses(props));
    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Divider.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

exports.default = Divider;
//# sourceMappingURL=divider.js.map