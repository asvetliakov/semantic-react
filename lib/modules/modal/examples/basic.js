'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modal = require('../modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('../../../elements/button/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('./../../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _header = require('./../../../elements/header/header');

var _header2 = _interopRequireDefault(_header);

var _content = require('./../../../elements/simple/content');

var _content2 = _interopRequireDefault(_content);

var _description = require('./../../../elements/simple/description');

var _description2 = _interopRequireDefault(_description);

var _actions = require('./../../../elements/simple/actions');

var _actions2 = _interopRequireDefault(_actions);

var _labeledbutton = require('./../../../elements/button/labeledbutton');

var _labeledbutton2 = _interopRequireDefault(_labeledbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyBasicModal = function (_React$Component) {
    _inherits(MyBasicModal, _React$Component);

    function MyBasicModal(props) {
        _classCallCheck(this, MyBasicModal);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyBasicModal).call(this, props));

        _this.state = {
            active: false
        };
        return _this;
    }

    _createClass(MyBasicModal, [{
        key: 'onCloseModal',
        value: function onCloseModal() {
            this.setState({
                active: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return _this2.setState({ active: true });
                        } },
                    'Open modal'
                ),
                _react2.default.createElement(
                    _modal2.default,
                    { basic: true, onRequestClose: this.onCloseModal.bind(this), active: this.state.active },
                    _react2.default.createElement(
                        _header2.default,
                        { icon: 'archive' },
                        'Archive old messages'
                    ),
                    _react2.default.createElement(
                        _content2.default,
                        null,
                        _react2.default.createElement(
                            'p',
                            null,
                            'Your inbox is getting full, would you like us to enable automatic archiving of old messages?'
                        )
                    ),
                    _react2.default.createElement(
                        _actions2.default,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { color: 'red',
                                basic: true,
                                inverted: true,
                                onClick: this.onCloseModal.bind(this)
                            },
                            _react2.default.createElement(_icon2.default, { name: 'remove' }),
                            'No'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { color: 'green',
                                inverted: true,
                                onClick: this.onCloseModal.bind(this)
                            },
                            _react2.default.createElement(_icon2.default, { name: 'checkmark' }),
                            'Yep'
                        )
                    )
                )
            );
        }
    }]);

    return MyBasicModal;
}(_react2.default.Component);

_react2.default.createElement(MyBasicModal, null);
//# sourceMappingURL=basic.js.map