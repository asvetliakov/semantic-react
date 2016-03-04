'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elements = require('../../elements');

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _results = require('./results');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

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

var Search = (function (_React$Component) {
    _inherits(Search, _React$Component);

    _createClass(Search, null, [{
        key: 'propTypes',
        value: {
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.any,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.func, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            emptyHeader: _react2['default'].PropTypes.string,
            emptyMessage: _react2['default'].PropTypes.string,
            enterAnimation: _react2['default'].PropTypes.object,
            icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
            leaveAnimation: _react2['default'].PropTypes.object,
            loading: _react2['default'].PropTypes.bool,
            onChange: _react2['default'].PropTypes.func.isRequired,
            onSearchClick: _react2['default'].PropTypes.func,
            placeholder: _react2['default'].PropTypes.string,
            results: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object])
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
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
            onSearchClick: function noop() {},
            placeholder: 'Search...'
        },
        enumerable: true
    }]);

    function Search(props) {
        _classCallCheck(this, _Search);

        _get(Object.getPrototypeOf(_Search.prototype), 'constructor', this).call(this, props);

        // see shouldComponentUpdate
        this.results = false;

        this.state = {
            focus: false
        };
    }

    _createClass(Search, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props, state) {
            // if the results are identical, don't rerender
            // if the new state is inactive, we may be trying to blur
            if (this.props.results === props.results && state.active) {
                return false;
            }

            // if the search box is empty, don't allow re-rendering of results
            // while the box animates closed
            if (this.searchInput && this.searchInput.value === '') {
                this.results = this.props.results;
            } else {
                this.results = false;
            }

            return true;
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.setState({
                focus: false
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            if (e.target.value === '') {
                this.setState({
                    focus: false
                });
            } else {
                this.setState({
                    focus: true
                });
                this.props.onChange(e);
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.setState({
                focus: true
            });
        }
    }, {
        key: 'onSearchClick',
        value: function onSearchClick(e, child) {
            this.searchInput.value = child;

            this.props.onSearchClick(e, child);
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            if (this.props.icon || this.props.loading) {
                return this.renderIconInput();
            } else {
                return this.renderInput();
            }
        }
    }, {
        key: 'renderIconInput',
        value: function renderIconInput() {
            return _react2['default'].createElement(
                'div',
                { className: 'ui icon input' },
                this.renderInput(),
                _react2['default'].createElement(_elements.Icon, { name: this.props.icon || 'search' })
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _this = this;

            return _react2['default'].createElement('input', { className: 'prompt',
                key: 'searchPrompt',
                onBlur: this.onBlur.bind(this),
                onChange: this.onChange.bind(this),
                onFocus: this.onFocus.bind(this),
                placeholder: this.props.placeholder,
                ref: function (ref) {
                    return _this.searchInput = ref;
                },
                type: 'text' });
        }
    }, {
        key: 'renderResults',
        value: function renderResults() {
            var props = {
                emptyHeader: this.props.emptyHeader,
                emptyMessage: this.props.emptyMessage,
                key: 'searchResults',
                onSearchClick: this.onSearchClick.bind(this),
                results: this.results || this.props.results,
                search: this.searchInput ? this.searchInput.value : ''
            };

            return _react2['default'].createElement(
                _reactMotionUiPack2['default'],
                { component: false,
                    enter: this.props.enterAnimation,
                    leave: this.props.leaveAnimation
                },
                this.state.focus && this.searchInput.value !== '' && _react2['default'].createElement(_results.Results, props)
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

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, [this.renderChildren(), this.renderResults()]);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                ui: this.props.defaultClasses,

                focus: this.state.focus,

                category: !Array.isArray(this.props.results),

                search: this.props.defaultClasses
            };
        }
    }]);

    var _Search = Search;
    Search = (0, _radium2['default'])(Search) || Search;
    return Search;
})(_react2['default'].Component);

exports.Search = Search;
//# sourceMappingURL=search.js.map