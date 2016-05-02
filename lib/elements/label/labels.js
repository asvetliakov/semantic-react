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
    var classes = {
        ui: props.defaultClasses,
        labels: props.defaultClasses,
        circular: props.circular,
        tag: props.tag
    };

    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;
    return classes;
}

/**
 * Group of labels which can share same size, shape or color
 */
var Labels = function Labels(props) {
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;
    var circular = props.circular;
    var color = props.color;
    var tag = props.tag;
    var size = props.size;

    var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses', 'circular', 'color', 'tag', 'size']);

    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClasses(props));
    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Labels.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

exports.default = Labels;
//# sourceMappingURL=labels.js.map