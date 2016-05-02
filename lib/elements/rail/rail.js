'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rail = (_temp = _class = function (_React$Component) {
    _inherits(Rail, _React$Component);

    function Rail() {
        _classCallCheck(this, Rail);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Rail).apply(this, arguments));
    }

    _createClass(Rail, [{
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var attached = _props.attached;
            var children = _props.children;
            var className = _props.className;
            var close = _props.close;
            var defaultClasses = _props.defaultClasses;
            var dividing = _props.dividing;
            var floated = _props.floated;
            var internal = _props.internal;

            var other = _objectWithoutProperties(_props, ['attached', 'children', 'className', 'close', 'defaultClasses', 'dividing', 'floated', 'internal']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                // default
                ui: this.props.defaultClasses,

                right: this.props.floated === 'right',
                left: this.props.floated === 'left',

                // types
                attached: this.props.attached,
                very: this.props.closer,
                close: this.props.close || this.props.closer,
                dividing: this.props.dividing,
                internal: this.props.internal,

                // component
                rail: this.props.defaultClasses
            };
        }
    }]);

    return Rail;
}(_react2.default.Component), _class.defaultProps = {
    component: 'div',
    close: false,
    defaultClasses: true
}, _temp);
exports.default = Rail;
//# sourceMappingURL=rail.js.map