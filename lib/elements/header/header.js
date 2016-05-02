'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _utilities = require('../../utilities');

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _icon = require('../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _image = require('../image/image');

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

var Header = (_temp = _class = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'getChildContext',

        /* eslint-enable */

        // we don't want the ui in these circumstances
        value: function getChildContext() {
            return {
                isHeaderChild: true
            };
        } // handles


        /* eslint-disable */


        // any header/sub header under a header is a sub header

    }, {
        key: 'render',
        value: function render() {

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var attached = _props.attached;
            var children = _props.children;
            var className = _props.className;
            var color = _props.color;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var divider = _props.divider;
            var emphasis = _props.emphasis;
            var floated = _props.floated;
            var horizontal = _props.horizontal;
            var icon = _props.icon;
            var iconComponent = _props.iconComponent;
            var inverted = _props.inverted;
            var item = _props.item;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'children', 'className', 'color', 'component', 'defaultClasses', 'disabled', 'divider', 'emphasis', 'floated', 'horizontal', 'icon', 'iconComponent', 'inverted', 'item', 'size']);
            /* eslint-enable no-use-before-define */

            // add class names


            other.className = (0, _classnames2.default)(other.className, this.getClasses());
            var IconComponent = iconComponent || Header.Components.Icon;
            var Component = component;
            if (Component === 'div' && this.props.onClick) {
                Component = 'a';
            }

            return _react2.default.createElement(
                Component,
                other,
                icon && _react2.default.createElement(IconComponent, { name: icon }),
                children
            );
        }
    }, {
        key: 'shouldHaveUiClass',
        value: function shouldHaveUiClass() {
            if (!this.props.defaultClasses) {
                return false;
            }
            if (this.context.isListChild || this.context.isHeaderChild || this.context.isMenuChild || this.context.isCardChild) {
                return false;
            }

            // Modal header shouldn't have ui class only for simple modals, i.e. icon header or header with image/icon
            // content should HAS ui class
            if (this.context.isModalChild) {
                // Icon header
                if (this.props.icon) {
                    return true;
                }
                // Header with icon / image content should has UI class
                if ((0, _utilities.hasChild)(this.props.children, Header.Components.Icon) || (0, _utilities.hasChild)(this.props.children, Header.Components.Image)) {
                    return true;
                }
                return false;
            }
            return true;
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.shouldHaveUiClass(),

                // types
                icon: this.props.icon,
                item: this.context.isMenuChild && this.props.item,

                // states
                disabled: this.props.disabled,

                // variations
                aligned: this.props.aligned && this.props.aligned !== 'justified',
                attached: this.props.attached,
                block: this.props.emphasis == 'block',
                dividing: this.props.emphasis == 'dividing',
                divider: this.props.divider, // makes a header that is also a divider
                floated: this.props.floated,
                horizontal: this.props.horizontal,
                inverted: this.props.inverted,

                sub: this.context.isHeaderChild && this.props.defaultClasses,
                // component
                header: this.props.defaultClasses
            };

            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            classes = (0, _utilities.validateClassProps)(classes, this.props, validProps);
            if (this.props.aligned === 'justified') {
                classes['justified aligned'] = false;
                classes['justified'] = true;
            }
            return classes;
        }
    }]);

    return Header;
}(_react2.default.Component), _class.contextTypes = {
    isListChild: _react2.default.PropTypes.bool,
    isHeaderChild: _react2.default.PropTypes.bool,
    isAccordionChild: _react2.default.PropTypes.bool,
    isMenuChild: _react2.default.PropTypes.bool,
    isCardChild: _react2.default.PropTypes.bool,
    isModalChild: _react2.default.PropTypes.bool
}, _class.childContextTypes = {
    isHeaderChild: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    attached: false,
    item: true }), _class.Components = {
    Icon: _icon2.default,
    Image: _image2.default
}, _temp);
exports.default = Header;
//# sourceMappingURL=header.js.map