'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyNestedAccordion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _accordion = require('../accordion');

var _accordion2 = _interopRequireDefault(_accordion);

var _accordionbody = require('../accordionbody');

var _accordionbody2 = _interopRequireDefault(_accordionbody);

var _accordiontitle = require('../accordiontitle');

var _accordiontitle2 = _interopRequireDefault(_accordiontitle);

var _segment = require('../../../elements/segment/segment');

var _segment2 = _interopRequireDefault(_segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyNestedAccordion = exports.MyNestedAccordion = function (_React$Component) {
    _inherits(MyNestedAccordion, _React$Component);

    function MyNestedAccordion() {
        _classCallCheck(this, MyNestedAccordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyNestedAccordion).call(this));

        _this.state = {
            primary: [],
            nested1: [],
            nested2: []
        };
        return _this;
    }

    _createClass(MyNestedAccordion, [{
        key: 'onAccordionChange',
        value: function onAccordionChange(key, index) {
            this.setState(_defineProperty({}, key, this.state[key].indexOf(index) !== -1 ? [] : [index]));
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _accordion2.default,
                { styled: true, activeIndexes: this.state.primary, onAccordionChange: this.onAccordionChange.bind(this, 'primary') },
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
                    'Nested'
                ),
                _react2.default.createElement(
                    _accordionbody2.default,
                    null,
                    _react2.default.createElement(
                        'p',
                        null,
                        'Here is another accordion'
                    ),
                    _react2.default.createElement(
                        _accordion2.default,
                        { activeIndexes: this.state.nested1, onAccordionChange: this.onAccordionChange.bind(this, 'nested1') },
                        _react2.default.createElement(
                            _accordiontitle2.default,
                            { index: 1 },
                            'Nested 1'
                        ),
                        _react2.default.createElement(
                            _accordionbody2.default,
                            null,
                            'First nested 1 content'
                        ),
                        _react2.default.createElement(
                            _accordiontitle2.default,
                            { index: 2 },
                            'Another Nested'
                        ),
                        _react2.default.createElement(
                            _accordionbody2.default,
                            null,
                            _react2.default.createElement(
                                'p',
                                null,
                                'And another...'
                            ),
                            _react2.default.createElement(
                                _accordion2.default,
                                { activeIndexes: this.state.nested2, onAccordionChange: this.onAccordionChange.bind(this, 'nested2') },
                                _react2.default.createElement(
                                    _accordiontitle2.default,
                                    { index: 1 },
                                    'Nested nested'
                                ),
                                _react2.default.createElement(
                                    _accordionbody2.default,
                                    null,
                                    'Hello from deep nest'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MyNestedAccordion;
}(_react2.default.Component);

_react2.default.createElement(MyNestedAccordion, null);
//# sourceMappingURL=nested.js.map