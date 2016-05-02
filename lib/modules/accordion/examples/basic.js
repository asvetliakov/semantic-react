'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyAccordion = undefined;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyAccordion = exports.MyAccordion = function (_React$Component) {
    _inherits(MyAccordion, _React$Component);

    function MyAccordion() {
        _classCallCheck(this, MyAccordion);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyAccordion).call(this));

        _this.state = {
            values: [] // Current active content
        };
        return _this;
    }

    // Fired on accordion title click, index will be title index


    _createClass(MyAccordion, [{
        key: 'onAccordionChange',
        value: function onAccordionChange(index) {
            this.setState({
                values: this.state.values.indexOf(index) !== -1 ? [] : [index]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // Index is required for AccordionTitle, strings or numbers are accepted
            return _react2.default.createElement(
                _accordion2.default,
                { activeIndexes: this.state.values, onAccordionChange: this.onAccordionChange.bind(this) },
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
                )
            );
        }
    }]);

    return MyAccordion;
}(_react2.default.Component);

_react2.default.createElement(MyAccordion, null);
//# sourceMappingURL=basic.js.map