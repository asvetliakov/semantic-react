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

var _defaultProps = require('./../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal element
 */
// Need to be statefull component because Modal uses ref
var ModalElement = (_temp = _class = function (_React$Component) {
    _inherits(ModalElement, _React$Component);

    function ModalElement() {
        _classCallCheck(this, ModalElement);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalElement).apply(this, arguments));
    }

    _createClass(ModalElement, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var children = _props.children;
            var active = _props.active;
            var basic = _props.basic;
            var fullscreen = _props.fullscreen;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['component', 'defaultClasses', 'children', 'active', 'basic', 'fullscreen', 'size']);

            var Component = component;
            other.className = (0, _classnames2.default)(other.className, this.getClasses());
            return _react2.default.createElement(
                Component,
                other,
                children
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                ui: this.props.defaultClasses,
                active: this.props.active,
                basic: this.props.basic,
                fullscreen: this.props.fullscreen,
                scrolling: this.props.scrolling,
                modal: this.props.defaultClasses
            };
            classes[this.props.size] = !!this.props.size;
            return classes;
        }
    }]);

    return ModalElement;
}(_react2.default.Component), _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    active: true
}), _temp);
exports.default = ModalElement;
//# sourceMappingURL=modalelement.js.map