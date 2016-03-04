'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _td = require('./td');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var tr = function tr(props) {
    return _react2['default'].createElement(
        _td.Td,
        _extends({}, props, {
            component: props.component
        }),
        props.children
    );
};

tr.propTypes = {
    children: _react2['default'].PropTypes.node,
    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string])
};

tr.defaultProps = {
    component: 'tr'
};

exports.Tr = (0, _radium2['default'])(tr);
//# sourceMappingURL=tr.js.map