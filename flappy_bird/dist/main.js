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

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\nconst CONSTANTS = {\n    GRAVITY: 0.8,\n    FLAP_SPEED: -13,\n    TERMINAL_VEL: 12,\n    BIRD_WIDTH: 40,\n    BIRD_HEIGHT: 30\n};\n\nclass Bird {\n\n    constructor(dimensions) {\n        this.dimensions = dimensions;\n        this.velocity = 0;\n        this.x = dimensions.width / 3;\n        this.y = dimensions.height / 2;\n    }\n\n    drawBird(ctx) {\n        ctx.fillStyle = \"yellow\";\n        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);\n    }\n\n    animate(ctx) {\n        console.log(CONSTANTS.GRAVITY);\n        this.drawBird(ctx);\n        this.move();\n    }\n\n    move() {\n        this.y += this.velocity;\n        this.velocity = Math.min(this.velocity + CONSTANTS.GRAVITY, CONSTANTS.TERMINAL_VEL);\n    }\n\n    flap() {\n        this.velocity = CONSTANTS.FLAP_SPEED;\n    }\n}\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlappyBird; });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\n\n\nclass FlappyBird {\n  constructor(canvas){\n    canvas.addEventListener(\"mousedown\", this.click.bind(this));\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.restart();\n  }\n\n  animate(){\n    this.level.animate(this.ctx);\n    this.bird.animate(this.ctx);\n    if (this.running) {\n        window.requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  restart(){\n      this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n      this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\n      this.animate();\n      this.running = false;\n  }\n\n  play() {\n      this.running = true;\n      this.animate();\n  }\n\n  click() {\n    this.running ? this.bird.flap() : this.play();\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById('bird-game');\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\nconst CONSTANTS = {\n  GAPSIZE: 150,\n  PIPE_SPACING: 220,\n  PIPE_WIDTH: 50,\n  PIPE_SPEED: 3\n}\n\nclass Level {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.pipes = [{x: 1000, top: Math.floor(Math.random() * this.dimensions.height - CONSTANTS.GAPSIZE) }]\n    this.pipes.push(this.generate_pipe(1));\n    this.pipes.push(this.generate_pipe(2));\n    console.log(this.pipes);\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"skyblue\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n  \n  animate(ctx){\n    this.drawBackground(ctx);\n    this.movepipes();\n    this.drawpipes(ctx);\n  }\n\n  movepipes(){\n    for (let i = 0; i < 3; i++) {\n        this.pipes[i]['x'] -= CONSTANTS.PIPE_SPEED;\n    }\n    if (this.pipes[0]['x'] <= -CONSTANTS.PIPE_WIDTH) {\n        this.pipes.shift();\n        this.pipes.push(this.generate_pipe());\n        console.log(this.pipes);\n    }\n  }\n\n  drawpipes(ctx){\n    ctx.fillStyle = \"green\";\n    for(let i=0; i < this.pipes.length; i++){\n        let pipe = this.pipes[i];\n        let x = pipe['x'];\n        let width = CONSTANTS.PIPE_WIDTH;\n        let top_y = 0;\n        let top_height = pipe['top'];\n        let bottom_y = top_height + CONSTANTS.GAPSIZE;\n        let bottom_height = this.dimensions.height - bottom_y;\n        ctx.fillRect(x, top_y, width, top_height);\n        ctx.fillRect(x, bottom_y, width, bottom_height);\n    }\n  }\n  \n  generate_pipe(){\n    return { x: this.pipes[this.pipes.length - 1]['x'] + CONSTANTS.PIPE_SPACING, top: Math.floor(Math.random() * (this.dimensions.height - CONSTANTS.GAPSIZE)) };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });