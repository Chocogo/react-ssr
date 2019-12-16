/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store/index */ \"./src/store/index.js\");\n/* harmony import */ var _src_views_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/views/Header */ \"./src/views/Header.js\");\n// node层代码  通过webpack dev:server打包babel处理\n\n\n\n\n\n\n\n // 创建http模块，由原本的跨域请求改为有server请求\n\nvar store = Object(_src_store_index__WEBPACK_IMPORTED_MODULE_6__[\"serverStore\"])();\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](\"public\")); // 将public转化为静态资源，引用时不必写入如19行\n\napp.get(\"*\", function (req, res) {\n  // routes.some(route => {\n  //   // use `matchPath` here\n  //   const match = matchPath(req.path, route);\n  //   if (match) promises.push(route.loadData(match));\n  //   return match;\n  // });\n  // 服务端初始化时，请求所有异步数据，并存入promises中，执行完数据后插入到首页\n  // if(req.url === '') {\n  // }\n  console.log(req.url, '------req.url');\n  var promises = [];\n  _src_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"].some(function (route) {\n    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"matchPath\"])(req.url, route);\n\n    if (match) {\n      var loadData = route.component.loadData;\n\n      if (loadData) {\n        promises.push(loadData(store));\n      }\n    }\n  });\n  Promise.all(promises).then(function (data) {\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.url\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_views_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), _src_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (route) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], route);\n    }))))); // 把dom解析成字符串\n\n    console.log(data, 'data-------Promise');\n    res.send(\"\\n      <html>\\n        <head>\\n          <meta charset=\\\"utf-8\\\"/>\\n          <title>react-ssr</title>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\".concat(content, \"</div>\\n          <script>\\n            window.__context = \").concat(JSON.stringify(store.getState()), \"\\n          </script>\\n          <script src=\\\"./bundle.js\\\"></script>\\n        </body>\\n      </html>\\n    \"));\n  })[\"catch\"](function (e) {\n    console.log(e);\n  });\n});\napp.listen(\"3000\", function () {\n  console.log(\"监听成功！\");\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Index */ \"./src/views/Index.js\");\n/* harmony import */ var _views_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/About */ \"./src/views/About.js\");\n/* harmony import */ var _views_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/User */ \"./src/views/User.js\");\n // import { Route } from 'react-router-dom'\n\n\n\n // export default (\n// \t<>\n// \t<Route exact path=\"/\" component={Index}></Route>\n// \t<Route path=\"/about\" component={About}></Route>\n// \t</>\n// )\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  // exact: true,\n  component: _views_Index__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  key: 'index'\n}, {\n  path: '/about',\n  exact: true,\n  component: _views_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  key: 'about'\n}, {\n  path: '/user',\n  exact: true,\n  component: _views_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  key: 'user'\n}]);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: serverStore, clientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverStore\", function() { return serverStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientStore\", function() { return clientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ \"./src/store/product.js\");\n/* harmony import */ var _userInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userInfo */ \"./src/store/userInfo.js\");\n\n\n\n // const store = createStore(\n//   combineReducers({ product: productReducer }),\n//   applyMiddleware(thunk)\n// )\n// 服务端数据\n\nvar serverStore = function serverStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    product: _product__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    userInfo: _userInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}; // 客户端：将初始化的数据赋值给\n\nvar clientStore = function clientStore() {\n  var defaultState = window.__context ? window.__context : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    product: _product__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    userInfo: _userInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}; // export default store\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/product.js":
/*!******************************!*\
  !*** ./src/store/product.js ***!
  \******************************/
/*! exports provided: getProduct, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProduct\", function() { return getProduct; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import axios form 'axios'\n// action type\n\nvar GET_PRODUCT = 'PRODUCT/GET_PRODUCT'; // action \n\nvar updateProduct = function updateProduct(lists) {\n  return {\n    type: GET_PRODUCT,\n    lists: lists\n  };\n}; // async action\n\n\nvar getProduct = function getProduct() {\n  return function (dispatch) {\n    return new Promise(function (resolve) {\n      // 处理避免错误ajax的异步方法：  返回promise, 将错误rosolve处理掉\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8088/api/getProduct', {\n        params: {\n          userId: 338\n        }\n      }).then(function (_ref) {\n        var data = _ref.data;\n        console.log('data----', data);\n        var lists = data.lists; // dispatch(updateProduct(lists))\n\n        resolve(dispatch(updateProduct(lists)));\n      })[\"catch\"](function (e) {\n        resolve(e);\n      });\n    });\n  };\n}; // default product list\n\nvar defaultList = {\n  lists: []\n}; // reducer\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultList;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_PRODUCT:\n      var newList = _objectSpread({}, state, {\n        lists: action.lists\n      });\n\n      return newList;\n\n    default:\n      return state;\n    // ？？？？写了个defaultList埋了一个大坑！！！\n  }\n}); // export default productReducer\n\n//# sourceURL=webpack:///./src/store/product.js?");

/***/ }),

/***/ "./src/store/userInfo.js":
/*!*******************************!*\
  !*** ./src/store/userInfo.js ***!
  \*******************************/
/*! exports provided: getUserInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import axios form 'axios'\n// action type\n\nvar GET_PUSERINFOLISTS = 'USERINFO/GET_USERINFOLISTS'; // action \n\nvar updateUserInfo = function updateUserInfo(lists) {\n  return {\n    type: GET_PUSERINFOLISTS,\n    lists: lists\n  };\n}; // async action\n\n\nvar getUserInfo = function getUserInfo() {\n  return function (dispatch) {\n    return new Promise(function (resolve) {\n      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8088/api/getUserInfo', {\n        params: {\n          userId: 338\n        }\n      }).then(function (_ref) {\n        var data = _ref.data;\n        console.log('data----', data);\n        var lists = data.lists;\n        resolve(dispatch(updateUserInfo(lists)));\n      });\n    })[\"catch\"](function (e) {\n      resolve(e);\n    }); // return Axios.get('http://localhost:8088/api/getUserInfo', {\n  };\n}; // default product list\n\nvar defaultList = {\n  lists: []\n}; // reducer\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultList;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_PUSERINFOLISTS:\n      var newList = _objectSpread({}, state, {\n        lists: action.lists\n      });\n\n      return newList;\n\n    default:\n      return state;\n    // ？？？？写了个defaultList埋了一个大坑！！！\n  }\n}); // export default productReducer\n\n//# sourceURL=webpack:///./src/store/userInfo.js?");

/***/ }),

/***/ "./src/views/About.js":
/*!****************************!*\
  !*** ./src/views/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction About() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"this is about page\");\n}\n\n//# sourceURL=webpack:///./src/views/About.js?");

/***/ }),

/***/ "./src/views/Header.js":
/*!*****************************!*\
  !*** ./src/views/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"index\"), \" |\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"about\"));\n}\n\n//# sourceURL=webpack:///./src/views/Header.js?");

/***/ }),

/***/ "./src/views/Index.js":
/*!****************************!*\
  !*** ./src/views/Index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/product */ \"./src/store/product.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Index(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.productLists.length) {\n      props.getProduct();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"initial hello world, \", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setCount(count + 1);\n    }\n  }, \"add\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.productLists.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n} // 通过初始化静态方法来请求异步数据\n\n\nIndex.loadData = function (store) {\n  console.log('-----startgetProduct', store.dispatch(Object(_store_product__WEBPACK_IMPORTED_MODULE_2__[\"getProduct\"])()));\n  return store.dispatch(Object(_store_product__WEBPACK_IMPORTED_MODULE_2__[\"getProduct\"])());\n}; // export default <App title=\"你好\"/>;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    productLists: state.product.lists\n  };\n}, {\n  getProduct: _store_product__WEBPACK_IMPORTED_MODULE_2__[\"getProduct\"]\n})(Index));\n\n//# sourceURL=webpack:///./src/views/Index.js?");

/***/ }),

/***/ "./src/views/User.js":
/*!***************************!*\
  !*** ./src/views/User.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_userInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/userInfo */ \"./src/store/userInfo.js\");\n\n\n\nconsole.log(_store_userInfo__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"]);\n\nfunction User(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.userInfoLists.length) {\n      props.getUserInfo();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6211\\u662F\\u6765\\u81EA\\u7528\\u6237\\u4FE1\\u606F\\u7684\\u6570\\u636E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.userInfoLists.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n} // 通过初始化静态方法来请求异步数据\n\n\nUser.loadData = function (store) {\n  console.log('-----startgetUserInfo', store.dispatch(Object(_store_userInfo__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"])()));\n  return store.dispatch(Object(_store_userInfo__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"])());\n}; // export default <App title=\"你好\"/>;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    userInfoLists: state.userInfo.lists\n  };\n}, {\n  getUserInfo: _store_userInfo__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"]\n})(User));\n\n//# sourceURL=webpack:///./src/views/User.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });