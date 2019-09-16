/*!---------------------------------------------------------------------
 * Another Scavenging Script
 * author Nick Toby (cheesasaurus@gmail.com)
 * 
 * use script on: game.php?screen=place&mode=scavenge (the scavenging screen)
 * effect: fills in troops to scavenge with and focuses the buttons to start
 * 
 * ==== license ====
 * Copyright (C) 2019  Nick Toby
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see http://www.gnu.org/licenses/
 *---------------------------------------------------------------------
 *
 * Want to fix something?
 * https://github.com/cheesasaurus/twcheese
 *---------------------------------------------------------------------*/
/*! Tool setup compiled from /src/ToolSetup/ASS.js
 *---------------------------------------------------------------------*/
(function() {
    let toolId = 'ASS';

    if (typeof window.TwCheese === 'undefined') {

        function handleJqXhrError(reject) {
            return function(jqxhr) {
                reject(new Error(`[${jqxhr.status} ${jqxhr.statusText}] ${this.type} ${this.url}`));
            }
        }


        window.TwCheese = {
            ROOT: 'https://cheesasaurus.github.io/twcheese',
            version: 'v1.8-41-ga02b337',
            tools: {},
            lastToolUsedId: null,

            async loadVendorLibs() {
                return new Promise((resolve, reject) => {
                    $.ajax(`${this.ROOT}/dist/vendor.js`, {
                        complete: resolve,
                        error: handleJqXhrError(reject)
                    });
                });
            },

            async loadVendorLibsMinified(cacheBuster) {
                return new Promise((resolve, reject) => {
                    $.ajax(`${this.ROOT}/dist/vendor.min.js?${cacheBuster}`, {
                        cache: true,
                        complete: resolve,
                        error: handleJqXhrError(reject)
                    });
                });
            },

            async loadTool(toolId) {
                return new Promise((resolve) => {
                    let module = document.createElement('script');
                    module.type = 'module';
                    module.onload = resolve;
                    module.src = `${this.ROOT}/src/ToolSetup/${toolId}.js`;
                    document.head.appendChild(module);
                });
            },

            async loadToolCompiled(toolId, cacheBuster) {
                return new Promise((resolve, reject) => {
                    $.ajax(`${this.ROOT}/dist/tool/setup-only/${toolId}.min.js?${cacheBuster}`, {
                        cache: true,
                        complete: resolve,
                        error: handleJqXhrError(reject)
                    });
                });
            },

            hasTool(toolId) {
                return typeof this.tools[toolId] !== 'undefined';
            },

            registerTool(tool) {
                this.tools[tool.id] = tool;
            },

            useTool(toolId) {
                this.lastToolUsedId = toolId;
                this.tools[toolId].use();
            },

            tryUseTool(toolId) {
                if (!this.hasTool(toolId)) {
                    return false;
                }
                this.useTool(toolId);
                return true;
            },

            newDebugProcess(toolId) {
                if (!this.hasTool(toolId)) {
                    return null;
                }
                return this.tools[toolId].getDebugProcess();
            }

        };

                // init libs to window
        (function() {
            // thwart environment sniffing
            let define, exports, module;
        
            /*!
             * this is just an example of a library
             */
            (function(root, factory) {
                if (typeof define === 'function' && define.amd) {
                    throw new Error('unwanted: AMD module instead of window');
                } else if (typeof exports === 'object') {
                    throw new Error('unwanted: CommonJS module instead of window');
                } else if (typeof module === 'object' && module.exports) {
                    throw new Error('unwanted: Node module instead of window');
                } else {
                    root.twcheeseExampleLib = factory();
                }
            })(this, function() {
                return {
                    nice: () => 69
                };
            });
        
        }).call(window);
    }

    if (!TwCheese.hasTool(toolId)) {
        let sidebarInitd = TwCheese.hasTool('Sidebar');

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
        /******/ 	return __webpack_require__(__webpack_require__.s = 12);
        /******/ })
        /************************************************************************/
        /******/ ([
        /* 0 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugEvents; });
        const DebugEvents = {
            PHASE_COMPLETION_READY: 'phase_completion_ready',
            PHASE_COMPLETION_NOT_READY: 'phase_completion_not_ready',
            PHASE_CHANGED: 'phase_changed',
            QUESTION_ANSWERED: 'question_answered',
            QUESTION_NOT_ANSWERED: 'question_not_answered',
            OPTION_VALUE_CHANGED: 'answer_value_changed',
            BUG_REPORT_SUCCEEDED: 'bug_report_succeeded',
            BUG_REPORT_FAILED: 'bug_report_failed',
            USER_REJECTED: 'user_rejected'
        };
        
        
        
        
        /***/ }),
        /* 1 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return escapeHtml; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initCss; });
        /* unused harmony export fadeGameContent */
        /* unused harmony export fadeGameContentExcept */
        /* unused harmony export unfadeGameContent */
        /* unused harmony export Mousetrap */
        /* harmony import */ var _twcheese_conf_ImageSrc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
        
        
        
        function escapeHtml(text) {
            if (typeof text !== 'string') {
                text = String(text);
            }
            // https://stackoverflow.com/a/4835406
            var map = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#039;'
            };  
            return text.replace(/[&<>"']/g, function(m) { return map[m]; });
        }
        
        ////// css //////
        
        let cssInitd = new Set();
        
        function initCss(css) {
            if (cssInitd.has(css)) {
                return;
            }
            $(`<style>${css}</style>`).appendTo('head');
            cssInitd.add(css);
        }
        
        initCss(`
            .twcheese-popup {
                z-index: 13000;
                display: block;
                position: fixed;
                top: 60px;
                border: 19px solid #804000;
                border-image: url(${_twcheese_conf_ImageSrc_js__WEBPACK_IMPORTED_MODULE_0__[/* ImageSrc */ "a"].popupBorder}) 19 19 19 19 repeat;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
        `);
        
        //////// faders ///////////
        
        
        function fadeGameContent () {
            $('body').append('<div id="fader" class="fader">');
        };
        
        
        function unfadeGameContent() {
            $('#fader').remove();
            $('.twcheese-fader').remove();
        }
        
        
        function fadeGameContentExcept(el) {
            let $el = $(el);
        
            if ($el.length < 1) {
                throw new Error('element does not exist');
            }
            if ($el.length > 1) {
                throw new Error('expected exactly one element, got more');
            }
        
            let $faderLeft = spawnFader();
            let $faderRight = spawnFader();
            let $faderTopMenu = spawnFader();
            let $faderTopScreen = spawnFader();
            let $faderBottomScreen = spawnFader();
            let $faderBottomMenu = spawnFader();
        
            var $bottomMenu = $('#footer');
            var $topMenu = $('#topContainer');
            var topMenuHeight, screenWidth, screenHeight;
        
            function updateMeasurements() {
                topMenuHeight = $topMenu.outerHeight() + 3;
                screenWidth = $('body').outerWidth();
                screenHeight = Math.max($('#ds_body')[0].scrollHeight, document.documentElement.clientHeight);
            }
        
            function updateFaders() {
                updateMeasurements();
                updateFaderLeft();
                updateFaderRight();
                updateFaderTopMenu();
                updateFaderTopScreen();
                updateFaderBottomScreen();
                updateFaderBottomMenu();
            }
        
        
            function updateFaderLeft() {
                let offset = $el.offset();
                $faderLeft.css({
                    top: 0,
                    left: 0,
                    width: offset.left,
                    height: screenHeight
                });
            }
        
        
            function updateFaderRight() {
                let offset = $el.offset();
                $faderRight.css({
                    top: 0,
                    right: 0,
                    width: screenWidth - $el.outerWidth() - offset.left,
                    height: screenHeight
                });
            }
        
        
            function updateFaderTopScreen() {
                let offset = $el.offset();
                $faderTopScreen.css({
                    top: topMenuHeight,
                    left: offset.left,
                    height: offset.top - topMenuHeight,
                    width: $el.outerWidth(),
                    zIndex: $('.top_bar').zIndex() - 1
                });
            }
        
        
            function updateFaderBottomScreen() {
                let offset = $el.offset();
                $faderBottomScreen.css({
                    top: offset.top + $el.outerHeight(),
                    left: offset.left,
                    height: screenHeight - offset.top - $el.outerHeight(),
                    width: $el.outerWidth(),
                    zIndex: $bottomMenu.zIndex() - 1
                });
            }
        
        
            function updateFaderTopMenu() {
                let offset = $el.offset();
                $faderTopMenu.css({
                    position: 'fixed',
                    top: 0,
                    left: offset.left,
                    height: topMenuHeight,
                    width: $el.outerWidth()
                });
            }
        
        
            function updateFaderBottomMenu() {
                let offset = $el.offset();
                $faderBottomMenu.css({
                    position: 'fixed',
                    bottom: 0,
                    left: offset.left,
                    height: $bottomMenu.outerHeight(),
                    width: $el.outerWidth()
                });
            }
        
        
            function spawnFader() {
                let css = {
                    position: 'absolute',
                    background: 'black',
                    opacity: 0.5,
                    zIndex: 12000
                };
                return $('<div class="twcheese-fader"></div>').css(css).appendTo($('body'));
            }
        
            updateFaders();
            $(window).on('resize', updateFaders);
        }
        
        
        // mousetrap ///////////////////////////////
        
        let mouseEvents = ['click', 'mousemove', 'mousenter', 'mouseleave', 'mouseover', 'mouseout', 'mousedown', 'mouseup'];
        let mouseBubbleEvents = new Set(['click', 'mousemove', 'mouseover', 'mouseout', 'mousedown', 'mouseup']);
        let mouseEventsNeedSpecial = new Set(['mousenter', 'mouseleave', 'mouseover', 'mouseout']);
        
        class Mousetrap {
            constructor() {
                this.$trap = $('<div class="twcheese-mousetrap">').css({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'cyan',
                    opacity: 0.001,
                    zIndex: 12000
                })
                this.prevIntendedTarget;
        
                this.watchers = {
                    // example:
                    // click: [{$elements, handler}, {$elements, handler}]
                    mouseout: []
                }
        
                this.setupHandling();
            }
        
            spawn() {
                this.$trap.appendTo('body');
                return this;
            }
        
            destruct() {
                this.$trap.remove();
            }
        
            setupHandling() {
                let trapEvents = mouseEvents.filter(name => !mouseEventsNeedSpecial.has(name));
        
                this.$trap.on(trapEvents.join(' '), (e) => {
                    this.$trap.hide();
                    let intendedTarget = document.elementFromPoint(e.offsetX, e.offsetY);
                    this.$trap.show();
        
                    this.notifyWatchers(e.type, e, intendedTarget);
        
                    if (e.type === 'mousemove' && intendedTarget !== this.prevIntendedTarget) {
                        this.notifyWatchers('mousenter', e, intendedTarget);
                        this.notifyWatchers('mouseleave', e, this.prevIntendedTarget);
                        this.notifyWatchers('mouseover', e, intendedTarget);
        
                        // mouseout
                        for (let watcher of this.watchers.mouseout) {
                            watcher.$elements.each((i, el) => {
                                if (
                                    this.doesElMatch(el, 'mouseover', this.prevIntendedTarget)
                                    && !this.doesElMatch(el, 'mouseover', intendedTarget)
                                ) {
                                    watcher.handler.call(el, e);
                                }
                            });
                        }
                    }
        
                    this.prevIntendedTarget = intendedTarget;
                });
            }
        
            notifyWatchers(eventName, e, intendedTarget) {
                if (typeof this.watchers[eventName] === 'undefined') {
                    return;
                }
                for (let watcher of this.watchers[eventName]) {
                    watcher.$elements.each((i, el) => {
                        if (this.doesElMatch(el, eventName, intendedTarget)) {
                            watcher.handler.call(el, e);
                        }
                    });
                }
            }
        
            doesElMatch(el, eventName, intendedTarget) {
                return el === intendedTarget
                || (mouseBubbleEvents.has(eventName) && $.contains(el, intendedTarget));
            }
        
            on(eventName, $elements, handler) {
                if (typeof this.watchers[eventName] === 'undefined') {
                    this.watchers[eventName] = [];
                }
                this.watchers[eventName].push({$elements, handler});
                return this;
            }
        
        }
        
        
        
        
        /***/ }),
        /* 2 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractWidget; });
        
        function afterDOMInsert(el, callback) {
            let observer = new MutationObserver((mutations) => {
                outerloop:
                    for (let mutation of mutations) {
                        for (let node of mutation.addedNodes) {
                            if (node === el || node.contains(el)) {
                                setTimeout(callback, 0);
                                observer.disconnect();
                                break outerloop;
                            }
                        }
                    }
            });
        
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true
            });
        }
        
        
        class AbstractWidget {
        
            insertBefore(el) {
                this._beforeInsert();
                $(el).before(this.$el);
                return this;
            }
        
            insertAfter(el) {
                this._beforeInsert();
                $(el).after(this.$el);
                return this;
            }
        
            appendTo(el) {
                this._beforeInsert();
                $(el).append(this.$el);
                return this;
            }
        
            _beforeInsert() {
                if (typeof this.afterInsert !== 'function') {
                    return;
                }
                let el = this.$el[0];
                afterDOMInsert(el, () => this.afterInsert());
            }
        
        }
        
        
        
        /***/ }),
        /* 3 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSrc; });
        let game = window.image_base;
        let self = window.TwCheese.ROOT + '/assets/images/';
        
        let ImageSrc = {
            plus: game + 'plus.png',
            minus: game + 'minus.png',
            wood: game + 'holz.png',
            stone: game + 'lehm.png',
            iron: game + 'eisen.png',
            attack: game + 'command/attack.png',
            haulPartial: game + 'max_loot/0.png',
            haulFull: game + 'max_loot/1.png',
            info: game + 'questionmark.png',
            attackSentViaFa: game + 'command/farm.png',
            attackSizeSmall: game + 'command/attack_small.png',
            attackSizeMedium: game + 'command/attack_medium.png',
            attackSizeLarge: game + 'command/attack_large.png',
            attackContainsSnob: game + 'command/snob.png',
            attackContainsSpy: game + 'command/spy.png',
            attackContainsKnight: game + 'command/knight.png',
            popupBackground: game + 'popup/content_background.png',
            popupBorder: game + 'popup/border.png',
            servant: game + 'paladin_new.png',
            loadingSpinner: game + 'throbber.gif',
            calendar: self + 'calendar.png',
            sidebarMain: self + 'sidebar/gear.png',
            sidebarBug: self + 'sidebar/bug.png',
            sidebarGithub: self + 'sidebar/github.png',
            jq: {
                blue: self + 'jquery/ui-icons_2e83ff_256x240.png',
                black: self + 'jquery/ui-icons_222222_256x240.png',
                darkGrey: self + 'jquery/ui-icons_454545_256x240.png',
                grey: self + 'jquery/ui-icons_888888_256x240.png',
                red: self + 'jquery/ui-icons_cd0a0a_256x240.png'
            },
            legacy: {
                helpBackground: self + 'legacy/help_background.png',
                helpBackgroundBright: self + 'legacy/help_background_highlight.png'
            },    
            buildingIcon: buildingType => game + `buildings/${buildingType}.png`,
            troopIcon: troopType => game + `unit/unit_${troopType}.png`,
            dotIcon: color => game + `dots/${color}.png`,
            scavengeOption: optionId => game + `scavenging/options/${optionId}.png`,
        };
        
        
        
        
        /***/ }),
        /* 4 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTypes; });
        const QuestionTypes = {
            VALUE: 'value',
            FREE_FORM: 'free_form',
            SELECT: 'select'
        };
        
        
        
        /***/ }),
        /* 5 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseTypes; });
        const PhaseTypes = {
            ATTEMPT: 'attempt',
            QUESTION: 'question',
            REPORT: 'report'
        };
        
        
        
        /***/ }),
        /* 6 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Phase; });
        
        class Phase {
            constructor(phaseName) {
                this.name = phaseName;
                this.followsUpOn = null;
                this.autoComplete = false;
            }
        
            setFollowsUpOn(thingToFollowUpOn) {
                this.followsUpOn = thingToFollowUpOn;
                return this;
            }
        
            setAutoComplete(auto) {
                this.autoComplete = auto;
                return this;
            }
        
            getType() {
                throw Error('notimplemented');
            }
        
            start() {
                throw Error('not implemented');
            }
        
            checkCompletionReady() {
                throw Error('not implemented');
            }
        
            getThingsToFollowUpOn() {
                throw Error('not implemented');
            }
        
            getSummary() {
                throw Error('not implemented');
            }
            
        }
        
        
        
        /***/ }),
        /* 7 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessFactory; });
        /* harmony import */ var _twcheese_src_Models_Debug_DebugProcess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
        /* harmony import */ var _twcheese_src_Models_Debug_Build_PhaseFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
        /* harmony import */ var _twcheese_src_Models_Debug_BugReporter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
        /* harmony import */ var _twcheese_src_Models_Debug_PhaseReport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
        
        
        
        
        
        
        function lazyEvalUsingParent(parentPhase) {
            return (str) => {
                return () => {
                    let parentResult = parentPhase.result;
                    return eval(str);
                };
            }
        }
        
        
        class ProcessFactory {
        
            constructor(actions) {
                this.phaseFactory = new _twcheese_src_Models_Debug_Build_PhaseFactory_js__WEBPACK_IMPORTED_MODULE_1__[/* PhaseFactory */ "a"](actions);
            }
        
            create(name, cfg, finishWithReport) {
                let process = new _twcheese_src_Models_Debug_DebugProcess_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugProcess */ "a"](name);
        
                for (let phaseCfg of cfg.phases) {
                    process.enqueuePhase(this.createPhase(phaseCfg));
                }
        
                if (finishWithReport) {
                    let bugReporter = new _twcheese_src_Models_Debug_BugReporter_js__WEBPACK_IMPORTED_MODULE_2__[/* BugReporter */ "a"](process);
                    process.enqueuePhase(_twcheese_src_Models_Debug_PhaseReport_js__WEBPACK_IMPORTED_MODULE_3__[/* PhaseReport */ "a"].create(bugReporter));
                }
        
                return process;
            }
        
            createPhase(cfg, lazyEval) {
                let phase = this.phaseFactory.create(cfg, lazyEval);
                this.addFollowUpPhasesForSuccess(phase, cfg);
                this.addFollowUpPhasesForAnswers(phase, cfg);
                return phase;
            }
        
            addFollowUpPhasesForSuccess(phase, cfg) {
                if (cfg.type === 'PhaseAttempt' && cfg.success) {
                    for (let phaseCfg of cfg.success) {
                        let subPhase = this.createPhase(phaseCfg, lazyEvalUsingParent(phase));
                        phase.addSuccessFollowUp(subPhase);
                    }
                }
            }
        
            addFollowUpPhasesForAnswers(phase, cfg) {
                if (cfg.type !== 'PhaseQuestion') {
                    return;
                }
                
                for (let [q, questionCfg] of Object.entries(cfg.questions)) {
                    if (questionCfg.type !== 'QuestionSelect') {
                        continue;
                    }
                    for (let [o, optionCfg] of Object.entries(questionCfg.options)) {
                        if (optionCfg.followUp) {
                            for (let phaseCfg of optionCfg.followUp) {
                                let option = phase.questions[q].options[o];
                                let subPhase = this.createPhase(phaseCfg, lazyEvalUsingParent(phase))
                                option.addFollowUp(subPhase);
                            }
                        }
                    }
                }
            }
        
        };
        
        
        
        /***/ }),
        /* 8 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugProcess; });
        /* harmony import */ var _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        
        
        
        class DebugProcess {
            constructor(processName) {
                this.name = processName;
                this.phases = [];
                this.currentPhaseIndex = -1;
            }
        
            enqueuePhase(phase) {
                this.phases.push(phase);
                this.watchPhase(phase);
                return this;
            }
        
            insertPhase(phase) {
                this.phases.splice(this.currentPhaseIndex + 1, 0, phase);
                this.watchPhase(phase);
                return this;
            }
        
            watchPhase(phase) {
                let events = [
                    _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugEvents */ "a"].PHASE_COMPLETION_READY,
                    _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugEvents */ "a"].PHASE_COMPLETION_NOT_READY,
                    _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugEvents */ "a"].PHASE_CHANGED
                ];
        
                $(phase).on(events.join(' '), (e) => $(this).trigger(e.type, e));
        
                $(phase).on(_twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugEvents */ "a"].PHASE_COMPLETION_READY, () => {
                    if (phase.autoComplete) {
                        this.goToNextPhase();
                    }
                });
            }
        
            start() {
                this.currentPhaseIndex = -1;
                this.goToNextPhase();
            }
        
            goToNextPhase() {
                if (this.currentPhaseIndex >= 0) {
                    for (let thing of this.getCurrentPhase().getThingsToFollowUpOn()) {
                        for (let phase of thing.followUpPhases) {
                            this.insertPhase(phase);
                        }            
                    }
                }        
                if (!this.hasNextPhase()) {
                    throw Error(`there's no next phase`);
                }
                this.currentPhaseIndex++;
                $(this).trigger(_twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_0__[/* DebugEvents */ "a"].PHASE_CHANGED);
                this.getCurrentPhase().checkCompletionReady();
                this.getCurrentPhase().start();
            }
        
            hasNextPhase() {
                return this.currentPhaseIndex < this.phases.length - 1;
            }
        
            getCurrentPhase() {
                return this.phases[this.currentPhaseIndex];
            }
        
            getSummarySoFar() {
                // everything before the current phase
                return this.phases.slice(0, this.currentPhaseIndex)
                    .map(phase => phase.getSummary());
            }
        
            static create(processName) {
                return new DebugProcess(processName);
            }
        
        }
        
        
        
        /***/ }),
        /* 9 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseReport; });
        /* harmony import */ var _twcheese_src_Models_Debug_Phase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
        /* harmony import */ var _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
        /* harmony import */ var _twcheese_src_Models_Debug_PhaseTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
        
        
        
        
        
        const Status = {
            SUCCESS: 'success',
            FAIL: 'fail',
            NOT_ATTEMPTED: 'not_attempted'
        };
        
        
        class PhaseReport extends _twcheese_src_Models_Debug_Phase_js__WEBPACK_IMPORTED_MODULE_0__[/* Phase */ "a"] {
            constructor(bugReporter) {
                super('send bug report');
                this.bugReporter = bugReporter;
                this.status = Status.NOT_ATTEMPTED;
                this.error;
            }
        
            getType() {
                return _twcheese_src_Models_Debug_PhaseTypes_js__WEBPACK_IMPORTED_MODULE_2__[/* PhaseTypes */ "a"].REPORT;
            }
        
            start() {
                let report = this.bugReporter.buildReport();
                this.bugReporter.submitReport(report)
                    .then(d => {
                        this.status = Status.SUCCESS;
                        $(this).trigger({
                            type: _twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_1__[/* DebugEvents */ "a"].BUG_REPORT_SUCCEEDED,
                            url: d.html_url
                        })
                    })
                    .catch(error => {
                        this.error = error;
                        this.status = Status.FAIL;
                        $(this).trigger(_twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_1__[/* DebugEvents */ "a"].BUG_REPORT_FAILED)
                    })
                    .finally(() => this.checkCompletionReady());
            }
        
            checkCompletionReady() {
                if (this.status !== Status.NOT_ATTEMPTED) {
                    $(this).trigger(_twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_1__[/* DebugEvents */ "a"].PHASE_COMPLETION_READY);
                } else {
                    $(this).trigger(_twcheese_src_Models_Debug_DebugEvents_js__WEBPACK_IMPORTED_MODULE_1__[/* DebugEvents */ "a"].PHASE_COMPLETION_NOT_READY);
                }
            }
        
            getThingsToFollowUpOn() {
                return [];
            }
        
            getSummary() {
                return {
                    phaseName: this.name
                };
            }
        
            static create(bugReporter) {
                return new PhaseReport(bugReporter);
            }
        }
        
        
        
        
        /***/ }),
        /* 10 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        
        // EXTERNAL MODULE: ./src/Models/Debug/Phase.js
        var Phase = __webpack_require__(6);
        
        // EXTERNAL MODULE: ./src/Models/Debug/DebugEvents.js
        var DebugEvents = __webpack_require__(0);
        
        // EXTERNAL MODULE: ./src/Models/Debug/PhaseTypes.js
        var PhaseTypes = __webpack_require__(5);
        
        // CONCATENATED MODULE: ./src/Models/Debug/PhaseAttempt.js
        
        
        
        
        const Status = {
            SUCCESS: 'success',
            FAIL: 'fail',
            NOT_ATTEMPTED: 'not_attempted'
        };
        
        
        class PhaseAttempt_PhaseAttempt extends Phase["a" /* Phase */] {
            constructor(phaseName, asyncFunctionToAttempt) {
                super(phaseName);
                this.instructions;
                this.attempt = asyncFunctionToAttempt;
                this.success = async () => {};
                this.fail = async () => {};
                this.status = Status.NOT_ATTEMPTED;
                this.autoComplete = true;
                this._error;
                this._result;
                this.summarizeData = d => d;
                this.ctrl = {};
        
                this.successFollowUpPhases = [];
            }
        
            getType() {
                return PhaseTypes["a" /* PhaseTypes */].ATTEMPT;
            }
        
            get result() {
                if (this.status === Status.NOT_ATTEMPTED) {
                    throw new Error('tried to get result before the attempt settled');
                }
                if (this.status === Status.FAIL) {
                    throw new Error(`tried to get result of an attempt that failed`);
                }
                return this._result;
            }
        
            async doAttempt() {
                try {
                    let result = await this.abortableAttempt();
                    this.status = Status.SUCCESS;
                    this._result = result;            
                    await this.success(result);
                } catch (err) {
                    console.warn(err);
                    this.status = Status.FAIL;
                    this._error = err;
                    await this.fail(err);
                }
                this.checkCompletionReady();
            }
        
            async abortableAttempt() {
                return new Promise(async (resolve, reject) => {
                    $(this.ctrl).on(DebugEvents["a" /* DebugEvents */].USER_REJECTED, () => reject('user rejected'));
                    try {
                        let parentResult;
                        if (this.followsUpOn) {
                            parentResult = this.followsUpOn.result;
                        }
                        let result = await this.attempt(parentResult, this.ctrl);
                        resolve(result);
                    }
                    catch(err) {
                        reject(err);
                    }            
                });
            }
        
            userAbort() {
                $(this.ctrl).trigger(DebugEvents["a" /* DebugEvents */].USER_REJECTED);
            }
        
            setInstructions(instructions) {
                this.instructions = instructions;
                return this;
            }
        
            setDataSummarizer(func) {
                this.summarizeData = func;
                return this;
            }
        
            onSuccess(cb) {
                this.success = cb;
                return this;
            }
        
            addSuccessFollowUp(phase) {
                this.successFollowUpPhases.push(phase);
                phase.setFollowsUpOn(this);
                return this;
            }
        
            get followUpPhases() {
                if (this.status === Status.SUCCESS) {
                    return this.successFollowUpPhases;
                }
                return [];
            }
        
            onFail(cb) {
                this.fail = cb;
                return this;
            }
        
            start() {
                this.doAttempt();
            }
        
            checkCompletionReady() {
                if (this.status !== Status.NOT_ATTEMPTED) {
                    $(this).trigger(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_READY);
                } else {
                    $(this).trigger(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_NOT_READY);
                }
            }
        
            getThingsToFollowUpOn() {
                return [this];
            }
        
            getSummary() {
                return {
                    phaseName: this.name,
                    status: this.status,
                    data: typeof this._result === 'undefined' ? this._result : this.summarizeData(this._result),
                    error: this.summarizeError()
                }
            }
        
            summarizeError() {
                let err = this._error;
                if (!(err instanceof Error)) {
                    return err;
                }
                return {
                    message: err.message,
                    name: err.name,
                    extra: err.extra,
                    stack: err.stack
                };
            }
            
            static create(phaseNum, functionToAttempt) {
                return new PhaseAttempt_PhaseAttempt(phaseNum, functionToAttempt);
            }
        
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/PhaseQuestion.js
        
        
        
        
        
        class PhaseQuestion_PhaseQuestion extends Phase["a" /* Phase */] {
            constructor(phaseName) {
                super(phaseName);
                this.questions = [];
                this._examinedHtml;
            }
        
            getType() {
                return PhaseTypes["a" /* PhaseTypes */].QUESTION;
            }
        
            lookAt(html) {
                this._examinedHtml = html;
                return this;
            }
        
            get examinedHtml() {
                if (typeof this._examinedHtml === 'function') {
                    return this._examinedHtml();
                }
                return this._examinedHtml;
            }
        
            addQuestion(question) {
                this.questions.push(question);
                $(question).on(DebugEvents["a" /* DebugEvents */].QUESTION_ANSWERED, () => {
                    this.checkCompletionReady();
                });
                $(question).on(DebugEvents["a" /* DebugEvents */].QUESTION_NOT_ANSWERED, () => {
                    this.checkCompletionReady();
                });
                return this;
            }
        
            start() {
                // do nothing;
            }
        
            checkCompletionReady() {
                for (let question of this.questions) {
                    if (!question.isAnswered()) {
                        $(this).trigger(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_NOT_READY);
                        return;
                    }
                }
                $(this).trigger(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_READY);
            }
        
            getThingsToFollowUpOn() {
                return this.questions.reduce((acc, question) => acc.concat(question.getThingsToFollowUpOn()), []);
            }
        
            getSummary() {
                return {
                    phaseName: this.name,
                    questions: this.questions.map(question => question.getSummary())
                };
            }
        
            static create(phaseName) {
                return new PhaseQuestion_PhaseQuestion(phaseName);
            }
        
        }
        
        
        
        
        // EXTERNAL MODULE: ./src/Models/Debug/QuestionTypes.js
        var QuestionTypes = __webpack_require__(4);
        
        // CONCATENATED MODULE: ./src/Models/Debug/Question.js
        
        
        
        class Question_Question {
            constructor(text) {
                this.text = text;
                this.options = [];
                this.selectedOptionIndex = null;
            }
        
            getType() {
                throw Error('not implemented');
            }
        
            addOption(option) {
                this.options.push(option);
                return this;
            }
        
            setSelectedOption(index) {
                this.selectedOptionIndex = index;
                $(this).trigger(DebugEvents["a" /* DebugEvents */].QUESTION_ANSWERED);
                return this;
            }
        
            isAnswered() {
                return this.selectedOptionIndex !== null;
            }
        
            getSelectedOption() {
                return this.options[this.selectedOptionIndex];
            }
        
            getThingsToFollowUpOn() {
                let option = this.getSelectedOption();
                return (option.followUpPhases.length > 0) ? [option] : [];
            }
        
            getSummary() {
                return {
                    question: this.text,
                    answer: this.getSelectedOption().value
                };
            }
        
            static create(text) {
                return new Question_Question(text);
            }
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/QuestionSelect.js
        
        
        
        
        class QuestionSelect_QuestionSelect extends Question_Question {
            getType() {
                return QuestionTypes["a" /* QuestionTypes */].SELECT;
            }
        
            static create(text) {
                return new QuestionSelect_QuestionSelect(text);
            }
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/Option.js
        
        
        
        class Option_Option {
            constructor(humanText, value, className = '') {
                this.text = humanText;
                this.value = value;
                this.className = className;
                this.followUpPhases = [];
            }
        
            addFollowUp(phase) {
                this.followUpPhases.push(phase);
                phase.setFollowsUpOn(this);
                return this;
            }
        
            setValue(value) {
                this.value = value;
                $(this).trigger(DebugEvents["a" /* DebugEvents */].OPTION_VALUE_CHANGED);
            }
        
            static create(humanText, value, className) {
                return new Option_Option(humanText, value, className);
            }
        
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/QuestionFreeForm.js
        
        
        
        
        
        
        class QuestionFreeForm_QuestionFreeForm extends Question_Question {
        
            constructor(questionText, placeholderText, minResponseLength = 0) {
                super(questionText);
                this.minResponseLength = minResponseLength;
                this.options = [
                    Option_Option.create(placeholderText, '', 'free-form')
                ];
                this.setSelectedOption(0);
                this.watchSelectedOption();        
            }
        
            getType() {
                return QuestionTypes["a" /* QuestionTypes */].FREE_FORM;
            }
        
            watchSelectedOption() {
                $(this.getSelectedOption()).on(DebugEvents["a" /* DebugEvents */].OPTION_VALUE_CHANGED, () => {
                    if (this.isAnswered()) {
                        $(this).trigger(DebugEvents["a" /* DebugEvents */].QUESTION_ANSWERED);
                    } else {
                        $(this).trigger(DebugEvents["a" /* DebugEvents */].QUESTION_NOT_ANSWERED);
                    }
                });
            }
        
            isAnswered() {
                return super.isAnswered() && this.options[0].value.length >= this.minResponseLength;
            }
        
            static create(questionText, placeholderText, minResponseLength) {
                return new QuestionFreeForm_QuestionFreeForm(questionText, placeholderText, minResponseLength);
            }
        
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/Correctness.js
        
        const Correctness = {
            CORRECT: 'correct',
            INCORRECT: 'incorrect',
            NOT_SURE: 'not_sure'
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/QuestionValue.js
        
        
        
        
        
        
        const OPTION_INCORRECT = 1;
        
        class QuestionValue_QuestionValue extends Question_Question {
        
            constructor(questionText, valueQuestioned) {
                super(questionText);
                this._valueQuestioned = valueQuestioned;
                this.options = [
                    Option_Option.create('Correct', Correctness.CORRECT, 'correct'),
                    Option_Option.create('Incorrect', Correctness.INCORRECT, 'incorrect'),
                    Option_Option.create('Not sure', Correctness.NOT_SURE, 'not-sure')
                ];
            }
        
            get value() {
                if (typeof this._valueQuestioned === 'function') {
                    return this._valueQuestioned();
                }
                return this._valueQuestioned;
            }
        
            getType() {
                return QuestionTypes["a" /* QuestionTypes */].VALUE;
            }
        
            addFollowUp(phase) {
                this.options[OPTION_INCORRECT].addFollowUp(phase);
                return this;
            }
        
            getSummary() {
                return Object.assign(super.getSummary(), {
                    valueChecked: this.value
                });
            }
        
            static create(questionText, valueQuestioned) {
                return new QuestionValue_QuestionValue(questionText, valueQuestioned);
            }
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/Build/QuestionFactory.js
        
        
        
        
        
        
        class QuestionFactory_QuestionFactory {
            
            create(cfg, lazyEval) {
                switch (cfg.type) {
                    case 'QuestionFreeForm':
                        return this.createQuestionFreeForm(cfg);
                    case 'QuestionSelect':
                        return this.createQuestionSelect(cfg);
                    case 'QuestionValue':
                        return this.createQuestionValue(cfg, lazyEval);
                    default:
                        throw `unrecognized question type: ${cfg.type}`;
                }
            }
        
            createQuestionFreeForm(cfg) {
                let minResponseLength = cfg.minResponseLength || 0;
                return QuestionFreeForm_QuestionFreeForm.create(cfg.ask, cfg.placeholderText, minResponseLength);
            }
        
            createQuestionSelect(cfg) {
                let question = QuestionSelect_QuestionSelect.create(cfg.ask);
        
                for (let optionCfg of cfg.options) {
                    question.addOption(Option_Option.create(optionCfg.answer, optionCfg.value));
                }
        
                return question;
            }
        
            createQuestionValue(cfg, lazyEval) {
                let valueExamined = lazyEval(cfg.examine);
                return QuestionValue_QuestionValue.create(cfg.ask, valueExamined);
            }
        
        }
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/Build/PhaseFactory.js
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaseFactory_PhaseFactory; });
        
        
        
        
        
        class PhaseFactory_PhaseFactory {
        
            constructor(actions) {
                this.actions = actions;
                this.questionFactory = new QuestionFactory_QuestionFactory();
            }
        
            create(cfg, lazyEval) {
                switch (cfg.type) {
                    case 'PhaseAttempt':
                        return this.createPhaseAttempt(cfg);
                    case 'PhaseQuestion':
                        return this.createPhaseQuestion(cfg, lazyEval);
                    case 'PhaseReport':
                        return this.createPhaseReport(cfg);
                    default:
                        throw Error(`unrecognized phase type ${cfg.type}`);
                }
            }
        
            createPhaseAttempt(cfg) {
                let action = this.actions[cfg.action];
                if (typeof action === 'undefined') {
                    throw Error(`unrecognized action: ${cfg.action}`);
                }
        
                let phase = PhaseAttempt_PhaseAttempt.create(cfg.internalName, action.execute);
        
                if (action.summarizeResult) {
                    phase.setDataSummarizer(action.summarizeResult);
                }
                if (cfg.instructions) {
                    phase.setInstructions(cfg.instructions);
                }
                return phase;
            }
        
            createPhaseQuestion(cfg, lazyEval) {
                let phase = PhaseQuestion_PhaseQuestion.create(cfg.internalName);
        
                if (cfg.lookAt) {
                    phase.lookAt(lazyEval(cfg.lookAt));
                }
        
                for (let questionCfg of cfg.questions) {
                    let question = this.questionFactory.create(questionCfg, lazyEval);
                    phase.addQuestion(question);
                }
                
                return phase;
            }
        
        }
        
        
        
        /***/ }),
        /* 11 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        
        // CONCATENATED MODULE: ./src/Models/Debug/DataCollector.js
        
        class DataCollector {
            constructor(debugProcess) {
                this.process = debugProcess;
                this.censoredProps = new Set(['csrf', 'birthdate']);
            }
        
            getCollectibleData() {
                return this.scrub(this.buildData());
            }
        
            buildData() {
                let nav = window.navigator;
        
                return {
                    process: this.process.getSummarySoFar(),
                    contentHtml: document.getElementById('contentContainer').outerHTML,
                    navigator: {
                        appCodeName: nav.app,
                        appName: nav.appName,
                        appVersion: nav.appVersion,
                        platfrom: nav.platfrom,
                        userAgent: nav.userAgent,
                        languages: $.extend(true, [], nav.languages),
                        oscpu: nav.oscpu
                    },
                    gameData: $.extend(true, {}, window.game_data)
                }
            }
        
            scrub(d) {
                if (typeof d === 'object' && d !== null) {
                    for (let key of Object.keys(d)) {
                        if (this.censoredProps.has(key)) {
                            d[key] = 'CENSORED';
                        } else {
                            d[key] = this.scrub(d[key]);
                        }
                    }
                }
                if (typeof d === 'string') {
                    return this.censorCsrfInString(d);
                }
                return d;
            }
        
            censorCsrfInString(s) {
                return s.replace(/((&|&amp;)h=)(\w+)/g, '$1CENSORED')
                    .replace(/(\?h=)(\w+)(&|&amp;)/g, '$1CENSORED$3')
                    .replace(/(csrf_token = ')(\w+)/g, '$1CENSORED')
                    .replace(/("csrf":")(\w+)/g, '$1CENSORED');
            }
        }
        
        
        // CONCATENATED MODULE: ./conf/API.js
        let API = {
            bugReport: {
                url: 'https://56hqsw3c2c.execute-api.us-east-2.amazonaws.com/prod/bugreport'
            }
        }
        
        
        
        
        // CONCATENATED MODULE: ./src/Models/Debug/BugReporter.js
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BugReporter_BugReporter; });
        
        
        
        class BugReporter_BugReporter {
            constructor(process) {
                this.process = process;
            }
        
            buildReport() {
                return {
                    title: '[Bug report] ' + this.process.name,
                    dataCollected: (new DataCollector(this.process)).getCollectibleData()
                }
            }
        
            async submitReport(report) {
                let message = [
                    '|game version|world|player|twcheese|',
                    '|---|---|---|---|',
                    `|${game_data.majorVersion}|${game_data.world}|${game_data.player.name}|${window.TwCheese.version}|`,
                    '```' + JSON.stringify(report.dataCollected, null, 2) +  '```'
                ].join("\n");
                return await this.createIssue(report.title, message);
            }
        
            async createIssue(title, message) {
                let response = await fetch(API.bugReport.url, {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        message: message
                    })
                });
                if (!response.ok) {
                    throw new Error(`Failed to create issue. [${response.status}: ${response.statusText}]`);
                }
                return await response.json();
            }
        
        }
        
        
        
        /***/ }),
        /* 12 */
        /***/ (function(module, exports, __webpack_require__) {
        
        __webpack_require__(13);
        module.exports = __webpack_require__(14);
        
        
        /***/ }),
        /* 13 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        
        // CONCATENATED MODULE: ./src/Util/Object.js
        
        
        function getProp(object, propPath, defaultValue) {
            let tokens = propPath.split('.');
            for (let i = 0; i < tokens.length - 1; i++) {
                let token = tokens[i];
                if (typeof object[token] !== 'object' || token === null) {
                    return defaultValue;
                }
                object = object[token];
            }
            let value = object[tokens[tokens.length - 1]];
            return (typeof value === 'undefined') ? defaultValue : value;
        }
        
        
        function setProp(object, propPath, value) {
            let tokens = propPath.split('.');
            for (let i = 0; i < tokens.length - 1; i++) {
                let token = tokens[i];
                if (typeof object[token] !== 'object' || token === null) {
                    object[token] = {};
                }
                object = object[token];
            }
            object[tokens[tokens.length - 1]] = value;
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/Config.js
        
        
        
        class Config_Config {
            constructor(id) {
                this.id = id;
                this.props = {};
                this._loadCachedData();
            }
        
            get(prop, defaultValue) {
                return getProp(this.props, prop, defaultValue);
            }
        
            set(prop, value) {
                setProp(this.props, prop, value);
                this._save();
            }
        
            initProps(props) {
                this.props = props;
            }
        
            /**
             * @protected
             * @return {object|null}
             */
            _loadCachedData() {
                let saved = window.localStorage.getItem(this.id);
                if (saved) {
                    let data = JSON.parse(saved);
        
                    // should ideally be data.props
                    // But for backwards compatibility, the data could be the props too.
                    this.props = data.props || data;
                    return data;
                }
                return null;
            }
        
            /**
             * @final
             * @protected
             */
            _save() {
                this._beforeSave();
                window.localStorage.setItem(this.id, JSON.stringify(this._getCacheableData()));
            }
        
            /**
             * @protected
             */
            _beforeSave() {
                
            }
        
            /**
             * @protected
             * @return {object}
             */
            _getCacheableData() {
                return {
                    props: this.props
                };
            }
        
        }
        
        
        // CONCATENATED MODULE: ./src/Models/RateLimiter.js
        class RateLimiter {
            constructor(maxBurstsPerSecond) {
                this.maxBurstsPerSecond = maxBurstsPerSecond;
                this.recentRequests = new Array(maxBurstsPerSecond);
            }
        
            requestWasMade() {
                this.recentRequests.unshift(performance.now());
                this.recentRequests.pop();
            }
        
            async sleepIfNeeded() {
                let anchorTimestamp = this.recentRequests[this.maxBurstsPerSecond - 1];
                if (typeof anchorTimestamp === 'undefined') {
                    return;
                }
                let delayMs = anchorTimestamp + 1000 - performance.now();
                if (delayMs <= 0) {
                    return;
                }
                return new Promise(function(resolve, reject) {
                    setTimeout(resolve, delayMs);
                });
            }
        }
        
        
        // CONCATENATED MODULE: ./src/Util/Network.js
        
        
        let throttle = new RateLimiter(5);
        
        let originalFetch = window.fetch;
        window.fetch = function() {
            throttle.requestWasMade();
            return originalFetch.apply(this, arguments);
        };
        
        
        /**
         * requests the document from a url
         * @param {string} url the url of the page to get the document from
         * @return {Promise}
         * @resolve {HTMLDocment}
         */
        async function requestDocument(url) {
            await throttle.sleepIfNeeded();
            let response = await fetch(url);
            let responseText = await response.text();
            let doc = (new DOMParser()).parseFromString(responseText, 'text/html');
        
            Object.defineProperty(doc, 'URL', {
                get: () => url
            });
            
            return doc;
        };
        
        
        /**
         * requests xml document from a url
         * @param {string} url the url of the page to get the cml document from
         * @return {Promise}
         * @resolve {XMLDocument}
         */
        async function requestXml(url) {
            await throttle.sleepIfNeeded();
            let response = await fetch(url);
            let responseText = await response.text();
            let xmlDoc = (new DOMParser()).parseFromString(responseText, 'text/xml');
        
            Object.defineProperty(xmlDoc, 'URL', {
                get: () => url
            });
        
            return xmlDoc;
        };
        
        
        /**
         * make a POST request to the game
         * @param {string} screen 
         * @param {object} uriParams 
         * @param {object} data
         * @return {Promise}
         * @resolve {object} response data from the game
         */
        async function postToGame(screen, uriParams, data) {
            await throttle.sleepIfNeeded();
            return new Promise(function(resolve, reject) {
                window.TribalWars.post(screen, uriParams, data, resolve, reject);
            });
        }
        
        
        function gameUrl(screen, uriParams, method = 'GET') {
            return 'https://' + document.domain + window.TribalWars.buildURL(method, screen, uriParams);
        }
        
        
        function attackPrepUrl(unitCounts, targetVillageId, originVillageId = window.game_data.village.id) {
            let uriParams = {
                from: 'simulator',
                village: originVillageId,
                target_village_id: targetVillageId        
            };
            for (let [unitType, count] of Object.entries(unitCounts)) {
                uriParams['att_' + unitType] = count;
            }
            return gameUrl('place', uriParams);
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/RemoteConfig.js
        
        
        
        
        function parseXmlNode(node) {
            if (node.children.length === 0) {
                return parseFloat(node.innerHTML) || null;
            }
            let object = {};
            for (let childNode of node.children) {
                object[childNode.tagName] = parseXmlNode(childNode);
            }
            return object;
        }
        
        
        class RemoteConfig_RemoteConfig extends Config_Config {
        
            /**
             * @param {string} url 
             */
            setUrl(url) {
                this.url = url;
                return this;
            }
        
            /**
             * @param {number} seconds 
             */
            setTtl(seconds) {
                this.ttl = seconds * 1000;
                return this;
            }
        
            async ensureUpdated() {
                if (this.needsUpdate()) {
                    await this.update();
                }    
            }
        
            needsUpdate() {
                let now = new Date().getTime();
                let ttl = this.ttl || 86400;
                return !this.timeUpdated || ttl < now - this.timeUpdated;
            }
        
            async update() {
                let xmlDoc = await requestXml(this.url);
                this._processXml(xmlDoc);
                this._save();
            }
        
            /**
             * @protected
             * @param {XMLDocument} xmlDoc 
             */
            _processXml(xmlDoc) {
                this.props = parseXmlNode(xmlDoc).config;
            }
        
            /**
             * @protected
             * @return {object|null}
             */
            _loadCachedData() {
                let data = super._loadCachedData();
                if (data) {
                    this.timeUpdated = data.timeUpdated;
                }
            }
        
            /**
             * @protected
             */
            _beforeSave() {
                this.timeUpdated = new Date().getTime();
            }
        
            /**
             * @protected
             * @return {object}
             */
            _getCacheableData() {
                return Object.assign({}, super._getCacheableData(), {
                    timeUpdated: this.timeUpdated
                });
            }
        
        }
        
        
        
        // CONCATENATED MODULE: ./src/Util/Config.js
        
        
        
        let userConfig = new Config_Config('twcheese.userConfig');
        
        let gameConfig = (new RemoteConfig_RemoteConfig('twcheese.gameConfig'))
            .setUrl(`https://${document.domain}/interface.php?func=get_config`)
            .setTtl(8 * 3600);
        
        let buildingConfig = (new RemoteConfig_RemoteConfig('twcheese.buildingConfig'))
            .setUrl(`https://${document.domain}/interface.php?func=get_building_info`)
            .setTtl(8 * 3600);
        
        let troopConfig = (new RemoteConfig_RemoteConfig('twcheese.troopConfig'))
            .setUrl(`https://${document.domain}/interface.php?func=get_unit_info`)
            .setTtl(8 * 3600);
        
        
        async function ensureRemoteConfigsUpdated() {
            await Promise.all([
                gameConfig.ensureUpdated(),
                troopConfig.ensureUpdated(),
                buildingConfig.ensureUpdated()
            ]);
        }
            
        
        
        // EXTERNAL MODULE: ./src/Util/UI.js
        var UI = __webpack_require__(1);
        
        // CONCATENATED MODULE: ./src/Prompt/suggestRedirect.js
        
        
        
        
        function suggestRedirect(options) {
            let { message, screen, screenName, uriParams, skippableId } = options;
            message = message || '{{Some genius forgot to write a message here}}';
            screenName = screenName || '{{Screen Name goes here}}';
            uriParams = uriParams || {};
            if (!screen) {
                throw Error('screen must be specified!');
            }
        
            if (skippableId && userConfig.get(skipKey(skippableId), false)) {
                window.UI.InfoMessage(`Redirecting to <strong>${screenName}</strong>...`);
                setTimeout(() => window.TribalWars.redirect(screen, uriParams), 200);        
                return;
            }    
        
            let buttonConfirm = {
                text: 'Take me there!',
                callback: () => {
                    if (skippableId) {
                        let skipNextTime = $('#twcheese-suggest-redirect-skip').prop('checked');
                        userConfig.set(skipKey(skippableId), skipNextTime);
                    }
                    window.TribalWars.redirect(screen, uriParams);
                },
                confirm: true
            };
            let buttonCancel = {
                text: 'Whatever...',
                callback: () => {}
            };
            window.UI.ConfirmationBox(buildContent(message, options), [buttonConfirm, buttonCancel], 'twcheese_suggest_redirect', true, true);
        }
        
        
        function skipKey(skippableId) {
            return 'suggestRedirect.skip.' + skippableId;
        }
        
        
        function buildContent(message, options) {
            let html = message;
            if (options.skippableId) {
                html += `<div class="twcheese-suggest-redirect-skip-container">
                    <input id="twcheese-suggest-redirect-skip" type="checkbox">
                    <span>Don't ask, just take me there next time.</span>
                </div>`
            }
            return html;
        }
        
        
        Object(UI["b" /* initCss */])(`
            .twcheese-suggest-redirect-skip-container {
                margin-top: 20px;
                font-size: 10px;
            }
        
            .twcheese-suggest-redirect-skip-container > * {
                vertical-align: middle;
            }
        `);
        
        
        
        
        
        // CONCATENATED MODULE: ./src/Models/ScavengeOption.js
        
        
        class ScavengeOption {
        
            constructor(base) {
                this.base = base;
                this.id = base.id;
            }
        
            getName() {
                return this.base.name;
            }
        
            getLootPercent() {
                return this.base.loot_factor * 100;
            }
        
            getLootFactor() {
                return this.base.loot_factor;
            }
        
            calcDurationSeconds(squadCapacity) {
                let base = (squadCapacity ** 2) * this.getLootPercent() * this.base.loot_factor;
                let preDuration = Math.pow(base, this.base.duration_exponent) + this.base.duration_initial_seconds
                return Math.round(preDuration * this.base.duration_factor);
            }
        
            calcTargetCapacity(durationSeconds) {
                let preDuration = durationSeconds / this.base.duration_factor;
                let base = (preDuration - this.base.duration_initial_seconds) ** (1 / this.base.duration_exponent);
                return Math.round(Math.sqrt(base / this.getLootPercent() / this.base.loot_factor));
            }
        
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/Troops.js
        
        
        let Troops_troopTypes = ['spear', 'sword', 'axe', 'archer', 'spy', 'light', 'marcher', 'heavy', 'ram', 'catapult', 'knight', 'snob', 'militia'];
        
        
        function troopPop(troopType) {
            let troop = troopConfig.get(troopType);
            if (typeof troop === 'undefined') {
                return 0;
            }
            return troop.pop;
        }
        
        
        function travelMinutes(troopType) {
            let troop = troopConfig.get(troopType);
            if (typeof troop === 'undefined') {
                return 0;
            }
            return troop.speed;
        }
        
        
        function troopCarry(troopType) {
            let troop = troopConfig.get(troopType);
            if (typeof troop === 'undefined') {
                return 0;
            }
            return troop.carry;
        }
        
        
        class TroopCounts {
            constructor() {
                for (let type of Troops_troopTypes) {
                    this[type] = 0;
                }
            }
        
            clone() {
                return Object.assign(new TroopCounts(), this);
            }
        
            filter(allowedTroopTypes) {
                let counts = new TroopCounts();
                for (let type of Troops_troopTypes) {
                    if (allowedTroopTypes.includes(type)) {
                        counts[type] = this[type];
                    }
                }
                return counts;
            }
        
            isZero() {        
                for (let count of Object.values(this)) {
                    if (count !== 0) {
                        return false;
                    }
                }
                return true;
            }
        
            sum() {
                let sum = 0;
                for (let count of Object.values(this)) {
                    sum += count;
                }
                return sum;
            }
        
            /**
             * @param {function} doSomething - receives two params: troopType and count
             */
            each(doSomething) {
                for (let type of Troops_troopTypes) {
                    let count = this[type];
                    doSomething(type, count);
                }
            }
        
            carryCapacity() {
                let capacity = 0;
                for (let type of Troops_troopTypes) {
                    capacity += this[type] * troopCarry(type);
                }
                return capacity;
            }
        
            populationUsed() {
                return Troops_troopTypes.reduce((sum, type) => sum + troopPop(type) * this[type], 0);
            }
        
            travelDuration(distance, role = 'attack') {
                let minutesPerField = this.travelMinutesPerField(role);
                return calcTravelDuration(minutesPerField, distance);
            }
        
            travelMinutesPerField(role = 'attack') {
                if (role === 'support' && this.knight > 0) {
                    return travelMinutes('knight');
                }
        
                let relevantMinutes = Troops_troopTypes
                    .filter(type => this[type] > 0)
                    .map(type => travelMinutes(type));
        
                return Math.max(...relevantMinutes);
            }
        
            /**
             * @param {TroopCounts} subtrahend
             * @return {TroopCounts} difference
             */
            subtract(subtrahend) {
                let difference = new TroopCounts();
                for (let [troopType, count] of Object.entries(this)) {
                    difference[troopType] = count - subtrahend[troopType];
                }
                return difference;
            }
        
            /**
             * get new TroopCounts, like this one but with any negative counts set to 0
             */
            zeroNegatives() {
                let troopCounts = new TroopCounts();
                for (let [troopType, count] of Object.entries(this)) {
                    troopCounts[troopType] = Math.max(0, count);
                }
                return troopCounts;
            }
        
            toArray() {
                return Troops_troopTypes.map(type => this[type]);
            }
        
            static fromArray(array) {
                let troops = new TroopCounts();
                array.forEach((count, i) => {
                    troops[Troops_troopTypes[i]] = count;
                });
                return troops;
            }
        }
        
        
        /**
         *	@param {number} distance
         *	@return	{{spear:number, sword:number, ...}} milliseconds
         */
        function calcTravelDurations(distance) {
            let travelTimes = {};
            for (let type of Troops_troopTypes) {
                travelTimes[type] = calcTravelDuration(travelMinutes(type), distance);
            }
            return travelTimes;
        };
        
        
        function calcTravelDuration(minutesPerField, distance) {
            // The game rounds travel duration to the nearest second.
            // The milliseconds part of the scheduled arrival is NOT some fraction of travel seconds.
            // But rather, copied from the clock when the server started processing the request to travel.
            //
            // e.g. The clock says its 12:30:00.123.
            // The server processes a request for troops to travel somewhere that takes them 10 minutes to reach.
            // The scheduled arrival will be 12:40:00.123
            return Math.round(distance * minutesPerField * 60) * 1000;
        }
        
        
        let Troops_troopUtil = {
        
            troopTypesOnWorld() {
                return window.game_data.units;
            },
        
            existsOnWorld(troopType) {
                return typeof troopConfig.get(troopType) !== 'undefined';
            },
        
            /** 
             * @param {string} troopType
             * @param {number} resourceAmount     
             * @param {number} haulBonus the extra % bonus haul from flags, events, etc. Example: 30 for 30%, NOT 0.3
             * @return {number} how many troops does it take to carry all the resources
             */
            countToCarry(troopType, resourceAmount, haulBonus = 0) {
                let haulPerUnit = troopCarry(troopType) * (100 + haulBonus) / 100;
                let troopCount = resourceAmount / haulPerUnit;
                return Math.round(10 * troopCount) / 10;
            },
        
            carryCapacity(troopType, factor = 1.0) {
                return troopCarry(troopType) * factor;
            },
        
            /**
             * @param {string} troopType
             * @param {number} distance
             * @return {number} milliseconds to travel
             */
            travelDuration(troopType, distance) {
                return calcTravelDuration(travelMinutes(troopType), distance);
            }
        
        };
        
        
        
        // CONCATENATED MODULE: ./src/Scrape/scavenge.js
        
        
        
        
        /**
         * @param {HTMLDocument} gameDoc
         * @return {TroopCounts}
         */
        function scrapeAvailableTroopCounts(gameDoc) {
            let availableCounts = new TroopCounts();
            $(gameDoc).find('.units-entry-all').each(function() {
                let troopType = this.dataset.unit;
                availableCounts[troopType] = parseInt(this.innerHTML.match(/\d+/)[0]);
            });
            return availableCounts;
        }
        
        
        /**
         * @param {HTMLDocument} gameDoc
         * @return {int[]}
         */
        function scrapeUsableOptionIds(gameDoc) {
            let usableIds = [];
        
            $(gameDoc).find('.scavenge-option').has('.free_send_button:not(.btn-disabled)').each(function() {
                let [, id] = $(this).find('.portrait').css('background-image').match(/options\/(\d).png/);
                usableIds.push(parseInt(id));
            });
        
            return usableIds;
        }
        
        
        /**
         * @param {HTMLDocument} gameDoc
         * @return {object}
         */
        function scrapeScavengeModels(gameDoc) {
            let data = scrapeScavengeData(gameDoc);
            let optionBases = data.optionsConfig;
        
            let options = new Map();
            for (let optionId of Object.keys(optionBases)) {
                options.set(parseInt(optionId), new ScavengeOption(optionBases[optionId]));
            }
        
            return {
                options,
                sendableTroopTypes: Object.keys(data.troops),
                haulFactor: data.village.unit_carry_factor
            };
        }
        
        
        /**
         * @param {HTMLDocument} gameDoc 
         */
        function scrapeScavengeData(gameDoc) {
            let jsCode = findScavengeScreenJsCode(gameDoc);
        
            let paramCode = findScavengeScreenParamCode(jsCode);
            let dataFromParams = parseScavengeScreenParamCode(paramCode);
            
            let villageCode = findVillageCode(jsCode);
        
            return {
                optionsConfig: dataFromParams.optionsConfig,
                troops: dataFromParams.troops,
                village: JSON.parse(villageCode)
            };
        }
        
        
        /**
         * @param {HTMLDocument} gameDoc 
         */
        function findScavengeScreenJsCode(gameDoc) {
            let scripts = gameDoc.getElementsByTagName('script');
            
            for (let script of scripts) {
                let code = script.innerHTML;
                if (code.includes('new ScavengeScreen')) {
                    return code;
                }
            }
        }
        
        
        /**
         * @param {string} jsCode
         * @return {string}
         */
        function findScavengeScreenParamCode(jsCode) {
            let search = 'new ScavengeScreen';
            let startIndex = jsCode.indexOf(search) + search.length;
            return wrappedCode(jsCode, startIndex, '(', ')');
        }
        
        
        /**
         * @param {string} paramCode 
         */
        function parseScavengeScreenParamCode(paramCode) {
            let optionsConfigStartIndex = paramCode.indexOf('{');
            let optionsConfigCode = wrappedCode(paramCode, optionsConfigStartIndex, '{', '}');
        
            let troopsCode;
            let troopsStartIndex = optionsConfigStartIndex + optionsConfigCode.length;
            for (; troopsStartIndex < paramCode.length; troopsStartIndex++) {
                if (paramCode[troopsStartIndex] === '{') {
                    troopsCode = wrappedCode(paramCode, troopsStartIndex, '{', '}');
                    break;
                }
            }
        
            return {
                optionsConfig: JSON.parse(optionsConfigCode),
                troops: JSON.parse(troopsCode)
            };
        }
        
        
        /**
         * @param {string} jsCode
         * @return {string}
         */
        function findVillageCode(jsCode) {
            let search = 'var village = ';
            let startIndex = jsCode.indexOf(search) + search.length;
            return wrappedCode(jsCode, startIndex, '{', '}');
        }
        
        
        /**
         * @param {string} string 
         * @param {number} firstParenIndex 
         * @param {string} openingChar 
         * @param {string} closingChar 
         * @return {string}
         */
        function wrappedCode(string, firstParenIndex, openingChar = '(', closingChar = ')') {
            let openingParens = 1;
            let closingParens = 0;
            let lastParenIndex = -1;
            
            for (let i = firstParenIndex + 1; i < string.length; i++) {
                let char = string[i];
                if (char === openingChar) {
                    openingParens++;
                }
                if (char === closingChar) {
                    closingParens++;
                    lastParenIndex = i;
                }
                if (closingParens === openingParens) {
                    return string.substring(firstParenIndex, lastParenIndex + 1);
                }
            }
        }
        
        
        
        // CONCATENATED MODULE: ./src/Models/ScavengeTroopsAssignerPreferences.js
        
        
        
        class ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences {
        
            constructor(sendableTroopTypes) {
                this._sendableTroopTypes = sendableTroopTypes;
                this.reset();        
            }
        
            reset() {
                this.mode = ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_SANE_PERSON;
                this.allowedOptionIds = new Set([1, 2, 3, 4]);
                this.targetDurationSeconds = 2 * 3600;
                this.initTroops();
                this.troopOrder = [
                    ['axe', 'light', 'marcher'], // first chunk (sent together)
                    ['spear', 'sword', 'archer'], // second chunk (sent together)
                    ['heavy'], // third chunk
                    ['knight']
                ];
            }
        
            initTroops() {
                this.troops = {};
                for (let troopType of this._sendableTroopTypes) {
                    this.troops[troopType] = {
                        maySend: true,
                        reserved: 0
                    };
                }
            }
        
            setMode(mode) {
                this.mode = mode;
                $(this).trigger('change');
            }
        
            isOptionAllowed(optionId) {
                return this.allowedOptionIds.has(optionId);
            }
        
            setOptionAllowed(optionId, isAllowed = true) {
                if (isAllowed) {
                    this.allowedOptionIds.add(optionId);
                } else {
                    this.allowedOptionIds.delete(optionId);
                }
                $(this).trigger('change');
            }
        
            setTargetDuration(seconds) {
                this.targetDurationSeconds = seconds;
                $(this).trigger('change');
            }
        
            /**
             * @return {string[]}
             */
            getAllowedTroopTypes() {
                return this._sendableTroopTypes.filter(troopType => this.troops[troopType].maySend);
            }
        
            isTroopTypeAllowed(troopType) {
                return this.troops[troopType].maySend;
            }
        
            setTroopAllowed(troopType, isAllowed) {
                this.troops[troopType].maySend = isAllowed;
                $(this).trigger('change');
            }
        
            /**
             * @return TroopCounts
             */
            getReservedTroopCounts() {
                let troopCounts = new TroopCounts();
                for (let troopType of this._sendableTroopTypes) {
                    troopCounts[troopType] = this.troops[troopType].reserved;
                }
                return troopCounts;
            }
        
            getReservedCount(troopType) {
                return this.troops[troopType].reserved;
            }
        
            setReservedCount(troopType, count) {
                this.troops[troopType].reserved = count;
                $(this).trigger('change');
            }
        
            setTroopOrder(troopOrder) {
                this.troopOrder = troopOrder;
                $(this).trigger('change');
            }
        
            export() {
                return {
                    mode: this.mode,
                    allowedOptionIds: [...this.allowedOptionIds.values()],
                    targetDurationSeconds: this.targetDurationSeconds,
                    troops: this.troops,
                    troopOrder: this.troopOrder
                }
            }
        
            import(exported) {
                this.mode = exported.mode;
                this.allowedOptionIds = new Set(exported.allowedOptionIds);
                this.targetDurationSeconds = exported.targetDurationSeconds;
                this.troops = exported.troops;
                this.troopOrder = exported.troopOrder;
            }
        
        }
        
        ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_SANE_PERSON = 'sane_person';
        ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_ADDICT = 'addict';
        
        
        // CONCATENATED MODULE: ./src/Models/ScavengeTroopsAssigner.js
        
        
        
        class ScavengeTroopsAssigner_ScavengeTroopsAssigner {
        
            /**
             * @param {Map<number, ScavengeOption>} options 
             * @param {string[]} sendableTroopsTypes
             * @param troopUtil
             */
            constructor(options, sendableTroopTypes, troopUtil) {
                this.options = options;
                this.sendableTroopTypes = sendableTroopTypes;
                this.troopUtil = troopUtil;
                this.preferences = new ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences(sendableTroopTypes);
            }
        
            /**
             * @return TroopCounts
             */
            adjustAvailableTroopCounts(availableTroopCounts) {
                return availableTroopCounts
                    .filter(this.preferences.getAllowedTroopTypes())
                    .subtract(this.preferences.getReservedTroopCounts())
                    .zeroNegatives();
            }
        
            /**
             * @param {int[]} usableOptionIds 
             */
            adjustUsableOptionIds(usableOptionIds) {
                return usableOptionIds.filter(optionId => this.preferences.isOptionAllowed(optionId));
            }
        
            /**
             * @param {TroopCounts} availableTroopCounts 
             */
            areTroopsSufficient(availableTroopCounts) {
                availableTroopCounts = this.adjustAvailableTroopCounts(availableTroopCounts);
                return availableTroopCounts.populationUsed() >= 10;
            }
        
            /**
             * @param {int[]} usableOptionIds 
             * @param {TroopCounts} availableTroopCounts
             * @param {float} haulFactor
             */
            assignTroops(usableOptionIds, availableTroopCounts, haulFactor = 1.0) {
                usableOptionIds = this.adjustUsableOptionIds(usableOptionIds);
                availableTroopCounts = this.adjustAvailableTroopCounts(availableTroopCounts);
        
                if (this.preferences.mode === ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_ADDICT) {
                    return this.assignTroopsForAddict(usableOptionIds, availableTroopCounts, haulFactor);
                }
                return this.assignTroopsForSanePerson(usableOptionIds, availableTroopCounts, haulFactor);
            }
        
            /**
             * @param {number[]} usableOptionIds 
             * @param {TroopCounts} availableTroopCounts 
             * @param {float} haulFactor
             * @return {Map<number, TroopCounts>}
             */
            assignTroopsForSanePerson(usableOptionIds, availableTroopCounts, haulFactor = 1.0) {
                let assignedCountsByOption = new Map();
                let optionIds = [...this.options.keys()].reverse();
        
                for (let optionId of optionIds) {
                    let assignedCounts;
                    if (usableOptionIds.includes(optionId)) {
                        let option = this.options.get(optionId);
                        let targetCapacity = option.calcTargetCapacity(this.preferences.targetDurationSeconds);
                        assignedCounts = this.chunkTroopsToHaul(targetCapacity, availableTroopCounts, haulFactor);
                    } else {
                        assignedCounts = new TroopCounts();
                    }            
                    assignedCountsByOption.set(optionId, assignedCounts);
                    availableTroopCounts = availableTroopCounts.subtract(assignedCounts);
                }
        
                return assignedCountsByOption;
            }
        
            /**
             * @param {number[]} usableOptionIds 
             * @param {TroopCounts} availableTroopCounts 
             * @param {float} haulFactor
             * @return {Map<number, TroopCounts>}
             */
            assignTroopsForAddict(usableOptionIds, availableTroopCounts, haulFactor = 1.0) {
                let assignedCountsByOption = new Map();
                let optionIds = [...this.options.keys()].reverse();
        
                let availableCapacity = availableTroopCounts.carryCapacity() * haulFactor;
        
                let targetCapacitySum = 0;


                let prova=[[0, 0, 0, 0, 0], [1, 0, 1, 0, 0], [2, 0, 2, 0, 0], [3, 0, 3, 0, 0], [4, 0, 4, 0, 0], [5, 0, 5, 0, 0], [6, 0, 6, 0, 0], [7, 0, 7, 0, 0], [8, 0, 8, 0, 0], [9, 0, 9, 0, 0], [10, 0, 10, 0, 0], [11, 0, 11, 0, 0], [12, 0, 12, 0, 0], [13, 0, 13, 0, 0], [14, 0, 14, 0, 0], [15, 0, 15, 0, 0], [16, 0, 16, 0, 0], [17, 0, 17, 0, 0], [18, 0, 18, 0, 0], [19, 0, 19, 0, 0], [20, 0, 20, 0, 0], [21, 0, 21, 0, 0], [22, 0, 22, 0, 0], [23, 0, 23, 0, 0], [24, 0, 24, 0, 0], [25, 0, 25, 0, 0], [26, 0, 26, 0, 0], [27, 0, 27, 0, 0], [28, 0, 28, 0, 0], [29, 0, 29, 0, 0], [30, 0, 30, 0, 0], [31, 0, 31, 0, 0], [32, 0, 32, 0, 0], [33, 0, 33, 0, 0], [34, 0, 34, 0, 0], [35, 0, 35, 0, 0], [36, 0, 36, 0, 0], [37, 0, 37, 0, 0], [38, 0, 38, 0, 0], [39, 0, 39, 0, 0], [40, 0, 40, 0, 0], [41, 1, 40, 0, 0], [42, 1, 41, 0, 0], [43, 2, 41, 0, 0], [44, 2, 42, 0, 0], [45, 3, 42, 0, 0], [46, 3, 43, 0, 0], [47, 4, 43, 0, 0], [48, 4, 44, 0, 0], [49, 5, 44, 0, 0], [50, 5, 45, 0, 0], [51, 6, 45, 0, 0], [52, 6, 46, 0, 0], [53, 7, 46, 0, 0], [54, 7, 47, 0, 0], [55, 8, 47, 0, 0], [56, 8, 48, 0, 0], [57, 9, 48, 0, 0], [58, 9, 49, 0, 0], [59, 10, 49, 0, 0], [60, 10, 50, 0, 0], [61, 11, 50, 0, 0], [62, 12, 50, 0, 0], [63, 12, 51, 0, 0], [64, 13, 51, 0, 0], [65, 13, 52, 0, 0], [66, 14, 52, 0, 0], [67, 14, 53, 0, 0], [68, 15, 53, 0, 0], [69, 15, 54, 0, 0], [70, 16, 54, 0, 0], [71, 16, 55, 0, 0], [72, 17, 55, 0, 0], [73, 17, 56, 0, 0], [74, 18, 56, 0, 0], [75, 19, 56, 0, 0], [76, 19, 57, 0, 0], [77, 20, 57, 0, 0], [78, 20, 58, 0, 0], [79, 21, 58, 0, 0], [80, 21, 59, 0, 0], [81, 22, 59, 0, 0], [82, 22, 60, 0, 0], [83, 23, 60, 0, 0], [84, 24, 60, 0, 0], [85, 24, 61, 0, 0], [86, 25, 61, 0, 0], [87, 25, 62, 0, 0], [88, 26, 62, 0, 0], [89, 26, 63, 0, 0], [90, 27, 63, 0, 0], [91, 27, 64, 0, 0], [92, 28, 64, 0, 0], [93, 29, 64, 0, 0], [94, 29, 65, 0, 0], [95, 30, 65, 0, 0], [96, 30, 66, 0, 0], [97, 31, 66, 0, 0], [98, 31, 67, 0, 0], [99, 32, 67, 0, 0], [100, 32, 68, 0, 0], [101, 33, 68, 0, 0], [102, 33, 69, 0, 0], [103, 34, 69, 0, 0], [104, 35, 69, 0, 0], [105, 35, 70, 0, 0], [106, 36, 70, 0, 0], [107, 36, 71, 0, 0], [108, 37, 71, 0, 0], [109, 37, 72, 0, 0], [110, 38, 72, 0, 0], [111, 39, 72, 0, 0], [112, 39, 73, 0, 0], [113, 40, 73, 0, 0], [114, 40, 74, 0, 0], [115, 41, 74, 0, 0], [116, 41, 75, 0, 0], [117, 42, 75, 0, 0], [118, 42, 76, 0, 0], [119, 43, 76, 0, 0], [120, 44, 76, 0, 0], [121, 44, 77, 0, 0], [122, 45, 77, 0, 0], [123, 45, 78, 0, 0], [124, 46, 78, 0, 0], [125, 46, 79, 0, 0], [126, 47, 79, 0, 0], [127, 47, 80, 0, 0], [128, 48, 80, 0, 0], [129, 49, 80, 0, 0], [130, 49, 81, 0, 0], [131, 50, 81, 0, 0], [132, 50, 82, 0, 0], [133, 51, 82, 0, 0], [134, 51, 83, 0, 0], [135, 52, 83, 0, 0], [136, 52, 84, 0, 0], [137, 53, 84, 0, 0], [138, 54, 84, 0, 0], [139, 54, 85, 0, 0], [140, 55, 85, 0, 0], [141, 55, 86, 0, 0], [142, 56, 86, 0, 0], [143, 56, 87, 0, 0], [144, 57, 87, 0, 0], [145, 58, 87, 0, 0], [146, 58, 88, 0, 0], [147, 59, 88, 0, 0], [148, 59, 89, 0, 0], [149, 60, 89, 0, 0], [150, 60, 90, 0, 0], [151, 61, 90, 0, 0], [152, 61, 91, 0, 0], [153, 62, 91, 0, 0], [154, 63, 91, 0, 0], [155, 63, 92, 0, 0], [156, 64, 92, 0, 0], [157, 64, 93, 0, 0], [158, 65, 93, 0, 0], [159, 65, 94, 0, 0], [160, 66, 94, 0, 0], [161, 67, 94, 0, 0], [162, 67, 95, 0, 0], [163, 68, 95, 0, 0], [164, 68, 96, 0, 0], [165, 69, 96, 0, 0], [166, 69, 97, 0, 0], [167, 70, 97, 0, 0], [168, 70, 98, 0, 0], [169, 71, 98, 0, 0], [170, 72, 98, 0, 0], [171, 72, 99, 0, 0], [172, 73, 99, 0, 0], [173, 73, 100, 0, 0], [174, 74, 100, 0, 0], [175, 74, 101, 0, 0], [176, 75, 101, 0, 0], [177, 76, 101, 0, 0], [178, 76, 102, 0, 0], [179, 77, 102, 0, 0], [180, 77, 103, 0, 0], [181, 78, 103, 0, 0], [182, 78, 104, 0, 0], [183, 79, 104, 0, 0], [184, 79, 105, 0, 0], [185, 80, 105, 0, 0], [186, 81, 105, 0, 0], [187, 81, 106, 0, 0], [188, 82, 106, 0, 0], [189, 82, 107, 0, 0], [190, 83, 107, 0, 0], [191, 83, 108, 0, 0], [192, 84, 108, 0, 0], [193, 85, 108, 0, 0], [194, 85, 109, 0, 0], [195, 86, 109, 0, 0], [196, 86, 110, 0, 0], [197, 87, 110, 0, 0], [198, 87, 111, 0, 0], [199, 88, 111, 0, 0], [200, 88, 112, 0, 0], [201, 89, 112, 0, 0], [202, 90, 112, 0, 0], [203, 90, 113, 0, 0], [204, 91, 113, 0, 0], [205, 91, 114, 0, 0], [206, 92, 114, 0, 0], [207, 92, 115, 0, 0], [208, 93, 115, 0, 0], [209, 94, 115, 0, 0], [210, 94, 116, 0, 0], [211, 95, 116, 0, 0], [212, 95, 117, 0, 0], [213, 96, 117, 0, 0], [214, 96, 118, 0, 0], [215, 97, 118, 0, 0], [216, 97, 119, 0, 0], [217, 98, 119, 0, 0], [218, 99, 119, 0, 0], [219, 99, 120, 0, 0], [220, 100, 120, 0, 0], [221, 100, 121, 0, 0], [222, 101, 121, 0, 0], [223, 101, 122, 0, 0], [224, 102, 122, 0, 0], [225, 103, 122, 0, 0], [226, 103, 123, 0, 0], [227, 104, 123, 0, 0], [228, 104, 124, 0, 0], [229, 105, 124, 0, 0], [230, 105, 125, 0, 0], [231, 106, 125, 0, 0], [232, 106, 126, 0, 0], [233, 107, 126, 0, 0], [234, 108, 126, 0, 0], [235, 108, 127, 0, 0], [236, 109, 127, 0, 0], [237, 109, 128, 0, 0], [238, 110, 128, 0, 0], [239, 110, 129, 0, 0], [240, 111, 129, 0, 0], [241, 112, 129, 0, 0], [242, 112, 130, 0, 0], [243, 113, 130, 0, 0], [244, 113, 131, 0, 0], [245, 114, 131, 0, 0], [246, 114, 132, 0, 0], [247, 115, 132, 0, 0], [248, 116, 132, 0, 0], [249, 116, 133, 0, 0], [250, 117, 133, 0, 0], [251, 117, 134, 0, 0], [252, 118, 134, 0, 0], [253, 118, 135, 0, 0], [254, 119, 135, 0, 0], [255, 119, 136, 0, 0], [256, 120, 136, 0, 0], [257, 121, 136, 0, 0], [258, 121, 137, 0, 0], [259, 122, 137, 0, 0], [260, 122, 138, 0, 0], [261, 123, 138, 0, 0], [262, 123, 139, 0, 0], [263, 124, 139, 0, 0], [264, 125, 139, 0, 0], [265, 125, 140, 0, 0], [266, 126, 140, 0, 0], [267, 126, 141, 0, 0], [268, 127, 141, 0, 0], [269, 127, 142, 0, 0], [270, 128, 142, 0, 0], [271, 128, 143, 0, 0], [272, 129, 143, 0, 0], [273, 130, 143, 0, 0], [274, 130, 144, 0, 0], [275, 131, 144, 0, 0], [276, 131, 145, 0, 0], [277, 132, 145, 0, 0], [278, 132, 146, 0, 0], [279, 133, 146, 0, 0], [280, 134, 146, 0, 0], [281, 134, 147, 0, 0], [282, 135, 147, 0, 0], [283, 135, 148, 0, 0], [284, 136, 148, 0, 0], [285, 136, 149, 0, 0], [286, 137, 149, 0, 0], [287, 138, 149, 0, 0], [288, 138, 150, 0, 0], [289, 139, 150, 0, 0], [290, 139, 151, 0, 0], [291, 140, 151, 0, 0], [292, 140, 152, 0, 0], [293, 141, 152, 0, 0], [294, 141, 153, 0, 0], [295, 142, 153, 0, 0], [296, 143, 153, 0, 0], [297, 143, 154, 0, 0], [298, 144, 154, 0, 0], [299, 144, 155, 0, 0], [300, 145, 155, 0, 0], [301, 145, 156, 0, 0], [302, 146, 156, 0, 0], [303, 147, 156, 0, 0], [304, 147, 157, 0, 0], [305, 148, 157, 0, 0], [306, 148, 158, 0, 0], [307, 149, 158, 0, 0], [308, 149, 159, 0, 0], [309, 150, 159, 0, 0], [310, 150, 160, 0, 0], [311, 151, 160, 0, 0], [312, 152, 160, 0, 0], [313, 152, 161, 0, 0], [314, 153, 161, 0, 0], [315, 153, 162, 0, 0], [316, 154, 162, 0, 0], [317, 154, 163, 0, 0], [318, 155, 163, 0, 0], [319, 156, 163, 0, 0], [320, 156, 164, 0, 0], [321, 157, 164, 0, 0], [322, 157, 165, 0, 0], [323, 158, 165, 0, 0], [324, 158, 166, 0, 0], [325, 159, 166, 0, 0], [326, 159, 167, 0, 0], [327, 160, 167, 0, 0], [328, 161, 167, 0, 0], [329, 161, 168, 0, 0], [330, 162, 168, 0, 0], [331, 162, 169, 0, 0], [332, 163, 169, 0, 0], [333, 163, 170, 0, 0], [334, 164, 170, 0, 0], [335, 165, 170, 0, 0], [336, 165, 171, 0, 0], [337, 166, 171, 0, 0], [338, 166, 172, 0, 0], [339, 167, 172, 0, 0], [340, 167, 173, 0, 0], [341, 168, 173, 0, 0], [342, 169, 173, 0, 0], [343, 169, 174, 0, 0], [344, 170, 174, 0, 0], [345, 170, 175, 0, 0], [346, 171, 175, 0, 0], [347, 171, 176, 0, 0], [348, 172, 176, 0, 0], [349, 172, 177, 0, 0], [350, 173, 177, 0, 0], [351, 174, 177, 0, 0], [352, 174, 178, 0, 0], [353, 175, 178, 0, 0], [354, 175, 179, 0, 0], [355, 176, 179, 0, 0], [356, 176, 180, 0, 0], [357, 177, 180, 0, 0], [358, 178, 180, 0, 0], [359, 178, 181, 0, 0], [360, 179, 181, 0, 0], [361, 179, 182, 0, 0], [362, 180, 182, 0, 0], [363, 180, 183, 0, 0], [364, 181, 183, 0, 0], [365, 181, 184, 0, 0], [366, 182, 184, 0, 0], [367, 183, 184, 0, 0], [368, 183, 185, 0, 0], [369, 184, 185, 0, 0], [370, 184, 186, 0, 0], [371, 185, 186, 0, 0], [372, 185, 187, 0, 0], [373, 186, 187, 0, 0], [374, 187, 187, 0, 0], [375, 187, 188, 0, 0], [376, 188, 188, 0, 0], [377, 188, 189, 0, 0], [378, 189, 189, 0, 0], [379, 189, 190, 0, 0], [380, 190, 190, 0, 0], [381, 190, 191, 0, 0], [382, 191, 191, 0, 0], [383, 192, 191, 0, 0], [384, 192, 192, 0, 0], [385, 193, 192, 0, 0], [386, 193, 193, 0, 0], [387, 194, 193, 0, 0], [388, 194, 194, 0, 0], [389, 195, 194, 0, 0], [390, 196, 194, 0, 0], [391, 196, 195, 0, 0], [392, 197, 195, 0, 0], [393, 197, 196, 0, 0], [394, 198, 196, 0, 0], [395, 198, 197, 0, 0], [396, 199, 197, 0, 0], [397, 199, 198, 0, 0], [398, 200, 198, 0, 0], [399, 201, 198, 0, 0], [400, 201, 199, 0, 0], [401, 202, 199, 0, 0], [402, 202, 200, 0, 0], [403, 203, 200, 0, 0], [404, 203, 201, 0, 0], [405, 204, 201, 0, 0], [406, 205, 201, 0, 0], [407, 205, 202, 0, 0], [408, 206, 202, 0, 0], [409, 206, 203, 0, 0], [410, 207, 203, 0, 0], [411, 207, 204, 0, 0], [412, 208, 204, 0, 0], [413, 208, 205, 0, 0], [414, 209, 205, 0, 0], [415, 210, 205, 0, 0], [416, 210, 206, 0, 0], [417, 211, 206, 0, 0], [418, 211, 207, 0, 0], [419, 212, 207, 0, 0], [420, 212, 208, 0, 0], [421, 213, 208, 0, 0], [422, 214, 208, 0, 0], [423, 214, 209, 0, 0], [424, 215, 209, 0, 0], [425, 215, 210, 0, 0], [426, 216, 210, 0, 0], [427, 216, 211, 0, 0], [428, 217, 211, 0, 0], [429, 217, 212, 0, 0], [430, 218, 212, 0, 0], [431, 219, 212, 0, 0], [432, 219, 213, 0, 0], [433, 220, 213, 0, 0], [434, 220, 214, 0, 0], [435, 221, 214, 0, 0], [436, 221, 215, 0, 0], [437, 222, 215, 0, 0], [438, 223, 215, 0, 0], [439, 223, 216, 0, 0], [440, 224, 216, 0, 0], [441, 224, 217, 0, 0], [442, 225, 217, 0, 0], [443, 225, 218, 0, 0], [444, 226, 218, 0, 0], [445, 226, 219, 0, 0], [446, 227, 219, 0, 0], [447, 228, 219, 0, 0], [448, 228, 220, 0, 0], [449, 229, 220, 0, 0], [450, 229, 221, 0, 0], [451, 230, 221, 0, 0], [452, 230, 222, 0, 0], [453, 231, 222, 0, 0], [454, 231, 223, 0, 0], [455, 232, 223, 0, 0], [456, 233, 223, 0, 0], [457, 233, 224, 0, 0], [458, 234, 224, 0, 0], [459, 234, 225, 0, 0], [460, 235, 225, 0, 0], [461, 235, 226, 0, 0], [462, 236, 226, 0, 0], [463, 237, 226, 0, 0], [464, 237, 227, 0, 0], [465, 238, 227, 0, 0], [466, 238, 228, 0, 0], [467, 239, 228, 0, 0], [468, 239, 229, 0, 0], [469, 240, 229, 0, 0], [470, 240, 230, 0, 0], [471, 241, 230, 0, 0], [472, 242, 230, 0, 0], [473, 242, 231, 0, 0], [474, 243, 231, 0, 0], [475, 243, 232, 0, 0], [476, 244, 232, 0, 0], [477, 244, 233, 0, 0], [478, 245, 233, 0, 0], [479, 246, 233, 0, 0], [480, 246, 234, 0, 0], [481, 247, 234, 0, 0], [482, 247, 235, 0, 0], [483, 248, 235, 0, 0], [484, 248, 236, 0, 0], [485, 249, 236, 0, 0], [486, 249, 237, 0, 0], [487, 250, 237, 0, 0], [488, 251, 237, 0, 0], [489, 251, 238, 0, 0], [490, 252, 238, 0, 0], [491, 252, 239, 0, 0], [492, 253, 239, 0, 0], [493, 253, 240, 0, 0], [494, 254, 240, 0, 0], [495, 254, 241, 0, 0], [496, 255, 241, 0, 0], [497, 256, 241, 0, 0], [498, 256, 242, 0, 0], [499, 257, 242, 0, 0], [500, 257, 243, 0, 0], [501, 258, 243, 0, 0], [502, 258, 244, 0, 0], [503, 259, 244, 0, 0], [504, 260, 244, 0, 0], [505, 260, 245, 0, 0], [506, 261, 245, 0, 0], [507, 261, 246, 0, 0], [508, 262, 246, 0, 0], [509, 262, 247, 0, 0], [510, 263, 247, 0, 0], [511, 263, 248, 0, 0], [512, 264, 248, 0, 0], [513, 265, 248, 0, 0], [514, 265, 249, 0, 0], [515, 266, 249, 0, 0], [516, 266, 250, 0, 0], [517, 267, 250, 0, 0], [518, 267, 251, 0, 0], [519, 268, 251, 0, 0], [520, 269, 251, 0, 0], [521, 269, 252, 0, 0], [522, 270, 252, 0, 0], [523, 270, 253, 0, 0], [524, 271, 253, 0, 0], [525, 271, 254, 0, 0], [526, 272, 254, 0, 0], [527, 272, 255, 0, 0], [528, 273, 255, 0, 0], [529, 274, 255, 0, 0], [530, 274, 256, 0, 0], [531, 275, 256, 0, 0], [532, 275, 257, 0, 0], [533, 276, 257, 0, 0], [534, 276, 258, 0, 0], [535, 277, 258, 0, 0], [536, 277, 259, 0, 0], [537, 278, 259, 0, 0], [538, 279, 259, 0, 0], [539, 279, 260, 0, 0], [540, 280, 260, 0, 0], [541, 280, 261, 0, 0], [542, 281, 261, 0, 0], [543, 281, 262, 0, 0], [544, 282, 262, 0, 0], [545, 282, 263, 0, 0], [546, 283, 263, 0, 0], [547, 284, 263, 0, 0], [548, 284, 264, 0, 0], [549, 285, 264, 0, 0], [550, 285, 265, 0, 0], [551, 286, 265, 0, 0], [552, 286, 266, 0, 0], [553, 287, 266, 0, 0], [554, 288, 266, 0, 0], [555, 288, 267, 0, 0], [556, 289, 267, 0, 0], [557, 289, 268, 0, 0], [558, 290, 268, 0, 0], [559, 290, 269, 0, 0], [560, 291, 269, 0, 0], [561, 291, 270, 0, 0], [562, 292, 270, 0, 0], [563, 293, 270, 0, 0], [564, 293, 271, 0, 0], [565, 294, 271, 0, 0], [566, 294, 272, 0, 0], [567, 295, 272, 0, 0], [568, 295, 273, 0, 0], [569, 296, 273, 0, 0], [570, 296, 274, 0, 0], [571, 297, 274, 0, 0], [572, 298, 274, 0, 0], [573, 298, 275, 0, 0], [574, 299, 275, 0, 0], [575, 299, 276, 0, 0], [576, 300, 276, 0, 0], [577, 300, 277, 0, 0], [578, 301, 277, 0, 0], [579, 302, 277, 0, 0], [580, 302, 278, 0, 0], [581, 303, 278, 0, 0], [582, 303, 279, 0, 0], [583, 304, 279, 0, 0], [584, 304, 280, 0, 0], [585, 305, 280, 0, 0], [586, 305, 281, 0, 0], [587, 306, 281, 0, 0], [588, 307, 281, 0, 0], [589, 307, 282, 0, 0], [590, 308, 282, 0, 0], [591, 308, 283, 0, 0], [592, 309, 283, 0, 0], [593, 309, 284, 0, 0], [594, 310, 284, 0, 0], [595, 310, 285, 0, 0], [596, 311, 285, 0, 0], [597, 312, 285, 0, 0], [598, 312, 286, 0, 0], [599, 313, 286, 0, 0], [600, 313, 287, 0, 0], [601, 314, 287, 0, 0], [602, 314, 288, 0, 0], [603, 315, 288, 0, 0], [604, 315, 289, 0, 0], [605, 316, 289, 0, 0], [606, 317, 289, 0, 0], [607, 317, 290, 0, 0], [608, 318, 290, 0, 0], [609, 318, 291, 0, 0], [610, 319, 291, 0, 0], [611, 319, 292, 0, 0], [612, 320, 292, 0, 0], [613, 320, 293, 0, 0], [614, 321, 293, 0, 0], [615, 322, 293, 0, 0], [616, 322, 294, 0, 0], [617, 323, 294, 0, 0], [618, 323, 295, 0, 0], [619, 324, 295, 0, 0], [620, 324, 296, 0, 0], [621, 325, 296, 0, 0], [622, 326, 296, 0, 0], [623, 326, 297, 0, 0], [624, 327, 297, 0, 0], [625, 327, 298, 0, 0], [626, 328, 298, 0, 0], [627, 328, 299, 0, 0], [628, 329, 299, 0, 0], [629, 329, 300, 0, 0], [630, 330, 300, 0, 0], [631, 331, 300, 0, 0], [632, 331, 301, 0, 0], [633, 332, 301, 0, 0], [634, 332, 302, 0, 0], [635, 333, 302, 0, 0], [636, 333, 303, 0, 0], [637, 334, 303, 0, 0], [638, 334, 304, 0, 0], [639, 335, 304, 0, 0], [640, 336, 304, 0, 0], [641, 336, 305, 0, 0], [642, 337, 305, 0, 0], [643, 337, 306, 0, 0], [644, 338, 306, 0, 0], [645, 338, 307, 0, 0], [646, 339, 307, 0, 0], [647, 339, 308, 0, 0], [648, 340, 308, 0, 0], [649, 341, 308, 0, 0], [650, 341, 309, 0, 0], [651, 342, 309, 0, 0], [652, 342, 310, 0, 0], [653, 343, 310, 0, 0], [654, 343, 311, 0, 0], [655, 344, 311, 0, 0], [656, 344, 312, 0, 0], [657, 345, 312, 0, 0], [658, 346, 312, 0, 0], [659, 346, 313, 0, 0], [660, 347, 313, 0, 0], [661, 347, 314, 0, 0], [662, 348, 314, 0, 0], [663, 348, 315, 0, 0], [664, 349, 315, 0, 0], [665, 349, 316, 0, 0], [666, 350, 316, 0, 0], [667, 351, 316, 0, 0], [668, 351, 317, 0, 0], [669, 352, 317, 0, 0], [670, 352, 318, 0, 0], [671, 353, 318, 0, 0], [672, 353, 319, 0, 0], [673, 354, 319, 0, 0], [674, 354, 320, 0, 0], [675, 355, 320, 0, 0], [676, 356, 320, 0, 0], [677, 356, 321, 0, 0], [678, 357, 321, 0, 0], [679, 357, 322, 0, 0], [680, 358, 322, 0, 0], [681, 358, 323, 0, 0], [682, 359, 323, 0, 0], [683, 360, 323, 0, 0], [684, 360, 324, 0, 0], [685, 361, 324, 0, 0], [686, 361, 325, 0, 0], [687, 362, 325, 0, 0], [688, 362, 326, 0, 0], [689, 363, 326, 0, 0], [690, 363, 327, 0, 0], [691, 364, 327, 0, 0], [692, 365, 327, 0, 0], [693, 365, 328, 0, 0], [694, 366, 328, 0, 0], [695, 366, 329, 0, 0], [696, 367, 329, 0, 0], [697, 367, 330, 0, 0], [698, 368, 330, 0, 0], [699, 368, 331, 0, 0], [700, 369, 331, 0, 0], [701, 370, 331, 0, 0], [702, 370, 332, 0, 0], [703, 371, 332, 0, 0], [704, 371, 333, 0, 0], [705, 372, 333, 0, 0], [706, 372, 334, 0, 0], [707, 373, 334, 0, 0], [708, 373, 335, 0, 0], [709, 374, 335, 0, 0], [710, 375, 335, 0, 0], [711, 375, 336, 0, 0], [712, 376, 336, 0, 0], [713, 376, 337, 0, 0], [714, 377, 337, 0, 0], [715, 377, 338, 0, 0], [716, 378, 338, 0, 0], [717, 378, 339, 0, 0], [718, 379, 339, 0, 0], [719, 380, 339, 0, 0], [720, 380, 340, 0, 0], [721, 381, 340, 0, 0], [722, 381, 341, 0, 0], [723, 382, 341, 0, 0], [724, 382, 342, 0, 0], [725, 383, 342, 0, 0], [726, 383, 343, 0, 0], [727, 384, 343, 0, 0], [728, 385, 343, 0, 0], [729, 385, 344, 0, 0], [730, 386, 344, 0, 0], [731, 386, 345, 0, 0], [732, 387, 345, 0, 0], [733, 387, 346, 0, 0], [734, 388, 346, 0, 0], [735, 388, 347, 0, 0], [736, 389, 347, 0, 0], [737, 390, 347, 0, 0], [738, 390, 348, 0, 0], [739, 391, 348, 0, 0], [740, 391, 349, 0, 0], [741, 392, 349, 0, 0], [742, 392, 350, 0, 0], [743, 393, 350, 0, 0], [744, 393, 351, 0, 0], [745, 394, 351, 0, 0], [746, 395, 351, 0, 0], [747, 395, 352, 0, 0], [748, 396, 352, 0, 0], [749, 396, 353, 0, 0], [750, 397, 353, 0, 0], [751, 397, 354, 0, 0], [752, 398, 354, 0, 0], [753, 398, 355, 0, 0], [754, 399, 355, 0, 0], [755, 400, 355, 0, 0], [756, 400, 356, 0, 0], [757, 401, 356, 0, 0], [758, 401, 357, 0, 0], [759, 402, 357, 0, 0], [760, 402, 358, 0, 0], [761, 403, 358, 0, 0], [762, 403, 359, 0, 0], [763, 404, 359, 0, 0], [764, 405, 359, 0, 0], [765, 405, 360, 0, 0], [766, 406, 360, 0, 0], [767, 406, 361, 0, 0], [768, 407, 361, 0, 0], [769, 407, 362, 0, 0], [770, 408, 362, 0, 0], [771, 408, 363, 0, 0], [772, 409, 363, 0, 0], [773, 409, 364, 0, 0], [774, 410, 364, 0, 0], [775, 411, 364, 0, 0], [776, 411, 365, 0, 0], [777, 412, 365, 0, 0], [778, 412, 366, 0, 0], [779, 413, 366, 0, 0], [780, 413, 367, 0, 0], [781, 414, 367, 0, 0], [782, 414, 368, 0, 0], [783, 415, 368, 0, 0], [784, 416, 368, 0, 0], [785, 416, 369, 0, 0], [786, 417, 369, 0, 0], [787, 417, 370, 0, 0], [788, 418, 370, 0, 0], [789, 418, 371, 0, 0], [790, 419, 371, 0, 0], [791, 419, 372, 0, 0], [792, 420, 372, 0, 0], [793, 421, 372, 0, 0], [794, 421, 373, 0, 0], [795, 422, 373, 0, 0], [796, 422, 374, 0, 0], [797, 423, 374, 0, 0], [798, 423, 375, 0, 0], [799, 424, 375, 0, 0], [800, 424, 376, 0, 0], [801, 425, 376, 0, 0], [802, 426, 376, 0, 0], [803, 426, 377, 0, 0], [804, 427, 377, 0, 0], [805, 427, 378, 0, 0], [806, 428, 378, 0, 0], [807, 428, 379, 0, 0], [808, 429, 379, 0, 0], [809, 429, 380, 0, 0], [810, 430, 380, 0, 0], [811, 431, 380, 0, 0], [812, 431, 381, 0, 0], [813, 432, 381, 0, 0], [814, 432, 382, 0, 0], [815, 433, 382, 0, 0], [816, 433, 383, 0, 0], [817, 434, 383, 0, 0], [818, 434, 384, 0, 0], [819, 435, 384, 0, 0], [820, 436, 384, 0, 0], [821, 436, 385, 0, 0], [822, 437, 385, 0, 0], [823, 437, 386, 0, 0], [824, 438, 386, 0, 0], [825, 438, 387, 0, 0], [826, 439, 387, 0, 0], [827, 439, 388, 0, 0], [828, 440, 388, 0, 0], [829, 441, 388, 0, 0], [830, 441, 389, 0, 0], [831, 442, 389, 0, 0], [832, 442, 390, 0, 0], [833, 443, 390, 0, 0], [834, 443, 391, 0, 0], [835, 444, 391, 0, 0], [836, 444, 392, 0, 0], [837, 445, 392, 0, 0], [838, 445, 393, 0, 0], [839, 446, 393, 0, 0], [840, 447, 393, 0, 0], [841, 447, 394, 0, 0], [842, 448, 394, 0, 0], [843, 448, 395, 0, 0], [844, 449, 395, 0, 0], [845, 449, 396, 0, 0], [846, 450, 396, 0, 0], [847, 450, 397, 0, 0], [848, 451, 397, 0, 0], [849, 452, 397, 0, 0], [850, 452, 398, 0, 0], [851, 453, 398, 0, 0], [852, 453, 399, 0, 0], [853, 454, 399, 0, 0], [854, 454, 400, 0, 0], [855, 455, 400, 0, 0], [856, 455, 401, 0, 0], [857, 456, 401, 0, 0], [858, 457, 401, 0, 0], [859, 457, 402, 0, 0], [860, 458, 402, 0, 0], [861, 458, 403, 0, 0], [862, 459, 403, 0, 0], [863, 459, 404, 0, 0], [864, 460, 404, 0, 0], [865, 460, 405, 0, 0], [866, 461, 405, 0, 0], [867, 462, 405, 0, 0], [868, 462, 406, 0, 0], [869, 463, 406, 0, 0], [870, 463, 407, 0, 0], [871, 464, 407, 0, 0], [872, 464, 408, 0, 0], [873, 465, 408, 0, 0], [874, 465, 409, 0, 0], [875, 466, 409, 0, 0], [876, 467, 409, 0, 0], [877, 467, 410, 0, 0], [878, 468, 410, 0, 0], [879, 468, 411, 0, 0], [880, 469, 411, 0, 0], [881, 469, 412, 0, 0], [882, 470, 412, 0, 0], [883, 470, 413, 0, 0], [884, 471, 413, 0, 0], [885, 471, 414, 0, 0], [886, 472, 414, 0, 0], [887, 473, 414, 0, 0], [888, 473, 415, 0, 0], [889, 474, 415, 0, 0], [890, 474, 416, 0, 0], [891, 475, 416, 0, 0], [892, 475, 417, 0, 0], [893, 476, 417, 0, 0], [894, 476, 418, 0, 0], [895, 477, 418, 0, 0], [896, 478, 418, 0, 0], [897, 478, 419, 0, 0], [898, 479, 419, 0, 0], [899, 479, 420, 0, 0], [900, 480, 420, 0, 0], [901, 480, 421, 0, 0], [902, 481, 421, 0, 0], [903, 481, 422, 0, 0], [904, 482, 422, 0, 0], [905, 483, 422, 0, 0], [906, 483, 423, 0, 0], [907, 484, 423, 0, 0], [908, 484, 424, 0, 0], [909, 485, 424, 0, 0], [910, 485, 425, 0, 0], [911, 486, 425, 0, 0], [912, 486, 426, 0, 0], [913, 487, 426, 0, 0], [914, 487, 427, 0, 0], [915, 488, 427, 0, 0], [916, 489, 427, 0, 0], [917, 489, 428, 0, 0], [918, 490, 428, 0, 0], [919, 490, 429, 0, 0], [920, 491, 429, 0, 0], [921, 491, 430, 0, 0], [922, 492, 430, 0, 0], [923, 492, 431, 0, 0], [924, 493, 431, 0, 0], [925, 494, 431, 0, 0], [926, 494, 432, 0, 0], [927, 495, 432, 0, 0], [928, 495, 433, 0, 0], [929, 496, 433, 0, 0], [930, 496, 434, 0, 0], [931, 497, 434, 0, 0], [932, 497, 435, 0, 0], [933, 498, 435, 0, 0], [934, 499, 435, 0, 0], [935, 499, 436, 0, 0], [936, 500, 436, 0, 0], [937, 500, 437, 0, 0], [938, 501, 437, 0, 0], [939, 501, 438, 0, 0], [940, 502, 438, 0, 0], [941, 502, 439, 0, 0], [942, 503, 439, 0, 0], [943, 503, 440, 0, 0], [944, 504, 440, 0, 0], [945, 505, 440, 0, 0], [946, 505, 441, 0, 0], [947, 506, 441, 0, 0], [948, 506, 442, 0, 0], [949, 507, 442, 0, 0], [950, 507, 443, 0, 0], [951, 508, 443, 0, 0], [952, 508, 444, 0, 0], [953, 509, 444, 0, 0], [954, 510, 444, 0, 0], [955, 510, 445, 0, 0], [956, 511, 445, 0, 0], [957, 511, 446, 0, 0], [958, 512, 446, 0, 0], [959, 512, 447, 0, 0], [960, 513, 447, 0, 0], [961, 513, 448, 0, 0], [962, 514, 448, 0, 0], [963, 514, 449, 0, 0], [964, 515, 449, 0, 0], [965, 516, 449, 0, 0], [966, 516, 450, 0, 0], [967, 517, 450, 0, 0], [968, 517, 451, 0, 0], [969, 518, 451, 0, 0], [970, 518, 452, 0, 0], [971, 519, 452, 0, 0], [972, 519, 453, 0, 0], [973, 520, 453, 0, 0], [974, 521, 453, 0, 0], [975, 521, 454, 0, 0], [976, 522, 454, 0, 0], [977, 522, 455, 0, 0], [978, 523, 455, 0, 0], [979, 523, 456, 0, 0], [980, 524, 456, 0, 0], [981, 524, 457, 0, 0], [982, 525, 457, 0, 0], [983, 525, 458, 0, 0], [984, 526, 458, 0, 0], [985, 527, 458, 0, 0], [986, 527, 459, 0, 0], [987, 528, 459, 0, 0], [988, 528, 460, 0, 0], [989, 529, 460, 0, 0], [990, 529, 461, 0, 0], [991, 530, 461, 0, 0], [992, 530, 462, 0, 0], [993, 531, 462, 0, 0], [994, 532, 462, 0, 0], [995, 532, 463, 0, 0], [996, 533, 463, 0, 0], [997, 533, 464, 0, 0], [998, 534, 464, 0, 0], [999, 534, 465, 0, 0], [1000, 535, 465, 0, 0], [1001, 535, 466, 0, 0], [1002, 536, 466, 0, 0], [1003, 536, 467, 0, 0], [1004, 537, 467, 0, 0], [1005, 538, 467, 0, 0], [1006, 538, 468, 0, 0], [1007, 539, 468, 0, 0], [1008, 539, 469, 0, 0], [1009, 540, 469, 0, 0], [1010, 540, 470, 0, 0], [1011, 541, 470, 0, 0], [1012, 541, 471, 0, 0], [1013, 542, 471, 0, 0], [1014, 543, 471, 0, 0], [1015, 543, 472, 0, 0], [1016, 544, 472, 0, 0], [1017, 544, 473, 0, 0], [1018, 545, 473, 0, 0], [1019, 545, 474, 0, 0], [1020, 546, 474, 0, 0], [1021, 546, 475, 0, 0], [1022, 547, 475, 0, 0], [1023, 547, 476, 0, 0], [1024, 548, 476, 0, 0], [1025, 549, 476, 0, 0], [1026, 549, 477, 0, 0], [1027, 550, 477, 0, 0], [1028, 550, 478, 0, 0], [1029, 551, 478, 0, 0], [1030, 551, 479, 0, 0], [1031, 552, 479, 0, 0], [1032, 552, 480, 0, 0], [1033, 553, 480, 0, 0], [1034, 554, 480, 0, 0], [1035, 554, 481, 0, 0], [1036, 555, 481, 0, 0], [1037, 555, 482, 0, 0], [1038, 556, 482, 0, 0], [1039, 556, 483, 0, 0], [1040, 557, 483, 0, 0], [1041, 557, 484, 0, 0], [1042, 558, 484, 0, 0], [1043, 558, 485, 0, 0], [1044, 559, 485, 0, 0], [1045, 560, 485, 0, 0], [1046, 560, 486, 0, 0], [1047, 561, 486, 0, 0], [1048, 561, 487, 0, 0], [1049, 562, 487, 0, 0], [1050, 562, 488, 0, 0], [1051, 563, 488, 0, 0], [1052, 563, 489, 0, 0], [1053, 564, 489, 0, 0], [1054, 564, 490, 0, 0], [1055, 565, 490, 0, 0], [1056, 566, 490, 0, 0], [1057, 566, 491, 0, 0], [1058, 567, 491, 0, 0], [1059, 567, 492, 0, 0], [1060, 568, 492, 0, 0], [1061, 568, 493, 0, 0], [1062, 569, 493, 0, 0], [1063, 569, 494, 0, 0], [1064, 570, 494, 0, 0], [1065, 571, 494, 0, 0], [1066, 571, 495, 0, 0], [1067, 572, 495, 0, 0], [1068, 572, 496, 0, 0], [1069, 573, 496, 0, 0], [1070, 573, 497, 0, 0], [1071, 574, 497, 0, 0], [1072, 574, 498, 0, 0], [1073, 575, 498, 0, 0], [1074, 575, 499, 0, 0], [1075, 576, 499, 0, 0], [1076, 577, 499, 0, 0], [1077, 577, 500, 0, 0], [1078, 578, 500, 0, 0], [1079, 578, 501, 0, 0], [1080, 579, 501, 0, 0], [1081, 579, 502, 0, 0], [1082, 580, 502, 0, 0], [1083, 580, 503, 0, 0], [1084, 581, 503, 0, 0], [1085, 581, 504, 0, 0], [1086, 582, 504, 0, 0], [1087, 583, 504, 0, 0], [1088, 583, 505, 0, 0], [1089, 584, 505, 0, 0], [1090, 584, 506, 0, 0], [1091, 585, 506, 0, 0], [1092, 585, 507, 0, 0], [1093, 586, 507, 0, 0], [1094, 586, 508, 0, 0], [1095, 587, 508, 0, 0], [1096, 588, 508, 0, 0], [1097, 588, 509, 0, 0], [1098, 589, 509, 0, 0], [1099, 589, 510, 0, 0], [1100, 590, 510, 0, 0], [1101, 590, 511, 0, 0], [1102, 591, 511, 0, 0], [1103, 591, 512, 0, 0], [1104, 592, 512, 0, 0], [1105, 592, 513, 0, 0], [1106, 593, 513, 0, 0], [1107, 594, 513, 0, 0], [1108, 594, 514, 0, 0], [1109, 595, 514, 0, 0], [1110, 595, 515, 0, 0], [1111, 596, 515, 0, 0], [1112, 596, 516, 0, 0], [1113, 597, 516, 0, 0], [1114, 597, 517, 0, 0], [1115, 598, 517, 0, 0], [1116, 598, 518, 0, 0], [1117, 599, 518, 0, 0], [1118, 600, 518, 0, 0], [1119, 600, 519, 0, 0], [1120, 601, 519, 0, 0], [1121, 601, 520, 0, 0], [1122, 602, 520, 0, 0], [1123, 602, 521, 0, 0], [1124, 603, 521, 0, 0], [1125, 603, 522, 0, 0], [1126, 604, 522, 0, 0], [1127, 604, 523, 0, 0], [1128, 605, 523, 0, 0], [1129, 606, 523, 0, 0], [1130, 606, 524, 0, 0], [1131, 607, 524, 0, 0], [1132, 607, 525, 0, 0], [1133, 608, 525, 0, 0], [1134, 608, 526, 0, 0], [1135, 609, 526, 0, 0], [1136, 609, 527, 0, 0], [1137, 610, 527, 0, 0], [1138, 611, 527, 0, 0], [1139, 611, 528, 0, 0], [1140, 612, 528, 0, 0], [1141, 612, 529, 0, 0], [1142, 613, 529, 0, 0], [1143, 613, 530, 0, 0], [1144, 614, 530, 0, 0], [1145, 614, 531, 0, 0], [1146, 615, 531, 0, 0], [1147, 615, 532, 0, 0], [1148, 616, 532, 0, 0], [1149, 617, 532, 0, 0], [1150, 617, 533, 0, 0], [1151, 618, 533, 0, 0], [1152, 618, 534, 0, 0], [1153, 619, 534, 0, 0], [1154, 619, 535, 0, 0], [1155, 620, 535, 0, 0], [1156, 620, 536, 0, 0], [1157, 621, 536, 0, 0], [1158, 621, 537, 0, 0], [1159, 622, 537, 0, 0], [1160, 623, 537, 0, 0], [1161, 623, 538, 0, 0], [1162, 624, 538, 0, 0], [1163, 624, 539, 0, 0], [1164, 625, 539, 0, 0], [1165, 625, 540, 0, 0], [1166, 626, 540, 0, 0], [1167, 626, 541, 0, 0], [1168, 627, 541, 0, 0], [1169, 627, 542, 0, 0], [1170, 628, 542, 0, 0], [1171, 629, 542, 0, 0], [1172, 629, 543, 0, 0], [1173, 630, 543, 0, 0], [1174, 630, 544, 0, 0], [1175, 631, 544, 0, 0], [1176, 631, 545, 0, 0], [1177, 632, 545, 0, 0], [1178, 632, 546, 0, 0], [1179, 633, 546, 0, 0], [1180, 633, 547, 0, 0], [1181, 634, 547, 0, 0], [1182, 635, 547, 0, 0], [1183, 635, 548, 0, 0], [1184, 636, 548, 0, 0], [1185, 636, 549, 0, 0], [1186, 637, 549, 0, 0], [1187, 637, 550, 0, 0], [1188, 638, 550, 0, 0], [1189, 638, 551, 0, 0], [1190, 639, 551, 0, 0], [1191, 639, 552, 0, 0], [1192, 640, 552, 0, 0], [1193, 641, 552, 0, 0], [1194, 641, 553, 0, 0], [1195, 642, 553, 0, 0], [1196, 642, 554, 0, 0], [1197, 643, 554, 0, 0], [1198, 643, 555, 0, 0], [1199, 644, 555, 0, 0], [1200, 644, 556, 0, 0], [1201, 645, 556, 0, 0], [1202, 645, 557, 0, 0], [1203, 646, 557, 0, 0], [1204, 647, 557, 0, 0], [1205, 647, 558, 0, 0], [1206, 648, 558, 0, 0], [1207, 648, 559, 0, 0], [1208, 649, 559, 0, 0], [1209, 649, 560, 0, 0], [1210, 650, 560, 0, 0], [1211, 650, 561, 0, 0], [1212, 651, 561, 0, 0], [1213, 651, 562, 0, 0], [1214, 652, 562, 0, 0], [1215, 653, 562, 0, 0], [1216, 653, 563, 0, 0], [1217, 654, 563, 0, 0], [1218, 654, 564, 0, 0], [1219, 655, 564, 0, 0], [1220, 655, 565, 0, 0], [1221, 656, 565, 0, 0], [1222, 656, 566, 0, 0], [1223, 657, 566, 0, 0], [1224, 657, 567, 0, 0], [1225, 658, 567, 0, 0], [1226, 659, 567, 0, 0], [1227, 659, 568, 0, 0], [1228, 660, 568, 0, 0], [1229, 660, 569, 0, 0], [1230, 661, 569, 0, 0], [1231, 661, 570, 0, 0], [1232, 662, 570, 0, 0], [1233, 662, 571, 0, 0], [1234, 663, 571, 0, 0], [1235, 663, 572, 0, 0], [1236, 664, 572, 0, 0], [1237, 665, 572, 0, 0], [1238, 665, 573, 0, 0], [1239, 666, 573, 0, 0], [1240, 666, 574, 0, 0], [1241, 667, 574, 0, 0], [1242, 667, 575, 0, 0], [1243, 668, 575, 0, 0], [1244, 668, 576, 0, 0], [1245, 669, 576, 0, 0], [1246, 669, 577, 0, 0], [1247, 670, 577, 0, 0], [1248, 671, 577, 0, 0], [1249, 671, 578, 0, 0], [1250, 672, 578, 0, 0], [1251, 672, 579, 0, 0], [1252, 673, 579, 0, 0], [1253, 673, 580, 0, 0], [1254, 674, 580, 0, 0], [1255, 674, 581, 0, 0], [1256, 675, 581, 0, 0], [1257, 675, 582, 0, 0], [1258, 676, 582, 0, 0], [1259, 677, 582, 0, 0], [1260, 677, 583, 0, 0], [1261, 678, 583, 0, 0], [1262, 678, 584, 0, 0], [1263, 679, 584, 0, 0], [1264, 679, 585, 0, 0], [1265, 680, 585, 0, 0], [1266, 680, 586, 0, 0], [1267, 681, 586, 0, 0], [1268, 681, 587, 0, 0], [1269, 682, 587, 0, 0], [1270, 683, 587, 0, 0], [1271, 683, 588, 0, 0], [1272, 684, 588, 0, 0], [1273, 684, 589, 0, 0], [1274, 685, 589, 0, 0], [1275, 685, 590, 0, 0], [1276, 686, 590, 0, 0], [1277, 686, 591, 0, 0], [1278, 687, 591, 0, 0], [1279, 687, 592, 0, 0], [1280, 688, 592, 0, 0], [1281, 689, 592, 0, 0], [1282, 689, 593, 0, 0], [1283, 690, 593, 0, 0], [1284, 690, 594, 0, 0], [1285, 691, 594, 0, 0], [1286, 691, 595, 0, 0], [1287, 692, 595, 0, 0], [1288, 692, 596, 0, 0], [1289, 693, 596, 0, 0], [1290, 693, 597, 0, 0], [1291, 694, 597, 0, 0], [1292, 695, 597, 0, 0], [1293, 695, 598, 0, 0], [1294, 696, 598, 0, 0], [1295, 696, 599, 0, 0], [1296, 697, 599, 0, 0], [1297, 697, 600, 0, 0], [1298, 698, 600, 0, 0], [1299, 698, 601, 0, 0], [1300, 699, 601, 0, 0], [1301, 699, 602, 0, 0], [1302, 700, 602, 0, 0], [1303, 701, 602, 0, 0], [1304, 701, 603, 0, 0], [1305, 702, 603, 0, 0], [1306, 702, 604, 0, 0], [1307, 703, 604, 0, 0], [1308, 703, 605, 0, 0], [1309, 704, 605, 0, 0], [1310, 704, 606, 0, 0], [1311, 705, 606, 0, 0], [1312, 705, 607, 0, 0], [1313, 706, 607, 0, 0], [1314, 707, 607, 0, 0], [1315, 707, 608, 0, 0], [1316, 708, 608, 0, 0], [1317, 708, 609, 0, 0], [1318, 709, 609, 0, 0], [1319, 709, 610, 0, 0], [1320, 710, 610, 0, 0], [1321, 710, 611, 0, 0], [1322, 711, 611, 0, 0], [1323, 711, 612, 0, 0], [1324, 712, 612, 0, 0], [1325, 712, 613, 0, 0], [1326, 713, 613, 0, 0], [1327, 714, 613, 0, 0], [1328, 714, 614, 0, 0], [1329, 715, 614, 0, 0], [1330, 715, 615, 0, 0], [1331, 716, 615, 0, 0], [1332, 716, 616, 0, 0], [1333, 717, 616, 0, 0], [1334, 717, 617, 0, 0], [1335, 718, 617, 0, 0], [1336, 718, 618, 0, 0], [1337, 719, 618, 0, 0], [1338, 720, 618, 0, 0], [1339, 720, 619, 0, 0], [1340, 721, 619, 0, 0], [1341, 721, 620, 0, 0], [1342, 722, 620, 0, 0], [1343, 722, 621, 0, 0], [1344, 723, 621, 0, 0], [1345, 723, 622, 0, 0], [1346, 724, 622, 0, 0], [1347, 724, 623, 0, 0], [1348, 725, 623, 0, 0], [1349, 726, 623, 0, 0], [1350, 726, 624, 0, 0], [1351, 727, 624, 0, 0], [1352, 727, 625, 0, 0], [1353, 728, 625, 0, 0], [1354, 728, 626, 0, 0], [1355, 729, 626, 0, 0], [1356, 729, 627, 0, 0], [1357, 730, 627, 0, 0], [1358, 730, 628, 0, 0], [1359, 731, 628, 0, 0], [1360, 732, 628, 0, 0], [1361, 732, 629, 0, 0], [1362, 733, 629, 0, 0], [1363, 733, 630, 0, 0], [1364, 734, 630, 0, 0], [1365, 734, 631, 0, 0], [1366, 735, 631, 0, 0], [1367, 735, 632, 0, 0], [1368, 736, 632, 0, 0], [1369, 736, 633, 0, 0], [1370, 737, 633, 0, 0], [1371, 737, 634, 0, 0], [1372, 738, 634, 0, 0], [1373, 739, 634, 0, 0], [1374, 739, 635, 0, 0], [1375, 740, 635, 0, 0], [1376, 740, 636, 0, 0], [1377, 741, 636, 0, 0], [1378, 741, 637, 0, 0], [1379, 742, 637, 0, 0], [1380, 742, 638, 0, 0], [1381, 743, 638, 0, 0], [1382, 743, 639, 0, 0], [1383, 744, 639, 0, 0], [1384, 745, 639, 0, 0], [1385, 745, 640, 0, 0], [1386, 746, 640, 0, 0], [1387, 746, 641, 0, 0], [1388, 747, 641, 0, 0], [1389, 747, 642, 0, 0], [1390, 748, 642, 0, 0], [1391, 748, 643, 0, 0], [1392, 749, 643, 0, 0], [1393, 749, 644, 0, 0], [1394, 750, 644, 0, 0], [1395, 751, 644, 0, 0], [1396, 751, 645, 0, 0], [1397, 752, 645, 0, 0], [1398, 752, 646, 0, 0], [1399, 753, 646, 0, 0], [1400, 753, 647, 0, 0], [1401, 754, 647, 0, 0], [1402, 754, 648, 0, 0], [1403, 755, 648, 0, 0], [1404, 755, 649, 0, 0], [1405, 756, 649, 0, 0], [1406, 756, 650, 0, 0], [1407, 757, 650, 0, 0], [1408, 758, 650, 0, 0], [1409, 758, 651, 0, 0], [1410, 759, 651, 0, 0], [1411, 759, 652, 0, 0], [1412, 760, 652, 0, 0], [1413, 760, 653, 0, 0], [1414, 761, 653, 0, 0], [1415, 761, 654, 0, 0], [1416, 762, 654, 0, 0], [1417, 762, 655, 0, 0], [1418, 763, 655, 0, 0], [1419, 764, 655, 0, 0], [1420, 764, 656, 0, 0], [1421, 765, 656, 0, 0], [1422, 765, 657, 0, 0], [1423, 766, 657, 0, 0], [1424, 766, 658, 0, 0], [1425, 767, 658, 0, 0], [1426, 767, 659, 0, 0], [1427, 768, 659, 0, 0], [1428, 768, 660, 0, 0], [1429, 769, 660, 0, 0], [1430, 769, 661, 0, 0], [1431, 770, 661, 0, 0], [1432, 771, 661, 0, 0], [1433, 771, 662, 0, 0], [1434, 772, 662, 0, 0], [1435, 772, 663, 0, 0], [1436, 773, 663, 0, 0], [1437, 773, 664, 0, 0], [1438, 774, 664, 0, 0], [1439, 774, 665, 0, 0], [1440, 775, 665, 0, 0], [1441, 775, 666, 0, 0], [1442, 776, 666, 0, 0], [1443, 777, 666, 0, 0], [1444, 777, 667, 0, 0], [1445, 778, 667, 0, 0], [1446, 778, 668, 0, 0], [1447, 779, 668, 0, 0], [1448, 779, 669, 0, 0], [1449, 780, 669, 0, 0], [1450, 780, 670, 0, 0], [1451, 781, 670, 0, 0], [1452, 781, 671, 0, 0], [1453, 782, 671, 0, 0], [1454, 782, 672, 0, 0], [1455, 783, 672, 0, 0], [1456, 784, 672, 0, 0], [1457, 784, 673, 0, 0], [1458, 785, 673, 0, 0], [1459, 785, 674, 0, 0], [1460, 786, 674, 0, 0], [1461, 786, 675, 0, 0], [1462, 787, 675, 0, 0], [1463, 787, 676, 0, 0], [1464, 788, 676, 0, 0], [1465, 788, 677, 0, 0], [1466, 789, 677, 0, 0], [1467, 790, 677, 0, 0], [1468, 790, 678, 0, 0], [1469, 791, 678, 0, 0], [1470, 791, 679, 0, 0], [1471, 792, 679, 0, 0], [1472, 792, 680, 0, 0], [1473, 793, 680, 0, 0], [1474, 793, 681, 0, 0], [1475, 794, 681, 0, 0], [1476, 794, 682, 0, 0], [1477, 795, 682, 0, 0], [1478, 795, 683, 0, 0], [1479, 796, 683, 0, 0], [1480, 797, 683, 0, 0], [1481, 797, 684, 0, 0], [1482, 798, 684, 0, 0], [1483, 798, 685, 0, 0], [1484, 799, 685, 0, 0], [1485, 799, 686, 0, 0], [1486, 800, 686, 0, 0], [1487, 800, 687, 0, 0], [1488, 801, 687, 0, 0], [1489, 801, 688, 0, 0], [1490, 802, 688, 0, 0], [1491, 803, 688, 0, 0], [1492, 803, 689, 0, 0], [1493, 804, 689, 0, 0], [1494, 804, 690, 0, 0], [1495, 805, 690, 0, 0], [1496, 805, 691, 0, 0], [1497, 806, 691, 0, 0], [1498, 806, 692, 0, 0], [1499, 807, 692, 0, 0], [1500, 807, 693, 0, 0], [1501, 808, 693, 0, 0], [1502, 808, 694, 0, 0], [1503, 809, 694, 0, 0], [1504, 810, 694, 0, 0], [1505, 810, 695, 0, 0], [1506, 811, 695, 0, 0], [1507, 811, 696, 0, 0], [1508, 812, 696, 0, 0], [1509, 812, 697, 0, 0], [1510, 813, 697, 0, 0], [1511, 813, 698, 0, 0], [1512, 814, 698, 0, 0], [1513, 814, 699, 0, 0], [1514, 815, 699, 0, 0], [1515, 815, 700, 0, 0], [1516, 816, 700, 0, 0], [1517, 817, 700, 0, 0], [1518, 817, 701, 0, 0], [1519, 818, 701, 0, 0], [1520, 818, 702, 0, 0], [1521, 819, 702, 0, 0], [1522, 819, 703, 0, 0], [1523, 820, 703, 0, 0], [1524, 820, 704, 0, 0], [1525, 821, 704, 0, 0], [1526, 821, 705, 0, 0], [1527, 822, 705, 0, 0], [1528, 823, 705, 0, 0], [1529, 823, 706, 0, 0], [1530, 824, 706, 0, 0], [1531, 824, 707, 0, 0], [1532, 825, 707, 0, 0], [1533, 825, 708, 0, 0], [1534, 826, 708, 0, 0], [1535, 826, 709, 0, 0], [1536, 827, 709, 0, 0], [1537, 827, 710, 0, 0], [1538, 828, 710, 0, 0], [1539, 828, 711, 0, 0], [1540, 829, 711, 0, 0], [1541, 830, 711, 0, 0], [1542, 830, 712, 0, 0], [1543, 831, 712, 0, 0], [1544, 831, 713, 0, 0], [1545, 832, 713, 0, 0], [1546, 832, 714, 0, 0], [1547, 833, 714, 0, 0], [1548, 833, 715, 0, 0], [1549, 834, 715, 0, 0], [1550, 834, 716, 0, 0], [1551, 835, 716, 0, 0], [1552, 835, 717, 0, 0], [1553, 836, 717, 0, 0], [1554, 837, 717, 0, 0], [1555, 837, 718, 0, 0], [1556, 838, 718, 0, 0], [1557, 838, 719, 0, 0], [1558, 839, 719, 0, 0], [1559, 839, 720, 0, 0], [1560, 840, 720, 0, 0], [1561, 840, 721, 0, 0], [1562, 841, 721, 0, 0], [1563, 841, 722, 0, 0], [1564, 842, 722, 0, 0], [1565, 842, 723, 0, 0], [1566, 843, 723, 0, 0], [1567, 844, 723, 0, 0], [1568, 844, 724, 0, 0], [1569, 845, 724, 0, 0], [1570, 845, 725, 0, 0], [1571, 846, 725, 0, 0], [1572, 846, 726, 0, 0], [1573, 847, 726, 0, 0], [1574, 847, 727, 0, 0], [1575, 848, 727, 0, 0], [1576, 848, 728, 0, 0], [1577, 849, 728, 0, 0], [1578, 849, 729, 0, 0], [1579, 850, 729, 0, 0], [1580, 851, 729, 0, 0], [1581, 851, 730, 0, 0], [1582, 852, 730, 0, 0], [1583, 852, 731, 0, 0], [1584, 853, 731, 0, 0], [1585, 853, 732, 0, 0], [1586, 854, 732, 0, 0], [1587, 854, 733, 0, 0], [1588, 855, 733, 0, 0], [1589, 855, 734, 0, 0], [1590, 856, 734, 0, 0], [1591, 857, 734, 0, 0], [1592, 857, 735, 0, 0], [1593, 858, 735, 0, 0], [1594, 858, 736, 0, 0], [1595, 859, 736, 0, 0], [1596, 859, 737, 0, 0], [1597, 860, 737, 0, 0], [1598, 860, 738, 0, 0], [1599, 861, 738, 0, 0], [1600, 861, 739, 0, 0], [1601, 862, 739, 0, 0], [1602, 862, 740, 0, 0], [1603, 863, 740, 0, 0], [1604, 864, 740, 0, 0], [1605, 864, 741, 0, 0], [1606, 865, 741, 0, 0], [1607, 865, 742, 0, 0], [1608, 866, 742, 0, 0], [1609, 866, 743, 0, 0], [1610, 867, 743, 0, 0], [1611, 867, 744, 0, 0], [1612, 868, 744, 0, 0], [1613, 868, 745, 0, 0], [1614, 869, 745, 0, 0], [1615, 869, 746, 0, 0], [1616, 870, 746, 0, 0], [1617, 871, 746, 0, 0], [1618, 871, 747, 0, 0], [1619, 872, 747, 0, 0], [1620, 872, 748, 0, 0], [1621, 873, 748, 0, 0], [1622, 873, 749, 0, 0], [1623, 874, 749, 0, 0], [1624, 874, 750, 0, 0], [1625, 875, 750, 0, 0], [1626, 875, 751, 0, 0], [1627, 876, 751, 0, 0], [1628, 876, 752, 0, 0], [1629, 877, 752, 0, 0], [1630, 878, 752, 0, 0], [1631, 878, 753, 0, 0], [1632, 879, 753, 0, 0], [1633, 879, 754, 0, 0], [1634, 880, 754, 0, 0], [1635, 880, 755, 0, 0], [1636, 881, 755, 0, 0], [1637, 881, 756, 0, 0], [1638, 882, 756, 0, 0], [1639, 882, 757, 0, 0], [1640, 883, 757, 0, 0], [1641, 883, 758, 0, 0], [1642, 884, 758, 0, 0], [1643, 885, 758, 0, 0], [1644, 885, 759, 0, 0], [1645, 886, 759, 0, 0], [1646, 886, 760, 0, 0], [1647, 887, 760, 0, 0], [1648, 887, 761, 0, 0], [1649, 888, 761, 0, 0], [1650, 888, 762, 0, 0], [1651, 889, 762, 0, 0], [1652, 889, 763, 0, 0], [1653, 890, 763, 0, 0], [1654, 890, 764, 0, 0], [1655, 891, 764, 0, 0], [1656, 892, 764, 0, 0], [1657, 892, 765, 0, 0], [1658, 893, 765, 0, 0], [1659, 893, 766, 0, 0], [1660, 894, 766, 0, 0], [1661, 894, 767, 0, 0], [1662, 895, 767, 0, 0], [1663, 895, 768, 0, 0], [1664, 896, 768, 0, 0], [1665, 896, 769, 0, 0], [1666, 897, 769, 0, 0], [1667, 897, 770, 0, 0], [1668, 898, 770, 0, 0], [1669, 899, 770, 0, 0], [1670, 899, 771, 0, 0], [1671, 900, 771, 0, 0], [1672, 900, 772, 0, 0], [1673, 901, 772, 0, 0], [1674, 901, 773, 0, 0], [1675, 902, 773, 0, 0], [1676, 902, 774, 0, 0], [1677, 903, 774, 0, 0], [1678, 903, 775, 0, 0], [1679, 904, 775, 0, 0], [1680, 904, 776, 0, 0], [1681, 905, 776, 0, 0], [1682, 906, 776, 0, 0], [1683, 906, 777, 0, 0], [1684, 907, 777, 0, 0], [1685, 907, 778, 0, 0], [1686, 908, 778, 0, 0], [1687, 908, 779, 0, 0], [1688, 909, 779, 0, 0], [1689, 909, 780, 0, 0], [1690, 910, 780, 0, 0], [1691, 910, 781, 0, 0], [1692, 911, 781, 0, 0], [1693, 911, 782, 0, 0], [1694, 912, 782, 0, 0], [1695, 913, 782, 0, 0], [1696, 913, 783, 0, 0], [1697, 914, 783, 0, 0], [1698, 914, 784, 0, 0], [1699, 915, 784, 0, 0], [1700, 915, 785, 0, 0], [1701, 916, 785, 0, 0], [1702, 916, 786, 0, 0], [1703, 917, 786, 0, 0], [1704, 917, 787, 0, 0], [1705, 918, 787, 0, 0], [1706, 918, 788, 0, 0], [1707, 919, 788, 0, 0], [1708, 919, 789, 0, 0], [1709, 920, 789, 0, 0], [1710, 921, 789, 0, 0], [1711, 921, 790, 0, 0], [1712, 922, 790, 0, 0], [1713, 922, 791, 0, 0], [1714, 923, 791, 0, 0], [1715, 923, 792, 0, 0], [1716, 924, 792, 0, 0], [1717, 924, 793, 0, 0], [1718, 925, 793, 0, 0], [1719, 925, 794, 0, 0], [1720, 926, 794, 0, 0], [1721, 926, 795, 0, 0], [1722, 927, 795, 0, 0], [1723, 928, 795, 0, 0], [1724, 928, 796, 0, 0], [1725, 929, 796, 0, 0], [1726, 929, 797, 0, 0], [1727, 930, 797, 0, 0], [1728, 930, 798, 0, 0], [1729, 931, 798, 0, 0], [1730, 931, 799, 0, 0], [1731, 932, 799, 0, 0], [1732, 932, 800, 0, 0], [1733, 933, 800, 0, 0], [1734, 933, 801, 0, 0], [1735, 934, 801, 0, 0], [1736, 935, 801, 0, 0], [1737, 935, 802, 0, 0], [1738, 936, 802, 0, 0], [1739, 936, 803, 0, 0], [1740, 937, 803, 0, 0], [1741, 937, 804, 0, 0], [1742, 938, 804, 0, 0], [1743, 938, 805, 0, 0], [1744, 939, 805, 0, 0], [1745, 939, 806, 0, 0], [1746, 940, 806, 0, 0], [1747, 940, 807, 0, 0], [1748, 941, 807, 0, 0], [1749, 942, 807, 0, 0], [1750, 942, 808, 0, 0], [1751, 943, 808, 0, 0], [1752, 943, 809, 0, 0], [1753, 944, 809, 0, 0], [1754, 944, 810, 0, 0], [1755, 945, 810, 0, 0], [1756, 945, 811, 0, 0], [1757, 946, 811, 0, 0], [1758, 946, 812, 0, 0], [1759, 947, 812, 0, 0], [1760, 947, 813, 0, 0], [1761, 948, 813, 0, 0], [1762, 948, 814, 0, 0], [1763, 949, 814, 0, 0], [1764, 950, 814, 0, 0], [1765, 950, 815, 0, 0], [1766, 951, 815, 0, 0], [1767, 951, 816, 0, 0], [1768, 952, 816, 0, 0], [1769, 952, 817, 0, 0], [1770, 953, 817, 0, 0], [1771, 953, 818, 0, 0], [1772, 954, 818, 0, 0], [1773, 954, 819, 0, 0], [1774, 955, 819, 0, 0], [1775, 955, 820, 0, 0], [1776, 956, 820, 0, 0], [1777, 957, 820, 0, 0], [1778, 957, 821, 0, 0], [1779, 958, 821, 0, 0], [1780, 958, 822, 0, 0], [1781, 959, 822, 0, 0], [1782, 959, 823, 0, 0], [1783, 960, 823, 0, 0], [1784, 960, 824, 0, 0], [1785, 961, 824, 0, 0], [1786, 961, 825, 0, 0], [1787, 962, 825, 0, 0], [1788, 962, 826, 0, 0], [1789, 963, 826, 0, 0], [1790, 964, 826, 0, 0], [1791, 964, 827, 0, 0], [1792, 965, 827, 0, 0], [1793, 965, 828, 0, 0], [1794, 966, 828, 0, 0], [1795, 966, 829, 0, 0], [1796, 967, 829, 0, 0], [1797, 967, 830, 0, 0], [1798, 968, 830, 0, 0], [1799, 968, 831, 0, 0], [1800, 969, 831, 0, 0], [1801, 969, 832, 0, 0], [1802, 970, 832, 0, 0], [1803, 970, 833, 0, 0], [1804, 971, 833, 0, 0], [1805, 972, 833, 0, 0], [1806, 972, 834, 0, 0], [1807, 973, 834, 0, 0], [1808, 973, 835, 0, 0], [1809, 974, 835, 0, 0], [1810, 974, 836, 0, 0], [1811, 975, 836, 0, 0], [1812, 975, 837, 0, 0], [1813, 976, 837, 0, 0], [1814, 976, 838, 0, 0], [1815, 977, 838, 0, 0], [1816, 977, 839, 0, 0], [1817, 978, 839, 0, 0], [1818, 979, 839, 0, 0], [1819, 979, 840, 0, 0], [1820, 980, 840, 0, 0], [1821, 980, 841, 0, 0], [1822, 981, 841, 0, 0], [1823, 981, 842, 0, 0], [1824, 982, 842, 0, 0], [1825, 982, 843, 0, 0], [1826, 983, 843, 0, 0], [1827, 983, 844, 0, 0], [1828, 984, 844, 0, 0], [1829, 984, 845, 0, 0], [1830, 985, 845, 0, 0], [1831, 985, 846, 0, 0], [1832, 986, 846, 0, 0], [1833, 987, 846, 0, 0], [1834, 987, 847, 0, 0], [1835, 988, 847, 0, 0], [1836, 988, 848, 0, 0], [1837, 989, 848, 0, 0], [1838, 989, 849, 0, 0], [1839, 990, 849, 0, 0], [1840, 990, 850, 0, 0], [1841, 991, 850, 0, 0], [1842, 991, 851, 0, 0], [1843, 992, 851, 0, 0], [1844, 992, 852, 0, 0], [1845, 993, 852, 0, 0], [1846, 994, 852, 0, 0], [1847, 994, 853, 0, 0], [1848, 995, 853, 0, 0], [1849, 995, 854, 0, 0], [1850, 996, 854, 0, 0], [1851, 996, 855, 0, 0], [1852, 997, 855, 0, 0], [1853, 997, 856, 0, 0], [1854, 998, 856, 0, 0], [1855, 998, 857, 0, 0], [1856, 999, 857, 0, 0], [1857, 999, 858, 0, 0], [1858, 1000, 858, 0, 0], [1859, 1000, 859, 0, 0], [1860, 1001, 859, 0, 0], [1861, 1002, 859, 0, 0], [1862, 1002, 860, 0, 0], [1863, 1003, 860, 0, 0], [1864, 1003, 861, 0, 0], [1865, 1004, 861, 0, 0], [1866, 1004, 862, 0, 0], [1867, 1005, 862, 0, 0], [1868, 1005, 863, 0, 0], [1869, 1006, 863, 0, 0], [1870, 1006, 864, 0, 0], [1871, 1007, 864, 0, 0], [1872, 1007, 865, 0, 0], [1873, 1008, 865, 0, 0], [1874, 1008, 866, 0, 0], [1875, 1009, 866, 0, 0], [1876, 1010, 866, 0, 0], [1877, 1010, 867, 0, 0], [1878, 1011, 867, 0, 0], [1879, 1011, 868, 0, 0], [1880, 1012, 868, 0, 0], [1881, 1012, 869, 0, 0], [1882, 1013, 869, 0, 0], [1883, 1013, 870, 0, 0], [1884, 1014, 870, 0, 0], [1885, 1014, 871, 0, 0], [1886, 1015, 871, 0, 0], [1887, 1015, 872, 0, 0], [1888, 1016, 872, 0, 0], [1889, 1017, 872, 0, 0], [1890, 1017, 873, 0, 0], [1891, 1018, 873, 0, 0], [1892, 1018, 874, 0, 0], [1893, 1019, 874, 0, 0], [1894, 1019, 875, 0, 0], [1895, 1020, 875, 0, 0], [1896, 1020, 876, 0, 0], [1897, 1021, 876, 0, 0], [1898, 1021, 877, 0, 0], [1899, 1022, 877, 0, 0], [1900, 1022, 878, 0, 0], [1901, 1023, 878, 0, 0], [1902, 1023, 879, 0, 0], [1903, 1024, 879, 0, 0], [1904, 1025, 879, 0, 0], [1905, 1025, 880, 0, 0], [1906, 1026, 880, 0, 0], [1907, 1026, 881, 0, 0], [1908, 1027, 881, 0, 0], [1909, 1027, 882, 0, 0], [1910, 1028, 882, 0, 0], [1911, 1028, 883, 0, 0], [1912, 1029, 883, 0, 0], [1913, 1029, 884, 0, 0], [1914, 1030, 884, 0, 0], [1915, 1030, 885, 0, 0], [1916, 1031, 885, 0, 0], [1917, 1031, 886, 0, 0], [1918, 1032, 886, 0, 0], [1919, 1033, 886, 0, 0], [1920, 1033, 887, 0, 0], [1921, 1034, 887, 0, 0], [1922, 1034, 888, 0, 0], [1923, 1035, 888, 0, 0], [1924, 1035, 889, 0, 0], [1925, 1036, 889, 0, 0], [1926, 1036, 890, 0, 0], [1927, 1037, 890, 0, 0], [1928, 1037, 891, 0, 0], [1929, 1038, 891, 0, 0], [1930, 1038, 892, 0, 0], [1931, 1039, 892, 0, 0], [1932, 1039, 893, 0, 0], [1933, 1040, 893, 0, 0], [1934, 1041, 893, 0, 0], [1935, 1041, 894, 0, 0], [1936, 1042, 894, 0, 0], [1937, 1042, 895, 0, 0], [1938, 1043, 895, 0, 0], [1939, 1043, 896, 0, 0], [1940, 1044, 896, 0, 0], [1941, 1044, 897, 0, 0], [1942, 1045, 897, 0, 0], [1943, 1045, 898, 0, 0], [1944, 1046, 898, 0, 0], [1945, 1046, 899, 0, 0], [1946, 1047, 899, 0, 0], [1947, 1048, 899, 0, 0], [1948, 1048, 900, 0, 0], [1949, 1049, 900, 0, 0], [1950, 1049, 901, 0, 0], [1951, 1050, 901, 0, 0], [1952, 1050, 902, 0, 0], [1953, 1051, 902, 0, 0], [1954, 1051, 903, 0, 0], [1955, 1052, 903, 0, 0], [1956, 1052, 904, 0, 0], [1957, 1053, 904, 0, 0], [1958, 1053, 905, 0, 0], [1959, 1054, 905, 0, 0], [1960, 1054, 906, 0, 0], [1961, 1055, 906, 0, 0], [1962, 1056, 906, 0, 0], [1963, 1056, 907, 0, 0], [1964, 1057, 907, 0, 0], [1965, 1057, 908, 0, 0], [1966, 1058, 908, 0, 0], [1967, 1058, 909, 0, 0], [1968, 1059, 909, 0, 0], [1969, 1059, 910, 0, 0], [1970, 1060, 910, 0, 0], [1971, 1060, 911, 0, 0], [1972, 1061, 911, 0, 0], [1973, 1061, 912, 0, 0], [1974, 1062, 912, 0, 0], [1975, 1062, 913, 0, 0], [1976, 1063, 913, 0, 0], [1977, 1064, 913, 0, 0], [1978, 1064, 914, 0, 0], [1979, 1065, 914, 0, 0], [1980, 1065, 915, 0, 0], [1981, 1066, 915, 0, 0], [1982, 1066, 916, 0, 0], [1983, 1067, 916, 0, 0], [1984, 1067, 917, 0, 0], [1985, 1068, 917, 0, 0], [1986, 1068, 918, 0, 0], [1987, 1069, 918, 0, 0], [1988, 1069, 919, 0, 0], [1989, 1070, 919, 0, 0], [1990, 1070, 920, 0, 0], [1991, 1071, 920, 0, 0], [1992, 1072, 920, 0, 0], [1993, 1072, 921, 0, 0], [1994, 1073, 921, 0, 0], [1995, 1073, 922, 0, 0], [1996, 1074, 922, 0, 0], [1997, 1074, 923, 0, 0], [1998, 1075, 923, 0, 0], [1999, 1075, 924, 0, 0], [2000, 1076, 924, 0, 0], [2001, 1076, 925, 0, 0], [2002, 1077, 925, 0, 0], [2003, 1077, 926, 0, 0], [2004, 1078, 926, 0, 0], [2005, 1078, 927, 0, 0], [2006, 1079, 927, 0, 0], [2007, 1080, 927, 0, 0], [2008, 1080, 928, 0, 0], [2009, 1081, 928, 0, 0], [2010, 1081, 929, 0, 0], [2011, 1082, 929, 0, 0], [2012, 1082, 930, 0, 0], [2013, 1083, 930, 0, 0], [2014, 1083, 931, 0, 0], [2015, 1084, 931, 0, 0], [2016, 1084, 932, 0, 0], [2017, 1085, 932, 0, 0], [2018, 1085, 933, 0, 0], [2019, 1086, 933, 0, 0], [2020, 1086, 934, 0, 0], [2021, 1087, 934, 0, 0], [2022, 1088, 934, 0, 0], [2023, 1088, 935, 0, 0], [2024, 1089, 935, 0, 0], [2025, 1089, 936, 0, 0], [2026, 1090, 936, 0, 0], [2027, 1090, 937, 0, 0], [2028, 1091, 937, 0, 0], [2029, 1091, 938, 0, 0], [2030, 1092, 938, 0, 0], [2031, 1092, 939, 0, 0], [2032, 1093, 939, 0, 0], [2033, 1093, 940, 0, 0], [2034, 1094, 940, 0, 0], [2035, 1094, 941, 0, 0], [2036, 1095, 941, 0, 0], [2037, 1096, 941, 0, 0], [2038, 1096, 942, 0, 0], [2039, 1097, 942, 0, 0], [2040, 1097, 943, 0, 0], [2041, 1098, 943, 0, 0], [2042, 1098, 944, 0, 0], [2043, 1099, 944, 0, 0], [2044, 1099, 945, 0, 0], [2045, 1100, 945, 0, 0], [2046, 1100, 946, 0, 0], [2047, 1101, 946, 0, 0], [2048, 1101, 947, 0, 0], [2049, 1102, 947, 0, 0], [2050, 1102, 948, 0, 0], [2051, 1103, 948, 0, 0], [2052, 1104, 948, 0, 0], [2053, 1104, 949, 0, 0], [2054, 1105, 949, 0, 0], [2055, 1105, 950, 0, 0], [2056, 1106, 950, 0, 0], [2057, 1106, 951, 0, 0], [2058, 1107, 951, 0, 0], [2059, 1107, 952, 0, 0], [2060, 1108, 952, 0, 0], [2061, 1108, 953, 0, 0], [2062, 1109, 953, 0, 0], [2063, 1109, 954, 0, 0], [2064, 1110, 954, 0, 0], [2065, 1110, 955, 0, 0], [2066, 1111, 955, 0, 0], [2067, 1111, 956, 0, 0], [2068, 1112, 956, 0, 0], [2069, 1113, 956, 0, 0], [2070, 1113, 957, 0, 0], [2071, 1114, 957, 0, 0], [2072, 1114, 958, 0, 0], [2073, 1115, 958, 0, 0], [2074, 1115, 959, 0, 0], [2075, 1116, 959, 0, 0], [2076, 1116, 960, 0, 0], [2077, 1117, 960, 0, 0], [2078, 1117, 961, 0, 0], [2079, 1118, 961, 0, 0], [2080, 1118, 962, 0, 0], [2081, 1119, 962, 0, 0], [2082, 1119, 963, 0, 0], [2083, 1120, 963, 0, 0], [2084, 1121, 963, 0, 0], [2085, 1121, 964, 0, 0], [2086, 1122, 964, 0, 0], [2087, 1122, 965, 0, 0], [2088, 1123, 965, 0, 0], [2089, 1123, 966, 0, 0], [2090, 1124, 966, 0, 0], [2091, 1124, 967, 0, 0], [2092, 1125, 967, 0, 0], [2093, 1125, 968, 0, 0], [2094, 1126, 968, 0, 0], [2095, 1126, 969, 0, 0], [2096, 1127, 969, 0, 0], [2097, 1127, 970, 0, 0], [2098, 1128, 970, 0, 0], [2099, 1129, 970, 0, 0], [2100, 1129, 971, 0, 0], [2101, 1130, 971, 0, 0], [2102, 1130, 972, 0, 0], [2103, 1131, 972, 0, 0], [2104, 1131, 973, 0, 0], [2105, 1132, 973, 0, 0], [2106, 1132, 974, 0, 0], [2107, 1133, 974, 0, 0], [2108, 1133, 975, 0, 0], [2109, 1134, 975, 0, 0], [2110, 1134, 976, 0, 0], [2111, 1135, 976, 0, 0], [2112, 1135, 977, 0, 0], [2113, 1136, 977, 0, 0], [2114, 1136, 978, 0, 0], [2115, 1137, 978, 0, 0], [2116, 1138, 978, 0, 0], [2117, 1138, 979, 0, 0], [2118, 1139, 979, 0, 0], [2119, 1139, 980, 0, 0], [2120, 1140, 980, 0, 0], [2121, 1140, 981, 0, 0], [2122, 1141, 981, 0, 0], [2123, 1141, 982, 0, 0], [2124, 1142, 982, 0, 0], [2125, 1142, 983, 0, 0], [2126, 1143, 983, 0, 0], [2127, 1143, 984, 0, 0], [2128, 1144, 984, 0, 0], [2129, 1144, 985, 0, 0], [2130, 1145, 985, 0, 0], [2131, 1146, 985, 0, 0], [2132, 1146, 986, 0, 0], [2133, 1147, 986, 0, 0], [2134, 1147, 987, 0, 0], [2135, 1148, 987, 0, 0], [2136, 1148, 988, 0, 0], [2137, 1149, 988, 0, 0], [2138, 1149, 989, 0, 0], [2139, 1150, 989, 0, 0], [2140, 1150, 990, 0, 0], [2141, 1151, 990, 0, 0], [2142, 1151, 991, 0, 0], [2143, 1152, 991, 0, 0], [2144, 1152, 992, 0, 0], [2145, 1153, 992, 0, 0], [2146, 1154, 992, 0, 0], [2147, 1154, 993, 0, 0], [2148, 1155, 993, 0, 0], [2149, 1155, 994, 0, 0], [2150, 1156, 994, 0, 0], [2151, 1156, 995, 0, 0], [2152, 1157, 995, 0, 0], [2153, 1157, 996, 0, 0], [2154, 1158, 996, 0, 0], [2155, 1158, 997, 0, 0], [2156, 1159, 997, 0, 0], [2157, 1159, 998, 0, 0], [2158, 1160, 998, 0, 0], [2159, 1160, 999, 0, 0], [2160, 1161, 999, 0, 0], [2161, 1161, 1000, 0, 0], [2162, 1162, 1000, 0, 0], [2163, 1163, 1000, 0, 0], [2164, 1163, 1001, 0, 0], [2165, 1164, 1001, 0, 0], [2166, 1164, 1002, 0, 0], [2167, 1165, 1002, 0, 0], [2168, 1165, 1003, 0, 0], [2169, 1166, 1003, 0, 0], [2170, 1166, 1004, 0, 0], [2171, 1167, 1004, 0, 0], [2172, 1167, 1005, 0, 0], [2173, 1168, 1005, 0, 0], [2174, 1168, 1006, 0, 0], [2175, 1169, 1006, 0, 0], [2176, 1169, 1007, 0, 0], [2177, 1170, 1007, 0, 0], [2178, 1170, 1008, 0, 0], [2179, 1171, 1008, 0, 0], [2180, 1172, 1008, 0, 0], [2181, 1172, 1009, 0, 0], [2182, 1173, 1009, 0, 0], [2183, 1173, 1010, 0, 0], [2184, 1174, 1010, 0, 0], [2185, 1174, 1011, 0, 0], [2186, 1175, 1011, 0, 0], [2187, 1175, 1012, 0, 0], [2188, 1176, 1012, 0, 0], [2189, 1176, 1013, 0, 0], [2190, 1177, 1013, 0, 0], [2191, 1177, 1014, 0, 0], [2192, 1178, 1014, 0, 0], [2193, 1178, 1015, 0, 0], [2194, 1179, 1015, 0, 0], [2195, 1180, 1015, 0, 0], [2196, 1180, 1016, 0, 0], [2197, 1181, 1016, 0, 0], [2198, 1181, 1017, 0, 0], [2199, 1182, 1017, 0, 0], [2200, 1182, 1018, 0, 0], [2201, 1183, 1018, 0, 0], [2202, 1183, 1019, 0, 0], [2203, 1184, 1019, 0, 0], [2204, 1184, 1020, 0, 0], [2205, 1185, 1020, 0, 0], [2206, 1185, 1021, 0, 0], [2207, 1186, 1021, 0, 0], [2208, 1186, 1022, 0, 0], [2209, 1187, 1022, 0, 0], [2210, 1187, 1023, 0, 0], [2211, 1188, 1023, 0, 0], [2212, 1189, 1023, 0, 0], [2213, 1189, 1024, 0, 0], [2214, 1190, 1024, 0, 0], [2215, 1190, 1025, 0, 0], [2216, 1191, 1025, 0, 0], [2217, 1191, 1026, 0, 0], [2218, 1192, 1026, 0, 0], [2219, 1192, 1027, 0, 0], [2220, 1193, 1027, 0, 0], [2221, 1193, 1028, 0, 0], [2222, 1194, 1028, 0, 0], [2223, 1194, 1029, 0, 0], [2224, 1195, 1029, 0, 0], [2225, 1195, 1030, 0, 0], [2226, 1196, 1030, 0, 0], [2227, 1196, 1031, 0, 0], [2228, 1197, 1031, 0, 0], [2229, 1198, 1031, 0, 0], [2230, 1198, 1032, 0, 0], [2231, 1199, 1032, 0, 0], [2232, 1199, 1033, 0, 0], [2233, 1200, 1033, 0, 0], [2234, 1200, 1034, 0, 0], [2235, 1201, 1034, 0, 0], [2236, 1201, 1035, 0, 0], [2237, 1202, 1035, 0, 0], [2238, 1202, 1036, 0, 0], [2239, 1203, 1036, 0, 0], [2240, 1203, 1037, 0, 0], [2241, 1204, 1037, 0, 0], [2242, 1204, 1038, 0, 0], [2243, 1205, 1038, 0, 0], [2244, 1206, 1038, 0, 0], [2245, 1206, 1039, 0, 0], [2246, 1207, 1039, 0, 0], [2247, 1207, 1040, 0, 0], [2248, 1208, 1040, 0, 0], [2249, 1208, 1041, 0, 0], [2250, 1209, 1041, 0, 0], [2251, 1209, 1042, 0, 0], [2252, 1210, 1042, 0, 0], [2253, 1210, 1043, 0, 0], [2254, 1211, 1043, 0, 0], [2255, 1211, 1044, 0, 0], [2256, 1212, 1044, 0, 0], [2257, 1212, 1045, 0, 0], [2258, 1213, 1045, 0, 0], [2259, 1213, 1046, 0, 0], [2260, 1214, 1046, 0, 0], [2261, 1215, 1046, 0, 0], [2262, 1215, 1047, 0, 0], [2263, 1216, 1047, 0, 0], [2264, 1216, 1048, 0, 0], [2265, 1217, 1048, 0, 0], [2266, 1217, 1049, 0, 0], [2267, 1218, 1049, 0, 0], [2268, 1218, 1050, 0, 0], [2269, 1219, 1050, 0, 0], [2270, 1219, 1051, 0, 0], [2271, 1220, 1051, 0, 0], [2272, 1220, 1052, 0, 0], [2273, 1221, 1052, 0, 0], [2274, 1221, 1053, 0, 0], [2275, 1222, 1053, 0, 0], [2276, 1222, 1054, 0, 0], [2277, 1223, 1054, 0, 0], [2278, 1224, 1054, 0, 0], [2279, 1224, 1055, 0, 0], [2280, 1225, 1055, 0, 0], [2281, 1225, 1056, 0, 0], [2282, 1226, 1056, 0, 0], [2283, 1226, 1057, 0, 0], [2284, 1227, 1057, 0, 0], [2285, 1227, 1058, 0, 0], [2286, 1228, 1058, 0, 0], [2287, 1228, 1059, 0, 0], [2288, 1229, 1059, 0, 0], [2289, 1229, 1060, 0, 0], [2290, 1230, 1060, 0, 0], [2291, 1230, 1061, 0, 0], [2292, 1231, 1061, 0, 0], [2293, 1231, 1062, 0, 0], [2294, 1232, 1062, 0, 0], [2295, 1233, 1062, 0, 0], [2296, 1233, 1063, 0, 0], [2297, 1234, 1063, 0, 0], [2298, 1234, 1064, 0, 0], [2299, 1235, 1064, 0, 0], [2300, 1235, 1065, 0, 0], [2301, 1236, 1065, 0, 0], [2302, 1236, 1066, 0, 0], [2303, 1237, 1066, 0, 0], [2304, 1237, 1067, 0, 0], [2305, 1238, 1067, 0, 0], [2306, 1238, 1068, 0, 0], [2307, 1239, 1068, 0, 0], [2308, 1239, 1069, 0, 0], [2309, 1240, 1069, 0, 0], [2310, 1240, 1070, 0, 0], [2311, 1241, 1070, 0, 0], [2312, 1242, 1070, 0, 0], [2313, 1242, 1071, 0, 0], [2314, 1243, 1071, 0, 0], [2315, 1243, 1072, 0, 0], [2316, 1244, 1072, 0, 0], [2317, 1244, 1073, 0, 0], [2318, 1245, 1073, 0, 0], [2319, 1245, 1074, 0, 0], [2320, 1246, 1074, 0, 0], [2321, 1246, 1075, 0, 0], [2322, 1247, 1075, 0, 0], [2323, 1247, 1076, 0, 0], [2324, 1248, 1076, 0, 0], [2325, 1248, 1077, 0, 0], [2326, 1249, 1077, 0, 0], [2327, 1249, 1078, 0, 0], [2328, 1250, 1078, 0, 0], [2329, 1251, 1078, 0, 0], [2330, 1251, 1079, 0, 0], [2331, 1252, 1079, 0, 0], [2332, 1252, 1080, 0, 0], [2333, 1253, 1080, 0, 0], [2334, 1253, 1081, 0, 0], [2335, 1254, 1081, 0, 0], [2336, 1254, 1082, 0, 0], [2337, 1255, 1082, 0, 0], [2338, 1255, 1083, 0, 0], [2339, 1256, 1083, 0, 0], [2340, 1256, 1084, 0, 0], [2341, 1257, 1084, 0, 0], [2342, 1257, 1085, 0, 0], [2343, 1258, 1085, 0, 0], [2344, 1258, 1086, 0, 0], [2345, 1259, 1086, 0, 0], [2346, 1260, 1086, 0, 0], [2347, 1260, 1087, 0, 0], [2348, 1261, 1087, 0, 0], [2349, 1261, 1088, 0, 0], [2350, 1262, 1088, 0, 0], [2351, 1262, 1089, 0, 0], [2352, 1263, 1089, 0, 0], [2353, 1263, 1090, 0, 0], [2354, 1264, 1090, 0, 0], [2355, 1264, 1091, 0, 0], [2356, 1265, 1091, 0, 0], [2357, 1265, 1092, 0, 0], [2358, 1266, 1092, 0, 0], [2359, 1266, 1093, 0, 0], [2360, 1267, 1093, 0, 0], [2361, 1267, 1094, 0, 0], [2362, 1268, 1094, 0, 0], [2363, 1269, 1094, 0, 0], [2364, 1269, 1095, 0, 0], [2365, 1270, 1095, 0, 0], [2366, 1270, 1096, 0, 0], [2367, 1271, 1096, 0, 0], [2368, 1271, 1097, 0, 0], [2369, 1272, 1097, 0, 0], [2370, 1272, 1098, 0, 0], [2371, 1273, 1098, 0, 0], [2372, 1273, 1099, 0, 0], [2373, 1274, 1099, 0, 0], [2374, 1274, 1100, 0, 0], [2375, 1275, 1100, 0, 0], [2376, 1275, 1101, 0, 0], [2377, 1276, 1101, 0, 0], [2378, 1276, 1102, 0, 0], [2379, 1277, 1102, 0, 0], [2380, 1277, 1103, 0, 0], [2381, 1278, 1103, 0, 0], [2382, 1279, 1103, 0, 0], [2383, 1279, 1104, 0, 0], [2384, 1280, 1104, 0, 0], [2385, 1280, 1105, 0, 0], [2386, 1281, 1105, 0, 0], [2387, 1281, 1106, 0, 0], [2388, 1282, 1106, 0, 0], [2389, 1282, 1107, 0, 0], [2390, 1283, 1107, 0, 0], [2391, 1283, 1108, 0, 0], [2392, 1284, 1108, 0, 0], [2393, 1284, 1109, 0, 0], [2394, 1285, 1109, 0, 0], [2395, 1285, 1110, 0, 0], [2396, 1286, 1110, 0, 0], [2397, 1286, 1111, 0, 0], [2398, 1287, 1111, 0, 0], [2399, 1288, 1111, 0, 0], [2400, 1288, 1112, 0, 0], [2401, 1289, 1112, 0, 0], [2402, 1289, 1113, 0, 0], [2403, 1290, 1113, 0, 0], [2404, 1290, 1114, 0, 0], [2405, 1291, 1114, 0, 0], [2406, 1291, 1115, 0, 0], [2407, 1292, 1115, 0, 0], [2408, 1292, 1116, 0, 0], [2409, 1293, 1116, 0, 0], [2410, 1293, 1117, 0, 0], [2411, 1294, 1117, 0, 0], [2412, 1294, 1118, 0, 0], [2413, 1295, 1118, 0, 0], [2414, 1295, 1119, 0, 0], [2415, 1296, 1119, 0, 0], [2416, 1297, 1119, 0, 0], [2417, 1297, 1120, 0, 0], [2418, 1298, 1120, 0, 0], [2419, 1298, 1121, 0, 0], [2420, 1299, 1121, 0, 0], [2421, 1299, 1122, 0, 0], [2422, 1300, 1122, 0, 0], [2423, 1300, 1123, 0, 0], [2424, 1301, 1123, 0, 0], [2425, 1301, 1124, 0, 0], [2426, 1302, 1124, 0, 0], [2427, 1302, 1125, 0, 0], [2428, 1303, 1125, 0, 0], [2429, 1303, 1126, 0, 0], [2430, 1304, 1126, 0, 0], [2431, 1304, 1127, 0, 0], [2432, 1305, 1127, 0, 0], [2433, 1305, 1128, 0, 0], [2434, 1306, 1128, 0, 0], [2435, 1307, 1128, 0, 0], [2436, 1307, 1129, 0, 0], [2437, 1308, 1129, 0, 0], [2438, 1308, 1130, 0, 0], [2439, 1309, 1130, 0, 0], [2440, 1309, 1131, 0, 0], [2441, 1310, 1131, 0, 0], [2442, 1310, 1132, 0, 0], [2443, 1311, 1132, 0, 0], [2444, 1311, 1133, 0, 0], [2445, 1312, 1133, 0, 0], [2446, 1312, 1134, 0, 0], [2447, 1313, 1134, 0, 0], [2448, 1313, 1135, 0, 0], [2449, 1314, 1135, 0, 0], [2450, 1314, 1136, 0, 0], [2451, 1315, 1136, 0, 0], [2452, 1316, 1136, 0, 0], [2453, 1316, 1137, 0, 0], [2454, 1317, 1137, 0, 0], [2455, 1317, 1138, 0, 0], [2456, 1318, 1138, 0, 0], [2457, 1318, 1139, 0, 0], [2458, 1319, 1139, 0, 0], [2459, 1319, 1140, 0, 0], [2460, 1320, 1140, 0, 0], [2461, 1320, 1141, 0, 0], [2462, 1321, 1141, 0, 0], [2463, 1321, 1142, 0, 0], [2464, 1322, 1142, 0, 0], [2465, 1322, 1143, 0, 0], [2466, 1323, 1143, 0, 0], [2467, 1323, 1144, 0, 0], [2468, 1324, 1144, 0, 0], [2469, 1324, 1145, 0, 0], [2470, 1325, 1145, 0, 0], [2471, 1326, 1145, 0, 0], [2472, 1326, 1146, 0, 0], [2473, 1327, 1146, 0, 0], [2474, 1327, 1147, 0, 0], [2475, 1328, 1147, 0, 0], [2476, 1328, 1148, 0, 0], [2477, 1329, 1148, 0, 0], [2478, 1329, 1149, 0, 0], [2479, 1330, 1149, 0, 0], [2480, 1330, 1150, 0, 0], [2481, 1331, 1150, 0, 0], [2482, 1331, 1151, 0, 0], [2483, 1332, 1151, 0, 0], [2484, 1332, 1152, 0, 0], [2485, 1333, 1152, 0, 0], [2486, 1333, 1153, 0, 0], [2487, 1334, 1153, 0, 0], [2488, 1335, 1153, 0, 0], [2489, 1335, 1154, 0, 0], [2490, 1336, 1154, 0, 0], [2491, 1336, 1155, 0, 0], [2492, 1337, 1155, 0, 0], [2493, 1337, 1156, 0, 0], [2494, 1338, 1156, 0, 0], [2495, 1338, 1157, 0, 0], [2496, 1339, 1157, 0, 0], [2497, 1339, 1158, 0, 0], [2498, 1340, 1158, 0, 0], [2499, 1340, 1159, 0, 0], [2500, 1341, 1159, 0, 0], [2501, 1341, 1160, 0, 0], [2502, 1342, 1160, 0, 0], [2503, 1342, 1161, 0, 0], [2504, 1343, 1161, 0, 0], [2505, 1343, 1162, 0, 0], [2506, 1344, 1162, 0, 0], [2507, 1345, 1162, 0, 0], [2508, 1345, 1163, 0, 0], [2509, 1346, 1163, 0, 0], [2510, 1346, 1164, 0, 0], [2511, 1347, 1164, 0, 0], [2512, 1347, 1165, 0, 0], [2513, 1348, 1165, 0, 0], [2514, 1348, 1166, 0, 0], [2515, 1349, 1166, 0, 0], [2516, 1349, 1167, 0, 0], [2517, 1350, 1167, 0, 0], [2518, 1350, 1168, 0, 0], [2519, 1351, 1168, 0, 0], [2520, 1351, 1169, 0, 0], [2521, 1352, 1169, 0, 0], [2522, 1352, 1170, 0, 0], [2523, 1353, 1170, 0, 0], [2524, 1353, 1171, 0, 0], [2525, 1354, 1171, 0, 0], [2526, 1355, 1171, 0, 0], [2527, 1355, 1172, 0, 0], [2528, 1356, 1172, 0, 0], [2529, 1356, 1173, 0, 0], [2530, 1357, 1173, 0, 0], [2531, 1357, 1174, 0, 0], [2532, 1358, 1174, 0, 0], [2533, 1358, 1175, 0, 0], [2534, 1359, 1175, 0, 0], [2535, 1359, 1176, 0, 0], [2536, 1360, 1176, 0, 0], [2537, 1360, 1177, 0, 0], [2538, 1361, 1177, 0, 0], [2539, 1361, 1178, 0, 0], [2540, 1362, 1178, 0, 0], [2541, 1362, 1179, 0, 0], [2542, 1363, 1179, 0, 0], [2543, 1363, 1180, 0, 0], [2544, 1364, 1180, 0, 0], [2545, 1365, 1180, 0, 0], [2546, 1365, 1181, 0, 0], [2547, 1366, 1181, 0, 0], [2548, 1366, 1182, 0, 0], [2549, 1367, 1182, 0, 0], [2550, 1367, 1183, 0, 0], [2551, 1368, 1183, 0, 0], [2552, 1368, 1184, 0, 0], [2553, 1369, 1184, 0, 0], [2554, 1369, 1185, 0, 0], [2555, 1370, 1185, 0, 0], [2556, 1370, 1186, 0, 0], [2557, 1371, 1186, 0, 0], [2558, 1371, 1187, 0, 0], [2559, 1372, 1187, 0, 0], [2560, 1372, 1188, 0, 0], [2561, 1373, 1188, 0, 0], [2562, 1373, 1189, 0, 0], [2563, 1374, 1189, 0, 0], [2564, 1375, 1189, 0, 0], [2565, 1375, 1190, 0, 0], [2566, 1376, 1190, 0, 0], [2567, 1376, 1191, 0, 0], [2568, 1377, 1191, 0, 0], [2569, 1377, 1192, 0, 0], [2570, 1378, 1192, 0, 0], [2571, 1378, 1193, 0, 0], [2572, 1379, 1193, 0, 0], [2573, 1379, 1194, 0, 0], [2574, 1380, 1194, 0, 0], [2575, 1380, 1195, 0, 0], [2576, 1381, 1195, 0, 0], [2577, 1381, 1196, 0, 0], [2578, 1382, 1196, 0, 0], [2579, 1382, 1197, 0, 0], [2580, 1383, 1197, 0, 0], [2581, 1383, 1198, 0, 0], [2582, 1384, 1198, 0, 0], [2583, 1385, 1198, 0, 0], [2584, 1385, 1199, 0, 0], [2585, 1386, 1199, 0, 0], [2586, 1386, 1200, 0, 0], [2587, 1387, 1200, 0, 0], [2588, 1387, 1201, 0, 0], [2589, 1388, 1201, 0, 0], [2590, 1388, 1202, 0, 0], [2591, 1389, 1202, 0, 0], [2592, 1389, 1203, 0, 0], [2593, 1390, 1203, 0, 0], [2594, 1390, 1204, 0, 0], [2595, 1391, 1204, 0, 0], [2596, 1391, 1205, 0, 0], [2597, 1392, 1205, 0, 0], [2598, 1392, 1206, 0, 0], [2599, 1393, 1206, 0, 0], [2600, 1393, 1207, 0, 0], [2601, 1394, 1207, 0, 0], [2602, 1395, 1207, 0, 0], [2603, 1395, 1208, 0, 0], [2604, 1396, 1208, 0, 0], [2605, 1396, 1209, 0, 0], [2606, 1397, 1209, 0, 0], [2607, 1397, 1210, 0, 0], [2608, 1398, 1210, 0, 0], [2609, 1398, 1211, 0, 0], [2610, 1399, 1211, 0, 0], [2611, 1399, 1212, 0, 0], [2612, 1400, 1212, 0, 0], [2613, 1400, 1213, 0, 0], [2614, 1401, 1213, 0, 0], [2615, 1401, 1214, 0, 0], [2616, 1402, 1214, 0, 0], [2617, 1402, 1215, 0, 0], [2618, 1403, 1215, 0, 0], [2619, 1403, 1216, 0, 0], [2620, 1404, 1216, 0, 0], [2621, 1405, 1216, 0, 0], [2622, 1405, 1217, 0, 0], [2623, 1406, 1217, 0, 0], [2624, 1406, 1218, 0, 0], [2625, 1407, 1218, 0, 0], [2626, 1407, 1219, 0, 0], [2627, 1408, 1219, 0, 0], [2628, 1408, 1220, 0, 0], [2629, 1409, 1220, 0, 0], [2630, 1409, 1221, 0, 0], [2631, 1410, 1221, 0, 0], [2632, 1410, 1222, 0, 0], [2633, 1411, 1222, 0, 0], [2634, 1411, 1223, 0, 0], [2635, 1412, 1223, 0, 0], [2636, 1412, 1224, 0, 0], [2637, 1413, 1224, 0, 0], [2638, 1413, 1225, 0, 0], [2639, 1414, 1225, 0, 0], [2640, 1415, 1225, 0, 0], [2641, 1415, 1226, 0, 0], [2642, 1416, 1226, 0, 0], [2643, 1416, 1227, 0, 0], [2644, 1417, 1227, 0, 0], [2645, 1417, 1228, 0, 0], [2646, 1418, 1228, 0, 0], [2647, 1418, 1229, 0, 0], [2648, 1419, 1229, 0, 0], [2649, 1419, 1230, 0, 0], [2650, 1420, 1230, 0, 0], [2651, 1420, 1231, 0, 0], [2652, 1421, 1231, 0, 0], [2653, 1421, 1232, 0, 0], [2654, 1422, 1232, 0, 0], [2655, 1422, 1233, 0, 0], [2656, 1423, 1233, 0, 0], [2657, 1423, 1234, 0, 0], [2658, 1424, 1234, 0, 0], [2659, 1425, 1234, 0, 0], [2660, 1425, 1235, 0, 0], [2661, 1426, 1235, 0, 0], [2662, 1426, 1236, 0, 0], [2663, 1427, 1236, 0, 0], [2664, 1427, 1237, 0, 0], [2665, 1428, 1237, 0, 0], [2666, 1428, 1238, 0, 0], [2667, 1429, 1238, 0, 0], [2668, 1429, 1239, 0, 0], [2669, 1430, 1239, 0, 0], [2670, 1430, 1240, 0, 0], [2671, 1431, 1240, 0, 0], [2672, 1431, 1241, 0, 0], [2673, 1432, 1241, 0, 0], [2674, 1432, 1242, 0, 0], [2675, 1433, 1242, 0, 0], [2676, 1433, 1243, 0, 0], [2677, 1434, 1243, 0, 0], [2678, 1434, 1244, 0, 0], [2679, 1435, 1244, 0, 0], [2680, 1436, 1244, 0, 0], [2681, 1436, 1245, 0, 0], [2682, 1437, 1245, 0, 0], [2683, 1437, 1246, 0, 0], [2684, 1438, 1246, 0, 0], [2685, 1438, 1247, 0, 0], [2686, 1439, 1247, 0, 0], [2687, 1439, 1248, 0, 0], [2688, 1440, 1248, 0, 0], [2689, 1440, 1249, 0, 0], [2690, 1441, 1249, 0, 0], [2691, 1441, 1250, 0, 0], [2692, 1442, 1250, 0, 0], [2693, 1442, 1251, 0, 0], [2694, 1443, 1251, 0, 0], [2695, 1443, 1252, 0, 0], [2696, 1444, 1252, 0, 0], [2697, 1444, 1253, 0, 0], [2698, 1445, 1253, 0, 0], [2699, 1446, 1253, 0, 0], [2700, 1446, 1254, 0, 0], [2701, 1447, 1254, 0, 0], [2702, 1447, 1255, 0, 0], [2703, 1448, 1255, 0, 0], [2704, 1448, 1256, 0, 0], [2705, 1449, 1256, 0, 0], [2706, 1449, 1257, 0, 0], [2707, 1450, 1257, 0, 0], [2708, 1450, 1258, 0, 0], [2709, 1451, 1258, 0, 0], [2710, 1451, 1259, 0, 0], [2711, 1452, 1259, 0, 0], [2712, 1452, 1260, 0, 0], [2713, 1453, 1260, 0, 0], [2714, 1453, 1261, 0, 0], [2715, 1454, 1261, 0, 0], [2716, 1454, 1262, 0, 0], [2717, 1455, 1262, 0, 0], [2718, 1455, 1263, 0, 0], [2719, 1456, 1263, 0, 0], [2720, 1457, 1263, 0, 0], [2721, 1457, 1264, 0, 0], [2722, 1458, 1264, 0, 0], [2723, 1458, 1265, 0, 0], [2724, 1459, 1265, 0, 0], [2725, 1459, 1266, 0, 0], [2726, 1460, 1266, 0, 0], [2727, 1460, 1267, 0, 0], [2728, 1461, 1267, 0, 0], [2729, 1461, 1268, 0, 0], [2730, 1462, 1268, 0, 0], [2731, 1462, 1269, 0, 0], [2732, 1463, 1269, 0, 0], [2733, 1463, 1270, 0, 0], [2734, 1464, 1270, 0, 0], [2735, 1464, 1271, 0, 0], [2736, 1465, 1271, 0, 0], [2737, 1465, 1272, 0, 0], [2738, 1466, 1272, 0, 0], [2739, 1467, 1272, 0, 0], [2740, 1467, 1273, 0, 0], [2741, 1468, 1273, 0, 0], [2742, 1468, 1274, 0, 0], [2743, 1469, 1274, 0, 0], [2744, 1469, 1275, 0, 0], [2745, 1470, 1275, 0, 0], [2746, 1470, 1276, 0, 0], [2747, 1471, 1276, 0, 0], [2748, 1471, 1277, 0, 0], [2749, 1472, 1277, 0, 0], [2750, 1472, 1278, 0, 0], [2751, 1473, 1278, 0, 0], [2752, 1473, 1279, 0, 0], [2753, 1474, 1279, 0, 0], [2754, 1474, 1280, 0, 0], [2755, 1475, 1280, 0, 0], [2756, 1475, 1281, 0, 0], [2757, 1476, 1281, 0, 0], [2758, 1476, 1282, 0, 0], [2759, 1477, 1282, 0, 0], [2760, 1478, 1282, 0, 0], [2761, 1478, 1283, 0, 0], [2762, 1479, 1283, 0, 0], [2763, 1479, 1284, 0, 0], [2764, 1480, 1284, 0, 0], [2765, 1480, 1285, 0, 0], [2766, 1481, 1285, 0, 0], [2767, 1481, 1286, 0, 0], [2768, 1482, 1286, 0, 0], [2769, 1482, 1287, 0, 0], [2770, 1483, 1287, 0, 0], [2771, 1483, 1288, 0, 0], [2772, 1484, 1288, 0, 0], [2773, 1484, 1289, 0, 0], [2774, 1485, 1289, 0, 0], [2775, 1485, 1290, 0, 0], [2776, 1486, 1290, 0, 0], [2777, 1486, 1291, 0, 0], [2778, 1487, 1291, 0, 0], [2779, 1487, 1292, 0, 0], [2780, 1488, 1292, 0, 0], [2781, 1489, 1292, 0, 0], [2782, 1489, 1293, 0, 0], [2783, 1490, 1293, 0, 0], [2784, 1490, 1294, 0, 0], [2785, 1491, 1294, 0, 0], [2786, 1491, 1295, 0, 0], [2787, 1492, 1295, 0, 0], [2788, 1492, 1296, 0, 0], [2789, 1493, 1296, 0, 0], [2790, 1493, 1297, 0, 0], [2791, 1494, 1297, 0, 0], [2792, 1494, 1298, 0, 0], [2793, 1495, 1298, 0, 0], [2794, 1495, 1299, 0, 0], [2795, 1496, 1299, 0, 0], [2796, 1496, 1300, 0, 0], [2797, 1497, 1300, 0, 0], [2798, 1497, 1301, 0, 0], [2799, 1498, 1301, 0, 0], [2800, 1498, 1302, 0, 0], [2801, 1499, 1302, 0, 0], [2802, 1500, 1302, 0, 0], [2803, 1500, 1303, 0, 0], [2804, 1501, 1303, 0, 0], [2805, 1501, 1304, 0, 0], [2806, 1502, 1304, 0, 0], [2807, 1502, 1305, 0, 0], [2808, 1503, 1305, 0, 0], [2809, 1503, 1306, 0, 0], [2810, 1504, 1306, 0, 0], [2811, 1504, 1307, 0, 0], [2812, 1505, 1307, 0, 0], [2813, 1505, 1308, 0, 0], [2814, 1506, 1308, 0, 0], [2815, 1506, 1309, 0, 0], [2816, 1507, 1309, 0, 0], [2817, 1507, 1310, 0, 0], [2818, 1508, 1310, 0, 0], [2819, 1508, 1311, 0, 0], [2820, 1509, 1311, 0, 0], [2821, 1509, 1312, 0, 0], [2822, 1510, 1312, 0, 0], [2823, 1511, 1312, 0, 0], [2824, 1511, 1313, 0, 0], [2825, 1512, 1313, 0, 0], [2826, 1512, 1314, 0, 0], [2827, 1513, 1314, 0, 0], [2828, 1513, 1315, 0, 0], [2829, 1514, 1315, 0, 0], [2830, 1514, 1316, 0, 0], [2831, 1515, 1316, 0, 0], [2832, 1515, 1317, 0, 0], [2833, 1516, 1317, 0, 0], [2834, 1516, 1318, 0, 0], [2835, 1517, 1318, 0, 0], [2836, 1517, 1319, 0, 0], [2837, 1518, 1319, 0, 0], [2838, 1518, 1320, 0, 0], [2839, 1519, 1320, 0, 0], [2840, 1519, 1321, 0, 0], [2841, 1520, 1321, 0, 0], [2842, 1520, 1322, 0, 0], [2843, 1521, 1322, 0, 0], [2844, 1522, 1322, 0, 0], [2845, 1522, 1323, 0, 0], [2846, 1523, 1323, 0, 0], [2847, 1523, 1324, 0, 0], [2848, 1524, 1324, 0, 0], [2849, 1524, 1325, 0, 0], [2850, 1525, 1325, 0, 0], [2851, 1525, 1326, 0, 0], [2852, 1526, 1326, 0, 0], [2853, 1526, 1327, 0, 0], [2854, 1527, 1327, 0, 0], [2855, 1527, 1328, 0, 0], [2856, 1528, 1328, 0, 0], [2857, 1528, 1329, 0, 0], [2858, 1529, 1329, 0, 0], [2859, 1529, 1330, 0, 0], [2860, 1530, 1330, 0, 0], [2861, 1530, 1331, 0, 0], [2862, 1531, 1331, 0, 0], [2863, 1531, 1332, 0, 0], [2864, 1532, 1332, 0, 0], [2865, 1533, 1332, 0, 0], [2866, 1533, 1333, 0, 0], [2867, 1534, 1333, 0, 0], [2868, 1534, 1334, 0, 0], [2869, 1535, 1334, 0, 0], [2870, 1535, 1335, 0, 0], [2871, 1536, 1335, 0, 0], [2872, 1536, 1336, 0, 0], [2873, 1537, 1336, 0, 0], [2874, 1537, 1337, 0, 0], [2875, 1538, 1337, 0, 0], [2876, 1538, 1338, 0, 0], [2877, 1539, 1338, 0, 0], [2878, 1539, 1339, 0, 0], [2879, 1540, 1339, 0, 0], [2880, 1540, 1340, 0, 0], [2881, 1541, 1340, 0, 0], [2882, 1541, 1341, 0, 0], [2883, 1542, 1341, 0, 0], [2884, 1542, 1342, 0, 0], [2885, 1543, 1342, 0, 0], [2886, 1544, 1342, 0, 0], [2887, 1544, 1343, 0, 0], [2888, 1545, 1343, 0, 0], [2889, 1545, 1344, 0, 0], [2890, 1546, 1344, 0, 0], [2891, 1546, 1345, 0, 0], [2892, 1547, 1345, 0, 0], [2893, 1547, 1346, 0, 0], [2894, 1548, 1346, 0, 0], [2895, 1548, 1347, 0, 0], [2896, 1549, 1347, 0, 0], [2897, 1549, 1348, 0, 0], [2898, 1550, 1348, 0, 0], [2899, 1550, 1349, 0, 0], [2900, 1551, 1349, 0, 0], [2901, 1551, 1350, 0, 0], [2902, 1552, 1350, 0, 0], [2903, 1552, 1351, 0, 0], [2904, 1553, 1351, 0, 0], [2905, 1553, 1352, 0, 0], [2906, 1554, 1352, 0, 0], [2907, 1554, 1353, 0, 0], [2908, 1555, 1353, 0, 0], [2909, 1556, 1353, 0, 0], [2910, 1556, 1354, 0, 0], [2911, 1557, 1354, 0, 0], [2912, 1557, 1355, 0, 0], [2913, 1558, 1355, 0, 0], [2914, 1558, 1356, 0, 0], [2915, 1559, 1356, 0, 0], [2916, 1559, 1357, 0, 0], [2917, 1560, 1357, 0, 0], [2918, 1560, 1358, 0, 0], [2919, 1561, 1358, 0, 0], [2920, 1561, 1359, 0, 0], [2921, 1562, 1359, 0, 0], [2922, 1562, 1360, 0, 0], [2923, 1563, 1360, 0, 0], [2924, 1563, 1361, 0, 0], [2925, 1564, 1361, 0, 0], [2926, 1564, 1362, 0, 0], [2927, 1565, 1362, 0, 0], [2928, 1565, 1363, 0, 0], [2929, 1566, 1363, 0, 0], [2930, 1567, 1363, 0, 0], [2931, 1567, 1364, 0, 0], [2932, 1568, 1364, 0, 0], [2933, 1568, 1365, 0, 0], [2934, 1569, 1365, 0, 0], [2935, 1569, 1366, 0, 0], [2936, 1570, 1366, 0, 0], [2937, 1570, 1367, 0, 0], [2938, 1571, 1367, 0, 0], [2939, 1571, 1368, 0, 0], [2940, 1572, 1368, 0, 0], [2941, 1572, 1369, 0, 0], [2942, 1573, 1369, 0, 0], [2943, 1573, 1370, 0, 0], [2944, 1574, 1370, 0, 0], [2945, 1574, 1371, 0, 0], [2946, 1575, 1371, 0, 0], [2947, 1575, 1372, 0, 0], [2948, 1576, 1372, 0, 0], [2949, 1576, 1373, 0, 0], [2950, 1577, 1373, 0, 0], [2951, 1577, 1374, 0, 0], [2952, 1578, 1374, 0, 0], [2953, 1579, 1374, 0, 0], [2954, 1579, 1375, 0, 0], [2955, 1580, 1375, 0, 0], [2956, 1580, 1376, 0, 0], [2957, 1581, 1376, 0, 0], [2958, 1581, 1377, 0, 0], [2959, 1582, 1377, 0, 0], [2960, 1582, 1378, 0, 0], [2961, 1583, 1378, 0, 0], [2962, 1583, 1379, 0, 0], [2963, 1584, 1379, 0, 0], [2964, 1584, 1380, 0, 0], [2965, 1585, 1380, 0, 0], [2966, 1585, 1381, 0, 0], [2967, 1586, 1381, 0, 0], [2968, 1586, 1382, 0, 0], [2969, 1587, 1382, 0, 0], [2970, 1587, 1383, 0, 0], [2971, 1588, 1383, 0, 0], [2972, 1588, 1384, 0, 0], [2973, 1589, 1384, 0, 0], [2974, 1590, 1384, 0, 0], [2975, 1590, 1385, 0, 0], [2976, 1591, 1385, 0, 0], [2977, 1591, 1386, 0, 0], [2978, 1592, 1386, 0, 0], [2979, 1592, 1387, 0, 0], [2980, 1593, 1387, 0, 0], [2981, 1593, 1388, 0, 0], [2982, 1594, 1388, 0, 0], [2983, 1594, 1389, 0, 0], [2984, 1595, 1389, 0, 0], [2985, 1595, 1390, 0, 0], [2986, 1596, 1390, 0, 0], [2987, 1596, 1391, 0, 0], [2988, 1597, 1391, 0, 0], [2989, 1597, 1392, 0, 0], [2990, 1598, 1392, 0, 0], [2991, 1598, 1393, 0, 0], [2992, 1599, 1393, 0, 0], [2993, 1599, 1394, 0, 0], [2994, 1600, 1394, 0, 0], [2995, 1600, 1395, 0, 0], [2996, 1601, 1395, 0, 0], [2997, 1602, 1395, 0, 0], [2998, 1602, 1396, 0, 0], [2999, 1603, 1396, 0, 0], [3000, 1603, 1397, 0, 0], [3001, 1604, 1397, 0, 0], [3002, 1604, 1398, 0, 0], [3003, 1605, 1398, 0, 0], [3004, 1605, 1399, 0, 0], [3005, 1606, 1399, 0, 0], [3006, 1606, 1400, 0, 0], [3007, 1607, 1400, 0, 0], [3008, 1607, 1401, 0, 0], [3009, 1608, 1401, 0, 0], [3010, 1608, 1402, 0, 0], [3011, 1609, 1402, 0, 0], [3012, 1609, 1403, 0, 0], [3013, 1610, 1403, 0, 0], [3014, 1610, 1404, 0, 0], [3015, 1611, 1404, 0, 0], [3016, 1611, 1405, 0, 0], [3017, 1612, 1405, 0, 0], [3018, 1612, 1406, 0, 0], [3019, 1613, 1406, 0, 0], [3020, 1614, 1406, 0, 0], [3021, 1614, 1407, 0, 0], [3022, 1615, 1407, 0, 0], [3023, 1615, 1408, 0, 0], [3024, 1616, 1408, 0, 0], [3025, 1616, 1409, 0, 0], [3026, 1617, 1409, 0, 0], [3027, 1617, 1410, 0, 0], [3028, 1618, 1410, 0, 0], [3029, 1618, 1411, 0, 0], [3030, 1619, 1411, 0, 0], [3031, 1619, 1412, 0, 0], [3032, 1620, 1412, 0, 0], [3033, 1620, 1413, 0, 0], [3034, 1621, 1413, 0, 0], [3035, 1621, 1414, 0, 0], [3036, 1622, 1414, 0, 0], [3037, 1622, 1415, 0, 0], [3038, 1623, 1415, 0, 0], [3039, 1623, 1416, 0, 0], [3040, 1624, 1416, 0, 0], [3041, 1624, 1417, 0, 0], [3042, 1625, 1417, 0, 0], [3043, 1626, 1417, 0, 0], [3044, 1626, 1418, 0, 0], [3045, 1627, 1418, 0, 0], [3046, 1627, 1419, 0, 0], [3047, 1628, 1419, 0, 0], [3048, 1628, 1420, 0, 0], [3049, 1629, 1420, 0, 0], [3050, 1629, 1421, 0, 0], [3051, 1630, 1421, 0, 0], [3052, 1630, 1422, 0, 0], [3053, 1631, 1422, 0, 0], [3054, 1631, 1423, 0, 0], [3055, 1632, 1423, 0, 0], [3056, 1632, 1424, 0, 0], [3057, 1633, 1424, 0, 0], [3058, 1633, 1425, 0, 0], [3059, 1634, 1425, 0, 0], [3060, 1634, 1426, 0, 0], [3061, 1635, 1426, 0, 0], [3062, 1635, 1427, 0, 0], [3063, 1636, 1427, 0, 0], [3064, 1636, 1428, 0, 0], [3065, 1637, 1428, 0, 0], [3066, 1638, 1428, 0, 0], [3067, 1638, 1429, 0, 0], [3068, 1639, 1429, 0, 0], [3069, 1639, 1430, 0, 0], [3070, 1640, 1430, 0, 0], [3071, 1640, 1431, 0, 0], [3072, 1641, 1431, 0, 0], [3073, 1641, 1432, 0, 0], [3074, 1642, 1432, 0, 0], [3075, 1642, 1433, 0, 0], [3076, 1643, 1433, 0, 0], [3077, 1643, 1434, 0, 0], [3078, 1644, 1434, 0, 0], [3079, 1644, 1435, 0, 0], [3080, 1645, 1435, 0, 0], [3081, 1645, 1436, 0, 0], [3082, 1646, 1436, 0, 0], [3083, 1646, 1437, 0, 0], [3084, 1647, 1437, 0, 0], [3085, 1647, 1438, 0, 0], [3086, 1648, 1438, 0, 0], [3087, 1648, 1439, 0, 0], [3088, 1649, 1439, 0, 0], [3089, 1650, 1439, 0, 0], [3090, 1650, 1440, 0, 0], [3091, 1651, 1440, 0, 0], [3092, 1651, 1441, 0, 0], [3093, 1652, 1441, 0, 0], [3094, 1652, 1442, 0, 0], [3095, 1653, 1442, 0, 0], [3096, 1653, 1443, 0, 0], [3097, 1654, 1443, 0, 0], [3098, 1654, 1444, 0, 0], [3099, 1655, 1444, 0, 0], [3100, 1655, 1445, 0, 0], [3101, 1656, 1445, 0, 0], [3102, 1656, 1446, 0, 0], [3103, 1657, 1446, 0, 0], [3104, 1657, 1447, 0, 0], [3105, 1658, 1447, 0, 0], [3106, 1658, 1448, 0, 0], [3107, 1659, 1448, 0, 0], [3108, 1659, 1449, 0, 0], [3109, 1660, 1449, 0, 0], [3110, 1660, 1450, 0, 0], [3111, 1661, 1450, 0, 0], [3112, 1661, 1451, 0, 0], [3113, 1662, 1451, 0, 0], [3114, 1663, 1451, 0, 0], [3115, 1663, 1452, 0, 0], [3116, 1664, 1452, 0, 0], [3117, 1664, 1453, 0, 0], [3118, 1665, 1453, 0, 0], [3119, 1665, 1454, 0, 0], [3120, 1666, 1454, 0, 0], [3121, 1666, 1455, 0, 0], [3122, 1667, 1455, 0, 0], [3123, 1667, 1456, 0, 0], [3124, 1668, 1456, 0, 0], [3125, 1668, 1457, 0, 0], [3126, 1669, 1457, 0, 0], [3127, 1669, 1458, 0, 0], [3128, 1670, 1458, 0, 0], [3129, 1670, 1459, 0, 0], [3130, 1671, 1459, 0, 0], [3131, 1671, 1460, 0, 0], [3132, 1672, 1460, 0, 0], [3133, 1672, 1461, 0, 0], [3134, 1673, 1461, 0, 0], [3135, 1673, 1462, 0, 0], [3136, 1674, 1462, 0, 0], [3137, 1675, 1462, 0, 0], [3138, 1675, 1463, 0, 0], [3139, 1676, 1463, 0, 0], [3140, 1676, 1464, 0, 0], [3141, 1677, 1464, 0, 0], [3142, 1677, 1465, 0, 0], [3143, 1678, 1465, 0, 0], [3144, 1678, 1466, 0, 0], [3145, 1679, 1466, 0, 0], [3146, 1679, 1467, 0, 0], [3147, 1680, 1467, 0, 0], [3148, 1680, 1468, 0, 0], [3149, 1681, 1468, 0, 0], [3150, 1681, 1469, 0, 0], [3151, 1682, 1469, 0, 0], [3152, 1682, 1470, 0, 0], [3153, 1683, 1470, 0, 0], [3154, 1683, 1471, 0, 0], [3155, 1684, 1471, 0, 0], [3156, 1684, 1472, 0, 0], [3157, 1685, 1472, 0, 0], [3158, 1685, 1473, 0, 0], [3159, 1686, 1473, 0, 0], [3160, 1686, 1474, 0, 0], [3161, 1687, 1474, 0, 0], [3162, 1688, 1474, 0, 0], [3163, 1688, 1475, 0, 0], [3164, 1689, 1475, 0, 0], [3165, 1689, 1476, 0, 0], [3166, 1690, 1476, 0, 0], [3167, 1690, 1477, 0, 0], [3168, 1691, 1477, 0, 0], [3169, 1691, 1478, 0, 0], [3170, 1692, 1478, 0, 0], [3171, 1692, 1479, 0, 0], [3172, 1693, 1479, 0, 0], [3173, 1693, 1480, 0, 0], [3174, 1694, 1480, 0, 0], [3175, 1694, 1481, 0, 0], [3176, 1695, 1481, 0, 0], [3177, 1695, 1482, 0, 0], [3178, 1696, 1482, 0, 0], [3179, 1696, 1483, 0, 0], [3180, 1697, 1483, 0, 0], [3181, 1697, 1484, 0, 0], [3182, 1698, 1484, 0, 0], [3183, 1698, 1485, 0, 0], [3184, 1699, 1485, 0, 0], [3185, 1700, 1485, 0, 0], [3186, 1700, 1486, 0, 0], [3187, 1701, 1486, 0, 0], [3188, 1701, 1487, 0, 0], [3189, 1702, 1487, 0, 0], [3190, 1702, 1488, 0, 0], [3191, 1703, 1488, 0, 0], [3192, 1703, 1489, 0, 0], [3193, 1704, 1489, 0, 0], [3194, 1704, 1490, 0, 0], [3195, 1705, 1490, 0, 0], [3196, 1705, 1491, 0, 0], [3197, 1706, 1491, 0, 0], [3198, 1706, 1492, 0, 0], [3199, 1707, 1492, 0, 0], [3200, 1707, 1493, 0, 0], [3201, 1708, 1493, 0, 0], [3202, 1708, 1494, 0, 0], [3203, 1709, 1494, 0, 0], [3204, 1709, 1495, 0, 0], [3205, 1710, 1495, 0, 0], [3206, 1710, 1496, 0, 0], [3207, 1711, 1496, 0, 0], [3208, 1711, 1497, 0, 0], [3209, 1712, 1497, 0, 0], [3210, 1713, 1497, 0, 0], [3211, 1713, 1498, 0, 0], [3212, 1714, 1498, 0, 0], [3213, 1714, 1499, 0, 0], [3214, 1715, 1499, 0, 0], [3215, 1715, 1500, 0, 0], [3216, 1716, 1500, 0, 0], [3217, 1716, 1501, 0, 0], [3218, 1717, 1501, 0, 0], [3219, 1717, 1502, 0, 0], [3220, 1718, 1502, 0, 0], [3221, 1718, 1503, 0, 0], [3222, 1719, 1503, 0, 0], [3223, 1719, 1504, 0, 0], [3224, 1720, 1504, 0, 0], [3225, 1720, 1505, 0, 0], [3226, 1721, 1505, 0, 0], [3227, 1721, 1506, 0, 0], [3228, 1722, 1506, 0, 0], [3229, 1722, 1507, 0, 0], [3230, 1723, 1507, 0, 0], [3231, 1723, 1508, 0, 0], [3232, 1724, 1508, 0, 0], [3233, 1724, 1509, 0, 0], [3234, 1725, 1509, 0, 0], [3235, 1726, 1509, 0, 0], [3236, 1726, 1510, 0, 0], [3237, 1727, 1510, 0, 0], [3238, 1727, 1511, 0, 0], [3239, 1728, 1511, 0, 0], [3240, 1728, 1512, 0, 0], [3241, 1729, 1512, 0, 0], [3242, 1729, 1513, 0, 0], [3243, 1730, 1513, 0, 0], [3244, 1730, 1514, 0, 0], [3245, 1731, 1514, 0, 0], [3246, 1731, 1515, 0, 0], [3247, 1732, 1515, 0, 0], [3248, 1732, 1516, 0, 0], [3249, 1733, 1516, 0, 0], [3250, 1733, 1517, 0, 0], [3251, 1734, 1517, 0, 0], [3252, 1734, 1518, 0, 0], [3253, 1735, 1518, 0, 0], [3254, 1735, 1519, 0, 0], [3255, 1736, 1519, 0, 0], [3256, 1736, 1520, 0, 0], [3257, 1737, 1520, 0, 0], [3258, 1737, 1521, 0, 0], [3259, 1738, 1521, 0, 0], [3260, 1739, 1521, 0, 0], [3261, 1739, 1522, 0, 0], [3262, 1740, 1522, 0, 0], [3263, 1740, 1523, 0, 0], [3264, 1741, 1523, 0, 0], [3265, 1741, 1524, 0, 0], [3266, 1742, 1524, 0, 0], [3267, 1742, 1525, 0, 0], [3268, 1743, 1525, 0, 0], [3269, 1743, 1526, 0, 0], [3270, 1744, 1526, 0, 0], [3271, 1744, 1527, 0, 0], [3272, 1745, 1527, 0, 0], [3273, 1745, 1528, 0, 0], [3274, 1746, 1528, 0, 0], [3275, 1746, 1529, 0, 0], [3276, 1747, 1529, 0, 0], [3277, 1747, 1530, 0, 0], [3278, 1748, 1530, 0, 0], [3279, 1748, 1531, 0, 0], [3280, 1749, 1531, 0, 0], [3281, 1749, 1532, 0, 0], [3282, 1750, 1532, 0, 0], [3283, 1750, 1533, 0, 0], [3284, 1751, 1533, 0, 0], [3285, 1751, 1534, 0, 0], [3286, 1752, 1534, 0, 0], [3287, 1753, 1534, 0, 0], [3288, 1753, 1535, 0, 0], [3289, 1754, 1535, 0, 0], [3290, 1754, 1536, 0, 0], [3291, 1755, 1536, 0, 0], [3292, 1755, 1537, 0, 0], [3293, 1756, 1537, 0, 0], [3294, 1756, 1538, 0, 0], [3295, 1757, 1538, 0, 0], [3296, 1757, 1539, 0, 0], [3297, 1758, 1539, 0, 0], [3298, 1758, 1540, 0, 0], [3299, 1759, 1540, 0, 0], [3300, 1759, 1541, 0, 0], [3301, 1760, 1541, 0, 0], [3302, 1760, 1542, 0, 0], [3303, 1761, 1542, 0, 0], [3304, 1761, 1543, 0, 0], [3305, 1762, 1543, 0, 0], [3306, 1762, 1544, 0, 0], [3307, 1763, 1544, 0, 0], [3308, 1763, 1545, 0, 0], [3309, 1764, 1545, 0, 0], [3310, 1764, 1546, 0, 0], [3311, 1765, 1546, 0, 0], [3312, 1766, 1546, 0, 0], [3313, 1766, 1547, 0, 0], [3314, 1767, 1547, 0, 0], [3315, 1767, 1548, 0, 0], [3316, 1768, 1548, 0, 0], [3317, 1768, 1549, 0, 0], [3318, 1769, 1549, 0, 0], [3319, 1769, 1550, 0, 0], [3320, 1770, 1550, 0, 0], [3321, 1770, 1551, 0, 0], [3322, 1771, 1551, 0, 0], [3323, 1771, 1552, 0, 0], [3324, 1772, 1552, 0, 0], [3325, 1772, 1553, 0, 0], [3326, 1773, 1553, 0, 0], [3327, 1773, 1554, 0, 0], [3328, 1774, 1554, 0, 0], [3329, 1774, 1555, 0, 0], [3330, 1775, 1555, 0, 0], [3331, 1775, 1556, 0, 0], [3332, 1776, 1556, 0, 0], [3333, 1776, 1557, 0, 0], [3334, 1777, 1557, 0, 0], [3335, 1777, 1558, 0, 0], [3336, 1778, 1558, 0, 0], [3337, 1778, 1559, 0, 0], [3338, 1779, 1559, 0, 0], [3339, 1780, 1559, 0, 0], [3340, 1780, 1560, 0, 0], [3341, 1781, 1560, 0, 0], [3342, 1781, 1561, 0, 0], [3343, 1782, 1561, 0, 0], [3344, 1782, 1562, 0, 0], [3345, 1783, 1562, 0, 0], [3346, 1783, 1563, 0, 0], [3347, 1784, 1563, 0, 0], [3348, 1784, 1564, 0, 0], [3349, 1785, 1564, 0, 0], [3350, 1785, 1565, 0, 0], [3351, 1786, 1565, 0, 0], [3352, 1786, 1566, 0, 0], [3353, 1787, 1566, 0, 0], [3354, 1787, 1567, 0, 0], [3355, 1788, 1567, 0, 0], [3356, 1788, 1568, 0, 0], [3357, 1789, 1568, 0, 0], [3358, 1789, 1569, 0, 0], [3359, 1790, 1569, 0, 0], [3360, 1790, 1570, 0, 0], [3361, 1791, 1570, 0, 0], [3362, 1791, 1571, 0, 0], [3363, 1792, 1571, 0, 0], [3364, 1793, 1571, 0, 0], [3365, 1793, 1572, 0, 0], [3366, 1794, 1572, 0, 0], [3367, 1794, 1573, 0, 0], [3368, 1795, 1573, 0, 0], [3369, 1795, 1574, 0, 0], [3370, 1796, 1574, 0, 0], [3371, 1796, 1575, 0, 0], [3372, 1797, 1575, 0, 0], [3373, 1797, 1576, 0, 0], [3374, 1798, 1576, 0, 0], [3375, 1798, 1577, 0, 0], [3376, 1799, 1577, 0, 0], [3377, 1799, 1578, 0, 0], [3378, 1800, 1578, 0, 0], [3379, 1800, 1579, 0, 0], [3380, 1801, 1579, 0, 0], [3381, 1801, 1580, 0, 0], [3382, 1802, 1580, 0, 0], [3383, 1802, 1581, 0, 0], [3384, 1803, 1581, 0, 0], [3385, 1803, 1582, 0, 0], [3386, 1804, 1582, 0, 0], [3387, 1804, 1583, 0, 0], [3388, 1805, 1583, 0, 0], [3389, 1805, 1584, 0, 0], [3390, 1806, 1584, 0, 0], [3391, 1807, 1584, 0, 0], [3392, 1807, 1585, 0, 0], [3393, 1808, 1585, 0, 0], [3394, 1808, 1586, 0, 0], [3395, 1809, 1586, 0, 0], [3396, 1809, 1587, 0, 0], [3397, 1810, 1587, 0, 0], [3398, 1810, 1588, 0, 0], [3399, 1811, 1588, 0, 0], [3400, 1811, 1589, 0, 0], [3401, 1812, 1589, 0, 0], [3402, 1812, 1590, 0, 0], [3403, 1813, 1590, 0, 0], [3404, 1813, 1591, 0, 0], [3405, 1814, 1591, 0, 0], [3406, 1814, 1592, 0, 0], [3407, 1815, 1592, 0, 0], [3408, 1815, 1593, 0, 0], [3409, 1816, 1593, 0, 0], [3410, 1816, 1594, 0, 0], [3411, 1817, 1594, 0, 0], [3412, 1817, 1595, 0, 0], [3413, 1818, 1595, 0, 0], [3414, 1818, 1596, 0, 0], [3415, 1819, 1596, 0, 0], [3416, 1819, 1597, 0, 0], [3417, 1820, 1597, 0, 0], [3418, 1821, 1597, 0, 0], [3419, 1821, 1598, 0, 0], [3420, 1822, 1598, 0, 0], [3421, 1822, 1599, 0, 0], [3422, 1823, 1599, 0, 0], [3423, 1823, 1600, 0, 0], [3424, 1824, 1600, 0, 0], [3425, 1824, 1601, 0, 0], [3426, 1825, 1601, 0, 0], [3427, 1825, 1602, 0, 0], [3428, 1826, 1602, 0, 0], [3429, 1826, 1603, 0, 0], [3430, 1827, 1603, 0, 0], [3431, 1827, 1604, 0, 0], [3432, 1828, 1604, 0, 0], [3433, 1828, 1605, 0, 0], [3434, 1829, 1605, 0, 0], [3435, 1829, 1606, 0, 0], [3436, 1830, 1606, 0, 0], [3437, 1830, 1607, 0, 0], [3438, 1831, 1607, 0, 0], [3439, 1831, 1608, 0, 0], [3440, 1832, 1608, 0, 0], [3441, 1832, 1609, 0, 0], [3442, 1833, 1609, 0, 0], [3443, 1833, 1610, 0, 0], [3444, 1834, 1610, 0, 0], [3445, 1835, 1610, 0, 0], [3446, 1835, 1611, 0, 0], [3447, 1836, 1611, 0, 0], [3448, 1836, 1612, 0, 0], [3449, 1837, 1612, 0, 0], [3450, 1837, 1613, 0, 0], [3451, 1838, 1613, 0, 0], [3452, 1838, 1614, 0, 0], [3453, 1839, 1614, 0, 0], [3454, 1839, 1615, 0, 0], [3455, 1840, 1615, 0, 0], [3456, 1840, 1616, 0, 0], [3457, 1841, 1616, 0, 0], [3458, 1841, 1617, 0, 0], [3459, 1842, 1617, 0, 0], [3460, 1842, 1618, 0, 0], [3461, 1843, 1618, 0, 0], [3462, 1843, 1619, 0, 0], [3463, 1844, 1619, 0, 0], [3464, 1844, 1620, 0, 0], [3465, 1845, 1620, 0, 0], [3466, 1845, 1621, 0, 0], [3467, 1846, 1621, 0, 0], [3468, 1846, 1622, 0, 0], [3469, 1847, 1622, 0, 0], [3470, 1847, 1623, 0, 0], [3471, 1848, 1623, 0, 0], [3472, 1848, 1624, 0, 0], [3473, 1849, 1624, 0, 0], [3474, 1850, 1624, 0, 0], [3475, 1850, 1625, 0, 0], [3476, 1851, 1625, 0, 0], [3477, 1851, 1626, 0, 0], [3478, 1852, 1626, 0, 0], [3479, 1852, 1627, 0, 0], [3480, 1853, 1627, 0, 0], [3481, 1853, 1628, 0, 0], [3482, 1854, 1628, 0, 0], [3483, 1854, 1629, 0, 0], [3484, 1855, 1629, 0, 0], [3485, 1855, 1630, 0, 0], [3486, 1856, 1630, 0, 0], [3487, 1856, 1631, 0, 0], [3488, 1857, 1631, 0, 0], [3489, 1857, 1632, 0, 0], [3490, 1858, 1632, 0, 0], [3491, 1858, 1633, 0, 0], [3492, 1859, 1633, 0, 0], [3493, 1859, 1634, 0, 0], [3494, 1860, 1634, 0, 0], [3495, 1860, 1635, 0, 0], [3496, 1861, 1635, 0, 0], [3497, 1861, 1636, 0, 0], [3498, 1862, 1636, 0, 0], [3499, 1862, 1637, 0, 0], [3500, 1863, 1637, 0, 0], [3501, 1864, 1637, 0, 0], [3502, 1864, 1638, 0, 0], [3503, 1865, 1638, 0, 0], [3504, 1865, 1639, 0, 0], [3505, 1866, 1639, 0, 0], [3506, 1866, 1640, 0, 0], [3507, 1867, 1640, 0, 0], [3508, 1867, 1641, 0, 0], [3509, 1868, 1641, 0, 0], [3510, 1868, 1642, 0, 0], [3511, 1869, 1642, 0, 0], [3512, 1869, 1643, 0, 0], [3513, 1870, 1643, 0, 0], [3514, 1870, 1644, 0, 0], [3515, 1871, 1644, 0, 0], [3516, 1871, 1645, 0, 0], [3517, 1872, 1645, 0, 0], [3518, 1872, 1646, 0, 0], [3519, 1873, 1646, 0, 0], [3520, 1873, 1647, 0, 0], [3521, 1874, 1647, 0, 0], [3522, 1874, 1648, 0, 0], [3523, 1875, 1648, 0, 0], [3524, 1875, 1649, 0, 0], [3525, 1876, 1649, 0, 0], [3526, 1876, 1650, 0, 0], [3527, 1877, 1650, 0, 0], [3528, 1877, 1651, 0, 0], [3529, 1878, 1651, 0, 0], [3530, 1879, 1651, 0, 0], [3531, 1879, 1652, 0, 0], [3532, 1880, 1652, 0, 0], [3533, 1880, 1653, 0, 0], [3534, 1881, 1653, 0, 0], [3535, 1881, 1654, 0, 0], [3536, 1882, 1654, 0, 0], [3537, 1882, 1655, 0, 0], [3538, 1883, 1655, 0, 0], [3539, 1883, 1656, 0, 0], [3540, 1884, 1656, 0, 0], [3541, 1884, 1657, 0, 0], [3542, 1885, 1657, 0, 0], [3543, 1885, 1658, 0, 0], [3544, 1886, 1658, 0, 0], [3545, 1886, 1659, 0, 0], [3546, 1887, 1659, 0, 0], [3547, 1887, 1660, 0, 0], [3548, 1888, 1660, 0, 0], [3549, 1888, 1661, 0, 0], [3550, 1889, 1661, 0, 0], [3551, 1889, 1662, 0, 0], [3552, 1890, 1662, 0, 0], [3553, 1890, 1663, 0, 0], [3554, 1891, 1663, 0, 0], [3555, 1891, 1664, 0, 0], [3556, 1892, 1664, 0, 0], [3557, 1892, 1665, 0, 0], [3558, 1893, 1665, 0, 0], [3559, 1894, 1665, 0, 0], [3560, 1894, 1666, 0, 0], [3561, 1895, 1666, 0, 0], [3562, 1895, 1667, 0, 0], [3563, 1896, 1667, 0, 0], [3564, 1896, 1668, 0, 0], [3565, 1897, 1668, 0, 0], [3566, 1897, 1669, 0, 0], [3567, 1898, 1669, 0, 0], [3568, 1898, 1670, 0, 0], [3569, 1899, 1670, 0, 0], [3570, 1899, 1671, 0, 0], [3571, 1900, 1671, 0, 0], [3572, 1900, 1672, 0, 0], [3573, 1901, 1672, 0, 0], [3574, 1901, 1673, 0, 0], [3575, 1902, 1673, 0, 0], [3576, 1902, 1674, 0, 0], [3577, 1903, 1674, 0, 0], [3578, 1903, 1675, 0, 0], [3579, 1904, 1675, 0, 0], [3580, 1904, 1676, 0, 0], [3581, 1905, 1676, 0, 0], [3582, 1905, 1677, 0, 0], [3583, 1906, 1677, 0, 0], [3584, 1906, 1678, 0, 0], [3585, 1907, 1678, 0, 0], [3586, 1907, 1679, 0, 0], [3587, 1908, 1679, 0, 0], [3588, 1909, 1679, 0, 0], [3589, 1909, 1680, 0, 0], [3590, 1910, 1680, 0, 0], [3591, 1910, 1681, 0, 0], [3592, 1911, 1681, 0, 0], [3593, 1911, 1682, 0, 0], [3594, 1912, 1682, 0, 0], [3595, 1912, 1683, 0, 0], [3596, 1913, 1683, 0, 0], [3597, 1913, 1684, 0, 0], [3598, 1914, 1684, 0, 0], [3599, 1914, 1685, 0, 0], [3600, 1915, 1685, 0, 0], [3601, 1915, 1686, 0, 0], [3602, 1916, 1686, 0, 0], [3603, 1916, 1687, 0, 0], [3604, 1917, 1687, 0, 0], [3605, 1917, 1688, 0, 0], [3606, 1918, 1688, 0, 0], [3607, 1918, 1689, 0, 0], [3608, 1919, 1689, 0, 0], [3609, 1919, 1690, 0, 0], [3610, 1920, 1690, 0, 0], [3611, 1920, 1691, 0, 0], [3612, 1921, 1691, 0, 0], [3613, 1921, 1692, 0, 0], [3614, 1922, 1692, 0, 0], [3615, 1922, 1693, 0, 0], [3616, 1923, 1693, 0, 0], [3617, 1924, 1693, 0, 0], [3618, 1924, 1694, 0, 0], [3619, 1925, 1694, 0, 0], [3620, 1925, 1695, 0, 0], [3621, 1926, 1695, 0, 0], [3622, 1926, 1696, 0, 0], [3623, 1927, 1696, 0, 0], [3624, 1927, 1697, 0, 0], [3625, 1928, 1697, 0, 0], [3626, 1928, 1698, 0, 0], [3627, 1929, 1698, 0, 0], [3628, 1929, 1699, 0, 0], [3629, 1930, 1699, 0, 0], [3630, 1930, 1700, 0, 0], [3631, 1931, 1700, 0, 0], [3632, 1931, 1701, 0, 0], [3633, 1932, 1701, 0, 0], [3634, 1932, 1702, 0, 0], [3635, 1933, 1702, 0, 0], [3636, 1933, 1703, 0, 0], [3637, 1934, 1703, 0, 0], [3638, 1934, 1704, 0, 0], [3639, 1935, 1704, 0, 0], [3640, 1935, 1705, 0, 0], [3641, 1936, 1705, 0, 0], [3642, 1936, 1706, 0, 0], [3643, 1937, 1706, 0, 0], [3644, 1937, 1707, 0, 0], [3645, 1938, 1707, 0, 0], [3646, 1939, 1707, 0, 0], [3647, 1939, 1708, 0, 0], [3648, 1940, 1708, 0, 0], [3649, 1940, 1709, 0, 0], [3650, 1941, 1709, 0, 0], [3651, 1941, 1710, 0, 0], [3652, 1942, 1710, 0, 0], [3653, 1942, 1711, 0, 0], [3654, 1943, 1711, 0, 0], [3655, 1943, 1712, 0, 0], [3656, 1944, 1712, 0, 0], [3657, 1944, 1713, 0, 0], [3658, 1945, 1713, 0, 0], [3659, 1945, 1714, 0, 0], [3660, 1946, 1714, 0, 0], [3661, 1946, 1715, 0, 0], [3662, 1947, 1715, 0, 0], [3663, 1947, 1716, 0, 0], [3664, 1948, 1716, 0, 0], [3665, 1948, 1717, 0, 0], [3666, 1949, 1717, 0, 0], [3667, 1949, 1718, 0, 0], [3668, 1950, 1718, 0, 0], [3669, 1950, 1719, 0, 0], [3670, 1951, 1719, 0, 0], [3671, 1951, 1720, 0, 0], [3672, 1952, 1720, 0, 0], [3673, 1952, 1721, 0, 0], [3674, 1953, 1721, 0, 0], [3675, 1953, 1722, 0, 0], [3676, 1954, 1722, 0, 0], [3677, 1955, 1722, 0, 0], [3678, 1955, 1723, 0, 0], [3679, 1956, 1723, 0, 0], [3680, 1956, 1724, 0, 0], [3681, 1957, 1724, 0, 0], [3682, 1957, 1725, 0, 0], [3683, 1958, 1725, 0, 0], [3684, 1958, 1726, 0, 0], [3685, 1959, 1726, 0, 0], [3686, 1959, 1727, 0, 0], [3687, 1960, 1727, 0, 0], [3688, 1960, 1728, 0, 0], [3689, 1961, 1728, 0, 0], [3690, 1961, 1729, 0, 0], [3691, 1962, 1729, 0, 0], [3692, 1962, 1730, 0, 0], [3693, 1963, 1730, 0, 0], [3694, 1963, 1731, 0, 0], [3695, 1964, 1731, 0, 0], [3696, 1964, 1732, 0, 0], [3697, 1965, 1732, 0, 0], [3698, 1965, 1733, 0, 0], [3699, 1966, 1733, 0, 0], [3700, 1966, 1734, 0, 0], [3701, 1967, 1734, 0, 0], [3702, 1967, 1735, 0, 0], [3703, 1968, 1735, 0, 0], [3704, 1968, 1736, 0, 0], [3705, 1969, 1736, 0, 0], [3706, 1969, 1737, 0, 0], [3707, 1970, 1737, 0, 0], [3708, 1971, 1737, 0, 0], [3709, 1971, 1738, 0, 0], [3710, 1972, 1738, 0, 0], [3711, 1972, 1739, 0, 0], [3712, 1973, 1739, 0, 0], [3713, 1973, 1740, 0, 0], [3714, 1974, 1740, 0, 0], [3715, 1974, 1741, 0, 0], [3716, 1975, 1741, 0, 0], [3717, 1975, 1742, 0, 0], [3718, 1976, 1742, 0, 0], [3719, 1976, 1743, 0, 0], [3720, 1977, 1743, 0, 0], [3721, 1977, 1744, 0, 0], [3722, 1978, 1744, 0, 0], [3723, 1978, 1745, 0, 0], [3724, 1979, 1745, 0, 0], [3725, 1979, 1746, 0, 0], [3726, 1980, 1746, 0, 0], [3727, 1980, 1747, 0, 0], [3728, 1981, 1747, 0, 0], [3729, 1981, 1748, 0, 0], [3730, 1982, 1748, 0, 0], [3731, 1982, 1749, 0, 0], [3732, 1983, 1749, 0, 0], [3733, 1983, 1750, 0, 0], [3734, 1984, 1750, 0, 0], [3735, 1984, 1751, 0, 0], [3736, 1985, 1751, 0, 0], [3737, 1985, 1752, 0, 0], [3738, 1986, 1752, 0, 0], [3739, 1987, 1752, 0, 0], [3740, 1987, 1753, 0, 0], [3741, 1988, 1753, 0, 0], [3742, 1988, 1754, 0, 0], [3743, 1989, 1754, 0, 0], [3744, 1989, 1755, 0, 0], [3745, 1990, 1755, 0, 0], [3746, 1990, 1756, 0, 0], [3747, 1991, 1756, 0, 0], [3748, 1991, 1757, 0, 0], [3749, 1992, 1757, 0, 0], [3750, 1992, 1758, 0, 0], [3751, 1993, 1758, 0, 0], [3752, 1993, 1759, 0, 0], [3753, 1994, 1759, 0, 0], [3754, 1994, 1760, 0, 0], [3755, 1995, 1760, 0, 0], [3756, 1995, 1761, 0, 0], [3757, 1996, 1761, 0, 0], [3758, 1996, 1762, 0, 0], [3759, 1997, 1762, 0, 0], [3760, 1997, 1763, 0, 0], [3761, 1998, 1763, 0, 0], [3762, 1998, 1764, 0, 0], [3763, 1999, 1764, 0, 0], [3764, 1999, 1765, 0, 0], [3765, 2000, 1765, 0, 0], [3766, 2000, 1766, 0, 0], [3767, 2001, 1766, 0, 0], [3768, 2001, 1767, 0, 0], [3769, 2002, 1767, 0, 0], [3770, 2003, 1767, 0, 0], [3771, 2003, 1768, 0, 0], [3772, 2004, 1768, 0, 0], [3773, 2004, 1769, 0, 0], [3774, 2005, 1769, 0, 0], [3775, 2005, 1770, 0, 0], [3776, 2006, 1770, 0, 0], [3777, 2006, 1771, 0, 0], [3778, 2007, 1771, 0, 0], [3779, 2007, 1772, 0, 0], [3780, 2008, 1772, 0, 0], [3781, 2008, 1773, 0, 0], [3782, 2009, 1773, 0, 0], [3783, 2009, 1774, 0, 0], [3784, 2010, 1774, 0, 0], [3785, 2010, 1775, 0, 0], [3786, 2011, 1775, 0, 0], [3787, 2011, 1776, 0, 0], [3788, 2012, 1776, 0, 0], [3789, 2012, 1777, 0, 0], [3790, 2013, 1777, 0, 0], [3791, 2013, 1778, 0, 0], [3792, 2014, 1778, 0, 0], [3793, 2014, 1779, 0, 0], [3794, 2015, 1779, 0, 0], [3795, 2015, 1780, 0, 0], [3796, 2016, 1780, 0, 0], [3797, 2016, 1781, 0, 0], [3798, 2017, 1781, 0, 0], [3799, 2017, 1782, 0, 0], [3800, 2018, 1782, 0, 0], [3801, 2018, 1783, 0, 0], [3802, 2019, 1783, 0, 0], [3803, 2020, 1783, 0, 0], [3804, 2020, 1784, 0, 0], [3805, 2021, 1784, 0, 0], [3806, 2021, 1785, 0, 0], [3807, 2022, 1785, 0, 0], [3808, 2022, 1786, 0, 0], [3809, 2023, 1786, 0, 0], [3810, 2023, 1787, 0, 0], [3811, 2024, 1787, 0, 0], [3812, 2024, 1788, 0, 0], [3813, 2025, 1788, 0, 0], [3814, 2025, 1789, 0, 0], [3815, 2026, 1789, 0, 0], [3816, 2026, 1790, 0, 0], [3817, 2027, 1790, 0, 0], [3818, 2027, 1791, 0, 0], [3819, 2028, 1791, 0, 0], [3820, 2028, 1792, 0, 0], [3821, 2029, 1792, 0, 0], [3822, 2029, 1793, 0, 0], [3823, 2030, 1793, 0, 0], [3824, 2030, 1794, 0, 0], [3825, 2031, 1794, 0, 0], [3826, 2031, 1795, 0, 0], [3827, 2032, 1795, 0, 0], [3828, 2032, 1796, 0, 0], [3829, 2033, 1796, 0, 0], [3830, 2033, 1797, 0, 0], [3831, 2034, 1797, 0, 0], [3832, 2034, 1798, 0, 0], [3833, 2035, 1798, 0, 0], [3834, 2035, 1799, 0, 0], [3835, 2036, 1799, 0, 0], [3836, 2037, 1799, 0, 0], [3837, 2037, 1800, 0, 0], [3838, 2038, 1800, 0, 0], [3839, 2038, 1801, 0, 0], [3840, 2039, 1801, 0, 0], [3841, 2039, 1802, 0, 0], [3842, 2040, 1802, 0, 0], [3843, 2040, 1803, 0, 0], [3844, 2041, 1803, 0, 0], [3845, 2041, 1804, 0, 0], [3846, 2042, 1804, 0, 0], [3847, 2042, 1805, 0, 0], [3848, 2043, 1805, 0, 0], [3849, 2043, 1806, 0, 0], [3850, 2044, 1806, 0, 0], [3851, 2044, 1807, 0, 0], [3852, 2045, 1807, 0, 0], [3853, 2045, 1808, 0, 0], [3854, 2046, 1808, 0, 0], [3855, 2046, 1809, 0, 0], [3856, 2047, 1809, 0, 0], [3857, 2047, 1810, 0, 0], [3858, 2048, 1810, 0, 0], [3859, 2048, 1811, 0, 0], [3860, 2049, 1811, 0, 0], [3861, 2049, 1812, 0, 0], [3862, 2050, 1812, 0, 0], [3863, 2050, 1813, 0, 0], [3864, 2051, 1813, 0, 0], [3865, 2051, 1814, 0, 0], [3866, 2052, 1814, 0, 0], [3867, 2052, 1815, 0, 0], [3868, 2053, 1815, 0, 0], [3869, 2054, 1815, 0, 0], [3870, 2054, 1816, 0, 0], [3871, 2055, 1816, 0, 0], [3872, 2055, 1817, 0, 0], [3873, 2056, 1817, 0, 0], [3874, 2056, 1818, 0, 0], [3875, 2057, 1818, 0, 0], [3876, 2057, 1819, 0, 0], [3877, 2058, 1819, 0, 0], [3878, 2058, 1820, 0, 0], [3879, 2059, 1820, 0, 0], [3880, 2059, 1821, 0, 0], [3881, 2060, 1821, 0, 0], [3882, 2060, 1822, 0, 0], [3883, 2061, 1822, 0, 0], [3884, 2061, 1823, 0, 0], [3885, 2062, 1823, 0, 0], [3886, 2062, 1824, 0, 0], [3887, 2063, 1824, 0, 0], [3888, 2063, 1825, 0, 0], [3889, 2064, 1825, 0, 0], [3890, 2064, 1826, 0, 0], [3891, 2065, 1826, 0, 0], [3892, 2065, 1827, 0, 0], [3893, 2066, 1827, 0, 0], [3894, 2066, 1828, 0, 0], [3895, 2067, 1828, 0, 0], [3896, 2067, 1829, 0, 0], [3897, 2068, 1829, 0, 0], [3898, 2068, 1830, 0, 0], [3899, 2069, 1830, 0, 0], [3900, 2069, 1831, 0, 0], [3901, 2070, 1831, 0, 0], [3902, 2071, 1831, 0, 0], [3903, 2071, 1832, 0, 0], [3904, 2072, 1832, 0, 0], [3905, 2072, 1833, 0, 0], [3906, 2073, 1833, 0, 0], [3907, 2073, 1834, 0, 0], [3908, 2074, 1834, 0, 0], [3909, 2074, 1835, 0, 0], [3910, 2075, 1835, 0, 0], [3911, 2075, 1836, 0, 0], [3912, 2076, 1836, 0, 0], [3913, 2076, 1837, 0, 0], [3914, 2077, 1837, 0, 0], [3915, 2077, 1838, 0, 0], [3916, 2078, 1838, 0, 0], [3917, 2078, 1839, 0, 0], [3918, 2079, 1839, 0, 0], [3919, 2079, 1840, 0, 0], [3920, 2080, 1840, 0, 0], [3921, 2080, 1841, 0, 0], [3922, 2081, 1841, 0, 0], [3923, 2081, 1842, 0, 0], [3924, 2082, 1842, 0, 0], [3925, 2082, 1843, 0, 0], [3926, 2083, 1843, 0, 0], [3927, 2083, 1844, 0, 0], [3928, 2084, 1844, 0, 0], [3929, 2084, 1845, 0, 0], [3930, 2085, 1845, 0, 0], [3931, 2085, 1846, 0, 0], [3932, 2086, 1846, 0, 0], [3933, 2086, 1847, 0, 0], [3934, 2087, 1847, 0, 0], [3935, 2087, 1848, 0, 0], [3936, 2088, 1848, 0, 0], [3937, 2089, 1848, 0, 0], [3938, 2089, 1849, 0, 0], [3939, 2090, 1849, 0, 0], [3940, 2090, 1850, 0, 0], [3941, 2091, 1850, 0, 0], [3942, 2091, 1851, 0, 0], [3943, 2092, 1851, 0, 0], [3944, 2092, 1852, 0, 0], [3945, 2093, 1852, 0, 0], [3946, 2093, 1853, 0, 0], [3947, 2094, 1853, 0, 0], [3948, 2094, 1854, 0, 0], [3949, 2095, 1854, 0, 0], [3950, 2095, 1855, 0, 0], [3951, 2096, 1855, 0, 0], [3952, 2096, 1856, 0, 0], [3953, 2097, 1856, 0, 0], [3954, 2097, 1857, 0, 0], [3955, 2098, 1857, 0, 0], [3956, 2098, 1858, 0, 0], [3957, 2099, 1858, 0, 0], [3958, 2099, 1859, 0, 0], [3959, 2100, 1859, 0, 0], [3960, 2100, 1860, 0, 0], [3961, 2101, 1860, 0, 0], [3962, 2101, 1861, 0, 0], [3963, 2102, 1861, 0, 0], [3964, 2102, 1862, 0, 0], [3965, 2103, 1862, 0, 0], [3966, 2103, 1863, 0, 0], [3967, 2104, 1863, 0, 0], [3968, 2104, 1864, 0, 0], [3969, 2105, 1864, 0, 0], [3970, 2106, 1864, 0, 0], [3971, 2106, 1865, 0, 0], [3972, 2107, 1865, 0, 0], [3973, 2107, 1866, 0, 0], [3974, 2108, 1866, 0, 0], [3975, 2108, 1867, 0, 0], [3976, 2109, 1867, 0, 0], [3977, 2109, 1868, 0, 0], [3978, 2110, 1868, 0, 0], [3979, 2110, 1869, 0, 0], [3980, 2111, 1869, 0, 0], [3981, 2111, 1870, 0, 0], [3982, 2112, 1870, 0, 0], [3983, 2112, 1871, 0, 0], [3984, 2113, 1871, 0, 0], [3985, 2113, 1872, 0, 0], [3986, 2114, 1872, 0, 0], [3987, 2114, 1873, 0, 0], [3988, 2115, 1873, 0, 0], [3989, 2115, 1874, 0, 0], [3990, 2116, 1874, 0, 0], [3991, 2116, 1875, 0, 0], [3992, 2117, 1875, 0, 0], [3993, 2117, 1876, 0, 0], [3994, 2118, 1876, 0, 0], [3995, 2118, 1877, 0, 0], [3996, 2119, 1877, 0, 0], [3997, 2119, 1878, 0, 0], [3998, 2120, 1878, 0, 0], [3999, 2120, 1879, 0, 0], [4000, 2121, 1879, 0, 0], [4001, 2121, 1880, 0, 0], [4002, 2122, 1880, 0, 0], [4003, 2122, 1881, 0, 0], [4004, 2123, 1881, 0, 0], [4005, 2123, 1882, 0, 0], [4006, 2124, 1882, 0, 0], [4007, 2125, 1882, 0, 0], [4008, 2125, 1883, 0, 0], [4009, 2126, 1883, 0, 0], [4010, 2126, 1884, 0, 0], [4011, 2127, 1884, 0, 0], [4012, 2127, 1885, 0, 0], [4013, 2128, 1885, 0, 0], [4014, 2128, 1886, 0, 0], [4015, 2129, 1886, 0, 0], [4016, 2129, 1887, 0, 0], [4017, 2130, 1887, 0, 0], [4018, 2130, 1888, 0, 0], [4019, 2131, 1888, 0, 0], [4020, 2131, 1889, 0, 0], [4021, 2132, 1889, 0, 0], [4022, 2132, 1890, 0, 0], [4023, 2133, 1890, 0, 0], [4024, 2133, 1891, 0, 0], [4025, 2134, 1891, 0, 0], [4026, 2134, 1892, 0, 0], [4027, 2135, 1892, 0, 0], [4028, 2135, 1893, 0, 0], [4029, 2136, 1893, 0, 0], [4030, 2136, 1894, 0, 0], [4031, 2137, 1894, 0, 0], [4032, 2137, 1895, 0, 0], [4033, 2138, 1895, 0, 0], [4034, 2138, 1896, 0, 0], [4035, 2139, 1896, 0, 0], [4036, 2139, 1897, 0, 0], [4037, 2140, 1897, 0, 0], [4038, 2140, 1898, 0, 0], [4039, 2141, 1898, 0, 0], [4040, 2141, 1899, 0, 0], [4041, 2142, 1899, 0, 0], [4042, 2143, 1899, 0, 0], [4043, 2143, 1900, 0, 0], [4044, 2144, 1900, 0, 0], [4045, 2144, 1901, 0, 0], [4046, 2145, 1901, 0, 0], [4047, 2145, 1902, 0, 0], [4048, 2146, 1902, 0, 0], [4049, 2146, 1903, 0, 0], [4050, 2147, 1903, 0, 0], [4051, 2147, 1904, 0, 0], [4052, 2148, 1904, 0, 0], [4053, 2148, 1905, 0, 0], [4054, 2149, 1905, 0, 0], [4055, 2149, 1906, 0, 0], [4056, 2150, 1906, 0, 0], [4057, 2150, 1907, 0, 0], [4058, 2151, 1907, 0, 0], [4059, 2151, 1908, 0, 0], [4060, 2152, 1908, 0, 0], [4061, 2152, 1909, 0, 0], [4062, 2153, 1909, 0, 0], [4063, 2153, 1910, 0, 0], [4064, 2154, 1910, 0, 0], [4065, 2154, 1911, 0, 0], [4066, 2155, 1911, 0, 0], [4067, 2155, 1912, 0, 0], [4068, 2156, 1912, 0, 0], [4069, 2156, 1913, 0, 0], [4070, 2157, 1913, 0, 0], [4071, 2157, 1914, 0, 0], [4072, 2158, 1914, 0, 0], [4073, 2158, 1915, 0, 0], [4074, 2159, 1915, 0, 0], [4075, 2159, 1916, 0, 0], [4076, 2160, 1916, 0, 0], [4077, 2160, 1917, 0, 0], [4078, 2161, 1917, 0, 0], [4079, 2162, 1917, 0, 0], [4080, 2162, 1918, 0, 0], [4081, 2163, 1918, 0, 0], [4082, 2163, 1919, 0, 0], [4083, 2164, 1919, 0, 0], [4084, 2164, 1920, 0, 0], [4085, 2165, 1920, 0, 0], [4086, 2165, 1921, 0, 0], [4087, 2166, 1921, 0, 0], [4088, 2166, 1922, 0, 0], [4089, 2167, 1922, 0, 0], [4090, 2167, 1923, 0, 0], [4091, 2168, 1923, 0, 0], [4092, 2168, 1924, 0, 0], [4093, 2169, 1924, 0, 0], [4094, 2169, 1925, 0, 0], [4095, 2170, 1925, 0, 0], [4096, 2170, 1926, 0, 0], [4097, 2171, 1926, 0, 0], [4098, 2171, 1927, 0, 0], [4099, 2172, 1927, 0, 0], [4100, 2172, 1928, 0, 0], [4101, 2173, 1928, 0, 0], [4102, 2173, 1929, 0, 0], [4103, 2174, 1929, 0, 0], [4104, 2174, 1930, 0, 0], [4105, 2175, 1930, 0, 0], [4106, 2175, 1931, 0, 0], [4107, 2176, 1931, 0, 0], [4108, 2176, 1932, 0, 0], [4109, 2177, 1932, 0, 0], [4110, 2177, 1933, 0, 0], [4111, 2178, 1933, 0, 0], [4112, 2178, 1934, 0, 0], [4113, 2179, 1934, 0, 0], [4114, 2179, 1935, 0, 0], [4115, 2180, 1935, 0, 0], [4116, 2181, 1935, 0, 0], [4117, 2181, 1936, 0, 0], [4118, 2182, 1936, 0, 0], [4119, 2182, 1937, 0, 0], [4120, 2183, 1937, 0, 0], [4121, 2183, 1938, 0, 0], [4122, 2184, 1938, 0, 0], [4123, 2184, 1939, 0, 0], [4124, 2185, 1939, 0, 0], [4125, 2185, 1940, 0, 0], [4126, 2186, 1940, 0, 0], [4127, 2186, 1941, 0, 0], [4128, 2187, 1941, 0, 0], [4129, 2187, 1942, 0, 0], [4130, 2188, 1942, 0, 0], [4131, 2188, 1943, 0, 0], [4132, 2189, 1943, 0, 0], [4133, 2189, 1944, 0, 0], [4134, 2190, 1944, 0, 0], [4135, 2190, 1945, 0, 0], [4136, 2191, 1945, 0, 0], [4137, 2191, 1946, 0, 0], [4138, 2192, 1946, 0, 0], [4139, 2192, 1947, 0, 0], [4140, 2193, 1947, 0, 0], [4141, 2193, 1948, 0, 0], [4142, 2194, 1948, 0, 0], [4143, 2194, 1949, 0, 0], [4144, 2195, 1949, 0, 0], [4145, 2195, 1950, 0, 0], [4146, 2196, 1950, 0, 0], [4147, 2196, 1951, 0, 0], [4148, 2197, 1951, 0, 0], [4149, 2197, 1952, 0, 0], [4150, 2198, 1952, 0, 0], [4151, 2198, 1953, 0, 0], [4152, 2199, 1953, 0, 0], [4153, 2200, 1953, 0, 0], [4154, 2200, 1954, 0, 0], [4155, 2201, 1954, 0, 0], [4156, 2201, 1955, 0, 0], [4157, 2202, 1955, 0, 0], [4158, 2202, 1956, 0, 0], [4159, 2203, 1956, 0, 0], [4160, 2203, 1957, 0, 0], [4161, 2204, 1957, 0, 0], [4162, 2204, 1958, 0, 0], [4163, 2205, 1958, 0, 0], [4164, 2205, 1959, 0, 0], [4165, 2206, 1959, 0, 0], [4166, 2206, 1960, 0, 0], [4167, 2207, 1960, 0, 0], [4168, 2207, 1961, 0, 0], [4169, 2208, 1961, 0, 0], [4170, 2208, 1962, 0, 0], [4171, 2209, 1962, 0, 0], [4172, 2209, 1963, 0, 0], [4173, 2210, 1963, 0, 0], [4174, 2210, 1964, 0, 0], [4175, 2211, 1964, 0, 0], [4176, 2211, 1965, 0, 0], [4177, 2212, 1965, 0, 0], [4178, 2212, 1966, 0, 0], [4179, 2213, 1966, 0, 0], [4180, 2213, 1967, 0, 0], [4181, 2214, 1967, 0, 0], [4182, 2214, 1968, 0, 0], [4183, 2215, 1968, 0, 0], [4184, 2215, 1969, 0, 0], [4185, 2216, 1969, 0, 0], [4186, 2216, 1970, 0, 0], [4187, 2217, 1970, 0, 0], [4188, 2217, 1971, 0, 0], [4189, 2218, 1971, 0, 0], [4190, 2218, 1972, 0, 0], [4191, 2219, 1972, 0, 0], [4192, 2220, 1972, 0, 0], [4193, 2220, 1973, 0, 0], [4194, 2221, 1973, 0, 0], [4195, 2221, 1974, 0, 0], [4196, 2222, 1974, 0, 0], [4197, 2222, 1975, 0, 0], [4198, 2223, 1975, 0, 0], [4199, 2223, 1976, 0, 0], [4200, 2224, 1976, 0, 0], [4201, 2224, 1977, 0, 0], [4202, 2225, 1977, 0, 0], [4203, 2225, 1978, 0, 0], [4204, 2226, 1978, 0, 0], [4205, 2226, 1979, 0, 0], [4206, 2227, 1979, 0, 0], [4207, 2227, 1980, 0, 0], [4208, 2228, 1980, 0, 0], [4209, 2228, 1981, 0, 0], [4210, 2229, 1981, 0, 0], [4211, 2229, 1982, 0, 0], [4212, 2230, 1982, 0, 0], [4213, 2230, 1983, 0, 0], [4214, 2231, 1983, 0, 0], [4215, 2231, 1984, 0, 0], [4216, 2232, 1984, 0, 0], [4217, 2232, 1985, 0, 0], [4218, 2233, 1985, 0, 0], [4219, 2233, 1986, 0, 0], [4220, 2234, 1986, 0, 0], [4221, 2234, 1987, 0, 0], [4222, 2235, 1987, 0, 0], [4223, 2235, 1988, 0, 0], [4224, 2236, 1988, 0, 0], [4225, 2236, 1989, 0, 0], [4226, 2237, 1989, 0, 0], [4227, 2237, 1990, 0, 0], [4228, 2238, 1990, 0, 0], [4229, 2238, 1991, 0, 0], [4230, 2239, 1991, 0, 0], [4231, 2240, 1991, 0, 0], [4232, 2240, 1992, 0, 0], [4233, 2241, 1992, 0, 0], [4234, 2241, 1993, 0, 0], [4235, 2242, 1993, 0, 0], [4236, 2242, 1994, 0, 0], [4237, 2243, 1994, 0, 0], [4238, 2243, 1995, 0, 0], [4239, 2244, 1995, 0, 0], [4240, 2244, 1996, 0, 0], [4241, 2245, 1996, 0, 0], [4242, 2245, 1997, 0, 0], [4243, 2246, 1997, 0, 0], [4244, 2246, 1998, 0, 0], [4245, 2247, 1998, 0, 0], [4246, 2247, 1999, 0, 0], [4247, 2248, 1999, 0, 0], [4248, 2248, 2000, 0, 0], [4249, 2249, 2000, 0, 0], [4250, 2249, 2001, 0, 0], [4251, 2250, 2001, 0, 0], [4252, 2250, 2002, 0, 0], [4253, 2251, 2002, 0, 0], [4254, 2251, 2003, 0, 0], [4255, 2252, 2003, 0, 0], [4256, 2252, 2004, 0, 0], [4257, 2253, 2004, 0, 0], [4258, 2253, 2005, 0, 0], [4259, 2254, 2005, 0, 0], [4260, 2254, 2006, 0, 0], [4261, 2255, 2006, 0, 0], [4262, 2255, 2007, 0, 0], [4263, 2256, 2007, 0, 0], [4264, 2256, 2008, 0, 0], [4265, 2257, 2008, 0, 0], [4266, 2257, 2009, 0, 0], [4267, 2258, 2009, 0, 0], [4268, 2258, 2010, 0, 0], [4269, 2259, 2010, 0, 0], [4270, 2259, 2011, 0, 0], [4271, 2260, 2011, 0, 0], [4272, 2261, 2011, 0, 0], [4273, 2261, 2012, 0, 0], [4274, 2262, 2012, 0, 0], [4275, 2262, 2013, 0, 0], [4276, 2263, 2013, 0, 0], [4277, 2263, 2014, 0, 0], [4278, 2264, 2014, 0, 0], [4279, 2264, 2015, 0, 0], [4280, 2265, 2015, 0, 0], [4281, 2265, 2016, 0, 0], [4282, 2266, 2016, 0, 0], [4283, 2266, 2017, 0, 0], [4284, 2267, 2017, 0, 0], [4285, 2267, 2018, 0, 0], [4286, 2268, 2018, 0, 0], [4287, 2268, 2019, 0, 0], [4288, 2269, 2019, 0, 0], [4289, 2269, 2020, 0, 0], [4290, 2270, 2020, 0, 0], [4291, 2270, 2021, 0, 0], [4292, 2271, 2021, 0, 0], [4293, 2271, 2022, 0, 0], [4294, 2272, 2022, 0, 0], [4295, 2272, 2023, 0, 0], [4296, 2273, 2023, 0, 0], [4297, 2273, 2024, 0, 0], [4298, 2274, 2024, 0, 0], [4299, 2274, 2025, 0, 0], [4300, 2275, 2025, 0, 0], [4301, 2275, 2026, 0, 0], [4302, 2276, 2026, 0, 0], [4303, 2276, 2027, 0, 0], [4304, 2277, 2027, 0, 0], [4305, 2277, 2028, 0, 0], [4306, 2278, 2028, 0, 0], [4307, 2278, 2029, 0, 0], [4308, 2279, 2029, 0, 0], [4309, 2279, 2030, 0, 0], [4310, 2280, 2030, 0, 0], [4311, 2280, 2031, 0, 0], [4312, 2281, 2031, 0, 0], [4313, 2282, 2031, 0, 0], [4314, 2282, 2032, 0, 0], [4315, 2283, 2032, 0, 0], [4316, 2283, 2033, 0, 0], [4317, 2284, 2033, 0, 0], [4318, 2284, 2034, 0, 0], [4319, 2285, 2034, 0, 0], [4320, 2285, 2035, 0, 0], [4321, 2286, 2035, 0, 0], [4322, 2286, 2036, 0, 0], [4323, 2287, 2036, 0, 0], [4324, 2287, 2037, 0, 0], [4325, 2288, 2037, 0, 0], [4326, 2288, 2038, 0, 0], [4327, 2289, 2038, 0, 0], [4328, 2289, 2039, 0, 0], [4329, 2290, 2039, 0, 0], [4330, 2290, 2040, 0, 0], [4331, 2291, 2040, 0, 0], [4332, 2291, 2041, 0, 0], [4333, 2292, 2041, 0, 0], [4334, 2292, 2042, 0, 0], [4335, 2293, 2042, 0, 0], [4336, 2293, 2043, 0, 0], [4337, 2294, 2043, 0, 0], [4338, 2294, 2044, 0, 0], [4339, 2295, 2044, 0, 0], [4340, 2295, 2045, 0, 0], [4341, 2296, 2045, 0, 0], [4342, 2296, 2046, 0, 0], [4343, 2297, 2046, 0, 0], [4344, 2297, 2047, 0, 0], [4345, 2298, 2047, 0, 0], [4346, 2298, 2048, 0, 0], [4347, 2299, 2048, 0, 0], [4348, 2299, 2049, 0, 0], [4349, 2300, 2049, 0, 0], [4350, 2300, 2050, 0, 0], [4351, 2301, 2050, 0, 0], [4352, 2301, 2051, 0, 0], [4353, 2302, 2051, 0, 0], [4354, 2303, 2051, 0, 0], [4355, 2303, 2052, 0, 0], [4356, 2304, 2052, 0, 0], [4357, 2304, 2053, 0, 0], [4358, 2305, 2053, 0, 0], [4359, 2305, 2054, 0, 0], [4360, 2306, 2054, 0, 0], [4361, 2306, 2055, 0, 0], [4362, 2307, 2055, 0, 0], [4363, 2307, 2056, 0, 0], [4364, 2308, 2056, 0, 0], [4365, 2308, 2057, 0, 0], [4366, 2309, 2057, 0, 0], [4367, 2309, 2058, 0, 0], [4368, 2310, 2058, 0, 0], [4369, 2310, 2059, 0, 0], [4370, 2311, 2059, 0, 0], [4371, 2311, 2060, 0, 0], [4372, 2312, 2060, 0, 0], [4373, 2312, 2061, 0, 0], [4374, 2313, 2061, 0, 0], [4375, 2313, 2062, 0, 0], [4376, 2314, 2062, 0, 0], [4377, 2314, 2063, 0, 0], [4378, 2315, 2063, 0, 0], [4379, 2315, 2064, 0, 0], [4380, 2316, 2064, 0, 0], [4381, 2316, 2065, 0, 0], [4382, 2317, 2065, 0, 0], [4383, 2317, 2066, 0, 0], [4384, 2318, 2066, 0, 0], [4385, 2318, 2067, 0, 0], [4386, 2319, 2067, 0, 0], [4387, 2319, 2068, 0, 0], [4388, 2320, 2068, 0, 0], [4389, 2320, 2069, 0, 0], [4390, 2321, 2069, 0, 0], [4391, 2321, 2070, 0, 0], [4392, 2322, 2070, 0, 0], [4393, 2322, 2071, 0, 0], [4394, 2323, 2071, 0, 0], [4395, 2323, 2072, 0, 0], [4396, 2324, 2072, 0, 0], [4397, 2325, 2072, 0, 0], [4398, 2325, 2073, 0, 0], [4399, 2326, 2073, 0, 0], [4400, 2326, 2074, 0, 0], [4401, 2327, 2074, 0, 0], [4402, 2327, 2075, 0, 0], [4403, 2328, 2075, 0, 0], [4404, 2328, 2076, 0, 0], [4405, 2329, 2076, 0, 0], [4406, 2329, 2077, 0, 0], [4407, 2330, 2077, 0, 0], [4408, 2330, 2078, 0, 0], [4409, 2331, 2078, 0, 0], [4410, 2331, 2079, 0, 0], [4411, 2332, 2079, 0, 0], [4412, 2332, 2080, 0, 0], [4413, 2333, 2080, 0, 0], [4414, 2333, 2081, 0, 0], [4415, 2334, 2081, 0, 0], [4416, 2334, 2082, 0, 0], [4417, 2335, 2082, 0, 0], [4418, 2335, 2083, 0, 0], [4419, 2336, 2083, 0, 0], [4420, 2336, 2084, 0, 0], [4421, 2337, 2084, 0, 0], [4422, 2337, 2085, 0, 0], [4423, 2338, 2085, 0, 0], [4424, 2338, 2086, 0, 0], [4425, 2339, 2086, 0, 0], [4426, 2339, 2087, 0, 0], [4427, 2340, 2087, 0, 0], [4428, 2340, 2088, 0, 0], [4429, 2341, 2088, 0, 0], [4430, 2341, 2089, 0, 0], [4431, 2342, 2089, 0, 0], [4432, 2342, 2090, 0, 0], [4433, 2343, 2090, 0, 0], [4434, 2343, 2091, 0, 0], [4435, 2344, 2091, 0, 0], [4436, 2344, 2092, 0, 0], [4437, 2345, 2092, 0, 0], [4438, 2345, 2093, 0, 0], [4439, 2346, 2093, 0, 0], [4440, 2346, 2094, 0, 0], [4441, 2347, 2094, 0, 0], [4442, 2348, 2094, 0, 0], [4443, 2348, 2095, 0, 0], [4444, 2349, 2095, 0, 0], [4445, 2349, 2096, 0, 0], [4446, 2350, 2096, 0, 0], [4447, 2350, 2097, 0, 0], [4448, 2351, 2097, 0, 0], [4449, 2351, 2098, 0, 0], [4450, 2352, 2098, 0, 0], [4451, 2352, 2099, 0, 0], [4452, 2353, 2099, 0, 0], [4453, 2353, 2100, 0, 0], [4454, 2354, 2100, 0, 0], [4455, 2354, 2101, 0, 0], [4456, 2355, 2101, 0, 0], [4457, 2355, 2102, 0, 0], [4458, 2356, 2102, 0, 0], [4459, 2356, 2103, 0, 0], [4460, 2357, 2103, 0, 0], [4461, 2357, 2104, 0, 0], [4462, 2358, 2104, 0, 0], [4463, 2358, 2105, 0, 0], [4464, 2359, 2105, 0, 0], [4465, 2359, 2106, 0, 0], [4466, 2360, 2106, 0, 0], [4467, 2360, 2107, 0, 0], [4468, 2361, 2107, 0, 0], [4469, 2361, 2108, 0, 0], [4470, 2362, 2108, 0, 0], [4471, 2362, 2109, 0, 0], [4472, 2363, 2109, 0, 0], [4473, 2363, 2110, 0, 0], [4474, 2364, 2110, 0, 0], [4475, 2364, 2111, 0, 0], [4476, 2365, 2111, 0, 0], [4477, 2365, 2112, 0, 0], [4478, 2366, 2112, 0, 0], [4479, 2366, 2113, 0, 0], [4480, 2367, 2113, 0, 0], [4481, 2367, 2114, 0, 0], [4482, 2368, 2114, 0, 0], [4483, 2368, 2115, 0, 0], [4484, 2369, 2115, 0, 0], [4485, 2369, 2116, 0, 0], [4486, 2370, 2116, 0, 0], [4487, 2371, 2116, 0, 0], [4488, 2371, 2117, 0, 0], [4489, 2372, 2117, 0, 0], [4490, 2372, 2118, 0, 0], [4491, 2373, 2118, 0, 0], [4492, 2373, 2119, 0, 0], [4493, 2374, 2119, 0, 0], [4494, 2374, 2120, 0, 0], [4495, 2375, 2120, 0, 0], [4496, 2375, 2121, 0, 0], [4497, 2376, 2121, 0, 0], [4498, 2376, 2122, 0, 0], [4499, 2377, 2122, 0, 0], [4500, 2377, 2123, 0, 0], [4501, 2378, 2123, 0, 0], [4502, 2378, 2124, 0, 0], [4503, 2379, 2124, 0, 0], [4504, 2379, 2125, 0, 0], [4505, 2380, 2125, 0, 0], [4506, 2380, 2126, 0, 0], [4507, 2381, 2126, 0, 0], [4508, 2381, 2127, 0, 0], [4509, 2382, 2127, 0, 0], [4510, 2382, 2128, 0, 0], [4511, 2383, 2128, 0, 0], [4512, 2383, 2129, 0, 0], [4513, 2384, 2129, 0, 0], [4514, 2384, 2130, 0, 0], [4515, 2385, 2130, 0, 0], [4516, 2385, 2131, 0, 0], [4517, 2386, 2131, 0, 0], [4518, 2386, 2132, 0, 0], [4519, 2387, 2132, 0, 0], [4520, 2387, 2133, 0, 0], [4521, 2388, 2133, 0, 0], [4522, 2388, 2134, 0, 0], [4523, 2389, 2134, 0, 0], [4524, 2389, 2135, 0, 0], [4525, 2390, 2135, 0, 0], [4526, 2390, 2136, 0, 0], [4527, 2391, 2136, 0, 0], [4528, 2391, 2137, 0, 0], [4529, 2392, 2137, 0, 0], [4530, 2392, 2138, 0, 0], [4531, 2393, 2138, 0, 0], [4532, 2394, 2138, 0, 0], [4533, 2394, 2139, 0, 0], [4534, 2395, 2139, 0, 0], [4535, 2395, 2140, 0, 0], [4536, 2396, 2140, 0, 0], [4537, 2396, 2141, 0, 0], [4538, 2397, 2141, 0, 0], [4539, 2397, 2142, 0, 0], [4540, 2398, 2142, 0, 0], [4541, 2398, 2143, 0, 0], [4542, 2399, 2143, 0, 0], [4543, 2399, 2144, 0, 0], [4544, 2400, 2144, 0, 0], [4545, 2400, 2145, 0, 0], [4546, 2401, 2145, 0, 0], [4547, 2401, 2146, 0, 0], [4548, 2402, 2146, 0, 0], [4549, 2402, 2147, 0, 0], [4550, 2403, 2147, 0, 0], [4551, 2403, 2148, 0, 0], [4552, 2404, 2148, 0, 0], [4553, 2404, 2149, 0, 0], [4554, 2405, 2149, 0, 0], [4555, 2405, 2150, 0, 0], [4556, 2406, 2150, 0, 0], [4557, 2406, 2151, 0, 0], [4558, 2407, 2151, 0, 0], [4559, 2407, 2152, 0, 0], [4560, 2408, 2152, 0, 0], [4561, 2408, 2153, 0, 0], [4562, 2409, 2153, 0, 0], [4563, 2409, 2154, 0, 0], [4564, 2410, 2154, 0, 0], [4565, 2410, 2155, 0, 0], [4566, 2411, 2155, 0, 0], [4567, 2411, 2156, 0, 0], [4568, 2412, 2156, 0, 0], [4569, 2412, 2157, 0, 0], [4570, 2413, 2157, 0, 0], [4571, 2413, 2158, 0, 0], [4572, 2414, 2158, 0, 0], [4573, 2414, 2159, 0, 0], [4574, 2415, 2159, 0, 0], [4575, 2415, 2160, 0, 0], [4576, 2416, 2160, 0, 0], [4577, 2416, 2161, 0, 0], [4578, 2417, 2161, 0, 0], [4579, 2418, 2161, 0, 0], [4580, 2418, 2162, 0, 0], [4581, 2419, 2162, 0, 0], [4582, 2419, 2163, 0, 0], [4583, 2420, 2163, 0, 0], [4584, 2420, 2164, 0, 0], [4585, 2421, 2164, 0, 0], [4586, 2421, 2165, 0, 0], [4587, 2422, 2165, 0, 0], [4588, 2422, 2166, 0, 0], [4589, 2423, 2166, 0, 0], [4590, 2423, 2167, 0, 0], [4591, 2424, 2167, 0, 0], [4592, 2424, 2168, 0, 0], [4593, 2425, 2168, 0, 0], [4594, 2425, 2169, 0, 0], [4595, 2426, 2169, 0, 0], [4596, 2426, 2170, 0, 0], [4597, 2427, 2170, 0, 0], [4598, 2427, 2171, 0, 0], [4599, 2428, 2171, 0, 0], [4600, 2428, 2172, 0, 0], [4601, 2429, 2172, 0, 0], [4602, 2429, 2173, 0, 0], [4603, 2430, 2173, 0, 0], [4604, 2430, 2174, 0, 0], [4605, 2431, 2174, 0, 0], [4606, 2431, 2175, 0, 0], [4607, 2432, 2175, 0, 0], [4608, 2432, 2176, 0, 0], [4609, 2433, 2176, 0, 0], [4610, 2433, 2177, 0, 0], [4611, 2434, 2177, 0, 0], [4612, 2434, 2178, 0, 0], [4613, 2435, 2178, 0, 0], [4614, 2435, 2179, 0, 0], [4615, 2436, 2179, 0, 0], [4616, 2436, 2180, 0, 0], [4617, 2437, 2180, 0, 0], [4618, 2437, 2181, 0, 0], [4619, 2438, 2181, 0, 0], [4620, 2438, 2182, 0, 0], [4621, 2439, 2182, 0, 0], [4622, 2439, 2183, 0, 0], [4623, 2440, 2183, 0, 0], [4624, 2440, 2184, 0, 0], [4625, 2441, 2184, 0, 0], [4626, 2441, 2185, 0, 0], [4627, 2442, 2185, 0, 0], [4628, 2443, 2185, 0, 0], [4629, 2443, 2186, 0, 0], [4630, 2444, 2186, 0, 0], [4631, 2444, 2187, 0, 0], [4632, 2445, 2187, 0, 0], [4633, 2445, 2188, 0, 0], [4634, 2446, 2188, 0, 0], [4635, 2446, 2189, 0, 0], [4636, 2447, 2189, 0, 0], [4637, 2447, 2190, 0, 0], [4638, 2448, 2190, 0, 0], [4639, 2448, 2191, 0, 0], [4640, 2449, 2191, 0, 0], [4641, 2449, 2192, 0, 0], [4642, 2450, 2192, 0, 0], [4643, 2450, 2193, 0, 0], [4644, 2451, 2193, 0, 0], [4645, 2451, 2194, 0, 0], [4646, 2452, 2194, 0, 0], [4647, 2452, 2195, 0, 0], [4648, 2453, 2195, 0, 0], [4649, 2453, 2196, 0, 0], [4650, 2454, 2196, 0, 0], [4651, 2454, 2197, 0, 0], [4652, 2455, 2197, 0, 0], [4653, 2455, 2198, 0, 0], [4654, 2456, 2198, 0, 0], [4655, 2456, 2199, 0, 0], [4656, 2457, 2199, 0, 0], [4657, 2457, 2200, 0, 0], [4658, 2458, 2200, 0, 0], [4659, 2458, 2201, 0, 0], [4660, 2459, 2201, 0, 0], [4661, 2459, 2202, 0, 0], [4662, 2460, 2202, 0, 0], [4663, 2460, 2203, 0, 0], [4664, 2461, 2203, 0, 0], [4665, 2461, 2204, 0, 0], [4666, 2462, 2204, 0, 0], [4667, 2462, 2205, 0, 0], [4668, 2463, 2205, 0, 0], [4669, 2463, 2206, 0, 0], [4670, 2464, 2206, 0, 0], [4671, 2464, 2207, 0, 0], [4672, 2465, 2207, 0, 0], [4673, 2465, 2208, 0, 0], [4674, 2466, 2208, 0, 0], [4675, 2466, 2209, 0, 0], [4676, 2467, 2209, 0, 0], [4677, 2468, 2209, 0, 0], [4678, 2468, 2210, 0, 0], [4679, 2469, 2210, 0, 0], [4680, 2469, 2211, 0, 0], [4681, 2470, 2211, 0, 0], [4682, 2470, 2212, 0, 0], [4683, 2471, 2212, 0, 0], [4684, 2471, 2213, 0, 0], [4685, 2472, 2213, 0, 0], [4686, 2472, 2214, 0, 0], [4687, 2473, 2214, 0, 0], [4688, 2473, 2215, 0, 0], [4689, 2474, 2215, 0, 0], [4690, 2474, 2216, 0, 0], [4691, 2475, 2216, 0, 0], [4692, 2475, 2217, 0, 0], [4693, 2476, 2217, 0, 0], [4694, 2476, 2218, 0, 0], [4695, 2477, 2218, 0, 0], [4696, 2477, 2219, 0, 0], [4697, 2478, 2219, 0, 0], [4698, 2478, 2220, 0, 0], [4699, 2479, 2220, 0, 0], [4700, 2479, 2221, 0, 0], [4701, 2480, 2221, 0, 0], [4702, 2480, 2222, 0, 0], [4703, 2481, 2222, 0, 0], [4704, 2481, 2223, 0, 0], [4705, 2482, 2223, 0, 0], [4706, 2482, 2224, 0, 0], [4707, 2483, 2224, 0, 0], [4708, 2483, 2225, 0, 0], [4709, 2484, 2225, 0, 0], [4710, 2484, 2226, 0, 0], [4711, 2485, 2226, 0, 0], [4712, 2485, 2227, 0, 0], [4713, 2486, 2227, 0, 0], [4714, 2486, 2228, 0, 0], [4715, 2487, 2228, 0, 0], [4716, 2487, 2229, 0, 0], [4717, 2488, 2229, 0, 0], [4718, 2488, 2230, 0, 0], [4719, 2489, 2230, 0, 0], [4720, 2489, 2231, 0, 0], [4721, 2490, 2231, 0, 0], [4722, 2490, 2232, 0, 0], [4723, 2491, 2232, 0, 0], [4724, 2491, 2233, 0, 0], [4725, 2492, 2233, 0, 0], [4726, 2492, 2234, 0, 0], [4727, 2493, 2234, 0, 0], [4728, 2493, 2235, 0, 0], [4729, 2494, 2235, 0, 0], [4730, 2495, 2235, 0, 0], [4731, 2495, 2236, 0, 0], [4732, 2496, 2236, 0, 0], [4733, 2496, 2237, 0, 0], [4734, 2497, 2237, 0, 0], [4735, 2497, 2238, 0, 0], [4736, 2498, 2238, 0, 0], [4737, 2498, 2239, 0, 0], [4738, 2499, 2239, 0, 0], [4739, 2499, 2240, 0, 0], [4740, 2500, 2240, 0, 0], [4741, 2500, 2241, 0, 0], [4742, 2501, 2241, 0, 0], [4743, 2501, 2242, 0, 0], [4744, 2502, 2242, 0, 0], [4745, 2502, 2243, 0, 0], [4746, 2503, 2243, 0, 0], [4747, 2503, 2244, 0, 0], [4748, 2504, 2244, 0, 0], [4749, 2504, 2245, 0, 0], [4750, 2505, 2245, 0, 0], [4751, 2505, 2246, 0, 0], [4752, 2506, 2246, 0, 0], [4753, 2506, 2247, 0, 0], [4754, 2507, 2247, 0, 0], [4755, 2507, 2248, 0, 0], [4756, 2508, 2248, 0, 0], [4757, 2508, 2249, 0, 0], [4758, 2509, 2249, 0, 0], [4759, 2509, 2250, 0, 0], [4760, 2510, 2250, 0, 0], [4761, 2510, 2251, 0, 0], [4762, 2511, 2251, 0, 0], [4763, 2511, 2252, 0, 0], [4764, 2512, 2252, 0, 0], [4765, 2512, 2253, 0, 0], [4766, 2513, 2253, 0, 0], [4767, 2513, 2254, 0, 0], [4768, 2514, 2254, 0, 0], [4769, 2514, 2255, 0, 0], [4770, 2515, 2255, 0, 0], [4771, 2515, 2256, 0, 0], [4772, 2516, 2256, 0, 0], [4773, 2516, 2257, 0, 0], [4774, 2517, 2257, 0, 0], [4775, 2517, 2258, 0, 0], [4776, 2518, 2258, 0, 0], [4777, 2518, 2259, 0, 0], [4778, 2519, 2259, 0, 0], [4779, 2519, 2260, 0, 0], [4780, 2520, 2260, 0, 0], [4781, 2521, 2260, 0, 0], [4782, 2521, 2261, 0, 0], [4783, 2522, 2261, 0, 0], [4784, 2522, 2262, 0, 0], [4785, 2523, 2262, 0, 0], [4786, 2523, 2263, 0, 0], [4787, 2524, 2263, 0, 0], [4788, 2524, 2264, 0, 0], [4789, 2525, 2264, 0, 0], [4790, 2525, 2265, 0, 0], [4791, 2526, 2265, 0, 0], [4792, 2526, 2266, 0, 0], [4793, 2527, 2266, 0, 0], [4794, 2527, 2267, 0, 0], [4795, 2528, 2267, 0, 0], [4796, 2528, 2268, 0, 0], [4797, 2529, 2268, 0, 0], [4798, 2529, 2269, 0, 0], [4799, 2530, 2269, 0, 0], [4800, 2530, 2270, 0, 0], [4801, 2531, 2270, 0, 0], [4802, 2531, 2271, 0, 0], [4803, 2532, 2271, 0, 0], [4804, 2532, 2272, 0, 0], [4805, 2533, 2272, 0, 0], [4806, 2533, 2273, 0, 0], [4807, 2534, 2273, 0, 0], [4808, 2534, 2274, 0, 0], [4809, 2535, 2274, 0, 0], [4810, 2535, 2275, 0, 0], [4811, 2536, 2275, 0, 0], [4812, 2536, 2276, 0, 0], [4813, 2537, 2276, 0, 0], [4814, 2537, 2277, 0, 0], [4815, 2538, 2277, 0, 0], [4816, 2538, 2278, 0, 0], [4817, 2539, 2278, 0, 0], [4818, 2539, 2279, 0, 0], [4819, 2540, 2279, 0, 0], [4820, 2540, 2280, 0, 0], [4821, 2541, 2280, 0, 0], [4822, 2541, 2281, 0, 0], [4823, 2542, 2281, 0, 0], [4824, 2542, 2282, 0, 0], [4825, 2543, 2282, 0, 0], [4826, 2543, 2283, 0, 0], [4827, 2544, 2283, 0, 0], [4828, 2544, 2284, 0, 0], [4829, 2545, 2284, 0, 0], [4830, 2545, 2285, 0, 0], [4831, 2546, 2285, 0, 0], [4832, 2546, 2286, 0, 0], [4833, 2547, 2286, 0, 0], [4834, 2547, 2287, 0, 0], [4835, 2548, 2287, 0, 0], [4836, 2549, 2287, 0, 0], [4837, 2549, 2288, 0, 0], [4838, 2550, 2288, 0, 0], [4839, 2550, 2289, 0, 0], [4840, 2551, 2289, 0, 0], [4841, 2551, 2290, 0, 0], [4842, 2552, 2290, 0, 0], [4843, 2552, 2291, 0, 0], [4844, 2553, 2291, 0, 0], [4845, 2553, 2292, 0, 0], [4846, 2554, 2292, 0, 0], [4847, 2554, 2293, 0, 0], [4848, 2555, 2293, 0, 0], [4849, 2555, 2294, 0, 0], [4850, 2556, 2294, 0, 0], [4851, 2556, 2295, 0, 0], [4852, 2557, 2295, 0, 0], [4853, 2557, 2296, 0, 0], [4854, 2558, 2296, 0, 0], [4855, 2558, 2297, 0, 0], [4856, 2559, 2297, 0, 0], [4857, 2559, 2298, 0, 0], [4858, 2560, 2298, 0, 0], [4859, 2560, 2299, 0, 0], [4860, 2561, 2299, 0, 0], [4861, 2561, 2300, 0, 0], [4862, 2562, 2300, 0, 0], [4863, 2562, 2301, 0, 0], [4864, 2563, 2301, 0, 0], [4865, 2563, 2302, 0, 0], [4866, 2564, 2302, 0, 0], [4867, 2564, 2303, 0, 0], [4868, 2565, 2303, 0, 0], [4869, 2565, 2304, 0, 0], [4870, 2566, 2304, 0, 0], [4871, 2566, 2305, 0, 0], [4872, 2567, 2305, 0, 0], [4873, 2567, 2306, 0, 0], [4874, 2568, 2306, 0, 0], [4875, 2568, 2307, 0, 0], [4876, 2569, 2307, 0, 0], [4877, 2569, 2308, 0, 0], [4878, 2570, 2308, 0, 0], [4879, 2570, 2309, 0, 0], [4880, 2571, 2309, 0, 0], [4881, 2571, 2310, 0, 0], [4882, 2572, 2310, 0, 0], [4883, 2572, 2311, 0, 0], [4884, 2573, 2311, 0, 0], [4885, 2573, 2312, 0, 0], [4886, 2574, 2312, 0, 0], [4887, 2574, 2313, 0, 0], [4888, 2575, 2313, 0, 0], [4889, 2575, 2314, 0, 0], [4890, 2576, 2314, 0, 0], [4891, 2576, 2315, 0, 0], [4892, 2577, 2315, 0, 0], [4893, 2578, 2315, 0, 0], [4894, 2578, 2316, 0, 0], [4895, 2579, 2316, 0, 0], [4896, 2579, 2317, 0, 0], [4897, 2580, 2317, 0, 0], [4898, 2580, 2318, 0, 0], [4899, 2581, 2318, 0, 0], [4900, 2581, 2319, 0, 0], [4901, 2582, 2319, 0, 0], [4902, 2582, 2320, 0, 0], [4903, 2583, 2320, 0, 0], [4904, 2583, 2321, 0, 0], [4905, 2584, 2321, 0, 0], [4906, 2584, 2322, 0, 0], [4907, 2585, 2322, 0, 0], [4908, 2585, 2323, 0, 0], [4909, 2586, 2323, 0, 0], [4910, 2586, 2324, 0, 0], [4911, 2587, 2324, 0, 0], [4912, 2587, 2325, 0, 0], [4913, 2588, 2325, 0, 0], [4914, 2588, 2326, 0, 0], [4915, 2589, 2326, 0, 0], [4916, 2589, 2327, 0, 0], [4917, 2590, 2327, 0, 0], [4918, 2590, 2328, 0, 0], [4919, 2591, 2328, 0, 0], [4920, 2591, 2329, 0, 0], [4921, 2592, 2329, 0, 0], [4922, 2592, 2330, 0, 0], [4923, 2593, 2330, 0, 0], [4924, 2593, 2331, 0, 0], [4925, 2594, 2331, 0, 0], [4926, 2594, 2332, 0, 0], [4927, 2595, 2332, 0, 0], [4928, 2595, 2333, 0, 0], [4929, 2596, 2333, 0, 0], [4930, 2596, 2334, 0, 0], [4931, 2597, 2334, 0, 0], [4932, 2597, 2335, 0, 0], [4933, 2598, 2335, 0, 0], [4934, 2598, 2336, 0, 0], [4935, 2599, 2336, 0, 0], [4936, 2599, 2337, 0, 0], [4937, 2600, 2337, 0, 0], [4938, 2600, 2338, 0, 0], [4939, 2601, 2338, 0, 0], [4940, 2601, 2339, 0, 0], [4941, 2602, 2339, 0, 0], [4942, 2602, 2340, 0, 0], [4943, 2603, 2340, 0, 0], [4944, 2603, 2341, 0, 0], [4945, 2604, 2341, 0, 0], [4946, 2604, 2342, 0, 0], [4947, 2605, 2342, 0, 0], [4948, 2605, 2343, 0, 0], [4949, 2606, 2343, 0, 0], [4950, 2607, 2343, 0, 0], [4951, 2607, 2344, 0, 0], [4952, 2608, 2344, 0, 0], [4953, 2608, 2345, 0, 0], [4954, 2609, 2345, 0, 0], [4955, 2609, 2346, 0, 0], [4956, 2610, 2346, 0, 0], [4957, 2610, 2347, 0, 0], [4958, 2611, 2347, 0, 0], [4959, 2611, 2348, 0, 0], [4960, 2612, 2348, 0, 0], [4961, 2612, 2349, 0, 0], [4962, 2613, 2349, 0, 0], [4963, 2613, 2350, 0, 0], [4964, 2614, 2350, 0, 0], [4965, 2614, 2351, 0, 0], [4966, 2615, 2351, 0, 0], [4967, 2615, 2352, 0, 0], [4968, 2616, 2352, 0, 0], [4969, 2616, 2353, 0, 0], [4970, 2617, 2353, 0, 0], [4971, 2617, 2354, 0, 0], [4972, 2618, 2354, 0, 0], [4973, 2618, 2355, 0, 0], [4974, 2619, 2355, 0, 0], [4975, 2619, 2356, 0, 0], [4976, 2620, 2356, 0, 0], [4977, 2620, 2357, 0, 0], [4978, 2621, 2357, 0, 0], [4979, 2621, 2358, 0, 0], [4980, 2622, 2358, 0, 0], [4981, 2622, 2359, 0, 0], [4982, 2623, 2359, 0, 0], [4983, 2623, 2360, 0, 0], [4984, 2624, 2360, 0, 0], [4985, 2624, 2361, 0, 0], [4986, 2625, 2361, 0, 0], [4987, 2625, 2362, 0, 0], [4988, 2626, 2362, 0, 0], [4989, 2626, 2363, 0, 0], [4990, 2627, 2363, 0, 0], [4991, 2627, 2364, 0, 0], [4992, 2628, 2364, 0, 0], [4993, 2628, 2365, 0, 0], [4994, 2629, 2365, 0, 0], [4995, 2629, 2366, 0, 0], [4996, 2630, 2366, 0, 0], [4997, 2630, 2367, 0, 0], [4998, 2631, 2367, 0, 0], [4999, 2631, 2368, 0, 0], [5000, 2632, 2368, 0, 0], [5001, 2632, 2369, 0, 0], [5002, 2633, 2369, 0, 0], [5003, 2633, 2370, 0, 0], [5004, 2634, 2370, 0, 0], [5005, 2634, 2371, 0, 0], [5006, 2635, 2371, 0, 0], [5007, 2635, 2372, 0, 0], [5008, 2636, 2372, 0, 0], [5009, 2636, 2373, 0, 0], [5010, 2637, 2373, 0, 0], [5011, 2638, 2373, 0, 0], [5012, 2638, 2374, 0, 0], [5013, 2639, 2374, 0, 0], [5014, 2639, 2375, 0, 0], [5015, 2640, 2375, 0, 0], [5016, 2640, 2376, 0, 0], [5017, 2641, 2376, 0, 0], [5018, 2641, 2377, 0, 0], [5019, 2642, 2377, 0, 0], [5020, 2642, 2378, 0, 0], [5021, 2643, 2378, 0, 0], [5022, 2643, 2379, 0, 0], [5023, 2644, 2379, 0, 0], [5024, 2644, 2380, 0, 0], [5025, 2645, 2380, 0, 0], [5026, 2645, 2381, 0, 0], [5027, 2646, 2381, 0, 0], [5028, 2646, 2382, 0, 0], [5029, 2647, 2382, 0, 0], [5030, 2647, 2383, 0, 0], [5031, 2648, 2383, 0, 0], [5032, 2648, 2384, 0, 0], [5033, 2649, 2384, 0, 0], [5034, 2649, 2385, 0, 0], [5035, 2650, 2385, 0, 0], [5036, 2650, 2386, 0, 0], [5037, 2651, 2386, 0, 0], [5038, 2651, 2387, 0, 0], [5039, 2652, 2387, 0, 0], [5040, 2652, 2388, 0, 0], [5041, 2653, 2388, 0, 0], [5042, 2653, 2389, 0, 0], [5043, 2654, 2389, 0, 0], [5044, 2654, 2390, 0, 0], [5045, 2655, 2390, 0, 0], [5046, 2655, 2391, 0, 0], [5047, 2656, 2391, 0, 0], [5048, 2656, 2392, 0, 0], [5049, 2657, 2392, 0, 0], [5050, 2657, 2393, 0, 0], [5051, 2658, 2393, 0, 0], [5052, 2658, 2394, 0, 0], [5053, 2659, 2394, 0, 0], [5054, 2659, 2395, 0, 0], [5055, 2660, 2395, 0, 0], [5056, 2660, 2396, 0, 0], [5057, 2661, 2396, 0, 0], [5058, 2661, 2397, 0, 0], [5059, 2662, 2397, 0, 0], [5060, 2662, 2398, 0, 0], [5061, 2663, 2398, 0, 0], [5062, 2663, 2399, 0, 0], [5063, 2664, 2399, 0, 0], [5064, 2664, 2400, 0, 0], [5065, 2665, 2400, 0, 0], [5066, 2665, 2401, 0, 0], [5067, 2666, 2401, 0, 0], [5068, 2666, 2402, 0, 0], [5069, 2667, 2402, 0, 0], [5070, 2667, 2403, 0, 0], [5071, 2668, 2403, 0, 0], [5072, 2668, 2404, 0, 0], [5073, 2669, 2404, 0, 0], [5074, 2670, 2404, 0, 0], [5075, 2670, 2405, 0, 0], [5076, 2671, 2405, 0, 0], [5077, 2671, 2406, 0, 0], [5078, 2672, 2406, 0, 0], [5079, 2672, 2407, 0, 0], [5080, 2673, 2407, 0, 0], [5081, 2673, 2408, 0, 0], [5082, 2674, 2408, 0, 0], [5083, 2674, 2409, 0, 0], [5084, 2675, 2409, 0, 0], [5085, 2675, 2410, 0, 0], [5086, 2676, 2410, 0, 0], [5087, 2676, 2411, 0, 0], [5088, 2677, 2411, 0, 0], [5089, 2677, 2412, 0, 0], [5090, 2678, 2412, 0, 0], [5091, 2678, 2413, 0, 0], [5092, 2679, 2413, 0, 0], [5093, 2679, 2414, 0, 0], [5094, 2680, 2414, 0, 0], [5095, 2680, 2415, 0, 0], [5096, 2681, 2415, 0, 0], [5097, 2681, 2416, 0, 0], [5098, 2682, 2416, 0, 0], [5099, 2682, 2417, 0, 0], [5100, 2683, 2417, 0, 0], [5101, 2683, 2418, 0, 0], [5102, 2684, 2418, 0, 0], [5103, 2684, 2419, 0, 0], [5104, 2685, 2419, 0, 0], [5105, 2685, 2420, 0, 0], [5106, 2686, 2420, 0, 0], [5107, 2686, 2421, 0, 0], [5108, 2687, 2421, 0, 0], [5109, 2687, 2422, 0, 0], [5110, 2688, 2422, 0, 0], [5111, 2688, 2423, 0, 0], [5112, 2689, 2423, 0, 0], [5113, 2689, 2424, 0, 0], [5114, 2690, 2424, 0, 0], [5115, 2690, 2425, 0, 0], [5116, 2691, 2425, 0, 0], [5117, 2691, 2426, 0, 0], [5118, 2692, 2426, 0, 0], [5119, 2692, 2427, 0, 0], [5120, 2693, 2427, 0, 0], [5121, 2693, 2428, 0, 0], [5122, 2694, 2428, 0, 0], [5123, 2694, 2429, 0, 0], [5124, 2695, 2429, 0, 0], [5125, 2695, 2430, 0, 0], [5126, 2696, 2430, 0, 0], [5127, 2696, 2431, 0, 0], [5128, 2697, 2431, 0, 0], [5129, 2697, 2432, 0, 0], [5130, 2698, 2432, 0, 0], [5131, 2698, 2433, 0, 0], [5132, 2699, 2433, 0, 0], [5133, 2699, 2434, 0, 0], [5134, 2700, 2434, 0, 0], [5135, 2700, 2435, 0, 0], [5136, 2701, 2435, 0, 0], [5137, 2701, 2436, 0, 0], [5138, 2702, 2436, 0, 0], [5139, 2703, 2436, 0, 0], [5140, 2703, 2437, 0, 0], [5141, 2704, 2437, 0, 0], [5142, 2704, 2438, 0, 0], [5143, 2705, 2438, 0, 0], [5144, 2705, 2439, 0, 0], [5145, 2706, 2439, 0, 0], [5146, 2706, 2440, 0, 0], [5147, 2707, 2440, 0, 0], [5148, 2707, 2441, 0, 0], [5149, 2708, 2441, 0, 0], [5150, 2708, 2442, 0, 0], [5151, 2709, 2442, 0, 0], [5152, 2709, 2443, 0, 0], [5153, 2710, 2443, 0, 0], [5154, 2710, 2444, 0, 0], [5155, 2711, 2444, 0, 0], [5156, 2711, 2445, 0, 0], [5157, 2712, 2445, 0, 0], [5158, 2712, 2446, 0, 0], [5159, 2713, 2446, 0, 0], [5160, 2713, 2447, 0, 0], [5161, 2714, 2447, 0, 0], [5162, 2714, 2448, 0, 0], [5163, 2715, 2448, 0, 0], [5164, 2715, 2449, 0, 0], [5165, 2716, 2449, 0, 0], [5166, 2716, 2450, 0, 0], [5167, 2717, 2450, 0, 0], [5168, 2717, 2451, 0, 0], [5169, 2718, 2451, 0, 0], [5170, 2718, 2452, 0, 0], [5171, 2719, 2452, 0, 0], [5172, 2719, 2453, 0, 0], [5173, 2720, 2453, 0, 0], [5174, 2720, 2454, 0, 0], [5175, 2721, 2454, 0, 0], [5176, 2721, 2455, 0, 0], [5177, 2722, 2455, 0, 0], [5178, 2722, 2456, 0, 0], [5179, 2723, 2456, 0, 0], [5180, 2723, 2457, 0, 0], [5181, 2724, 2457, 0, 0], [5182, 2724, 2458, 0, 0], [5183, 2725, 2458, 0, 0], [5184, 2725, 2459, 0, 0], [5185, 2726, 2459, 0, 0], [5186, 2726, 2460, 0, 0], [5187, 2727, 2460, 0, 0], [5188, 2727, 2461, 0, 0], [5189, 2728, 2461, 0, 0], [5190, 2728, 2462, 0, 0], [5191, 2729, 2462, 0, 0], [5192, 2729, 2463, 0, 0], [5193, 2730, 2463, 0, 0], [5194, 2730, 2464, 0, 0], [5195, 2731, 2464, 0, 0], [5196, 2731, 2465, 0, 0], [5197, 2732, 2465, 0, 0], [5198, 2732, 2466, 0, 0], [5199, 2733, 2466, 0, 0], [5200, 2733, 2467, 0, 0], [5201, 2734, 2467, 0, 0], [5202, 2734, 2468, 0, 0], [5203, 2735, 2468, 0, 0], [5204, 2735, 2469, 0, 0], [5205, 2736, 2469, 0, 0], [5206, 2736, 2470, 0, 0], [5207, 2737, 2470, 0, 0], [5208, 2738, 2470, 0, 0], [5209, 2738, 2471, 0, 0], [5210, 2739, 2471, 0, 0], [5211, 2739, 2472, 0, 0], [5212, 2740, 2472, 0, 0], [5213, 2740, 2473, 0, 0], [5214, 2741, 2473, 0, 0], [5215, 2741, 2474, 0, 0], [5216, 2742, 2474, 0, 0], [5217, 2742, 2475, 0, 0], [5218, 2743, 2475, 0, 0], [5219, 2743, 2476, 0, 0], [5220, 2744, 2476, 0, 0], [5221, 2744, 2477, 0, 0], [5222, 2745, 2477, 0, 0], [5223, 2745, 2478, 0, 0], [5224, 2746, 2478, 0, 0], [5225, 2746, 2479, 0, 0], [5226, 2747, 2479, 0, 0], [5227, 2747, 2480, 0, 0], [5228, 2748, 2480, 0, 0], [5229, 2748, 2481, 0, 0], [5230, 2749, 2481, 0, 0], [5231, 2749, 2482, 0, 0], [5232, 2750, 2482, 0, 0], [5233, 2750, 2483, 0, 0], [5234, 2751, 2483, 0, 0], [5235, 2751, 2484, 0, 0], [5236, 2752, 2484, 0, 0], [5237, 2752, 2485, 0, 0], [5238, 2753, 2485, 0, 0], [5239, 2753, 2486, 0, 0], [5240, 2754, 2486, 0, 0], [5241, 2754, 2487, 0, 0], [5242, 2755, 2487, 0, 0], [5243, 2755, 2488, 0, 0], [5244, 2756, 2488, 0, 0], [5245, 2756, 2489, 0, 0], [5246, 2757, 2489, 0, 0], [5247, 2757, 2490, 0, 0], [5248, 2758, 2490, 0, 0], [5249, 2758, 2491, 0, 0], [5250, 2759, 2491, 0, 0], [5251, 2759, 2492, 0, 0], [5252, 2760, 2492, 0, 0], [5253, 2760, 2493, 0, 0], [5254, 2761, 2493, 0, 0], [5255, 2761, 2494, 0, 0], [5256, 2762, 2494, 0, 0], [5257, 2762, 2495, 0, 0], [5258, 2763, 2495, 0, 0], [5259, 2763, 2496, 0, 0], [5260, 2764, 2496, 0, 0], [5261, 2764, 2497, 0, 0], [5262, 2765, 2497, 0, 0], [5263, 2765, 2498, 0, 0], [5264, 2766, 2498, 0, 0], [5265, 2766, 2499, 0, 0], [5266, 2767, 2499, 0, 0], [5267, 2767, 2500, 0, 0], [5268, 2768, 2500, 0, 0], [5269, 2768, 2501, 0, 0], [5270, 2769, 2501, 0, 0], [5271, 2769, 2502, 0, 0], [5272, 2770, 2502, 0, 0], [5273, 2770, 2503, 0, 0], [5274, 2771, 2503, 0, 0], [5275, 2771, 2504, 0, 0], [5276, 2772, 2504, 0, 0], [5277, 2772, 2505, 0, 0], [5278, 2773, 2505, 0, 0], [5279, 2774, 2505, 0, 0], [5280, 2774, 2506, 0, 0], [5281, 2775, 2506, 0, 0], [5282, 2775, 2507, 0, 0], [5283, 2776, 2507, 0, 0], [5284, 2776, 2508, 0, 0], [5285, 2777, 2508, 0, 0], [5286, 2777, 2509, 0, 0], [5287, 2778, 2509, 0, 0], [5288, 2778, 2510, 0, 0], [5289, 2779, 2510, 0, 0], [5290, 2779, 2511, 0, 0], [5291, 2780, 2511, 0, 0], [5292, 2780, 2512, 0, 0], [5293, 2781, 2512, 0, 0], [5294, 2781, 2513, 0, 0], [5295, 2782, 2513, 0, 0], [5296, 2782, 2514, 0, 0], [5297, 2783, 2514, 0, 0], [5298, 2783, 2515, 0, 0], [5299, 2784, 2515, 0, 0], [5300, 2784, 2516, 0, 0], [5301, 2785, 2516, 0, 0], [5302, 2785, 2517, 0, 0], [5303, 2786, 2517, 0, 0], [5304, 2786, 2518, 0, 0], [5305, 2787, 2518, 0, 0], [5306, 2787, 2519, 0, 0], [5307, 2788, 2519, 0, 0], [5308, 2788, 2520, 0, 0], [5309, 2789, 2520, 0, 0], [5310, 2789, 2521, 0, 0], [5311, 2790, 2521, 0, 0], [5312, 2790, 2522, 0, 0], [5313, 2791, 2522, 0, 0], [5314, 2791, 2523, 0, 0], [5315, 2792, 2523, 0, 0], [5316, 2792, 2524, 0, 0], [5317, 2793, 2524, 0, 0], [5318, 2793, 2525, 0, 0], [5319, 2794, 2525, 0, 0], [5320, 2794, 2526, 0, 0], [5321, 2795, 2526, 0, 0], [5322, 2795, 2527, 0, 0], [5323, 2796, 2527, 0, 0], [5324, 2796, 2528, 0, 0], [5325, 2797, 2528, 0, 0], [5326, 2797, 2529, 0, 0], [5327, 2798, 2529, 0, 0], [5328, 2798, 2530, 0, 0], [5329, 2799, 2530, 0, 0], [5330, 2799, 2531, 0, 0], [5331, 2800, 2531, 0, 0], [5332, 2800, 2532, 0, 0], [5333, 2801, 2532, 0, 0], [5334, 2801, 2533, 0, 0], [5335, 2802, 2533, 0, 0], [5336, 2802, 2534, 0, 0], [5337, 2803, 2534, 0, 0], [5338, 2803, 2535, 0, 0], [5339, 2804, 2535, 0, 0], [5340, 2804, 2536, 0, 0], [5341, 2805, 2536, 0, 0], [5342, 2805, 2537, 0, 0], [5343, 2806, 2537, 0, 0], [5344, 2806, 2538, 0, 0], [5345, 2807, 2538, 0, 0], [5346, 2807, 2539, 0, 0], [5347, 2808, 2539, 0, 0], [5348, 2808, 2540, 0, 0], [5349, 2809, 2540, 0, 0], [5350, 2809, 2541, 0, 0], [5351, 2810, 2541, 0, 0], [5352, 2810, 2542, 0, 0], [5353, 2811, 2542, 0, 0], [5354, 2811, 2543, 0, 0], [5355, 2812, 2543, 0, 0], [5356, 2813, 2543, 0, 0], [5357, 2813, 2544, 0, 0], [5358, 2814, 2544, 0, 0], [5359, 2814, 2545, 0, 0], [5360, 2815, 2545, 0, 0], [5361, 2815, 2546, 0, 0], [5362, 2816, 2546, 0, 0], [5363, 2816, 2547, 0, 0], [5364, 2817, 2547, 0, 0], [5365, 2817, 2548, 0, 0], [5366, 2818, 2548, 0, 0], [5367, 2818, 2549, 0, 0], [5368, 2819, 2549, 0, 0], [5369, 2819, 2550, 0, 0], [5370, 2820, 2550, 0, 0], [5371, 2820, 2551, 0, 0], [5372, 2821, 2551, 0, 0], [5373, 2821, 2552, 0, 0], [5374, 2822, 2552, 0, 0], [5375, 2822, 2553, 0, 0], [5376, 2823, 2553, 0, 0], [5377, 2823, 2554, 0, 0], [5378, 2824, 2554, 0, 0], [5379, 2824, 2555, 0, 0], [5380, 2825, 2555, 0, 0], [5381, 2825, 2556, 0, 0], [5382, 2826, 2556, 0, 0], [5383, 2826, 2557, 0, 0], [5384, 2827, 2557, 0, 0], [5385, 2827, 2558, 0, 0], [5386, 2828, 2558, 0, 0], [5387, 2828, 2559, 0, 0], [5388, 2829, 2559, 0, 0], [5389, 2829, 2560, 0, 0], [5390, 2830, 2560, 0, 0], [5391, 2830, 2561, 0, 0], [5392, 2831, 2561, 0, 0], [5393, 2831, 2562, 0, 0], [5394, 2832, 2562, 0, 0], [5395, 2832, 2563, 0, 0], [5396, 2833, 2563, 0, 0], [5397, 2833, 2564, 0, 0], [5398, 2834, 2564, 0, 0], [5399, 2834, 2565, 0, 0], [5400, 2835, 2565, 0, 0], [5401, 2835, 2566, 0, 0], [5402, 2836, 2566, 0, 0], [5403, 2836, 2567, 0, 0], [5404, 2837, 2567, 0, 0], [5405, 2837, 2568, 0, 0], [5406, 2838, 2568, 0, 0], [5407, 2838, 2569, 0, 0], [5408, 2839, 2569, 0, 0], [5409, 2839, 2570, 0, 0], [5410, 2840, 2570, 0, 0], [5411, 2840, 2571, 0, 0], [5412, 2841, 2571, 0, 0], [5413, 2841, 2572, 0, 0], [5414, 2842, 2572, 0, 0], [5415, 2842, 2573, 0, 0], [5416, 2843, 2573, 0, 0], [5417, 2843, 2574, 0, 0], [5418, 2844, 2574, 0, 0], [5419, 2844, 2575, 0, 0], [5420, 2845, 2575, 0, 0], [5421, 2845, 2576, 0, 0], [5422, 2846, 2576, 0, 0], [5423, 2846, 2577, 0, 0], [5424, 2847, 2577, 0, 0], [5425, 2847, 2578, 0, 0], [5426, 2848, 2578, 0, 0], [5427, 2848, 2579, 0, 0], [5428, 2849, 2579, 0, 0], [5429, 2849, 2580, 0, 0], [5430, 2850, 2580, 0, 0], [5431, 2850, 2581, 0, 0], [5432, 2851, 2581, 0, 0], [5433, 2851, 2582, 0, 0], [5434, 2852, 2582, 0, 0], [5435, 2853, 2582, 0, 0], [5436, 2853, 2583, 0, 0], [5437, 2854, 2583, 0, 0], [5438, 2854, 2584, 0, 0], [5439, 2855, 2584, 0, 0], [5440, 2855, 2585, 0, 0], [5441, 2856, 2585, 0, 0], [5442, 2856, 2586, 0, 0], [5443, 2857, 2586, 0, 0], [5444, 2857, 2587, 0, 0], [5445, 2858, 2587, 0, 0], [5446, 2858, 2588, 0, 0], [5447, 2859, 2588, 0, 0], [5448, 2859, 2589, 0, 0], [5449, 2860, 2589, 0, 0], [5450, 2860, 2590, 0, 0], [5451, 2861, 2590, 0, 0], [5452, 2861, 2591, 0, 0], [5453, 2862, 2591, 0, 0], [5454, 2862, 2592, 0, 0], [5455, 2863, 2592, 0, 0], [5456, 2863, 2593, 0, 0], [5457, 2864, 2593, 0, 0], [5458, 2864, 2594, 0, 0], [5459, 2865, 2594, 0, 0], [5460, 2865, 2595, 0, 0], [5461, 2866, 2595, 0, 0], [5462, 2866, 2596, 0, 0], [5463, 2867, 2596, 0, 0], [5464, 2867, 2597, 0, 0], [5465, 2868, 2597, 0, 0], [5466, 2868, 2598, 0, 0], [5467, 2869, 2598, 0, 0], [5468, 2869, 2599, 0, 0], [5469, 2870, 2599, 0, 0], [5470, 2870, 2600, 0, 0], [5471, 2871, 2600, 0, 0], [5472, 2871, 2601, 0, 0], [5473, 2872, 2601, 0, 0], [5474, 2872, 2602, 0, 0], [5475, 2873, 2602, 0, 0], [5476, 2873, 2603, 0, 0], [5477, 2874, 2603, 0, 0], [5478, 2874, 2604, 0, 0], [5479, 2875, 2604, 0, 0], [5480, 2875, 2605, 0, 0], [5481, 2876, 2605, 0, 0], [5482, 2876, 2606, 0, 0], [5483, 2877, 2606, 0, 0], [5484, 2877, 2607, 0, 0], [5485, 2878, 2607, 0, 0], [5486, 2878, 2608, 0, 0], [5487, 2879, 2608, 0, 0], [5488, 2879, 2609, 0, 0], [5489, 2880, 2609, 0, 0], [5490, 2880, 2610, 0, 0], [5491, 2881, 2610, 0, 0], [5492, 2881, 2611, 0, 0], [5493, 2882, 2611, 0, 0], [5494, 2882, 2612, 0, 0], [5495, 2883, 2612, 0, 0], [5496, 2883, 2613, 0, 0], [5497, 2884, 2613, 0, 0], [5498, 2884, 2614, 0, 0], [5499, 2885, 2614, 0, 0], [5500, 2885, 2615, 0, 0], [5501, 2886, 2615, 0, 0], [5502, 2886, 2616, 0, 0], [5503, 2887, 2616, 0, 0], [5504, 2887, 2617, 0, 0], [5505, 2888, 2617, 0, 0], [5506, 2888, 2618, 0, 0], [5507, 2889, 2618, 0, 0], [5508, 2889, 2619, 0, 0], [5509, 2890, 2619, 0, 0], [5510, 2890, 2620, 0, 0], [5511, 2891, 2620, 0, 0], [5512, 2891, 2621, 0, 0], [5513, 2892, 2621, 0, 0], [5514, 2892, 2622, 0, 0], [5515, 2893, 2622, 0, 0], [5516, 2893, 2623, 0, 0], [5517, 2894, 2623, 0, 0], [5518, 2894, 2624, 0, 0], [5519, 2895, 2624, 0, 0], [5520, 2896, 2624, 0, 0], [5521, 2896, 2625, 0, 0], [5522, 2897, 2625, 0, 0], [5523, 2897, 2626, 0, 0], [5524, 2898, 2626, 0, 0], [5525, 2898, 2627, 0, 0], [5526, 2899, 2627, 0, 0], [5527, 2899, 2628, 0, 0], [5528, 2900, 2628, 0, 0], [5529, 2900, 2629, 0, 0], [5530, 2901, 2629, 0, 0], [5531, 2901, 2630, 0, 0], [5532, 2902, 2630, 0, 0], [5533, 2902, 2631, 0, 0], [5534, 2903, 2631, 0, 0], [5535, 2903, 2632, 0, 0], [5536, 2904, 2632, 0, 0], [5537, 2904, 2633, 0, 0], [5538, 2905, 2633, 0, 0], [5539, 2905, 2634, 0, 0], [5540, 2906, 2634, 0, 0], [5541, 2906, 2635, 0, 0], [5542, 2907, 2635, 0, 0], [5543, 2907, 2636, 0, 0], [5544, 2908, 2636, 0, 0], [5545, 2908, 2637, 0, 0], [5546, 2909, 2637, 0, 0], [5547, 2909, 2638, 0, 0], [5548, 2910, 2638, 0, 0], [5549, 2910, 2639, 0, 0], [5550, 2911, 2639, 0, 0], [5551, 2911, 2640, 0, 0], [5552, 2912, 2640, 0, 0], [5553, 2912, 2641, 0, 0], [5554, 2913, 2641, 0, 0], [5555, 2913, 2642, 0, 0], [5556, 2914, 2642, 0, 0], [5557, 2914, 2643, 0, 0], [5558, 2915, 2643, 0, 0], [5559, 2915, 2644, 0, 0], [5560, 2916, 2644, 0, 0], [5561, 2916, 2645, 0, 0], [5562, 2917, 2645, 0, 0], [5563, 2917, 2646, 0, 0], [5564, 2918, 2646, 0, 0], [5565, 2918, 2647, 0, 0], [5566, 2919, 2647, 0, 0], [5567, 2919, 2648, 0, 0], [5568, 2920, 2648, 0, 0], [5569, 2920, 2649, 0, 0], [5570, 2921, 2649, 0, 0], [5571, 2921, 2650, 0, 0], [5572, 2922, 2650, 0, 0], [5573, 2922, 2651, 0, 0], [5574, 2923, 2651, 0, 0], [5575, 2923, 2652, 0, 0], [5576, 2924, 2652, 0, 0], [5577, 2924, 2653, 0, 0], [5578, 2925, 2653, 0, 0], [5579, 2925, 2654, 0, 0], [5580, 2926, 2654, 0, 0], [5581, 2926, 2655, 0, 0], [5582, 2927, 2655, 0, 0], [5583, 2927, 2656, 0, 0], [5584, 2928, 2656, 0, 0], [5585, 2928, 2657, 0, 0], [5586, 2929, 2657, 0, 0], [5587, 2929, 2658, 0, 0], [5588, 2930, 2658, 0, 0], [5589, 2930, 2659, 0, 0], [5590, 2931, 2659, 0, 0], [5591, 2931, 2660, 0, 0], [5592, 2932, 2660, 0, 0], [5593, 2932, 2661, 0, 0], [5594, 2933, 2661, 0, 0], [5595, 2933, 2662, 0, 0], [5596, 2934, 2662, 0, 0], [5597, 2934, 2663, 0, 0], [5598, 2935, 2663, 0, 0], [5599, 2935, 2664, 0, 0], [5600, 2936, 2664, 0, 0], [5601, 2936, 2665, 0, 0], [5602, 2937, 2665, 0, 0], [5603, 2937, 2666, 0, 0], [5604, 2938, 2666, 0, 0], [5605, 2938, 2667, 0, 0], [5606, 2939, 2667, 0, 0], [5607, 2939, 2668, 0, 0], [5608, 2940, 2668, 0, 0], [5609, 2940, 2669, 0, 0], [5610, 2941, 2669, 0, 0], [5611, 2942, 2669, 0, 0], [5612, 2942, 2670, 0, 0], [5613, 2943, 2670, 0, 0], [5614, 2943, 2671, 0, 0], [5615, 2944, 2671, 0, 0], [5616, 2944, 2672, 0, 0], [5617, 2945, 2672, 0, 0], [5618, 2945, 2673, 0, 0], [5619, 2946, 2673, 0, 0], [5620, 2946, 2674, 0, 0], [5621, 2947, 2674, 0, 0], [5622, 2947, 2675, 0, 0], [5623, 2948, 2675, 0, 0], [5624, 2948, 2676, 0, 0], [5625, 2949, 2676, 0, 0], [5626, 2949, 2677, 0, 0], [5627, 2950, 2677, 0, 0], [5628, 2950, 2678, 0, 0], [5629, 2951, 2678, 0, 0], [5630, 2951, 2679, 0, 0], [5631, 2952, 2679, 0, 0], [5632, 2952, 2680, 0, 0], [5633, 2953, 2680, 0, 0], [5634, 2953, 2681, 0, 0], [5635, 2954, 2681, 0, 0], [5636, 2954, 2682, 0, 0], [5637, 2955, 2682, 0, 0], [5638, 2955, 2683, 0, 0], [5639, 2956, 2683, 0, 0], [5640, 2956, 2684, 0, 0], [5641, 2957, 2684, 0, 0], [5642, 2957, 2685, 0, 0], [5643, 2958, 2685, 0, 0], [5644, 2958, 2686, 0, 0], [5645, 2959, 2686, 0, 0], [5646, 2959, 2687, 0, 0], [5647, 2960, 2687, 0, 0], [5648, 2960, 2688, 0, 0], [5649, 2961, 2688, 0, 0], [5650, 2961, 2689, 0, 0], [5651, 2962, 2689, 0, 0], [5652, 2962, 2690, 0, 0], [5653, 2963, 2690, 0, 0], [5654, 2963, 2691, 0, 0], [5655, 2964, 2691, 0, 0], [5656, 2964, 2692, 0, 0], [5657, 2965, 2692, 0, 0], [5658, 2965, 2693, 0, 0], [5659, 2966, 2693, 0, 0], [5660, 2966, 2694, 0, 0], [5661, 2967, 2694, 0, 0], [5662, 2967, 2695, 0, 0], [5663, 2968, 2695, 0, 0], [5664, 2968, 2696, 0, 0], [5665, 2969, 2696, 0, 0], [5666, 2969, 2697, 0, 0], [5667, 2970, 2697, 0, 0], [5668, 2970, 2698, 0, 0], [5669, 2971, 2698, 0, 0], [5670, 2971, 2699, 0, 0], [5671, 2972, 2699, 0, 0], [5672, 2972, 2700, 0, 0], [5673, 2973, 2700, 0, 0], [5674, 2973, 2701, 0, 0], [5675, 2974, 2701, 0, 0], [5676, 2974, 2702, 0, 0], [5677, 2975, 2702, 0, 0], [5678, 2975, 2703, 0, 0], [5679, 2976, 2703, 0, 0], [5680, 2976, 2704, 0, 0], [5681, 2977, 2704, 0, 0], [5682, 2977, 2705, 0, 0], [5683, 2978, 2705, 0, 0], [5684, 2978, 2706, 0, 0], [5685, 2979, 2706, 0, 0], [5686, 2979, 2707, 0, 0], [5687, 2980, 2707, 0, 0], [5688, 2980, 2708, 0, 0], [5689, 2981, 2708, 0, 0], [5690, 2981, 2709, 0, 0], [5691, 2982, 2709, 0, 0], [5692, 2982, 2710, 0, 0], [5693, 2983, 2710, 0, 0], [5694, 2983, 2711, 0, 0], [5695, 2984, 2711, 0, 0], [5696, 2984, 2712, 0, 0], [5697, 2985, 2712, 0, 0], [5698, 2985, 2713, 0, 0], [5699, 2986, 2713, 0, 0], [5700, 2986, 2714, 0, 0], [5701, 2987, 2714, 0, 0], [5702, 2987, 2715, 0, 0], [5703, 2988, 2715, 0, 0], [5704, 2988, 2716, 0, 0], [5705, 2989, 2716, 0, 0], [5706, 2989, 2717, 0, 0], [5707, 2990, 2717, 0, 0], [5708, 2990, 2718, 0, 0], [5709, 2991, 2718, 0, 0], [5710, 2992, 2718, 0, 0], [5711, 2992, 2719, 0, 0], [5712, 2993, 2719, 0, 0], [5713, 2993, 2720, 0, 0], [5714, 2994, 2720, 0, 0], [5715, 2994, 2721, 0, 0], [5716, 2995, 2721, 0, 0], [5717, 2995, 2722, 0, 0], [5718, 2996, 2722, 0, 0], [5719, 2996, 2723, 0, 0], [5720, 2997, 2723, 0, 0], [5721, 2997, 2724, 0, 0], [5722, 2998, 2724, 0, 0], [5723, 2998, 2725, 0, 0], [5724, 2999, 2725, 0, 0], [5725, 2999, 2726, 0, 0], [5726, 3000, 2726, 0, 0], [5727, 3000, 2727, 0, 0], [5728, 3001, 2727, 0, 0], [5729, 3001, 2728, 0, 0], [5730, 3002, 2728, 0, 0], [5731, 3002, 2729, 0, 0], [5732, 3003, 2729, 0, 0], [5733, 3003, 2730, 0, 0], [5734, 3004, 2730, 0, 0], [5735, 3004, 2731, 0, 0], [5736, 3005, 2731, 0, 0], [5737, 3005, 2732, 0, 0], [5738, 3006, 2732, 0, 0], [5739, 3006, 2733, 0, 0], [5740, 3007, 2733, 0, 0], [5741, 3007, 2734, 0, 0], [5742, 3008, 2734, 0, 0], [5743, 3008, 2735, 0, 0], [5744, 3009, 2735, 0, 0], [5745, 3009, 2736, 0, 0], [5746, 3010, 2736, 0, 0], [5747, 3010, 2737, 0, 0], [5748, 3011, 2737, 0, 0], [5749, 3011, 2738, 0, 0], [5750, 3012, 2738, 0, 0], [5751, 3012, 2739, 0, 0], [5752, 3013, 2739, 0, 0], [5753, 3013, 2740, 0, 0], [5754, 3014, 2740, 0, 0], [5755, 3014, 2741, 0, 0], [5756, 3015, 2741, 0, 0], [5757, 3015, 2742, 0, 0], [5758, 3016, 2742, 0, 0], [5759, 3016, 2743, 0, 0], [5760, 3017, 2743, 0, 0], [5761, 3017, 2744, 0, 0], [5762, 3018, 2744, 0, 0], [5763, 3018, 2745, 0, 0], [5764, 3019, 2745, 0, 0], [5765, 3019, 2746, 0, 0], [5766, 3020, 2746, 0, 0], [5767, 3020, 2747, 0, 0], [5768, 3021, 2747, 0, 0], [5769, 3021, 2748, 0, 0], [5770, 3022, 2748, 0, 0], [5771, 3022, 2749, 0, 0], [5772, 3023, 2749, 0, 0], [5773, 3023, 2750, 0, 0], [5774, 3024, 2750, 0, 0], [5775, 3024, 2751, 0, 0], [5776, 3025, 2751, 0, 0], [5777, 3025, 2752, 0, 0], [5778, 3026, 2752, 0, 0], [5779, 3026, 2753, 0, 0], [5780, 3027, 2753, 0, 0], [5781, 3027, 2754, 0, 0], [5782, 3028, 2754, 0, 0], [5783, 3028, 2755, 0, 0], [5784, 3029, 2755, 0, 0], [5785, 3029, 2756, 0, 0], [5786, 3030, 2756, 0, 0], [5787, 3030, 2757, 0, 0], [5788, 3031, 2757, 0, 0], [5789, 3031, 2758, 0, 0], [5790, 3032, 2758, 0, 0], [5791, 3032, 2759, 0, 0], [5792, 3033, 2759, 0, 0], [5793, 3033, 2760, 0, 0], [5794, 3034, 2760, 0, 0], [5795, 3034, 2761, 0, 0], [5796, 3035, 2761, 0, 0], [5797, 3035, 2762, 0, 0], [5798, 3036, 2762, 0, 0], [5799, 3036, 2763, 0, 0], [5800, 3037, 2763, 0, 0], [5801, 3037, 2764, 0, 0], [5802, 3038, 2764, 0, 0], [5803, 3038, 2765, 0, 0], [5804, 3039, 2765, 0, 0], [5805, 3039, 2766, 0, 0], [5806, 3040, 2766, 0, 0], [5807, 3040, 2767, 0, 0], [5808, 3041, 2767, 0, 0], [5809, 3041, 2768, 0, 0], [5810, 3042, 2768, 0, 0], [5811, 3042, 2769, 0, 0], [5812, 3043, 2769, 0, 0], [5813, 3043, 2770, 0, 0], [5814, 3044, 2770, 0, 0], [5815, 3044, 2771, 0, 0], [5816, 3045, 2771, 0, 0], [5817, 3045, 2772, 0, 0], [5818, 3046, 2772, 0, 0], [5819, 3047, 2772, 0, 0], [5820, 3047, 2773, 0, 0], [5821, 3048, 2773, 0, 0], [5822, 3048, 2774, 0, 0], [5823, 3049, 2774, 0, 0], [5824, 3049, 2775, 0, 0], [5825, 3050, 2775, 0, 0], [5826, 3050, 2776, 0, 0], [5827, 3051, 2776, 0, 0], [5828, 3051, 2777, 0, 0], [5829, 3052, 2777, 0, 0], [5830, 3052, 2778, 0, 0], [5831, 3053, 2778, 0, 0], [5832, 3053, 2779, 0, 0], [5833, 3054, 2779, 0, 0], [5834, 3054, 2780, 0, 0], [5835, 3055, 2780, 0, 0], [5836, 3055, 2781, 0, 0], [5837, 3056, 2781, 0, 0], [5838, 3056, 2782, 0, 0], [5839, 3057, 2782, 0, 0], [5840, 3057, 2783, 0, 0], [5841, 3058, 2783, 0, 0], [5842, 3058, 2784, 0, 0], [5843, 3059, 2784, 0, 0], [5844, 3059, 2785, 0, 0], [5845, 3060, 2785, 0, 0], [5846, 3060, 2786, 0, 0], [5847, 3061, 2786, 0, 0], [5848, 3061, 2787, 0, 0], [5849, 3062, 2787, 0, 0], [5850, 3062, 2788, 0, 0], [5851, 3063, 2788, 0, 0], [5852, 3063, 2789, 0, 0], [5853, 3064, 2789, 0, 0], [5854, 3064, 2790, 0, 0], [5855, 3065, 2790, 0, 0], [5856, 3065, 2791, 0, 0], [5857, 3066, 2791, 0, 0], [5858, 3066, 2792, 0, 0], [5859, 3067, 2792, 0, 0], [5860, 3067, 2793, 0, 0], [5861, 3068, 2793, 0, 0], [5862, 3068, 2794, 0, 0], [5863, 3069, 2794, 0, 0], [5864, 3069, 2795, 0, 0], [5865, 3070, 2795, 0, 0], [5866, 3070, 2796, 0, 0], [5867, 3071, 2796, 0, 0], [5868, 3071, 2797, 0, 0], [5869, 3072, 2797, 0, 0], [5870, 3072, 2798, 0, 0], [5871, 3073, 2798, 0, 0], [5872, 3073, 2799, 0, 0], [5873, 3074, 2799, 0, 0], [5874, 3074, 2800, 0, 0], [5875, 3075, 2800, 0, 0], [5876, 3075, 2801, 0, 0], [5877, 3076, 2801, 0, 0], [5878, 3076, 2802, 0, 0], [5879, 3077, 2802, 0, 0], [5880, 3077, 2803, 0, 0], [5881, 3078, 2803, 0, 0], [5882, 3078, 2804, 0, 0], [5883, 3079, 2804, 0, 0], [5884, 3079, 2805, 0, 0], [5885, 3080, 2805, 0, 0], [5886, 3080, 2806, 0, 0], [5887, 3081, 2806, 0, 0], [5888, 3081, 2807, 0, 0], [5889, 3082, 2807, 0, 0], [5890, 3082, 2808, 0, 0], [5891, 3083, 2808, 0, 0], [5892, 3083, 2809, 0, 0], [5893, 3084, 2809, 0, 0], [5894, 3084, 2810, 0, 0], [5895, 3085, 2810, 0, 0], [5896, 3085, 2811, 0, 0], [5897, 3086, 2811, 0, 0], [5898, 3086, 2812, 0, 0], [5899, 3087, 2812, 0, 0], [5900, 3087, 2813, 0, 0], [5901, 3088, 2813, 0, 0], [5902, 3088, 2814, 0, 0], [5903, 3089, 2814, 0, 0], [5904, 3089, 2815, 0, 0], [5905, 3090, 2815, 0, 0], [5906, 3090, 2816, 0, 0], [5907, 3091, 2816, 0, 0], [5908, 3091, 2817, 0, 0], [5909, 3092, 2817, 0, 0], [5910, 3092, 2818, 0, 0], [5911, 3093, 2818, 0, 0], [5912, 3093, 2819, 0, 0], [5913, 3094, 2819, 0, 0], [5914, 3094, 2820, 0, 0], [5915, 3095, 2820, 0, 0], [5916, 3095, 2821, 0, 0], [5917, 3096, 2821, 0, 0], [5918, 3096, 2822, 0, 0], [5919, 3097, 2822, 0, 0], [5920, 3097, 2823, 0, 0], [5921, 3098, 2823, 0, 0], [5922, 3098, 2824, 0, 0], [5923, 3099, 2824, 0, 0], [5924, 3099, 2825, 0, 0], [5925, 3100, 2825, 0, 0], [5926, 3100, 2826, 0, 0], [5927, 3101, 2826, 0, 0], [5928, 3101, 2827, 0, 0], [5929, 3102, 2827, 0, 0], [5930, 3102, 2828, 0, 0], [5931, 3103, 2828, 0, 0], [5932, 3103, 2829, 0, 0], [5933, 3104, 2829, 0, 0], [5934, 3104, 2830, 0, 0], [5935, 3105, 2830, 0, 0], [5936, 3105, 2831, 0, 0], [5937, 3106, 2831, 0, 0], [5938, 3107, 2831, 0, 0], [5939, 3107, 2832, 0, 0], [5940, 3108, 2832, 0, 0], [5941, 3108, 2833, 0, 0], [5942, 3109, 2833, 0, 0], [5943, 3109, 2834, 0, 0], [5944, 3110, 2834, 0, 0], [5945, 3110, 2835, 0, 0], [5946, 3111, 2835, 0, 0], [5947, 3111, 2836, 0, 0], [5948, 3112, 2836, 0, 0], [5949, 3112, 2837, 0, 0], [5950, 3113, 2837, 0, 0], [5951, 3113, 2838, 0, 0], [5952, 3114, 2838, 0, 0], [5953, 3114, 2839, 0, 0], [5954, 3115, 2839, 0, 0], [5955, 3115, 2840, 0, 0], [5956, 3116, 2840, 0, 0], [5957, 3116, 2841, 0, 0], [5958, 3117, 2841, 0, 0], [5959, 3117, 2842, 0, 0], [5960, 3118, 2842, 0, 0], [5961, 3118, 2843, 0, 0], [5962, 3119, 2843, 0, 0], [5963, 3119, 2844, 0, 0], [5964, 3120, 2844, 0, 0], [5965, 3120, 2845, 0, 0], [5966, 3121, 2845, 0, 0], [5967, 3121, 2846, 0, 0], [5968, 3122, 2846, 0, 0], [5969, 3122, 2847, 0, 0], [5970, 3123, 2847, 0, 0], [5971, 3123, 2848, 0, 0], [5972, 3124, 2848, 0, 0], [5973, 3124, 2849, 0, 0], [5974, 3125, 2849, 0, 0], [5975, 3125, 2850, 0, 0], [5976, 3126, 2850, 0, 0], [5977, 3126, 2851, 0, 0], [5978, 3127, 2851, 0, 0], [5979, 3127, 2852, 0, 0], [5980, 3128, 2852, 0, 0], [5981, 3128, 2853, 0, 0], [5982, 3129, 2853, 0, 0], [5983, 3129, 2854, 0, 0], [5984, 3130, 2854, 0, 0], [5985, 3130, 2855, 0, 0], [5986, 3131, 2855, 0, 0], [5987, 3131, 2856, 0, 0], [5988, 3132, 2856, 0, 0], [5989, 3132, 2857, 0, 0], [5990, 3133, 2857, 0, 0], [5991, 3133, 2858, 0, 0], [5992, 3134, 2858, 0, 0], [5993, 3134, 2859, 0, 0], [5994, 3135, 2859, 0, 0], [5995, 3135, 2860, 0, 0], [5996, 3136, 2860, 0, 0], [5997, 3136, 2861, 0, 0], [5998, 3137, 2861, 0, 0], [5999, 3137, 2862, 0, 0], [6000, 3138, 2862, 0, 0], [6001, 3138, 2863, 0, 0], [6002, 3139, 2863, 0, 0], [6003, 3139, 2864, 0, 0], [6004, 3140, 2864, 0, 0], [6005, 3140, 2865, 0, 0], [6006, 3141, 2865, 0, 0], [6007, 3141, 2866, 0, 0], [6008, 3142, 2866, 0, 0], [6009, 3142, 2867, 0, 0], [6010, 3143, 2867, 0, 0], [6011, 3143, 2868, 0, 0], [6012, 3144, 2868, 0, 0], [6013, 3144, 2869, 0, 0], [6014, 3145, 2869, 0, 0], [6015, 3145, 2870, 0, 0], [6016, 3146, 2870, 0, 0], [6017, 3146, 2871, 0, 0], [6018, 3147, 2871, 0, 0], [6019, 3147, 2872, 0, 0], [6020, 3148, 2872, 0, 0], [6021, 3148, 2873, 0, 0], [6022, 3149, 2873, 0, 0], [6023, 3149, 2874, 0, 0], [6024, 3150, 2874, 0, 0], [6025, 3150, 2875, 0, 0], [6026, 3151, 2875, 0, 0], [6027, 3151, 2876, 0, 0], [6028, 3152, 2876, 0, 0], [6029, 3152, 2877, 0, 0], [6030, 3153, 2877, 0, 0], [6031, 3153, 2878, 0, 0], [6032, 3154, 2878, 0, 0], [6033, 3154, 2879, 0, 0], [6034, 3155, 2879, 0, 0], [6035, 3155, 2880, 0, 0], [6036, 3156, 2880, 0, 0], [6037, 3156, 2881, 0, 0], [6038, 3157, 2881, 0, 0], [6039, 3157, 2882, 0, 0], [6040, 3158, 2882, 0, 0], [6041, 3158, 2883, 0, 0], [6042, 3159, 2883, 0, 0], [6043, 3159, 2884, 0, 0], [6044, 3160, 2884, 0, 0], [6045, 3160, 2885, 0, 0], [6046, 3161, 2885, 0, 0], [6047, 3161, 2886, 0, 0], [6048, 3162, 2886, 0, 0], [6049, 3162, 2887, 0, 0], [6050, 3163, 2887, 0, 0], [6051, 3163, 2888, 0, 0], [6052, 3164, 2888, 0, 0], [6053, 3164, 2889, 0, 0], [6054, 3165, 2889, 0, 0], [6055, 3165, 2890, 0, 0], [6056, 3166, 2890, 0, 0], [6057, 3166, 2891, 0, 0], [6058, 3167, 2891, 0, 0], [6059, 3167, 2892, 0, 0], [6060, 3168, 2892, 0, 0], [6061, 3168, 2893, 0, 0], [6062, 3169, 2893, 0, 0], [6063, 3169, 2894, 0, 0], [6064, 3170, 2894, 0, 0], [6065, 3170, 2895, 0, 0], [6066, 3171, 2895, 0, 0], [6067, 3171, 2896, 0, 0], [6068, 3172, 2896, 0, 0], [6069, 3172, 2897, 0, 0], [6070, 3173, 2897, 0, 0], [6071, 3173, 2898, 0, 0], [6072, 3174, 2898, 0, 0], [6073, 3174, 2899, 0, 0], [6074, 3175, 2899, 0, 0], [6075, 3175, 2900, 0, 0], [6076, 3176, 2900, 0, 0], [6077, 3177, 2900, 0, 0], [6078, 3177, 2901, 0, 0], [6079, 3178, 2901, 0, 0], [6080, 3178, 2902, 0, 0], [6081, 3179, 2902, 0, 0], [6082, 3179, 2903, 0, 0], [6083, 3180, 2903, 0, 0], [6084, 3180, 2904, 0, 0], [6085, 3181, 2904, 0, 0], [6086, 3181, 2905, 0, 0], [6087, 3182, 2905, 0, 0], [6088, 3182, 2906, 0, 0], [6089, 3183, 2906, 0, 0], [6090, 3183, 2907, 0, 0], [6091, 3184, 2907, 0, 0], [6092, 3184, 2908, 0, 0], [6093, 3185, 2908, 0, 0], [6094, 3185, 2909, 0, 0], [6095, 3186, 2909, 0, 0], [6096, 3186, 2910, 0, 0], [6097, 3187, 2910, 0, 0], [6098, 3187, 2911, 0, 0], [6099, 3188, 2911, 0, 0], [6100, 3188, 2912, 0, 0], [6101, 3189, 2912, 0, 0], [6102, 3189, 2913, 0, 0], [6103, 3190, 2913, 0, 0], [6104, 3190, 2914, 0, 0], [6105, 3191, 2914, 0, 0], [6106, 3191, 2915, 0, 0], [6107, 3192, 2915, 0, 0], [6108, 3192, 2916, 0, 0], [6109, 3193, 2916, 0, 0], [6110, 3193, 2917, 0, 0], [6111, 3194, 2917, 0, 0], [6112, 3194, 2918, 0, 0], [6113, 3195, 2918, 0, 0], [6114, 3195, 2919, 0, 0], [6115, 3196, 2919, 0, 0], [6116, 3196, 2920, 0, 0], [6117, 3197, 2920, 0, 0], [6118, 3197, 2921, 0, 0], [6119, 3198, 2921, 0, 0], [6120, 3198, 2922, 0, 0], [6121, 3199, 2922, 0, 0], [6122, 3199, 2923, 0, 0], [6123, 3200, 2923, 0, 0], [6124, 3200, 2924, 0, 0], [6125, 3201, 2924, 0, 0], [6126, 3201, 2925, 0, 0], [6127, 3202, 2925, 0, 0], [6128, 3202, 2926, 0, 0], [6129, 3203, 2926, 0, 0], [6130, 3203, 2927, 0, 0], [6131, 3204, 2927, 0, 0], [6132, 3204, 2928, 0, 0], [6133, 3205, 2928, 0, 0], [6134, 3205, 2929, 0, 0], [6135, 3206, 2929, 0, 0], [6136, 3206, 2930, 0, 0], [6137, 3207, 2930, 0, 0], [6138, 3207, 2931, 0, 0], [6139, 3208, 2931, 0, 0], [6140, 3208, 2932, 0, 0], [6141, 3209, 2932, 0, 0], [6142, 3209, 2933, 0, 0], [6143, 3210, 2933, 0, 0], [6144, 3210, 2934, 0, 0], [6145, 3211, 2934, 0, 0], [6146, 3211, 2935, 0, 0], [6147, 3212, 2935, 0, 0], [6148, 3212, 2936, 0, 0], [6149, 3213, 2936, 0, 0], [6150, 3213, 2937, 0, 0], [6151, 3214, 2937, 0, 0], [6152, 3214, 2938, 0, 0], [6153, 3215, 2938, 0, 0], [6154, 3215, 2939, 0, 0], [6155, 3216, 2939, 0, 0], [6156, 3216, 2940, 0, 0], [6157, 3217, 2940, 0, 0], [6158, 3217, 2941, 0, 0], [6159, 3218, 2941, 0, 0], [6160, 3218, 2942, 0, 0], [6161, 3219, 2942, 0, 0], [6162, 3219, 2943, 0, 0], [6163, 3220, 2943, 0, 0], [6164, 3220, 2944, 0, 0], [6165, 3221, 2944, 0, 0], [6166, 3221, 2945, 0, 0], [6167, 3222, 2945, 0, 0], [6168, 3222, 2946, 0, 0], [6169, 3223, 2946, 0, 0], [6170, 3223, 2947, 0, 0], [6171, 3224, 2947, 0, 0], [6172, 3224, 2948, 0, 0], [6173, 3225, 2948, 0, 0], [6174, 3225, 2949, 0, 0], [6175, 3226, 2949, 0, 0], [6176, 3226, 2950, 0, 0], [6177, 3227, 2950, 0, 0], [6178, 3227, 2951, 0, 0], [6179, 3228, 2951, 0, 0], [6180, 3228, 2952, 0, 0], [6181, 3229, 2952, 0, 0], [6182, 3229, 2953, 0, 0], [6183, 3230, 2953, 0, 0], [6184, 3230, 2954, 0, 0], [6185, 3231, 2954, 0, 0], [6186, 3231, 2955, 0, 0], [6187, 3232, 2955, 0, 0], [6188, 3232, 2956, 0, 0], [6189, 3233, 2956, 0, 0], [6190, 3233, 2957, 0, 0], [6191, 3234, 2957, 0, 0], [6192, 3234, 2958, 0, 0], [6193, 3235, 2958, 0, 0], [6194, 3235, 2959, 0, 0], [6195, 3236, 2959, 0, 0], [6196, 3236, 2960, 0, 0], [6197, 3237, 2960, 0, 0], [6198, 3237, 2961, 0, 0], [6199, 3238, 2961, 0, 0], [6200, 3238, 2962, 0, 0], [6201, 3239, 2962, 0, 0], [6202, 3239, 2963, 0, 0], [6203, 3240, 2963, 0, 0], [6204, 3240, 2964, 0, 0], [6205, 3241, 2964, 0, 0], [6206, 3241, 2965, 0, 0], [6207, 3242, 2965, 0, 0], [6208, 3242, 2966, 0, 0], [6209, 3243, 2966, 0, 0], [6210, 3243, 2967, 0, 0], [6211, 3244, 2967, 0, 0], [6212, 3244, 2968, 0, 0], [6213, 3245, 2968, 0, 0], [6214, 3245, 2969, 0, 0], [6215, 3246, 2969, 0, 0], [6216, 3246, 2970, 0, 0], [6217, 3247, 2970, 0, 0], [6218, 3247, 2971, 0, 0], [6219, 3248, 2971, 0, 0], [6220, 3248, 2972, 0, 0], [6221, 3249, 2972, 0, 0], [6222, 3249, 2973, 0, 0], [6223, 3250, 2973, 0, 0], [6224, 3250, 2974, 0, 0], [6225, 3251, 2974, 0, 0], [6226, 3251, 2975, 0, 0], [6227, 3252, 2975, 0, 0], [6228, 3252, 2976, 0, 0], [6229, 3253, 2976, 0, 0], [6230, 3253, 2977, 0, 0], [6231, 3254, 2977, 0, 0], [6232, 3254, 2978, 0, 0], [6233, 3255, 2978, 0, 0], [6234, 3255, 2979, 0, 0], [6235, 3256, 2979, 0, 0], [6236, 3256, 2980, 0, 0], [6237, 3257, 2980, 0, 0], [6238, 3257, 2981, 0, 0], [6239, 3258, 2981, 0, 0], [6240, 3258, 2982, 0, 0], [6241, 3259, 2982, 0, 0], [6242, 3260, 2982, 0, 0], [6243, 3260, 2983, 0, 0], [6244, 3261, 2983, 0, 0], [6245, 3261, 2984, 0, 0], [6246, 3262, 2984, 0, 0], [6247, 3262, 2985, 0, 0], [6248, 3263, 2985, 0, 0], [6249, 3263, 2986, 0, 0], [6250, 3264, 2986, 0, 0], [6251, 3264, 2987, 0, 0], [6252, 3265, 2987, 0, 0], [6253, 3265, 2988, 0, 0], [6254, 3266, 2988, 0, 0], [6255, 3266, 2989, 0, 0], [6256, 3267, 2989, 0, 0], [6257, 3267, 2990, 0, 0], [6258, 3268, 2990, 0, 0], [6259, 3268, 2991, 0, 0], [6260, 3269, 2991, 0, 0], [6261, 3269, 2992, 0, 0], [6262, 3270, 2992, 0, 0], [6263, 3270, 2993, 0, 0], [6264, 3271, 2993, 0, 0], [6265, 3271, 2994, 0, 0], [6266, 3272, 2994, 0, 0], [6267, 3272, 2995, 0, 0], [6268, 3273, 2995, 0, 0], [6269, 3273, 2996, 0, 0], [6270, 3274, 2996, 0, 0], [6271, 3274, 2997, 0, 0], [6272, 3275, 2997, 0, 0], [6273, 3275, 2998, 0, 0], [6274, 3276, 2998, 0, 0], [6275, 3276, 2999, 0, 0], [6276, 3277, 2999, 0, 0], [6277, 3277, 3000, 0, 0], [6278, 3278, 3000, 0, 0], [6279, 3278, 3001, 0, 0], [6280, 3279, 3001, 0, 0], [6281, 3279, 3002, 0, 0], [6282, 3280, 3002, 0, 0], [6283, 3280, 3003, 0, 0], [6284, 3281, 3003, 0, 0], [6285, 3281, 3004, 0, 0], [6286, 3282, 3004, 0, 0], [6287, 3282, 3005, 0, 0], [6288, 3283, 3005, 0, 0], [6289, 3283, 3006, 0, 0], [6290, 3284, 3006, 0, 0], [6291, 3284, 3007, 0, 0], [6292, 3285, 3007, 0, 0], [6293, 3285, 3008, 0, 0], [6294, 3286, 3008, 0, 0], [6295, 3286, 3009, 0, 0], [6296, 3287, 3009, 0, 0], [6297, 3287, 3010, 0, 0], [6298, 3288, 3010, 0, 0], [6299, 3288, 3011, 0, 0], [6300, 3289, 3011, 0, 0], [6301, 3289, 3012, 0, 0], [6302, 3290, 3012, 0, 0], [6303, 3290, 3013, 0, 0], [6304, 3291, 3013, 0, 0], [6305, 3291, 3014, 0, 0], [6306, 3292, 3014, 0, 0], [6307, 3292, 3015, 0, 0], [6308, 3293, 3015, 0, 0], [6309, 3293, 3016, 0, 0], [6310, 3294, 3016, 0, 0], [6311, 3294, 3017, 0, 0], [6312, 3295, 3017, 0, 0], [6313, 3295, 3018, 0, 0], [6314, 3296, 3018, 0, 0], [6315, 3296, 3019, 0, 0], [6316, 3297, 3019, 0, 0], [6317, 3297, 3020, 0, 0], [6318, 3298, 3020, 0, 0], [6319, 3298, 3021, 0, 0], [6320, 3299, 3021, 0, 0], [6321, 3299, 3022, 0, 0], [6322, 3300, 3022, 0, 0], [6323, 3300, 3023, 0, 0], [6324, 3301, 3023, 0, 0], [6325, 3301, 3024, 0, 0], [6326, 3302, 3024, 0, 0], [6327, 3302, 3025, 0, 0], [6328, 3303, 3025, 0, 0], [6329, 3303, 3026, 0, 0], [6330, 3304, 3026, 0, 0], [6331, 3304, 3027, 0, 0], [6332, 3305, 3027, 0, 0], [6333, 3305, 3028, 0, 0], [6334, 3306, 3028, 0, 0], [6335, 3306, 3029, 0, 0], [6336, 3307, 3029, 0, 0], [6337, 3307, 3030, 0, 0], [6338, 3308, 3030, 0, 0], [6339, 3308, 3031, 0, 0], [6340, 3309, 3031, 0, 0], [6341, 3309, 3032, 0, 0], [6342, 3310, 3032, 0, 0], [6343, 3310, 3033, 0, 0], [6344, 3311, 3033, 0, 0], [6345, 3311, 3034, 0, 0], [6346, 3312, 3034, 0, 0], [6347, 3312, 3035, 0, 0], [6348, 3313, 3035, 0, 0], [6349, 3313, 3036, 0, 0], [6350, 3314, 3036, 0, 0], [6351, 3314, 3037, 0, 0], [6352, 3315, 3037, 0, 0], [6353, 3315, 3038, 0, 0], [6354, 3316, 3038, 0, 0], [6355, 3316, 3039, 0, 0], [6356, 3317, 3039, 0, 0], [6357, 3317, 3040, 0, 0], [6358, 3318, 3040, 0, 0], [6359, 3318, 3041, 0, 0], [6360, 3319, 3041, 0, 0], [6361, 3319, 3042, 0, 0], [6362, 3320, 3042, 0, 0], [6363, 3320, 3043, 0, 0], [6364, 3321, 3043, 0, 0], [6365, 3321, 3044, 0, 0], [6366, 3322, 3044, 0, 0], [6367, 3322, 3045, 0, 0], [6368, 3323, 3045, 0, 0], [6369, 3323, 3046, 0, 0], [6370, 3324, 3046, 0, 0], [6371, 3324, 3047, 0, 0], [6372, 3325, 3047, 0, 0], [6373, 3325, 3048, 0, 0], [6374, 3326, 3048, 0, 0], [6375, 3326, 3049, 0, 0], [6376, 3327, 3049, 0, 0], [6377, 3327, 3050, 0, 0], [6378, 3328, 3050, 0, 0], [6379, 3328, 3051, 0, 0], [6380, 3329, 3051, 0, 0], [6381, 3329, 3052, 0, 0], [6382, 3330, 3052, 0, 0], [6383, 3330, 3053, 0, 0], [6384, 3331, 3053, 0, 0], [6385, 3331, 3054, 0, 0], [6386, 3332, 3054, 0, 0], [6387, 3332, 3055, 0, 0], [6388, 3333, 3055, 0, 0], [6389, 3333, 3056, 0, 0], [6390, 3334, 3056, 0, 0], [6391, 3334, 3057, 0, 0], [6392, 3335, 3057, 0, 0], [6393, 3335, 3058, 0, 0], [6394, 3336, 3058, 0, 0], [6395, 3336, 3059, 0, 0], [6396, 3337, 3059, 0, 0], [6397, 3337, 3060, 0, 0], [6398, 3338, 3060, 0, 0], [6399, 3338, 3061, 0, 0], [6400, 3339, 3061, 0, 0], [6401, 3339, 3062, 0, 0], [6402, 3340, 3062, 0, 0], [6403, 3340, 3063, 0, 0], [6404, 3341, 3063, 0, 0], [6405, 3341, 3064, 0, 0], [6406, 3342, 3064, 0, 0], [6407, 3342, 3065, 0, 0], [6408, 3343, 3065, 0, 0], [6409, 3343, 3066, 0, 0], [6410, 3344, 3066, 0, 0], [6411, 3344, 3067, 0, 0], [6412, 3345, 3067, 0, 0], [6413, 3345, 3068, 0, 0], [6414, 3346, 3068, 0, 0], [6415, 3346, 3069, 0, 0], [6416, 3347, 3069, 0, 0], [6417, 3347, 3070, 0, 0], [6418, 3348, 3070, 0, 0], [6419, 3348, 3071, 0, 0], [6420, 3349, 3071, 0, 0], [6421, 3349, 3072, 0, 0], [6422, 3350, 3072, 0, 0], [6423, 3350, 3073, 0, 0], [6424, 3351, 3073, 0, 0], [6425, 3351, 3074, 0, 0], [6426, 3352, 3074, 0, 0], [6427, 3352, 3075, 0, 0], [6428, 3353, 3075, 0, 0], [6429, 3353, 3076, 0, 0], [6430, 3354, 3076, 0, 0], [6431, 3354, 3077, 0, 0], [6432, 3355, 3077, 0, 0], [6433, 3355, 3078, 0, 0], [6434, 3356, 3078, 0, 0], [6435, 3356, 3079, 0, 0], [6436, 3357, 3079, 0, 0], [6437, 3357, 3080, 0, 0], [6438, 3358, 3080, 0, 0], [6439, 3358, 3081, 0, 0], [6440, 3359, 3081, 0, 0], [6441, 3359, 3082, 0, 0], [6442, 3360, 3082, 0, 0], [6443, 3360, 3083, 0, 0], [6444, 3361, 3083, 0, 0], [6445, 3361, 3084, 0, 0], [6446, 3362, 3084, 0, 0], [6447, 3362, 3085, 0, 0], [6448, 3363, 3085, 0, 0], [6449, 3363, 3086, 0, 0], [6450, 3364, 3086, 0, 0], [6451, 3364, 3087, 0, 0], [6452, 3365, 3087, 0, 0], [6453, 3365, 3088, 0, 0], [6454, 3366, 3088, 0, 0], [6455, 3366, 3089, 0, 0], [6456, 3367, 3089, 0, 0], [6457, 3368, 3089, 0, 0], [6458, 3368, 3090, 0, 0], [6459, 3369, 3090, 0, 0], [6460, 3369, 3091, 0, 0], [6461, 3370, 3091, 0, 0], [6462, 3370, 3092, 0, 0], [6463, 3371, 3092, 0, 0], [6464, 3371, 3093, 0, 0], [6465, 3372, 3093, 0, 0], [6466, 3372, 3094, 0, 0], [6467, 3373, 3094, 0, 0], [6468, 3373, 3095, 0, 0], [6469, 3374, 3095, 0, 0], [6470, 3374, 3096, 0, 0], [6471, 3375, 3096, 0, 0], [6472, 3375, 3097, 0, 0], [6473, 3376, 3097, 0, 0], [6474, 3376, 3098, 0, 0], [6475, 3377, 3098, 0, 0], [6476, 3377, 3099, 0, 0], [6477, 3378, 3099, 0, 0], [6478, 3378, 3100, 0, 0], [6479, 3379, 3100, 0, 0], [6480, 3379, 3101, 0, 0], [6481, 3380, 3101, 0, 0], [6482, 3380, 3102, 0, 0], [6483, 3381, 3102, 0, 0], [6484, 3381, 3103, 0, 0], [6485, 3382, 3103, 0, 0], [6486, 3382, 3104, 0, 0], [6487, 3383, 3104, 0, 0], [6488, 3383, 3105, 0, 0], [6489, 3384, 3105, 0, 0], [6490, 3384, 3106, 0, 0], [6491, 3385, 3106, 0, 0], [6492, 3385, 3107, 0, 0], [6493, 3386, 3107, 0, 0], [6494, 3386, 3108, 0, 0], [6495, 3387, 3108, 0, 0], [6496, 3387, 3109, 0, 0], [6497, 3388, 3109, 0, 0], [6498, 3388, 3110, 0, 0], [6499, 3389, 3110, 0, 0], [6500, 3389, 3111, 0, 0], [6501, 3390, 3111, 0, 0], [6502, 3390, 3112, 0, 0], [6503, 3391, 3112, 0, 0], [6504, 3391, 3113, 0, 0], [6505, 3392, 3113, 0, 0], [6506, 3392, 3114, 0, 0], [6507, 3393, 3114, 0, 0], [6508, 3393, 3115, 0, 0], [6509, 3394, 3115, 0, 0], [6510, 3394, 3116, 0, 0], [6511, 3395, 3116, 0, 0], [6512, 3395, 3117, 0, 0], [6513, 3396, 3117, 0, 0], [6514, 3396, 3118, 0, 0], [6515, 3397, 3118, 0, 0], [6516, 3397, 3119, 0, 0], [6517, 3398, 3119, 0, 0], [6518, 3398, 3120, 0, 0], [6519, 3399, 3120, 0, 0], [6520, 3399, 3121, 0, 0], [6521, 3400, 3121, 0, 0], [6522, 3400, 3122, 0, 0], [6523, 3401, 3122, 0, 0], [6524, 3401, 3123, 0, 0], [6525, 3402, 3123, 0, 0], [6526, 3402, 3124, 0, 0], [6527, 3403, 3124, 0, 0], [6528, 3403, 3125, 0, 0], [6529, 3404, 3125, 0, 0], [6530, 3404, 3126, 0, 0], [6531, 3405, 3126, 0, 0], [6532, 3405, 3127, 0, 0], [6533, 3406, 3127, 0, 0], [6534, 3406, 3128, 0, 0], [6535, 3407, 3128, 0, 0], [6536, 3407, 3129, 0, 0], [6537, 3408, 3129, 0, 0], [6538, 3408, 3130, 0, 0], [6539, 3409, 3130, 0, 0], [6540, 3409, 3131, 0, 0], [6541, 3410, 3131, 0, 0], [6542, 3410, 3132, 0, 0], [6543, 3411, 3132, 0, 0], [6544, 3411, 3133, 0, 0], [6545, 3412, 3133, 0, 0], [6546, 3412, 3134, 0, 0], [6547, 3413, 3134, 0, 0], [6548, 3413, 3135, 0, 0], [6549, 3414, 3135, 0, 0], [6550, 3414, 3136, 0, 0], [6551, 3415, 3136, 0, 0], [6552, 3415, 3137, 0, 0], [6553, 3416, 3137, 0, 0], [6554, 3416, 3138, 0, 0], [6555, 3417, 3138, 0, 0], [6556, 3417, 3139, 0, 0], [6557, 3418, 3139, 0, 0], [6558, 3418, 3140, 0, 0], [6559, 3419, 3140, 0, 0], [6560, 3419, 3141, 0, 0], [6561, 3420, 3141, 0, 0], [6562, 3420, 3142, 0, 0], [6563, 3421, 3142, 0, 0], [6564, 3421, 3143, 0, 0], [6565, 3422, 3143, 0, 0], [6566, 3422, 3144, 0, 0], [6567, 3423, 3144, 0, 0], [6568, 3423, 3145, 0, 0], [6569, 3424, 3145, 0, 0], [6570, 3424, 3146, 0, 0], [6571, 3425, 3146, 0, 0], [6572, 3425, 3147, 0, 0], [6573, 3426, 3147, 0, 0], [6574, 3426, 3148, 0, 0], [6575, 3427, 3148, 0, 0], [6576, 3427, 3149, 0, 0], [6577, 3428, 3149, 0, 0], [6578, 3428, 3150, 0, 0], [6579, 3429, 3150, 0, 0], [6580, 3429, 3151, 0, 0], [6581, 3430, 3151, 0, 0], [6582, 3430, 3152, 0, 0], [6583, 3431, 3152, 0, 0], [6584, 3431, 3153, 0, 0], [6585, 3432, 3153, 0, 0], [6586, 3432, 3154, 0, 0], [6587, 3433, 3154, 0, 0], [6588, 3433, 3155, 0, 0], [6589, 3434, 3155, 0, 0], [6590, 3434, 3156, 0, 0], [6591, 3435, 3156, 0, 0], [6592, 3435, 3157, 0, 0], [6593, 3436, 3157, 0, 0], [6594, 3436, 3158, 0, 0], [6595, 3437, 3158, 0, 0], [6596, 3437, 3159, 0, 0], [6597, 3438, 3159, 0, 0], [6598, 3438, 3160, 0, 0], [6599, 3439, 3160, 0, 0], [6600, 3439, 3161, 0, 0], [6601, 3440, 3161, 0, 0], [6602, 3440, 3162, 0, 0], [6603, 3441, 3162, 0, 0], [6604, 3441, 3163, 0, 0], [6605, 3442, 3163, 0, 0], [6606, 3442, 3164, 0, 0], [6607, 3443, 3164, 0, 0], [6608, 3443, 3165, 0, 0], [6609, 3444, 3165, 0, 0], [6610, 3444, 3166, 0, 0], [6611, 3445, 3166, 0, 0], [6612, 3445, 3167, 0, 0], [6613, 3446, 3167, 0, 0], [6614, 3446, 3168, 0, 0], [6615, 3447, 3168, 0, 0], [6616, 3447, 3169, 0, 0], [6617, 3448, 3169, 0, 0], [6618, 3448, 3170, 0, 0], [6619, 3449, 3170, 0, 0], [6620, 3449, 3171, 0, 0], [6621, 3450, 3171, 0, 0], [6622, 3450, 3172, 0, 0], [6623, 3451, 3172, 0, 0], [6624, 3451, 3173, 0, 0], [6625, 3452, 3173, 0, 0], [6626, 3452, 3174, 0, 0], [6627, 3453, 3174, 0, 0], [6628, 3453, 3175, 0, 0], [6629, 3454, 3175, 0, 0], [6630, 3454, 3176, 0, 0], [6631, 3455, 3176, 0, 0], [6632, 3455, 3177, 0, 0], [6633, 3456, 3177, 0, 0], [6634, 3456, 3178, 0, 0], [6635, 3457, 3178, 0, 0], [6636, 3457, 3179, 0, 0], [6637, 3458, 3179, 0, 0], [6638, 3458, 3180, 0, 0], [6639, 3459, 3180, 0, 0], [6640, 3459, 3181, 0, 0], [6641, 3460, 3181, 0, 0], [6642, 3460, 3182, 0, 0], [6643, 3461, 3182, 0, 0], [6644, 3461, 3183, 0, 0], [6645, 3462, 3183, 0, 0], [6646, 3462, 3184, 0, 0], [6647, 3463, 3184, 0, 0], [6648, 3463, 3185, 0, 0], [6649, 3464, 3185, 0, 0], [6650, 3464, 3186, 0, 0], [6651, 3465, 3186, 0, 0], [6652, 3465, 3187, 0, 0], [6653, 3466, 3187, 0, 0], [6654, 3466, 3188, 0, 0], [6655, 3467, 3188, 0, 0], [6656, 3467, 3189, 0, 0], [6657, 3468, 3189, 0, 0], [6658, 3468, 3190, 0, 0], [6659, 3469, 3190, 0, 0], [6660, 3469, 3191, 0, 0], [6661, 3470, 3191, 0, 0], [6662, 3470, 3192, 0, 0], [6663, 3471, 3192, 0, 0], [6664, 3471, 3193, 0, 0], [6665, 3472, 3193, 0, 0], [6666, 3472, 3194, 0, 0], [6667, 3473, 3194, 0, 0], [6668, 3473, 3195, 0, 0], [6669, 3474, 3195, 0, 0], [6670, 3474, 3196, 0, 0], [6671, 3475, 3196, 0, 0], [6672, 3475, 3197, 0, 0], [6673, 3476, 3197, 0, 0], [6674, 3476, 3198, 0, 0], [6675, 3477, 3198, 0, 0], [6676, 3477, 3199, 0, 0], [6677, 3478, 3199, 0, 0], [6678, 3478, 3200, 0, 0], [6679, 3479, 3200, 0, 0], [6680, 3479, 3201, 0, 0], [6681, 3480, 3201, 0, 0], [6682, 3480, 3202, 0, 0], [6683, 3481, 3202, 0, 0], [6684, 3481, 3203, 0, 0], [6685, 3482, 3203, 0, 0], [6686, 3482, 3204, 0, 0], [6687, 3483, 3204, 0, 0], [6688, 3483, 3205, 0, 0], [6689, 3484, 3205, 0, 0], [6690, 3484, 3206, 0, 0], [6691, 3485, 3206, 0, 0], [6692, 3485, 3207, 0, 0], [6693, 3486, 3207, 0, 0], [6694, 3486, 3208, 0, 0], [6695, 3487, 3208, 0, 0], [6696, 3487, 3209, 0, 0], [6697, 3488, 3209, 0, 0], [6698, 3488, 3210, 0, 0], [6699, 3489, 3210, 0, 0], [6700, 3489, 3211, 0, 0], [6701, 3490, 3211, 0, 0], [6702, 3490, 3212, 0, 0], [6703, 3491, 3212, 0, 0], [6704, 3491, 3213, 0, 0], [6705, 3492, 3213, 0, 0], [6706, 3492, 3214, 0, 0], [6707, 3493, 3214, 0, 0], [6708, 3493, 3215, 0, 0], [6709, 3494, 3215, 0, 0], [6710, 3494, 3216, 0, 0], [6711, 3495, 3216, 0, 0], [6712, 3495, 3217, 0, 0], [6713, 3496, 3217, 0, 0], [6714, 3496, 3218, 0, 0], [6715, 3497, 3218, 0, 0], [6716, 3497, 3219, 0, 0], [6717, 3498, 3219, 0, 0], [6718, 3498, 3220, 0, 0], [6719, 3499, 3220, 0, 0], [6720, 3499, 3221, 0, 0], [6721, 3500, 3221, 0, 0], [6722, 3500, 3222, 0, 0], [6723, 3501, 3222, 0, 0], [6724, 3501, 3223, 0, 0], [6725, 3502, 3223, 0, 0], [6726, 3502, 3224, 0, 0], [6727, 3503, 3224, 0, 0], [6728, 3503, 3225, 0, 0], [6729, 3504, 3225, 0, 0], [6730, 3504, 3226, 0, 0], [6731, 3505, 3226, 0, 0], [6732, 3505, 3227, 0, 0], [6733, 3506, 3227, 0, 0], [6734, 3506, 3228, 0, 0], [6735, 3507, 3228, 0, 0], [6736, 3507, 3229, 0, 0], [6737, 3508, 3229, 0, 0], [6738, 3508, 3230, 0, 0], [6739, 3509, 3230, 0, 0], [6740, 3509, 3231, 0, 0], [6741, 3510, 3231, 0, 0], [6742, 3510, 3232, 0, 0], [6743, 3511, 3232, 0, 0], [6744, 3511, 3233, 0, 0], [6745, 3512, 3233, 0, 0], [6746, 3512, 3234, 0, 0], [6747, 3513, 3234, 0, 0], [6748, 3513, 3235, 0, 0], [6749, 3514, 3235, 0, 0], [6750, 3514, 3236, 0, 0], [6751, 3515, 3236, 0, 0], [6752, 3515, 3237, 0, 0], [6753, 3516, 3237, 0, 0], [6754, 3516, 3238, 0, 0], [6755, 3517, 3238, 0, 0], [6756, 3517, 3239, 0, 0], [6757, 3518, 3239, 0, 0], [6758, 3518, 3240, 0, 0], [6759, 3519, 3240, 0, 0], [6760, 3519, 3241, 0, 0], [6761, 3520, 3241, 0, 0], [6762, 3520, 3242, 0, 0], [6763, 3521, 3242, 0, 0], [6764, 3521, 3243, 0, 0], [6765, 3522, 3243, 0, 0], [6766, 3522, 3244, 0, 0], [6767, 3523, 3244, 0, 0], [6768, 3523, 3245, 0, 0], [6769, 3524, 3245, 0, 0], [6770, 3524, 3246, 0, 0], [6771, 3525, 3246, 0, 0], [6772, 3525, 3247, 0, 0], [6773, 3526, 3247, 0, 0], [6774, 3526, 3248, 0, 0], [6775, 3527, 3248, 0, 0], [6776, 3527, 3249, 0, 0], [6777, 3528, 3249, 0, 0], [6778, 3528, 3250, 0, 0], [6779, 3529, 3250, 0, 0], [6780, 3529, 3251, 0, 0], [6781, 3530, 3251, 0, 0], [6782, 3530, 3252, 0, 0], [6783, 3531, 3252, 0, 0], [6784, 3531, 3253, 0, 0], [6785, 3532, 3253, 0, 0], [6786, 3532, 3254, 0, 0], [6787, 3533, 3254, 0, 0], [6788, 3533, 3255, 0, 0], [6789, 3534, 3255, 0, 0], [6790, 3534, 3256, 0, 0], [6791, 3535, 3256, 0, 0], [6792, 3535, 3257, 0, 0], [6793, 3536, 3257, 0, 0], [6794, 3536, 3258, 0, 0], [6795, 3537, 3258, 0, 0], [6796, 3537, 3259, 0, 0], [6797, 3538, 3259, 0, 0], [6798, 3538, 3260, 0, 0], [6799, 3539, 3260, 0, 0], [6800, 3539, 3261, 0, 0], [6801, 3540, 3261, 0, 0], [6802, 3540, 3262, 0, 0], [6803, 3541, 3262, 0, 0], [6804, 3541, 3263, 0, 0], [6805, 3542, 3263, 0, 0], [6806, 3542, 3264, 0, 0], [6807, 3543, 3264, 0, 0], [6808, 3543, 3265, 0, 0], [6809, 3544, 3265, 0, 0], [6810, 3544, 3266, 0, 0], [6811, 3545, 3266, 0, 0], [6812, 3545, 3267, 0, 0], [6813, 3546, 3267, 0, 0], [6814, 3546, 3268, 0, 0], [6815, 3547, 3268, 0, 0], [6816, 3547, 3269, 0, 0], [6817, 3548, 3269, 0, 0], [6818, 3548, 3270, 0, 0], [6819, 3549, 3270, 0, 0], [6820, 3549, 3271, 0, 0], [6821, 3550, 3271, 0, 0], [6822, 3550, 3272, 0, 0], [6823, 3551, 3272, 0, 0], [6824, 3551, 3273, 0, 0], [6825, 3552, 3273, 0, 0], [6826, 3552, 3274, 0, 0], [6827, 3553, 3274, 0, 0], [6828, 3553, 3275, 0, 0], [6829, 3554, 3275, 0, 0], [6830, 3554, 3276, 0, 0], [6831, 3555, 3276, 0, 0], [6832, 3555, 3277, 0, 0], [6833, 3556, 3277, 0, 0], [6834, 3556, 3278, 0, 0], [6835, 3557, 3278, 0, 0], [6836, 3557, 3279, 0, 0], [6837, 3558, 3279, 0, 0], [6838, 3558, 3280, 0, 0], [6839, 3559, 3280, 0, 0], [6840, 3559, 3281, 0, 0], [6841, 3560, 3281, 0, 0], [6842, 3560, 3282, 0, 0], [6843, 3561, 3282, 0, 0], [6844, 3561, 3283, 0, 0], [6845, 3562, 3283, 0, 0], [6846, 3562, 3284, 0, 0], [6847, 3563, 3284, 0, 0], [6848, 3563, 3285, 0, 0], [6849, 3564, 3285, 0, 0], [6850, 3564, 3286, 0, 0], [6851, 3565, 3286, 0, 0], [6852, 3565, 3287, 0, 0], [6853, 3566, 3287, 0, 0], [6854, 3566, 3288, 0, 0], [6855, 3567, 3288, 0, 0], [6856, 3567, 3289, 0, 0], [6857, 3568, 3289, 0, 0], [6858, 3568, 3290, 0, 0], [6859, 3569, 3290, 0, 0], [6860, 3569, 3291, 0, 0], [6861, 3570, 3291, 0, 0], [6862, 3570, 3292, 0, 0], [6863, 3571, 3292, 0, 0], [6864, 3571, 3293, 0, 0], [6865, 3572, 3293, 0, 0], [6866, 3572, 3294, 0, 0], [6867, 3573, 3294, 0, 0], [6868, 3573, 3295, 0, 0], [6869, 3574, 3295, 0, 0], [6870, 3574, 3296, 0, 0], [6871, 3575, 3296, 0, 0], [6872, 3575, 3297, 0, 0], [6873, 3576, 3297, 0, 0], [6874, 3576, 3298, 0, 0], [6875, 3577, 3298, 0, 0], [6876, 3577, 3299, 0, 0], [6877, 3578, 3299, 0, 0], [6878, 3578, 3300, 0, 0], [6879, 3579, 3300, 0, 0], [6880, 3580, 3300, 0, 0], [6881, 3580, 3301, 0, 0], [6882, 3581, 3301, 0, 0], [6883, 3581, 3302, 0, 0], [6884, 3582, 3302, 0, 0], [6885, 3582, 3303, 0, 0], [6886, 3583, 3303, 0, 0], [6887, 3583, 3304, 0, 0], [6888, 3584, 3304, 0, 0], [6889, 3584, 3305, 0, 0], [6890, 3585, 3305, 0, 0], [6891, 3585, 3306, 0, 0], [6892, 3586, 3306, 0, 0], [6893, 3586, 3307, 0, 0], [6894, 3587, 3307, 0, 0], [6895, 3587, 3308, 0, 0], [6896, 3588, 3308, 0, 0], [6897, 3588, 3309, 0, 0], [6898, 3589, 3309, 0, 0], [6899, 3589, 3310, 0, 0], [6900, 3590, 3310, 0, 0], [6901, 3590, 3311, 0, 0], [6902, 3591, 3311, 0, 0], [6903, 3591, 3312, 0, 0], [6904, 3592, 3312, 0, 0], [6905, 3592, 3313, 0, 0], [6906, 3593, 3313, 0, 0], [6907, 3593, 3314, 0, 0], [6908, 3594, 3314, 0, 0], [6909, 3594, 3315, 0, 0], [6910, 3595, 3315, 0, 0], [6911, 3595, 3316, 0, 0], [6912, 3596, 3316, 0, 0], [6913, 3596, 3317, 0, 0], [6914, 3597, 3317, 0, 0], [6915, 3597, 3318, 0, 0], [6916, 3598, 3318, 0, 0], [6917, 3598, 3319, 0, 0], [6918, 3599, 3319, 0, 0], [6919, 3599, 3320, 0, 0], [6920, 3600, 3320, 0, 0], [6921, 3600, 3321, 0, 0], [6922, 3601, 3321, 0, 0], [6923, 3601, 3322, 0, 0], [6924, 3602, 3322, 0, 0], [6925, 3602, 3323, 0, 0], [6926, 3603, 3323, 0, 0], [6927, 3603, 3324, 0, 0], [6928, 3604, 3324, 0, 0], [6929, 3604, 3325, 0, 0], [6930, 3605, 3325, 0, 0], [6931, 3605, 3326, 0, 0], [6932, 3606, 3326, 0, 0], [6933, 3606, 3327, 0, 0], [6934, 3607, 3327, 0, 0], [6935, 3607, 3328, 0, 0], [6936, 3608, 3328, 0, 0], [6937, 3608, 3329, 0, 0], [6938, 3609, 3329, 0, 0], [6939, 3609, 3330, 0, 0], [6940, 3610, 3330, 0, 0], [6941, 3610, 3331, 0, 0], [6942, 3611, 3331, 0, 0], [6943, 3611, 3332, 0, 0], [6944, 3612, 3332, 0, 0], [6945, 3612, 3333, 0, 0], [6946, 3613, 3333, 0, 0], [6947, 3613, 3334, 0, 0], [6948, 3614, 3334, 0, 0], [6949, 3614, 3335, 0, 0], [6950, 3615, 3335, 0, 0], [6951, 3615, 3336, 0, 0], [6952, 3616, 3336, 0, 0], [6953, 3616, 3337, 0, 0], [6954, 3617, 3337, 0, 0], [6955, 3617, 3338, 0, 0], [6956, 3618, 3338, 0, 0], [6957, 3618, 3339, 0, 0], [6958, 3619, 3339, 0, 0], [6959, 3619, 3340, 0, 0], [6960, 3620, 3340, 0, 0], [6961, 3620, 3341, 0, 0], [6962, 3621, 3341, 0, 0], [6963, 3621, 3342, 0, 0], [6964, 3622, 3342, 0, 0], [6965, 3622, 3343, 0, 0], [6966, 3623, 3343, 0, 0], [6967, 3623, 3344, 0, 0], [6968, 3624, 3344, 0, 0], [6969, 3624, 3345, 0, 0], [6970, 3625, 3345, 0, 0], [6971, 3625, 3346, 0, 0], [6972, 3626, 3346, 0, 0], [6973, 3626, 3347, 0, 0], [6974, 3627, 3347, 0, 0], [6975, 3627, 3348, 0, 0], [6976, 3628, 3348, 0, 0], [6977, 3628, 3349, 0, 0], [6978, 3629, 3349, 0, 0], [6979, 3629, 3350, 0, 0], [6980, 3630, 3350, 0, 0], [6981, 3630, 3351, 0, 0], [6982, 3631, 3351, 0, 0], [6983, 3631, 3352, 0, 0], [6984, 3632, 3352, 0, 0], [6985, 3632, 3353, 0, 0], [6986, 3633, 3353, 0, 0], [6987, 3633, 3354, 0, 0], [6988, 3634, 3354, 0, 0], [6989, 3634, 3355, 0, 0], [6990, 3635, 3355, 0, 0], [6991, 3635, 3356, 0, 0], [6992, 3636, 3356, 0, 0], [6993, 3636, 3357, 0, 0], [6994, 3637, 3357, 0, 0], [6995, 3637, 3358, 0, 0], [6996, 3638, 3358, 0, 0], [6997, 3638, 3359, 0, 0], [6998, 3639, 3359, 0, 0], [6999, 3639, 3360, 0, 0], [7000, 3640, 3360, 0, 0], [7001, 3640, 3361, 0, 0], [7002, 3641, 3361, 0, 0], [7003, 3641, 3362, 0, 0], [7004, 3642, 3362, 0, 0], [7005, 3642, 3363, 0, 0], [7006, 3643, 3363, 0, 0], [7007, 3643, 3364, 0, 0], [7008, 3644, 3364, 0, 0], [7009, 3644, 3365, 0, 0], [7010, 3645, 3365, 0, 0], [7011, 3645, 3366, 0, 0], [7012, 3646, 3366, 0, 0], [7013, 3646, 3367, 0, 0], [7014, 3647, 3367, 0, 0], [7015, 3647, 3368, 0, 0], [7016, 3648, 3368, 0, 0], [7017, 3648, 3369, 0, 0], [7018, 3649, 3369, 0, 0], [7019, 3649, 3370, 0, 0], [7020, 3650, 3370, 0, 0], [7021, 3650, 3371, 0, 0], [7022, 3651, 3371, 0, 0], [7023, 3651, 3372, 0, 0], [7024, 3652, 3372, 0, 0], [7025, 3652, 3373, 0, 0], [7026, 3653, 3373, 0, 0], [7027, 3653, 3374, 0, 0], [7028, 3654, 3374, 0, 0], [7029, 3654, 3375, 0, 0], [7030, 3655, 3375, 0, 0], [7031, 3655, 3376, 0, 0], [7032, 3656, 3376, 0, 0], [7033, 3656, 3377, 0, 0], [7034, 3657, 3377, 0, 0], [7035, 3657, 3378, 0, 0], [7036, 3658, 3378, 0, 0], [7037, 3658, 3379, 0, 0], [7038, 3659, 3379, 0, 0], [7039, 3659, 3380, 0, 0], [7040, 3660, 3380, 0, 0], [7041, 3660, 3381, 0, 0], [7042, 3661, 3381, 0, 0], [7043, 3661, 3382, 0, 0], [7044, 3662, 3382, 0, 0], [7045, 3662, 3383, 0, 0], [7046, 3663, 3383, 0, 0], [7047, 3663, 3384, 0, 0], [7048, 3664, 3384, 0, 0], [7049, 3664, 3385, 0, 0], [7050, 3665, 3385, 0, 0], [7051, 3665, 3386, 0, 0], [7052, 3666, 3386, 0, 0], [7053, 3666, 3387, 0, 0], [7054, 3667, 3387, 0, 0], [7055, 3667, 3388, 0, 0], [7056, 3668, 3388, 0, 0], [7057, 3668, 3389, 0, 0], [7058, 3669, 3389, 0, 0], [7059, 3669, 3390, 0, 0], [7060, 3670, 3390, 0, 0], [7061, 3670, 3391, 0, 0], [7062, 3671, 3391, 0, 0], [7063, 3671, 3392, 0, 0], [7064, 3672, 3392, 0, 0], [7065, 3672, 3393, 0, 0], [7066, 3673, 3393, 0, 0], [7067, 3673, 3394, 0, 0], [7068, 3674, 3394, 0, 0], [7069, 3674, 3395, 0, 0], [7070, 3675, 3395, 0, 0], [7071, 3675, 3396, 0, 0], [7072, 3676, 3396, 0, 0], [7073, 3676, 3397, 0, 0], [7074, 3677, 3397, 0, 0], [7075, 3677, 3398, 0, 0], [7076, 3678, 3398, 0, 0], [7077, 3678, 3399, 0, 0], [7078, 3679, 3399, 0, 0], [7079, 3679, 3400, 0, 0], [7080, 3680, 3400, 0, 0], [7081, 3680, 3401, 0, 0], [7082, 3681, 3401, 0, 0], [7083, 3681, 3402, 0, 0], [7084, 3682, 3402, 0, 0], [7085, 3682, 3403, 0, 0], [7086, 3683, 3403, 0, 0], [7087, 3683, 3404, 0, 0], [7088, 3684, 3404, 0, 0], [7089, 3684, 3405, 0, 0], [7090, 3685, 3405, 0, 0], [7091, 3685, 3406, 0, 0], [7092, 3686, 3406, 0, 0], [7093, 3686, 3407, 0, 0], [7094, 3687, 3407, 0, 0], [7095, 3687, 3408, 0, 0], [7096, 3688, 3408, 0, 0], [7097, 3688, 3409, 0, 0], [7098, 3689, 3409, 0, 0], [7099, 3689, 3410, 0, 0], [7100, 3690, 3410, 0, 0], [7101, 3690, 3411, 0, 0], [7102, 3691, 3411, 0, 0], [7103, 3691, 3412, 0, 0], [7104, 3692, 3412, 0, 0], [7105, 3692, 3413, 0, 0], [7106, 3693, 3413, 0, 0], [7107, 3693, 3414, 0, 0], [7108, 3694, 3414, 0, 0], [7109, 3694, 3415, 0, 0], [7110, 3695, 3415, 0, 0], [7111, 3695, 3416, 0, 0], [7112, 3696, 3416, 0, 0], [7113, 3696, 3417, 0, 0], [7114, 3697, 3417, 0, 0], [7115, 3697, 3418, 0, 0], [7116, 3698, 3418, 0, 0], [7117, 3698, 3419, 0, 0], [7118, 3699, 3419, 0, 0], [7119, 3699, 3420, 0, 0], [7120, 3700, 3420, 0, 0], [7121, 3700, 3421, 0, 0], [7122, 3701, 3421, 0, 0], [7123, 3701, 3422, 0, 0], [7124, 3702, 3422, 0, 0], [7125, 3702, 3423, 0, 0], [7126, 3703, 3423, 0, 0], [7127, 3703, 3424, 0, 0], [7128, 3704, 3424, 0, 0], [7129, 3704, 3425, 0, 0], [7130, 3705, 3425, 0, 0], [7131, 3705, 3426, 0, 0], [7132, 3706, 3426, 0, 0], [7133, 3706, 3427, 0, 0], [7134, 3707, 3427, 0, 0], [7135, 3707, 3428, 0, 0], [7136, 3708, 3428, 0, 0], [7137, 3708, 3429, 0, 0], [7138, 3709, 3429, 0, 0], [7139, 3709, 3430, 0, 0], [7140, 3710, 3430, 0, 0], [7141, 3710, 3431, 0, 0], [7142, 3711, 3431, 0, 0], [7143, 3711, 3432, 0, 0], [7144, 3712, 3432, 0, 0], [7145, 3712, 3433, 0, 0], [7146, 3713, 3433, 0, 0], [7147, 3713, 3434, 0, 0], [7148, 3714, 3434, 0, 0], [7149, 3714, 3435, 0, 0], [7150, 3715, 3435, 0, 0], [7151, 3715, 3436, 0, 0], [7152, 3716, 3436, 0, 0], [7153, 3716, 3437, 0, 0], [7154, 3717, 3437, 0, 0], [7155, 3717, 3438, 0, 0], [7156, 3718, 3438, 0, 0], [7157, 3718, 3439, 0, 0], [7158, 3719, 3439, 0, 0], [7159, 3719, 3440, 0, 0], [7160, 3720, 3440, 0, 0], [7161, 3720, 3441, 0, 0], [7162, 3721, 3441, 0, 0], [7163, 3721, 3442, 0, 0], [7164, 3722, 3442, 0, 0], [7165, 3722, 3443, 0, 0], [7166, 3723, 3443, 0, 0], [7167, 3723, 3444, 0, 0], [7168, 3724, 3444, 0, 0], [7169, 3724, 3445, 0, 0], [7170, 3725, 3445, 0, 0], [7171, 3725, 3446, 0, 0], [7172, 3726, 3446, 0, 0], [7173, 3726, 3447, 0, 0], [7174, 3727, 3447, 0, 0], [7175, 3727, 3448, 0, 0], [7176, 3727, 3449, 0, 0], [7177, 3728, 3449, 0, 0], [7178, 3728, 3450, 0, 0], [7179, 3729, 3450, 0, 0], [7180, 3729, 3451, 0, 0], [7181, 3730, 3451, 0, 0], [7182, 3730, 3452, 0, 0], [7183, 3731, 3452, 0, 0], [7184, 3731, 3453, 0, 0], [7185, 3732, 3453, 0, 0], [7186, 3732, 3454, 0, 0], [7187, 3733, 3454, 0, 0], [7188, 3733, 3455, 0, 0], [7189, 3734, 3455, 0, 0], [7190, 3734, 3456, 0, 0], [7191, 3735, 3456, 0, 0], [7192, 3735, 3457, 0, 0], [7193, 3736, 3457, 0, 0], [7194, 3736, 3458, 0, 0], [7195, 3737, 3458, 0, 0], [7196, 3737, 3459, 0, 0], [7197, 3738, 3459, 0, 0], [7198, 3738, 3460, 0, 0], [7199, 3739, 3460, 0, 0], [7200, 3739, 3461, 0, 0], [7201, 3740, 3461, 0, 0], [7202, 3740, 3462, 0, 0], [7203, 3741, 3462, 0, 0], [7204, 3741, 3463, 0, 0], [7205, 3742, 3463, 0, 0], [7206, 3742, 3464, 0, 0], [7207, 3743, 3464, 0, 0], [7208, 3743, 3465, 0, 0], [7209, 3744, 3465, 0, 0], [7210, 3744, 3466, 0, 0], [7211, 3745, 3466, 0, 0], [7212, 3745, 3467, 0, 0], [7213, 3746, 3467, 0, 0], [7214, 3746, 3468, 0, 0], [7215, 3747, 3468, 0, 0], [7216, 3747, 3469, 0, 0], [7217, 3748, 3469, 0, 0], [7218, 3748, 3470, 0, 0], [7219, 3749, 3470, 0, 0], [7220, 3749, 3471, 0, 0], [7221, 3750, 3471, 0, 0], [7222, 3750, 3472, 0, 0], [7223, 3751, 3472, 0, 0], [7224, 3751, 3473, 0, 0], [7225, 3752, 3473, 0, 0], [7226, 3752, 3474, 0, 0], [7227, 3753, 3474, 0, 0], [7228, 3753, 3475, 0, 0], [7229, 3754, 3475, 0, 0], [7230, 3754, 3476, 0, 0], [7231, 3755, 3476, 0, 0], [7232, 3755, 3477, 0, 0], [7233, 3756, 3477, 0, 0], [7234, 3756, 3478, 0, 0], [7235, 3757, 3478, 0, 0], [7236, 3757, 3479, 0, 0], [7237, 3758, 3479, 0, 0], [7238, 3758, 3480, 0, 0], [7239, 3759, 3480, 0, 0], [7240, 3759, 3481, 0, 0], [7241, 3760, 3481, 0, 0], [7242, 3760, 3482, 0, 0], [7243, 3761, 3482, 0, 0], [7244, 3761, 3483, 0, 0], [7245, 3762, 3483, 0, 0], [7246, 3762, 3484, 0, 0], [7247, 3763, 3484, 0, 0], [7248, 3763, 3485, 0, 0], [7249, 3764, 3485, 0, 0], [7250, 3764, 3486, 0, 0], [7251, 3765, 3486, 0, 0], [7252, 3765, 3487, 0, 0], [7253, 3766, 3487, 0, 0], [7254, 3766, 3488, 0, 0], [7255, 3767, 3488, 0, 0], [7256, 3767, 3489, 0, 0], [7257, 3768, 3489, 0, 0], [7258, 3768, 3490, 0, 0], [7259, 3769, 3490, 0, 0], [7260, 3769, 3491, 0, 0], [7261, 3770, 3491, 0, 0], [7262, 3770, 3492, 0, 0], [7263, 3771, 3492, 0, 0], [7264, 3771, 3493, 0, 0], [7265, 3772, 3493, 0, 0], [7266, 3772, 3494, 0, 0], [7267, 3773, 3494, 0, 0], [7268, 3773, 3495, 0, 0], [7269, 3774, 3495, 0, 0], [7270, 3774, 3496, 0, 0], [7271, 3775, 3496, 0, 0], [7272, 3775, 3497, 0, 0], [7273, 3776, 3497, 0, 0], [7274, 3776, 3498, 0, 0], [7275, 3777, 3498, 0, 0], [7276, 3777, 3499, 0, 0], [7277, 3778, 3499, 0, 0], [7278, 3778, 3500, 0, 0], [7279, 3779, 3500, 0, 0], [7280, 3779, 3501, 0, 0], [7281, 3780, 3501, 0, 0], [7282, 3780, 3502, 0, 0], [7283, 3781, 3502, 0, 0], [7284, 3781, 3503, 0, 0], [7285, 3782, 3503, 0, 0], [7286, 3782, 3504, 0, 0], [7287, 3783, 3504, 0, 0], [7288, 3783, 3505, 0, 0], [7289, 3784, 3505, 0, 0], [7290, 3784, 3506, 0, 0], [7291, 3785, 3506, 0, 0], [7292, 3785, 3507, 0, 0], [7293, 3786, 3507, 0, 0], [7294, 3786, 3508, 0, 0], [7295, 3787, 3508, 0, 0], [7296, 3787, 3509, 0, 0], [7297, 3788, 3509, 0, 0], [7298, 3788, 3510, 0, 0], [7299, 3789, 3510, 0, 0], [7300, 3789, 3511, 0, 0], [7301, 3790, 3511, 0, 0], [7302, 3790, 3512, 0, 0], [7303, 3791, 3512, 0, 0], [7304, 3791, 3513, 0, 0], [7305, 3792, 3513, 0, 0], [7306, 3792, 3514, 0, 0], [7307, 3793, 3514, 0, 0], [7308, 3793, 3515, 0, 0], [7309, 3794, 3515, 0, 0], [7310, 3794, 3516, 0, 0], [7311, 3795, 3516, 0, 0], [7312, 3795, 3517, 0, 0], [7313, 3796, 3517, 0, 0], [7314, 3796, 3518, 0, 0], [7315, 3797, 3518, 0, 0], [7316, 3797, 3519, 0, 0], [7317, 3798, 3519, 0, 0], [7318, 3798, 3520, 0, 0], [7319, 3799, 3520, 0, 0], [7320, 3799, 3521, 0, 0], [7321, 3800, 3521, 0, 0], [7322, 3800, 3522, 0, 0], [7323, 3801, 3522, 0, 0], [7324, 3801, 3523, 0, 0], [7325, 3802, 3523, 0, 0], [7326, 3802, 3524, 0, 0], [7327, 3803, 3524, 0, 0], [7328, 3803, 3525, 0, 0], [7329, 3804, 3525, 0, 0], [7330, 3804, 3526, 0, 0], [7331, 3805, 3526, 0, 0], [7332, 3805, 3527, 0, 0], [7333, 3806, 3527, 0, 0], [7334, 3806, 3528, 0, 0], [7335, 3807, 3528, 0, 0], [7336, 3807, 3529, 0, 0], [7337, 3808, 3529, 0, 0], [7338, 3808, 3530, 0, 0], [7339, 3809, 3530, 0, 0], [7340, 3809, 3531, 0, 0], [7341, 3810, 3531, 0, 0], [7342, 3810, 3532, 0, 0], [7343, 3811, 3532, 0, 0], [7344, 3811, 3533, 0, 0], [7345, 3812, 3533, 0, 0], [7346, 3812, 3534, 0, 0], [7347, 3813, 3534, 0, 0], [7348, 3813, 3535, 0, 0], [7349, 3814, 3535, 0, 0], [7350, 3814, 3536, 0, 0], [7351, 3815, 3536, 0, 0], [7352, 3815, 3537, 0, 0], [7353, 3816, 3537, 0, 0], [7354, 3816, 3538, 0, 0], [7355, 3817, 3538, 0, 0], [7356, 3817, 3539, 0, 0], [7357, 3818, 3539, 0, 0], [7358, 3818, 3540, 0, 0], [7359, 3819, 3540, 0, 0], [7360, 3819, 3541, 0, 0], [7361, 3820, 3541, 0, 0], [7362, 3820, 3542, 0, 0], [7363, 3821, 3542, 0, 0], [7364, 3821, 3543, 0, 0], [7365, 3822, 3543, 0, 0], [7366, 3822, 3544, 0, 0], [7367, 3823, 3544, 0, 0], [7368, 3823, 3545, 0, 0], [7369, 3824, 3545, 0, 0], [7370, 3824, 3546, 0, 0], [7371, 3825, 3546, 0, 0], [7372, 3825, 3547, 0, 0], [7373, 3826, 3547, 0, 0], [7374, 3826, 3548, 0, 0], [7375, 3827, 3548, 0, 0], [7376, 3827, 3549, 0, 0], [7377, 3828, 3549, 0, 0], [7378, 3828, 3550, 0, 0], [7379, 3829, 3550, 0, 0], [7380, 3829, 3551, 0, 0], [7381, 3830, 3551, 0, 0], [7382, 3830, 3552, 0, 0], [7383, 3831, 3552, 0, 0], [7384, 3831, 3553, 0, 0], [7385, 3832, 3553, 0, 0], [7386, 3832, 3554, 0, 0], [7387, 3833, 3554, 0, 0], [7388, 3833, 3555, 0, 0], [7389, 3834, 3555, 0, 0], [7390, 3834, 3556, 0, 0], [7391, 3835, 3556, 0, 0], [7392, 3835, 3557, 0, 0], [7393, 3836, 3557, 0, 0], [7394, 3836, 3558, 0, 0], [7395, 3837, 3558, 0, 0], [7396, 3837, 3559, 0, 0], [7397, 3838, 3559, 0, 0], [7398, 3838, 3560, 0, 0], [7399, 3839, 3560, 0, 0], [7400, 3839, 3561, 0, 0], [7401, 3840, 3561, 0, 0], [7402, 3840, 3562, 0, 0], [7403, 3841, 3562, 0, 0], [7404, 3841, 3563, 0, 0], [7405, 3842, 3563, 0, 0], [7406, 3842, 3564, 0, 0], [7407, 3843, 3564, 0, 0], [7408, 3843, 3565, 0, 0], [7409, 3844, 3565, 0, 0], [7410, 3844, 3566, 0, 0], [7411, 3845, 3566, 0, 0], [7412, 3845, 3567, 0, 0], [7413, 3846, 3567, 0, 0], [7414, 3846, 3568, 0, 0], [7415, 3847, 3568, 0, 0], [7416, 3847, 3569, 0, 0], [7417, 3848, 3569, 0, 0], [7418, 3848, 3570, 0, 0], [7419, 3849, 3570, 0, 0], [7420, 3849, 3571, 0, 0], [7421, 3850, 3571, 0, 0], [7422, 3850, 3572, 0, 0], [7423, 3851, 3572, 0, 0], [7424, 3851, 3573, 0, 0], [7425, 3852, 3573, 0, 0], [7426, 3852, 3574, 0, 0], [7427, 3853, 3574, 0, 0], [7428, 3853, 3575, 0, 0], [7429, 3854, 3575, 0, 0], [7430, 3854, 3576, 0, 0], [7431, 3855, 3576, 0, 0], [7432, 3855, 3577, 0, 0], [7433, 3856, 3577, 0, 0], [7434, 3856, 3578, 0, 0], [7435, 3857, 3578, 0, 0], [7436, 3857, 3579, 0, 0], [7437, 3858, 3579, 0, 0], [7438, 3858, 3580, 0, 0], [7439, 3859, 3580, 0, 0], [7440, 3859, 3581, 0, 0], [7441, 3860, 3581, 0, 0], [7442, 3860, 3582, 0, 0], [7443, 3861, 3582, 0, 0], [7444, 3861, 3583, 0, 0], [7445, 3862, 3583, 0, 0], [7446, 3862, 3584, 0, 0], [7447, 3863, 3584, 0, 0], [7448, 3863, 3585, 0, 0], [7449, 3864, 3585, 0, 0], [7450, 3864, 3586, 0, 0], [7451, 3865, 3586, 0, 0], [7452, 3865, 3587, 0, 0], [7453, 3866, 3587, 0, 0], [7454, 3866, 3588, 0, 0], [7455, 3867, 3588, 0, 0], [7456, 3867, 3589, 0, 0], [7457, 3868, 3589, 0, 0], [7458, 3868, 3590, 0, 0], [7459, 3869, 3590, 0, 0], [7460, 3869, 3591, 0, 0], [7461, 3870, 3591, 0, 0], [7462, 3870, 3592, 0, 0], [7463, 3871, 3592, 0, 0], [7464, 3871, 3593, 0, 0], [7465, 3872, 3593, 0, 0], [7466, 3872, 3594, 0, 0], [7467, 3873, 3594, 0, 0], [7468, 3873, 3595, 0, 0], [7469, 3874, 3595, 0, 0], [7470, 3874, 3596, 0, 0], [7471, 3875, 3596, 0, 0], [7472, 3875, 3597, 0, 0], [7473, 3876, 3597, 0, 0], [7474, 3876, 3598, 0, 0], [7475, 3877, 3598, 0, 0], [7476, 3877, 3599, 0, 0], [7477, 3878, 3599, 0, 0], [7478, 3878, 3600, 0, 0], [7479, 3879, 3600, 0, 0], [7480, 3879, 3601, 0, 0], [7481, 3880, 3601, 0, 0], [7482, 3880, 3602, 0, 0], [7483, 3881, 3602, 0, 0], [7484, 3881, 3603, 0, 0], [7485, 3882, 3603, 0, 0], [7486, 3882, 3604, 0, 0], [7487, 3883, 3604, 0, 0], [7488, 3883, 3605, 0, 0], [7489, 3884, 3605, 0, 0], [7490, 3884, 3606, 0, 0], [7491, 3885, 3606, 0, 0], [7492, 3885, 3607, 0, 0], [7493, 3886, 3607, 0, 0], [7494, 3886, 3608, 0, 0], [7495, 3887, 3608, 0, 0], [7496, 3887, 3609, 0, 0], [7497, 3888, 3609, 0, 0], [7498, 3888, 3610, 0, 0], [7499, 3889, 3610, 0, 0], [7500, 3889, 3611, 0, 0], [7501, 3890, 3611, 0, 0], [7502, 3890, 3612, 0, 0], [7503, 3891, 3612, 0, 0], [7504, 3891, 3613, 0, 0], [7505, 3892, 3613, 0, 0], [7506, 3892, 3614, 0, 0], [7507, 3893, 3614, 0, 0], [7508, 3893, 3615, 0, 0], [7509, 3894, 3615, 0, 0], [7510, 3894, 3616, 0, 0], [7511, 3895, 3616, 0, 0], [7512, 3895, 3617, 0, 0], [7513, 3896, 3617, 0, 0], [7514, 3896, 3618, 0, 0], [7515, 3897, 3618, 0, 0], [7516, 3897, 3619, 0, 0], [7517, 3898, 3619, 0, 0], [7518, 3898, 3620, 0, 0], [7519, 3899, 3620, 0, 0], [7520, 3899, 3621, 0, 0], [7521, 3900, 3621, 0, 0], [7522, 3900, 3622, 0, 0], [7523, 3901, 3622, 0, 0], [7524, 3901, 3623, 0, 0], [7525, 3902, 3623, 0, 0], [7526, 3902, 3624, 0, 0], [7527, 3903, 3624, 0, 0], [7528, 3903, 3625, 0, 0], [7529, 3904, 3625, 0, 0], [7530, 3904, 3626, 0, 0], [7531, 3905, 3626, 0, 0], [7532, 3905, 3627, 0, 0], [7533, 3906, 3627, 0, 0], [7534, 3906, 3628, 0, 0], [7535, 3907, 3628, 0, 0], [7536, 3907, 3629, 0, 0], [7537, 3908, 3629, 0, 0], [7538, 3908, 3630, 0, 0], [7539, 3909, 3630, 0, 0], [7540, 3909, 3631, 0, 0], [7541, 3910, 3631, 0, 0], [7542, 3910, 3632, 0, 0], [7543, 3911, 3632, 0, 0], [7544, 3911, 3633, 0, 0], [7545, 3912, 3633, 0, 0], [7546, 3912, 3634, 0, 0], [7547, 3913, 3634, 0, 0], [7548, 3913, 3635, 0, 0], [7549, 3914, 3635, 0, 0], [7550, 3914, 3636, 0, 0], [7551, 3915, 3636, 0, 0], [7552, 3915, 3637, 0, 0], [7553, 3916, 3637, 0, 0], [7554, 3916, 3638, 0, 0], [7555, 3917, 3638, 0, 0], [7556, 3917, 3639, 0, 0], [7557, 3918, 3639, 0, 0], [7558, 3918, 3640, 0, 0], [7559, 3919, 3640, 0, 0], [7560, 3919, 3641, 0, 0], [7561, 3920, 3641, 0, 0], [7562, 3920, 3642, 0, 0], [7563, 3921, 3642, 0, 0], [7564, 3921, 3643, 0, 0], [7565, 3922, 3643, 0, 0], [7566, 3922, 3644, 0, 0], [7567, 3923, 3644, 0, 0], [7568, 3923, 3645, 0, 0], [7569, 3924, 3645, 0, 0], [7570, 3924, 3646, 0, 0], [7571, 3925, 3646, 0, 0], [7572, 3925, 3647, 0, 0], [7573, 3926, 3647, 0, 0], [7574, 3926, 3648, 0, 0], [7575, 3927, 3648, 0, 0], [7576, 3927, 3649, 0, 0], [7577, 3928, 3649, 0, 0], [7578, 3928, 3650, 0, 0], [7579, 3929, 3650, 0, 0], [7580, 3929, 3651, 0, 0], [7581, 3930, 3651, 0, 0], [7582, 3930, 3652, 0, 0], [7583, 3931, 3652, 0, 0], [7584, 3931, 3653, 0, 0], [7585, 3932, 3653, 0, 0], [7586, 3932, 3654, 0, 0], [7587, 3933, 3654, 0, 0], [7588, 3933, 3655, 0, 0], [7589, 3934, 3655, 0, 0], [7590, 3934, 3656, 0, 0], [7591, 3935, 3656, 0, 0], [7592, 3935, 3657, 0, 0], [7593, 3936, 3657, 0, 0], [7594, 3936, 3658, 0, 0], [7595, 3937, 3658, 0, 0], [7596, 3937, 3659, 0, 0], [7597, 3938, 3659, 0, 0], [7598, 3938, 3660, 0, 0], [7599, 3939, 3660, 0, 0], [7600, 3939, 3661, 0, 0], [7601, 3940, 3661, 0, 0], [7602, 3940, 3662, 0, 0], [7603, 3941, 3662, 0, 0], [7604, 3941, 3663, 0, 0], [7605, 3942, 3663, 0, 0], [7606, 3942, 3664, 0, 0], [7607, 3943, 3664, 0, 0], [7608, 3943, 3665, 0, 0], [7609, 3944, 3665, 0, 0], [7610, 3944, 3666, 0, 0], [7611, 3945, 3666, 0, 0], [7612, 3945, 3667, 0, 0], [7613, 3946, 3667, 0, 0], [7614, 3946, 3668, 0, 0], [7615, 3947, 3668, 0, 0], [7616, 3947, 3669, 0, 0], [7617, 3948, 3669, 0, 0], [7618, 3948, 3670, 0, 0], [7619, 3949, 3670, 0, 0], [7620, 3949, 3671, 0, 0], [7621, 3949, 3672, 0, 0], [7622, 3950, 3672, 0, 0], [7623, 3950, 3673, 0, 0], [7624, 3951, 3673, 0, 0], [7625, 3951, 3674, 0, 0], [7626, 3952, 3674, 0, 0], [7627, 3952, 3675, 0, 0], [7628, 3953, 3675, 0, 0], [7629, 3953, 3676, 0, 0], [7630, 3954, 3676, 0, 0], [7631, 3954, 3677, 0, 0], [7632, 3955, 3677, 0, 0], [7633, 3955, 3678, 0, 0], [7634, 3956, 3678, 0, 0], [7635, 3956, 3679, 0, 0], [7636, 3957, 3679, 0, 0], [7637, 3957, 3680, 0, 0], [7638, 3958, 3680, 0, 0], [7639, 3958, 3681, 0, 0], [7640, 3959, 3681, 0, 0], [7641, 3959, 3682, 0, 0], [7642, 3960, 3682, 0, 0], [7643, 3960, 3683, 0, 0], [7644, 3961, 3683, 0, 0], [7645, 3961, 3684, 0, 0], [7646, 3962, 3684, 0, 0], [7647, 3962, 3685, 0, 0], [7648, 3963, 3685, 0, 0], [7649, 3963, 3686, 0, 0], [7650, 3964, 3686, 0, 0], [7651, 3964, 3687, 0, 0], [7652, 3965, 3687, 0, 0], [7653, 3965, 3688, 0, 0], [7654, 3966, 3688, 0, 0], [7655, 3966, 3689, 0, 0], [7656, 3967, 3689, 0, 0], [7657, 3967, 3690, 0, 0], [7658, 3968, 3690, 0, 0], [7659, 3968, 3691, 0, 0], [7660, 3969, 3691, 0, 0], [7661, 3969, 3692, 0, 0], [7662, 3970, 3692, 0, 0], [7663, 3970, 3693, 0, 0], [7664, 3971, 3693, 0, 0], [7665, 3971, 3694, 0, 0], [7666, 3972, 3694, 0, 0], [7667, 3972, 3695, 0, 0], [7668, 3973, 3695, 0, 0], [7669, 3973, 3696, 0, 0], [7670, 3974, 3696, 0, 0], [7671, 3974, 3697, 0, 0], [7672, 3975, 3697, 0, 0], [7673, 3975, 3698, 0, 0], [7674, 3976, 3698, 0, 0], [7675, 3976, 3699, 0, 0], [7676, 3977, 3699, 0, 0], [7677, 3977, 3700, 0, 0], [7678, 3978, 3700, 0, 0], [7679, 3978, 3701, 0, 0], [7680, 3979, 3701, 0, 0], [7681, 3979, 3702, 0, 0], [7682, 3980, 3702, 0, 0], [7683, 3980, 3703, 0, 0], [7684, 3981, 3703, 0, 0], [7685, 3981, 3704, 0, 0], [7686, 3982, 3704, 0, 0], [7687, 3982, 3705, 0, 0], [7688, 3983, 3705, 0, 0], [7689, 3983, 3706, 0, 0], [7690, 3984, 3706, 0, 0], [7691, 3984, 3707, 0, 0], [7692, 3985, 3707, 0, 0], [7693, 3985, 3708, 0, 0], [7694, 3986, 3708, 0, 0], [7695, 3986, 3709, 0, 0], [7696, 3987, 3709, 0, 0], [7697, 3987, 3710, 0, 0], [7698, 3988, 3710, 0, 0], [7699, 3988, 3711, 0, 0], [7700, 3989, 3711, 0, 0], [7701, 3989, 3712, 0, 0], [7702, 3990, 3712, 0, 0], [7703, 3990, 3713, 0, 0], [7704, 3991, 3713, 0, 0], [7705, 3991, 3714, 0, 0], [7706, 3992, 3714, 0, 0], [7707, 3992, 3715, 0, 0], [7708, 3993, 3715, 0, 0], [7709, 3993, 3716, 0, 0], [7710, 3994, 3716, 0, 0], [7711, 3994, 3717, 0, 0], [7712, 3995, 3717, 0, 0], [7713, 3995, 3718, 0, 0], [7714, 3996, 3718, 0, 0], [7715, 3996, 3719, 0, 0], [7716, 3997, 3719, 0, 0], [7717, 3997, 3720, 0, 0], [7718, 3998, 3720, 0, 0], [7719, 3998, 3721, 0, 0], [7720, 3999, 3721, 0, 0], [7721, 3999, 3722, 0, 0], [7722, 4000, 3722, 0, 0], [7723, 4000, 3723, 0, 0], [7724, 4001, 3723, 0, 0], [7725, 4001, 3724, 0, 0], [7726, 4002, 3724, 0, 0], [7727, 4002, 3725, 0, 0], [7728, 4003, 3725, 0, 0], [7729, 4003, 3726, 0, 0], [7730, 4004, 3726, 0, 0], [7731, 4004, 3727, 0, 0], [7732, 4005, 3727, 0, 0], [7733, 4005, 3728, 0, 0], [7734, 4006, 3728, 0, 0], [7735, 4006, 3729, 0, 0], [7736, 4007, 3729, 0, 0], [7737, 4007, 3730, 0, 0], [7738, 4008, 3730, 0, 0], [7739, 4008, 3731, 0, 0], [7740, 4009, 3731, 0, 0], [7741, 4009, 3732, 0, 0], [7742, 4010, 3732, 0, 0], [7743, 4010, 3733, 0, 0], [7744, 4011, 3733, 0, 0], [7745, 4011, 3734, 0, 0], [7746, 4012, 3734, 0, 0], [7747, 4012, 3735, 0, 0], [7748, 4013, 3735, 0, 0], [7749, 4013, 3736, 0, 0], [7750, 4014, 3736, 0, 0], [7751, 4014, 3737, 0, 0], [7752, 4015, 3737, 0, 0], [7753, 4015, 3738, 0, 0], [7754, 4016, 3738, 0, 0], [7755, 4016, 3739, 0, 0], [7756, 4017, 3739, 0, 0], [7757, 4017, 3740, 0, 0], [7758, 4018, 3740, 0, 0], [7759, 4018, 3741, 0, 0], [7760, 4019, 3741, 0, 0], [7761, 4019, 3742, 0, 0], [7762, 4020, 3742, 0, 0], [7763, 4020, 3743, 0, 0], [7764, 4021, 3743, 0, 0], [7765, 4021, 3744, 0, 0], [7766, 4022, 3744, 0, 0], [7767, 4022, 3745, 0, 0], [7768, 4023, 3745, 0, 0], [7769, 4023, 3746, 0, 0], [7770, 4024, 3746, 0, 0], [7771, 4024, 3747, 0, 0], [7772, 4025, 3747, 0, 0], [7773, 4025, 3748, 0, 0], [7774, 4026, 3748, 0, 0], [7775, 4026, 3749, 0, 0], [7776, 4027, 3749, 0, 0], [7777, 4027, 3750, 0, 0], [7778, 4028, 3750, 0, 0], [7779, 4028, 3751, 0, 0], [7780, 4029, 3751, 0, 0], [7781, 4029, 3752, 0, 0], [7782, 4030, 3752, 0, 0], [7783, 4030, 3753, 0, 0], [7784, 4031, 3753, 0, 0], [7785, 4031, 3754, 0, 0], [7786, 4032, 3754, 0, 0], [7787, 4032, 3755, 0, 0], [7788, 4033, 3755, 0, 0], [7789, 4033, 3756, 0, 0], [7790, 4034, 3756, 0, 0], [7791, 4034, 3757, 0, 0], [7792, 4035, 3757, 0, 0], [7793, 4035, 3758, 0, 0], [7794, 4036, 3758, 0, 0], [7795, 4036, 3759, 0, 0], [7796, 4037, 3759, 0, 0], [7797, 4037, 3760, 0, 0], [7798, 4038, 3760, 0, 0], [7799, 4038, 3761, 0, 0], [7800, 4039, 3761, 0, 0], [7801, 4039, 3762, 0, 0], [7802, 4040, 3762, 0, 0], [7803, 4040, 3763, 0, 0], [7804, 4041, 3763, 0, 0], [7805, 4041, 3764, 0, 0], [7806, 4042, 3764, 0, 0], [7807, 4042, 3765, 0, 0], [7808, 4043, 3765, 0, 0], [7809, 4043, 3766, 0, 0], [7810, 4044, 3766, 0, 0], [7811, 4044, 3767, 0, 0], [7812, 4045, 3767, 0, 0], [7813, 4045, 3768, 0, 0], [7814, 4046, 3768, 0, 0], [7815, 4046, 3769, 0, 0], [7816, 4047, 3769, 0, 0], [7817, 4047, 3770, 0, 0], [7818, 4048, 3770, 0, 0], [7819, 4048, 3771, 0, 0], [7820, 4049, 3771, 0, 0], [7821, 4049, 3772, 0, 0], [7822, 4050, 3772, 0, 0], [7823, 4050, 3773, 0, 0], [7824, 4051, 3773, 0, 0], [7825, 4051, 3774, 0, 0], [7826, 4052, 3774, 0, 0], [7827, 4052, 3775, 0, 0], [7828, 4053, 3775, 0, 0], [7829, 4053, 3776, 0, 0], [7830, 4054, 3776, 0, 0], [7831, 4054, 3777, 0, 0], [7832, 4055, 3777, 0, 0], [7833, 4055, 3778, 0, 0], [7834, 4056, 3778, 0, 0], [7835, 4056, 3779, 0, 0], [7836, 4057, 3779, 0, 0], [7837, 4057, 3780, 0, 0], [7838, 4058, 3780, 0, 0], [7839, 4058, 3781, 0, 0], [7840, 4059, 3781, 0, 0], [7841, 4059, 3782, 0, 0], [7842, 4060, 3782, 0, 0], [7843, 4060, 3783, 0, 0], [7844, 4061, 3783, 0, 0], [7845, 4061, 3784, 0, 0], [7846, 4062, 3784, 0, 0], [7847, 4062, 3785, 0, 0], [7848, 4063, 3785, 0, 0], [7849, 4063, 3786, 0, 0], [7850, 4064, 3786, 0, 0], [7851, 4064, 3787, 0, 0], [7852, 4065, 3787, 0, 0], [7853, 4065, 3788, 0, 0], [7854, 4066, 3788, 0, 0], [7855, 4066, 3789, 0, 0], [7856, 4067, 3789, 0, 0], [7857, 4067, 3790, 0, 0], [7858, 4068, 3790, 0, 0], [7859, 4068, 3791, 0, 0], [7860, 4068, 3792, 0, 0], [7861, 4069, 3792, 0, 0], [7862, 4069, 3793, 0, 0], [7863, 4070, 3793, 0, 0], [7864, 4070, 3794, 0, 0], [7865, 4071, 3794, 0, 0], [7866, 4071, 3795, 0, 0], [7867, 4072, 3795, 0, 0], [7868, 4072, 3796, 0, 0], [7869, 4073, 3796, 0, 0], [7870, 4073, 3797, 0, 0], [7871, 4074, 3797, 0, 0], [7872, 4074, 3798, 0, 0], [7873, 4075, 3798, 0, 0], [7874, 4075, 3799, 0, 0], [7875, 4076, 3799, 0, 0], [7876, 4076, 3800, 0, 0], [7877, 4077, 3800, 0, 0], [7878, 4077, 3801, 0, 0], [7879, 4078, 3801, 0, 0], [7880, 4078, 3802, 0, 0], [7881, 4079, 3802, 0, 0], [7882, 4079, 3803, 0, 0], [7883, 4080, 3803, 0, 0], [7884, 4080, 3804, 0, 0], [7885, 4081, 3804, 0, 0], [7886, 4081, 3805, 0, 0], [7887, 4082, 3805, 0, 0], [7888, 4082, 3806, 0, 0], [7889, 4083, 3806, 0, 0], [7890, 4083, 3807, 0, 0], [7891, 4084, 3807, 0, 0], [7892, 4084, 3808, 0, 0], [7893, 4085, 3808, 0, 0], [7894, 4085, 3809, 0, 0], [7895, 4086, 3809, 0, 0], [7896, 4086, 3810, 0, 0], [7897, 4087, 3810, 0, 0], [7898, 4087, 3811, 0, 0], [7899, 4088, 3811, 0, 0], [7900, 4088, 3812, 0, 0], [7901, 4089, 3812, 0, 0], [7902, 4089, 3813, 0, 0], [7903, 4090, 3813, 0, 0], [7904, 4090, 3814, 0, 0], [7905, 4091, 3814, 0, 0], [7906, 4091, 3815, 0, 0], [7907, 4092, 3815, 0, 0], [7908, 4092, 3816, 0, 0], [7909, 4093, 3816, 0, 0], [7910, 4093, 3817, 0, 0], [7911, 4094, 3817, 0, 0], [7912, 4094, 3818, 0, 0], [7913, 4095, 3818, 0, 0], [7914, 4095, 3819, 0, 0], [7915, 4096, 3819, 0, 0], [7916, 4096, 3820, 0, 0], [7917, 4097, 3820, 0, 0], [7918, 4097, 3821, 0, 0], [7919, 4098, 3821, 0, 0], [7920, 4098, 3822, 0, 0], [7921, 4099, 3822, 0, 0], [7922, 4099, 3823, 0, 0], [7923, 4100, 3823, 0, 0], [7924, 4100, 3824, 0, 0], [7925, 4101, 3824, 0, 0], [7926, 4101, 3825, 0, 0], [7927, 4102, 3825, 0, 0], [7928, 4102, 3826, 0, 0], [7929, 4103, 3826, 0, 0], [7930, 4103, 3827, 0, 0], [7931, 4104, 3827, 0, 0], [7932, 4104, 3828, 0, 0], [7933, 4105, 3828, 0, 0], [7934, 4105, 3829, 0, 0], [7935, 4106, 3829, 0, 0], [7936, 4106, 3830, 0, 0], [7937, 4107, 3830, 0, 0], [7938, 4107, 3831, 0, 0], [7939, 4108, 3831, 0, 0], [7940, 4108, 3832, 0, 0], [7941, 4109, 3832, 0, 0], [7942, 4109, 3833, 0, 0], [7943, 4110, 3833, 0, 0], [7944, 4110, 3834, 0, 0], [7945, 4111, 3834, 0, 0], [7946, 4111, 3835, 0, 0], [7947, 4112, 3835, 0, 0], [7948, 4112, 3836, 0, 0], [7949, 4113, 3836, 0, 0], [7950, 4113, 3837, 0, 0], [7951, 4114, 3837, 0, 0], [7952, 4114, 3838, 0, 0], [7953, 4115, 3838, 0, 0], [7954, 4115, 3839, 0, 0], [7955, 4116, 3839, 0, 0], [7956, 4116, 3840, 0, 0], [7957, 4117, 3840, 0, 0], [7958, 4117, 3841, 0, 0], [7959, 4118, 3841, 0, 0], [7960, 4118, 3842, 0, 0], [7961, 4119, 3842, 0, 0], [7962, 4119, 3843, 0, 0], [7963, 4120, 3843, 0, 0], [7964, 4120, 3844, 0, 0], [7965, 4121, 3844, 0, 0], [7966, 4121, 3845, 0, 0], [7967, 4122, 3845, 0, 0], [7968, 4122, 3846, 0, 0], [7969, 4123, 3846, 0, 0], [7970, 4123, 3847, 0, 0], [7971, 4124, 3847, 0, 0], [7972, 4124, 3848, 0, 0], [7973, 4125, 3848, 0, 0], [7974, 4125, 3849, 0, 0], [7975, 4126, 3849, 0, 0], [7976, 4126, 3850, 0, 0], [7977, 4127, 3850, 0, 0], [7978, 4127, 3851, 0, 0], [7979, 4128, 3851, 0, 0], [7980, 4128, 3852, 0, 0], [7981, 4129, 3852, 0, 0], [7982, 4129, 3853, 0, 0], [7983, 4130, 3853, 0, 0], [7984, 4130, 3854, 0, 0], [7985, 4131, 3854, 0, 0], [7986, 4131, 3855, 0, 0], [7987, 4132, 3855, 0, 0], [7988, 4132, 3856, 0, 0], [7989, 4133, 3856, 0, 0], [7990, 4133, 3857, 0, 0], [7991, 4134, 3857, 0, 0], [7992, 4134, 3858, 0, 0], [7993, 4135, 3858, 0, 0], [7994, 4135, 3859, 0, 0], [7995, 4136, 3859, 0, 0], [7996, 4136, 3860, 0, 0], [7997, 4137, 3860, 0, 0], [7998, 4137, 3861, 0, 0], [7999, 4138, 3861, 0, 0], [8000, 4138, 3862, 0, 0], [8001, 4139, 3862, 0, 0], [8002, 4139, 3863, 0, 0], [8003, 4140, 3863, 0, 0], [8004, 4140, 3864, 0, 0], [8005, 4141, 3864, 0, 0], [8006, 4141, 3865, 0, 0], [8007, 4142, 3865, 0, 0], [8008, 4142, 3866, 0, 0], [8009, 4143, 3866, 0, 0], [8010, 4143, 3867, 0, 0], [8011, 4144, 3867, 0, 0], [8012, 4144, 3868, 0, 0], [8013, 4145, 3868, 0, 0], [8014, 4145, 3869, 0, 0], [8015, 4146, 3869, 0, 0], [8016, 4146, 3870, 0, 0], [8017, 4147, 3870, 0, 0], [8018, 4147, 3871, 0, 0], [8019, 4148, 3871, 0, 0], [8020, 4148, 3872, 0, 0], [8021, 4149, 3872, 0, 0], [8022, 4149, 3873, 0, 0], [8023, 4150, 3873, 0, 0], [8024, 4150, 3874, 0, 0], [8025, 4151, 3874, 0, 0], [8026, 4151, 3875, 0, 0], [8027, 4152, 3875, 0, 0], [8028, 4152, 3876, 0, 0], [8029, 4153, 3876, 0, 0], [8030, 4153, 3877, 0, 0], [8031, 4154, 3877, 0, 0], [8032, 4154, 3878, 0, 0], [8033, 4155, 3878, 0, 0], [8034, 4155, 3879, 0, 0], [8035, 4156, 3879, 0, 0], [8036, 4156, 3880, 0, 0], [8037, 4157, 3880, 0, 0], [8038, 4157, 3881, 0, 0], [8039, 4158, 3881, 0, 0], [8040, 4158, 3882, 0, 0], [8041, 4159, 3882, 0, 0], [8042, 4159, 3883, 0, 0], [8043, 4160, 3883, 0, 0], [8044, 4160, 3884, 0, 0], [8045, 4161, 3884, 0, 0], [8046, 4161, 3885, 0, 0], [8047, 4161, 3886, 0, 0], [8048, 4162, 3886, 0, 0], [8049, 4162, 3887, 0, 0], [8050, 4163, 3887, 0, 0], [8051, 4163, 3888, 0, 0], [8052, 4164, 3888, 0, 0], [8053, 4164, 3889, 0, 0], [8054, 4165, 3889, 0, 0], [8055, 4165, 3890, 0, 0], [8056, 4166, 3890, 0, 0], [8057, 4166, 3891, 0, 0], [8058, 4167, 3891, 0, 0], [8059, 4167, 3892, 0, 0], [8060, 4168, 3892, 0, 0], [8061, 4168, 3893, 0, 0], [8062, 4169, 3893, 0, 0], [8063, 4169, 3894, 0, 0], [8064, 4170, 3894, 0, 0], [8065, 4170, 3895, 0, 0], [8066, 4171, 3895, 0, 0], [8067, 4171, 3896, 0, 0], [8068, 4172, 3896, 0, 0], [8069, 4172, 3897, 0, 0], [8070, 4173, 3897, 0, 0], [8071, 4173, 3898, 0, 0], [8072, 4174, 3898, 0, 0], [8073, 4174, 3899, 0, 0], [8074, 4175, 3899, 0, 0], [8075, 4175, 3900, 0, 0], [8076, 4176, 3900, 0, 0], [8077, 4176, 3901, 0, 0], [8078, 4177, 3901, 0, 0], [8079, 4177, 3902, 0, 0], [8080, 4178, 3902, 0, 0], [8081, 4178, 3903, 0, 0], [8082, 4179, 3903, 0, 0], [8083, 4179, 3904, 0, 0], [8084, 4180, 3904, 0, 0], [8085, 4180, 3905, 0, 0], [8086, 4181, 3905, 0, 0], [8087, 4181, 3906, 0, 0], [8088, 4182, 3906, 0, 0], [8089, 4182, 3907, 0, 0], [8090, 4183, 3907, 0, 0], [8091, 4183, 3908, 0, 0], [8092, 4184, 3908, 0, 0], [8093, 4184, 3909, 0, 0], [8094, 4185, 3909, 0, 0], [8095, 4185, 3910, 0, 0], [8096, 4186, 3910, 0, 0], [8097, 4186, 3911, 0, 0], [8098, 4187, 3911, 0, 0], [8099, 4187, 3912, 0, 0], [8100, 4188, 3912, 0, 0], [8101, 4188, 3913, 0, 0], [8102, 4189, 3913, 0, 0], [8103, 4189, 3914, 0, 0], [8104, 4190, 3914, 0, 0], [8105, 4190, 3915, 0, 0], [8106, 4191, 3915, 0, 0], [8107, 4191, 3916, 0, 0], [8108, 4192, 3916, 0, 0], [8109, 4192, 3917, 0, 0], [8110, 4193, 3917, 0, 0], [8111, 4193, 3918, 0, 0], [8112, 4194, 3918, 0, 0], [8113, 4194, 3919, 0, 0], [8114, 4195, 3919, 0, 0], [8115, 4195, 3920, 0, 0], [8116, 4196, 3920, 0, 0], [8117, 4196, 3921, 0, 0], [8118, 4197, 3921, 0, 0], [8119, 4197, 3922, 0, 0], [8120, 4198, 3922, 0, 0], [8121, 4198, 3923, 0, 0], [8122, 4199, 3923, 0, 0], [8123, 4199, 3924, 0, 0], [8124, 4200, 3924, 0, 0], [8125, 4200, 3925, 0, 0], [8126, 4201, 3925, 0, 0], [8127, 4201, 3926, 0, 0], [8128, 4202, 3926, 0, 0], [8129, 4202, 3927, 0, 0], [8130, 4203, 3927, 0, 0], [8131, 4203, 3928, 0, 0], [8132, 4204, 3928, 0, 0], [8133, 4204, 3929, 0, 0], [8134, 4205, 3929, 0, 0], [8135, 4205, 3930, 0, 0], [8136, 4206, 3930, 0, 0], [8137, 4206, 3931, 0, 0], [8138, 4207, 3931, 0, 0], [8139, 4207, 3932, 0, 0], [8140, 4208, 3932, 0, 0], [8141, 4208, 3933, 0, 0], [8142, 4209, 3933, 0, 0], [8143, 4209, 3934, 0, 0], [8144, 4210, 3934, 0, 0], [8145, 4210, 3935, 0, 0], [8146, 4211, 3935, 0, 0], [8147, 4211, 3936, 0, 0], [8148, 4212, 3936, 0, 0], [8149, 4212, 3937, 0, 0], [8150, 4213, 3937, 0, 0], [8151, 4213, 3938, 0, 0], [8152, 4214, 3938, 0, 0], [8153, 4214, 3939, 0, 0], [8154, 4215, 3939, 0, 0], [8155, 4215, 3940, 0, 0], [8156, 4216, 3940, 0, 0], [8157, 4216, 3941, 0, 0], [8158, 4217, 3941, 0, 0], [8159, 4217, 3942, 0, 0], [8160, 4218, 3942, 0, 0], [8161, 4218, 3943, 0, 0], [8162, 4219, 3943, 0, 0], [8163, 4219, 3944, 0, 0], [8164, 4220, 3944, 0, 0], [8165, 4220, 3945, 0, 0], [8166, 4221, 3945, 0, 0], [8167, 4221, 3946, 0, 0], [8168, 4222, 3946, 0, 0], [8169, 4222, 3947, 0, 0], [8170, 4223, 3947, 0, 0], [8171, 4223, 3948, 0, 0], [8172, 4224, 3948, 0, 0], [8173, 4224, 3949, 0, 0], [8174, 4225, 3949, 0, 0], [8175, 4225, 3950, 0, 0], [8176, 4226, 3950, 0, 0], [8177, 4226, 3951, 0, 0], [8178, 4227, 3951, 0, 0], [8179, 4227, 3952, 0, 0], [8180, 4228, 3952, 0, 0], [8181, 4228, 3953, 0, 0], [8182, 4229, 3953, 0, 0], [8183, 4229, 3954, 0, 0], [8184, 4230, 3954, 0, 0], [8185, 4230, 3955, 0, 0], [8186, 4231, 3955, 0, 0], [8187, 4231, 3956, 0, 0], [8188, 4232, 3956, 0, 0], [8189, 4232, 3957, 0, 0], [8190, 4233, 3957, 0, 0], [8191, 4233, 3958, 0, 0], [8192, 4234, 3958, 0, 0], [8193, 4234, 3959, 0, 0], [8194, 4235, 3959, 0, 0], [8195, 4235, 3960, 0, 0], [8196, 4236, 3960, 0, 0], [8197, 4236, 3961, 0, 0], [8198, 4237, 3961, 0, 0], [8199, 4237, 3962, 0, 0], [8200, 4238, 3962, 0, 0], [8201, 4238, 3963, 0, 0], [8202, 4239, 3963, 0, 0], [8203, 4239, 3964, 0, 0], [8204, 4240, 3964, 0, 0], [8205, 4240, 3965, 0, 0], [8206, 4241, 3965, 0, 0], [8207, 4241, 3966, 0, 0], [8208, 4241, 3967, 0, 0], [8209, 4242, 3967, 0, 0], [8210, 4242, 3968, 0, 0], [8211, 4243, 3968, 0, 0], [8212, 4243, 3969, 0, 0], [8213, 4244, 3969, 0, 0], [8214, 4244, 3970, 0, 0], [8215, 4245, 3970, 0, 0], [8216, 4245, 3971, 0, 0], [8217, 4246, 3971, 0, 0], [8218, 4246, 3972, 0, 0], [8219, 4247, 3972, 0, 0], [8220, 4247, 3973, 0, 0], [8221, 4248, 3973, 0, 0], [8222, 4248, 3974, 0, 0], [8223, 4249, 3974, 0, 0], [8224, 4249, 3975, 0, 0], [8225, 4250, 3975, 0, 0], [8226, 4250, 3976, 0, 0], [8227, 4251, 3976, 0, 0], [8228, 4251, 3977, 0, 0], [8229, 4252, 3977, 0, 0], [8230, 4252, 3978, 0, 0], [8231, 4253, 3978, 0, 0], [8232, 4253, 3979, 0, 0], [8233, 4254, 3979, 0, 0], [8234, 4254, 3980, 0, 0], [8235, 4255, 3980, 0, 0], [8236, 4255, 3981, 0, 0], [8237, 4256, 3981, 0, 0], [8238, 4256, 3982, 0, 0], [8239, 4257, 3982, 0, 0], [8240, 4257, 3983, 0, 0], [8241, 4258, 3983, 0, 0], [8242, 4258, 3984, 0, 0], [8243, 4259, 3984, 0, 0], [8244, 4259, 3985, 0, 0], [8245, 4260, 3985, 0, 0], [8246, 4260, 3986, 0, 0], [8247, 4261, 3986, 0, 0], [8248, 4261, 3987, 0, 0], [8249, 4262, 3987, 0, 0], [8250, 4262, 3988, 0, 0], [8251, 4263, 3988, 0, 0], [8252, 4263, 3989, 0, 0], [8253, 4264, 3989, 0, 0], [8254, 4264, 3990, 0, 0], [8255, 4265, 3990, 0, 0], [8256, 4265, 3991, 0, 0], [8257, 4266, 3991, 0, 0], [8258, 4266, 3992, 0, 0], [8259, 4267, 3992, 0, 0], [8260, 4267, 3993, 0, 0], [8261, 4268, 3993, 0, 0], [8262, 4268, 3994, 0, 0], [8263, 4269, 3994, 0, 0], [8264, 4269, 3995, 0, 0], [8265, 4270, 3995, 0, 0], [8266, 4270, 3996, 0, 0], [8267, 4271, 3996, 0, 0], [8268, 4271, 3997, 0, 0], [8269, 4272, 3997, 0, 0], [8270, 4272, 3998, 0, 0], [8271, 4273, 3998, 0, 0], [8272, 4273, 3999, 0, 0], [8273, 4274, 3999, 0, 0], [8274, 4274, 4000, 0, 0], [8275, 4275, 4000, 0, 0], [8276, 4275, 4001, 0, 0], [8277, 4276, 4001, 0, 0], [8278, 4276, 4002, 0, 0], [8279, 4277, 4002, 0, 0], [8280, 4277, 4003, 0, 0], [8281, 4278, 4003, 0, 0], [8282, 4278, 4004, 0, 0], [8283, 4279, 4004, 0, 0], [8284, 4279, 4005, 0, 0], [8285, 4280, 4005, 0, 0], [8286, 4280, 4006, 0, 0], [8287, 4281, 4006, 0, 0], [8288, 4281, 4007, 0, 0], [8289, 4282, 4007, 0, 0], [8290, 4282, 4008, 0, 0], [8291, 4283, 4008, 0, 0], [8292, 4283, 4009, 0, 0], [8293, 4284, 4009, 0, 0], [8294, 4284, 4010, 0, 0], [8295, 4285, 4010, 0, 0], [8296, 4285, 4011, 0, 0], [8297, 4286, 4011, 0, 0], [8298, 4286, 4012, 0, 0], [8299, 4287, 4012, 0, 0], [8300, 4287, 4013, 0, 0], [8301, 4288, 4013, 0, 0], [8302, 4288, 4014, 0, 0], [8303, 4289, 4014, 0, 0], [8304, 4289, 4015, 0, 0], [8305, 4290, 4015, 0, 0], [8306, 4290, 4016, 0, 0], [8307, 4291, 4016, 0, 0], [8308, 4291, 4017, 0, 0], [8309, 4292, 4017, 0, 0], [8310, 4292, 4018, 0, 0], [8311, 4293, 4018, 0, 0], [8312, 4293, 4019, 0, 0], [8313, 4294, 4019, 0, 0], [8314, 4294, 4020, 0, 0], [8315, 4295, 4020, 0, 0], [8316, 4295, 4021, 0, 0], [8317, 4296, 4021, 0, 0], [8318, 4296, 4022, 0, 0], [8319, 4297, 4022, 0, 0], [8320, 4297, 4023, 0, 0], [8321, 4298, 4023, 0, 0], [8322, 4298, 4024, 0, 0], [8323, 4299, 4024, 0, 0], [8324, 4299, 4025, 0, 0], [8325, 4300, 4025, 0, 0], [8326, 4300, 4026, 0, 0], [8327, 4301, 4026, 0, 0], [8328, 4301, 4027, 0, 0], [8329, 4302, 4027, 0, 0], [8330, 4302, 4028, 0, 0], [8331, 4303, 4028, 0, 0], [8332, 4303, 4029, 0, 0], [8333, 4304, 4029, 0, 0], [8334, 4304, 4030, 0, 0], [8335, 4305, 4030, 0, 0], [8336, 4305, 4031, 0, 0], [8337, 4306, 4031, 0, 0], [8338, 4306, 4032, 0, 0], [8339, 4307, 4032, 0, 0], [8340, 4307, 4033, 0, 0], [8341, 4308, 4033, 0, 0], [8342, 4308, 4034, 0, 0], [8343, 4309, 4034, 0, 0], [8344, 4309, 4035, 0, 0], [8345, 4310, 4035, 0, 0], [8346, 4310, 4036, 0, 0], [8347, 4311, 4036, 0, 0], [8348, 4311, 4037, 0, 0], [8349, 4312, 4037, 0, 0], [8350, 4312, 4038, 0, 0], [8351, 4312, 4039, 0, 0], [8352, 4313, 4039, 0, 0], [8353, 4313, 4040, 0, 0], [8354, 4314, 4040, 0, 0], [8355, 4314, 4041, 0, 0], [8356, 4315, 4041, 0, 0], [8357, 4315, 4042, 0, 0], [8358, 4316, 4042, 0, 0], [8359, 4316, 4043, 0, 0], [8360, 4317, 4043, 0, 0], [8361, 4317, 4044, 0, 0], [8362, 4318, 4044, 0, 0], [8363, 4318, 4045, 0, 0], [8364, 4319, 4045, 0, 0], [8365, 4319, 4046, 0, 0], [8366, 4320, 4046, 0, 0], [8367, 4320, 4047, 0, 0], [8368, 4321, 4047, 0, 0], [8369, 4321, 4048, 0, 0], [8370, 4322, 4048, 0, 0], [8371, 4322, 4049, 0, 0], [8372, 4323, 4049, 0, 0], [8373, 4323, 4050, 0, 0], [8374, 4324, 4050, 0, 0], [8375, 4324, 4051, 0, 0], [8376, 4325, 4051, 0, 0], [8377, 4325, 4052, 0, 0], [8378, 4326, 4052, 0, 0], [8379, 4326, 4053, 0, 0], [8380, 4327, 4053, 0, 0], [8381, 4327, 4054, 0, 0], [8382, 4328, 4054, 0, 0], [8383, 4328, 4055, 0, 0], [8384, 4329, 4055, 0, 0], [8385, 4329, 4056, 0, 0], [8386, 4330, 4056, 0, 0], [8387, 4330, 4057, 0, 0], [8388, 4331, 4057, 0, 0], [8389, 4331, 4058, 0, 0], [8390, 4332, 4058, 0, 0], [8391, 4332, 4059, 0, 0], [8392, 4333, 4059, 0, 0], [8393, 4333, 4060, 0, 0], [8394, 4334, 4060, 0, 0], [8395, 4334, 4061, 0, 0], [8396, 4335, 4061, 0, 0], [8397, 4335, 4062, 0, 0], [8398, 4336, 4062, 0, 0], [8399, 4336, 4063, 0, 0], [8400, 4337, 4063, 0, 0], [8401, 4337, 4064, 0, 0], [8402, 4338, 4064, 0, 0], [8403, 4338, 4065, 0, 0], [8404, 4339, 4065, 0, 0], [8405, 4339, 4066, 0, 0], [8406, 4340, 4066, 0, 0], [8407, 4340, 4067, 0, 0], [8408, 4341, 4067, 0, 0], [8409, 4341, 4068, 0, 0], [8410, 4342, 4068, 0, 0], [8411, 4342, 4069, 0, 0], [8412, 4343, 4069, 0, 0], [8413, 4343, 4070, 0, 0], [8414, 4344, 4070, 0, 0], [8415, 4344, 4071, 0, 0], [8416, 4345, 4071, 0, 0], [8417, 4345, 4072, 0, 0], [8418, 4346, 4072, 0, 0], [8419, 4346, 4073, 0, 0], [8420, 4347, 4073, 0, 0], [8421, 4347, 4074, 0, 0], [8422, 4348, 4074, 0, 0], [8423, 4348, 4075, 0, 0], [8424, 4349, 4075, 0, 0], [8425, 4349, 4076, 0, 0], [8426, 4350, 4076, 0, 0], [8427, 4350, 4077, 0, 0], [8428, 4351, 4077, 0, 0], [8429, 4351, 4078, 0, 0], [8430, 4352, 4078, 0, 0], [8431, 4352, 4079, 0, 0], [8432, 4353, 4079, 0, 0], [8433, 4353, 4080, 0, 0], [8434, 4354, 4080, 0, 0], [8435, 4354, 4081, 0, 0], [8436, 4355, 4081, 0, 0], [8437, 4355, 4082, 0, 0], [8438, 4356, 4082, 0, 0], [8439, 4356, 4083, 0, 0], [8440, 4357, 4083, 0, 0], [8441, 4357, 4084, 0, 0], [8442, 4358, 4084, 0, 0], [8443, 4358, 4085, 0, 0], [8444, 4359, 4085, 0, 0], [8445, 4359, 4086, 0, 0], [8446, 4360, 4086, 0, 0], [8447, 4360, 4087, 0, 0], [8448, 4361, 4087, 0, 0], [8449, 4361, 4088, 0, 0], [8450, 4362, 4088, 0, 0], [8451, 4362, 4089, 0, 0], [8452, 4363, 4089, 0, 0], [8453, 4363, 4090, 0, 0], [8454, 4364, 4090, 0, 0], [8455, 4364, 4091, 0, 0], [8456, 4365, 4091, 0, 0], [8457, 4365, 4092, 0, 0], [8458, 4366, 4092, 0, 0], [8459, 4366, 4093, 0, 0], [8460, 4367, 4093, 0, 0], [8461, 4367, 4094, 0, 0], [8462, 4368, 4094, 0, 0], [8463, 4368, 4095, 0, 0], [8464, 4369, 4095, 0, 0], [8465, 4369, 4096, 0, 0], [8466, 4370, 4096, 0, 0], [8467, 4370, 4097, 0, 0], [8468, 4371, 4097, 0, 0], [8469, 4371, 4098, 0, 0], [8470, 4372, 4098, 0, 0], [8471, 4372, 4099, 0, 0], [8472, 4373, 4099, 0, 0], [8473, 4373, 4100, 0, 0], [8474, 4374, 4100, 0, 0], [8475, 4374, 4101, 0, 0], [8476, 4375, 4101, 0, 0], [8477, 4375, 4102, 0, 0], [8478, 4376, 4102, 0, 0], [8479, 4376, 4103, 0, 0], [8480, 4377, 4103, 0, 0], [8481, 4377, 4104, 0, 0], [8482, 4377, 4105, 0, 0], [8483, 4378, 4105, 0, 0], [8484, 4378, 4106, 0, 0], [8485, 4379, 4106, 0, 0], [8486, 4379, 4107, 0, 0], [8487, 4380, 4107, 0, 0], [8488, 4380, 4108, 0, 0], [8489, 4381, 4108, 0, 0], [8490, 4381, 4109, 0, 0], [8491, 4382, 4109, 0, 0], [8492, 4382, 4110, 0, 0], [8493, 4383, 4110, 0, 0], [8494, 4383, 4111, 0, 0], [8495, 4384, 4111, 0, 0], [8496, 4384, 4112, 0, 0], [8497, 4385, 4112, 0, 0], [8498, 4385, 4113, 0, 0], [8499, 4386, 4113, 0, 0], [8500, 4386, 4114, 0, 0], [8501, 4387, 4114, 0, 0], [8502, 4387, 4115, 0, 0], [8503, 4388, 4115, 0, 0], [8504, 4388, 4116, 0, 0], [8505, 4389, 4116, 0, 0], [8506, 4389, 4117, 0, 0], [8507, 4390, 4117, 0, 0], [8508, 4390, 4118, 0, 0], [8509, 4391, 4118, 0, 0], [8510, 4391, 4119, 0, 0], [8511, 4392, 4119, 0, 0], [8512, 4392, 4120, 0, 0], [8513, 4393, 4120, 0, 0], [8514, 4393, 4121, 0, 0], [8515, 4394, 4121, 0, 0], [8516, 4394, 4122, 0, 0], [8517, 4395, 4122, 0, 0], [8518, 4395, 4123, 0, 0], [8519, 4396, 4123, 0, 0], [8520, 4396, 4124, 0, 0], [8521, 4397, 4124, 0, 0], [8522, 4397, 4125, 0, 0], [8523, 4398, 4125, 0, 0], [8524, 4398, 4126, 0, 0], [8525, 4399, 4126, 0, 0], [8526, 4399, 4127, 0, 0], [8527, 4400, 4127, 0, 0], [8528, 4400, 4128, 0, 0], [8529, 4401, 4128, 0, 0], [8530, 4401, 4129, 0, 0], [8531, 4402, 4129, 0, 0], [8532, 4402, 4130, 0, 0], [8533, 4403, 4130, 0, 0], [8534, 4403, 4131, 0, 0], [8535, 4404, 4131, 0, 0], [8536, 4404, 4132, 0, 0], [8537, 4405, 4132, 0, 0], [8538, 4405, 4133, 0, 0], [8539, 4406, 4133, 0, 0], [8540, 4406, 4134, 0, 0], [8541, 4407, 4134, 0, 0], [8542, 4407, 4135, 0, 0], [8543, 4408, 4135, 0, 0], [8544, 4408, 4136, 0, 0], [8545, 4409, 4136, 0, 0], [8546, 4409, 4137, 0, 0], [8547, 4410, 4137, 0, 0], [8548, 4410, 4138, 0, 0], [8549, 4411, 4138, 0, 0], [8550, 4411, 4139, 0, 0], [8551, 4412, 4139, 0, 0], [8552, 4412, 4140, 0, 0], [8553, 4413, 4140, 0, 0], [8554, 4413, 4141, 0, 0], [8555, 4414, 4141, 0, 0], [8556, 4414, 4142, 0, 0], [8557, 4415, 4142, 0, 0], [8558, 4415, 4143, 0, 0], [8559, 4416, 4143, 0, 0], [8560, 4416, 4144, 0, 0], [8561, 4417, 4144, 0, 0], [8562, 4417, 4145, 0, 0], [8563, 4418, 4145, 0, 0], [8564, 4418, 4146, 0, 0], [8565, 4419, 4146, 0, 0], [8566, 4419, 4147, 0, 0], [8567, 4420, 4147, 0, 0], [8568, 4420, 4148, 0, 0], [8569, 4421, 4148, 0, 0], [8570, 4421, 4149, 0, 0], [8571, 4422, 4149, 0, 0], [8572, 4422, 4150, 0, 0], [8573, 4423, 4150, 0, 0], [8574, 4423, 4151, 0, 0], [8575, 4424, 4151, 0, 0], [8576, 4424, 4152, 0, 0], [8577, 4425, 4152, 0, 0], [8578, 4425, 4153, 0, 0], [8579, 4426, 4153, 0, 0], [8580, 4426, 4154, 0, 0], [8581, 4427, 4154, 0, 0], [8582, 4427, 4155, 0, 0], [8583, 4428, 4155, 0, 0], [8584, 4428, 4156, 0, 0], [8585, 4429, 4156, 0, 0], [8586, 4429, 4157, 0, 0], [8587, 4430, 4157, 0, 0], [8588, 4430, 4158, 0, 0], [8589, 4431, 4158, 0, 0], [8590, 4431, 4159, 0, 0], [8591, 4432, 4159, 0, 0], [8592, 4432, 4160, 0, 0], [8593, 4433, 4160, 0, 0], [8594, 4433, 4161, 0, 0], [8595, 4434, 4161, 0, 0], [8596, 4434, 4162, 0, 0], [8597, 4435, 4162, 0, 0], [8598, 4435, 4163, 0, 0], [8599, 4436, 4163, 0, 0], [8600, 4436, 4164, 0, 0], [8601, 4437, 4164, 0, 0], [8602, 4437, 4165, 0, 0], [8603, 4437, 4166, 0, 0], [8604, 4438, 4166, 0, 0], [8605, 4438, 4167, 0, 0], [8606, 4439, 4167, 0, 0], [8607, 4439, 4168, 0, 0], [8608, 4440, 4168, 0, 0], [8609, 4440, 4169, 0, 0], [8610, 4441, 4169, 0, 0], [8611, 4441, 4170, 0, 0], [8612, 4442, 4170, 0, 0], [8613, 4442, 4171, 0, 0], [8614, 4443, 4171, 0, 0], [8615, 4443, 4172, 0, 0], [8616, 4444, 4172, 0, 0], [8617, 4444, 4173, 0, 0], [8618, 4445, 4173, 0, 0], [8619, 4445, 4174, 0, 0], [8620, 4446, 4174, 0, 0], [8621, 4446, 4175, 0, 0], [8622, 4447, 4175, 0, 0], [8623, 4447, 4176, 0, 0], [8624, 4448, 4176, 0, 0], [8625, 4448, 4177, 0, 0], [8626, 4449, 4177, 0, 0], [8627, 4449, 4178, 0, 0], [8628, 4450, 4178, 0, 0], [8629, 4450, 4179, 0, 0], [8630, 4451, 4179, 0, 0], [8631, 4451, 4180, 0, 0], [8632, 4452, 4180, 0, 0], [8633, 4452, 4181, 0, 0], [8634, 4453, 4181, 0, 0], [8635, 4453, 4182, 0, 0], [8636, 4454, 4182, 0, 0], [8637, 4454, 4183, 0, 0], [8638, 4455, 4183, 0, 0], [8639, 4455, 4184, 0, 0], [8640, 4456, 4184, 0, 0], [8641, 4456, 4185, 0, 0], [8642, 4457, 4185, 0, 0], [8643, 4457, 4186, 0, 0], [8644, 4458, 4186, 0, 0], [8645, 4458, 4187, 0, 0], [8646, 4459, 4187, 0, 0], [8647, 4459, 4188, 0, 0], [8648, 4460, 4188, 0, 0], [8649, 4460, 4189, 0, 0], [8650, 4461, 4189, 0, 0], [8651, 4461, 4190, 0, 0], [8652, 4462, 4190, 0, 0], [8653, 4462, 4191, 0, 0], [8654, 4463, 4191, 0, 0], [8655, 4463, 4192, 0, 0], [8656, 4464, 4192, 0, 0], [8657, 4464, 4193, 0, 0], [8658, 4465, 4193, 0, 0], [8659, 4465, 4194, 0, 0], [8660, 4466, 4194, 0, 0], [8661, 4466, 4195, 0, 0], [8662, 4467, 4195, 0, 0], [8663, 4467, 4196, 0, 0], [8664, 4468, 4196, 0, 0], [8665, 4468, 4197, 0, 0], [8666, 4469, 4197, 0, 0], [8667, 4469, 4198, 0, 0], [8668, 4470, 4198, 0, 0], [8669, 4470, 4199, 0, 0], [8670, 4471, 4199, 0, 0], [8671, 4471, 4200, 0, 0], [8672, 4472, 4200, 0, 0], [8673, 4472, 4201, 0, 0], [8674, 4473, 4201, 0, 0], [8675, 4473, 4202, 0, 0], [8676, 4474, 4202, 0, 0], [8677, 4474, 4203, 0, 0], [8678, 4475, 4203, 0, 0], [8679, 4475, 4204, 0, 0], [8680, 4476, 4204, 0, 0], [8681, 4476, 4205, 0, 0], [8682, 4477, 4205, 0, 0], [8683, 4477, 4206, 0, 0], [8684, 4478, 4206, 0, 0], [8685, 4478, 4207, 0, 0], [8686, 4479, 4207, 0, 0], [8687, 4479, 4208, 0, 0], [8688, 4480, 4208, 0, 0], [8689, 4480, 4209, 0, 0], [8690, 4481, 4209, 0, 0], [8691, 4481, 4210, 0, 0], [8692, 4482, 4210, 0, 0], [8693, 4482, 4211, 0, 0], [8694, 4483, 4211, 0, 0], [8695, 4483, 4212, 0, 0], [8696, 4484, 4212, 0, 0], [8697, 4484, 4213, 0, 0], [8698, 4485, 4213, 0, 0], [8699, 4485, 4214, 0, 0], [8700, 4486, 4214, 0, 0], [8701, 4486, 4215, 0, 0], [8702, 4487, 4215, 0, 0], [8703, 4487, 4216, 0, 0], [8704, 4488, 4216, 0, 0], [8705, 4488, 4217, 0, 0], [8706, 4489, 4217, 0, 0], [8707, 4489, 4218, 0, 0], [8708, 4490, 4218, 0, 0], [8709, 4490, 4219, 0, 0], [8710, 4491, 4219, 0, 0], [8711, 4491, 4220, 0, 0], [8712, 4492, 4220, 0, 0], [8713, 4492, 4221, 0, 0], [8714, 4493, 4221, 0, 0], [8715, 4493, 4222, 0, 0], [8716, 4493, 4223, 0, 0], [8717, 4494, 4223, 0, 0], [8718, 4494, 4224, 0, 0], [8719, 4495, 4224, 0, 0], [8720, 4495, 4225, 0, 0], [8721, 4496, 4225, 0, 0], [8722, 4496, 4226, 0, 0], [8723, 4497, 4226, 0, 0], [8724, 4497, 4227, 0, 0], [8725, 4498, 4227, 0, 0], [8726, 4498, 4228, 0, 0], [8727, 4499, 4228, 0, 0], [8728, 4499, 4229, 0, 0], [8729, 4500, 4229, 0, 0], [8730, 4500, 4230, 0, 0], [8731, 4501, 4230, 0, 0], [8732, 4501, 4231, 0, 0], [8733, 4502, 4231, 0, 0], [8734, 4502, 4232, 0, 0], [8735, 4503, 4232, 0, 0], [8736, 4503, 4233, 0, 0], [8737, 4504, 4233, 0, 0], [8738, 4504, 4234, 0, 0], [8739, 4505, 4234, 0, 0], [8740, 4505, 4235, 0, 0], [8741, 4506, 4235, 0, 0], [8742, 4506, 4236, 0, 0], [8743, 4507, 4236, 0, 0], [8744, 4507, 4237, 0, 0], [8745, 4508, 4237, 0, 0], [8746, 4508, 4238, 0, 0], [8747, 4509, 4238, 0, 0], [8748, 4509, 4239, 0, 0], [8749, 4510, 4239, 0, 0], [8750, 4510, 4240, 0, 0], [8751, 4511, 4240, 0, 0], [8752, 4511, 4241, 0, 0], [8753, 4512, 4241, 0, 0], [8754, 4512, 4242, 0, 0], [8755, 4513, 4242, 0, 0], [8756, 4513, 4243, 0, 0], [8757, 4514, 4243, 0, 0], [8758, 4514, 4244, 0, 0], [8759, 4515, 4244, 0, 0], [8760, 4515, 4245, 0, 0], [8761, 4516, 4245, 0, 0], [8762, 4516, 4246, 0, 0], [8763, 4517, 4246, 0, 0], [8764, 4517, 4247, 0, 0], [8765, 4518, 4247, 0, 0], [8766, 4518, 4248, 0, 0], [8767, 4519, 4248, 0, 0], [8768, 4519, 4249, 0, 0], [8769, 4520, 4249, 0, 0], [8770, 4520, 4250, 0, 0], [8771, 4521, 4250, 0, 0], [8772, 4521, 4251, 0, 0], [8773, 4522, 4251, 0, 0], [8774, 4522, 4252, 0, 0], [8775, 4523, 4252, 0, 0], [8776, 4523, 4253, 0, 0], [8777, 4524, 4253, 0, 0], [8778, 4524, 4254, 0, 0], [8779, 4525, 4254, 0, 0], [8780, 4525, 4255, 0, 0], [8781, 4526, 4255, 0, 0], [8782, 4526, 4256, 0, 0], [8783, 4527, 4256, 0, 0], [8784, 4527, 4257, 0, 0], [8785, 4528, 4257, 0, 0], [8786, 4528, 4258, 0, 0], [8787, 4529, 4258, 0, 0], [8788, 4529, 4259, 0, 0], [8789, 4530, 4259, 0, 0], [8790, 4530, 4260, 0, 0], [8791, 4531, 4260, 0, 0], [8792, 4531, 4261, 0, 0], [8793, 4532, 4261, 0, 0], [8794, 4532, 4262, 0, 0], [8795, 4533, 4262, 0, 0], [8796, 4533, 4263, 0, 0], [8797, 4534, 4263, 0, 0], [8798, 4534, 4264, 0, 0], [8799, 4535, 4264, 0, 0], [8800, 4535, 4265, 0, 0], [8801, 4536, 4265, 0, 0], [8802, 4536, 4266, 0, 0], [8803, 4537, 4266, 0, 0], [8804, 4537, 4267, 0, 0], [8805, 4538, 4267, 0, 0], [8806, 4538, 4268, 0, 0], [8807, 4539, 4268, 0, 0], [8808, 4539, 4269, 0, 0], [8809, 4540, 4269, 0, 0], [8810, 4540, 4270, 0, 0], [8811, 4541, 4270, 0, 0], [8812, 4541, 4271, 0, 0], [8813, 4542, 4271, 0, 0], [8814, 4542, 4272, 0, 0], [8815, 4543, 4272, 0, 0], [8816, 4543, 4273, 0, 0], [8817, 4544, 4273, 0, 0], [8818, 4544, 4274, 0, 0], [8819, 4545, 4274, 0, 0], [8820, 4545, 4275, 0, 0], [8821, 4546, 4275, 0, 0], [8822, 4546, 4276, 0, 0], [8823, 4547, 4276, 0, 0], [8824, 4547, 4277, 0, 0], [8825, 4547, 4278, 0, 0], [8826, 4548, 4278, 0, 0], [8827, 4548, 4279, 0, 0], [8828, 4549, 4279, 0, 0], [8829, 4549, 4280, 0, 0], [8830, 4550, 4280, 0, 0], [8831, 4550, 4281, 0, 0], [8832, 4551, 4281, 0, 0], [8833, 4551, 4282, 0, 0], [8834, 4552, 4282, 0, 0], [8835, 4552, 4283, 0, 0], [8836, 4553, 4283, 0, 0], [8837, 4553, 4284, 0, 0], [8838, 4554, 4284, 0, 0], [8839, 4554, 4285, 0, 0], [8840, 4555, 4285, 0, 0], [8841, 4555, 4286, 0, 0], [8842, 4556, 4286, 0, 0], [8843, 4556, 4287, 0, 0], [8844, 4557, 4287, 0, 0], [8845, 4557, 4288, 0, 0], [8846, 4558, 4288, 0, 0], [8847, 4558, 4289, 0, 0], [8848, 4559, 4289, 0, 0], [8849, 4559, 4290, 0, 0], [8850, 4560, 4290, 0, 0], [8851, 4560, 4291, 0, 0], [8852, 4561, 4291, 0, 0], [8853, 4561, 4292, 0, 0], [8854, 4562, 4292, 0, 0], [8855, 4562, 4293, 0, 0], [8856, 4563, 4293, 0, 0], [8857, 4563, 4294, 0, 0], [8858, 4564, 4294, 0, 0], [8859, 4564, 4295, 0, 0], [8860, 4565, 4295, 0, 0], [8861, 4565, 4296, 0, 0], [8862, 4566, 4296, 0, 0], [8863, 4566, 4297, 0, 0], [8864, 4567, 4297, 0, 0], [8865, 4567, 4298, 0, 0], [8866, 4568, 4298, 0, 0], [8867, 4568, 4299, 0, 0], [8868, 4569, 4299, 0, 0], [8869, 4569, 4300, 0, 0], [8870, 4570, 4300, 0, 0], [8871, 4570, 4301, 0, 0], [8872, 4571, 4301, 0, 0], [8873, 4571, 4302, 0, 0], [8874, 4572, 4302, 0, 0], [8875, 4572, 4303, 0, 0], [8876, 4573, 4303, 0, 0], [8877, 4573, 4304, 0, 0], [8878, 4574, 4304, 0, 0], [8879, 4574, 4305, 0, 0], [8880, 4575, 4305, 0, 0], [8881, 4575, 4306, 0, 0], [8882, 4576, 4306, 0, 0], [8883, 4576, 4307, 0, 0], [8884, 4577, 4307, 0, 0], [8885, 4577, 4308, 0, 0], [8886, 4578, 4308, 0, 0], [8887, 4578, 4309, 0, 0], [8888, 4579, 4309, 0, 0], [8889, 4579, 4310, 0, 0], [8890, 4580, 4310, 0, 0], [8891, 4580, 4311, 0, 0], [8892, 4581, 4311, 0, 0], [8893, 4581, 4312, 0, 0], [8894, 4582, 4312, 0, 0], [8895, 4582, 4313, 0, 0], [8896, 4583, 4313, 0, 0], [8897, 4583, 4314, 0, 0], [8898, 4584, 4314, 0, 0], [8899, 4584, 4315, 0, 0], [8900, 4585, 4315, 0, 0], [8901, 4585, 4316, 0, 0], [8902, 4586, 4316, 0, 0], [8903, 4586, 4317, 0, 0], [8904, 4587, 4317, 0, 0], [8905, 4587, 4318, 0, 0], [8906, 4588, 4318, 0, 0], [8907, 4588, 4319, 0, 0], [8908, 4589, 4319, 0, 0], [8909, 4589, 4320, 0, 0], [8910, 4590, 4320, 0, 0], [8911, 4590, 4321, 0, 0], [8912, 4591, 4321, 0, 0], [8913, 4591, 4322, 0, 0], [8914, 4592, 4322, 0, 0], [8915, 4592, 4323, 0, 0], [8916, 4593, 4323, 0, 0], [8917, 4593, 4324, 0, 0], [8918, 4594, 4324, 0, 0], [8919, 4594, 4325, 0, 0], [8920, 4595, 4325, 0, 0], [8921, 4595, 4326, 0, 0], [8922, 4596, 4326, 0, 0], [8923, 4596, 4327, 0, 0], [8924, 4597, 4327, 0, 0], [8925, 4597, 4328, 0, 0], [8926, 4598, 4328, 0, 0], [8927, 4598, 4329, 0, 0], [8928, 4598, 4330, 0, 0], [8929, 4599, 4330, 0, 0], [8930, 4599, 4331, 0, 0], [8931, 4600, 4331, 0, 0], [8932, 4600, 4332, 0, 0], [8933, 4601, 4332, 0, 0], [8934, 4601, 4333, 0, 0], [8935, 4602, 4333, 0, 0], [8936, 4602, 4334, 0, 0], [8937, 4603, 4334, 0, 0], [8938, 4603, 4335, 0, 0], [8939, 4604, 4335, 0, 0], [8940, 4604, 4336, 0, 0], [8941, 4605, 4336, 0, 0], [8942, 4605, 4337, 0, 0], [8943, 4606, 4337, 0, 0], [8944, 4606, 4338, 0, 0], [8945, 4607, 4338, 0, 0], [8946, 4607, 4339, 0, 0], [8947, 4608, 4339, 0, 0], [8948, 4608, 4340, 0, 0], [8949, 4609, 4340, 0, 0], [8950, 4609, 4341, 0, 0], [8951, 4610, 4341, 0, 0], [8952, 4610, 4342, 0, 0], [8953, 4611, 4342, 0, 0], [8954, 4611, 4343, 0, 0], [8955, 4612, 4343, 0, 0], [8956, 4612, 4344, 0, 0], [8957, 4613, 4344, 0, 0], [8958, 4613, 4345, 0, 0], [8959, 4614, 4345, 0, 0], [8960, 4614, 4346, 0, 0], [8961, 4615, 4346, 0, 0], [8962, 4615, 4347, 0, 0], [8963, 4616, 4347, 0, 0], [8964, 4616, 4348, 0, 0], [8965, 4617, 4348, 0, 0], [8966, 4617, 4349, 0, 0], [8967, 4618, 4349, 0, 0], [8968, 4618, 4350, 0, 0], [8969, 4619, 4350, 0, 0], [8970, 4619, 4351, 0, 0], [8971, 4620, 4351, 0, 0], [8972, 4620, 4352, 0, 0], [8973, 4621, 4352, 0, 0], [8974, 4621, 4353, 0, 0], [8975, 4622, 4353, 0, 0], [8976, 4622, 4354, 0, 0], [8977, 4623, 4354, 0, 0], [8978, 4623, 4355, 0, 0], [8979, 4624, 4355, 0, 0], [8980, 4624, 4356, 0, 0], [8981, 4625, 4356, 0, 0], [8982, 4625, 4357, 0, 0], [8983, 4626, 4357, 0, 0], [8984, 4626, 4358, 0, 0], [8985, 4627, 4358, 0, 0], [8986, 4627, 4359, 0, 0], [8987, 4628, 4359, 0, 0], [8988, 4628, 4360, 0, 0], [8989, 4629, 4360, 0, 0], [8990, 4629, 4361, 0, 0], [8991, 4630, 4361, 0, 0], [8992, 4630, 4362, 0, 0], [8993, 4631, 4362, 0, 0], [8994, 4631, 4363, 0, 0], [8995, 4632, 4363, 0, 0], [8996, 4632, 4364, 0, 0], [8997, 4633, 4364, 0, 0], [8998, 4633, 4365, 0, 0], [8999, 4634, 4365, 0, 0], [9000, 4634, 4366, 0, 0], [9001, 4635, 4366, 0, 0], [9002, 4635, 4367, 0, 0], [9003, 4636, 4367, 0, 0], [9004, 4636, 4368, 0, 0], [9005, 4637, 4368, 0, 0], [9006, 4637, 4369, 0, 0], [9007, 4638, 4369, 0, 0], [9008, 4638, 4370, 0, 0], [9009, 4639, 4370, 0, 0], [9010, 4639, 4371, 0, 0], [9011, 4640, 4371, 0, 0], [9012, 4640, 4372, 0, 0], [9013, 4641, 4372, 0, 0], [9014, 4641, 4373, 0, 0], [9015, 4642, 4373, 0, 0], [9016, 4642, 4374, 0, 0], [9017, 4643, 4374, 0, 0], [9018, 4643, 4375, 0, 0], [9019, 4644, 4375, 0, 0], [9020, 4644, 4376, 0, 0], [9021, 4645, 4376, 0, 0], [9022, 4645, 4377, 0, 0], [9023, 4646, 4377, 0, 0], [9024, 4646, 4378, 0, 0], [9025, 4646, 4379, 0, 0], [9026, 4647, 4379, 0, 0], [9027, 4647, 4380, 0, 0], [9028, 4648, 4380, 0, 0], [9029, 4648, 4381, 0, 0], [9030, 4649, 4381, 0, 0], [9031, 4649, 4382, 0, 0], [9032, 4650, 4382, 0, 0], [9033, 4650, 4383, 0, 0], [9034, 4651, 4383, 0, 0], [9035, 4651, 4384, 0, 0], [9036, 4652, 4384, 0, 0], [9037, 4652, 4385, 0, 0], [9038, 4653, 4385, 0, 0], [9039, 4653, 4386, 0, 0], [9040, 4654, 4386, 0, 0], [9041, 4654, 4387, 0, 0], [9042, 4655, 4387, 0, 0], [9043, 4655, 4388, 0, 0], [9044, 4656, 4388, 0, 0], [9045, 4656, 4389, 0, 0], [9046, 4657, 4389, 0, 0], [9047, 4657, 4390, 0, 0], [9048, 4658, 4390, 0, 0], [9049, 4658, 4391, 0, 0], [9050, 4659, 4391, 0, 0], [9051, 4659, 4392, 0, 0], [9052, 4660, 4392, 0, 0], [9053, 4660, 4393, 0, 0], [9054, 4661, 4393, 0, 0], [9055, 4661, 4394, 0, 0], [9056, 4662, 4394, 0, 0], [9057, 4662, 4395, 0, 0], [9058, 4663, 4395, 0, 0], [9059, 4663, 4396, 0, 0], [9060, 4664, 4396, 0, 0], [9061, 4664, 4397, 0, 0], [9062, 4665, 4397, 0, 0], [9063, 4665, 4398, 0, 0], [9064, 4666, 4398, 0, 0], [9065, 4666, 4399, 0, 0], [9066, 4667, 4399, 0, 0], [9067, 4667, 4400, 0, 0], [9068, 4668, 4400, 0, 0], [9069, 4668, 4401, 0, 0], [9070, 4669, 4401, 0, 0], [9071, 4669, 4402, 0, 0], [9072, 4670, 4402, 0, 0], [9073, 4670, 4403, 0, 0], [9074, 4671, 4403, 0, 0], [9075, 4671, 4404, 0, 0], [9076, 4672, 4404, 0, 0], [9077, 4672, 4405, 0, 0], [9078, 4673, 4405, 0, 0], [9079, 4673, 4406, 0, 0], [9080, 4674, 4406, 0, 0], [9081, 4674, 4407, 0, 0], [9082, 4675, 4407, 0, 0], [9083, 4675, 4408, 0, 0], [9084, 4676, 4408, 0, 0], [9085, 4676, 4409, 0, 0], [9086, 4677, 4409, 0, 0], [9087, 4677, 4410, 0, 0], [9088, 4678, 4410, 0, 0], [9089, 4678, 4411, 0, 0], [9090, 4679, 4411, 0, 0], [9091, 4679, 4412, 0, 0], [9092, 4680, 4412, 0, 0], [9093, 4680, 4413, 0, 0], [9094, 4681, 4413, 0, 0], [9095, 4681, 4414, 0, 0], [9096, 4682, 4414, 0, 0], [9097, 4682, 4415, 0, 0], [9098, 4683, 4415, 0, 0], [9099, 4683, 4416, 0, 0], [9100, 4684, 4416, 0, 0], [9101, 4684, 4417, 0, 0], [9102, 4685, 4417, 0, 0], [9103, 4685, 4418, 0, 0], [9104, 4686, 4418, 0, 0], [9105, 4686, 4419, 0, 0], [9106, 4687, 4419, 0, 0], [9107, 4687, 4420, 0, 0], [9108, 4688, 4420, 0, 0], [9109, 4688, 4421, 0, 0], [9110, 4689, 4421, 0, 0], [9111, 4689, 4422, 0, 0], [9112, 4690, 4422, 0, 0], [9113, 4690, 4423, 0, 0], [9114, 4691, 4423, 0, 0], [9115, 4691, 4424, 0, 0], [9116, 4692, 4424, 0, 0], [9117, 4692, 4425, 0, 0], [9118, 4693, 4425, 0, 0], [9119, 4693, 4426, 0, 0], [9120, 4693, 4427, 0, 0], [9121, 4694, 4427, 0, 0], [9122, 4694, 4428, 0, 0], [9123, 4695, 4428, 0, 0], [9124, 4695, 4429, 0, 0], [9125, 4696, 4429, 0, 0], [9126, 4696, 4430, 0, 0], [9127, 4697, 4430, 0, 0], [9128, 4697, 4431, 0, 0], [9129, 4698, 4431, 0, 0], [9130, 4698, 4432, 0, 0], [9131, 4699, 4432, 0, 0], [9132, 4699, 4433, 0, 0], [9133, 4700, 4433, 0, 0], [9134, 4700, 4434, 0, 0], [9135, 4701, 4434, 0, 0], [9136, 4701, 4435, 0, 0], [9137, 4702, 4435, 0, 0], [9138, 4702, 4436, 0, 0], [9139, 4703, 4436, 0, 0], [9140, 4703, 4437, 0, 0], [9141, 4704, 4437, 0, 0], [9142, 4704, 4438, 0, 0], [9143, 4705, 4438, 0, 0], [9144, 4705, 4439, 0, 0], [9145, 4706, 4439, 0, 0], [9146, 4706, 4440, 0, 0], [9147, 4707, 4440, 0, 0], [9148, 4707, 4441, 0, 0], [9149, 4708, 4441, 0, 0], [9150, 4708, 4442, 0, 0], [9151, 4709, 4442, 0, 0], [9152, 4709, 4443, 0, 0], [9153, 4710, 4443, 0, 0], [9154, 4710, 4444, 0, 0], [9155, 4711, 4444, 0, 0], [9156, 4711, 4445, 0, 0], [9157, 4712, 4445, 0, 0], [9158, 4712, 4446, 0, 0], [9159, 4713, 4446, 0, 0], [9160, 4713, 4447, 0, 0], [9161, 4714, 4447, 0, 0], [9162, 4714, 4448, 0, 0], [9163, 4715, 4448, 0, 0], [9164, 4715, 4449, 0, 0], [9165, 4716, 4449, 0, 0], [9166, 4716, 4450, 0, 0], [9167, 4717, 4450, 0, 0], [9168, 4717, 4451, 0, 0], [9169, 4718, 4451, 0, 0], [9170, 4718, 4452, 0, 0], [9171, 4719, 4452, 0, 0], [9172, 4719, 4453, 0, 0], [9173, 4720, 4453, 0, 0], [9174, 4720, 4454, 0, 0], [9175, 4721, 4454, 0, 0], [9176, 4721, 4455, 0, 0], [9177, 4722, 4455, 0, 0], [9178, 4722, 4456, 0, 0], [9179, 4723, 4456, 0, 0], [9180, 4723, 4457, 0, 0], [9181, 4724, 4457, 0, 0], [9182, 4724, 4458, 0, 0], [9183, 4725, 4458, 0, 0], [9184, 4725, 4459, 0, 0], [9185, 4726, 4459, 0, 0], [9186, 4726, 4460, 0, 0], [9187, 4727, 4460, 0, 0], [9188, 4727, 4461, 0, 0], [9189, 4728, 4461, 0, 0], [9190, 4728, 4462, 0, 0], [9191, 4729, 4462, 0, 0], [9192, 4729, 4463, 0, 0], [9193, 4730, 4463, 0, 0], [9194, 4730, 4464, 0, 0], [9195, 4731, 4464, 0, 0], [9196, 4731, 4465, 0, 0], [9197, 4732, 4465, 0, 0], [9198, 4732, 4466, 0, 0], [9199, 4733, 4466, 0, 0], [9200, 4733, 4467, 0, 0], [9201, 4734, 4467, 0, 0], [9202, 4734, 4468, 0, 0], [9203, 4735, 4468, 0, 0], [9204, 4735, 4469, 0, 0], [9205, 4736, 4469, 0, 0], [9206, 4736, 4470, 0, 0], [9207, 4737, 4470, 0, 0], [9208, 4737, 4471, 0, 0], [9209, 4738, 4471, 0, 0], [9210, 4738, 4472, 0, 0], [9211, 4738, 4473, 0, 0], [9212, 4739, 4473, 0, 0], [9213, 4739, 4474, 0, 0], [9214, 4740, 4474, 0, 0], [9215, 4740, 4475, 0, 0], [9216, 4741, 4475, 0, 0], [9217, 4741, 4476, 0, 0], [9218, 4742, 4476, 0, 0], [9219, 4742, 4477, 0, 0], [9220, 4743, 4477, 0, 0], [9221, 4743, 4478, 0, 0], [9222, 4744, 4478, 0, 0], [9223, 4744, 4479, 0, 0], [9224, 4745, 4479, 0, 0], [9225, 4745, 4480, 0, 0], [9226, 4746, 4480, 0, 0], [9227, 4746, 4481, 0, 0], [9228, 4747, 4481, 0, 0], [9229, 4747, 4482, 0, 0], [9230, 4748, 4482, 0, 0], [9231, 4748, 4483, 0, 0], [9232, 4749, 4483, 0, 0], [9233, 4749, 4484, 0, 0], [9234, 4750, 4484, 0, 0], [9235, 4750, 4485, 0, 0], [9236, 4751, 4485, 0, 0], [9237, 4751, 4486, 0, 0], [9238, 4752, 4486, 0, 0], [9239, 4752, 4487, 0, 0], [9240, 4753, 4487, 0, 0], [9241, 4753, 4488, 0, 0], [9242, 4754, 4488, 0, 0], [9243, 4754, 4489, 0, 0], [9244, 4755, 4489, 0, 0], [9245, 4755, 4490, 0, 0], [9246, 4756, 4490, 0, 0], [9247, 4756, 4491, 0, 0], [9248, 4757, 4491, 0, 0], [9249, 4757, 4492, 0, 0], [9250, 4758, 4492, 0, 0], [9251, 4758, 4493, 0, 0], [9252, 4759, 4493, 0, 0], [9253, 4759, 4494, 0, 0], [9254, 4760, 4494, 0, 0], [9255, 4760, 4495, 0, 0], [9256, 4761, 4495, 0, 0], [9257, 4761, 4496, 0, 0], [9258, 4762, 4496, 0, 0], [9259, 4762, 4497, 0, 0], [9260, 4763, 4497, 0, 0], [9261, 4763, 4498, 0, 0], [9262, 4764, 4498, 0, 0], [9263, 4764, 4499, 0, 0], [9264, 4765, 4499, 0, 0], [9265, 4765, 4500, 0, 0], [9266, 4766, 4500, 0, 0], [9267, 4766, 4501, 0, 0], [9268, 4767, 4501, 0, 0], [9269, 4767, 4502, 0, 0], [9270, 4768, 4502, 0, 0], [9271, 4768, 4503, 0, 0], [9272, 4769, 4503, 0, 0], [9273, 4769, 4504, 0, 0], [9274, 4770, 4504, 0, 0], [9275, 4770, 4505, 0, 0], [9276, 4771, 4505, 0, 0], [9277, 4771, 4506, 0, 0], [9278, 4772, 4506, 0, 0], [9279, 4772, 4507, 0, 0], [9280, 4773, 4507, 0, 0], [9281, 4773, 4508, 0, 0], [9282, 4774, 4508, 0, 0], [9283, 4774, 4509, 0, 0], [9284, 4775, 4509, 0, 0], [9285, 4775, 4510, 0, 0], [9286, 4776, 4510, 0, 0], [9287, 4776, 4511, 0, 0], [9288, 4777, 4511, 0, 0], [9289, 4777, 4512, 0, 0], [9290, 4778, 4512, 0, 0], [9291, 4778, 4513, 0, 0], [9292, 4779, 4513, 0, 0], [9293, 4779, 4514, 0, 0], [9294, 4780, 4514, 0, 0], [9295, 4780, 4515, 0, 0], [9296, 4781, 4515, 0, 0], [9297, 4781, 4516, 0, 0], [9298, 4781, 4517, 0, 0], [9299, 4782, 4517, 0, 0], [9300, 4782, 4518, 0, 0], [9301, 4783, 4518, 0, 0], [9302, 4783, 4519, 0, 0], [9303, 4784, 4519, 0, 0], [9304, 4784, 4520, 0, 0], [9305, 4785, 4520, 0, 0], [9306, 4785, 4521, 0, 0], [9307, 4786, 4521, 0, 0], [9308, 4786, 4522, 0, 0], [9309, 4787, 4522, 0, 0], [9310, 4787, 4523, 0, 0], [9311, 4788, 4523, 0, 0], [9312, 4788, 4524, 0, 0], [9313, 4789, 4524, 0, 0], [9314, 4789, 4525, 0, 0], [9315, 4790, 4525, 0, 0], [9316, 4790, 4526, 0, 0], [9317, 4791, 4526, 0, 0], [9318, 4791, 4527, 0, 0], [9319, 4792, 4527, 0, 0], [9320, 4792, 4528, 0, 0], [9321, 4793, 4528, 0, 0], [9322, 4793, 4529, 0, 0], [9323, 4794, 4529, 0, 0], [9324, 4794, 4530, 0, 0], [9325, 4795, 4530, 0, 0], [9326, 4795, 4531, 0, 0], [9327, 4796, 4531, 0, 0], [9328, 4796, 4532, 0, 0], [9329, 4797, 4532, 0, 0], [9330, 4797, 4533, 0, 0], [9331, 4798, 4533, 0, 0], [9332, 4798, 4534, 0, 0], [9333, 4799, 4534, 0, 0], [9334, 4799, 4535, 0, 0], [9335, 4800, 4535, 0, 0], [9336, 4800, 4536, 0, 0], [9337, 4801, 4536, 0, 0], [9338, 4801, 4537, 0, 0], [9339, 4802, 4537, 0, 0], [9340, 4802, 4538, 0, 0], [9341, 4803, 4538, 0, 0], [9342, 4803, 4539, 0, 0], [9343, 4804, 4539, 0, 0], [9344, 4804, 4540, 0, 0], [9345, 4805, 4540, 0, 0], [9346, 4805, 4541, 0, 0], [9347, 4806, 4541, 0, 0], [9348, 4806, 4542, 0, 0], [9349, 4807, 4542, 0, 0], [9350, 4807, 4543, 0, 0], [9351, 4808, 4543, 0, 0], [9352, 4808, 4544, 0, 0], [9353, 4809, 4544, 0, 0], [9354, 4809, 4545, 0, 0], [9355, 4810, 4545, 0, 0], [9356, 4810, 4546, 0, 0], [9357, 4811, 4546, 0, 0], [9358, 4811, 4547, 0, 0], [9359, 4812, 4547, 0, 0], [9360, 4812, 4548, 0, 0], [9361, 4813, 4548, 0, 0], [9362, 4813, 4549, 0, 0], [9363, 4814, 4549, 0, 0], [9364, 4814, 4550, 0, 0], [9365, 4815, 4550, 0, 0], [9366, 4815, 4551, 0, 0], [9367, 4816, 4551, 0, 0], [9368, 4816, 4552, 0, 0], [9369, 4817, 4552, 0, 0], [9370, 4817, 4553, 0, 0], [9371, 4818, 4553, 0, 0], [9372, 4818, 4554, 0, 0], [9373, 4819, 4554, 0, 0], [9374, 4819, 4555, 0, 0], [9375, 4820, 4555, 0, 0], [9376, 4820, 4556, 0, 0], [9377, 4821, 4556, 0, 0], [9378, 4821, 4557, 0, 0], [9379, 4822, 4557, 0, 0], [9380, 4822, 4558, 0, 0], [9381, 4823, 4558, 0, 0], [9382, 4823, 4559, 0, 0], [9383, 4824, 4559, 0, 0], [9384, 4824, 4560, 0, 0], [9385, 4824, 4561, 0, 0], [9386, 4825, 4561, 0, 0], [9387, 4825, 4562, 0, 0], [9388, 4826, 4562, 0, 0], [9389, 4826, 4563, 0, 0], [9390, 4827, 4563, 0, 0], [9391, 4827, 4564, 0, 0], [9392, 4828, 4564, 0, 0], [9393, 4828, 4565, 0, 0], [9394, 4829, 4565, 0, 0], [9395, 4829, 4566, 0, 0], [9396, 4830, 4566, 0, 0], [9397, 4830, 4567, 0, 0], [9398, 4831, 4567, 0, 0], [9399, 4831, 4568, 0, 0], [9400, 4832, 4568, 0, 0], [9401, 4832, 4569, 0, 0], [9402, 4833, 4569, 0, 0], [9403, 4833, 4570, 0, 0], [9404, 4834, 4570, 0, 0], [9405, 4834, 4571, 0, 0], [9406, 4835, 4571, 0, 0], [9407, 4835, 4572, 0, 0], [9408, 4836, 4572, 0, 0], [9409, 4836, 4573, 0, 0], [9410, 4837, 4573, 0, 0], [9411, 4837, 4574, 0, 0], [9412, 4838, 4574, 0, 0], [9413, 4838, 4575, 0, 0], [9414, 4839, 4575, 0, 0], [9415, 4839, 4576, 0, 0], [9416, 4840, 4576, 0, 0], [9417, 4840, 4577, 0, 0], [9418, 4841, 4577, 0, 0], [9419, 4841, 4578, 0, 0], [9420, 4842, 4578, 0, 0], [9421, 4842, 4579, 0, 0], [9422, 4843, 4579, 0, 0], [9423, 4843, 4580, 0, 0], [9424, 4844, 4580, 0, 0], [9425, 4844, 4581, 0, 0], [9426, 4845, 4581, 0, 0], [9427, 4845, 4582, 0, 0], [9428, 4846, 4582, 0, 0], [9429, 4846, 4583, 0, 0], [9430, 4847, 4583, 0, 0], [9431, 4847, 4584, 0, 0], [9432, 4848, 4584, 0, 0], [9433, 4848, 4585, 0, 0], [9434, 4849, 4585, 0, 0], [9435, 4849, 4586, 0, 0], [9436, 4850, 4586, 0, 0], [9437, 4850, 4587, 0, 0], [9438, 4851, 4587, 0, 0], [9439, 4851, 4588, 0, 0], [9440, 4852, 4588, 0, 0], [9441, 4852, 4589, 0, 0], [9442, 4853, 4589, 0, 0], [9443, 4853, 4590, 0, 0], [9444, 4854, 4590, 0, 0], [9445, 4854, 4591, 0, 0], [9446, 4855, 4591, 0, 0], [9447, 4855, 4592, 0, 0], [9448, 4856, 4592, 0, 0], [9449, 4856, 4593, 0, 0], [9450, 4857, 4593, 0, 0], [9451, 4857, 4594, 0, 0], [9452, 4858, 4594, 0, 0], [9453, 4858, 4595, 0, 0], [9454, 4859, 4595, 0, 0], [9455, 4859, 4596, 0, 0], [9456, 4860, 4596, 0, 0], [9457, 4860, 4597, 0, 0], [9458, 4861, 4597, 0, 0], [9459, 4861, 4598, 0, 0], [9460, 4862, 4598, 0, 0], [9461, 4862, 4599, 0, 0], [9462, 4863, 4599, 0, 0], [9463, 4863, 4600, 0, 0], [9464, 4864, 4600, 0, 0], [9465, 4864, 4601, 0, 0], [9466, 4865, 4601, 0, 0], [9467, 4865, 4602, 0, 0], [9468, 4865, 4603, 0, 0], [9469, 4866, 4603, 0, 0], [9470, 4866, 4604, 0, 0], [9471, 4867, 4604, 0, 0], [9472, 4867, 4605, 0, 0], [9473, 4868, 4605, 0, 0], [9474, 4868, 4606, 0, 0], [9475, 4869, 4606, 0, 0], [9476, 4869, 4607, 0, 0], [9477, 4870, 4607, 0, 0], [9478, 4870, 4608, 0, 0], [9479, 4871, 4608, 0, 0], [9480, 4871, 4609, 0, 0], [9481, 4872, 4609, 0, 0], [9482, 4872, 4610, 0, 0], [9483, 4873, 4610, 0, 0], [9484, 4873, 4611, 0, 0], [9485, 4874, 4611, 0, 0], [9486, 4874, 4612, 0, 0], [9487, 4875, 4612, 0, 0], [9488, 4875, 4613, 0, 0], [9489, 4876, 4613, 0, 0], [9490, 4876, 4614, 0, 0], [9491, 4877, 4614, 0, 0], [9492, 4877, 4615, 0, 0], [9493, 4878, 4615, 0, 0], [9494, 4878, 4616, 0, 0], [9495, 4879, 4616, 0, 0], [9496, 4879, 4617, 0, 0], [9497, 4880, 4617, 0, 0], [9498, 4880, 4618, 0, 0], [9499, 4881, 4618, 0, 0], [9500, 4881, 4619, 0, 0], [9501, 4882, 4619, 0, 0], [9502, 4882, 4620, 0, 0], [9503, 4883, 4620, 0, 0], [9504, 4883, 4621, 0, 0], [9505, 4884, 4621, 0, 0], [9506, 4884, 4622, 0, 0], [9507, 4885, 4622, 0, 0], [9508, 4885, 4623, 0, 0], [9509, 4886, 4623, 0, 0], [9510, 4886, 4624, 0, 0], [9511, 4887, 4624, 0, 0], [9512, 4887, 4625, 0, 0], [9513, 4888, 4625, 0, 0], [9514, 4888, 4626, 0, 0], [9515, 4889, 4626, 0, 0], [9516, 4889, 4627, 0, 0], [9517, 4890, 4627, 0, 0], [9518, 4890, 4628, 0, 0], [9519, 4891, 4628, 0, 0], [9520, 4891, 4629, 0, 0], [9521, 4892, 4629, 0, 0], [9522, 4892, 4630, 0, 0], [9523, 4893, 4630, 0, 0], [9524, 4893, 4631, 0, 0], [9525, 4894, 4631, 0, 0], [9526, 4894, 4632, 0, 0], [9527, 4895, 4632, 0, 0], [9528, 4895, 4633, 0, 0], [9529, 4896, 4633, 0, 0], [9530, 4896, 4634, 0, 0], [9531, 4897, 4634, 0, 0], [9532, 4897, 4635, 0, 0], [9533, 4898, 4635, 0, 0], [9534, 4898, 4636, 0, 0], [9535, 4899, 4636, 0, 0], [9536, 4899, 4637, 0, 0], [9537, 4900, 4637, 0, 0], [9538, 4900, 4638, 0, 0], [9539, 4901, 4638, 0, 0], [9540, 4901, 4639, 0, 0], [9541, 4902, 4639, 0, 0], [9542, 4902, 4640, 0, 0], [9543, 4903, 4640, 0, 0], [9544, 4903, 4641, 0, 0], [9545, 4904, 4641, 0, 0], [9546, 4904, 4642, 0, 0], [9547, 4905, 4642, 0, 0], [9548, 4905, 4643, 0, 0], [9549, 4905, 4644, 0, 0], [9550, 4906, 4644, 0, 0], [9551, 4906, 4645, 0, 0], [9552, 4907, 4645, 0, 0], [9553, 4907, 4646, 0, 0], [9554, 4908, 4646, 0, 0], [9555, 4908, 4647, 0, 0], [9556, 4909, 4647, 0, 0], [9557, 4909, 4648, 0, 0], [9558, 4910, 4648, 0, 0], [9559, 4910, 4649, 0, 0], [9560, 4911, 4649, 0, 0], [9561, 4911, 4650, 0, 0], [9562, 4912, 4650, 0, 0], [9563, 4912, 4651, 0, 0], [9564, 4913, 4651, 0, 0], [9565, 4913, 4652, 0, 0], [9566, 4914, 4652, 0, 0], [9567, 4914, 4653, 0, 0], [9568, 4915, 4653, 0, 0], [9569, 4915, 4654, 0, 0], [9570, 4916, 4654, 0, 0], [9571, 4916, 4655, 0, 0], [9572, 4917, 4655, 0, 0], [9573, 4917, 4656, 0, 0], [9574, 4918, 4656, 0, 0], [9575, 4918, 4657, 0, 0], [9576, 4919, 4657, 0, 0], [9577, 4919, 4658, 0, 0], [9578, 4920, 4658, 0, 0], [9579, 4920, 4659, 0, 0], [9580, 4921, 4659, 0, 0], [9581, 4921, 4660, 0, 0], [9582, 4922, 4660, 0, 0], [9583, 4922, 4661, 0, 0], [9584, 4923, 4661, 0, 0], [9585, 4923, 4662, 0, 0], [9586, 4924, 4662, 0, 0], [9587, 4924, 4663, 0, 0], [9588, 4925, 4663, 0, 0], [9589, 4925, 4664, 0, 0], [9590, 4926, 4664, 0, 0], [9591, 4926, 4665, 0, 0], [9592, 4927, 4665, 0, 0], [9593, 4927, 4666, 0, 0], [9594, 4928, 4666, 0, 0], [9595, 4928, 4667, 0, 0], [9596, 4929, 4667, 0, 0], [9597, 4929, 4668, 0, 0], [9598, 4930, 4668, 0, 0], [9599, 4930, 4669, 0, 0], [9600, 4931, 4669, 0, 0], [9601, 4931, 4670, 0, 0], [9602, 4932, 4670, 0, 0], [9603, 4932, 4671, 0, 0], [9604, 4933, 4671, 0, 0], [9605, 4933, 4672, 0, 0], [9606, 4934, 4672, 0, 0], [9607, 4934, 4673, 0, 0], [9608, 4935, 4673, 0, 0], [9609, 4935, 4674, 0, 0], [9610, 4936, 4674, 0, 0], [9611, 4936, 4675, 0, 0], [9612, 4937, 4675, 0, 0], [9613, 4937, 4676, 0, 0], [9614, 4938, 4676, 0, 0], [9615, 4938, 4677, 0, 0], [9616, 4939, 4677, 0, 0], [9617, 4939, 4678, 0, 0], [9618, 4940, 4678, 0, 0], [9619, 4940, 4679, 0, 0], [9620, 4941, 4679, 0, 0], [9621, 4941, 4680, 0, 0], [9622, 4942, 4680, 0, 0], [9623, 4942, 4681, 0, 0], [9624, 4943, 4681, 0, 0], [9625, 4943, 4682, 0, 0], [9626, 4943, 4683, 0, 0], [9627, 4944, 4683, 0, 0], [9628, 4944, 4684, 0, 0], [9629, 4945, 4684, 0, 0], [9630, 4945, 4685, 0, 0], [9631, 4946, 4685, 0, 0], [9632, 4946, 4686, 0, 0], [9633, 4947, 4686, 0, 0], [9634, 4947, 4687, 0, 0], [9635, 4948, 4687, 0, 0], [9636, 4948, 4688, 0, 0], [9637, 4949, 4688, 0, 0], [9638, 4949, 4689, 0, 0], [9639, 4950, 4689, 0, 0], [9640, 4950, 4690, 0, 0], [9641, 4951, 4690, 0, 0], [9642, 4951, 4691, 0, 0], [9643, 4952, 4691, 0, 0], [9644, 4952, 4692, 0, 0], [9645, 4953, 4692, 0, 0], [9646, 4953, 4693, 0, 0], [9647, 4954, 4693, 0, 0], [9648, 4954, 4694, 0, 0], [9649, 4955, 4694, 0, 0], [9650, 4955, 4695, 0, 0], [9651, 4956, 4695, 0, 0], [9652, 4956, 4696, 0, 0], [9653, 4957, 4696, 0, 0], [9654, 4957, 4697, 0, 0], [9655, 4958, 4697, 0, 0], [9656, 4958, 4698, 0, 0], [9657, 4959, 4698, 0, 0], [9658, 4959, 4699, 0, 0], [9659, 4960, 4699, 0, 0], [9660, 4960, 4700, 0, 0], [9661, 4961, 4700, 0, 0], [9662, 4961, 4701, 0, 0], [9663, 4962, 4701, 0, 0], [9664, 4962, 4702, 0, 0], [9665, 4963, 4702, 0, 0], [9666, 4963, 4703, 0, 0], [9667, 4964, 4703, 0, 0], [9668, 4964, 4704, 0, 0], [9669, 4965, 4704, 0, 0], [9670, 4965, 4705, 0, 0], [9671, 4966, 4705, 0, 0], [9672, 4966, 4706, 0, 0], [9673, 4967, 4706, 0, 0], [9674, 4967, 4707, 0, 0], [9675, 4968, 4707, 0, 0], [9676, 4968, 4708, 0, 0], [9677, 4969, 4708, 0, 0], [9678, 4969, 4709, 0, 0], [9679, 4970, 4709, 0, 0], [9680, 4970, 4710, 0, 0], [9681, 4971, 4710, 0, 0], [9682, 4971, 4711, 0, 0], [9683, 4972, 4711, 0, 0], [9684, 4972, 4712, 0, 0], [9685, 4973, 4712, 0, 0], [9686, 4973, 4713, 0, 0], [9687, 4974, 4713, 0, 0], [9688, 4974, 4714, 0, 0], [9689, 4975, 4714, 0, 0], [9690, 4975, 4715, 0, 0], [9691, 4976, 4715, 0, 0], [9692, 4976, 4716, 0, 0], [9693, 4977, 4716, 0, 0], [9694, 4977, 4717, 0, 0], [9695, 4978, 4717, 0, 0], [9696, 4978, 4718, 0, 0], [9697, 4979, 4718, 0, 0], [9698, 4979, 4719, 0, 0], [9699, 4980, 4719, 0, 0], [9700, 4980, 4720, 0, 0], [9701, 4981, 4720, 0, 0], [9702, 4981, 4721, 0, 0], [9703, 4982, 4721, 0, 0], [9704, 4982, 4722, 0, 0], [9705, 4982, 4723, 0, 0], [9706, 4983, 4723, 0, 0], [9707, 4983, 4724, 0, 0], [9708, 4984, 4724, 0, 0], [9709, 4984, 4725, 0, 0], [9710, 4985, 4725, 0, 0], [9711, 4985, 4726, 0, 0], [9712, 4986, 4726, 0, 0], [9713, 4986, 4727, 0, 0], [9714, 4987, 4727, 0, 0], [9715, 4987, 4728, 0, 0], [9716, 4988, 4728, 0, 0], [9717, 4988, 4729, 0, 0], [9718, 4989, 4729, 0, 0], [9719, 4989, 4730, 0, 0], [9720, 4990, 4730, 0, 0], [9721, 4990, 4731, 0, 0], [9722, 4991, 4731, 0, 0], [9723, 4991, 4732, 0, 0], [9724, 4992, 4732, 0, 0], [9725, 4992, 4733, 0, 0], [9726, 4993, 4733, 0, 0], [9727, 4993, 4734, 0, 0], [9728, 4994, 4734, 0, 0], [9729, 4994, 4735, 0, 0], [9730, 4995, 4735, 0, 0], [9731, 4995, 4736, 0, 0], [9732, 4996, 4736, 0, 0], [9733, 4996, 4737, 0, 0], [9734, 4997, 4737, 0, 0], [9735, 4997, 4738, 0, 0], [9736, 4998, 4738, 0, 0], [9737, 4998, 4739, 0, 0], [9738, 4999, 4739, 0, 0]]
                for (let optionId of optionIds) {
                    let assignedCounts;
                    if (usableOptionIds.includes(optionId)) {

                        let targetCapacity = prova[avaibleCapacity/25>>0][optionId]
                        assignedCounts = this.chunkTroopsToHaul(targetCapacity, availableTroopCounts, haulFactor);
                    } else {
                        assignedCounts = new TroopCounts();
                    }            
                    assignedCountsByOption.set(optionId, assignedCounts);
                    availableTroopCounts = availableTroopCounts.subtract(assignedCounts);
                }
        
                return assignedCountsByOption;
            }
        
            chunkTroopsToHaul(targetCapacity, availableTroopCounts, haulFactor = 1.0) {
                let assignedTroopCounts = new TroopCounts();
                let capacities = {};
                for (let chunk of this.preferences.troopOrder) {            
                    if (targetCapacity < 0) {
                        break;
                    }
        
                    let availableCapacity = 0;
                    for (let troopType of chunk) {
                        let troopCount = availableTroopCounts[troopType];
                        capacities[troopType] = this.troopUtil.carryCapacity(troopType, haulFactor);
                        availableCapacity += troopCount * capacities[troopType];
                    }
                    let chunkRatio = Math.min(1, targetCapacity / availableCapacity);
        
                    for (let troopType of chunk) {
                        let troopCount = availableTroopCounts[troopType];                
                        assignedTroopCounts[troopType] = Math.floor(troopCount * chunkRatio);
                        targetCapacity -= assignedTroopCounts[troopType] * capacities[troopType];
                    }
        
                    if (targetCapacity > 0) {
                        this.troopsToTopOff(targetCapacity, availableTroopCounts, assignedTroopCounts, chunk, capacities)
                            .each(function(troopType, count) {
                                targetCapacity -= count * (capacities[troopType] || 0);
                                assignedTroopCounts[troopType] += count;
                            });
                    }
        
                }
                return assignedTroopCounts;
            }
        
            /**
             * @param {int} targetCapacity 
             * @param {TroopCounts} availableTroopCounts 
             * @param {TroopCounts} assignedTroopCounts 
             * @param {string[]} troopTypes
             * @return {TroopCounts}
             */
            troopsToTopOff(targetCapacity, availableTroopCounts, assignedTroopCounts, troopTypes, capacities) {
                let extraCounts = new TroopCounts();
        
                while (targetCapacity > 0) {
                    let unassignedExists = false;
                    let closestType = null;
                    let smallestDiff = Number.MAX_SAFE_INTEGER;
                    
                    for (let troopType of troopTypes) {
                        if (availableTroopCounts[troopType] > assignedTroopCounts[troopType] + extraCounts[troopType]) {
                            unassignedExists = true;
        
                            let diff = Math.abs(targetCapacity - capacities[troopType]);
                            if (diff < smallestDiff) {
                                smallestDiff = diff;
                                closestType = troopType;
                            }
                        }
                    }
        
                    if (!unassignedExists) {
                        break;
                    }
        
                    if (targetCapacity < Math.abs(targetCapacity - capacities[closestType])) {
                        // adding more troops would put us farther from the target than we already are
                        break;
                    }
                    extraCounts[closestType] += 1;
                    targetCapacity -= capacities[closestType];
                }
        
                return extraCounts;
            }
        
        }
        
        
        
        // EXTERNAL MODULE: ./src/Widget/AbstractWidget.js
        var AbstractWidget = __webpack_require__(2);
        
        // EXTERNAL MODULE: ./conf/ImageSrc.js
        var ImageSrc = __webpack_require__(3);
        
        // CONCATENATED MODULE: ./src/Widget/ScavengePreferencesWidget.js
        
        
        
        
        
        
        
        class ScavengePreferencesWidget_ScavengePreferencesWidget extends AbstractWidget["a" /* AbstractWidget */] {
        
            /**
             * @param {ScavengeTroopsAssignerPreferences} preferences
             * @param {Map<ScavengeOption>} scavengeOptions
             * @param {string[]} sendableTroopTypes
             */
            constructor(preferences, scavengeOptions, sendableTroopTypes) {
                super();
                this.preferences = preferences;
                this.scavengeOptions = scavengeOptions;
                this.sendableTroopTypes = sendableTroopTypes;
                this.initStructure();
                this.initTroopOrder();
                this.watchSelf();
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
                this.$targetDuration = this.$el.find('.target-duration');
                this.$options = this.$el.find('.options-section input');
                this.$modes = this.$el.find(`input[name='mode']`);
                this.$troopsAllowed = this.$el.find('.troop-allowed');
                this.$troopsReserved = this.$el.find('.troop-reserved');
                this.$troopGroups = this.$el.find('.troop-group');
            }
        
            createHtml() {
                return `<div class="twcheese-scavenge-preferences-widget">
                    <h3>Preferences</h3>
                    ${this.createTimingSectionHtml()}
                    <br/>
                    ${this.createOptionsSectionHtml()}
                    <br/>
                    <table style="width: 100%;">
                        <tr>
                            <td>${this.createTroopsSectionHtml()}</td>
                            <td style="width: 20px;"></td>
                            <td>${this.createTroopsOrderSectionHtml()}</td>
                        </tr>
                    </table>
                </div>`;
            }
        
            createTimingSectionHtml() {
                let overallSeconds = this.preferences.targetDurationSeconds;
                let hours = Math.floor(overallSeconds / 3600);
                let minutes = String(Math.floor(overallSeconds / 60) % 60).padStart(2, '0');
                let durationPattern = "\\d+:\\d{2}";
        
                let mode = this.preferences.mode;
                let modeSane = ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_SANE_PERSON;
                let modeAddict = ScavengeTroopsAssignerPreferences_ScavengeTroopsAssignerPreferences.MODE_ADDICT;        
                let checkSane = (mode === modeSane) ? 'checked' : '';
                let checkAddict = (mode === modeAddict) ? 'checked' : '';
        
                return `
                    <table class="vis timing-section">
                        <tr><th>Timing</th></tr>
                        <tr>
                            <td>
                                Target duration:
                                <input type="text" class="target-duration" value="${hours}:${minutes}" placeholder="2:00" required pattern="${durationPattern}">
                                hours:minutes
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="mode" value="${modeSane}" ${checkSane}>
                                    Max-out duration of best options first.
                                    <br/><span class="hint">(recommended if you'll be afk)</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="mode" value="${modeAddict}" ${checkAddict}>
                                    Aim for same duration across all options.
                                    <br/><span class="hint">(recommended if you can immediately resend whenever)</span>
                                </label>    
                            </td>
                        </tr>
                    </table>
                `;
            }
        
            createOptionsSectionHtml() {
                let optionsArr = [...this.scavengeOptions.values()];
        
                return `
                    <table class="vis options-section">
                        <tr><th colspan="2">Options to use</th></tr>
                        ${optionsArr.map(option => this.createOptionRowHtml(option)).join('')}
                    </table>
                `;
            }
        
            createOptionRowHtml(option) {
                let checked = '';
                if (this.preferences.isOptionAllowed(option.id)) {
                    checked = 'checked';
                }
        
                return `<tr>
                    <td>
                        <label>
                            <input type="checkbox" ${checked} data-option-id="${option.id}">
                            <img src="${ImageSrc["a" /* ImageSrc */].scavengeOption(option.id)}">
                            <span>${option.getName()}</span>
                        </label>
                    </td>
                    <td>(${option.getLootPercent()}% carry capacity)</td>
                </tr>`;
            }
        
            createTroopsSectionHtml() {
                let helpTooltip = [
                    `Reserved troops won't be sent scavenging.`,
                    `<br/>`,
                    `<br/>Example:`,
                    ` :: You have 500 spears and 100 are reserved. At most, 400 spears would be sent scavenging.`
                ].join('');
        
                return `
                    <table class="vis troops-section">
                        <tr>
                            <th>Use</th>
                            <th>Reserved <img src="${ImageSrc["a" /* ImageSrc */].info}" title="${helpTooltip}" class="tooltip info"></th>
                        </tr>
                        ${this.sendableTroopTypes.map(type => this.createTroopRowHtml(type)).join('')}
                    </table>
                `;
            }
        
            createTroopRowHtml(troopType) {
                let checked = this.preferences.isTroopTypeAllowed(troopType) ? 'checked' : '';
                let reservedCount = this.preferences.getReservedCount(troopType);
                
                return `<tr>
                    <td>
                        <input class="troop-allowed" type="checkbox" value="${troopType}" ${checked}>
                        <img src="${ImageSrc["a" /* ImageSrc */].troopIcon(troopType)}">
                    </td>
                    <td><input class="troop-reserved" data-troop-type="${troopType}" type="number" min="0" value="${reservedCount}"></td>
                </tr>`;
            }
        
            createTroopsOrderSectionHtml() {
                let helpTooltip = [
                    `Troops in upper groups will be sent before troops in lower groups.`,
                    `<br/>`,
                    `<br/>Troops within the same group will be split proportionally by count available.`
                ].join('');
        
                return `
                    <table class="vis troop-order-section">
                        <tr>
                            <th>Order <img src="${ImageSrc["a" /* ImageSrc */].info}" title="${helpTooltip}" class="tooltip info"></th>
                        </tr>
                        ${this.sendableTroopTypes.map(() => '<tr><td><div class="troop-group"></div></td></tr>').join('')}
                    </table>
                `;
            }
        
            initTroopOrder() {
                for (let [i, chunk] of Object.entries(this.preferences.troopOrder)) {
                    let $group = this.$troopGroups.eq(i);
                    for (let troopType of chunk) {
                        if (!Troops_troopUtil.existsOnWorld(troopType)) { // todo: this is dirty. the preferences shouldn't be initialized with invalid troop types
                            continue;
                        }
                        let $troopType = $(`<img class="troop" draggable="true" data-troop-type="${troopType}" src="${ImageSrc["a" /* ImageSrc */].troopIcon(troopType)}">`);
                        $group.append($troopType);
                    }
                }
        
                let $draggingTroop;
        
                this.$troopGroups
                    .on('dragover', function(e) {
                        e.preventDefault(); // allows dropping
                    })
                    .on('dragenter', function(e) {
                        $(this).addClass('dragging-over');
                    })
                    .on('dragleave', function(e) {
                        $(this).removeClass('dragging-over');
                    })
                    .on('drop', function(e) {
                        e.preventDefault();
                        $(this).append($draggingTroop);
                        $(this).removeClass('dragging-over');
                        updateTroopOrderPreferences();
                    });
        
                this.$troopGroups.find('.troop')
                    .on('dragstart', function(e) {
                        let dt = e.originalEvent.dataTransfer;
                        $draggingTroop = $(this);
                        dt.setDragImage($draggingTroop.clone()[0], 0, 0);
                        dt.dropEffect = 'move';
                        $draggingTroop.addClass('dragging');
                    })
                    .on('dragend', function(e) {
                        $draggingTroop.removeClass('dragging');
                        $draggingTroop = null;
                    });
        
                let updateTroopOrderPreferences = () => {
                    let order = determineTroopOrder();
                    this.preferences.setTroopOrder(order);
                }
        
                let determineTroopOrder = () => {
                    let chunks = [];
                    this.$troopGroups.each(function() {
                        let $group = $(this);
                        let $troops = $group.find('.troop');
                        if ($troops.length < 1) {
                            return;
                        }
                        let chunk = [];
                        $troops.each(function() {
                            chunk.push($(this).data('troopType'));
                        });
                        chunks.push(chunk);
                    });            
                    return chunks;
                }
            }
        
            watchSelf() {
                let prefs = this.preferences;
        
                this.$targetDuration.on('change', function() {
                    if (!this.checkValidity()) {
                        return;
                    }
                    let [, hours, minutes] = this.value.match(/(\d+):(\d+)/);
        
                    let durationSeconds = parseInt(hours)*3600 + parseInt(minutes)*60;
                    if (durationSeconds < 3600) {
                        this.setCustomValidity('must be at least 1 hour');
                        return;
                    } else {
                        this.setCustomValidity('');
                    }
        
                    prefs.setTargetDuration(durationSeconds);
                });
        
                this.$options.on('change', function() {
                    let $option = $(this);
                    prefs.setOptionAllowed($option.data('optionId'), $option.prop('checked'));
                });
        
                this.$modes.on('change', () => {
                    let mode = this.$modes.filter(':checked').val();
                    prefs.setMode(mode);
                });
        
                this.$troopsAllowed.on('change', function() {
                    let $this = $(this);
                    prefs.setTroopAllowed($this.val(), $this.prop('checked'));
                });
        
                this.$troopsReserved.on('input', function() {
                    if (!this.checkValidity()) {
                        return;
                    }
                    let count = parseInt(this.value) || 0;
                    prefs.setReservedCount(this.dataset.troopType, count);
                });
            }
        
        }
        
        
        Object(UI["b" /* initCss */])(`
        
            .twcheese-scavenge-preferences-widget .options-section,
            .twcheese-scavenge-preferences-widget .timing-section,
            .twcheese-scavenge-preferences-widget .troops-section,
            .twcheese-scavenge-preferences-widget .troop-order-section {
                width: 100%;
            }
        
            
            .twcheese-scavenge-preferences-widget .info {
                width: 14px;
                height: 14px;
                vertical-align: middle;
                position: relative;
                top: -1px;
            }
        
            .twcheese-scavenge-preferences-widget .target-duration {
                width: 50px;
            }
        
            .twcheese-scavenge-preferences-widget .timing-section .hint {
                font-size: x-small;
                margin-left: 25px;
            }
        
            .twcheese-scavenge-preferences-widget .timing-section input[type='radio'] {
                vertical-align: middle;
            }
        
            .twcheese-scavenge-preferences-widget .options-section td {
                height: 22px;
            }
        
            .twcheese-scavenge-preferences-widget .options-section input,
            .twcheese-scavenge-preferences-widget .options-section span {
                vertical-align: middle;
            }
        
            .twcheese-scavenge-preferences-widget .options-section img {
                vertical-align: middle;
                width: 18px;
                height: 18px;
            }
        
            .twcheese-scavenge-preferences-widget .troops-section td,
            .twcheese-scavenge-preferences-widget .troop-order-section td {
                height: 26px;
            }
        
            .twcheese-scavenge-preferences-widget .troops-section td:first-child {
                width: 45px;
            }   
        
            .twcheese-scavenge-preferences-widget .troops-section img,
            .twcheese-scavenge-preferences-widget .troops-section input {
                vertical-align: middle;
            }
        
            .twcheese-scavenge-preferences-widget .troop-reserved {
                width: 70px;
            }
        
            .twcheese-scavenge-preferences-widget .troop-group {
                position: relative;
                border: 1px solid black;
                border-radius: 3px;
                height: 18px;
                width: 176px;
                padding: 3px;
            }
        
            .twcheese-scavenge-preferences-widget .troop-group.dragging-over {
                background-color: darkOrange;
            }
        
            .twcheese-scavenge-preferences-widget .troop {
                display: inline-block;
                width: 18px;
                height: 18px;
                cursor: move;
                margin: 0 3px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        
            .twcheese-scavenge-preferences-widget .troop.dragging {
                opacity: 0.1;
            }
            
        `);
        
        
        // EXTERNAL MODULE: ./src/Models/Debug/Build/ProcessFactory.js
        var ProcessFactory = __webpack_require__(7);
        
        // CONCATENATED MODULE: ./dist/tool/cfg/debug/ASS/Default.js
        let processCfg = { phases: [{"type":"PhaseQuestion","internalName":"Entry","questions":[{"type":"QuestionFreeForm","ask":"What's broken?","placeholderText":"e.g. \"it doesn't focus the Start button\"","minResponseLength":10}]}] };
        
        
        // CONCATENATED MODULE: ./src/ToolSetup/ASS.js
        
        
        
        
        
        
        
        
        
        
        
        let initialized = false;
        let ASS_haulFactor, troopsAssigner, scavengeOptions;
        
        async function useTool() {
            if (!atScavengeScreen()) {
                suggestRedirectToScavengeScreen();
                return;
            }
        
            if (!initialized) {
                await init();
                initialized = true;
            }
        
            prepareBestOption();
        }
        
        
        async function init() {
            await ensureRemoteConfigsUpdated();
        
            let models = scrapeScavengeModels(document);
            troopsAssigner = new ScavengeTroopsAssigner_ScavengeTroopsAssigner(models.options, models.sendableTroopTypes, Troops_troopUtil);
            ASS_haulFactor = models.haulFactor;
        
            let exportedPreferences = userConfig.get('ASS.troopsAssigner');
            if (exportedPreferences) {
                troopsAssigner.preferences.import(exportedPreferences);
            }
            $(troopsAssigner.preferences).on('change', function() {
                userConfig.set('ASS.troopsAssigner', troopsAssigner.preferences.export());
            });
            scavengeOptions = models.options;
            insertPreferencesLauncher();
        
            insertNarcissim();
        
            Object(UI["b" /* initCss */])(`
                .free_send_button:focus {
                    color: yellow;
                    box-shadow: 0 0 5px 3px yellow;
                }
            `);
        
            afterScavengingStarted(() => prepareBestOption(false));
        }
        
        
        function atScavengeScreen() {
            let here = document.location.href;
            return here.includes('screen=place') && here.includes('mode=scavenge');
        }
        
        
        function suggestRedirectToScavengeScreen() {
            suggestRedirect({
                message: 'To use this, you must be at the scavenging screen.',
                screen: 'place',
                screenName: 'Scavenging Screen',
                uriParams: {
                    mode: 'scavenge'
                },
                skippableId: 'Tool:ASS'
            });
        }
        
        
        function insertPreferencesLauncher() {
            let $launcher = $(`<a href="#">&raquo; preferences</a>`)
                .css({
                    fontSize: 'small',
                    marginLeft: '10px'
                })
                .on('click', function(e) {
                    e.preventDefault();
                    openPreferencesPopup();
                });
        
            $('#content_value').find('h3').eq(0).append($launcher);
        }
        
        
        function insertNarcissim() {
            let $narcissism = $(`<span>Script created by <a href="https://forum.tribalwars.net/index.php?members/28484">cheesasaurus</a></span>`)
                .css({
                    float: 'right',
                    fontSize: 'xx-small',
                    fontWeight: 'normal'
                });
        
            $('#content_value').find('h3').eq(0).append($narcissism);
        }
        
        
        function openPreferencesPopup() {
            let onClose = prepareBestOption;
        
            Dialog.show('twcheese-scavenge-preferences-popup', function($container) {        
                let widget = new ScavengePreferencesWidget_ScavengePreferencesWidget(troopsAssigner.preferences, scavengeOptions, troopsAssigner.sendableTroopTypes);
                widget.appendTo($container);
            }, onClose);
        }
        
        
        function prepareBestOption(informUserOfIssues = true) {
            let usableOptionIds = scrapeUsableOptionIds(document);
            usableOptionIds = troopsAssigner.adjustUsableOptionIds(usableOptionIds);
            if (usableOptionIds.length < 1) {
                if (informUserOfIssues) {
                    window.UI.ErrorMessage(`Can't scavenge right now because there's no usable options`);
                }        
                return;
            }
        
            let availableTroops = scrapeAvailableTroopCounts(document);
            if (!troopsAssigner.areTroopsSufficient(availableTroops)) {
                if (informUserOfIssues) {
                    window.UI.ErrorMessage(`Not enough troops available to scavenge right now`);
                }
                return;
            }
            
            let assignedTroopsByOption = troopsAssigner.assignTroops(usableOptionIds, availableTroops, ASS_haulFactor);
        
            let optionId = usableOptionIds[usableOptionIds.length - 1];
            fillTroops(assignedTroopsByOption.get(optionId));
            focusStartButton(optionId);
        }
        
        
        function focusStartButton(optionId) {
            $('.free_send_button')[optionId - 1].focus();
        }
        
        
        function fillTroops(troopCounts) {
            troopCounts.each(function(troopType, count) {
                $(`.unitsInput[name='${troopType}']`)
                    .val(count)
                    .trigger('change');
            });
        }
        
        
        function afterScavengingStarted(doSomething) {
            let observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    let didScavengingStart = $(mutation.addedNodes).is('.active-view');
                    if (didScavengingStart) {
                        doSomething();
                    }
                });
            });
            
            $('.scavenge-option').each(function() {
                observer.observe(this, {
                    childList: true,
                    subtree: true
                });
            });
        }
        
        
        // register tool ///////////////////////////////////////////////////////
        
        let processFactory = new ProcessFactory["a" /* ProcessFactory */]({});
        
        function newDebugProcess() {
            let name = 'Tool: Another Scavenging Script';
            return processFactory.create(name, processCfg, true);
        }
        
        
        window.TwCheese.registerTool({
            id: 'ASS',
            use: useTool,
            getDebugProcess: newDebugProcess
        });
        
        /***/ }),
        /* 14 */
        /***/ (function(module, __webpack_exports__, __webpack_require__) {
        
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        
        // EXTERNAL MODULE: ./src/Widget/AbstractWidget.js
        var AbstractWidget = __webpack_require__(2);
        
        // EXTERNAL MODULE: ./src/Util/UI.js
        var UI = __webpack_require__(1);
        
        // EXTERNAL MODULE: ./src/Models/Debug/DebugEvents.js
        var DebugEvents = __webpack_require__(0);
        
        // EXTERNAL MODULE: ./src/Models/Debug/PhaseTypes.js
        var PhaseTypes = __webpack_require__(5);
        
        // EXTERNAL MODULE: ./src/Models/Debug/QuestionTypes.js
        var QuestionTypes = __webpack_require__(4);
        
        // CONCATENATED MODULE: ./src/Widget/Debug/QuestionWidget.js
        
        
        
        
        
        class QuestionWidget_QuestionWidget extends AbstractWidget["a" /* AbstractWidget */] {
            constructor(question) {
                super();
                this.question = question;
                this.initStructure(question);
                this.watchSelf();
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
                this.$answers = this.$el.find('.twcheese-debug-question-answer');
            }
        
            createHtml() {
                let options = [];
        
                for (let i = 0; i < this.question.options.length; i++) {
                    let option = this.question.options[i];
                    options.push(`
                        <div class="twcheese-debug-question-answer ${option.className}" data-index="${i}">
                            ${option.text}
                        </div>
                    `);
                }
        
                switch (this.question.getType()) {
                    case QuestionTypes["a" /* QuestionTypes */].FREE_FORM:
                        return this._createHtmlQuestionFreeForm();
                    case QuestionTypes["a" /* QuestionTypes */].VALUE:
                        return this._createHtmlQuestionAboutValue(options);
                    case QuestionTypes["a" /* QuestionTypes */].SELECT:
                        return this._createHtmlQuestionSelect(options);
                    default:
                        throw Error('unrecognized question type');    
                }                
            }
        
            _createHtmlQuestionSelect(options) {
                return `
                    <div class="twcheese-debug-question">
                        <div class="twcheese-debug-question-text">${this.question.text}</div>
                        <hr/>
                        ${options.join('')}
                    </div>
                `;
            }
        
            _createHtmlQuestionFreeForm() {
                let option = this.question.options[0];
        
                return `
                    <div class="twcheese-debug-question">
                        <div class="twcheese-debug-question-text">${this.question.text}</div>
                        <hr/>
                        <textarea
                            placeholder="${Object(UI["a" /* escapeHtml */])(option.text)}"
                            class="twcheese-debug-question-answer ${option.className}"
                            data-index="0"
                        >${Object(UI["a" /* escapeHtml */])(option.value)}</textarea>
                    </div>
                `;
            }
        
            _createHtmlQuestionAboutValue(options) {
                let valueRendered = this.createHtmlForValue(this.question.value);
        
                return `
                    <div class="twcheese-debug-question">
                        <div class="twcheese-debug-question-text">${this.question.text}</div>
                        <hr/>
                        <div class="twcheese-debug-question-content">
                            <div class="twcheese-debug-question-value">${valueRendered}</div>
                            <div style="padding-left: 10px;">${options.join('')}</div>
                        </div>                
                    </div>
                `;
            }
        
            createHtmlForValue(value) {
                if (typeof value === 'undefined' || value === null) {
                    return '<span class="non-existent">non-existent</span>';
                }
                if (typeof value.toDebugString === 'function') {
                    return Object(UI["a" /* escapeHtml */])(value.toDebugString());
                }
                if (typeof value === 'object') {
                    return Object.entries(value).map((input) => {
                        let [propName, propVal] = input;
                        return `<div class="twcheese-debug-value-iter">
                            <div class="key">${this.createLabelForValue(propVal, propName)}</div>
                            <div class="value">${this.createHtmlForValue(propVal)}</div>
                        </div>`;
                    }).join('');
                }
                return Object(UI["a" /* escapeHtml */])(value.toString());
            }
        
            createLabelForValue(value, defaultLabel) {
                if (typeof value.imageSrc === 'function') {
                    return `<image src="${value.imageSrc()}" />`;
                }
                return defaultLabel;
            }
        
            watchSelf() {
                if (this.question.getType() === QuestionTypes["a" /* QuestionTypes */].FREE_FORM) {
                    this.$answers.on('input', (e) => {
                        let $answer = $(e.target);
                        this.question.options[0].setValue($answer.val());
                    });
                    return;
                }
        
                this.$answers.on('click', (e) => {
                    this.$answers.removeClass('active');
                    let $answer = $(e.target).addClass('active');
                    this.question.setSelectedOption($answer.data('index'));
                });
            }
        
        }
        
        
        Object(UI["b" /* initCss */])(`
            .twcheese-debug-question {
                margin-bottom: 40px;
            }
        
            .twcheese-debug-question-text {
                font-size: 13px;
                font-weight: 700;
                color: rgb(200, 200, 200);
            }
        
            .twcheese-debug-question hr {
                height: 1px;
                background-color: white;
                border: none;
                opacity: 0.2;
            }
        
            .twcheese-debug-question-content {
                display: flex;
                justify-content: space-between;        
                align-items: center;
            }
        
            .twcheese-debug-question-value {
                line-height: 20px;
            }
            .twcheese-debug-question-value img {
                vertical-align: middle;
            }
        
            .twcheese-debug-question-value .non-existent {
                font-style: italic;
            }
        
            .twcheese-debug-question-answer {
                margin: 10px 0;
                background-color: rgb(23, 23, 23);
                border: 1px solid rgb(75, 75, 75);
                height: 30px;
                border-radius: 15px;
                line-height: 30px;
                white-space: nowrap;
                padding: 0 10px;
                text-align: center;
                cursor: pointer;
            }
            .twcheese-debug-question-answer:hover {
                border-color: rgb(150, 150, 150);
            }
            .twcheese-debug-question-answer.active {
                border-color: darkOrange;
                background-color: black;
            }
            
            .twcheese-debug-question-answer.correct {
                border-color: rgb(0, 70, 0);
            }
            .twcheese-debug-question-answer.correct:hover {
                border-color: rgb(0, 100, 0);
            }
            .twcheese-debug-question-answer.correct.active {
                border-color: rgb(0, 150, 0);
            }
        
            .twcheese-debug-question-answer.incorrect {
                border-color: rgb(100, 0, 0);
            }
            .twcheese-debug-question-answer.incorrect:hover {
                border-color: rgb(175, 0, 0);
            }
            .twcheese-debug-question-answer.incorrect.active {
                border-color: rgb(250, 0, 0);
            }
        
            .twcheese-debug-question-answer.free-form {
                border: 1px solid rgb(75, 75, 75);
                border-radius: 3px;
                white-space: pre-wrap;
                color: inherit;
                padding: 2px 5px;
                text-align: left;
                line-height: normal;
                height: 120px;
                width: calc(100% - 6px);
                resize: vertical;
                cursor: text;
            }
        
            .twcheese-debug-value-iter {
                display: flex;
            }
            .twcheese-debug-value-iter > div:nth-child(2) {
                padding-left: 5px;
            }
        
        `);
        
        
        
        // CONCATENATED MODULE: ./src/Widget/Debug/AttemptWidget.js
        
        
        
        
        class AttemptWidget_AttemptWidget extends AbstractWidget["a" /* AbstractWidget */] {
            constructor(phase) {
                super();
                this.phase = phase;
                this.initStructure();
                this.watchSelf();
                this.$abort.hide();
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
                this.$abort = this.$el.find('.twcheese-debug-attempt-abort');
            }
        
            createHtml() {
                if (this.phase.instructions) {
                    return this.createHtmlForUserInteraction();
                }
                return this.createHtmlForAutoAttempt();
            }
        
            createHtmlForUserInteraction() {
                return `
                    <div class="twcheese-debug-attempt">
                        <p>${this.phase.instructions}</p>
                        <div style="text-align: center;">
                            <div class="twcheese-debug-attempt-abort">Can't do it</div>
                        </div>
                    </div>
                `;
            }
        
            createHtmlForAutoAttempt() {
                return `
                    <div class="twcheese-debug-attempt">
                        Standby for <i>${this.phase.name}</i>.
                    </div>
                `;
            }
        
            watchSelf() {
                this.$abort.on('click', () => this.phase.userAbort());
            }    
        
            appendTo($el) {
                setTimeout(() => this.showAbortButton(), 10000);
                return super.appendTo($el);
            }
        
            showAbortButton() {
                this.$abort.show();
                $(this).trigger('change');
            }
        
        }
        
        
        Object(UI["b" /* initCss */])(`
            .twcheese-debug-attempt-abort {
                display: inline-block;
                margin: 10px 0;
                background-color: rgb(23, 23, 23);
                border: 1px solid rgb(75, 75, 75);
                height: 30px;
                border-radius: 15px;
                line-height: 30px;
                white-space: nowrap;
                padding: 0 10px;
                text-align: center;
                cursor: pointer;
            }
            .twcheese-debug-attempt-abort:hover {
                border-color: rgb(150, 150, 150);
            }   
        `);
        
        
        
        // CONCATENATED MODULE: ./src/Widget/Debug/ReportWidget.js
        
        
        
        
        
        class ReportWidget_ReportWidget extends AbstractWidget["a" /* AbstractWidget */] {
            constructor(phase) {
                super();
                this.phase = phase;
                this.initStructure();
                this.watchPhase();
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
            }
        
            createHtml() {
                return `<div class="twcheese-debug-report"><i>Submitting report...</i></div>`;
            }
        
            watchPhase() {
                $(this.phase).on(DebugEvents["a" /* DebugEvents */].BUG_REPORT_SUCCEEDED, e => {
                    this.$el.html(`<p>Bug reported!</p>`);
                });
            }
        
        }
        
        
        Object(UI["b" /* initCss */])(`
            .twcheese-debug-report {
                min-height: 200px;
            }    
        `);
        
        
        
        // CONCATENATED MODULE: ./src/Widget/Debug/DebuggerWidget.js
        
        
        
        
        
        
        
        
        
        class DebuggerWidget_DebuggerWidget extends AbstractWidget["a" /* AbstractWidget */] {
            constructor() {
                super();
                this.initStructure();
                this.watchSelf();
                this.watchGlobal();
                this.process = null;
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
                this.$header = this.$el.find('.twcheese-debugger-header');
                this.$content = this.$el.find('.twcheese-debugger-content');
                this.$nav = this.$el.find('.twcheese-debugger-nav');
                this.$next = this.$el.find('.twcheese-debugger-next');        
                this.$processName = this.$el.find('.twcheese-debugger-process-name');
                this.$inspector = this.$el.find('.twcheese-debugger-inspector');
                this.$iframe = this.$inspector.find('iframe');
                this.$iframeOverlay = this.$inspector.find('.iframe-overlay');
            }
        
            createHtml() {
                return `
                    <div class="twcheese-debugger">
                        <div>
                            <div class="twcheese-debugger-header">
                                <div>REPORT A BUG</div>
                                <div class="twcheese-debugger-process-name"></div>
                            </div>
                            <div class="twcheese-debugger-content">blah bla blucci</div>
                            <div class="twcheese-debugger-nav">
                                <div class="twcheese-debugger-next"></div>
                            </div>
                        </div>
                        <div class="twcheese-debugger-inspector">
                            <iframe scrolling="no"></iframe>
                            <div class="iframe-overlay"></div>
                        </div>
                    </div>
                `;
            }
        
            watchSelf() {
                this.$next.on('click', () => {
                    this.process.goToNextPhase();
                });
            }
        
            watchGlobal() {
                $(window).on('resize', () => this.updateScrolling());
            }
        
            startProcessForLastUsedToolIfSensible() {
                if (this.process) {
                    return;
                }
                this.startProcess(window.TwCheese.newDebugProcess(TwCheese.lastToolUsedId));
            }
        
            startProcess(process) {
                this.$next.hide();
                this.process = process;
                this.$processName.text(process.name);
                
                $(process).on(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_READY, () => {
                    if (this.process.hasNextPhase()) {
                        this.$next.show();
                    }
                });
                $(process).on(DebugEvents["a" /* DebugEvents */].PHASE_COMPLETION_NOT_READY, () => {
                    this.$next.hide();
                });
                $(process).on(DebugEvents["a" /* DebugEvents */].PHASE_CHANGED, () => {
                    this.renderCurrentPhase();
                });
        
                process.start();
            }
        
            renderCurrentPhase() {
                this.$inspector.hide();
                this.$content.html('');
                if (!this.process.hasNextPhase()) {
                    this.$next.hide();
                }
        
                let phase = this.process.getCurrentPhase();
        
                switch (phase.getType()) {
                    case PhaseTypes["a" /* PhaseTypes */].QUESTION:   this._renderPhaseQuestion(phase);   break;
                    case PhaseTypes["a" /* PhaseTypes */].ATTEMPT:    this._renderPhaseAttempt(phase);    break;
                    case PhaseTypes["a" /* PhaseTypes */].REPORT:     this._renderPhaseReport(phase);     break;
                    default: throw Error('unrecognized phase');
                }
        
                setTimeout(() => this.updateScrolling(), 200);
                $(this).trigger('change');
            }
        
            _renderPhaseQuestion(phase) {
                for (let question of phase.questions) {
                    (new QuestionWidget_QuestionWidget(question)).appendTo(this.$content);
                }
                if (typeof phase.examinedHtml === 'string') {
                    this.openInspector(phase.examinedHtml);
                }
            }
        
            _renderPhaseAttempt(phase) {
                let widget = (new AttemptWidget_AttemptWidget(phase)).appendTo(this.$content);
                $(widget).on('change', () => this.updateScrolling());
            }
        
            _renderPhaseReport(phase) {
                (new ReportWidget_ReportWidget(phase)).appendTo(this.$content);
            }
        
            updateScrolling() {
                // https://github.com/rochal/jQuery-slimScroll/issues/16
                if (this.$content.parent('.slimScrollDiv').size() > 0) {
                    this.$content.parent().replaceWith(this.$content);
                    this.$content.height('auto');
                }        
        
                let availableVert = this.$el.innerHeight() - this.$header.outerHeight() - this.$nav.outerHeight();
        
                this.$content.slimScroll({
                    height: Math.min(availableVert, this.$content.outerHeight()),
                    color: 'rgb(150, 150, 150)',
                    opacity: 0.3,
                    borderRadius: 0,
                    alwaysVisible: true
                });
            }
        
            openInspector(html) {
                let win = this.$iframe[0].contentWindow;
                let doc = win.document;
                doc.open();
                doc.write(html);
                doc.close();
        
                setTimeout(() => {
                    if (typeof win.Timing !== 'undefined') {
                        win.Timing.pause();
                    }
                    this.$inspector.show(); // must be visible for size to be computed
                    let width = Math.min(win.document.body.scrollWidth, this.calcMaxIframeWidth());
                    this.$iframe.css({width});
                    this.$iframeOverlay.css({width});
                    $(this).trigger('change');
                }, 200);
            }
        
            calcMaxIframeWidth() {
                let menuWidth = 50;
                let margin = 20;
                return document.documentElement.clientWidth - this.$header.outerWidth() - menuWidth - 2*margin;
            }
        
        }
        
        
        Object(UI["b" /* initCss */])(`
            .twcheese-debugger {
                height: 100%;
                display: flex;
            }
        
            .twcheese-debugger a {
                font-weight: normal;
                font-size: 12px;
                color: rgb(63, 156, 214);
                text-decoration: underline;
            }
            .twcheese-debugger a:hover {
                color: rgb(96, 174, 221);
            }
        
            .twcheese-debugger-header {
                background-color: rgb(56, 56, 56);
                padding: 9px 20px;
                font-weight: 700;
                font-size: 14px;
                color: rgb(200, 200, 200);
                cursor: default;
                min-width: 300px;
            }
        
            .twcheese-debugger-process-name {
                font-weight: normal;
                font-size: 11px;
                margin-top: 3px;
                white-space: nowrap;
            }
        
            .twcheese-debugger-content {
                box-sizing: border-box;
                padding: 20px;
            }
        
            .twcheese-debugger-nav {
                padding: 20px 10px;
                height: 20px;
            }
        
            .twcheese-debugger-next {
                width: 0;
                height: 0;
                border: 10px solid transparent;
                cursor: pointer;
                webkit-filter: brightness(0.7);
                filter: brightness(0.7);
            }
        
            .twcheese-debugger-next {
                border-left: 20px solid white;
                float: right;
            }
        
            .twcheese-debugger-next:hover {
                webkit-filter: brightness(1);
                filter: brightness(1);
            }
        
            /* inspector */
        
            .twcheese-debugger-inspector {
                position: relative;
                width: 100%;
                background-color: rgb(30, 30, 30);
                line-height: unset;
            }
        
            .twcheese-debugger-inspector iframe,
            .twcheese-debugger-inspector .iframe-overlay {
                width: 500px;
                height: calc(100% - 40px);
                margin: 20px;
                border: none;
                overflow: hidden;
            }
        
            .twcheese-debugger-inspector .iframe-overlay {
                position: absolute;
                top: 0;
                left: 0;
                background-color: cyan;
                opacity: 0.1;
            }
        
        `);
        
        
        // EXTERNAL MODULE: ./conf/ImageSrc.js
        var ImageSrc = __webpack_require__(3);
        
        // CONCATENATED MODULE: ./src/Widget/SidebarWidget.js
        
        
        
        
        
        
        class SidebarWidget_SidebarWidget extends AbstractWidget["a" /* AbstractWidget */] {
            constructor() {
                super();
                this.initStructure();
                this.watchSelf();
                this.isExpandedVert = false;
                this.activeMenuItem = null;
        
                this.contents = {
                    bugReporter: (new DebuggerWidget_DebuggerWidget()).appendTo(this.$content)
                };
                this.watchContents();
            }
        
            initStructure() {
                this.$el = $(this.createHtml().trim());
                this.$menuMain = this.$el.find('.menu-item.main');
                this.$mainIcon = this.$menuMain.find('.icon');
                this.$menuBug = this.$el.find('.menu-item.bug');
                this.$menuGithub = this.$el.find('.menu-item.github');
                this.$content = this.$el.find('.twcheese-sidebar-content');
            }
        
            createHtml() {
                return `
                    <div id="twcheese-sidebar">
                        <div class="twcheese-sidebar-menu">
                            <div class="menu-item main"><div class="icon"></div></div>
                            <div class="menu-item bug"><div class="icon"></div></div>
                            <a class="menu-item github"
                              href="https://github.com/cheesasaurus/twcheese/releases"
                              target="_blank"
                            ><div class="icon"></div></a>
                        </div>
                        <div class="twcheese-sidebar-content"></div>
                    </div>
                `;
            }
        
            watchSelf() {
                this.$menuMain.on('click', () => this.toggleExpand());
        
                this.$menuBug.on('click', () => {
                    if (this.$menuBug.hasClass('active')) {
                        this.$menuBug.removeClass('active');
                        this.activeMenuItem = null;
                        this.shrinkHoriz();
                    } else {
                        this.contents.bugReporter.startProcessForLastUsedToolIfSensible();
                        this.$menuBug.addClass('active');
                        this.activeMenuItem = 'bug';
                        this.expandHoriz();
                    }
                });
            }
        
            watchContents() {
                $.each(this.contents, (key, content) => {
                    $(content).on('change', () => {
                        if (this.activeMenuItem) {
                            this.$el.width(this.$el[0].scrollWidth);
                        }                
                    })
                });
            }
        
            async toggleExpand() {
                let durationVert = 200;
                let durationHoriz = this.activeMenuItem ? 200 : 0;
                let durationSpin = durationVert + durationHoriz;
                this.spinMainIcon(durationSpin);
                
                if (this.isExpandedVert) {
                    if (this.activeMenuItem) {
                        await this.shrinkHoriz(durationHoriz);
                    }
                    this.shrinkVert(durationVert);
                } else {
                    await this.expandVert(durationVert);
                    if (this.activeMenuItem) {
                        this.expandHoriz(durationHoriz);
                    }
                }        
            }
        
            spinMainIcon(durationMs) {
                $({deg: 0}).animate({deg: 180}, {
                    duration: durationMs,
                    step: (angle) => {
                        this.$mainIcon.css({
                            transform: 'rotate(' + angle + 'deg)'
                        });
                    }
                });
            }
        
            async expandVert(durationMs) {
                this.isExpandedVert = true;
                return new Promise((resolve, reject) => {
                    let options = {
                        duration: durationMs,
                        complete: () => {
                            this.$menuGithub.show();
                            resolve();
                        }
                    };
                    this.$el.animate({
                        height: '100%',
                        easing: 'linear'
                    }, options);
                });
            }
        
            shrinkVert(durationMs) {
                this.$menuGithub.hide();
                this.isExpandedVert = false;
                this.$el.animate({
                    height: '50px'
                }, durationMs);
            }
        
            expandHoriz(durationMs) {
                let options = {
                    duration: durationMs,
                };
                this.$el.animate({
                    width: this.$el[0].scrollWidth
                }, options);
            }
        
            async shrinkHoriz(durationMs) {
                return new Promise((resolve, reject) => {
                    let options = {
                        duration: durationMs,
                        complete: resolve
                    };
                    this.$el.animate({
                        width: '50px'
                    }, options);
                });
            }
        
        
        }
        
        
        Object(UI["b" /* initCss */])(`
            #twcheese-sidebar {
                position: fixed;
                display: inline-block;
                z-index: 20000;
                top: 0;
                left: 0;
                height: 50px;
                max-height: 100%;
                overflow-x: hidden;
                overflow-y: hidden;
                width: 50px;
                max-width: 100%;
            }
        
            /* menu **************************************************/
        
            .twcheese-sidebar-menu {
                position: relative;
                display: block;
                width: 50px;
                height: 100%;
                background-color: rgb(51, 51, 51);
            }
        
            .twcheese-sidebar-menu.expanded {
                height: 100%;
            }
        
            .twcheese-sidebar-menu .menu-item {
                position: relative;
                display: block;
                box-sizing: border-box;
                width: 50px;
                height: 50px;
                cursor: pointer;
            }
        
            .twcheese-sidebar-menu .menu-item .icon {
                position: absolute;
                box-sizing: border-box;
                position: absolute;
                width: 50px;
                height: 50px;
                
                background-size: 36px 36px;
                background-repeat: no-repeat;
                background-position: center;
            }
            
        
            .twcheese-sidebar-menu .menu-item.main {
                background-color: darkOrange;
            }
        
            .twcheese-sidebar-menu .menu-item.main .icon {
                background-image: url('${ImageSrc["a" /* ImageSrc */].sidebarMain}');
            }
            .twcheese-sidebar-menu .menu-item.main:hover .icon {
                -webkit-filter: brightness(2);
                filter: brightness(2);
            }
        
            .twcheese-sidebar-menu .menu-item.bug .icon {
                background-image: url('${ImageSrc["a" /* ImageSrc */].sidebarBug}');
                -webkit-filter: brightness(0.7);
                filter: brightness(0.7);
            }
        
            .twcheese-sidebar-menu .menu-item.github {
                position: absolute;
                display: none;
                bottom: 0;
                margin-top: 50px;
            }
        
            .twcheese-sidebar-menu .menu-item.github .icon {
                background-image: url('${ImageSrc["a" /* ImageSrc */].sidebarGithub}');
                -webkit-filter: brightness(0.7);
                filter: brightness(0.7);
            }
        
            .twcheese-sidebar-menu .menu-item:hover .icon,
            .twcheese-sidebar-menu .menu-item.active .icon {
                -webkit-filter: brightness(1);
                filter: brightness(1);
            }
        
            /* content  **************************************************/
        
            .twcheese-sidebar-content {
                position: absolute;
                display: block;
                left: 50px;
                height: 100%;
                top: 0;
                background-color: rgb(37, 37, 37);
                color: rgb(187, 187, 187);
            }
        
        
        `);
        
        
        
        // CONCATENATED MODULE: ./src/ToolSetup/Sidebar.js
        
        
        TwCheese.registerTool({
            id: 'Sidebar',
            use: () => {
                let widget = new SidebarWidget_SidebarWidget();
                widget.appendTo($('body'));
            },
            getDebugProcess: () => null
        });
        
        
        /***/ })
        /******/ ]);

        if (!sidebarInitd) {
            TwCheese.useTool('Sidebar');
        }
    }

    TwCheese.useTool(toolId);
})();
