'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_temp2 = _class = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Checkbox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClick = function (event) {
            if (_this.props.disabled || _this.props.readOnly) return;

            _this.props.onClick(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
        key: 'renderChildren',
        value: function renderChildren() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var defaultClasses = _props.defaultClasses;
            var className = _props.className;
            var onClick = _props.onClick;
            var type = _props.type;
            var component = _props.component;
            var readOnly = _props.readOnly;
            var checked = _props.checked;

            var other = _objectWithoutProperties(_props, ['children', 'defaultClasses', 'className', 'onClick', 'type', 'component', 'readOnly', 'checked']);
            /* eslint-enable no-use-before-define */

            var childElements = [_react2.default.createElement('input', _extends({}, other, {
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                readOnly: true,
                checked: checked })), _react2.default.createElement(
                'label',
                { key: 'label' },
                children
            )];

            return childElements;
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props2 = this.props;
            var component = _props2.component;
            var defaultClasses = _props2.defaultClasses;
            var checked = _props2.checked;
            var type = _props2.type;
            var onClick = _props2.onClick;
            var name = _props2.name;

            var other = _objectWithoutProperties(_props2, ['component', 'defaultClasses', 'checked', 'type', 'onClick', 'name']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
            other.onClick = this.onClick;

            return _react2.default.createElement(this.props.component, other, this.renderChildren());
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses,
                checkbox: this.props.defaultClasses,

                // positioning

                // types
                radio: this.props.type == 'radio',
                slider: this.props.type == 'slider',
                toggle: this.props.type == 'toggle',

                // variations
                fitted: this.props.fitted,

                // state
                'read-only': this.props.readOnly,
                checked: this.props.checked,
                disabled: this.props.disabled,
                indeterminate: this.props.indeterminate
            };
        }
    }]);

    return Checkbox;
}(_react.Component), _class.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    type: 'default',
    onClick: function onClick() {}
}), _temp2);
exports.default = Checkbox;
//# sourceMappingURL=checkbox.js.map