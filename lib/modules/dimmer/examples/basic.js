'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dimmer = require('../dimmer');

var _dimmer2 = _interopRequireDefault(_dimmer);

var _dimmable = require('../dimmable');

var _dimmable2 = _interopRequireDefault(_dimmable);

var _segment = require('../../../elements/segment/segment');

var _segment2 = _interopRequireDefault(_segment);

var _header = require('../../../elements/header/header');

var _header2 = _interopRequireDefault(_header);

var _images = require('../../../elements/image/images');

var _images2 = _interopRequireDefault(_images);

var _image = require('../../../elements/image/image');

var _image2 = _interopRequireDefault(_image);

var _icon = require('../../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../../elements/button/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDimmer = function (_React$Component) {
    _inherits(MyDimmer, _React$Component);

    function MyDimmer() {
        _classCallCheck(this, MyDimmer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyDimmer).call(this));

        _this.state = {
            dimmed: false
        };
        return _this;
    }

    _createClass(MyDimmer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _segment2.default,
                    { component: _dimmable2.default, dimmed: this.state.dimmed },
                    _react2.default.createElement(
                        _header2.default,
                        { size: 'medium' },
                        'Overlayable section'
                    ),
                    _react2.default.createElement(
                        _images2.default,
                        { size: 'small' },
                        _react2.default.createElement(_image2.default, { src: 'http://semantic-ui.com/images/wireframe/image.png' }),
                        _react2.default.createElement(_image2.default, { src: 'http://semantic-ui.com/images/wireframe/image.png' }),
                        _react2.default.createElement(_image2.default, { src: 'http://semantic-ui.com/images/wireframe/image.png' })
                    ),
                    _react2.default.createElement(
                        _dimmer2.default,
                        { active: this.state.dimmed },
                        _react2.default.createElement(_icon2.default, { size: 'large', name: 'users' }),
                        'Hey, I\'m dimmer'
                    )
                ),
                _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            return _this2.setState({ dimmed: !_this2.state.dimmed });
                        } },
                    'Toggle'
                )
            );
        }
    }]);

    return MyDimmer;
}(_react2.default.Component);

_react2.default.createElement(MyDimmer, null);
//# sourceMappingURL=basic.js.map