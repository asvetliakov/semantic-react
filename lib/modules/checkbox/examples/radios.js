'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _fields = require('../../../collections/form/fields');

var _fields2 = _interopRequireDefault(_fields);

var _Fields = require('../../../collections/form/Fields');

var _Fields2 = _interopRequireDefault(_Fields);

var _form = require('./../../../collections/form/form');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyRadios = function (_React$Component) {
    _inherits(MyRadios, _React$Component);

    function MyRadios(props) {
        _classCallCheck(this, MyRadios);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyRadios).call(this, props));

        _this.state = {
            value: null
        };
        return _this;
    }

    _createClass(MyRadios, [{
        key: 'onClickRadio',
        value: function onClickRadio(value) {
            this.setState({
                value: value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;


            return _react2.default.createElement(
                _fields2.default,
                null,
                _react2.default.createElement(
                    _Fields2.default,
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Omg bananas!'
                    ),
                    _react2.default.createElement(
                        _form2.default,
                        null,
                        _react2.default.createElement(
                            _checkbox2.default,
                            {
                                type: 'radio',
                                checked: value === 'one',
                                onClick: this.onClickRadio.bind(this, 'one')
                            },
                            'One banana'
                        )
                    ),
                    _react2.default.createElement(
                        _form2.default,
                        null,
                        _react2.default.createElement(
                            _checkbox2.default,
                            {
                                type: 'radio',
                                checked: value === 'two',
                                onClick: this.onClickRadio.bind(this, 'two')
                            },
                            'Two banana'
                        )
                    )
                )
            );
        }
    }]);

    return MyRadios;
}(_react2.default.Component);

_react2.default.createElement(MyRadios, null);
//# sourceMappingURL=radios.js.map