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

/**
 * Just a flag
 */
var Flag = function Flag(props) {
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var name = props.name;

    var other = _objectWithoutProperties(props, ['component', 'defaultClasses', 'name']);

    other.className = (0, _classnames2.default)(other.className, { flag: defaultClasses }, name);

    var Component = component;

    return _react2.default.createElement(Component, other);
};

Flag.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    component: 'i'
});

exports.default = Flag;
//# sourceMappingURL=flag.js.map