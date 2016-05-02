'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _iconbutton = require('./iconbutton');

var _iconbutton2 = _interopRequireDefault(_iconbutton);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('./../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Social button is simple social colored button with social icon. This is ordinary button, 
 */
var SocialButton = function SocialButton(_ref) {
    var children = _ref.children;
    var name = _ref.name;

    var other = _objectWithoutProperties(_ref, ['children', 'name']);

    var hasChildren = _react2.default.Children.count(children) > 0;
    other.className = (0, _classnames2.default)(other.className, name);
    // Render button if has any children (i.e. caption), otherwise render icon button
    if (hasChildren) {
        return _react2.default.createElement(
            SocialButton.Components.Button,
            other,
            _react2.default.createElement(SocialButton.Components.Icon, { name: name }),
            children
        );
    } else {
        return _react2.default.createElement(SocialButton.Components.IconButton, _extends({}, other, {
            name: name }));
    }
};

SocialButton.Components = {
    IconButton: _iconbutton2.default,
    Button: _button2.default,
    Icon: _icon2.default
};

exports.default = SocialButton;
//# sourceMappingURL=socialbutton.js.map