'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getClasses(props) {
    var classes = {
        grouped: props.grouped,
        inline: props.inline
    };

    if (props.fluid) {
        var childCount = (0, _utilities.countChildren)(props.children, Fields.Components.Field); // eslint-disable-line

        if (childCount > 0 && childCount <= 12) {
            classes[_utilities.Numbers[childCount]] = true;
        }
    }

    if (props.equalWidth) {
        classes['equal width'] = true;
    }

    classes.fields = props.defaultClasses;

    return classes;
}

var Fields = function Fields(props) {
    /* eslint-disable no-use-before-define */
    var children = props.children;
    var className = props.className;
    var component = props.component;

    var other = _objectWithoutProperties(props, ['children', 'className', 'component']);
    /* eslint-enable no-use-before-define */


    other.className = (0, _classnames2.default)(className, getClasses(props));

    return _react2.default.createElement(component, other, children);
};

Fields.defaultProps = {
    component: 'div',
    defaultClasses: true
};

Fields.Components = {
    Field: _field2.default
};

exports.default = Fields;
//# sourceMappingURL=fields.js.map