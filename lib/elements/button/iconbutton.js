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

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        icon: true
    };
    return classes;
}

/**
 * Icon button es un button con icon, en serio
 */
var IconButton = function IconButton(props) {
    var children = props.children;
    var iconColor = props.iconColor;
    var iconComponent = props.iconComponent;
    var name = props.name;

    var other = _objectWithoutProperties(props, ['children', 'iconColor', 'iconComponent', 'name']);

    other.className = (0, _classnames2.default)(other.className, getClasses(props));
    var IconComponent = iconComponent || IconButton.Components.Icon;

    return _react2.default.createElement(
        IconButton.Components.Button,
        other,
        _react2.default.createElement(IconComponent, { color: iconColor,
            name: name }),
        children
    );
};

IconButton.defaultProps = _extends({}, _button2.default.defaultProps);

IconButton.Components = {
    Button: _button2.default,
    Icon: _icon2.default
};
exports.default = IconButton;
//# sourceMappingURL=iconbutton.js.map