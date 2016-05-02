'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _icon = require('./../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Title element for Accordion
 */
var AccordionTitle = function AccordionTitle(props) {
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;
    var active = props.active;
    var icon = props.icon;
    var iconComponent = props.iconComponent;
    var index = props.index;
    var initialStyle = props.initialStyle;
    var onClick = props.onClick;

    var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses', 'active', 'icon', 'iconComponent', 'index', 'initialStyle', 'onClick']);

    var Component = component;
    var IconComponent = iconComponent || AccordionTitle.Components.Icon;

    other.className = (0, _classnames2.default)(other.className, {
        title: defaultClasses,
        active: active
    });
    // Set style to initial style, just style will contain animating values, we don't want animate the title
    return _react2.default.createElement(
        Component,
        _extends({}, other, { onClick: onClick, style: initialStyle }),
        _react2.default.createElement(IconComponent, { name: icon }),
        children
    );
};

AccordionTitle.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: false,
    icon: 'dropdown'
});

AccordionTitle.Components = {
    Icon: _icon2.default
};

exports.default = AccordionTitle;
//# sourceMappingURL=accordiontitle.js.map