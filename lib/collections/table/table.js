'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    aligned: ['top', 'bottom'],
    basic: ['very'],
    padded: ['very'],
    valigned: ['center', 'right']
};

function mobileFormat(name, options) {
    var classes = {};

    Object.keys(options).forEach(function (value) {
        if (options[value]) classes[value + ' ' + name] = true;
    });

    // all of the options are true?
    return classes;
}

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,

        basic: props.basic,
        collapsing: props.collapsing,
        compact: props.compact,
        celled: props.celled,
        definition: props.definition,
        fixed: props.fixed,
        inverted: props.inverted,
        selectable: props.selectable,
        'single line': props.singleLine,
        striped: props.striped,
        structured: props.structured,

        table: props.defaultClasses
    };

    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;

    if (props.columns !== false) {
        if (props.columns > 0 && props.columns <= 16) {
            classes[_utilities.Numbers[props.columns] + ' column'] = true;
        }
    }

    if (props.width !== false) {
        if (props.width > 0 && props.width <= 16) {
            classes[_utilities.Numbers[props.width] + ' wide'] = true;
        }
    }

    return (0, _utilities.validateClassProps)(classes, props, validProps, { valigned: 'aligned' });
}

var Table = function Table(props) {
    /* eslint-disable no-use-before-define */
    var basic = props.basic;
    var celled = props.celled;
    var children = props.children;
    var className = props.className;
    var collapsing = props.collapsing;
    var compact = props.compact;
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var definition = props.definition;
    var fixed = props.fixed;
    var inverted = props.inverted;
    var selectable = props.selectable;
    var singleLine = props.singleLine;
    var stackable = props.stackable;
    var striped = props.striped;
    var structured = props.structured;
    var unstackable = props.unstackable;
    var valigned = props.valigned;

    var other = _objectWithoutProperties(props, ['basic', 'celled', 'children', 'className', 'collapsing', 'compact', 'component', 'defaultClasses', 'definition', 'fixed', 'inverted', 'selectable', 'singleLine', 'stackable', 'striped', 'structured', 'unstackable', 'valigned']);
    /* eslint-enable no-use-before-define */

    other.className = (0, _classnames2.default)(className, getClasses(props), mobileFormat('stackable', stackable), mobileFormat('unstackable', unstackable));

    return _react2.default.createElement(component, other, children);
};

Table.defaultProps = {
    component: 'table',
    defaultClasses: true,
    stackable: {
        computer: false,
        mobile: false,
        tablet: false
    },
    unstackable: {
        computer: false,
        mobile: false,
        tablet: false
    }
};

exports.default = Table;
//# sourceMappingURL=table.js.map