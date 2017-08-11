(function webpackUniversalModuleDefinition(root, factory) {
/* webpack code 
============================================================================= */
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("DPlayer", [], factory);
	else if(typeof exports === 'object')
		exports["DPlayer"] = factory();
	else
		root["DPlayer"] = factory();
    })(this, function() { return ( function(modules) { // webpackBootstrap
        // The module cache
        var installedModules = {};

        // The require function
        function __webpack_require__(moduleId) {
            // Check if module is in cache
            if(installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            // Create a new module (and put it into the cache)
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            // Execute the module function
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            // Flag the module as loaded
            module.l = true;
            // Return the exports of the module
            return module.exports;
        }
        // expose the modules object (__webpack_modules__)
        __webpack_require__.m = modules;
        // expose the module cache
        __webpack_require__.c = installedModules;
        // define getter function for harmony exports
        __webpack_require__.d = function(exports, name, getter) {
            if(!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        // getDefaultExport function for compatibility with non-harmony modules
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ?
            function getDefault() { return module['default']; } :
            function getModuleExports() { return module; };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        // Object.prototype.hasOwnProperty.call
        __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        // __webpack_public_path__
        __webpack_require__.p = "/";
        // Load entry module and return exports
        return __webpack_require__(__webpack_require__.s = 1);
    })([
/* main code 
============================================================================= */
    /* 0 *//* SVG define */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var svgSource = {
            'play': [
                '0 0 16 32',
                'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'
            ],
            'pause': [
                '0 0 17 32',
                'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'
            ],
            'volume-up': [
                '0 0 459 459',
                'M0,153v153h102l127.5,127.5v-408L102,153H0z M344.25,229.5c0-45.9-25.5-84.15-63.75-102v204    C318.75,313.65,344.25,275.4,344.25,229.5z M280.5,5.1v53.55C354.45,81.6,408,147.899,408,229.5S354.45,377.4,280.5,400.35V453.9    C382.5,430.949,459,339.15,459,229.5C459,119.85,382.5,28.049,280.5,5.1z'
            ],
            'volume-down': [
                '0 0 21 32',
                'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'
            ],
            'volume-off': [
                '0 0 21 32',
                'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'
            ],
            'loop': [
                '0 0 32 32',
                'M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z'
            ],
            'full': [
                '0 0 32 33',
                'M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z'
            ],
            'full-in': [
                '0 0 32 33',
                'M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z'
            ],
            'setting': [
                '0 0 32 28',
                'M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z'
            ],
            'right': [
                '0 0 32 32',
                'M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z'
            ],
            'comment': [
                '0 0 32 32',
                'M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z'
            ],
            'comment-off': [
                '0 0 32 32',
                'M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z'
            ],
            'send': [
                '0 0 32 32',
                'M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z'
            ],
            'menu': [
                '0 0 22 32',
                'M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z'
            ],
            'camera': [
                '0 0 32 32',
                'M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z'
            ]
        };
        module.exports = function (type) {
            return '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + svgSource[type][0] + '" width="100%"><use xlink:href="#dplayer-' + type + '"></use><path class="dplayer-fill" d="' + svgSource[type][1] + '" id="dplayer-' + type + '"></path></svg>\n';
        };
    }),
    /* 1 *//* dplayer library Loading msg */
    (function(module, exports, __webpack_require__) {
        "use strict";
        console.log('%c DPlayer ' + "1.5.2" + ' %c http://dplayer.js.org ', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
        module.exports = __webpack_require__(2);
    }),
    /* 2 *//* Dplayer main constructor */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
        };
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        __webpack_require__(3);
        var _utils = __webpack_require__(4);
        var _utils2 = _interopRequireDefault(_utils);
        var _svg = __webpack_require__(0);
        var _svg2 = _interopRequireDefault(_svg);
        var _option = __webpack_require__(5);
        var _option2 = _interopRequireDefault(_option);
        var _i18n = __webpack_require__(7);
        var _i18n2 = _interopRequireDefault(_i18n);
        var _html = __webpack_require__(8);
        var _html2 = _interopRequireDefault(_html);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var index = 0;
        var DPlayer = function () {
            function DPlayer(option) {
                var _this = this;
                _classCallCheck(this, DPlayer);
                this.option = (0, _option2.default)(option);
                this.option.element.classList.add('dplayer');
                if (this.option.video.quality) {
                    this.qualityIndex = this.option.video.defaultQuality;
                    this.quality = this.option.video.quality[this.option.video.defaultQuality];
                }
                this.tran = new _i18n2.default(this.option.lang).tran;
                this.updateBar = function (type, percentage, direction) {
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    bar[type + 'Bar'].style[direction] = percentage * 100 + '%';
                };
                var eventTypes = [
                    'play',
                    'pause',
                    'canplay',
                    'playing',
                    'ended',
                    'error'
                ];
                this.event = {};
                for (var i = 0; i < eventTypes.length; i++) {
                    this.event[eventTypes[i]] = [];
                }
                this.trigger = function (type) {
                    for (var _i = 0; _i < _this.event[type].length; _i++) {
                        _this.event[type][_i]();
                    }
                };
                this.element = this.option.element;
                if (!this.option.danmaku) {
                    this.element.classList.add('dplayer-no-danmaku');
                }
                if (_utils.isMobile) {
                    this.element.classList.add('dplayer-mobile');
                }
                this.element.innerHTML = _html2.default.main(option, index, this.tran);
                this.arrow = this.element.offsetWidth <= 500;
                if (this.arrow) {
                    var arrowStyle = document.createElement('style');
                    arrowStyle.innerHTML = '.dplayer .dplayer-danmaku{font-size:18px}';
                    document.head.appendChild(arrowStyle);
                }
                this.video = this.element.getElementsByClassName('dplayer-video-current')[0];
                this.initVideo();
                this.bezel = this.element.getElementsByClassName('dplayer-bezel-icon')[0];
                this.bezel.addEventListener('animationend', function () {
                    _this.bezel.classList.remove('dplayer-bezel-transition');
                });
                this.playButton = this.element.getElementsByClassName('dplayer-play-icon')[0];
                this.paused = true;
                this.playButton.addEventListener('click', function () {
                    _this.toggle();
                });
                var videoWrap = this.element.getElementsByClassName('dplayer-video-wrap')[0];
                var conMask = this.element.getElementsByClassName('dplayer-controller-mask')[0];
                if (!_utils.isMobile) {
                    videoWrap.addEventListener('click', function () {
                        _this.toggle();
                    });
                    conMask.addEventListener('click', function () {
                        _this.toggle();
                    });
                } else {
                    var toggleController = function toggleController() {
                        if (_this.element.classList.contains('dplayer-hide-controller')) {
                            _this.element.classList.remove('dplayer-hide-controller');
                        } else {
                            _this.element.classList.add('dplayer-hide-controller');
                        }
                    };
                    videoWrap.addEventListener('click', toggleController);
                    conMask.addEventListener('click', toggleController);
                }
                var bar = {};
                bar.playedBar = this.element.getElementsByClassName('dplayer-played')[0];
                bar.loadedBar = this.element.getElementsByClassName('dplayer-loaded')[0];
                var pbar = this.element.getElementsByClassName('dplayer-bar-wrap')[0];
                var pbarTimeTips = this.element.getElementsByClassName('dplayer-bar-time')[0];
                var barWidth = void 0;
                var lastPlayPos = 0;
                var currentPlayPos = 0;
                var bufferingDetected = false;
                this.danmakuTime = false;
                this.playedTime = false;
                window.requestAnimationFrame = function () {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                }();
                var setCheckLoadingTime = function setCheckLoadingTime() {
                    _this.checkLoading = setInterval(function () {
                        currentPlayPos = _this.video.currentTime;
                        if (!bufferingDetected && currentPlayPos < lastPlayPos + 0.01 && !_this.video.paused) {
                            _this.element.classList.add('dplayer-loading');
                            bufferingDetected = true;
                        }
                        if (bufferingDetected && currentPlayPos > lastPlayPos + 0.01 && !_this.video.paused) {
                            _this.element.classList.remove('dplayer-loading');
                            bufferingDetected = false;
                        }
                        lastPlayPos = currentPlayPos;
                    }, 100);
                };
                var clearCheckLoadingTime = function clearCheckLoadingTime() {
                    clearInterval(_this.checkLoading);
                };
                this.animationFrame = function () {
                    if (_this.playedTime) {
                        _this.updateBar('played', _this.video.currentTime / _this.video.duration, 'width');
                        _this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = _utils2.default.secondToTime(_this.video.currentTime);
                        _this.trigger('playing');
                    }
                    if (_this.danmakuTime && _this.option.danmaku && showdan && _this.dan) {
                        var item = _this.dan[_this.danIndex];
                        var danmakus = [];
                        while (item && _this.video.currentTime > parseFloat(item.time)) {
                            danmakus.push(item);
                            item = _this.dan[++_this.danIndex];
                        }
                        _this.pushDanmaku(danmakus);
                    }
                    _this.requestID = window.requestAnimationFrame(_this.animationFrame);
                };
                this.requestID = window.requestAnimationFrame(this.animationFrame);
                this.setTime = function (type) {
                    if (!type) {
                        _this.danmakuTime = true;
                        _this.playedTime = true;
                        setCheckLoadingTime();
                    } else {
                        _this[type + 'Time'] = true;
                        if (type === 'played') {
                            setCheckLoadingTime();
                        }
                    }
                };
                this.clearTime = function (type) {
                    if (!type) {
                        _this.danmakuTime = false;
                        _this.playedTime = false;
                        clearCheckLoadingTime();
                    } else {
                        _this[type + 'Time'] = false;
                        if (type === 'played') {
                            clearCheckLoadingTime();
                        }
                    }
                };
                pbar.addEventListener('click', function (event) {
                    var e = event || window.event;
                    barWidth = pbar.clientWidth;
                    var percentage = (e.clientX - _utils2.default.getElementViewLeft(pbar)) / barWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    _this.updateBar('played', percentage, 'width');
                    _this.seek(parseFloat(bar.playedBar.style.width) / 100 * _this.video.duration);
                });
                this.isTipsShow = false;
                this.timeTipsHandler = this.timeTipsHandler(pbar, pbarTimeTips).bind(this);
                pbar.addEventListener('mousemove', this.timeTipsHandler);
                pbar.addEventListener('mouseover', this.timeTipsHandler);
                pbar.addEventListener('mouseenter', this.timeTipsHandler);
                pbar.addEventListener('mouseout', this.timeTipsHandler);
                pbar.addEventListener('mouseleave', this.timeTipsHandler);
                var thumbMove = function thumbMove(event) {
                    var e = event || window.event;
                    var percentage = (e.clientX - _utils2.default.getElementViewLeft(pbar)) / barWidth;
                    percentage = percentage > 0 ? percentage : 0;
                    percentage = percentage < 1 ? percentage : 1;
                    _this.updateBar('played', percentage, 'width');
                    _this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = _utils2.default.secondToTime(percentage * _this.video.duration);
                };
                var thumbUp = function thumbUp() {
                    document.removeEventListener('mouseup', thumbUp);
                    document.removeEventListener('mousemove', thumbMove);
                    _this.seek(parseFloat(bar.playedBar.style.width) / 100 * _this.video.duration);
                    _this.setTime();
                };
                pbar.addEventListener('mousedown', function () {
                    barWidth = pbar.clientWidth;
                    _this.clearTime();
                    document.addEventListener('mousemove', thumbMove);
                    document.addEventListener('mouseup', thumbUp);
                });
                bar.volumeBar = this.element.getElementsByClassName('dplayer-volume-bar-inner')[0];
                var volumeEle = this.element.getElementsByClassName('dplayer-volume')[0];
                var volumeBarWrapWrap = this.element.getElementsByClassName('dplayer-volume-bar-wrap')[0];
                var volumeBarWrap = this.element.getElementsByClassName('dplayer-volume-bar')[0];
                var volumeicon = this.element.getElementsByClassName('dplayer-volume-icon')[0];
                var vWidth = 35;
                this.switchVolumeIcon = function () {
                    var volumeicon = _this.element.getElementsByClassName('dplayer-volume-icon')[0];
                    if (_this.video.volume >= 0.8) {
                        volumeicon.innerHTML = (0, _svg2.default)('volume-up');
                    } else if (_this.video.volume > 0) {
                        volumeicon.innerHTML = (0, _svg2.default)('volume-down');
                    } else {
                        volumeicon.innerHTML = (0, _svg2.default)('volume-off');
                    }
                };
                var volumeMove = function volumeMove(event) {
                    var e = event || window.event;
                    var percentage = (e.clientX - _utils2.default.getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
                    _this.volume(percentage);
                };
                var volumeUp = function volumeUp() {
                    document.removeEventListener('mouseup', volumeUp);
                    document.removeEventListener('mousemove', volumeMove);
                    volumeEle.classList.remove('dplayer-volume-active');
                };
                volumeBarWrapWrap.addEventListener('click', function (event) {
                    var e = event || window.event;
                    var percentage = (e.clientX - _utils2.default.getElementViewLeft(volumeBarWrap) - 5.5) / vWidth;
                    _this.volume(percentage);
                });
                volumeBarWrapWrap.addEventListener('mousedown', function () {
                    document.addEventListener('mousemove', volumeMove);
                    document.addEventListener('mouseup', volumeUp);
                    volumeEle.classList.add('dplayer-volume-active');
                });
                volumeicon.addEventListener('click', function () {
                    if (_this.video.muted) {
                        _this.video.muted = false;
                        _this.switchVolumeIcon();
                        _this.updateBar('volume', _this.video.volume, 'width');
                    } else {
                        _this.video.muted = true;
                        volumeicon.innerHTML = (0, _svg2.default)('volume-off');
                        _this.updateBar('volume', 0, 'width');
                    }
                });
                this.hideTime = 0;
                if (!_utils.isMobile) {
                    var hideController = function hideController() {
                        _this.element.classList.remove('dplayer-hide-controller');
                        clearTimeout(_this.hideTime);
                        _this.hideTime = setTimeout(function () {
                            if (_this.video.played.length) {
                                _this.element.classList.add('dplayer-hide-controller');
                                closeSetting();
                                closeComment();
                            }
                        }, 2000);
                    };
                    this.element.addEventListener('mousemove', hideController);
                    this.element.addEventListener('click', hideController);
                }
                this.danOpacity = localStorage.getItem('DPlayer-opacity') || 0.7;
                var settingHTML = _html2.default.setting(this.tran);
                var settingIcon = this.element.getElementsByClassName('dplayer-setting-icon')[0];
                var settingBox = this.element.getElementsByClassName('dplayer-setting-box')[0];
                var mask = this.element.getElementsByClassName('dplayer-mask')[0];
                settingBox.innerHTML = settingHTML.original;
                var closeSetting = function closeSetting() {
                    if (settingBox.classList.contains('dplayer-setting-box-open')) {
                        settingBox.classList.remove('dplayer-setting-box-open');
                        mask.classList.remove('dplayer-mask-show');
                        setTimeout(function () {
                            settingBox.classList.remove('dplayer-setting-box-narrow');
                            settingBox.innerHTML = settingHTML.original;
                            settingEvent();
                        }, 300);
                    }
                };
                var openSetting = function openSetting() {
                    settingBox.classList.add('dplayer-setting-box-open');
                    mask.classList.add('dplayer-mask-show');
                };
                mask.addEventListener('click', function () {
                    closeSetting();
                });
                settingIcon.addEventListener('click', function () {
                    openSetting();
                });
                this.loop = this.option.loop;
                var danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
                var showdan = true;
                var settingEvent = function settingEvent() {
                    var loopEle = _this.element.getElementsByClassName('dplayer-setting-loop')[0];
                    var loopToggle = loopEle.getElementsByClassName('dplayer-toggle-setting-input')[0];
                    loopToggle.checked = _this.loop;
                    loopEle.addEventListener('click', function () {
                        loopToggle.checked = !loopToggle.checked;
                        if (loopToggle.checked) {
                            _this.loop = true;
                        } else {
                            _this.loop = false;
                        }
                        // closeSetting();
                    });
                    var showDanEle = _this.element.getElementsByClassName('dplayer-setting-showdan')[0];
                    var showDanToggle = showDanEle.getElementsByClassName('dplayer-showdan-setting-input')[0];
                    showDanToggle.checked = showdan;
                    showDanEle.addEventListener('click', function () {
                        showDanToggle.checked = !showDanToggle.checked;
                        if (showDanToggle.checked) {
                            showdan = true;
                            if (_this.option.danmaku) {
                                for (var _i2 = 0; _i2 < _this.dan.length; _i2++) {
                                    if (_this.dan[_i2].time >= _this.video.currentTime) {
                                        _this.danIndex = _i2;
                                        break;
                                    }
                                    _this.danIndex = _this.dan.length;
                                }
                                if (!_this.paused) {
                                    _this.setTime('danmaku');
                                }
                            }
                        } else {
                            showdan = false;
                            if (_this.option.danmaku) {
                                _this.clearTime('danmaku');
                                danContainer.innerHTML = '';
                                _this.danTunnel = {
                                    right: {},
                                    top: {},
                                    bottom: {}
                                };
                            }
                        }
                        // closeSetting();
                    });
                    var speedEle = _this.element.getElementsByClassName('dplayer-setting-speed')[0];
                    speedEle.addEventListener('click', function () {
                        settingBox.classList.add('dplayer-setting-box-narrow');
                        settingBox.innerHTML = settingHTML.speed;
                        var speedItem = settingBox.getElementsByClassName('dplayer-setting-speed-item');
                        var _loop = function _loop(_i3) {
                            speedItem[_i3].addEventListener('click', function () {
                                _this.video.playbackRate = speedItem[_i3].dataset.speed;
                                closeSetting();
                            });
                        };
                        for (var _i3 = 0; _i3 < speedItem.length; _i3++) {
                            _loop(_i3);
                        }
                    });
                    if (_this.option.danmaku) {
                        bar.danmakuBar = _this.element.getElementsByClassName('dplayer-danmaku-bar-inner')[0];
                        var danmakuBarWrapWrap = _this.element.getElementsByClassName('dplayer-danmaku-bar-wrap')[0];
                        var danmakuBarWrap = _this.element.getElementsByClassName('dplayer-danmaku-bar')[0];
                        var danmakuSettingBox = _this.element.getElementsByClassName('dplayer-setting-danmaku')[0];
                        var dWidth = 130;
                        _this.updateBar('danmaku', _this.danOpacity, 'width');
                        var danmakuMove = function danmakuMove(event) {
                            var e = event || window.event;
                            var percentage = (e.clientX - _utils2.default.getElementViewLeft(danmakuBarWrap)) / dWidth;
                            percentage = percentage > 0 ? percentage : 0;
                            percentage = percentage < 1 ? percentage : 1;
                            _this.updateBar('danmaku', percentage, 'width');
                            var items = _this.element.getElementsByClassName('dplayer-danmaku-item');
                            for (var _i4 = 0; _i4 < items.length; _i4++) {
                                items[_i4].style.opacity = percentage;
                            }
                            _this.danOpacity = percentage;
                            localStorage.setItem('DPlayer-opacity', _this.danOpacity);
                        };
                        var danmakuUp = function danmakuUp() {
                            document.removeEventListener('mouseup', danmakuUp);
                            document.removeEventListener('mousemove', danmakuMove);
                            danmakuSettingBox.classList.remove('dplayer-setting-danmaku-active');
                        };
                        danmakuBarWrapWrap.addEventListener('click', function (event) {
                            var e = event || window.event;
                            var percentage = (e.clientX - _utils2.default.getElementViewLeft(danmakuBarWrap)) / dWidth;
                            percentage = percentage > 0 ? percentage : 0;
                            percentage = percentage < 1 ? percentage : 1;
                            _this.updateBar('danmaku', percentage, 'width');
                            var items = _this.element.getElementsByClassName('dplayer-danmaku-item');
                            for (var _i5 = 0; _i5 < items.length; _i5++) {
                                items[_i5].style.opacity = percentage;
                            }
                            _this.danOpacity = percentage;
                            localStorage.setItem('DPlayer-opacity', _this.danOpacity);
                        });
                        danmakuBarWrapWrap.addEventListener('mousedown', function () {
                            document.addEventListener('mousemove', danmakuMove);
                            document.addEventListener('mouseup', danmakuUp);
                            danmakuSettingBox.classList.add('dplayer-setting-danmaku-active');
                        });
                    }
                };
                settingEvent();
                if (this.video.duration !== 1) {
                    this.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = this.video.duration ? _utils2.default.secondToTime(this.video.duration) : '00:00';
                }
                this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                };
                var measureStyle = getComputedStyle(this.element.getElementsByClassName('dplayer-danmaku-item')[0], null);
                var context = document.createElement('canvas').getContext('2d');
                context.font = measureStyle.getPropertyValue('font-size') + ' ' + measureStyle.getPropertyValue('font-family');
                this.danmakuMeasure = function (text) {
                    return context.measureText(text).width;
                };
                if (this.option.danmaku) {
                    this.danIndex = 0;
                    this.readDanmaku();
                } else {
                    if (this.option.autoplay && !_utils.isMobile) {
                        this.play();
                    } else if (_utils.isMobile) {
                        this.pause();
                    }
                }
                var commentInput = this.element.getElementsByClassName('dplayer-comment-input')[0];
                var commentIcon = this.element.getElementsByClassName('dplayer-comment-icon')[0];
                var commentBox = this.element.getElementsByClassName('dplayer-comment-box')[0];
                var commentSettingIcon = this.element.getElementsByClassName('dplayer-comment-setting-icon')[0];
                var commentSettingBox = this.element.getElementsByClassName('dplayer-comment-setting-box')[0];
                var commentSendIcon = this.element.getElementsByClassName('dplayer-send-icon')[0];
                var htmlEncode = function htmlEncode(str) {
                    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g, '&#x2f;');
                };
                var sendComment = function sendComment() {
                    commentInput.blur();
                    if (!commentInput.value.replace(/^\s+|\s+$/g, '')) {
                        _this.notice(_this.tran('Please input danmaku content!'));
                        return;
                    }
                    var danmakuData = {
                        token: _this.option.danmaku.token,
                        player: _this.option.danmaku.id,
                        author: _this.option.danmaku.user,
                        time: _this.video.currentTime,
                        text: commentInput.value,
                        color: _this.element.querySelector('.dplayer-comment-setting-color input:checked').value,
                        type: _this.element.querySelector('.dplayer-comment-setting-type input:checked').value
                    };
                    _this.option.apiBackend.send(_this.option.danmaku.api, danmakuData);
                    commentInput.value = '';
                    closeComment();
                    _this.dan.splice(_this.danIndex, 0, danmakuData);
                    _this.danIndex++;
                    var danmaku = {
                        text: htmlEncode(danmakuData.text),
                        color: danmakuData.color,
                        type: danmakuData.type,
                        border: '2px solid ' + _this.option.theme
                    };
                    _this.pushDanmaku(danmaku);
                };
                var closeCommentSetting = function closeCommentSetting() {
                    if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                        commentSettingBox.classList.remove('dplayer-comment-setting-open');
                    }
                };
                var toggleCommentSetting = function toggleCommentSetting() {
                    if (commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
                        commentSettingBox.classList.remove('dplayer-comment-setting-open');
                    } else {
                        commentSettingBox.classList.add('dplayer-comment-setting-open');
                    }
                };
                var disableHide = 0;
                var commentFocusTimeout = 0;
                var closeComment = function closeComment() {
                    if (!commentBox.classList.contains('dplayer-comment-box-open')) {
                        return;
                    }
                    commentBox.classList.remove('dplayer-comment-box-open');
                    mask.classList.remove('dplayer-mask-show');
                    _this.element.classList.remove('dplayer-show-controller');
                    clearInterval(disableHide);
                    clearTimeout(commentFocusTimeout);
                    closeCommentSetting();
                };
                var openComment = function openComment() {
                    if (commentBox.classList.contains('dplayer-comment-box-open')) {
                        return;
                    }
                    commentBox.classList.add('dplayer-comment-box-open');
                    mask.classList.add('dplayer-mask-show');
                    _this.element.classList.add('dplayer-show-controller');
                    disableHide = setInterval(function () {
                        clearTimeout(_this.hideTime);
                    }, 1000);
                    commentFocusTimeout = setTimeout(function () {
                        commentInput.focus();
                    }, 300);
                };
                mask.addEventListener('click', function () {
                    closeComment();
                });
                commentIcon.addEventListener('click', function () {
                    openComment();
                });
                commentSettingIcon.addEventListener('click', function () {
                    toggleCommentSetting();
                });
                this.element.getElementsByClassName('dplayer-comment-setting-color')[0].addEventListener('click', function () {
                    var sele = _this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span');
                    if (sele) {
                        commentSettingIcon.getElementsByClassName('dplayer-fill')[0].style.fill = _this.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value;
                    }
                });
                commentInput.addEventListener('click', function () {
                    closeCommentSetting();
                });
                commentInput.addEventListener('keydown', function (e) {
                    var event = e || window.event;
                    if (event.keyCode === 13) {
                        sendComment();
                    }
                });
                commentSendIcon.addEventListener('click', sendComment);
                var resetAnimation = function resetAnimation() {
                    var danWidth = danContainer.offsetWidth;
                    var items = _this.element.getElementsByClassName('dplayer-danmaku-item');
                    for (var _i6 = 0; _i6 < items.length; _i6++) {
                        items[_i6].style.transform = 'translateX(-' + danWidth + 'px)';
                    }
                };
                this.element.addEventListener('fullscreenchange', function () {
                    resetAnimation();
                });
                this.element.addEventListener('mozfullscreenchange', function () {
                    resetAnimation();
                });
                this.element.addEventListener('webkitfullscreenchange', function () {
                    resetAnimation();
                });
                this.element.getElementsByClassName('dplayer-full-icon')[0].addEventListener('click', function () {
                    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                        if (_this.element.requestFullscreen) {
                            _this.element.requestFullscreen();
                        } else if (_this.element.mozRequestFullScreen) {
                            _this.element.mozRequestFullScreen();
                        } else if (_this.element.webkitRequestFullscreen) {
                            _this.element.webkitRequestFullscreen();
                        } else if (_this.video.webkitEnterFullscreen) {
                            _this.video.webkitEnterFullscreen();
                        }
                    } else {
                        if (document.cancelFullScreen) {
                            document.cancelFullScreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitCancelFullScreen) {
                            document.webkitCancelFullScreen();
                        }
                    }
                    resetAnimation();
                });
                this.element.getElementsByClassName('dplayer-full-in-icon')[0].addEventListener('click', function () {
                    if (_this.element.classList.contains('dplayer-fulled')) {
                        _this.element.classList.remove('dplayer-fulled');
                    } else {
                        _this.element.classList.add('dplayer-fulled');
                        resetAnimation();
                    }
                });
                var handleKeyDown = function handleKeyDown(e) {
                    var tag = document.activeElement.tagName.toUpperCase();
                    var editable = document.activeElement.getAttribute('contenteditable');
                    if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                        var event = e || window.event;
                        var percentage = void 0;
                        switch (event.keyCode) {
                        case 32:
                            event.preventDefault();
                            _this.toggle();
                            break;
                        case 37:
                            event.preventDefault();
                            _this.seek(_this.video.currentTime - 5);
                            break;
                        case 39:
                            event.preventDefault();
                            _this.seek(_this.video.currentTime + 5);
                            break;
                        case 38:
                            event.preventDefault();
                            percentage = _this.video.volume + 0.1;
                            _this.volume(percentage);
                            break;
                        case 40:
                            event.preventDefault();
                            percentage = _this.video.volume - 0.1;
                            _this.volume(percentage);
                            break;
                        }
                    }
                };
                if (this.option.hotkey) {
                    document.addEventListener('keydown', handleKeyDown);
                }
                document.addEventListener('keydown', function (e) {
                    var event = e || window.event;
                    switch (event.keyCode) {
                    case 27:
                        if (_this.element.classList.contains('dplayer-fulled')) {
                            _this.element.classList.remove('dplayer-fulled');
                            resetAnimation();
                        }
                        break;
                    }
                });
                var menu = this.element.getElementsByClassName('dplayer-menu')[0];
                this.element.addEventListener('contextmenu', function (e) {
                    var event = e || window.event;
                    event.preventDefault();
                    menu.classList.add('dplayer-menu-show');
                    var clientRect = _this.element.getBoundingClientRect();
                    var menuLeft = event.clientX - clientRect.left;
                    var menuTop = event.clientY - clientRect.top;
                    if (menuLeft + menu.offsetWidth >= clientRect.width) {
                        menu.style.right = clientRect.width - menuLeft + 'px';
                        menu.style.left = 'initial';
                    } else {
                        menu.style.left = event.clientX - _this.element.getBoundingClientRect().left + 'px';
                        menu.style.right = 'initial';
                    }
                    if (menuTop + menu.offsetHeight >= clientRect.height) {
                        menu.style.bottom = clientRect.height - menuTop + 'px';
                        menu.style.top = 'initial';
                    } else {
                        menu.style.top = event.clientY - _this.element.getBoundingClientRect().top + 'px';
                        menu.style.bottom = 'initial';
                    }
                    mask.classList.add('dplayer-mask-show');
                    mask.addEventListener('click', function () {
                        mask.classList.remove('dplayer-mask-show');
                        menu.classList.remove('dplayer-menu-show');
                    });
                });
                if (this.option.video.quality) {
                    this.element.getElementsByClassName('dplayer-quality-list')[0].addEventListener('click', function (e) {
                        if (e.target.classList.contains('dplayer-quality-item')) {
                            _this.switchQuality(e.target.dataset.index);
                        }
                    });
                }
                if (this.option.screenshot) {
                    var camareIcon = this.element.getElementsByClassName('dplayer-camera-icon')[0];
                    camareIcon.addEventListener('click', function () {
                        var canvas = document.createElement('canvas');
                        canvas.width = _this.video.videoWidth;
                        canvas.height = _this.video.videoHeight;
                        canvas.getContext('2d').drawImage(_this.video, 0, 0, canvas.width, canvas.height);
                        camareIcon.href = canvas.toDataURL();
                        camareIcon.download = 'JAC_DPlayer.png';
                    });
                }
                index++;
            }
            _createClass(DPlayer, [
                {
                    key: 'seek',
                    value: function seek(time) {
                        time = Math.max(time, 0);
                        if (this.video.duration) {
                            time = Math.min(time, this.video.duration);
                        }
                        this.video.currentTime = time;
                        for (var i = 0; i < this.dan.length; i++) {
                            if (this.dan[i].time >= time) {
                                this.danIndex = i;
                                return;
                            }
                            this.danIndex = this.dan.length;
                        }
                    }
                },
                {
                    key: 'play',
                    value: function play() {
                        this.paused = false;
                        if (this.video.paused) {
                            this.bezel.innerHTML = (0, _svg2.default)('play');
                            this.bezel.classList.add('dplayer-bezel-transition');
                        }
                        this.playButton.innerHTML = (0, _svg2.default)('pause');
                        this.video.play();
                        this.setTime();
                        this.element.classList.add('dplayer-playing');
                        this.trigger('play');
                    }
                },
                {
                    key: 'pause',
                    value: function pause() {
                        this.paused = true;
                        this.element.classList.remove('dplayer-loading');
                        if (!this.video.paused) {
                            this.bezel.innerHTML = (0, _svg2.default)('pause');
                            this.bezel.classList.add('dplayer-bezel-transition');
                        }
                        this.ended = false;
                        this.playButton.innerHTML = (0, _svg2.default)('play');
                        this.video.pause();
                        this.clearTime();
                        this.element.classList.remove('dplayer-playing');
                        window.cancelAnimationFrame(this.requestID);
                        this.trigger('pause');
                    }
                },
                {
                    key: 'volume',
                    value: function volume(percentage) {
                        percentage = percentage > 0 ? percentage : 0;
                        percentage = percentage < 1 ? percentage : 1;
                        this.updateBar('volume', percentage, 'width');
                        this.video.volume = percentage;
                        if (this.video.muted) {
                            this.video.muted = false;
                        }
                        this.switchVolumeIcon();
                    }
                },
                {
                    key: 'toggle',
                    value: function toggle() {
                        if (this.video.paused) {
                            this.play();
                        } else {
                            this.pause();
                        }
                    }
                },
                {
                    key: 'on',
                    value: function on(event, callback) {
                        if (typeof callback === 'function') {
                            this.event[event].push(callback);
                        }
                    }
                },
                {
                    key: '_readAllEndpoints',
                    value: function _readAllEndpoints(endpoints, finish) {
                        var _this2 = this;
                        var results = [];
                        var readCount = 0;
                        var cbk = function cbk(i) {
                            return function (err, data) {
                                ++readCount;
                                if (err) {
                                    if (err.response) {
                                        _this2.notice(err.response.msg);
                                    } else {
                                        _this2.notice('Request was unsuccessful: ' + err.status);
                                    }
                                    results[i] = [];
                                } else {
                                    results[i] = data;
                                }
                                if (readCount === endpoints.length) {
                                    return finish(results);
                                }
                            };
                        };
                        for (var i = 0; i < endpoints.length; ++i) {
                            this.option.apiBackend.read(endpoints[i], cbk(i));
                        }
                    }
                },
                {
                    key: 'readDanmaku',
                    value: function readDanmaku() {
                        var _this3 = this;
                        var apiurl = void 0;
                        if (this.option.danmaku.maximum) {
                            apiurl = this.option.danmaku.api + '?id=' + this.option.danmaku.id + '&max=' + this.option.danmaku.maximum;
                        } else {
                            apiurl = this.option.danmaku.api + '?id=' + this.option.danmaku.id;
                        }
                        var endpoints = (this.option.danmaku.addition || []).slice(0);
                        endpoints.push(apiurl);
                        this._readAllEndpoints(endpoints, function (results) {
                            _this3.danIndex = 0;
                            _this3.dan = [].concat.apply([], results).sort(function (a, b) {
                                return a.time - b.time;
                            });
                            _this3.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'none';
                            if (_this3.option.autoplay && !_utils.isMobile) {
                                _this3.play();
                            } else if (_utils.isMobile) {
                                _this3.pause();
                            }
                        });
                    }
                },
                {
                    key: 'pushDanmaku',
                    value: function pushDanmaku(danmaku) {
                        var _this4 = this;
                        var danContainer = this.element.getElementsByClassName('dplayer-danmaku')[0];
                        var itemHeight = this.arrow ? 24 : 30;
                        var danWidth = danContainer.offsetWidth;
                        var danHeight = danContainer.offsetHeight;
                        var itemY = parseInt(danHeight / itemHeight);
                        var danItemRight = function danItemRight(ele) {
                            var eleWidth = ele.offsetWidth || parseInt(ele.style.width);
                            var eleRight = ele.getBoundingClientRect().right || danContainer.getBoundingClientRect().right + eleWidth;
                            return danContainer.getBoundingClientRect().right - eleRight;
                        };
                        var danSpeed = function danSpeed(width) {
                            return (danWidth + width) / 5;
                        };
                        var getTunnel = function getTunnel(ele, type, width) {
                            var tmp = danWidth / danSpeed(width);
                            var _loop2 = function _loop2(i) {
                                var item = _this4.danTunnel[type][i + ''];
                                if (item && item.length) {
                                    for (var j = 0; j < item.length; j++) {
                                        var danRight = danItemRight(item[j]) - 10;
                                        if (danRight <= danWidth - tmp * danSpeed(parseInt(item[j].style.width)) || danRight <= 0) {
                                            break;
                                        }
                                        if (j === item.length - 1) {
                                            _this4.danTunnel[type][i + ''].push(ele);
                                            ele.addEventListener('animationend', function () {
                                                _this4.danTunnel[type][i + ''].splice(0, 1);
                                            });
                                            return { v: i % itemY };
                                        }
                                    }
                                } else {
                                    _this4.danTunnel[type][i + ''] = [ele];
                                    ele.addEventListener('animationend', function () {
                                        _this4.danTunnel[type][i + ''].splice(0, 1);
                                    });
                                    return { v: i % itemY };
                                }
                            };
                            for (var i = 0;; i++) {
                                var _ret2 = _loop2(i);
                                if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === 'object')
                                    return _ret2.v;
                            }
                        };
                        if (Object.prototype.toString.call(danmaku) !== '[object Array]') {
                            danmaku = [danmaku];
                        }
                        var docFragment = document.createDocumentFragment();
                        var _loop3 = function _loop3(i) {
                            if (!danmaku[i].type) {
                                danmaku[i].type = 'right';
                            }
                            if (!danmaku[i].color) {
                                danmaku[i].color = '#fff';
                            }
                            var item = document.createElement('div');
                            item.classList.add('dplayer-danmaku-item');
                            item.classList.add('dplayer-danmaku-' + danmaku[i].type);
                            item.innerHTML = danmaku[i].text;
                            item.style.opacity = _this4.danOpacity;
                            item.style.color = danmaku[i].color;
                            item.style.border = danmaku[i].border;
                            item.addEventListener('animationend', function () {
                                danContainer.removeChild(item);
                            });
                            var itemWidth = _this4.danmakuMeasure(danmaku[i].text);
                            switch (danmaku[i].type) {
                            case 'right':
                                item.style.width = itemWidth + 1 + 'px';
                                item.style.top = itemHeight * getTunnel(item, danmaku[i].type, itemWidth) + 'px';
                                item.style.transform = 'translateX(-' + danWidth + 'px)';
                                break;
                            case 'top':
                                item.style.top = itemHeight * getTunnel(item, danmaku[i].type) + 'px';
                                break;
                            case 'bottom':
                                item.style.bottom = itemHeight * getTunnel(item, danmaku[i].type) + 'px';
                                break;
                            default:
                                console.error('Can\'t handled danmaku type: ' + danmaku[i].type);
                            }
                            item.classList.add('dplayer-danmaku-move');
                            docFragment.appendChild(item);
                        };
                        for (var i = 0; i < danmaku.length; i++) {
                            _loop3(i);
                        }
                        danContainer.appendChild(docFragment);
                        return docFragment;
                    }
                },
                {
                    key: 'switchVideo',
                    value: function switchVideo(video, danmaku) {
                        this.video.poster = video.pic ? video.pic : '';
                        this.video.src = video.url;
                        this.pause();
                        if (danmaku) {
                            this.dan = [];
                            this.danIndex = 0;
                            this.element.getElementsByClassName('dplayer-danloading')[0].style.display = 'block';
                            this.updateBar('played', 0, 'width');
                            this.updateBar('loaded', 0, 'width');
                            this.element.getElementsByClassName('dplayer-ptime')[0].innerHTML = '00:00';
                            this.element.getElementsByClassName('dplayer-danmaku')[0].innerHTML = '';
                            this.danTuel = {
                                right: {},
                                top: {},
                                bottom: {}
                            };
                            this.option.danmaku = danmaku;
                            this.readDanmaku();
                        }
                    }
                },
                {
                    key: 'initVideo',
                    value: function initVideo() {
                        var _this5 = this;
                        var enablehls = void 0;
                        if (this.option.video.type === 'auto') {
                            enablehls = /m3u8(#|\?|$)/i.exec(this.video.src);
                        } else if (this.option.video.type === 'hls') {
                            enablehls = true;
                        } else {
                            enablehls = false;
                        }
                        if (enablehls && Hls.isSupported()) {
                            var hls = new Hls();
                            hls.loadSource(this.video.src);
                            hls.attachMedia(this.video);
                        }
                        var enableflv = void 0;
                        if (this.option.video.type === 'auto') {
                            enableflv = /.flv(#|\?|$)/i.exec(this.video.src);
                        } else if (this.option.video.type === 'flv') {
                            enableflv = true;
                        } else {
                            enableflv = false;
                        }
                        if (enableflv && flvjs.isSupported()) {
                            var flvPlayer = flvjs.createPlayer({
                                type: 'flv',
                                url: this.option.video.url
                            });
                            flvPlayer.attachMediaElement(this.video);
                            flvPlayer.load();
                        }
                        this.video.addEventListener('durationchange', function () {
                            if (_this5.video.duration !== 1) {
                                _this5.element.getElementsByClassName('dplayer-dtime')[0].innerHTML = _utils2.default.secondToTime(_this5.video.duration);
                            }
                        });
                        this.video.addEventListener('progress', function () {
                            var percentage = _this5.video.buffered.length ? _this5.video.buffered.end(_this5.video.buffered.length - 1) / _this5.video.duration : 0;
                            _this5.updateBar('loaded', percentage, 'width');
                        });
                        this.video.addEventListener('error', function () {
                            _this5.tran && _this5.notice && _this5.notice(_this5.tran('This video fails to load'), -1);
                            _this5.trigger && _this5.trigger('pause');
                        });
                        this.video.addEventListener('canplay', function () {
                            _this5.trigger('canplay');
                        });
                        this.ended = false;
                        this.video.addEventListener('ended', function () {
                            _this5.updateBar('played', 1, 'width');
                            if (!_this5.loop) {
                                _this5.ended = true;
                                _this5.pause();
                                _this5.trigger('ended');
                            } else {
                                _this5.seek(0);
                                _this5.video.play();
                            }
                            _this5.danIndex = 0;
                        });
                        this.video.addEventListener('play', function () {
                            if (_this5.paused) {
                                _this5.play();
                            }
                        });
                        this.video.addEventListener('pause', function () {
                            if (!_this5.paused) {
                                _this5.pause();
                            }
                        });
                        this.video.volume = parseInt(this.element.getElementsByClassName('dplayer-volume-bar-inner')[0].style.width) / 100;
                    }
                },
                {
                    key: 'switchQuality',
                    value: function switchQuality(index) {
                        var _this6 = this;
                        if (this.qualityIndex === index || this.switchingQuality) {
                            return;
                        } else {
                            this.qualityIndex = index;
                        }
                        this.switchingQuality = true;
                        this.quality = this.option.video.quality[index];
                        this.element.getElementsByClassName('dplayer-quality-icon')[0].innerHTML = this.quality.name;
                        var paused = this.video.paused;
                        this.video.pause();
                        var videoHTML = _html2.default.video(false, null, this.option.screenshot, 'auto', this.quality.url);
                        var videoEle = new DOMParser().parseFromString(videoHTML, 'text/html').body.firstChild;
                        var parent = this.element.getElementsByClassName('dplayer-video-wrap')[0];
                        parent.insertBefore(videoEle, parent.getElementsByTagName('div')[0]);
                        this.prevVideo = this.video;
                        this.video = videoEle;
                        this.initVideo();
                        this.seek(this.prevVideo.currentTime);
                        this.notice(this.tran('Switching to') + ' ' + this.quality.name + ' ' + this.tran('quality'), -1);
                        this.video.addEventListener('canplay', function () {
                            if (_this6.prevVideo) {
                                if (_this6.video.currentTime !== _this6.prevVideo.currentTime) {
                                    _this6.seek(_this6.prevVideo.currentTime);
                                    return;
                                }
                                parent.removeChild(_this6.prevVideo);
                                _this6.video.classList.add('dplayer-video-current');
                                if (!paused) {
                                    _this6.video.play();
                                }
                                _this6.prevVideo = null;
                                _this6.notice(_this6.tran('Switched to') + ' ' + _this6.quality.name + ' ' + _this6.tran('quality'));
                                _this6.switchingQuality = false;
                            }
                        });
                    }
                },
                {
                    key: 'timeTipsHandler',
                    value: function timeTipsHandler(pbar, timeTips) {
                        var _this7 = this;
                        var cumulativeOffset = function cumulativeOffset(element) {
                            var top = 0, left = 0;
                            do {
                                top += element.offsetTop || 0;
                                left += element.offsetLeft || 0;
                                element = element.offsetParent;
                            } while (element);
                            return {
                                top: top,
                                left: left
                            };
                        };
                        return function (e) {
                            if (!_this7.video.duration) {
                                return;
                            }
                            var clientX = e.clientX;
                            var px = cumulativeOffset(pbar).left;
                            var tx = clientX - px;
                            timeTips.innerText = _utils2.default.secondToTime(_this7.video.duration * (tx / pbar.offsetWidth));
                            timeTips.style.left = tx - 20 + 'px';
                            switch (e.type) {
                            case 'mouseenter':
                            case 'mouseover':
                            case 'mousemove':
                                if (_this7.isTipsShow) {
                                    return;
                                }
                                timeTips.classList.remove('hidden');
                                _this7.isTipsShow = true;
                                break;
                            case 'mouseleave':
                            case 'mouseout':
                                if (!_this7.isTipsShow) {
                                    return;
                                }
                                timeTips.classList.add('hidden');
                                _this7.isTipsShow = false;
                                break;
                            }
                        };
                    }
                },
                {
                    key: 'notice',
                    value: function notice(text, time) {
                        var noticeEle = this.element.getElementsByClassName('dplayer-notice')[0];
                        noticeEle.innerHTML = text;
                        noticeEle.style.opacity = 1;
                        if (this.noticeTime) {
                            clearTimeout(this.noticeTime);
                        }
                        if (time && time < 0) {
                            return;
                        }
                        this.noticeTime = setTimeout(function () {
                            noticeEle.style.opacity = 0;
                        }, time || 2000);
                    }
                },
                {
                    key: 'destroy',
                    value: function destroy() {
                        this.pause();
                        clearTimeout(this.hideTime);
                        this.video.src = '';
                        this.element.innerHTML = '';
                        for (var key in this) {
                            if (this.hasOwnProperty(key) && key !== 'paused') {
                                delete this[key];
                            }
                        }
                    }
                }
            ]);
            return DPlayer;
        }();
        module.exports = DPlayer;
    }),
    /* 3 *//* Dplayer Author 保留空間 */
    (function(module, exports) {
        // removed by extract-text-webpack-plugin
    }),
    /* 4 */
    (function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            secondToTime: function secondToTime(second) {
                var add0 = function add0(num) {
                    return num < 10 ? '0' + num : '' + num;
                };
                var min = parseInt(second / 60);
                var sec = parseInt(second - min * 60);
                return add0(min) + ':' + add0(sec);
            },
            getElementViewLeft: function getElementViewLeft(element) {
                var actualLeft = element.offsetLeft;
                var current = element.offsetParent;
                var elementScrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
                if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
                    while (current !== null) {
                        actualLeft += current.offsetLeft;
                        current = current.offsetParent;
                    }
                } else {
                    while (current !== null && current !== element) {
                        actualLeft += current.offsetLeft;
                        current = current.offsetParent;
                    }
                }
                return actualLeft - elementScrollLeft;
            },
            isMobile: /mobile/i.test(window.navigator.userAgent)
        };
    }),
    /* 5 *//* Dplayer option constructor */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var defaultApiBackend = __webpack_require__(6);
        module.exports = function (option) {
            var isMobile = /mobile/i.test(window.navigator.userAgent);
            if (isMobile) { option.autoplay = false; }
            var defaultOption = {
                element: document.getElementsByClassName('dplayer')[0],
                autoplay: false,
                theme: '#b7daff',
                loop: false,
                lang: navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en',
                screenshot: false,
                hotkey: true,
                preload: 'auto',
                apiBackend: defaultApiBackend,
                contextmenu: [
                    {
                        text: '關於 DPlayer 播放器',
                        link: 'https://github.com/DIYgod/DPlayer'
                    }
                ]
            };
            for (var defaultKey in defaultOption) {
                if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                    option[defaultKey] = defaultOption[defaultKey];
                }
            }
            if (Object.prototype.toString.call(option.video.url) !== '[object Array]') {
                option.video.url = [option.video.url];
            }
            if (option.video && !option.video.hasOwnProperty('type')) {
                option.video.type = 'auto';
            }
            if (option.danmaku && !option.danmaku.hasOwnProperty('user')) {
                option.danmaku.user = 'DIYgod';
            }
            if (option.video.quality) {
                option.video.url = [option.video.quality[option.video.defaultQuality].url];
            }
            return option;
        };
    }),
    /* 6 *//* Danmaku read and send constructor */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var SendXMLHttpRequest = function SendXMLHttpRequest(url, data, success, error, fail) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                        var response = JSON.parse(xhr.responseText);
                        if (response.code !== 1) {
                            return error(xhr, response);
                        }
                        return success(xhr, response);
                    }
                    fail(xhr);
                }
            };
            xhr.open(data !== null ? 'POST' : 'GET', url, true);
            xhr.send(data !== null ? JSON.stringify(data) : null);
        };
        module.exports = {
            send: function send(endpoint, danmakuData) {
                SendXMLHttpRequest(endpoint, danmakuData, function (xhr, response) {
                    console.log('Post danmaku: ', response);
                }, function (xhr, response) {
                    alert(response.msg);
                }, function (xhr) {
                    console.log('Request was unsuccessful: ' + xhr.status);
                });
            },
            read: function read(endpoint, cbk) {
                SendXMLHttpRequest(endpoint, null, function (xhr, response) {
                    cbk(null, response.danmaku);
                }, function (xhr, response) {
                    cbk({
                        status: xhr.status,
                        response: response
                    });
                }, function (xhr) {
                    cbk({
                        status: xhr.status,
                        response: null
                    });
                });
            }
        };
    }),
    /* 7 *//* Dplayer translation text */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var tranZH = {
            'Danmaku is loading': '弹幕加载中',
            'Top': '顶部',
            'Bottom': '底部',
            'Rolling': '滚动',
            'Input danmaku, hit Enter': '输入弹幕\uFF0C回车发送',
            'About author': '关于作者',
            'DPlayer feedback': '播放器意见反馈',
            'About DPlayer': '关于 DPlayer 播放器',
            'Loop': '洗脑循环',
            'Speed': '速度',
            'Opacity for danmaku': '弹幕透明度',
            'Normal': '正常',
            'Please input danmaku content!': '要输入弹幕内容啊喂\uFF01',
            'Set danmaku color': '设置弹幕颜色',
            'Set danmaku type': '设置弹幕类型',
            'Danmaku': '弹幕',
            'This video fails to load': '视频加载失败',
            'Switching to': '正在切换至',
            'Switched to': '已经切换至',
            'quality': '画质'
        };
        module.exports = function (lang) {
            var _this = this;
            this.lang = lang;
            this.tran = function (text) {
                if (_this.lang === 'en') {
                    return text;
                } else if (_this.lang === 'zh') {
                    return tranZH[text];
                }
            };
        };
    }),
    /* 8 *//* html constructor */
    (function(module, exports, __webpack_require__) {
        "use strict";
        var svg = __webpack_require__(0);
        var html = {
            main: function main(option, index, tran) {
                var videos = '';
                for (var i = 0; i < option.video.url.length; i++) {
                    videos += html.video(i === 0, option.video.pic, option.screenshot, option.video.url.length ? 'metadata' : option.preload, option.video.url[i]);
                }
                return '<div class="dplayer-mask"></div><div class="dplayer-video-wrap">' + videos + '' + (option.logo ? '<div class="dplayer-logo"><img src="' + option.logo + '"></div>' : '') + '<div class="dplayer-danmaku"><div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div></div><div class="dplayer-bezel"><span class="dplayer-bezel-icon"></span>' + (option.danmaku ? '<span class="dplayer-danloading">' + tran('Danmaku is loading') + '</span>' : '') + '<span class="diplayer-loading-icon"><svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg></span></div></div><div class="dplayer-controller-mask"></div><div class="dplayer-controller"><div class="dplayer-icons dplayer-icons-left"><button class="dplayer-icon dplayer-play-icon">' + svg('play') + '</button><div class="dplayer-volume"><button class="dplayer-icon dplayer-volume-icon">' + svg('volume-down') + '</button><div class="dplayer-volume-bar-wrap"><div class="dplayer-volume-bar"><div class="dplayer-volume-bar-inner" style="width: 70%; background: ' + option.theme + ';"><span class="dplayer-thumb" style="background: ' + option.theme + '"></span></div></div></div></div><span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span></div><div class="dplayer-icons dplayer-icons-right">' + (option.video.quality ? '<div class="dplayer-quality"><button class="dplayer-icon dplayer-quality-icon">' + option.video.quality[option.video.defaultQuality].name + '</button><div class="dplayer-quality-mask">' + html.qualityList(option.video.quality) + '</div></div>' : '') + '' + (option.screenshot ? '<a href="#" class="dplayer-icon dplayer-camera-icon">' + svg('camera') + '</a>' : '') + '<div class="dplayer-comment"><button class="dplayer-icon dplayer-comment-icon">' + svg('comment') + '</button><div class="dplayer-comment-box"><button class="dplayer-icon dplayer-comment-setting-icon">' + svg('menu') + '</button><div class="dplayer-comment-setting-box"><div class="dplayer-comment-setting-color"><div class="dplayer-comment-setting-title">' + tran('Set danmaku color') + '</div><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#fff" checked><span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span></label><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#e54256"><span style="background: #e54256"></span></label><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#ffe133"><span style="background: #ffe133"></span></label><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#64DD17"><span style="background: #64DD17"></span></label><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#39ccff"><span style="background: #39ccff"></span></label><label><input type="radio" name="dplayer-danmaku-color-' + index + '" value="#D500F9"><span style="background: #D500F9"></span></label></div><div class="dplayer-comment-setting-type"><div class="dplayer-comment-setting-title">' + tran('Set danmaku type') + '</div><label><input type="radio" name="dplayer-danmaku-type-' + index + '" value="top"><span>' + tran('Top') + '</span></label><label><input type="radio" name="dplayer-danmaku-type-' + index + '" value="right" checked><span>' + tran('Rolling') + '</span></label><label><input type="radio" name="dplayer-danmaku-type-' + index + '" value="bottom"><span>' + tran('Bottom') + '</span></label></div></div><input class="dplayer-comment-input" type="text" placeholder="' + tran('Input danmaku, hit Enter') + '" maxlength="30"><button class="dplayer-icon dplayer-send-icon">' + svg('send') + '</button></div></div><div class="dplayer-setting"><button class="dplayer-icon dplayer-setting-icon">' + svg('setting') + '</button><div class="dplayer-setting-box"></div></div><div class="dplayer-full"><button class="dplayer-icon dplayer-full-in-icon">' + svg('full-in') + '</button><button class="dplayer-icon dplayer-full-icon">' + svg('full') + '</button></div></div><div class="dplayer-bar-wrap"><div class="dplayer-bar-time hidden">00:00</div><div class="dplayer-bar"><div class="dplayer-loaded" style="width: 0;"></div><div class="dplayer-played" style="width: 0; background: ' + option.theme + '"><span class="dplayer-thumb" style="background: ' + option.theme + '"></span></div></div></div></div>' + html.contextmenuList(option.contextmenu) + '<div class="dplayer-notice"></div>';
            },
            contextmenuList: function contextmenuList(contextmenu) {
                var result = '<div class="dplayer-menu">';
                for (var i = 0; i < contextmenu.length; i++) {
                    result += '<div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="' + contextmenu[i].link + '">' + contextmenu[i].text + '</a></span></div>';
                }
                result += '</div>';
                return result;
            },
            qualityList: function qualityList(quality) {
                var result = '<div class="dplayer-quality-list">';
                for (var i = 0; i < quality.length; i++) {
                    result += '<div class="dplayer-quality-item" data-index="' + i + '">' + quality[i].name + '</div>';
                }
                result += '</div>';
                return result;
            },
            video: function video(current, pic, screenshot, preload, url) {
                return '<video class="dplayer-video ' + (current ? 'dplayer-video-current"' : '') + '" ' + (pic ? 'poster="' + pic + '"' : '') + ' webkit-playsinline playsinline ' + (screenshot ? 'crossorigin="anonymous"' : '') + ' ' + (preload ? 'preload="' + preload + '"' : '') + ' src="' + url + '"></video>';
            },
            setting: function setting(tran) {
                return {
                    'original': '<div class="dplayer-setting-item dplayer-setting-speed"><span class="dplayer-label">' + tran('Speed') + '</span><div class="dplayer-toggle">' + svg('right') + '</div></div><div class="dplayer-setting-item dplayer-setting-loop"><span class="dplayer-label">' + tran('Loop') + '</span><div class="dplayer-toggle"><input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle"><label for="dplayer-toggle"></label></div></div><div class="dplayer-setting-item dplayer-setting-showdan"><span class="dplayer-label">' + tran('Danmaku') + '</span><div class="dplayer-toggle"><input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan"><label for="dplayer-toggle-dan"></label></div></div><div class="dplayer-setting-item dplayer-setting-danmaku"><span class="dplayer-label">' + tran('Opacity for danmaku') + '</span><div class="dplayer-danmaku-bar-wrap"><div class="dplayer-danmaku-bar"><div class="dplayer-danmaku-bar-inner" style="width: ' + (localStorage.getItem('DPlayer-opacity') || 0.7) * 100 + '%"><span class="dplayer-thumb"></span></div></div></div></div>',
                    'speed': '<div class="dplayer-setting-speed-item" data-speed="0.5"><span class="dplayer-label">0.5</span></div><div class="dplayer-setting-speed-item" data-speed="0.75"><span class="dplayer-label">0.75</span></div><div class="dplayer-setting-speed-item" data-speed="1"><span class="dplayer-label">' + tran('Normal') + '</span></div><div class="dplayer-setting-speed-item" data-speed="1.25"><span class="dplayer-label">1.25</span></div><div class="dplayer-setting-speed-item" data-speed="1.5"><span class="dplayer-label">1.5</span></div><div class="dplayer-setting-speed-item" data-speed="2"><span class="dplayer-label">2</span></div>'
                };
            }
        };
        module.exports = html;
    })
/* ========================================================================== */
    ]);
});