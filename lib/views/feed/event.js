'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _image = require('./../../elements/image/image');

var _image2 = _interopRequireDefault(_image);

var _images = require('./../../elements/image/images');

var _images2 = _interopRequireDefault(_images);

var _icon = require('./../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function renderContent(children) {
    var contentChildren = [];

    _react2.default.Children.forEach(children, function (child, index) {
        if (child.type === Event.Components.Images) {
            // eslint-disable-line
            contentChildren.push(_react2.default.cloneElement(child, {
                defaultClasses: false,
                className: 'extra images'
            }));
        } else if (child.type !== Event.Components.Image && child.type !== Event.Components.Icon) {
            // eslint-disable-line
            contentChildren.push(child);
        } else if ((child.type === Event.Components.Image || child.type === Event.Components.Icon) && index > 0) {
            // eslint-disable-line
            contentChildren.push(child);
        }
    });

    return _react2.default.createElement(
        'div',
        { className: 'content' },
        contentChildren
    );
}

function renderLabel(children) {
    var labelChildren = [];

    _react2.default.Children.forEach(children, function (child, index) {
        // remove the Image default classes
        if ((child.type === Event.Components.Image || child.type === Event.Components.Icon) && index === 0) {
            // eslint-disable-line
            if (child.type === Event.Components.Image) {
                // eslint-disable-line
                labelChildren.push(_react2.default.cloneElement(child, {
                    key: 'eventLabel',
                    image: false,
                    defaultClasses: false
                }, child.children));
            } else {
                labelChildren.push(child);
            }
        }
    });

    return _react2.default.createElement(
        'div',
        { className: 'label' },
        labelChildren
    );
}

var Event = function Event(_ref) {
    var children = _ref.children;
    var className = _ref.className;
    var component = _ref.component;

    var other = _objectWithoutProperties(_ref, ['children', 'className', 'component']);

    other.className = (0, _classnames2.default)(className, { event: true });

    return _react2.default.createElement(component, other, [renderLabel(children), renderContent(children)]);
};

Event.defaultProps = {
    component: 'div'
};

Event.Components = {
    Image: _image2.default,
    Images: _images2.default,
    Icon: _icon2.default
};

exports.default = Event;
//# sourceMappingURL=event.js.map