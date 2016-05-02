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
    aligned: ['right', 'left', 'center'],
    celled: ['internally'],
    divided: ['vertically', 'internally'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
    valigned: ['top', 'middle', 'bottom']
};

function getClassNames(props) {
    var classes = {
        // Default
        ui: props.defaultClasses,
        grid: props.defaultClasses,

        // variations
        container: props.container,
        relaxed: props.relaxed,
        centered: props.centered,
        stackable: props.stackable,
        doubling: props.doubling
    };

    if (props.columns && props.columns > 0 && props.columns <= 16) {
        classes[_utilities.Numbers[props.columns] + ' column'] = true;
    }

    if (props.equal) {
        classes['equal width'] = true;
    }

    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
}

/**
 * Semantic Grid
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
var Grid = function Grid(props) {
    // consume props
    /* eslint-disable no-use-before-define */
    var aligned = props.aligned;
    var defaultClasses = props.defaultClasses;
    var centered = props.centered;
    var celled = props.celled;
    var columns = props.columns;
    var container = props.container;
    var component = props.component;
    var children = props.children;
    var divided = props.divided;
    var doubling = props.doubling;
    var equal = props.equal;
    var padded = props.padded;
    var relaxed = props.relaxed;
    var reversed = props.reversed;
    var stackable = props.stackable;
    var valigned = props.valigned;

    var other = _objectWithoutProperties(props, ['aligned', 'defaultClasses', 'centered', 'celled', 'columns', 'container', 'component', 'children', 'divided', 'doubling', 'equal', 'padded', 'relaxed', 'reversed', 'stackable', 'valigned']);
    /* eslint-enable no-use-before-define */


    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClassNames(props));
    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Grid.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

exports.default = Grid;
//# sourceMappingURL=grid.js.map