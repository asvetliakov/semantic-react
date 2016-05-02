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

var Bar = (_temp = _class = function (_React$Component) {
    _inherits(Bar, _React$Component);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).apply(this, arguments));
    }

    _createClass(Bar, [{
        key: 'renderProgress',
        value: function renderProgress() {
            return _react2.default.createElement(
                'div',
                {
                    className: 'progress',
                    key: 'progressPercentage'
                },
                typeof this.props.style.width === 'string' ? parseInt(this.props.style.width) + '%' : this.props.progress + '%'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var defaultClasses = _props.defaultClasses;
            var progress = _props.progress;
            var showPercentage = _props.showPercentage;
            var component = _props.component;

            var other = _objectWithoutProperties(_props, ['defaultClasses', 'progress', 'showPercentage', 'component']);
            /* eslint-enable no-use-before-define */

            // add classnames


            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());
            other.style = { width: progress + '%', transitionDuration: this.props.duration + 'ms' };

            return _react2.default.createElement(this.props.component, other, this.props.showPercentage ? this.renderProgress() : []);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                bar: true
            };
        }
    }]);

    return Bar;
}(_react2.default.Component), _class.defaultProps = {
    component: 'div',
    defaultClasses: true
}, _temp);
exports.default = Bar;
//# sourceMappingURL=bar.js.map