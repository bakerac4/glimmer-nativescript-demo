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
/* harmony import */ var _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@glimmer/tracking/dist/modules/es2017/index.js");
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
    _glimmer_tracking__WEBPACK_IMPORTED_MODULE_1__["tracked"]
], PageOne.prototype, "title", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxNQUFNLENBQUMsT0FBTyxjQUFlLFNBQVEsU0FBUztJQUE5Qzs7UUFFSSxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFFN0IsZUFBVSxHQUFHLFdBQVcsQ0FBQTtJQU01QixDQUFDO0lBSkcsV0FBVztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztJQUMxQyxDQUFDO0NBQ0o7QUFSRztJQURDLE9BQU87c0NBQ3FCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJhY2tlZCB9IGZyb20gJ0BnbGltbWVyL3RyYWNraW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VPbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEB0cmFja2VkXG4gICAgdGl0bGUgPSBcIldlbGNvbWUgdG8gZ2xpbW1lclwiO1xuXG4gICAgYnV0dG9uVGV4dCA9IFwiQ2xpY2sgTWUhXCJcblxuICAgIGJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW4gbmV4dCcpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJJdmUgaGVhcmQgaXQgYm90aCB3YXlzXCI7XG4gICAgfVxufVxuIl19

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sbUJBQW1CLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUVoQyxzQkFBc0IsU0FBUztJQUMzQixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLDBDQUEwQztJQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUNyQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFHLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELHVCQUF1QixTQUFTO0lBQzVCLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxJQUFJLFVBQVUsR0FBRyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsd0JBQXdCLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBR0QsRUFBRTtBQUNGLGtEQUFrRDtBQUNsRCwrRUFBK0U7QUFFL0UsSUFBSSxDQUFDO0lBQ0QsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFBQyxLQUFLLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdGl2ZXNjcmlwdEdsaW1tZXIsIHsgUmVzb2x2ZXJEZWxlZ2F0ZSwgUmVzb2x2ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtZ2xpbW1lcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZXMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IHRlbXBsYXRlc0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcInRlbXBsYXRlcy5qc29uXCIpO1xuICAgIGxldCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGBUZW1wbGF0ZXM6ICR7dGVtcGxhdGVzfWApO1xuICAgIEpTT04ucGFyc2UodGVtcGxhdGVzKS5mb3JFYWNoKHRlbXBsYXRlID0+IHtcbiAgICAgICAgcmVzb2x2ZXJEZWxlZ2F0ZS5hZGRDb21wb25lbnQodGVtcGxhdGUubmFtZSwgdGVtcGxhdGUuaGFuZGxlLCB0ZW1wbGF0ZS5zb3VyY2UsIHRlbXBsYXRlLmNhcGFiaWxpdGllcyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbXBvbmVudHMoYXBwRm9sZGVyKSB7XG4gICAgbGV0IGNvbXBvbmVudHNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJjb21wb25lbnRzLmpzb25cIik7XG4gICAgbGV0IGNvbXBvbmVudHMgPSBjb21wb25lbnRzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgICBjb25zb2xlLmxvZyhgQWJvdXQgdG8gcmVzb2x2ZSByZXF1aXJlYCk7XG4gICAgSlNPTi5wYXJzZShjb21wb25lbnRzKS5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICAgICAgY29uc3QgY2xhc3NGaWxlID0gcmVxdWlyZShgLi4vc3JjL3VpL2NvbXBvbmVudHMvJHtjb21wb25lbnQubmFtZX0vY29tcG9uZW50LnRzYCk7XG4gICAgICAgIHJlc29sdmVyLmFkZENvbXBvbmVudChjb21wb25lbnQubmFtZSwgY2xhc3NGaWxlLmRlZmF1bHQpO1xuICAgIH0pO1xufVxuXG5cbi8vXG4vLyBmdW5jdGlvbiByZXF1aXJlQWxsKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxuLy8gcmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL3NyYy91aS9jb21wb25lbnRzLycsIHRydWUsIC9jb21wb25lbnQudHMkLykpO1xuXG50cnkge1xuICAgIGxldCBhcHBGb2xkZXIgPSBrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xuICAgIGFkZFRlbXBsYXRlcyhhcHBGb2xkZXIpO1xuICAgIGFkZENvbXBvbmVudHMoYXBwRm9sZGVyKTtcbiAgICBjb25zdCBhcHAgPSBuZXcgTmF0aXZlc2NyaXB0R2xpbW1lcignR2xpbW1lck5hdGl2ZXNjcmlwdERlbW8nLCB7fSwgcmVzb2x2ZXJEZWxlZ2F0ZSwgcmVzb2x2ZXIpO1xuICAgIGFwcC5yZW5kZXIoKTtcbn0gY2F0Y2goZXJyb3JzKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbn1cbiJdfQ==
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzIHN5bmMgXlxcLlxcLy4qXFwvY29tcG9uZW50XFwudHMkIiwid2VicGFjazovLy8uLi9zcmMvdWkvY29tcG9uZW50cy9HbGltbWVyTmF0aXZlc2NyaXB0RGVtby9jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9jb21wb25lbnRzL1BhZ2VPbmUvY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vLy4gc3luYyAocm9vdHxwYWdlKVxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWdCLHVCQUF1QjtBQUN2Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGOzs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBMkM7QUFDNUIsc0NBQXNDLDBEQUFTO0FBQzlEO0FBQ0EsMkNBQTJDLDJhOzs7Ozs7OztBQ0gzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFrQixTQUFJLElBQUksU0FBSTtBQUM5QjtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUMyQztBQUNDO0FBQzdCLHNCQUFzQiwwREFBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBTztBQUNYO0FBQ0EsMkNBQTJDLHVoQzs7Ozs7OztBQ3RCM0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EsaUY7Ozs7Ozs7QUNSQSwyQkFBMkIsbUJBQU8sQ0FBQyw0Q0FBNEM7QUFDL0U7OztBQUdBO0FBQ0EsY0FBYyxRQUFTOztBQUV2QjtBQUNBO0FBQ0EsUUFBUSxLQUFVLEVBQUUsRUFLZjs7Ozs7Ozs7Ozs7Ozs7QUNiTCxZQUFZLG1CQUFPLENBQUMsMEVBQXVEOzs7QUFHM0UsWUFBWSxLQUFVLEVBQUUsRUFzQmY7O0FBRVQsNEJBQTRCLDRFQUFpRTtBQUM3Rjs7QUFFQSxRQUFRLG1CQUFPLENBQUMseURBQXNDO0FBQ3RELFFBQStGO0FBQ25DO0FBQzVELDZCQUE2QixxRUFBZ0I7QUFDN0MscUJBQXFCLDZEQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUZBQVEsR0FBc0IsRUFBRSxlQUFlLGNBQWMsQ0FBQztBQUN4RjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFZO0FBQ2hDO0FBQ0E7QUFDQSxvQkFBb0IsNERBQW1CLDhCQUE4QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0dsaW1tZXJOYXRpdmVzY3JpcHREZW1vL2NvbXBvbmVudC50c1wiOiBcIi4uL3NyYy91aS9jb21wb25lbnRzL0dsaW1tZXJOYXRpdmVzY3JpcHREZW1vL2NvbXBvbmVudC50c1wiLFxuXHRcIi4vUGFnZU9uZS9jb21wb25lbnQudHNcIjogXCIuLi9zcmMvdWkvY29tcG9uZW50cy9QYWdlT25lL2NvbXBvbmVudC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uL3NyYy91aS9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2NvbXBvbmVudFxcXFwudHMkXCI7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdAZ2xpbW1lci9jb21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xpbW1lck5hdGl2ZXNjcmlwdERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl0Y0c5dVpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzVTBGQlV5eE5RVUZOTEc5Q1FVRnZRaXhEUVVGRE8wRkJRek5ETEUxQlFVMHNRMEZCUXl4UFFVRlBMRGhDUVVFclFpeFRRVUZSTEZOQlFWTTdRMEZETjBRaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1EyOXRjRzl1Wlc1MElHWnliMjBnSjBCbmJHbHRiV1Z5TDJOdmJYQnZibVZ1ZENjN1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJIYkdsdGJXVnlUbUYwYVhabGMyTnlhWEIwUkdWdGJ5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRDQjdYRzU5WEc0aVhYMD0iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ0BnbGltbWVyL2NvbXBvbmVudCc7XG5pbXBvcnQgeyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU9uZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBcIldlbGNvbWUgdG8gZ2xpbW1lclwiO1xuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIkNsaWNrIE1lIVwiO1xuICAgIH1cbiAgICBidXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIG5leHQnKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiSXZlIGhlYXJkIGl0IGJvdGggd2F5c1wiO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHRyYWNrZWRcbl0sIFBhZ2VPbmUucHJvdG90eXBlLCBcInRpdGxlXCIsIHZvaWQgMCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXRjRzl1Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJMRTlCUVU4c1UwRkJVeXhOUVVGTkxHOUNRVUZ2UWl4RFFVRkRPMEZCUXpORExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4dFFrRkJiVUlzUTBGQlF6dEJRVU0xUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhqUVVGbExGTkJRVkVzVTBGQlV6dEpRVUU1UXpzN1VVRkZTU3hWUVVGTExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN1VVRkZOMElzWlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUVR0SlFVMDFRaXhEUVVGRE8wbEJTa2NzVjBGQlZ6dFJRVU5RTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXp0SlFVTXhReXhEUVVGRE8wTkJRMG83UVVGU1J6dEpRVVJETEU5QlFVODdjME5CUTNGQ0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFTnZiWEJ2Ym1WdWRDQm1jbTl0SUNkQVoyeHBiVzFsY2k5amIyMXdiMjVsYm5Rbk8xeHVhVzF3YjNKMElIc2dkSEpoWTJ0bFpDQjlJR1p5YjIwZ0owQm5iR2x0YldWeUwzUnlZV05yYVc1bkp6dGNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCaFoyVlBibVVnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblFnZTF4dUlDQWdJRUIwY21GamEyVmtYRzRnSUNBZ2RHbDBiR1VnUFNCY0lsZGxiR052YldVZ2RHOGdaMnhwYlcxbGNsd2lPMXh1WEc0Z0lDQWdZblYwZEc5dVZHVjRkQ0E5SUZ3aVEyeHBZMnNnVFdVaFhDSmNibHh1SUNBZ0lHSjFkSFJ2YmtOc2FXTnJLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5Z25hVzRnYm1WNGRDY3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUnBkR3hsSUQwZ1hDSkpkbVVnYUdWaGNtUWdhWFFnWW05MGFDQjNZWGx6WENJN1hHNGdJQ0FnZlZ4dWZWeHVJbDE5IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKHJvb3R8cGFnZSlcXFxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJFwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIlxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9faW5pdGlhbEhtclVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBnbG9iYWwuX19obXJTeW5jQmFja3VwID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9faG1yU3luY0JhY2t1cCh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBobXJVcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBnbG9iYWwuX19pbml0aWFsSG1yVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8ocm9vdHxwYWdlKVxcLih4bWx8Y3NzfGpzfHRzfHNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgaW1wb3J0IE5hdGl2ZXNjcmlwdEdsaW1tZXIsIHsgUmVzb2x2ZXJEZWxlZ2F0ZSwgUmVzb2x2ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtZ2xpbW1lcic7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuY29uc3QgcmVzb2x2ZXJEZWxlZ2F0ZSA9IG5ldyBSZXNvbHZlckRlbGVnYXRlKCk7XG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcigpO1xuZnVuY3Rpb24gYWRkVGVtcGxhdGVzKGFwcEZvbGRlcikge1xuICAgIGxldCB0ZW1wbGF0ZXNGaWxlID0gYXBwRm9sZGVyLmdldEZpbGUoXCJ0ZW1wbGF0ZXMuanNvblwiKTtcbiAgICBsZXQgdGVtcGxhdGVzID0gdGVtcGxhdGVzRmlsZS5yZWFkVGV4dFN5bmMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgVGVtcGxhdGVzOiAke3RlbXBsYXRlc31gKTtcbiAgICBKU09OLnBhcnNlKHRlbXBsYXRlcykuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XG4gICAgICAgIHJlc29sdmVyRGVsZWdhdGUuYWRkQ29tcG9uZW50KHRlbXBsYXRlLm5hbWUsIHRlbXBsYXRlLmhhbmRsZSwgdGVtcGxhdGUuc291cmNlLCB0ZW1wbGF0ZS5jYXBhYmlsaXRpZXMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpIHtcbiAgICBsZXQgY29tcG9uZW50c0ZpbGUgPSBhcHBGb2xkZXIuZ2V0RmlsZShcImNvbXBvbmVudHMuanNvblwiKTtcbiAgICBsZXQgY29tcG9uZW50cyA9IGNvbXBvbmVudHNGaWxlLnJlYWRUZXh0U3luYygpO1xuICAgIGNvbnNvbGUubG9nKGBBYm91dCB0byByZXNvbHZlIHJlcXVpcmVgKTtcbiAgICBKU09OLnBhcnNlKGNvbXBvbmVudHMpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYEFib3V0IHRvIHJlc29sdmUgcmVxdWlyZWApO1xuICAgICAgICBjb25zdCBjbGFzc0ZpbGUgPSByZXF1aXJlKGAuLi9zcmMvdWkvY29tcG9uZW50cy8ke2NvbXBvbmVudC5uYW1lfS9jb21wb25lbnQudHNgKTtcbiAgICAgICAgcmVzb2x2ZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjbGFzc0ZpbGUuZGVmYXVsdCk7XG4gICAgfSk7XG59XG4vL1xuLy8gZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cbi8vIHJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9zcmMvdWkvY29tcG9uZW50cy8nLCB0cnVlLCAvY29tcG9uZW50LnRzJC8pKTtcbnRyeSB7XG4gICAgbGV0IGFwcEZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgYWRkVGVtcGxhdGVzKGFwcEZvbGRlcik7XG4gICAgYWRkQ29tcG9uZW50cyhhcHBGb2xkZXIpO1xuICAgIGNvbnN0IGFwcCA9IG5ldyBOYXRpdmVzY3JpcHRHbGltbWVyKCdHbGltbWVyTmF0aXZlc2NyaXB0RGVtbycsIHt9LCByZXNvbHZlckRlbGVnYXRlLCByZXNvbHZlcik7XG4gICAgYXBwLnJlbmRlcigpO1xufVxuY2F0Y2ggKGVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWEJ3TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRTlCUVU4c2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4elFrRkJjMElzUTBGQlF6dEJRVU4yUml4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRkxFMUJRVTBzT0VKQlFUaENMRU5CUVVNN1FVRkROVVFzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1FVRkRhRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJRenRCUVVWb1F5eHpRa0ZCYzBJc1UwRkJVenRKUVVNelFpeEpRVUZKTEdGQlFXRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1NVRkRlRVFzU1VGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRE8wbEJRemRETERCRFFVRXdRenRKUVVNeFF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlR0UlFVTnlReXhuUWtGQlowSXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUXpGSExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFVVkVMSFZDUVVGMVFpeFRRVUZUTzBsQlF6VkNMRWxCUVVrc1kwRkJZeXhIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dEpRVU14UkN4SlFVRkpMRlZCUVZVc1IwRkJSeXhqUVVGakxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZETDBNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5d3dRa0ZCTUVJc1EwRkJReXhEUVVGRE8wbEJRM2hETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNaRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF6dFJRVU40UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRk5CUVZNc1EwRkJReXhKUVVGSkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEycEdMRkZCUVZFc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE4wUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRVQ3hEUVVGRE8wRkJSMFFzUlVGQlJUdEJRVU5HTEd0RVFVRnJSRHRCUVVOc1JDd3JSVUZCSzBVN1FVRkZMMFVzU1VGQlNTeERRVUZETzBsQlEwUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1dVRkJXU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6RkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU40UWl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGVrSXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4NVFrRkJlVUlzUlVGQlJTeEZRVUZGTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTVUZETDBZc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBGQlEycENMRU5CUVVNN1FVRkJReXhMUVVGTExFTkJRVUVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjRRaXhEUVVGRElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFNWhkR2wyWlhOamNtbHdkRWRzYVcxdFpYSXNJSHNnVW1WemIyeDJaWEpFWld4bFoyRjBaU3dnVW1WemIyeDJaWElnZlNCbWNtOXRJQ2R1WVhScGRtVnpZM0pwY0hRdFoyeHBiVzFsY2ljN1hHNXBiWEJ2Y25RZ2V5QnJibTkzYmtadmJHUmxjbk1nZlNCbWNtOXRJRndpZEc1ekxXTnZjbVV0Ylc5a2RXeGxjeTltYVd4bExYTjVjM1JsYlZ3aU8xeHVZMjl1YzNRZ2NtVnpiMngyWlhKRVpXeGxaMkYwWlNBOUlHNWxkeUJTWlhOdmJIWmxja1JsYkdWbllYUmxLQ2s3WEc1amIyNXpkQ0J5WlhOdmJIWmxjaUE5SUc1bGR5QlNaWE52YkhabGNpZ3BPMXh1WEc1bWRXNWpkR2x2YmlCaFpHUlVaVzF3YkdGMFpYTW9ZWEJ3Um05c1pHVnlLU0I3WEc0Z0lDQWdiR1YwSUhSbGJYQnNZWFJsYzBacGJHVWdQU0JoY0hCR2IyeGtaWEl1WjJWMFJtbHNaU2hjSW5SbGJYQnNZWFJsY3k1cWMyOXVYQ0lwTzF4dUlDQWdJR3hsZENCMFpXMXdiR0YwWlhNZ1BTQjBaVzF3YkdGMFpYTkdhV3hsTG5KbFlXUlVaWGgwVTNsdVl5Z3BPMXh1SUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0dCVVpXMXdiR0YwWlhNNklDUjdkR1Z0Y0d4aGRHVnpmV0FwTzF4dUlDQWdJRXBUVDA0dWNHRnljMlVvZEdWdGNHeGhkR1Z6S1M1bWIzSkZZV05vS0hSbGJYQnNZWFJsSUQwK0lIdGNiaUFnSUNBZ0lDQWdjbVZ6YjJ4MlpYSkVaV3hsWjJGMFpTNWhaR1JEYjIxd2IyNWxiblFvZEdWdGNHeGhkR1V1Ym1GdFpTd2dkR1Z0Y0d4aGRHVXVhR0Z1Wkd4bExDQjBaVzF3YkdGMFpTNXpiM1Z5WTJVc0lIUmxiWEJzWVhSbExtTmhjR0ZpYVd4cGRHbGxjeWs3WEc0Z0lDQWdmU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJR0ZrWkVOdmJYQnZibVZ1ZEhNb1lYQndSbTlzWkdWeUtTQjdYRzRnSUNBZ2JHVjBJR052YlhCdmJtVnVkSE5HYVd4bElEMGdZWEJ3Um05c1pHVnlMbWRsZEVacGJHVW9YQ0pqYjIxd2IyNWxiblJ6TG1wemIyNWNJaWs3WEc0Z0lDQWdiR1YwSUdOdmJYQnZibVZ1ZEhNZ1BTQmpiMjF3YjI1bGJuUnpSbWxzWlM1eVpXRmtWR1Y0ZEZONWJtTW9LVHRjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWhnUVdKdmRYUWdkRzhnY21WemIyeDJaU0J5WlhGMWFYSmxZQ2s3WEc0Z0lDQWdTbE5QVGk1d1lYSnpaU2hqYjIxd2IyNWxiblJ6S1M1bWIzSkZZV05vS0dOdmJYQnZibVZ1ZENBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0dCQlltOTFkQ0IwYnlCeVpYTnZiSFpsSUhKbGNYVnBjbVZnS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTJ4aGMzTkdhV3hsSUQwZ2NtVnhkV2x5WlNoZ0xpNHZjM0pqTDNWcEwyTnZiWEJ2Ym1WdWRITXZKSHRqYjIxd2IyNWxiblF1Ym1GdFpYMHZZMjl0Y0c5dVpXNTBMblJ6WUNrN1hHNGdJQ0FnSUNBZ0lISmxjMjlzZG1WeUxtRmtaRU52YlhCdmJtVnVkQ2hqYjIxd2IyNWxiblF1Ym1GdFpTd2dZMnhoYzNOR2FXeGxMbVJsWm1GMWJIUXBPMXh1SUNBZ0lIMHBPMXh1ZlZ4dVhHNWNiaTh2WEc0dkx5Qm1kVzVqZEdsdmJpQnlaWEYxYVhKbFFXeHNLSElwSUhzZ2NpNXJaWGx6S0NrdVptOXlSV0ZqYUNoeUtUc2dmVnh1THk4Z2NtVnhkV2x5WlVGc2JDaHlaWEYxYVhKbExtTnZiblJsZUhRb0p5NHVMM055WXk5MWFTOWpiMjF3YjI1bGJuUnpMeWNzSUhSeWRXVXNJQzlqYjIxd2IyNWxiblF1ZEhNa0x5a3BPMXh1WEc1MGNua2dlMXh1SUNBZ0lHeGxkQ0JoY0hCR2IyeGtaWElnUFNCcmJtOTNia1p2YkdSbGNuTXVZM1Z5Y21WdWRFRndjQ2dwTzF4dUlDQWdJR0ZrWkZSbGJYQnNZWFJsY3loaGNIQkdiMnhrWlhJcE8xeHVJQ0FnSUdGa1pFTnZiWEJ2Ym1WdWRITW9ZWEJ3Um05c1pHVnlLVHRjYmlBZ0lDQmpiMjV6ZENCaGNIQWdQU0J1WlhjZ1RtRjBhWFpsYzJOeWFYQjBSMnhwYlcxbGNpZ25SMnhwYlcxbGNrNWhkR2wyWlhOamNtbHdkRVJsYlc4bkxDQjdmU3dnY21WemIyeDJaWEpFWld4bFoyRjBaU3dnY21WemIyeDJaWElwTzF4dUlDQWdJR0Z3Y0M1eVpXNWtaWElvS1R0Y2JuMGdZMkYwWTJnb1pYSnliM0p6S1NCN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb1pYSnliM0p6S1R0Y2JuMWNiaUpkZlE9PVxuICAgIFxuICAgICAgICBcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==