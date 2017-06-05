/*! version：1.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ShareuiSidebarMenu"] = factory(require("react"));
	else
		root["ShareuiSidebarMenu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by liaoyf on 2017/5/17 0017.
 */




var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

        _this.state = {};
        return _this;
    }

    Menu.prototype.render = function render() {
        var _this2 = this;

        var data = this.props.data;

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'ui-sidebar-menu' },
            data.map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Item__["a" /* default */], _extends({ key: index }, _this2.props, { itemData: item }));
            })
        );
    };

    return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_array__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by liaoyf on 2017/5/17 0017.
 */






var SidebarMenu = function (_React$Component) {
    _inherits(SidebarMenu, _React$Component);

    function SidebarMenu() {
        _classCallCheck(this, SidebarMenu);

        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

        var _this$props = _this.props,
            data = _this$props.data,
            selectedId = _this$props.selectedId,
            fieldName = _this$props.fieldName;
        var childrenField = fieldName.childrenField;
        //添加collapse以及selected

        var newData = Object.assign([], data);
        //去掉空children字段
        var loop = function loop(data) {
            data.forEach(function (item) {
                if (item[childrenField] && item[childrenField].length === 0) {
                    delete item[childrenField];
                }
                if (item[childrenField] && item[childrenField].length > 0) {
                    loop(item[childrenField]);
                }
            });
        };
        loop(newData);
        if (selectedId === '') {
            //选中第一个
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["a" /* selectFirst */])(newData, fieldName);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["b" /* selectById */])(newData, fieldName, selectedId);
        }
        _this.state = {
            data: newData
        };
        return _this;
    }

    SidebarMenu.prototype.changeData = function changeData(itemData, isOutlook) {
        var _props = this.props,
            fieldName = _props.fieldName,
            handleClick = _props.handleClick;
        var childrenField = fieldName.childrenField;
        var data = this.state.data;

        var newData = Object.assign([], data);
        console.info('0:', newData);
        handleClick(itemData);
        //如果是父菜单，则添加collapse：true字段，否则，添加selected: true字段
        if (itemData[childrenField] && itemData[childrenField]) {
            if (isOutlook) {
                //去掉同级的collapse字段
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["c" /* removeSiblingField */])(newData, fieldName, 'collapse', itemData);
                console.info('1:', newData, this.props.data);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["d" /* replaceObjInArray */])(newData, fieldName, itemData, Object.assign({}, itemData, {
                collapse: !itemData.collapse
            }));
            console.info('2:', this.props.data);
        } else {
            if (isOutlook) {
                //去掉其他的selected
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["c" /* removeSiblingField */])(newData, fieldName, 'collapse', itemData);
            }
            console.info('3:', this.props.data);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["e" /* removeFieldInArray */])(newData, fieldName, 'selected', itemData);
            console.info('4:', this.props.data);
            if (!itemData.selected) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_array__["d" /* replaceObjInArray */])(newData, fieldName, itemData, Object.assign({}, itemData, {
                    selected: true
                }));
            }
            console.info('5:', this.props.data);
        }
        this.setState({
            data: newData
        });
    };

    SidebarMenu.prototype.render = function render() {
        var data = this.state.data;
        var innerMenu = this.props.innerMenu;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: "ui-sidebar-menu-box" + (innerMenu ? ' innerMenu' : '') },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu__["a" /* default */], _extends({}, this.props, { data: data, level: innerMenu ? 2 : 0, changeData: this.changeData.bind(this) }))
        );
    };

    return SidebarMenu;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

SidebarMenu.defaultProps = {
    fieldName: {
        labelField: "label",
        childrenField: "children",
        idField: "key",
        openTypeField: "openType"
    },
    handleClick: function handleClick() {},

    data: [],
    innerMenu: false,
    level: 0,
    outlook: true
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarMenu);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by liaoyf on 2017/5/17 0017.
 */




var Item = function (_React$Component) {
    _inherits(Item, _React$Component);

    function Item() {
        _classCallCheck(this, Item);

        var _this = _possibleConstructorReturn(this, _React$Component.apply(this, arguments));

        var itemData = _this.props.itemData;

        _this.state = {
            collapse: !!itemData.collapse,
            active: !!itemData.selected
        };
        return _this;
    }

    Item.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props,
            itemData = _props.itemData,
            handleClick = _props.handleClick,
            fieldName = _props.fieldName;
        var childrenField = fieldName.childrenField;
        var collapse = this.state.collapse;

        //默认选中时触发点击事件

        if (itemData.selected) {
            handleClick(itemData);
        }
    };

    Item.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var itemData = this.props.itemData;


        this.setState({
            collapse: !!nextProps.itemData.collapse,
            active: !!nextProps.itemData.selected
        });
    };

    Item.prototype.clickItem = function clickItem(e) {
        e.preventDefault();
        var collapse = this.state.collapse;
        var _props2 = this.props,
            handleClick = _props2.handleClick,
            itemData = _props2.itemData,
            changeData = _props2.changeData,
            fieldName = _props2.fieldName,
            outlook = _props2.outlook;
        var childrenField = fieldName.childrenField;


        changeData(itemData, outlook);
    };

    Item.prototype.render = function render() {
        var _state = this.state,
            collapse = _state.collapse,
            active = _state.active;
        var _props3 = this.props,
            itemData = _props3.itemData,
            changeData = _props3.changeData,
            handleClick = _props3.handleClick,
            selectedId = _props3.selectedId,
            fieldName = _props3.fieldName,
            level = _props3.level,
            innerMenu = _props3.innerMenu;
        var childrenField = fieldName.childrenField,
            openTypeField = fieldName.openTypeField;

        var icon = null;
        var iconAfter = null;
        var hasChildren = itemData[childrenField] && itemData[childrenField].length > 0;
        if (innerMenu) {
            if (level === 2) {
                icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'menu-icon fa fa-circle-o' });
            } else {
                if (itemData[childrenField] && itemData[childrenField].length > 0) {
                    icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'menu-icon icon-caret fa fa-caret-right' });
                }
            }
        } else {
            if (level === 0 || level === 1) {
                if (itemData.iconClass) {
                    icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'menu-icon ' + itemData.iconClass });
                } else {
                    icon = itemData.icon ? itemData.icon : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'menu-icon fa fa-circle' });
                }
            } else {
                icon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'menu-icon fa fa-circle' });
            }
        }
        if (innerMenu) {
            if (level === 2 && hasChildren) {
                iconAfter = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ui-sidebar-menu-angle fa fa-angle-right' });
            }
        } else {
            if (hasChildren) {
                iconAfter = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'ui-sidebar-menu-angle fa fa-angle-right' });
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: "menu-level-" + level + (hasChildren ? ' hasChildren' : '') + (collapse ? ' li-collapse' : '') + (active ? ' active' : '') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'javascript: void(0)', title: itemData.label, onClick: this.clickItem.bind(this) },
                icon,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'label-box' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        null,
                        itemData.label
                    )
                ),
                iconAfter
            ),
            itemData[childrenField] && itemData[childrenField].length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */], _extends({}, this.props, { data: itemData[childrenField] || [],
                level: level + 1 }))
        );
    };

    return Item;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = replaceObjInArray;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeFieldInArray;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeSiblingField;
/* harmony export (immutable) */ __webpack_exports__["a"] = selectFirst;
/* harmony export (immutable) */ __webpack_exports__["b"] = selectById;
/**
 * Created by liaoyf on 2017/5/26 0026.
 */
/**
 * 在数组中递归替换对象
 * @param array
 * @param fieldName
 * @param replaceObj
 */
function replaceObjInArray(array, fieldName, obj, replaceObj) {
    var childrenField = fieldName.childrenField;

    var loop = function loop(data) {
        data.forEach(function (item, index) {
            if (JSON.stringify(item) == JSON.stringify(obj)) {
                data[index] = replaceObj;
                return false;
            } else {
                if (item[childrenField] && item[childrenField].length > 0) {
                    loop(item[childrenField]);
                }
            }
        });
    };

    loop(array);
}

/**
 * 递归移除数组中的某个字段
 * @param array
 * @param fieldName
 * @param field
 * @param excludeObj
 */
function removeFieldInArray(array, fieldName, field, excludeObj) {
    var childrenField = fieldName.childrenField;

    var loop = function loop(data) {
        if (data) {
            if (data[field] && JSON.stringify(data) != JSON.stringify(excludeObj)) {
                delete data[field];
            }
            data.forEach(function (item) {
                if (item[field] && JSON.stringify(item) != JSON.stringify(excludeObj)) {
                    delete item[field];
                }
                if (item[childrenField] && item[childrenField].length > 0) {
                    loop(item[childrenField]);
                }
            });
        }
    };

    loop(array);
}

/**
 * 移除同级字段
 * @param array
 * @param fieldName
 * @param field
 * @param obj
 */
function removeSiblingField(array, fieldName, field, obj) {
    var childrenField = fieldName.childrenField;

    var loop = function loop(data) {
        if (data) {
            data.forEach(function (item, index) {
                if (JSON.stringify(item) == JSON.stringify(obj)) {
                    data.forEach(function (x, y) {
                        if (y !== index) {
                            delete x[field];
                        }
                    });
                } else {
                    if (item[childrenField] && item[childrenField].length > 0) {
                        loop(item[childrenField]);
                    }
                }
            });
        }
    };

    loop(array);
}

/**
 * 选中第一个菜单
 * @param array
 * @param fieldName
 */
function selectFirst(array, fieldName) {
    var childrenField = fieldName.childrenField;

    var loop = function loop(data) {
        if (data[0]) {
            if (data[0][childrenField] && data[0][childrenField].length > 0) {
                data[0].collapse = true;
                loop(data[0][childrenField]);
            } else {
                data[0].selected = true;
                return false;
            }
        }
    };

    loop(array);
}

/**
 * 选中指定id的菜单
 * @param array
 * @param fieldName
 * @param id
 */
function selectById(array, fieldName, id) {
    var childrenField = fieldName.childrenField,
        idField = fieldName.idField;

    var loop = function loop(data) {
        if (data) {
            data.forEach(function (item) {
                if (item[childrenField] && item[childrenField].length > 0) {
                    if (hasExistField(item[childrenField], id, fieldName)) {
                        item.collapse = true;
                    }
                    loop(item[childrenField]);
                } else {
                    if (item[idField] === id) {
                        item.selected = true;
                    }
                }
            });
        }
    };

    loop(array);
}

function hasExistField(data, id, fieldName) {
    var childrenField = fieldName.childrenField,
        idField = fieldName.idField;

    var exists = false;
    var loop = function loop(data) {
        data.forEach(function (item) {
            if (item[childrenField] && item[childrenField].length > 0) {
                loop(item[childrenField]);
            } else {
                if (item[idField] === id) {
                    exists = true;
                    return false;
                }
            }
        });
    };

    loop(data);

    return exists;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=shareui-sidebar-menu.js.map