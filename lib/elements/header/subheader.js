'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Sub header, same as header but with 'sub' class name
 * Deprecated
 */
var SubHeader = function SubHeader(props) {
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;

    var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses']);

    var Component = component || SubHeader.Components.Header;
    other.className = (0, _classnames2.default)(other.className, { sub: defaultClasses });
    return _react2.default.createElement(
        Component,
        other,
        children
    );
};

SubHeader.defaultProps = {
    defaultClasses: true,
    item: false
};

SubHeader.Components = {
    Header: _header2.default
};

exports.default = SubHeader;
//# sourceMappingURL=subheader.js.map