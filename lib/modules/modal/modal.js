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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _utilities = require('../../utilities');

var _dimmer = require('../dimmer/dimmer');

var _dimmer2 = _interopRequireDefault(_dimmer);

var _modalelement = require('./modalelement');

var _modalelement2 = _interopRequireDefault(_modalelement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal is modal
 */
var Modal = (_temp = _class = function (_React$Component) {
    _inherits(Modal, _React$Component);

    /* eslint-enable */

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

        _this.state = {
            active: props.active,
            closing: false,
            positionTop: 0,
            scrolling: false
        };

        _this.modal = null;
        return _this;
    }

    /* eslint-disable */


    _createClass(Modal, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isModalChild: true
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.active) {
                // Set initial position for modal
                this.setPlacement();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.active !== this.state.active) {
                if (nextProps.active) {
                    this.setState({
                        active: true,
                        closing: false
                    });
                } else {
                    // need to wait some time to play animation, otherwise it will kill portal
                    this.setState({
                        closing: true
                    });
                    setTimeout(function () {
                        _this2.setState({
                            closing: false,
                            active: false
                        });
                    }, 500);
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // Set modal position after update
            this.setPlacement();
        }
    }, {
        key: 'onPressEsc',
        value: function onPressEsc(event) {
            if (event.keyCode !== 27) {
                return;
            }

            event.stopPropagation();
            this.props.onRequestClose(event);
        }
    }, {
        key: 'onOutsideClick',
        value: function onOutsideClick(event) {
            if (!this.state.active || this.state.closing) {
                return;
            }
            if (!this.modal) {
                return;
            }
            if ((0, _utilities.isNodeInRoot)(event.target, _reactDom2.default.findDOMNode(this.modal))) {
                return;
            }
            event.stopPropagation();
            this.props.onRequestClose(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props;
            var component = _props.component;
            var enterAnimation = _props.enterAnimation;
            var leaveAnimation = _props.leaveAnimation;
            var children = _props.children;
            var dimmed = _props.dimmed;
            var onOutsideClick = _props.onOutsideClick;
            var style = _props.style;
            var zIndex = _props.zIndex;
            var onModalOpened = _props.onModalOpened;
            var onModalClosed = _props.onModalClosed;

            var other = _objectWithoutProperties(_props, ['component', 'enterAnimation', 'leaveAnimation', 'children', 'dimmed', 'onOutsideClick', 'style', 'zIndex', 'onModalOpened', 'onModalClosed']);

            // Apply layer to portal to prevent clicking outside


            var portalStyle = {
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: zIndex
            };

            var modalPosition = {
                top: this.state.positionTop,
                position: 'fixed'
            };

            var modalStyle = style ? _extends({}, style, modalPosition) : modalPosition;

            return _react2.default.createElement(
                _reactPortal2.default,
                { isOpened: this.state.active || !this.state.active && this.state.closing,
                    style: portalStyle,
                    onOpen: onModalOpened,
                    onClose: onModalClosed
                },
                _react2.default.createElement(
                    Modal.Components.Dimmer,
                    { active: this.state.active,
                        page: true,
                        noWrapChildren: true,
                        className: 'modals'
                    },
                    _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
                        onKeyDown: this.onPressEsc.bind(this),
                        onMouseDown: this.onOutsideClick.bind(this),
                        onTouchStart: this.onOutsideClick.bind(this) }),
                    _react2.default.createElement(
                        _reactMotionUiPack2.default,
                        { component: false,
                            enter: enterAnimation,
                            leave: leaveAnimation
                        },
                        this.state.active && !this.state.closing && _react2.default.createElement(
                            Modal.Components.ModalElement,
                            _extends({}, other, {
                                ref: function ref(_ref) {
                                    return _this3.modal = _ref;
                                },
                                key: 'modal',
                                scrolling: this.state.scrolling,
                                style: modalStyle
                            }),
                            children
                        )
                    )
                )
            );
        }

        /**
         * Calculate modal position to center on the screen
         */

    }, {
        key: 'setPlacement',
        value: function setPlacement() {
            if (!this.state.active || this.state.closing) {
                return;
            }
            if (!this.modal) {
                return;
            }

            var htmlElement = _reactDom2.default.findDOMNode(this.modal);
            // get element height
            if (htmlElement) {
                var height = htmlElement.offsetHeight;

                // Modal is too big, set the scrolling state then
                if (height > window.innerHeight) {
                    // semantic sets top margin for scrolling modal,
                    // so no need to bother with position
                    this.setState({
                        positionTop: 0,
                        scrolling: true
                    });
                } else {
                    var top = window.innerHeight / 2 - height / 2;
                    this.setState({
                        positionTop: top,
                        scrolling: false
                    });
                }
            }
        }
    }]);

    return Modal;
}(_react2.default.Component), _class.childContextTypes = {
    isModalChild: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _modalelement2.default.defaultProps, {
    enterAnimation: {
        scale: 1,
        opacity: 1
    },
    leaveAnimation: {
        scale: 0.5,
        opacity: 0.5
    },
    onRequestClose: function onRequestClose() {},
    onModalOpened: function onModalOpened() {},
    onModalClosed: function onModalClosed() {},
    zIndex: 1000
}), _class.Components = {
    Dimmer: _dimmer2.default,
    ModalElement: _modalelement2.default
}, _temp);
exports.default = Modal;
//# sourceMappingURL=modal.js.map