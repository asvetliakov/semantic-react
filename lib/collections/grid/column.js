'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    floated: ['right', 'left'],
    valigned: ['top', 'middle', 'bottom']

};

function getClasses(props) {
    var classes = {
        column: props.defaultClasses
    };

    classes[props.color] = !!props.color;

    // Widths
    if (props.width && props.width > 0 && props.width <= 16) {
        classes[_utilities.Numbers[props.width] + ' wide'] = true;
    }

    if (props.mobileWidth && props.mobileWidth > 0 && props.mobileWidth <= 16) {
        classes[_utilities.Numbers[props.mobileWidth] + ' wide mobile'] = true;
    }

    if (props.tabletWidth && props.tabletWidth > 0 && props.tabletWidth <= 16) {
        classes[_utilities.Numbers[props.tabletWidth] + ' wide tablet'] = true;
    }

    if (props.computerWidth && props.computerWidth > 0 && props.computerWidth <= 16) {
        classes[_utilities.Numbers[props.computerWidth] + ' wide computer'] = true;
    }

    if (props.largeScreenWidth && props.largeScreenWidth > 0 && props.largeScreenWidth <= 16) {
        classes[_utilities.Numbers[props.largeScreenWidth] + ' wide large screen'] = true;
    }

    if (props.wideScreenWidth && props.wideScreenWidth > 0 && props.wideScreenWidth <= 16) {
        classes[_utilities.Numbers[props.wideScreenWidth] + ' wide widescreen'] = true;
    }

    if (props.only) {
        var device = void 0;
        if (Array.isArray(props.only)) {
            device = props.only.join(' ');
        } else {
            device = props.only;
        }
        if (device) {
            classes[device + ' only'] = true;
        }
    }

    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
}

/**
 * Grid column
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
var Column = function Column(props) {
    /* eslint-disable no-use-before-define */
    var aligned = props.aligned;
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;
    var floated = props.floated;
    var only = props.only;
    var width = props.width;
    var mobileWidth = props.mobileWidth;
    var tabletWidth = props.tabletWidth;
    var computerWidth = props.computerWidth;
    var largeScreenWidth = props.largeScreenWidth;
    var wideScreenWidth = props.wideScreenWidth;
    var valigned = props.valigned;

    var other = _objectWithoutProperties(props, ['aligned', 'component', 'children', 'defaultClasses', 'floated', 'only', 'width', 'mobileWidth', 'tabletWidth', 'computerWidth', 'largeScreenWidth', 'wideScreenWidth', 'valigned']);
    /* eslint-enable no-use-before-define */


    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClasses(props));

    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Column.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

exports.default = Column;
//# sourceMappingURL=column.js.map