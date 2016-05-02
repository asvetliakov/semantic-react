'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _dropdownelement = require('./dropdownelement');

var _dropdownelement2 = _interopRequireDefault(_dropdownelement);

var _label = require('./../../elements/label/label');

var _label2 = _interopRequireDefault(_label);

var _icon = require('./../../elements/icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _header = require('./../../elements/header/header');

var _header2 = _interopRequireDefault(_header);

var _menu = require('./../../views/menu/menu');

var _menu2 = _interopRequireDefault(_menu);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Select is the dropdown where options could be selected, either single or multiple.
 * Also supports search
 */
var Select = (_temp = _class = function (_React$Component) {
    _inherits(Select, _React$Component);

    /* eslint-enable */

    function Select(props) {
        _classCallCheck(this, Select);

        /**
         * Menu reference
         */

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

        _this.onOutsideDropdownClick = function (event) {
            var _this$props = _this.props;
            var active = _this$props.active;
            var onRequestClose = _this$props.onRequestClose;

            if (!active) {
                return;
            }
            var element = _reactDom2.default.findDOMNode(_this);
            if (element) {
                if (!(0, _utilities.isNodeInRoot)(event.target, element)) {
                    onRequestClose();
                }
            }
        };

        _this.onMenuItemClick = function (value) {
            var _this$props2 = _this.props;
            var search = _this$props2.search;
            var selected = _this$props2.selected;
            var multiple = _this$props2.multiple;
            var onSelectChange = _this$props2.onSelectChange;
            var onSearchStringChange = _this$props2.onSearchStringChange;

            var optionsCount = _this.menuRef ? _react2.default.Children.count(_this.menuRef.props.children) : 0;
            if (selected.indexOf(value) === -1) {
                if (multiple) {
                    // Append value for multiple
                    onSelectChange([].concat(_toConsumableArray(selected), [value]), optionsCount);
                } else {
                    // replace for single
                    onSelectChange([value], optionsCount);
                }

                // Intelligently handle multiple select here:
                // Do not request close if selecting and there are more than 1 element left in menu
                // Set focus to search box if searchable
                // Close if menu has only 1 element
                if (multiple && _this.menuRef) {
                    if (optionsCount <= 1) {
                        // Clean search string
                        onSearchStringChange('');
                    } else if (search && _this.searchRef) {
                        // we have few more elements here, put focus if searchable
                        _this.searchRef.focus();
                    }
                } else if (_this.searchRef) {
                    // always clean search string for single selection dropdowns
                    onSearchStringChange('');
                }
            }
        };

        _this.onSearchInputChange = function (event) {
            var onSearchStringChange = _this.props.onSearchStringChange;


            onSearchStringChange(event.target.value);
        };

        _this.onSearchInputKeyDown = function (event) {
            switch (event.which) {
                // Enter
                case 13:
                    // only do something if we have search results available and not displaying not results message
                    if (_this.menuRef && !_this.noResultsMessageRef && _react2.default.Children.count(_this.menuRef.props.children) > 0) {
                        // get the first children
                        var child = _react2.default.Children.toArray(_this.menuRef.props.children)[0];
                        if (child && child.props.value) {
                            // enter should do the same as menu item click
                            _this.onMenuItemClick(child.props.value);
                        }
                    }
                    break;
                // Backspace
                case 8:
                    var _this$props3 = _this.props;
                    var multiple = _this$props3.multiple;
                    var searchString = _this$props3.searchString;
                    var selected = _this$props3.selected;
                    var onSelectChange = _this$props3.onSelectChange;

                    if (searchString === '') {
                        if (multiple && selected.length > 0) {
                            onSelectChange([].concat(_toConsumableArray(selected.slice(0, -1))));
                        }
                    }
                    break;
            }
        };

        _this.menuRef = null;
        _this.searchRef = null;
        _this.noResultsMessageRef = null;
        return _this;
    }

    /* eslint-disable */


    _createClass(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props;
            var active = _props.active;
            var search = _props.search;

            if (search && this.searchRef && active) {
                this.searchRef.focus();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _props2 = this.props;
            var active = _props2.active;
            var search = _props2.search;

            if (search && this.searchRef && active) {
                this.searchRef.focus();
            }
        }

        /**
         * Handler for outside click
         */


        /**
         * Handler for menu item click
         * @param value
         */

    }, {
        key: 'onLabelCloseIconClick',


        /**
         * Handler for close label click
         * @param value
         */
        value: function onLabelCloseIconClick(value) {
            var _props3 = this.props;
            var selected = _props3.selected;
            var onSelectChange = _props3.onSelectChange;

            var optionsCount = this.menuRef ? _react2.default.Children.count(this.menuRef.props.children) : 0;
            var index = selected.indexOf(value);
            if (index !== -1) {
                onSelectChange([].concat(_toConsumableArray(selected.filter(function (val) {
                    return val !== value;
                }))), optionsCount);
            }
        }

        /**
         * Handler for search input change
         * @param {React.KeyboardEvent} event
         */


        /**
         * Handler for search input key events
         * @param {React.KeyboardEvent} event
         */

    }, {
        key: 'renderDropdownInput',


        /**
         * Renders dropdown hidden input 
         */
        value: function renderDropdownInput() {
            var _props4 = this.props;
            var name = _props4.name;
            var selected = _props4.selected;

            var value = selected.join(',');

            return _react2.default.createElement('input', { name: name,
                type: 'hidden',
                value: value });
        }

        /**
         * Renders dropdown labels for multiple type dropdowns
         */

    }, {
        key: 'renderDropdownLabels',
        value: function renderDropdownLabels() {
            var _this2 = this;

            var _props5 = this.props;
            var multiple = _props5.multiple;
            var selected = _props5.selected;
            // Selection labels should appear only for multiple dropdowns

            if (!multiple) {
                return null;
            }

            return _react2.default.Children.map(this.props.children, function (child) {
                // Process only option or option like childs and if it's selected
                if (selected.indexOf(child.props.value) !== -1) {
                    return _react2.default.createElement(
                        _reactMotionUiPack2.default,
                        { component: false,
                            enter: { scale: 1 },
                            leave: { scale: 0 }
                        },
                        _react2.default.createElement(
                            Select.Components.Label,
                            { component: 'a',
                                key: 'label-' + child.props.value,
                                style: { display: 'inline-block' }
                            },
                            child.props.children,
                            _react2.default.createElement(Select.Components.Icon, { name: 'close',
                                onClick: _this2.onLabelCloseIconClick.bind(_this2, child.props.value) })
                        )
                    );
                }
            });
        }

        /**
         * Render dropdown placeholder text
         */

    }, {
        key: 'renderDropdownText',
        value: function renderDropdownText() {
            /* eslint-disable no-use-before-define */
            var _props6 = this.props;
            var multiple = _props6.multiple;
            var placeholder = _props6.placeholder;
            var search = _props6.search;
            var selected = _props6.selected;
            var searchString = _props6.searchString;
            var selection = _props6.selection;
            /* eslint-enable no-use-before-define */

            // Render placeholder if not selected anything or multiple

            if (selected.length === 0 || multiple) {
                if (typeof placeholder !== 'undefined') {
                    // Selection type should use default text, non selection text
                    return _react2.default.createElement(
                        'div',
                        { className: selection ? 'default text' : 'text' },
                        placeholder
                    );
                } else {
                    return null;
                }
            } else {
                // Single selection here
                // Render selected children in text div here if selected anything
                var content = _react2.default.createElement('div', { className: 'text filtered' });
                // Do not render when performing search
                if (!search || !searchString) {
                    // traverse in childs, find necessary node
                    _react2.default.Children.forEach(this.props.children, function (child) {
                        if (typeof child.props.value !== 'undefined' && selected.indexOf(child.props.value) !== -1) {
                            content = _react2.default.createElement(
                                'div',
                                { className: 'text' },
                                child.props.children
                            );
                        }
                    });
                }
                return content;
            }
        }

        /**
         * Renders dropdown icon
         */

    }, {
        key: 'renderDropdownIcon',
        value: function renderDropdownIcon() {
            var icon = this.props.icon;

            return _react2.default.createElement(Select.Components.Icon, { name: icon });
        }

        /**
         * Renders search input
         */

    }, {
        key: 'renderSearchInput',
        value: function renderSearchInput() {
            var _this3 = this;

            var _props7 = this.props;
            var search = _props7.search;
            var searchGlyphWidth = _props7.searchGlyphWidth;
            var searchString = _props7.searchString;
            var searchPosition = _props7.searchPosition;
            var multiple = _props7.multiple;

            // Do not render if not searchable

            if (!search) {
                return null;
            }

            var searchWidth = searchGlyphWidth * searchString.length;
            // single selection dropdown shouldn't apply width style
            var style = searchWidth && searchPosition === 'dropdown' && multiple ? { width: searchWidth + 'em' } : {};
            if (searchPosition === 'dropdown') {
                return _react2.default.createElement('input', { autoComplete: 'off',
                    className: 'search',
                    key: 'searchInput',
                    onChange: this.onSearchInputChange,
                    onKeyDown: this.onSearchInputKeyDown,
                    ref: function ref(_ref) {
                        return _this3.searchRef = _ref;
                    },
                    style: style,
                    tabIndex: 0,
                    value: searchString });
            } else {
                // Search in menu has slightly different layout
                return _react2.default.createElement(
                    'div',
                    { className: 'ui icon search input' },
                    _react2.default.createElement(Select.Components.Icon, { name: 'search' }),
                    _react2.default.createElement('input', { key: 'searchInput',
                        onChange: this.onSearchInputChange,
                        onKeyDown: this.onSearchInputKeyDown,
                        placeholder: 'Search...',
                        ref: function ref(_ref2) {
                            return _this3.searchRef = _ref2;
                        },
                        tabIndex: 0,
                        type: 'text',
                        value: searchString })
                );
            }
        }

        /**
         * Renders search header if specified
         */

    }, {
        key: 'renderSearchHeader',
        value: function renderSearchHeader() {
            var _props8 = this.props;
            var search = _props8.search;
            var searchHeader = _props8.searchHeader;

            if (search && searchHeader) {
                return _react2.default.createElement(
                    Select.Components.Header,
                    { key: 'searchHeader' },
                    searchHeader
                );
            } else {
                return null;
            }
        }

        /**
         * Filters children options to exclude selected elements or elements which doesn't match to search
         */

    }, {
        key: 'renderFilteredChildren',
        value: function renderFilteredChildren() {
            var _props9 = this.props;
            var search = _props9.search;
            var searchIgnoreCase = _props9.searchIgnoreCase;
            var selected = _props9.selected;
            var searchString = _props9.searchString;
            var multiple = _props9.multiple;

            var searchRegex = new RegExp(searchString, searchIgnoreCase ? 'gi' : 'g');

            var newChildren = [];
            _react2.default.Children.forEach(this.props.children, function (child) {
                // only process option like childs
                if (typeof child.props.value !== 'undefined') {
                    var match = true;
                    if (search && searchString !== '') {
                        // value could be int or string. In case of int convert it to string
                        var value = typeof child.props.value === 'number' ? Number.parseInt(child.props.value) : child.props.value;
                        match = searchRegex.test(value) || searchRegex.test(child.props.children);
                    }

                    // Match for non search selection will be always true
                    if (match) {
                        // For multiple type render only non selected options
                        if (multiple && selected.indexOf(child.props.value) === -1) {
                            newChildren.push(_react2.default.cloneElement(child, {
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }));
                        } else if (!multiple) {
                            // for single selection render all options but add selected value
                            newChildren.push(_react2.default.cloneElement(child, {
                                active: selected.indexOf(child.props.value) !== -1,
                                key: child.key ? child.key : child.props.value,
                                // need to pass menu value, otherwise menu will not bind handler
                                menuValue: child.props.value
                            }));
                        }
                    }
                } else if (searchString === '') {
                    // need to pass non option like childs, but only if search string is empty
                    newChildren.push(_react2.default.cloneElement(child, {
                        key: child.key ? child.key : child.props.value
                    }));
                }
            });
            return newChildren;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            /* eslint-disable no-use-before-define */
            var _props10 = this.props;
            var active = _props10.active;
            var children = _props10.children;
            var enterAnimation = _props10.enterAnimation;
            var leaveAnimation = _props10.leaveAnimation;
            var icon = _props10.icon;
            var name = _props10.name;
            var search = _props10.search;
            var searchPosition = _props10.searchPosition;
            var searchHeader = _props10.searchHeader;
            var searchString = _props10.searchString;
            var searchGlyphWidth = _props10.searchGlyphWidth;
            var searchIgnoreCase = _props10.searchIgnoreCase;
            var searchNoResultsMessage = _props10.searchNoResultsMessage;
            var placeholder = _props10.placeholder;
            var selected = _props10.selected;
            var selection = _props10.selection;
            var multiple = _props10.multiple;
            var onSelectChange = _props10.onSelectChange;
            var onRequestClose = _props10.onRequestClose;
            var onSearchStringChange = _props10.onSearchStringChange;

            var other = _objectWithoutProperties(_props10, ['active', 'children', 'enterAnimation', 'leaveAnimation', 'icon', 'name', 'search', 'searchPosition', 'searchHeader', 'searchString', 'searchGlyphWidth', 'searchIgnoreCase', 'searchNoResultsMessage', 'placeholder', 'selected', 'selection', 'multiple', 'onSelectChange', 'onRequestClose', 'onSearchStringChange']);
            /* eslint-enable no-use-before-define */

            // make new array for menu childrens


            var menuChildrens = [];
            // render search and header in menu
            if (search && searchPosition === 'menu') {
                if (searchHeader) {
                    menuChildrens.push(this.renderSearchHeader());
                }
                menuChildrens.push(this.renderSearchInput());
            }

            var filteredChilds = this.renderFilteredChildren();
            // Display no results message instead of children if needed
            if ((!filteredChilds || filteredChilds.length === 0) && search && searchString != '') {
                filteredChilds = [_react2.default.createElement(
                    'div',
                    { className: 'message',
                        key: 'noResultsMessage',
                        ref: function ref(_ref3) {
                            return _this4.noResultsMessageRef = _ref3;
                        }
                    },
                    searchNoResultsMessage
                )]; // eslint-disable-line
            }

            menuChildrens = menuChildrens.concat(filteredChilds);

            other.className = (0, _classnames2.default)(other.className, this.getClasses());

            return _react2.default.createElement(
                Select.Components.DropdownElement,
                _extends({}, other, {
                    active: active
                }),
                _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
                    onMouseDown: this.onOutsideDropdownClick,
                    onTouchStart: this.onOutsideDropdownClick }),
                this.renderDropdownInput(),
                this.renderDropdownLabels(),
                this.renderDropdownText(),
                this.renderDropdownIcon(),
                search && searchPosition === 'dropdown' && this.renderSearchInput(),
                _react2.default.createElement(
                    _reactMotionUiPack2.default,
                    {
                        component: false,
                        enter: enterAnimation,
                        leave: leaveAnimation
                    },
                    active && _react2.default.createElement(
                        Select.Components.Menu,
                        { key: 'menu',
                            onMenuItemClick: this.onMenuItemClick,
                            ref: function ref(_ref4) {
                                return _this4.menuRef = _ref4;
                            },
                            style: { overflowX: 'hidden', overflowY: 'auto' }
                        },
                        menuChildrens
                    )
                )
            );
        }
    }, {
        key: 'getClasses',
        value: function getClasses() {
            return {
                search: this.props.search,
                selection: this.props.selection,
                multiple: this.props.multiple
            };
        }
    }]);

    return Select;
}(_react2.default.Component), _class.defaultProps = _extends({}, _dropdownelement2.default.defaultProps, {
    active: false,
    icon: 'dropdown',
    search: false,
    searchGlyphWidth: 1.0714,
    searchPosition: 'dropdown',
    searchIgnoreCase: true,
    searchNoResultsMessage: 'No Results found.',
    searchString: '',
    selection: true,
    selected: [],
    multiple: false,
    enterAnimation: {
        height: 'auto'
    },
    leaveAnimation: {
        height: 0
    },
    onSelectChange: function onSelectChange() {},
    onRequestClose: function onRequestClose() {},
    onSearchStringChange: function onSearchStringChange() {}
}), _class.Components = {
    Label: _label2.default,
    Icon: _icon2.default,
    Header: _header2.default,
    Menu: _menu2.default,
    DropdownElement: _dropdownelement2.default
}, _temp);
exports.default = Select;
//# sourceMappingURL=select.js.map