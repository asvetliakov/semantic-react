'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _button = require('../../button/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleInputLoading = function (_React$Component) {
    _inherits(ToggleInputLoading, _React$Component);

    function ToggleInputLoading() {
        _classCallCheck(this, ToggleInputLoading);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ToggleInputLoading).call(this));

        _this.state = {
            loading: false
        };
        return _this;
    }

    _createClass(ToggleInputLoading, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _button2.default,
                    { toggle: true, onClick: this.toggleLoadingState.bind(this) },
                    'Toggle input loading'
                ),
                _react2.default.createElement(_input2.default, { icon: 'users', state: this.state.loading ? 'loading' : null })
            );
        }
    }, {
        key: 'toggleLoadingState',
        value: function toggleLoadingState() {
            this.setState({
                loading: !this.state.loading
            });
        }
    }]);

    return ToggleInputLoading;
}(_react2.default.Component);

_react2.default.createElement(ToggleInputLoading, null);
//# sourceMappingURL=basic.loading.js.map