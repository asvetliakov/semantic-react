'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyControlledInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _segment = require('../../segment/segment');

var _segment2 = _interopRequireDefault(_segment);

var _segments = require('../../segment/segments');

var _segments2 = _interopRequireDefault(_segments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyControlledInput = exports.MyControlledInput = function (_React$Component) {
    _inherits(MyControlledInput, _React$Component);

    function MyControlledInput(props) {
        _classCallCheck(this, MyControlledInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyControlledInput).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(MyControlledInput, [{
        key: 'onInputChange',
        value: function onInputChange(event) {
            this.setState({
                value: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _segments2.default,
                null,
                _react2.default.createElement(
                    _segment2.default,
                    { raised: true },
                    this.state.value
                ),
                _react2.default.createElement(
                    _segment2.default,
                    null,
                    _react2.default.createElement(_input2.default, { type: 'text',
                        value: this.state.value,
                        onChange: this.onInputChange.bind(this) })
                )
            );
        }
    }]);

    return MyControlledInput;
}(_react2.default.Component);

_react2.default.createElement(MyControlledInput, null);
//# sourceMappingURL=basic.controlled.js.map