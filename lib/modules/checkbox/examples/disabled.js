'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _fields = require('../../../collections/form/fields');

var _fields2 = _interopRequireDefault(_fields);

var _form = require('./../../../collections/form/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyCheckboxes = function (_React$Component) {
    _inherits(MyCheckboxes, _React$Component);

    function MyCheckboxes(props) {
        _classCallCheck(this, MyCheckboxes);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyCheckboxes).call(this, props));

        _this.state = {
            isCheckbox: false,
            isRadio: false,
            isSlider: false,
            isToggle: false
        };
        return _this;
    }

    _createClass(MyCheckboxes, [{
        key: 'onClickCheckbox',
        value: function onClickCheckbox(name) {
            this.setState(_defineProperty({}, name, !this.state[name]));
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state;
            var isCheckbox = _state.isCheckbox;
            var isRadio = _state.isRadio;
            var isSlider = _state.isSlider;
            var isToggle = _state.isToggle;


            return _react2.default.createElement(
                _fields2.default,
                null,
                _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _checkbox2.default,
                        {
                            disabled: true,
                            checked: isCheckbox,
                            onClick: this.onClickCheckbox.bind(this, 'isCheckbox')
                        },
                        'Disabled, you can test'
                    )
                ),
                _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _checkbox2.default,
                        {
                            disabled: true,
                            type: 'radio',
                            checked: isRadio,
                            onClick: this.onClickCheckbox.bind(this, 'isRadio')
                        },
                        'Disabled, you can test'
                    )
                ),
                _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _checkbox2.default,
                        {
                            disabled: true,
                            type: 'slider',
                            checked: isSlider,
                            onClick: this.onClickCheckbox.bind(this, 'isSlider')
                        },
                        'Disabled, you can test'
                    )
                ),
                _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _checkbox2.default,
                        {
                            disabled: true,
                            type: 'toggle',
                            checked: isToggle,
                            onClick: this.onClickCheckbox.bind(this, 'isToggle')
                        },
                        'Disabled, you can test'
                    )
                )
            );
        }
    }]);

    return MyCheckboxes;
}(_react2.default.Component);

_react2.default.createElement(MyCheckboxes, null);
//# sourceMappingURL=disabled.js.map