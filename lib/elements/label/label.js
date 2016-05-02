'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
  corner: ['left', 'right'],
  pointing: ['top', 'bottom', 'left', 'right'],
  ribbon: ['right']
};

function getClasses(props, context) {
  var classes = {
    // default
    ui: props.defaultClasses && !context.isCardsChild && !context.isProgressChild,

    // types
    attached: props.attached,
    corner: props.corner,
    floating: props.floating,
    image: props.image,
    pointing: props.pointing,
    ribbon: props.ribbon,
    tag: props.tag,
    basic: props.basic,
    horizontal: props.horizontal,

    // variations
    circular: props.circular,
    empty: props.empty,

    // component
    label: props.defaultClasses
  };

  // handle mixed string/bool props
  classes[props.color] = !!props.color;
  classes[props.size] = !!props.size;

  return (0, _utilities.validateClassProps)(classes, props, validProps);
}

function getComponent(props) {
  return (props.link || props.onClick) && props.component === 'div' ? 'a' : props.component;
}

/**
 * Label
 */
var Label = function Label(props, context) {
  var component = props.component;
  var children = props.children;
  var defaultClasses = props.defaultClasses;
  var attached = props.attached;
  var basic = props.basic;
  var circular = props.circular;
  var color = props.color;
  var corner = props.corner;
  var empty = props.empty;
  var floating = props.floating;
  var horizontal = props.horizontal;
  var image = props.image;
  var link = props.link;
  var pointing = props.pointing;
  var ribbon = props.ribbon;
  var size = props.size;
  var tag = props.tag;

  var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses', 'attached', 'basic', 'circular', 'color', 'corner', 'empty', 'floating', 'horizontal', 'image', 'link', 'pointing', 'ribbon', 'size', 'tag']);

  var Component = getComponent(props);

  other.className = (0, _classnames2.default)(other.className, getClasses(props, context));
  return _react2.default.createElement(
    Component,
    other,
    image && _react2.default.createElement('img', { src: image }),
    children
  );
};

Label.defaultProps = _extends({}, _defaultProps2.default.defaultProps);

Label.contextTypes = {
  isCardsChild: _react2.default.PropTypes.bool,
  isProgressChild: _react2.default.PropTypes.bool
};

exports.default = Label;
//# sourceMappingURL=label.js.map