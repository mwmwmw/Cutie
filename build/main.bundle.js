var Dragon =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _memo = __webpack_require__(1);

var _memo2 = _interopRequireDefault(_memo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CUE_CHANGE = "cuechange";
var ERROR = "error";
var CHANGE = "change";
var ENTER = "enter";
var EXIT = "exit";

var Cutie = function (_Memo) {
	_inherits(Cutie, _Memo);

	function Cutie(_ref) {
		var video = _ref.video,
		    _ref$name = _ref.name,
		    name = _ref$name === undefined ? "cue" : _ref$name;

		_classCallCheck(this, Cutie);

		var _this = _possibleConstructorReturn(this, (Cutie.__proto__ || Object.getPrototypeOf(Cutie)).call(this));

		_this.video = video;
		_this.cues = [];
		_this.cueTrack = _this.video.addTextTrack("metadata", name);

		_this._changeProxy = function (e) {
			_this.change(e);
		};
		_this._cueChangeProxy = function (e) {
			_this.cueChange(e);
		};
		_this._errorProxy = function (e) {
			_this.error(e);
		};
		_this._enterProxy = function (e) {
			_this.enter(e);
		};
		_this._exitProxy = function (e) {
			_this.exit(e);
		};

		_this.bind();
		return _this;
	}

	_createClass(Cutie, [{
		key: "bind",
		value: function bind() {
			this.cueTrack.addEventListener(CUE_CHANGE, this._cueChangeProxy);
			this.cueTrack.addEventListener(ERROR, this._errorProxy);
			this.cueTrack.addEventListener(CHANGE, this._changeProxy);
			this.cueTrack.addEventListener(ENTER, this._enterProxy);
			this.cueTrack.addEventListener(EXIT, this._exitProxy);
		}
	}, {
		key: "unbind",
		value: function unbind() {
			this.cueTrack.removeEventListener(CUE_CHANGE, this._changeProxy);
			this.cueTrack.removeEventListener(ERROR, this._errorProxy);
			this.cueTrack.removeEventListener(CHANGE, this._changeProxy);
			this.cueTrack.removeEventListener(ENTER, this._enterProxy);
			this.cueTrack.removeEventListener(EXIT, this._exitProxy);
		}
	}, {
		key: "change",
		value: function change(e) {
			this.trigger(CHANGE, e);
		}
	}, {
		key: "cueChange",
		value: function cueChange(e) {
			this.trigger(CUE_CHANGE, e);
		}
	}, {
		key: "error",
		value: function error(e) {
			this.trigger(ERROR, e);
		}
	}, {
		key: "enter",
		value: function enter(e) {
			this.trigger(ENTER, e);
		}
	}, {
		key: "exit",
		value: function exit(e) {
			this.trigger(EXIT, e);
		}
	}, {
		key: "addCue",
		value: function addCue(start, end, id) {
			var cue = new VTTCue(start, end, '');
			cue.id = id;
			cue.pauseOnExit = true;
			this.cues.push(cue);
			this.cueTrack.addCue(cue);
		}
	}, {
		key: "removeCue",
		value: function removeCue(id) {
			var index = this.cues.findIndex(function (cue) {
				return cue.id === id;
			});
			var cue = this.cues.splice(index, 1);
			this.cueTrack.removeCue(cue);
		}
	}]);

	return Cutie;
}(_memo2.default);

exports.default = Cutie;

window.Cutie = Cutie;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Memo = function () {
	function Memo() {
		_classCallCheck(this, Memo);

		this.listeners = {};
	}

	_createClass(Memo, [{
		key: "on",
		value: function on(event, handler) {
			if (this.listeners[event] === undefined) {
				this.listeners[event] = [handler];
			} else {
				this.listeners[event].push(handler);
			}
			return handler;
		}
	}, {
		key: "off",
		value: function off(event) {
			var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (this.listeners[event]) {
				if (handler == null) {
					for (var i = this.listeners[event].length - 1; i >= 0; i--) {
						if (this.listeners[event].length === 1) {
							delete this.listeners[event];
							return true;
						} else {
							this.listeners[event].splice(i, 1);
							return true;
						}
					}
				} else {
					for (var _i = 0; _i < this.listeners[event].length; _i++) {
						if (this.listeners[event][_i] == handler) {
							this.listeners[event].splice(_i, 1);
							if (this.listeners[event].length === 0) {
								delete this.listeners[event];
							}
							return true;
						}
					}
				}
			}
			return false;
		}
	}, {
		key: "trigger",
		value: function trigger(event, data) {
			if (this.listeners[event]) {
				for (var i = this.listeners[event].length - 1; i >= 0; i--) {
					if (this.listeners[event] !== undefined) {
						if (typeof this.listeners[event][i] === "function" && this.listeners[event][i]) {
							this.listeners[event][i](data);
						} else {
							throw "Event handler is not a function.";
						}
					}
				}
			}
		}
	}]);

	return Memo;
}();

exports.default = Memo;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map