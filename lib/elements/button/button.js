'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

var _defaultProps = require('./../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
  animated: ['vertical', 'fade'],
  attached: ['left', 'right', 'bottom', 'top'],
  floated: ['left', 'right']
};

/**
 * Assign button classes
 * @param props
 * @param context
 */
function getClasses(props, context) {
  var classes = {
    // default
    ui: props.defaultClasses,

    // position based props
    floated: props.floated,
    attached: props.attached,

    // types
    animated: props.animated,
    basic: props.basic,
    inverted: props.inverted,

    // variations
    circular: props.circular,
    compact: props.compact,
    fluid: props.fluid,

    // component
    button: props.defaultClasses
  };

  // string types
  classes[props.color] = !!props.color;
  classes[props.size] = !!props.size;
  classes[props.social] = !!props.social;
  classes[props.emphasis] = !!props.emphasis;
  classes[props.state] = !!props.state;

  return (0, _utilities.validateClassProps)(classes, props, validProps);
}

/**
 * Basic button. Icon and labeled buttons have own components
 */
var Button = function Button(props, context) {
  // consume props
  var animated = props.animated;
  var attached = props.attached;
  var basic = props.basic;
  var children = props.children;
  var circular = props.circular;
  var color = props.color;
  var component = props.component;
  var compact = props.compact;
  var defaultClasses = props.defaultClasses;
  var emphasis = props.emphasis;
  var floated = props.floated;
  var fluid = props.fluid;
  var inverted = props.inverted;
  var size = props.size;
  var state = props.state;
  var toggle = props.toggle;

  var other = _objectWithoutProperties(props, ['animated', 'attached', 'basic', 'children', 'circular', 'color', 'component', 'compact', 'defaultClasses', 'emphasis', 'floated', 'fluid', 'inverted', 'size', 'state', 'toggle']);

  var Component = attached || context.isAttached || animated || _react2.default.Children.count(props.children) > 1 ? 'div' : 'button';
  if (component) {
    Component = component;
  }

  other.className = (0, _classnames2.default)(other.className, getClasses(props, context));

  return _react2.default.createElement(
    Component,
    other,
    children
  );
};

/**
 * Button props
 */


/**
 * Default props
 */
Button.defaultProps = {
  defaultClasses: true
};

/**
 * Context types
 */
Button.contextTypes = {
  isAttached: _react2.default.PropTypes.bool
};

exports.default = Button;
//# sourceMappingURL=button.js.map