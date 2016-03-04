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

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, _Header);

        _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Header, [{
        key: 'getChildContext',
        // handles
        value: function getChildContext() {
            return {
                isHeaderChild: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var Component = this.props.onClick ? 'a' : 'div';

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var attached = _props.attached;
            var children = _props.children;
            var className = _props.className;
            var color = _props.color;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var disabled = _props.disabled;
            var divider = _props.divider;
            var emphasis = _props.emphasis;
            var floated = _props.floated;
            var horizontal = _props.horizontal;
            var inverted = _props.inverted;
            var item = _props.item;
            var size = _props.size;

            var other = _objectWithoutProperties(_props, ['aligned', 'attached', 'children', 'className', 'color', 'component', 'defaultClasses', 'disabled', 'divider', 'emphasis', 'floated', 'horizontal', 'inverted', 'item', 'size']);

            /* eslint-enable no-use-before-define */

            // add class names
            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component || Component, other, this.props.children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                ui: this.props.defaultClasses && !this.context.isListChild && !this.context.isHeaderChild && !this.context.isMenuChild,

                // types
                icon: (0, _utilities.hasChild)(this.props.children, _elements.Icon) && this.props.aligned == 'center',
                item: this.context.isMenuChild && this.props.item,

                // states
                disabled: this.props.disabled,

                // variations
                aligned: this.props.aligned && this.props.aligned !== 'justified',
                attached: this.props.attached,
                block: this.props.emphasis == 'block',
                dividing: this.props.emphasis == 'dividing',
                divider: this.props.divider, // makes a header that is also a divider
                floated: this.props.floated,
                horizontal: this.props.horizontal,
                inverted: this.props.inverted,

                // component
                header: this.props.defaultClasses
            };

            classes[this.props.color] = !!this.props.color;
            classes[this.props.size] = !!this.props.size;

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }], [{
        key: 'propTypes',
        value: {
            aligned: _react2['default'].PropTypes.oneOf(['right', 'left', 'justified', 'center']),
            attached: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['bottom', 'top']), _react2['default'].PropTypes.bool]),
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            color: _react2['default'].PropTypes.string,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            disabled: _react2['default'].PropTypes.bool,
            divider: _react2['default'].PropTypes.bool,
            emphasis: _react2['default'].PropTypes.oneOf(['dividing', 'block']),
            floated: _react2['default'].PropTypes.oneOf(['right', 'left']),
            horizontal: _react2['default'].PropTypes.bool,
            inverted: _react2['default'].PropTypes.bool,
            item: _react2['default'].PropTypes.bool,
            size: _react2['default'].PropTypes.string
        },

        // we don't want the ui in these circumstances
        enumerable: true
    }, {
        key: 'contextTypes',
        value: {
            isListChild: _react2['default'].PropTypes.bool,
            isHeaderChild: _react2['default'].PropTypes.bool,
            isAccordionChild: _react2['default'].PropTypes.bool,
            isMenuChild: _react2['default'].PropTypes.bool
        },

        // any header/sub header under a header is a sub header
        enumerable: true
    }, {
        key: 'childContextTypes',
        value: {
            isHeaderChild: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            attached: false,
            defaultClasses: true,
            item: true },
        enumerable: true
    }]);

    var _Header = Header;
    Header = (0, _radium2['default'])(Header) || Header;
    return Header;
})(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];
//# sourceMappingURL=header.js.map