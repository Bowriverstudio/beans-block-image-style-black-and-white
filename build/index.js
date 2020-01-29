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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/sample/icon.js":
/*!***********************************!*\
  !*** ./src/blocks/sample/icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m3.1914 63.043l65.23 34.41c0.14453 0.078125 0.30859 0.11328 0.46875 0.11328 0.20312 0 0.40625-0.0625 0.57812-0.18359l28.109-19.949c0.26562-0.1875 0.42188-0.49219 0.42188-0.81641v-38.301c0-0.37109-0.20703-0.71484-0.53516-0.88672l-21.566-11.242-32.609-17.211-11.047-5.9492c-0.33594-0.17969-0.74219-0.15625-1.0547 0.066406l-28.109 19.969c-0.26562 0.1875-0.42188 0.49219-0.42188 0.81641v38.281c0.003906 0.37109 0.20703 0.71094 0.53516 0.88281zm39.156-52.301l3.332 1.7578 0.82812 1.0234 0.6875 2.0078-0.1875 2.0391-1.0703 1.9531-1.8711 1.7461-2.5781 1.418-3.0781 0.94922-3.3945 0.43359-3.4609-0.10937-3.3047-0.66797-2.8828-1.1641-2.2891-1.582-1.5234-1.8398-0.69141-2.0273 0.1875-2.0391 1.0508-1.9531 1.8711-1.7422 2.5781-1.418 3.0781-0.94531 3.4141-0.43359 3.4609 0.12891 2.0117 0.41016zm-5.7617-2.9688c-0.007813 0-0.015626 0.003906-0.019532 0.003906-0.007812 0-0.011718-0.007813-0.019531-0.007813l-3.5-0.13281c-0.007813 0-0.011719 0.007812-0.019531 0.007812-0.007813 0-0.011719-0.007812-0.019532-0.007812l-3.457 0.44141c-0.007812 0-0.011719 0.011719-0.019531 0.011719s-0.015625-0.003906-0.023438-0.003906l-3.1289 0.96094c-0.007812 0.003906-0.011718 0.011719-0.019531 0.015625s-0.019531-0.003906-0.027344 0.003906l-0.45312 0.25 5.9648-4.2383 5.1523 2.7734zm-14.852 4.5664c-0.011719 0.011718-0.007813 0.027344-0.019531 0.039062-0.007813 0.011719-0.023438 0.011719-0.03125 0.027344l-1.0938 2.0352c-0.007813 0.015625 0 0.035156-0.003906 0.050782-0.003907 0.015624-0.019532 0.023437-0.023438 0.042968l-0.19531 2.1445c0 0.003906 0.003906 0.007812 0.003906 0.011718s-0.003906 0.007813-0.003906 0.011719v6.3867c0 0.015625 0.015624 0.023437 0.015624 0.039062 0.003907 0.015625-0.007812 0.027344-0.003906 0.042969l0.72266 2.1211c0.007813 0.019531 0.023438 0.027343 0.035157 0.042969 0.007812 0.011718 0.003906 0.023437 0.011719 0.03125l1.5742 1.9258c0.007813 0.007812 0.019532 0.007812 0.03125 0.015625 0.011719 0.011718 0.011719 0.027344 0.023438 0.035156l2.3398 1.5977c0.011718 0.007813 0.023437 0.003906 0.03125 0.011719 0.007812 0.003906 0.007812 0.011719 0.015624 0.015625l2.9336 1.1602c0.011719 0.003906 0.019532 0.003906 0.03125 0.007813 0.003906 0 0.007813 0.007812 0.011719 0.007812l3.3477 0.67969c0.011719 0.003906 0.023438 0.003906 0.039063 0.003906h0.003906l3.5 0.13281h0.007812c0.011719 0 0.019532 0 0.03125-0.003907l3.4336-0.4375c0.003906 0 0.003906-0.003906 0.007813-0.003906 0.011719-0.003906 0.023437-0.003906 0.035156-0.003906l3.1289-0.96484c0.007813-0.003906 0.007813-0.007813 0.011719-0.011719 0.011719-0.003906 0.023438-0.003906 0.035156-0.007812l2.625-1.4414c0.011719-0.003907 0.011719-0.019532 0.019532-0.023438 0.011718-0.007812 0.023437-0.003906 0.03125-0.011719l1.9258-1.793c0.007812-0.007812 0.003906-0.015624 0.011719-0.023437 0.011718-0.015625 0.027343-0.023437 0.039062-0.039063l1.1133-2.0586c0.007813-0.015625 0-0.03125 0.003907-0.046875 0.007812-0.019532 0.023437-0.027344 0.023437-0.046875l0.19531-2.1211c0-0.003906-0.003907-0.007813-0.003907-0.011719s0.003907-0.007812 0.003907-0.011718l-0.007813-6.3984c0-0.015625-0.015625-0.023438-0.015625-0.039062-0.003906-0.015626 0.007812-0.027344 0.003906-0.042969l-0.72266-2.1016c-0.003906-0.015625-0.019531-0.019531-0.027344-0.03125-0.007812-0.015625-0.003906-0.03125-0.011718-0.042968l-0.12109-0.14844 22.625 11.941-0.22656-0.042968c-0.007812 0-0.011719 0.003906-0.019531 0.003906s-0.011719-0.007813-0.019531-0.007813l-3.5-0.13281c-0.007813 0-0.011719 0.007812-0.019531 0.007812-0.007813 0-0.011719-0.007812-0.019532-0.007812l-3.457 0.4375c-0.007813 0-0.011719 0.011719-0.019531 0.011719-0.007813 0-0.015625-0.003907-0.023438-0.003907l-3.1289 0.96484c-0.007812 0.003906-0.011719 0.011719-0.019531 0.015625-0.007813 0.003906-0.019531 0-0.023438 0.003906l-2.6055 1.4219c-0.011718 0.003907-0.011718 0.019531-0.019531 0.023438-0.011719 0.007812-0.023437 0.003906-0.03125 0.011719l-1.9453 1.8164c-0.011719 0.011718-0.007813 0.027344-0.015625 0.039062-0.007813 0.011719-0.023438 0.011719-0.03125 0.027344l-1.0938 2.0352c-0.007813 0.015625 0 0.03125-0.007813 0.050782-0.003906 0.015624-0.019531 0.023437-0.023437 0.042968l-0.21875 2.1445c0 0.003906 0.003906 0.007812 0.003906 0.011718s-0.003906 0.007813-0.003906 0.011719v6.3867c0 0.015625 0.015625 0.023437 0.015625 0.039062 0.003906 0.015625-0.007813 0.027344-0.003907 0.042969l0.72266 2.1016c0.007812 0.019531 0.023437 0.027343 0.03125 0.042968 0.007812 0.011719 0.003906 0.023438 0.011719 0.03125l1.5742 1.9258c0.007813 0.007812 0.019532 0.007812 0.03125 0.015624 0.011719 0.011719 0.011719 0.027344 0.019532 0.035157l2.3438 1.5977c0.011718 0.007813 0.019531 0.003906 0.03125 0.011719 0.007812 0.003906 0.007812 0.011718 0.015624 0.015625l2.9531 1.1836c0.011718 0.003907 0.023437 0.003907 0.03125 0.007813 0.003906 0 0.003906 0.007813 0.011718 0.007813l3.3242 0.67969c0.015625 0.003906 0.027344 0.003906 0.039063 0.003906h0.003906l3.5195 0.10938h0.007813c0.011718 0 0.019531 0 0.03125-0.003906l3.4336-0.41406c0.003907 0 0.003907-0.003907 0.007813-0.003907 0.011718-0.003906 0.023437-0.003906 0.039062-0.007812l3.1289-0.96484c0.007813-0.003906 0.007813-0.007813 0.015626-0.011719 0.011718-0.003906 0.023437-0.003906 0.03125-0.007812l2.625-1.4414c0.011718-0.003907 0.011718-0.019532 0.019531-0.023438 0.011719-0.007812 0.019531-0.003906 0.03125-0.011719l1.9258-1.793c0.007812-0.007812 0.007812-0.019531 0.011719-0.023437 0.011719-0.015625 0.027343-0.023437 0.039062-0.039063l1.0938-2.0352c0.007813-0.015625 0-0.03125 0.003907-0.046875 0.007812-0.015625 0.019531-0.027343 0.023437-0.046875l0.21875-2.1641c0-0.003906-0.003906-0.007813-0.003906-0.011719s0.003906-0.007813 0.003906-0.011719v-6.3633c0-0.015625-0.015625-0.023437-0.015625-0.039063-0.003906-0.015624 0.007812-0.027343 0.003906-0.042968l-0.72266-2.1211c-0.007812-0.015625-0.023438-0.019531-0.03125-0.035156s-0.003906-0.03125-0.011719-0.042969l-0.13672-0.16406 16.434 8.5664-26.977 19.137-63.992-33.754 17.207-12.227zm53.234 15.617l3.3125 1.7266 0.84375 1.0312 0.69141 2.0273-0.21094 2.0195-1.0508 1.9766-1.8672 1.7617-2.5781 1.375-3.082 0.96875-3.3945 0.43359-3.4805-0.12891-3.2812-0.66797-2.9062-1.1406-2.2891-1.582-1.5234-1.8398-0.69141-2.0273 0.20703-2.0391 1.0508-1.9531 1.8945-1.7656 2.5508-1.3945 3.0859-0.94922 3.4141-0.43359 3.4648 0.12891 1.8359 0.35938zm-6.3281 30.48v36.867l-63.98-33.746v-36.871z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/blocks/sample/index.js":
/*!************************************!*\
  !*** ./src/blocks/sample/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/sample/icon.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Register block
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('brs/static', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example - Static Block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Demonstration of how to make a static call to action block.'),
  category: 'common',
  icon: {
    background: 'rgba(254, 243, 224, 0.52)',
    src: _icon__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Banner'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shout Out')],
  edit: function edit(props) {
    var className = props.className,
        isSelected = props.isSelected;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Static Call to Action')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This is really important!')), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "sorry warning"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('✋ Sorry! You cannot edit this block ✋', 'jsforwpblocks')));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call to Action', 'jsforwpblocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This is really important!', 'jsforwpblocks')));
  }
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_sample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/sample */ "./src/blocks/sample/index.js");


/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map