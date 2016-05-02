'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

var _utilities = require('../../utilities');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultProps = require('../../defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
};

function getClasses(props, context) {
    var classes = {
        // Do not set ui class if image is items child, but set anyway is items child and should has size prop
        ui: props.defaultClasses && (!context.isItemsChild || context.isItemsChild && props.size),
        image: props.defaultClasses,

        // variations
        aligned: props.aligned,
        avatar: props.avatar,
        bordered: props.bordered,
        centered: props.centered,
        circular: props.shape === 'circular',
        floated: props.floated,
        fluid: props.fluid,
        rounded: props.shape === 'rounded',
        spaced: props.spaced
    };

    classes[props.state] = !!props.state;
    classes[props.size] = !!props.size;

    return (0, _utilities.validateClassProps)(classes, props, validProps);
}

/**
 * Return true if image should be forced wrapped into div
 * @param context
 * @returns {boolean}
 */
function shouldWrapIntoDiv(context) {
    return context.isCommentsChild || context.isItemsChild;
}

/**
 * Just an image
 */
var Image = function Image(props, context) {
    var component = props.component;
    var children = props.children;
    var defaultClasses = props.defaultClasses;
    var aligned = props.aligned;
    var avatar = props.avatar;
    var bordered = props.bordered;
    var centered = props.centered;
    var fluid = props.fluid;
    var floated = props.floated;
    var size = props.size;
    var spaced = props.spaced;
    var src = props.src;
    var state = props.state;
    var shape = props.shape;
    var wrapComponent = props.wrapComponent;

    var other = _objectWithoutProperties(props, ['component', 'children', 'defaultClasses', 'aligned', 'avatar', 'bordered', 'centered', 'fluid', 'floated', 'size', 'spaced', 'src', 'state', 'shape', 'wrapComponent']);

    other.className = (0, _classnames2.default)(other.className, getClasses(props, context));
    var ImageComponent = component;
    if (shouldWrapIntoDiv(context) || wrapComponent) {
        var WrapComponent = typeof wrapComponent === 'undefined' || typeof wrapComponent === 'boolean' ? 'div' : wrapComponent;
        return _react2.default.createElement(
            WrapComponent,
            other,
            _react2.default.createElement(
                ImageComponent,
                { src: src },
                children
            )
        );
    } else {
        return _react2.default.createElement(
            ImageComponent,
            _extends({}, other, { src: src }),
            children
        );
    }
};

Image.defaultProps = _extends({}, _defaultProps2.default.defaultProps, {
    component: 'img',
    wrapComponent: false
});

Image.contextTypes = {
    isCommentsChild: _react2.default.PropTypes.bool, // Image in Comment should be wrapper into <div/>
    isItemsChild: _react2.default.PropTypes.bool // Image in Items should be wrapped into <div/>
};

exports.default = Image;
//# sourceMappingURL=image.js.map