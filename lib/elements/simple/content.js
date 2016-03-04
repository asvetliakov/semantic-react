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

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

var Content = (function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, _Content);

        _get(Object.getPrototypeOf(_Content.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Content, [{
        key: 'renderDimmerChild',
        value: function renderDimmerChild() {
            return _react2['default'].createElement(
                'div',
                { className: 'center' },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.context.isDimmerChild ? this.renderDimmerChild() : this.props.children;

            /* eslint-disable no-use-before-define */
            var _props = this.props;
            var aligned = _props.aligned;
            var component = _props.component;
            var defaultClasses = _props.defaultClasses;
            var extra = _props.extra;
            var floated = _props.floated;
            var hidden = _props.hidden;
            var meta = _props.meta;
            var visible = _props.visible;

            var other = _objectWithoutProperties(_props, ['aligned', 'component', 'defaultClasses', 'extra', 'floated', 'hidden', 'meta', 'visible']);

            /* eslint-enable no-use-before-define */

            other.className = (0, _classnames2['default'])(this.props.className, this.getClasses());

            return _react2['default'].createElement(this.props.component, other, children);
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            var classes = {
                // default
                content: this.props.defaultClasses,

                // variations
                active: this.props.active,
                aligned: this.props.aligned,
                extra: this.props.extra,
                floated: this.props.floated,
                hidden: this.props.hidden,
                meta: this.props.meta,
                visible: this.props.visible
            };

            return (0, _utilities.validateClassProps)(classes, this.props, validProps);
        }
    }], [{
        key: 'propTypes',
        value: {
            active: _react2['default'].PropTypes.bool,
            aligned: _react2['default'].PropTypes.string,
            children: _react2['default'].PropTypes.node,
            className: _react2['default'].PropTypes.node,
            component: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.string]),
            defaultClasses: _react2['default'].PropTypes.bool,
            extra: _react2['default'].PropTypes.bool,
            floated: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.bool]),
            hidden: _react2['default'].PropTypes.bool,
            meta: _react2['default'].PropTypes.bool,
            visible: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'contextTypes',
        value: {
            isDimmerChild: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            component: 'div',
            defaultClasses: true,
            floated: false
        },
        enumerable: true
    }]);

    var _Content = Content;
    Content = (0, _radium2['default'])(Content) || Content;
    return Content;
})(_react2['default'].Component);

exports['default'] = Content;
module.exports = exports['default'];
//# sourceMappingURL=content.js.map