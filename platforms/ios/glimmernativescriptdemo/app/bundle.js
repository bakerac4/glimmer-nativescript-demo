module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GlimmerNativescriptDemo/component.ts": "../src/ui/components/GlimmerNativescriptDemo/component.ts",
	"./PageOne/component.ts": "../src/ui/components/PageOne/component.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$";

/***/ }),

/***/ "../src/ui/components sync recursive component.ts$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./GlimmerNativescriptDemo/component.ts": "../src/ui/components/GlimmerNativescriptDemo/component.ts",
	"./PageOne/component.ts": "../src/ui/components/PageOne/component.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../src/ui/components sync recursive component.ts$";

/***/ }),

/***/ "../src/ui/components/GlimmerNativescriptDemo/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlimmerNativescriptDemo; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");

class GlimmerNativescriptDemo extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sQ0FBQyxPQUFPLDhCQUErQixTQUFRLFNBQVM7Q0FDN0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyTmF0aXZlc2NyaXB0RGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG59XG4iXX0=

/***/ }),

/***/ "../src/ui/components/PageOne/component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageOne; });
/* harmony import */ var _glimmer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@glimmer/component/dist/modules/es2017/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

class PageOne extends _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.title = "Welcome to glimmer";
        this.buttonText = "Click Me!";
    }
    buttonClick() {
        console.log('in next');
        this.title = "Ive heard it both ways";
    }
}
__decorate([
    _glimmer_component__WEBPACK_IMPORTED_MODULE_0__["tracked"]
], PageOne.prototype, "title", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsTUFBTSxDQUFDLE9BQU8sY0FBZSxTQUFRLFNBQVM7SUFBOUM7O1FBRUksVUFBSyxHQUFHLG9CQUFvQixDQUFDO1FBRTdCLGVBQVUsR0FBRyxXQUFXLENBQUE7SUFNNUIsQ0FBQztJQUpHLFdBQVc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBUkc7SUFEQyxPQUFPO3NDQUNxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQsIHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlT25lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAdHJhY2tlZFxuICAgIHRpdGxlID0gXCJXZWxjb21lIHRvIGdsaW1tZXJcIjtcblxuICAgIGJ1dHRvblRleHQgPSBcIkNsaWNrIE1lIVwiXG5cbiAgICBidXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG5leHQnKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiSXZlIGhlYXJkIGl0IGJvdGggd2F5c1wiO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports
;
    if (false) {}


/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-glimmer/dist/index.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/file-system/file-system.js");
/* harmony import */ var tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (root|page)\\.(xml|css|js|ts|scss)$");
            global.registerWebpackModules(context);
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

const resolverDelegate = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["ResolverDelegate"]();
const resolver = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["Resolver"]();
function addTemplates(appFolder) {
    let templatesFile = appFolder.getFile("templates.json");
    let templates = templatesFile.readTextSync();
    // console.log(`Templates: ${templates}`);
    JSON.parse(templates).forEach(template => {
        resolverDelegate.addComponent(template.name, template.handle, template.source, template.capabilities);
    });
}
function addComponents(appFolder) {
    let componentsFile = appFolder.getFile("components.json");
    let components = componentsFile.readTextSync();
    console.log(`About to resolve require`);
    JSON.parse(components).forEach(component => {
        console.log(`About to resolve require`);
        const classFile = __webpack_require__("../src/ui/components sync recursive ^\\.\\/.*\\/component\\.ts$")(`./${component.name}/component.ts`);
        resolver.addComponent(component.name, classFile.default);
    });
}
function requireAll(r) { r.keys().forEach(r); }
requireAll(__webpack_require__("../src/ui/components sync recursive component.ts$"));
try {
    let appFolder = tns_core_modules_file_system__WEBPACK_IMPORTED_MODULE_1__["knownFolders"].currentApp();
    addTemplates(appFolder);
    addComponents(appFolder);
    const app = new nativescript_glimmer__WEBPACK_IMPORTED_MODULE_0__["default"]('GlimmerNativescriptDemo', {}, resolverDelegate, resolver);
    app.render();
}
catch (errors) {
    console.log(errors);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sbUJBQW1CLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUVoQyxzQkFBc0IsU0FBUztJQUMzQixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFHLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELHVCQUF1QixTQUFTO0lBQzVCLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxJQUFJLFVBQVUsR0FBRyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUU1RSxJQUFJLENBQUM7SUFDRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixNQUFNLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUFDLEtBQUssQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF0aXZlc2NyaXB0R2xpbW1lciwgeyBSZXNvbHZlckRlbGVnYXRlLCBSZXNvbHZlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nbGltbWVyJztcbmltcG9ydCB7IGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5jb25zdCByZXNvbHZlckRlbGVnYXRlID0gbmV3IFJlc29sdmVyRGVsZWdhdGUoKTtcbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKCk7XG5cbmZ1bmN0aW9uIGFkZFRlbXBsYXRlcyhhcHBGb2xkZXIpIHtcbiAgICBsZXQgdGVtcGxhdGVzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKFwidGVtcGxhdGVzLmpzb25cIik7XG4gICAgbGV0IHRlbXBsYXRlcyA9IHRlbXBsYXRlc0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gICAgLy8gY29uc29sZS5sb2coYFRlbXBsYXRlczogJHt0ZW1wbGF0ZXN9YCk7XG4gICAgSlNPTi5wYXJzZSh0ZW1wbGF0ZXMpLmZvckVhY2godGVtcGxhdGUgPT4ge1xuICAgICAgICByZXNvbHZlckRlbGVnYXRlLmFkZENvbXBvbmVudCh0ZW1wbGF0ZS5uYW1lLCB0ZW1wbGF0ZS5oYW5kbGUsIHRlbXBsYXRlLnNvdXJjZSwgdGVtcGxhdGUuY2FwYWJpbGl0aWVzKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpIHtcbiAgICBsZXQgY29tcG9uZW50c0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcImNvbXBvbmVudHMuanNvblwiKTtcbiAgICBsZXQgY29tcG9uZW50cyA9IGNvbXBvbmVudHNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICBKU09OLnBhcnNlKGNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgICAgICBjb25zdCBjbGFzc0ZpbGUgPSByZXF1aXJlKGAuLi9zcmMvdWkvY29tcG9uZW50cy8ke2NvbXBvbmVudC5uYW1lfS9jb21wb25lbnQudHNgKTtcbiAgICAgICAgcmVzb2x2ZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjbGFzc0ZpbGUuZGVmYXVsdCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vc3JjL3VpL2NvbXBvbmVudHMvJywgdHJ1ZSwgL2NvbXBvbmVudC50cyQvKSk7XG5cbnRyeSB7XG4gICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgYWRkVGVtcGxhdGVzKGFwcEZvbGRlcik7XG4gICAgYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpO1xuICAgIGNvbnN0IGFwcCA9IG5ldyBOYXRpdmVzY3JpcHRHbGltbWVyKCdHbGltbWVyTmF0aXZlc2NyaXB0RGVtbycsIHt9LCByZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcik7XG4gICAgYXBwLnJlbmRlcigpO1xufSBjYXRjaChlcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xufVxuIl19
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

/******/ });