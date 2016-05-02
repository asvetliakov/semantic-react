'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

var _checkbox = require('./../../modules/checkbox/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxfields = require('./../../modules/checkbox/checkboxfields');

var _checkboxfields2 = _interopRequireDefault(_checkboxfields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        disabled: props.state === 'disabled',
        error: props.state === 'error',

        required: props.required,
        inline: props.inline,
        grouped: props.grouped
    };

    if (props.width) {
        if (props.width > 0 && props.width <= 16) {
            classes[_utilities.Numbers[props.width] + ' wide'] = true;
        }
    }

    classes.field = props.defaultClasses;

    return classes;
}

// check if child is checkbox first?
function renderLabel(label) {
    return _react2.default.createElement(
        'label',
        { key: label + 'Label' },
        label
    );
}

var Field = function Field(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;
    var label = props.label;
    var width = props.width;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'label', 'width']);
    /* eslint-enable no-use-before-define */


    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, [(0, _utilities.hasFirstChild)(children, Field.Components.Checkbox) || (0, _utilities.hasFirstChild)(children, Field.Components.CheckboxFields) || !label || label == '' ? null : renderLabel(props.label), children]);
};

Field.defaultProps = {
    component: 'div',
    defaultClasses: true
};

Field.Components = {
    Checkbox: _checkbox2.default,
    CheckboxFields: _checkboxfields2.default
};

exports.default = Field;
//# sourceMappingURL=field.js.map