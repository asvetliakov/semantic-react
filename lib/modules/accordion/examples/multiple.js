'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyMultipleAccordion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _accordion = require('../accordion');

var _accordion2 = _interopRequireDefault(_accordion);

var _accordionbody = require('../accordionbody');

var _accordionbody2 = _interopRequireDefault(_accordionbody);

var _accordiontitle = require('../accordiontitle');

var _accordiontitle2 = _interopRequireDefault(_accordiontitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMultipleAccordion = exports.MyMultipleAccordion = function (_React$Component) {
    _inherits(MyMultipleAccordion, _React$Component);

    function MyMultipleAccordion() {
        _classCallCheck(this, MyMultipleAccordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyMultipleAccordion).call(this));

        _this.state = {
            values: []
        };
        return _this;
    }

    _createClass(MyMultipleAccordion, [{
        key: 'onAccordionChange',
        value: function onAccordionChange(index) {
            // Remove key if presented, add key otherwise, preserve other keys
            this.setState({
                values: this.state.values.indexOf(index) !== -1 ? this.state.values.filter(function (cur) {
                    return cur !== index;
                }) : [].concat(_toConsumableArray(this.state.values), [index])
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _accordion2.default,
                { styled: true, activeIndexes: this.state.values, onAccordionChange: this.onAccordionChange.bind(this) },
                _react2.default.createElement(
                    _accordiontitle2.default,
                    { index: 1 },
                    'First'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    'First content'
                ),
                _react2.default.createElement(
                    _accordiontitle2.default,
                    { index: 2 },
                    'Second'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    'Second content'
                ),
                _react2.default.createElement(
                    _accordiontitle2.default,
                    { index: 3 },
                    'Third'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    'Third content'
                ),
                _react2.default.createElement(
                    _accordiontitle2.default,
                    { index: 4 },
                    'Four'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    'Four content'
                ),
                _react2.default.createElement(
                    _accordiontitle2.default,
                    { index: 5 },
                    'Five'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    'Five content'
                )
            );
        }
    }]);

    return MyMultipleAccordion;
}(_react2.default.Component);

_react2.default.createElement(MyMultipleAccordion, null);
//# sourceMappingURL=multiple.js.map