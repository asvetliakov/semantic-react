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
 * Accordion body (content)
 */
var AccordionBody = function AccordionBody(props) {
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;
    var active = props.active;
    var style = props.style;

    var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses', 'active', 'style']);

    var Component = component;
    other.className = (0, _classnames2.default)(other.className, {
        content: defaultClasses,
        active: active
    });

    // Add em units to padding
    var newStyle = style;
    if (newStyle) {
        if (newStyle.paddingTop) {
            newStyle.paddingTop = newStyle.paddingTop + 'em';
        }
        if (newStyle.paddingBottom) {
            newStyle.paddingBottom = newStyle.paddingBottom + 'em';
        }
    }
    // smooth transition
    var dimensions = props.dimensions;

    if (dimensions && dimensions.height - style.height < 2) {
        delete newStyle.height;
    }
    return _react2.default.createElement(
        Component,
        _extends({}, other, { style: newStyle }),
        children
    );
};

AccordionBody.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: false
});

exports.default = AccordionBody;
//# sourceMappingURL=accordionbody.js.map