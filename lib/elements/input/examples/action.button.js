'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _button = require('../../button/button');

var _button2 = _interopRequireDefault(_button);

var _header = require('../../header/header');

var _header2 = _interopRequireDefault(_header);

var _segment = require('../../segment/segment');

var _segment2 = _interopRequireDefault(_segment);

var _segments = require('../../segment/segments');

var _segments2 = _interopRequireDefault(_segments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyInputWithButton = function (_React$Component) {
    _inherits(MyInputWithButton, _React$Component);

    function MyInputWithButton() {
        _classCallCheck(this, MyInputWithButton);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyInputWithButton).call(this));

        _this.state = {
            value: 'initial',
            send: false,
            sendValue: ''
        };
        return _this;
    }

    _createClass(MyInputWithButton, [{
        key: 'onButtonClick',
        value: function onButtonClick() {
            this.setState({
                send: !this.state.send,
                sendValue: this.state.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _segments2.default,
                { attached: true },
                this.state.send && _react2.default.createElement(
                    _segment2.default,
                    { raised: true },
                    _react2.default.createElement(
                        _header2.default,
                        null,
                        'You\'ve send the value: ',
                        this.state.sendValue
                    )
                ),
                _react2.default.createElement(
                    _segment2.default,
                    null,
                    _react2.default.createElement(_input2.default, { actionComponent: function actionComponent() {
                            return _react2.default.createElement(
                                _button2.default,
                                { emphasis: 'primary', onClick: _this2.onButtonClick.bind(_this2) },
                                _this2.state.send ? 'Unsend' : 'Send'
                            );
                        },
                        onChange: function onChange(evt) {
                            return _this2.setState({ value: evt.target.value });
                        },
                        value: this.state.value })
                )
            );
        }
    }]);

    return MyInputWithButton;
}(_react2.default.Component);

_react2.default.createElement(MyInputWithButton, null);
//# sourceMappingURL=action.button.js.map