'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('./../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _results = require('./results');

var _results2 = _interopRequireDefault(_results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
3 support results types:

{
    title: 'test',
    description: 'testing'
}

{
    animal: ['cat', 'dog']
}

['test', 'test']
*/
var Search = (_temp = _class = function (_React$Component) {
    _inherits(Search, _React$Component);

    /* eslint-enable */

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));

        _this.onBlur = function () {
            if (_this.state.focus) {
                _this.setState({
                    focus: false
                });
            }
        };

        _this.onChange = function (e) {
            _this.props.onChange(e);
        };

        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
        };

        _this.onSearchClick = function (e, child) {
            _this.props.onSearchClick(e, child);
        };

        _this.state = {
            focus: false
        };
        return _this;
    }

    /* eslint-disable */


    _createClass(Search, [{
        key: 'renderInput',
        value: function renderInput() {
            return _react2.default.createElement(
                'div',
                { className: this.getClassesInput(),
                    key: 'searchInput'
                },
                _react2.default.createElement('input', { className: 'prompt',
                    onBlur: this.onBlur,
                    onChange: this.onChange,
                    onFocus: this.onFocus,
                    placeholder: this.props.placeholder,
                    type: 'text',
                    value: this.props.value }),
                this.renderInputIcon()
            );
        }
    }, {
        key: 'renderInputIcon',
        value: function renderInputIcon() {
            if (!this.props.icon) return null;

            return _react2.default.createElement(Search.Components.Icon, { name: this.props.icon });
        }
    }, {
        key: 'renderResults',
        value: function renderResults() {
            var props = {
                key: 'searchResults',
                animate: this.state.focus && this.props.value !== '',
                emptyHeader: this.props.emptyHeader,
                emptyMessage: this.props.emptyMessage,
                onSearchClick: this.onSearchClick,
                results: this.state.focus ? this.props.results : [],
                search: this.props.value || ''
            };

            return _react2.default.createElement(
                _reactMotionUiPack2.default,
                {
                    key: 'transition',
                    component: false,
                    enter: this.props.enterAnimation,
                    leave: this.props.leaveAnimation
                },
                this.state.focus && this.props.value !== '' && _react2.default.createElement(Search.Components.Results, props)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var children = _props.children;
            var className = _props.className;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var emptyHeader = _props.emptyHeader;
            var emptyMessage = _props.emptyMessage;
            var enterAnimation = _props.enterAnimation;
            var icon = _props.icon;
            var leaveAnimation = _props.leaveAnimation;
            var loading = _props.loading;
            var onChange = _props.onChange;
            var onSearchClick = _props.onSearchClick;
            var placeholder = _props.placeholder;
            var results = _props.results;

            var other = _objectWithoutProperties(_props, ['children', 'className', 'component', 'defaultClasses', 'emptyHeader', 'emptyMessage', 'enterAnimation', 'icon', 'leaveAnimation', 'loading', 'onChange', 'onSearchClick', 'placeholder', 'results']);
            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2.default)(this.props.className, this.getClasses());

            return _react2.default.createElement(this.props.component, other, [this.renderInput(), this.renderResults()]);
        }
    }, {
        key: 'getClassesInput',
        value: function getClassesInput() {
            return (0, _classnames2.default)('ui input', {
                icon: Boolean(this.props.icon)
            });
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,
                search: this.props.defaultClasses,

                loading: this.props.loading,
                focus: this.state.focus,

                category: !Array.isArray(this.props.results)
            };
        }
    }]);

    return Search;
}(_react2.default.Component), _class.defaultProps = {
    component: 'div',
    defaultClasses: true,
    enterAnimation: {
        opacity: 1,
        scale: 1
    },
    leaveAnimation: {
        opacity: 0,
        scale: 0
    },
    icon: 'search',
    onSearchClick: function noop() {},
    placeholder: 'Search...',
    value: ''
}, _class.Components = {
    Results: _results2.default,
    Icon: _icon2.default
}, _temp);
exports.default = Search;
//# sourceMappingURL=search.js.map