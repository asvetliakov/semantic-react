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

var _icon = require('./../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _label = require('./../label/label');

var _label2 = _interopRequireDefault(_label);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    labeled: ['left', 'right']
};

/**
 * Returns default component for label
 * @param {string} type
 */
function getDefaultLabelComponent(type) {
    return type === 'icon' ? LabeledButton.Components.Icon : LabeledButton.Components.Label; // eslint-disable-line
}

/**
 * Returns class name
 * @param props
 */
function getClasses(props) {
    var classes = {
        ui: props.labelType !== 'icon', // no need to add ui since <Button> will add it
        icon: props.labelType === 'icon',
        button: props.labelType !== 'icon'
    };
    return (0, _utilities.validateClassProps)(classes, props, validProps);
}

/**
 * Labeled button renders button with label, either text label or icon
 */
var LabeledButton = function LabeledButton(props) {
    var children = props.children;
    var labeled = props.labeled;
    var labelType = props.labelType;
    var label = props.label;
    var labelComponent = props.labelComponent;

    var other = _objectWithoutProperties(props, ['children', 'labeled', 'labelType', 'label', 'labelComponent']);

    var LabelComponent = labelComponent ? labelComponent : getDefaultLabelComponent(labelType);

    if (labelType === 'icon') {
        // Easy markup, it's the standard button with labeled icon prefix, the icon order doesn't matter
        other.className = (0, _classnames2.default)(other.className, getClasses(props));
        return _react2.default.createElement(
            LabeledButton.Components.Button,
            other,
            _react2.default.createElement(LabelComponent, { name: label }),
            children
        );
    } else {
        // Text labeled button, this is slightly harder, label order does matter, also need to be prefixed with <div>
        var className = (0, _classnames2.default)(getClasses(props));
        var markup = [];
        /* eslint-disable react/jsx-max-props-per-line */
        // Should be label basic by default?
        if (labeled === 'left') {
            markup.push(_react2.default.createElement(
                LabelComponent,
                { basic: true, key: 'label' },
                label
            ));
            markup.push(_react2.default.createElement(
                LabeledButton.Components.Button,
                _extends({ key: 'button' }, other),
                children
            ));
        } else {
            markup.push(_react2.default.createElement(
                LabeledButton.Components.Button,
                _extends({ key: 'button' }, other),
                children
            ));
            markup.push(_react2.default.createElement(
                LabelComponent,
                { basic: true, key: 'label' },
                label
            ));
        }
        /* eslint-enable react/jsx-max-props-per-line */
        // TODO: Should allow to customize this div??
        return _react2.default.createElement(
            'div',
            { className: className },
            markup
        );
    }
};

LabeledButton.defaultProps = {
    labeled: 'right',
    labelType: 'text'
};

LabeledButton.Components = {
    Icon: _icon2.default,
    Label: _label2.default,
    Button: _button2.default
};

exports.default = LabeledButton;
//# sourceMappingURL=labeledbutton.js.map