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
    valigned: ['top', 'middle', 'bottom']
};

function getClasses(props) {
    var classes = {
        row: props.defaultClasses,
        centered: props.centered,
        doubling: props.doubling,
        stretched: props.stretched,
        justified: props.justified
    };

    if (props.columns && props.columns > 0 && props.columns <= 16) {
        classes[_utilities.Numbers[props.columns] + ' column'] = true;
    }

    classes[props.color] = !!props.color;

    if (props.equal) {
        classes['equal width'] = true;
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
 * Grid row
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
var Row = function Row(props) {
    /* eslint-disable no-use-before-define */
    var aligned = props.aligned;
    var component = props.component;
    var centered = props.centered;
    var children = props.children;
    var columns = props.columns;
    var defaultClasses = props.defaultClasses;
    var doubling = props.doubling;
    var equal = props.equal;
    var stretched = props.stretched;
    var color = props.color;
    var only = props.only;
    var justified = props.justified;

    var other = _objectWithoutProperties(props, ['aligned', 'component', 'centered', 'children', 'columns', 'defaultClasses', 'doubling', 'equal', 'stretched', 'color', 'only', 'justified']);
    /* eslint-enable no-use-before-define */

    var Component = component;
    other.className = (0, _classnames2.default)(other.className, getClasses(props));

    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

Row.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

exports.default = Row;
//# sourceMappingURL=row.js.map