'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function getClasses(props) {
    var classes = {
        ui: props.defaultClasses,

        feed: props.defaultClasses
    };

    classes[props.size] = !!props.size;

    return classes;
}

var Feed = function Feed(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;
    var defaultClasses = props.defaultClasses;
    var size = props.size;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component', 'defaultClasses', 'size']);

    /* eslint-enable no-use-before-define */

    other.className = (0, _classnames2['default'])(className, getClasses(props));

    return _react2['default'].createElement(component, other, children);
};

Feed.propTypes = {
    children: _react2['default'].PropTypes.node,
    className: _react2['default'].PropTypes.any,
    component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
    defaultClasses: _react2['default'].PropTypes.bool,
    size: _react2['default'].PropTypes.string
};

Feed.defaultProps = {
    component: 'div',
    defaultClasses: true
};

exports.Feed = (0, _radium2['default'])(Feed);
//# sourceMappingURL=feed.js.map