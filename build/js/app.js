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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(/*! ./lib/sayHello */ \"./lib/sayHello.js\");\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _ball = __webpack_require__(/*! ./ball */ \"./ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar container = document.querySelector('.team');\nvar circles = container.getElementsByClassName('js-circle');\nvar ballsOptions = [{ x: 220, y: 20 }, { x: 20, y: 20 }, { x: 280, y: 80 }, { x: 10, y: 250 }, { x: 600, y: 20 }];\nvar balls = [];\n\nfor (var i = 0; i < circles.length; i++) {\n  balls.push(new _ball2.default(circles[i], ballsOptions[i].x, ballsOptions[i].y));\n};\n\ncontainer.addEventListener('click', function (e) {\n  var target = e.target.closest('.js-circle');\n  if (!target) {\n    return;\n  }\n\n  var rect = target.getBoundingClientRect();\n\n  balls.forEach(function (ball) {\n    if (ball.ball === target) {\n      return;\n    }\n\n    var x = rect.left + rect.width / 2;\n    var y = rect.top + rect.height / 2;\n\n    ball.think(x, y, rect.width);\n    ball.move();\n  });\n});\n\n(0, _sayHello2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsbyc7XG5pbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbScpO1xuY29uc3QgY2lyY2xlcyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1jaXJjbGUnKTtcbmNvbnN0IGJhbGxzT3B0aW9ucyA9IFtcbiAge3g6IDIyMCwgeTogMjB9LFxuICB7eDogMjAsIHk6IDIwfSxcbiAge3g6IDI4MCwgeTogODB9LFxuICB7eDogMTAsIHk6IDI1MH0sXG4gIHt4OiA2MDAsIHk6IDIwfSxcbl07XG5jb25zdCBiYWxscyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNpcmNsZXMubGVuZ3RoOyBpKyspIHtcbiAgYmFsbHMucHVzaChcbiAgICBuZXcgQmFsbChcbiAgICAgIGNpcmNsZXNbaV0sXG4gICAgICBiYWxsc09wdGlvbnNbaV0ueCxcbiAgICAgIGJhbGxzT3B0aW9uc1tpXS55LFxuICAgIClcbiAgKVxufTtcblxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmpzLWNpcmNsZScpO1xuICBpZighdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICBiYWxscy5mb3JFYWNoKCBiYWxsID0+IHtcbiAgICBpZihiYWxsLmJhbGwgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcblxuICAgIGJhbGwudGhpbmsoeCwgeSwgcmVjdC53aWR0aCk7XG4gICAgYmFsbC5tb3ZlKCk7XG4gIH0pXG59KVxuXG5zYXlIZWxsbygpOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./ball.js":
/*!*****************!*\
  !*** ./ball.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n  function Ball(circle, x, y) {\n    _classCallCheck(this, Ball);\n\n    this.ball = circle;\n    this.isGroup = circle.classList.contains('js-group');\n    this.x = x || 0;\n    this.y = y || 0;\n    // this.originalX = x || 0;\n    // this.originalY = y || 0;\n    this.vx = 0;\n    this.vy = 0;\n    // this.friction = 0.9;\n    // this.springFactor = 0.01;\n    this.power = 50;\n\n    this.init();\n  }\n\n  _createClass(Ball, [{\n    key: 'init',\n    value: function init() {\n      this.addHandler();\n      this.move();\n    }\n  }, {\n    key: 'addHandler',\n    value: function addHandler() {\n      this.ball.addEventListener('click', function () {});\n    }\n\n    // setPosition(x, y) {\n    //   this.x = x;\n    //   this.y = y;\n    // }\n\n  }, {\n    key: 'think',\n    value: function think(x, y, radius) {\n      var dx = this.x - x;\n      var dy = this.y - y;\n\n      // const dist = Math.sqrt(dx*dx + dy*dy);\n\n      // interaction\n      // if (dist < radius) {\n      var angle = Math.atan2(dy, dx);\n      var tx = this.x + Math.cos(angle) * this.power;\n      var ty = this.y + Math.sin(angle) * this.power;\n\n      this.vx += tx - this.x;\n      this.vy += ty - this.y;\n      // }\n\n      // spring back\n      // const dx1 = -(this.x - this.originalX);\n      // const dy1 = -(this.y - this.originalY);\n\n      // this.vx += dx1 * this.springFactor;\n      // this.vy += dy1 * this.springFactor;\n\n      // friction\n      // this.vx *= this.friction;\n      // this.vy *= this.friction;\n\n      // actual move\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n  }, {\n    key: 'move',\n    value: function move() {\n      this.ball.style.left = this.x + 'px';\n      this.ball.style.top = this.y + 'px';\n    }\n  }]);\n\n  return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWxsLmpzP2M2ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgY29uc3RydWN0b3IoY2lyY2xlLCB4LCB5KSB7XHJcbiAgICB0aGlzLmJhbGwgPSBjaXJjbGU7XHJcbiAgICB0aGlzLmlzR3JvdXAgPSBjaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1ncm91cCcpO1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gICAgLy8gdGhpcy5vcmlnaW5hbFggPSB4IHx8IDA7XHJcbiAgICAvLyB0aGlzLm9yaWdpbmFsWSA9IHkgfHwgMDtcclxuICAgIHRoaXMudnggPSAwO1xyXG4gICAgdGhpcy52eSA9IDA7XHJcbiAgICAvLyB0aGlzLmZyaWN0aW9uID0gMC45O1xyXG4gICAgLy8gdGhpcy5zcHJpbmdGYWN0b3IgPSAwLjAxO1xyXG4gICAgdGhpcy5wb3dlciA9IDUwO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5hZGRIYW5kbGVyKCk7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICB9XHJcblxyXG4gIGFkZEhhbmRsZXIoKSB7XHJcbiAgICB0aGlzLmJhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHt9KVxyXG4gIH1cclxuXHJcbiAgLy8gc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gIC8vICAgdGhpcy54ID0geDtcclxuICAvLyAgIHRoaXMueSA9IHk7XHJcbiAgLy8gfVxyXG5cclxuICB0aGluayh4LCB5LCByYWRpdXMpIHtcclxuICAgIGNvbnN0IGR4ID0gdGhpcy54IC0geDtcclxuICAgIGNvbnN0IGR5ID0gdGhpcy55IC0geTtcclxuXHJcbiAgICAvLyBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xyXG4gICAgXHJcbiAgICAvLyBpbnRlcmFjdGlvblxyXG4gICAgLy8gaWYgKGRpc3QgPCByYWRpdXMpIHtcclxuICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XHJcbiAgICAgIGNvbnN0IHR4ID0gdGhpcy54ICsgTWF0aC5jb3MoYW5nbGUpICogdGhpcy5wb3dlcjtcclxuICAgICAgY29uc3QgdHkgPSB0aGlzLnkgKyBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnBvd2VyO1xyXG5cclxuICAgICAgdGhpcy52eCArPSB0eCAtIHRoaXMueDtcclxuICAgICAgdGhpcy52eSArPSB0eSAtIHRoaXMueTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzcHJpbmcgYmFja1xyXG4gICAgLy8gY29uc3QgZHgxID0gLSh0aGlzLnggLSB0aGlzLm9yaWdpbmFsWCk7XHJcbiAgICAvLyBjb25zdCBkeTEgPSAtKHRoaXMueSAtIHRoaXMub3JpZ2luYWxZKTtcclxuXHJcbiAgICAvLyB0aGlzLnZ4ICs9IGR4MSAqIHRoaXMuc3ByaW5nRmFjdG9yO1xyXG4gICAgLy8gdGhpcy52eSArPSBkeTEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcclxuXHJcbiAgICAvLyBmcmljdGlvblxyXG4gICAgLy8gdGhpcy52eCAqPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgLy8gdGhpcy52eSAqPSB0aGlzLmZyaWN0aW9uO1xyXG5cclxuICAgIC8vIGFjdHVhbCBtb3ZlXHJcbiAgICB0aGlzLnggKz0gdGhpcy52eDtcclxuICAgIHRoaXMueSArPSB0aGlzLnZ5O1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIHRoaXMuYmFsbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy54ICB9cHhgO1xyXG4gICAgdGhpcy5iYWxsLnN0eWxlLnRvcCA9IGAke3RoaXMueSAgfXB4YDtcclxuICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFsRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ball.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \\n\\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9zYXlIZWxsby5qcz8xNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgICAgICB2YXIgYXJncyA9IFsnXFxuICVjIE1hZGUgd2l0aCDinaTvuI8gYnkgUml2ZXJjb2RlICVjIGh0dHA6Ly93d3cucml2ZXJjby5kZS8gJWMgJWMg8J+QsyBcXG5cXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjAwMTsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7Ym9yZGVyOiAxcHggc29saWQgIzAwMDsnLCAnYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNiMDk3NmQ7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6NXB4IDA7J107XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnTWFkZSB3aXRoIGxvdmUg4p2k77iPIFJpdmVyY28uZGUgLSBodHRwOi8vd3d3LnJpdmVyY28uZGUvICDinaTvuI8nKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNheUhlbGxvOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });