'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    aligned: ['right', 'left', 'justified', 'center']
};

function getClasses(props) {
    var classes = {
        ui: true,
        container: true,
        fluid: props.fluid,

        aligned: props.aligned && props.aligned !== 'justified'
    };

    return (0, _utilities.validateClassProps)(classes, props, validProps);
}

var Container = function Container(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var component = _ref.component;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

    other.className = (0, _classnames2.default)(className, getClasses(other));

    return _react2.default.createElement(component, other, children);
};

Container.defaultProps = {
    component: 'div'
};

exports.default = Container;
//# sourceMappingURL=container.js.map