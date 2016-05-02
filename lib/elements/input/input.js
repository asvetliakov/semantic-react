'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _icon = require('./../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _label = require('./../label/label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,
        input: props.defaultClasses,

        fluid: props.fluid,
        inverted: props.inverted,
        transparent: props.transparent
    };
    classes[props.size] = !!props.size;
    // Loading state should add icon
    if (props.state && props.state === 'loading') {
        classes['icon'] = true;
    }
    classes[props.state] = !!props.state;

    // action input
    if (props.actionComponent) {
        classes[props.actionPosition] = true;
        classes['action'] = true;
    }
    // Icon input
    if (props.icon) {
        classes[props.iconPosition] = true;
        classes['icon'] = true;
    }
    // Labeled input
    if (props.label) {
        classes[props.labelPosition] = true;
        classes['labeled'] = true;
    }
    return classes;
}

/**
 * Controlled basic input
 */
var Input = function Input(props) {
    var component = props.component;
    var children = props.children;
    var className = props.className;
    var defaultClasses = props.defaultClasses;
    var style = props.style;
    var actionComponent = props.actionComponent;
    var actionPosition = props.actionPosition;
    var fluid = props.fluid;
    var icon = props.icon;
    var iconPosition = props.iconPosition;
    var iconComponent = props.iconComponent;
    var inverted = props.inverted;
    var label = props.label;
    var labelComponent = props.labelComponent;
    var labelPosition = props.labelPosition;
    var placeholder = props.placeholder;
    var size = props.size;
    var state = props.state;
    var transparent = props.transparent;
    var value = props.value;

    var other = _objectWithoutProperties(props, ['component', 'children', 'className', 'defaultClasses', 'style', 'actionComponent', 'actionPosition', 'fluid', 'icon', 'iconPosition', 'iconComponent', 'inverted', 'label', 'labelComponent', 'labelPosition', 'placeholder', 'size', 'state', 'transparent', 'value']);

    var wrapperClassName = (0, _classnames2.default)(className, getClasses(props));
    var InputComponent = component;
    var IconComponent = iconComponent || Input.Components.Icon;
    var LabelComponent = labelComponent || Input.Components.Label;
    var ActionComponent = actionComponent;

    return _react2.default.createElement(
        'div',
        { className: wrapperClassName, style: style },
        actionComponent && actionPosition === 'left' && _react2.default.createElement(ActionComponent, null),
        label && (labelPosition === 'left' || labelPosition === 'left corner') && _react2.default.createElement(
            LabelComponent,
            { corner: labelPosition === 'left corner' ? 'left' : null },
            label
        ),
        _react2.default.createElement(InputComponent, _extends({ type: 'text' }, other, { value: value, placeholder: placeholder })),
        state && state === 'loading' ? _react2.default.createElement(_icon2.default, { name: 'search' }) : icon && _react2.default.createElement(IconComponent, { name: icon }),
        label && (labelPosition === 'right' || labelPosition === 'right corner') && _react2.default.createElement(
            LabelComponent,
            { corner: labelPosition === 'right corner' ? 'right' : null },
            label
        ),
        actionComponent && actionPosition === 'right' && _react2.default.createElement(ActionComponent, null),
        children
    );
};

Input.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    component: 'input',
    iconPosition: 'right',
    labelPosition: 'left',
    actionPosition: 'right'
});

Input.Components = {
    Icon: _icon2.default,
    Label: _label2.default
};

exports.default = Input;
//# sourceMappingURL=input.js.map