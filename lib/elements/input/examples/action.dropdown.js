'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _select = require('../../../modules/dropdown/select');

var _select2 = _interopRequireDefault(_select);

var _option = require('../../../modules/dropdown/option');

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyInputWithDropdown = function (_React$Component) {
    _inherits(MyInputWithDropdown, _React$Component);

    function MyInputWithDropdown() {
        _classCallCheck(this, MyInputWithDropdown);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyInputWithDropdown).call(this));

        _this.state = {
            inputVal: '',
            dropdownActive: false,
            dropdownVal: ["com"]
        };
        return _this;
    }

    _createClass(MyInputWithDropdown, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { display: 'block' } },
                    'You\'ve typed ',
                    this.state.inputVal,
                    '.',
                    _react2.default.createElement(
                        'strong',
                        null,
                        this.state.dropdownVal.join('')
                    )
                ),
                _react2.default.createElement(_input2.default, { actionPosition: 'right',
                    value: this.state.inputVal,
                    onChange: function onChange(evt) {
                        return _this2.setState({ inputVal: evt.target.value });
                    },
                    actionComponent: function actionComponent() {
                        return _react2.default.createElement(
                            _select2.default,
                            { compact: true, active: _this2.state.dropdownActive,
                                selection: true,
                                selected: _this2.state.dropdownVal,
                                onClick: function onClick() {
                                    return _this2.setState({ dropdownActive: !_this2.state.dropdownActive });
                                },
                                onRequestClose: function onRequestClose() {
                                    return _this2.setState({ dropdownActive: false });
                                },
                                onSelectChange: function onSelectChange(val) {
                                    return _this2.setState({ dropdownVal: val, dropdownActive: false });
                                } },
                            _react2.default.createElement(
                                _option2.default,
                                { value: 'com' },
                                '.com'
                            ),
                            _react2.default.createElement(
                                _option2.default,
                                { value: 'org' },
                                '.org'
                            )
                        );
                    }
                })
            );
        }
    }]);

    return MyInputWithDropdown;
}(_react2.default.Component);

_react2.default.createElement(MyInputWithDropdown, null);
//# sourceMappingURL=action.dropdown.js.map