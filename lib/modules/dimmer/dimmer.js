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

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilities = require('../../utilities');

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _content = require('./../../elements/simple/content');

var _content2 = _interopRequireDefault(_content);

var _loader = require('./../../elements/loader/loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dimmer = (_temp = _class = function (_React$Component) {
    _inherits(Dimmer, _React$Component);

    function Dimmer() {
        _classCallCheck(this, Dimmer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Dimmer).apply(this, arguments));
    }

    _createClass(Dimmer, [{
        key: 'getChildContext',

        /* eslint-enable */

        value: function getChildContext() {
            return {
                isDimmerChild: true
            };
        }

        /* eslint-disable */


        // This forces <Content> to add a centered div below it.

    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _props = this.props;
            var children = _props.children;
            var noWrapChildren = _props.noWrapChildren;

            if (noWrapChildren) {
                return children;
            } else {
                return (0, _utilities.hasChild)(children, Dimmer.Components.Loader) ? children : _react2.default.createElement(
                    Dimmer.Components.Content,
                    null,
                    children
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var active = _props2.active;
            var children = _props2.children;
            var component = _props2.component;
            var enterAnimation = _props2.enterAnimation;
            var leaveAnimation = _props2.leaveAnimation;
            var page = _props2.page;
            var inverted = _props2.inverted;

            var other = _objectWithoutProperties(_props2, ['active', 'children', 'component', 'enterAnimation', 'leaveAnimation', 'page', 'inverted']);
            /* eslint-enable no-use-before-define */

            var Component = component;
            other.className = (0, _classnames2.default)(other.className, this.getClasses());
            return _react2.default.createElement(
                _reactMotionUiPack2.default,
                { component: false,
                    enter: enterAnimation,
                    leave: leaveAnimation
                },
                active && _react2.default.createElement(
                    Component,
                    _extends({}, other, {
                        key: 'dimmer'
                    }),
                    this.renderChildren()
                )
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,
                dimmer: this.props.defaultClasses,
                active: this.props.active,
                page: this.props.page,
                inverted: this.props.inverted
            };
        }
    }]);

    return Dimmer;
}(_react2.default.Component), _class.childContextTypes = {
    isDimmerChild: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: false,
    enterAnimation: {
        opacity: 1
    },
    leaveAnimation: {
        opacity: 0
    },
    page: false,
    inverted: false,
    noWrapChildren: false
}), _class.Components = {
    Content: _content2.default,
    Loader: _loader2.default
}, _temp);
exports.default = Dimmer;
//# sourceMappingURL=dimmer.js.map