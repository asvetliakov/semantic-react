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

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Controlled accordion
 */
var Accordion = (_temp = _class = function (_React$Component) {
    _inherits(Accordion, _React$Component);

    function Accordion(props) {
        _classCallCheck(this, Accordion);

        // Disallow to override animation style for now, since paddingTop and paddingBottom need to be animated too
        // I don't want to bother with dealing with unit measures for now, so just hardcode semantic EM values here and in body component

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

        _this.enterAnimation = {
            height: {
                val: 'auto',
                stiffness: 300,
                damping: 40,
                precision: 0.1
            },
            paddingTop: {
                val: 0.5,
                stiffness: 300,
                damping: 40,
                precision: 0.2
            }
        };
        _this.enterAnimation.paddingBottom = {
            val: props.styled ? 1.5 : 1,
            stiffness: 300,
            damping: 40,
            precision: 0.3
        };
        // this.enterAnimation.paddingBottom = (props.styled) ? 1.5 : 1; // em
        // this.enterAnimation.paddingBottom = 1.0; // em
        _this.leaveAnimation = {
            height: 0,
            paddingTop: 0,
            paddingBottom: 0
        };
        return _this;
    }

    _createClass(Accordion, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isAccordionChild: true
            };
        }

        /**
         * Accordion title click handler
         * 
         * @param {number|string} index Index
         * @param {React.MouseEvent} evt Mouse event
         */

    }, {
        key: 'onAccordionTitleClick',
        value: function onAccordionTitleClick(index, evt) {
            evt.preventDefault();
            this.props.onAccordionChange(index);
        }

        /**
         * Process children. Skips non active content
         * 
         * @returns Children
         */

    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var processNextContentChild = false;
            var lastActiveIndex = null;

            // not using child.type checking because these will fail if using some kind of HOC component
            return _react2.default.Children.map(this.props.children, function (child) {
                if (child.props.index) {
                    // This is accordion title
                    var active = false;
                    if (_this2.props.activeIndexes.indexOf(child.props.index) !== -1) {
                        // It should be active
                        // set processing flags
                        processNextContentChild = true;
                        lastActiveIndex = child.props.index;
                        active = true;
                    }
                    return _react2.default.cloneElement(child, {
                        active: active,
                        key: child.key ? child.key : child.props.index,
                        initialStyle: child.props.style, // Set original passed style, component will use it instead of style
                        onClick: _this2.onAccordionTitleClick.bind(_this2, child.props.index)
                    });
                } else if (processNextContentChild && lastActiveIndex !== null) {
                    // reset index flag
                    lastActiveIndex = null;
                    // reset processing flag
                    processNextContentChild = false;
                    return _react2.default.cloneElement(child, {
                        active: true,
                        key: child.key ? child.key : 'content-' + lastActiveIndex,
                        style: _extends({}, child.props.style, { overflow: 'hidden' })
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var component = _props.component;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var activeIndexes = _props.activeIndexes;
            var fluid = _props.fluid;
            var inverted = _props.inverted;
            var onAccordionChange = _props.onAccordionChange;
            var styled = _props.styled;

            var other = _objectWithoutProperties(_props, ['component', 'children', 'defaultClasses', 'activeIndexes', 'fluid', 'inverted', 'onAccordionChange', 'styled']);

            var newChildren = this.renderChildren();
            other.className = (0, _classnames2.default)(other.className, this.getClasses());
            return _react2.default.createElement(
                _reactMotionUiPack2.default,
                { component: component,
                    enter: this.enterAnimation,
                    leave: this.leaveAnimation,
                    props: other
                },
                newChildren
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses && !this.context.isAccordionChild,

                // positioning

                // types
                styled: this.props.styled,

                // variations
                fluid: this.props.fluid,
                inverted: this.props.inverted,

                // component
                accordion: this.props.defaultClasses
            };
        }
    }]);

    return Accordion;
}(_react2.default.Component), _class.contextTypes = {
    isAccordionChild: _react2.default.PropTypes.bool
}, _class.childContextTypes = {
    isAccordionChild: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    activeIndexes: [],
    onAccordionChange: function onAccordionChange() {}
}), _temp);
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map