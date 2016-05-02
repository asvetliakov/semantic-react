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

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validProps = {
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
    // No 'size' here to avoid validateClassProps() picking it up and adding classes
};

/**
 * Group of buttons
 */
var Buttons = (_temp = _class = function (_React$Component) {
    _inherits(Buttons, _React$Component);

    function Buttons() {
        _classCallCheck(this, Buttons);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Buttons).apply(this, arguments));
    }

    _createClass(Buttons, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isAttached: !!this.props.attached
            };
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var attached = _props.attached;
            var basic = _props.basic;
            var children = _props.children;
            var className = _props.className;
            var color = _props.color;
            var compact = _props.compact;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var equal = _props.equal;
            var floated = _props.floated;
            var inverted = _props.inverted;
            var size = _props.size;
            var vertical = _props.vertical;

            var other = _objectWithoutProperties(_props, ['attached', 'basic', 'children', 'className', 'color', 'compact', 'component', 'defaultClasses', 'equal', 'floated', 'inverted', 'size', 'vertical']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses,

                // types
                basic: this.props.basic,
                inverted: this.props.inverted,

                // variations
                attached: this.props.attached,
                compact: this.props.compact,
                vertical: this.props.vertical,

                // component
                buttons: this.props.defaultClasses
            };

            var childCount = _react2.default.Children.count(this.props.children);

            // buttons group with >0 buttons that are all of equal width
            if (this.props.equal) {
                if (childCount > 1 && childCount <= 12) {
                    classes[_utilities.Numbers[childCount]] = true;
                } else {
                    classes['fluid'] = true;
                }
            }

            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }]);

    return Buttons;
}(_react2.default.Component), _class.childContextTypes = {
    isAttached: _react2.default.PropTypes.bool
}, _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps), _temp);
exports.default = Buttons;
//# sourceMappingURL=buttons.js.map