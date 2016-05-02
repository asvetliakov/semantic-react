'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getClasses = getClasses;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
  flipped: ['horizontally', 'vertically'],
  rotated: ['clockwise', 'counterclockwise']
};

function getClasses(props) {
  var classes = {
    // default
    // variations
    bordered: props.bordered,
    circular: props.circular,
    corner: props.corner,
    disabled: props.state === 'disabled',
    fitted: props.fitted,
    link: props.link || props.onClick,
    inverted: props.inverted,
    loading: props.state === 'loading',

    // component
    icon: props.defaultClasses
  };

  // handle all string or mixed string/bool props

  // classes[this.props.aligned] = !!this.props.aligned;
  classes[props.size] = !!props.size;
  classes[props.color] = !!props.color;
  classes[props.name] = !!props.name;
  classes[props.pointing] = !!props.pointing;

  return (0, _utilities.validateClassProps)(classes, props, validProps);
}

/**
 * Icon
 */
var Icon = function Icon(props) {
  var component = props.component;
  var defaultClasses = props.defaultClasses;
  var children = props.children;
  var bordered = props.bordered;
  var circular = props.circular;
  var color = props.color;
  var corner = props.corner;
  var state = props.state;
  var fitted = props.fitted;
  var flipped = props.flipped;
  var inverted = props.inverted;
  var link = props.link;
  var name = props.name;
  var size = props.size;
  var rotated = props.rotated;

  var other = _objectWithoutProperties(props, ['component', 'defaultClasses', 'children', 'bordered', 'circular', 'color', 'corner', 'state', 'fitted', 'flipped', 'inverted', 'link', 'name', 'size', 'rotated']);

  var Component = component;
  other.className = (0, _classnames2.default)(other.className, getClasses(props));
  return _react2.default.createElement(
    Component,
    other,
    children
  );
};

Icon.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
  component: 'i'
});

exports.default = Icon;
//# sourceMappingURL=icon.js.map