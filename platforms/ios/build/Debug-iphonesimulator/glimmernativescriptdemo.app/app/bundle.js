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
//
// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('../src/ui/components/', true, /component.ts$/));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sbUJBQW1CLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUVoQyxzQkFBc0IsU0FBUztJQUMzQixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFHLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELHVCQUF1QixTQUFTO0lBQzVCLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxJQUFJLFVBQVUsR0FBRyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsRUFBRTtBQUNGLGtEQUFrRDtBQUNsRCwrRUFBK0U7QUFFL0UsSUFBSSxDQUFDO0lBQ0QsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFBQyxLQUFLLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdGl2ZXNjcmlwdEdsaW1tZXIsIHsgUmVzb2x2ZXJEZWxlZ2F0ZSwgUmVzb2x2ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtZ2xpbW1lcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IHRlbXBsYXRlc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInRlbXBsYXRlcy5qc29uXCIpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgcmVzb2x2ZXJEZWxlZ2F0ZS5hZGRDb21wb25lbnQodGVtcGxhdGUubmFtZSwgdGVtcGxhdGUuaGFuZGxlLCB0ZW1wbGF0ZS5zb3VyY2UsIHRlbXBsYXRlLmNhcGFiaWxpdGllcyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbXBvbmVudHMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IGNvbXBvbmVudHNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJjb21wb25lbnRzLmpzb25cIik7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBjb21wb25lbnRzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgSlNPTi5wYXJzZShjb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICAgICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgICAgIHJlc29sdmVyLmFkZENvbXBvbmVudChjb21wb25lbnQubmFtZSwgY2xhc3NGaWxlLmRlZmF1bHQpO1xuICAgIH0pO1xufVxuXG4vL1xuLy8gZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbi8vIHJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9zcmMvdWkvY29tcG9uZW50cy8nLCB0cnVlLCAvY29tcG9uZW50LnRzJC8pKTtcblxudHJ5IHtcbiAgICBsZXQgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbiAgICBhZGRDb21wb25lbnRzKGFwcEZvbGRlcik7XG4gICAgY29uc3QgYXBwID0gbmV3IE5hdGl2ZXNjcmlwdEdsaW1tZXIoJ0dsaW1tZXJOYXRpdmVzY3JpcHREZW1vJywge30sIHJlc29sdmVyRGVsZWdhdGUsIHJlc29sdmVyKTtcbiAgICBhcHAucmVuZGVyKCk7XG59IGNhdGNoKGVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG59XG4iXX0=
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzIHN5bmMgXlxcLlxcLy4qXFwvY29tcG9uZW50XFwudHMkIiwid2VicGFjazovLy8uLi9zcmMvdWkvY29tcG9uZW50cy9HbGltbWVyTmF0aXZlc2NyaXB0RGVtby9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzL1BhZ2VPbmUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vLy4gc3luYyAocm9vdHxwYWdlKVxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGOzs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBMkM7QUFDNUIsc0NBQXNDLDBEQUFTO0FBQzlEO0FBQ0EsMkNBQTJDLDJhOzs7Ozs7OztBQ0gzQztBQUFBO0FBQUE7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDd0Q7QUFDekMsc0JBQXNCLDBEQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFPO0FBQ1g7QUFDQSwyQ0FBMkMsKzhCOzs7Ozs7O0FDckIzQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSxpRjs7Ozs7OztBQ1JBLDJCQUEyQixtQkFBTyxDQUFDLDRDQUE0QztBQUMvRTs7O0FBR0E7QUFDQSxjQUFjLFFBQVM7O0FBRXZCO0FBQ0E7QUFDQSxRQUFRLEtBQVUsRUFBRSxFQUtmOzs7Ozs7Ozs7Ozs7OztBQ2JMLFlBQVksbUJBQU8sQ0FBQywwRUFBdUQ7OztBQUczRSxZQUFZLEtBQVUsRUFBRSxFQXNCZjs7QUFFVCw0QkFBNEIsNEVBQWlFO0FBQzdGOztBQUVBLFFBQVEsbUJBQU8sQ0FBQyx5REFBc0M7QUFDdEQsUUFBK0Y7QUFDbkM7QUFDNUQsNkJBQTZCLHFFQUFnQjtBQUM3QyxxQkFBcUIsNkRBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1RkFBUSxHQUFzQixFQUFFLGVBQWUsY0FBYyxDQUFDO0FBQ3hGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQSxvQkFBb0IseUVBQVk7QUFDaEM7QUFDQTtBQUNBLG9CQUFvQiw0REFBbUIsOEJBQThCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImJ1bmRsZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwLnRzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vR2xpbW1lck5hdGl2ZXNjcmlwdERlbW8vY29tcG9uZW50LnRzXCI6IFwiLi4vc3JjL3VpL2NvbXBvbmVudHMvR2xpbW1lck5hdGl2ZXNjcmlwdERlbW8vY29tcG9uZW50LnRzXCIsXG5cdFwiLi9QYWdlT25lL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL1BhZ2VPbmUvY29tcG9uZW50LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi4vc3JjL3VpL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvY29tcG9uZW50XFxcXC50cyRcIjsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbGltbWVyTmF0aXZlc2NyaXB0RGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNVMEZCVXl4TlFVRk5MRzlDUVVGdlFpeERRVUZETzBGQlF6TkRMRTFCUVUwc1EwRkJReXhQUVVGUExEaENRVUVyUWl4VFFVRlJMRk5CUVZNN1EwRkROMFFpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUTI5dGNHOXVaVzUwSUdaeWIyMGdKMEJuYkdsdGJXVnlMMk52YlhCdmJtVnVkQ2M3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkhiR2x0YldWeVRtRjBhWFpsYzJOeWFYQjBSR1Z0YnlCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZENCN1hHNTlYRzRpWFgwPSIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBDb21wb25lbnQsIHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlT25lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiV2VsY29tZSB0byBnbGltbWVyXCI7XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiQ2xpY2sgTWUhXCI7XG4gICAgfVxuICAgIGJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV4dCcpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJJdmUgaGVhcmQgaXQgYm90aCB3YXlzXCI7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgdHJhY2tlZFxuXSwgUGFnZU9uZS5wcm90b3R5cGUsIFwidGl0bGVcIiwgdm9pZCAwKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dGNHOXVaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQkxFOUJRVThzVTBGQlV5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTFCUVUwc2IwSkJRVzlDTEVOQlFVTTdRVUZEZUVRc1RVRkJUU3hEUVVGRExFOUJRVThzWTBGQlpTeFRRVUZSTEZOQlFWTTdTVUZCT1VNN08xRkJSVWtzVlVGQlN5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8xRkJSVGRDTEdWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVFN1NVRk5OVUlzUTBGQlF6dEpRVXBITEZkQlFWYzdVVUZEVUN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEzWkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzZDBKQlFYZENMRU5CUVVNN1NVRkRNVU1zUTBGQlF6dERRVU5LTzBGQlVrYzdTVUZFUXl4UFFVRlBPM05EUVVOeFFpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkRiMjF3YjI1bGJuUXNJSHNnZEhKaFkydGxaQ0I5SUdaeWIyMGdKMEJuYkdsdGJXVnlMMk52YlhCdmJtVnVkQ2M3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFZV2RsVDI1bElHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MElIdGNiaUFnSUNCQWRISmhZMnRsWkZ4dUlDQWdJSFJwZEd4bElEMGdYQ0pYWld4amIyMWxJSFJ2SUdkc2FXMXRaWEpjSWp0Y2JseHVJQ0FnSUdKMWRIUnZibFJsZUhRZ1BTQmNJa05zYVdOcklFMWxJVndpWEc1Y2JpQWdJQ0JpZFhSMGIyNURiR2xqYXlncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJsdUlHNWxlSFFuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYVhSc1pTQTlJRndpU1habElHaGxZWEprSUdsMElHSnZkR2dnZDJGNWMxd2lPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAocm9vdHxwYWdlKVxcXFwuKHhtbHxjc3N8anN8dHN8c2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2htclN5bmNCYWNrdXAgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhtclVwZGF0ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5fX2luaXRpYWxIbXJVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyhyb290fHBhZ2UpXFwuKHhtbHxjc3N8anN8dHN8c2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBpbXBvcnQgTmF0aXZlc2NyaXB0R2xpbW1lciwgeyBSZXNvbHZlckRlbGVnYXRlLCBSZXNvbHZlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1nbGltbWVyJztcbmltcG9ydCB7IGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5jb25zdCByZXNvbHZlckRlbGVnYXRlID0gbmV3IFJlc29sdmVyRGVsZWdhdGUoKTtcbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKCk7XG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IHRlbXBsYXRlc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInRlbXBsYXRlcy5qc29uXCIpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgcmVzb2x2ZXJEZWxlZ2F0ZS5hZGRDb21wb25lbnQodGVtcGxhdGUubmFtZSwgdGVtcGxhdGUuaGFuZGxlLCB0ZW1wbGF0ZS5zb3VyY2UsIHRlbXBsYXRlLmNhcGFiaWxpdGllcyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRDb21wb25lbnRzKGFwcEZvbGRlcikge1xuICAgIGxldCBjb21wb25lbnRzRmlsZSA9IGFwcEZvbGRlci5nZXRGaWxlKFwiY29tcG9uZW50cy5qc29uXCIpO1xuICAgIGxldCBjb21wb25lbnRzID0gY29tcG9uZW50c0ZpbGUucmVhZFRleHRTeW5jKCk7XG4gICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgIEpTT04ucGFyc2UoY29tcG9uZW50cykuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgICAgIGNvbnN0IGNsYXNzRmlsZSA9IHJlcXVpcmUoYC4uL3NyYy91aS9jb21wb25lbnRzLyR7Y29tcG9uZW50Lm5hbWV9L2NvbXBvbmVudC50c2ApO1xuICAgICAgICByZXNvbHZlci5hZGRDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNsYXNzRmlsZS5kZWZhdWx0KTtcbiAgICB9KTtcbn1cbi8vXG4vLyBmdW5jdGlvbiByZXF1aXJlQWxsKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxuLy8gcmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL3NyYy91aS9jb21wb25lbnRzLycsIHRydWUsIC9jb21wb25lbnQudHMkLykpO1xudHJ5IHtcbiAgICBsZXQgYXBwRm9sZGVyID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKTtcbiAgICBhZGRDb21wb25lbnRzKGFwcEZvbGRlcik7XG4gICAgY29uc3QgYXBwID0gbmV3IE5hdGl2ZXNjcmlwdEdsaW1tZXIoJ0dsaW1tZXJOYXRpdmVzY3JpcHREZW1vJywge30sIHJlc29sdmVyRGVsZWdhdGUsIHJlc29sdmVyKTtcbiAgICBhcHAucmVuZGVyKCk7XG59XG5jYXRjaCAoZXJyb3JzKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYQndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVlYQndMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4UlFVRlJMRVZCUVVVc1RVRkJUU3h6UWtGQmMwSXNRMEZCUXp0QlFVTjJSaXhQUVVGUExFVkJRVVVzV1VGQldTeEZRVUZGTEUxQlFVMHNPRUpCUVRoQ0xFTkJRVU03UVVGRE5VUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03UVVGRGFFUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dEJRVVZvUXl4elFrRkJjMElzVTBGQlV6dEpRVU16UWl4SlFVRkpMR0ZCUVdFc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03U1VGRGVFUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1lVRkJZU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzBsQlF6ZERMREJEUVVFd1F6dEpRVU14UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRSUVVOeVF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRekZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTFBc1EwRkJRenRCUVVWRUxIVkNRVUYxUWl4VFFVRlRPMGxCUXpWQ0xFbEJRVWtzWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3hKUVVGSkxGVkJRVlVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRMME1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl3d1FrRkJNRUlzUTBGQlF5eERRVUZETzBsQlEzaERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRM1pETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXp0UlFVTjRReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNkMEpCUVhkQ0xGTkJRVk1zUTBGQlF5eEpRVUZKTEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTJwR0xGRkJRVkVzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETjBRc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQlJVUXNSVUZCUlR0QlFVTkdMR3RFUVVGclJEdEJRVU5zUkN3clJVRkJLMFU3UVVGRkwwVXNTVUZCU1N4RFFVRkRPMGxCUTBRc1NVRkJTU3hUUVVGVExFZEJRVWNzV1VGQldTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeHRRa0ZCYlVJc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRMMFlzUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUTJwQ0xFTkJRVU03UVVGQlF5eExRVUZMTEVOQlFVRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMklzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVONFFpeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUU1aGRHbDJaWE5qY21sd2RFZHNhVzF0WlhJc0lIc2dVbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTd2dVbVZ6YjJ4MlpYSWdmU0JtY205dElDZHVZWFJwZG1WelkzSnBjSFF0WjJ4cGJXMWxjaWM3WEc1cGJYQnZjblFnZXlCcmJtOTNia1p2YkdSbGNuTWdmU0JtY205dElGd2lkRzV6TFdOdmNtVXRiVzlrZFd4bGN5OW1hV3hsTFhONWMzUmxiVndpTzF4dVkyOXVjM1FnY21WemIyeDJaWEpFWld4bFoyRjBaU0E5SUc1bGR5QlNaWE52YkhabGNrUmxiR1ZuWVhSbEtDazdYRzVqYjI1emRDQnlaWE52YkhabGNpQTlJRzVsZHlCU1pYTnZiSFpsY2lncE8xeHVYRzVtZFc1amRHbHZiaUJoWkdSVVpXMXdiR0YwWlhNb1lYQndSbTlzWkdWeUtTQjdYRzRnSUNBZ2JHVjBJSFJsYlhCc1lYUmxjMFpwYkdVZ1BTQmhjSEJHYjJ4a1pYSXVaMlYwUm1sc1pTaGNJblJsYlhCc1lYUmxjeTVxYzI5dVhDSXBPMXh1SUNBZ0lHeGxkQ0IwWlcxd2JHRjBaWE1nUFNCMFpXMXdiR0YwWlhOR2FXeGxMbkpsWVdSVVpYaDBVM2x1WXlncE8xeHVJQ0FnSUM4dklHTnZibk52YkdVdWJHOW5LR0JVWlcxd2JHRjBaWE02SUNSN2RHVnRjR3hoZEdWemZXQXBPMXh1SUNBZ0lFcFRUMDR1Y0dGeWMyVW9kR1Z0Y0d4aGRHVnpLUzVtYjNKRllXTm9LSFJsYlhCc1lYUmxJRDArSUh0Y2JpQWdJQ0FnSUNBZ2NtVnpiMngyWlhKRVpXeGxaMkYwWlM1aFpHUkRiMjF3YjI1bGJuUW9kR1Z0Y0d4aGRHVXVibUZ0WlN3Z2RHVnRjR3hoZEdVdWFHRnVaR3hsTENCMFpXMXdiR0YwWlM1emIzVnlZMlVzSUhSbGJYQnNZWFJsTG1OaGNHRmlhV3hwZEdsbGN5azdYRzRnSUNBZ2ZTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRmtaRU52YlhCdmJtVnVkSE1vWVhCd1JtOXNaR1Z5S1NCN1hHNGdJQ0FnYkdWMElHTnZiWEJ2Ym1WdWRITkdhV3hsSUQwZ1lYQndSbTlzWkdWeUxtZGxkRVpwYkdVb1hDSmpiMjF3YjI1bGJuUnpMbXB6YjI1Y0lpazdYRzRnSUNBZ2JHVjBJR052YlhCdmJtVnVkSE1nUFNCamIyMXdiMjVsYm5SelJtbHNaUzV5WldGa1ZHVjRkRk41Ym1Nb0tUdGNiaUFnSUNCamIyNXpiMnhsTG14dlp5aGdRV0p2ZFhRZ2RHOGdjbVZ6YjJ4MlpTQnlaWEYxYVhKbFlDazdYRzRnSUNBZ1NsTlBUaTV3WVhKelpTaGpiMjF3YjI1bGJuUnpLUzVtYjNKRllXTm9LR052YlhCdmJtVnVkQ0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LR0JCWW05MWRDQjBieUJ5WlhOdmJIWmxJSEpsY1hWcGNtVmdLVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZMnhoYzNOR2FXeGxJRDBnY21WeGRXbHlaU2hnTGk0dmMzSmpMM1ZwTDJOdmJYQnZibVZ1ZEhNdkpIdGpiMjF3YjI1bGJuUXVibUZ0WlgwdlkyOXRjRzl1Wlc1MExuUnpZQ2s3WEc0Z0lDQWdJQ0FnSUhKbGMyOXNkbVZ5TG1Ga1pFTnZiWEJ2Ym1WdWRDaGpiMjF3YjI1bGJuUXVibUZ0WlN3Z1kyeGhjM05HYVd4bExtUmxabUYxYkhRcE8xeHVJQ0FnSUgwcE8xeHVmVnh1WEc0dkwxeHVMeThnWm5WdVkzUnBiMjRnY21WeGRXbHlaVUZzYkNoeUtTQjdJSEl1YTJWNWN5Z3BMbVp2Y2tWaFkyZ29jaWs3SUgxY2JpOHZJSEpsY1hWcGNtVkJiR3dvY21WeGRXbHlaUzVqYjI1MFpYaDBLQ2N1TGk5emNtTXZkV2t2WTI5dGNHOXVaVzUwY3k4bkxDQjBjblZsTENBdlkyOXRjRzl1Wlc1MExuUnpKQzhwS1R0Y2JseHVkSEo1SUh0Y2JpQWdJQ0JzWlhRZ1lYQndSbTlzWkdWeUlEMGdhMjV2ZDI1R2IyeGtaWEp6TG1OMWNuSmxiblJCY0hBb0tUdGNiaUFnSUNCaFpHUlVaVzF3YkdGMFpYTW9ZWEJ3Um05c1pHVnlLVHRjYmlBZ0lDQmhaR1JEYjIxd2IyNWxiblJ6S0dGd2NFWnZiR1JsY2lrN1hHNGdJQ0FnWTI5dWMzUWdZWEJ3SUQwZ2JtVjNJRTVoZEdsMlpYTmpjbWx3ZEVkc2FXMXRaWElvSjBkc2FXMXRaWEpPWVhScGRtVnpZM0pwY0hSRVpXMXZKeXdnZTMwc0lISmxjMjlzZG1WeVJHVnNaV2RoZEdVc0lISmxjMjlzZG1WeUtUdGNiaUFnSUNCaGNIQXVjbVZ1WkdWeUtDazdYRzU5SUdOaGRHTm9LR1Z5Y205eWN5a2dlMXh1SUNBZ0lHTnZibk52YkdVdWJHOW5LR1Z5Y205eWN5azdYRzU5WEc0aVhYMD1cbiAgICBcbiAgICAgICAgXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=