'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _menuitem = require('./../../views/menu/menuitem');

var _menuitem2 = _interopRequireDefault(_menuitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Select option. This should be used in <Select>
 */
var Option = function Option(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var value = props.value;

    var other = _objectWithoutProperties(props, ['children', 'value']);
    /* eslint-enable no-use-before-define */


    if (other.active) {
        other.className = (0, _classnames2.default)(other.className, { selected: true });
    }
    return _react2.default.createElement(
        Option.Components.MenuItem,
        _extends({
            menuValue: value
        }, other),
        children
    );
};

Option.defaultProps = _extends({}, _menuitem2.default.defaultProps);

Option.Components = {
    MenuItem: _menuitem2.default
};

exports.default = Option;
//# sourceMappingURL=option.js.map