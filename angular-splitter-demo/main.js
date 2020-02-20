(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_simple_splitter_simple_splitter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/simple-splitter/simple-splitter.component */ "./src/app/pages/simple-splitter/simple-splitter.component.ts");
/* harmony import */ var _pages_nested_splitter_nested_splitter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/nested-splitter/nested-splitter.component */ "./src/app/pages/nested-splitter/nested-splitter.component.ts");
/* harmony import */ var _pages_mac_notes_splitter_mac_notes_splitter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/mac-notes-splitter/mac-notes-splitter.component */ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'simple', component: _pages_simple_splitter_simple_splitter_component__WEBPACK_IMPORTED_MODULE_2__["SimpleSplitterComponent"] },
    { path: 'nested', component: _pages_nested_splitter_nested_splitter_component__WEBPACK_IMPORTED_MODULE_3__["NestedSplitterComponent"] },
    { path: 'macnotes', component: _pages_mac_notes_splitter_mac_notes_splitter_component__WEBPACK_IMPORTED_MODULE_4__["MacNotesSplitterComponent"] },
    { path: '', redirectTo: '/simple', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-group{\n    position: fixed;\n    top:10px;\n    right:10px;\n    width: 50px;\n    z-index:1;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"button-group\">\n    <button routerLink=\"/simple\">simple</button>\n    <button routerLink=\"/nested\">nested</button>\n    <button routerLink=\"/macnotes\">macnotes</button>\n</div>\n<div class=\"fork-me-wrapper\">\n    <div class=\"fork-me\">\n        <a class=\"fork-me-link\" href=\"https://github.com/guguji5/angular-splitter\">\n            <span class=\"fork-me-text\">Star Me On GitHub</span>\n        </a>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tam_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tam.module */ "./src/app/components/tam.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_simple_splitter_simple_splitter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/simple-splitter/simple-splitter.component */ "./src/app/pages/simple-splitter/simple-splitter.component.ts");
/* harmony import */ var _pages_nested_splitter_nested_splitter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/nested-splitter/nested-splitter.component */ "./src/app/pages/nested-splitter/nested-splitter.component.ts");
/* harmony import */ var _pages_mac_notes_splitter_mac_notes_splitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mac-notes-splitter/mac-notes-splitter.component */ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { TamModule } from 'angular-splitter';



// import { TamSplitterComponent } from './components/tam-splitter/tam-splitter.component';
// import { TamSplitterPanelComponent } from './components/tam-splitter-panel/tam-splitter-panel.component';
// import { TamSplitterBarComponent } from './components/tam-splitter-bar/tam-splitter-bar.component';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                // TamSplitterComponent,
                // TamSplitterPanelComponent,
                // TamSplitterBarComponent,
                _pages_simple_splitter_simple_splitter_component__WEBPACK_IMPORTED_MODULE_5__["SimpleSplitterComponent"],
                _pages_nested_splitter_nested_splitter_component__WEBPACK_IMPORTED_MODULE_6__["NestedSplitterComponent"],
                _pages_mac_notes_splitter_mac_notes_splitter_component__WEBPACK_IMPORTED_MODULE_7__["MacNotesSplitterComponent"]
            ],
            imports: [
                // BrowserModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_tam_module__WEBPACK_IMPORTED_MODULE_3__["TamModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tam-splitter-bar/tam-splitter-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tam-splitter-bar/tam-splitter-bar.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: gray;\n  flex-grow: 0;\n  flex-shrink: 0; }\n  :host.horizontal:hover {\n    cursor: ew-resize; }\n  :host.vertical:hover {\n    cursor: ns-resize; }\n"

/***/ }),

/***/ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/tam-splitter-bar/tam-splitter-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: TamSplitterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TamSplitterBarComponent", function() { return TamSplitterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TamSplitterBarComponent = /** @class */ (function () {
    function TamSplitterBarComponent(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    Object.defineProperty(TamSplitterBarComponent.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (v) {
            this._direction = v;
            this.refreshStyle();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TamSplitterBarComponent.prototype, "order", {
        set: function (v) {
            this.renderer.setStyle(this.elRef.nativeElement, 'order', v);
        },
        enumerable: true,
        configurable: true
    });
    TamSplitterBarComponent.prototype.ngOnInit = function () {
    };
    TamSplitterBarComponent.prototype.refreshStyle = function () {
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', this.width + "px");
        // add a class to control the cursor
        this.renderer.removeClass(this.elRef.nativeElement, 'vertical');
        this.renderer.removeClass(this.elRef.nativeElement, 'horizental');
        this.renderer.addClass(this.elRef.nativeElement, this.direction);
        // fix safari bug about gutter height when direction is horizontal
        this.renderer.setStyle(this.elRef.nativeElement, 'height', (this.direction === 'vertical') ? this.width + "px" : "100%");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TamSplitterBarComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TamSplitterBarComponent.prototype, "direction", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TamSplitterBarComponent.prototype, "order", null);
    TamSplitterBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tam-splitter-bar',
            template: __webpack_require__(/*! ./tam-splitter-bar.component.html */ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.html"),
            styles: [__webpack_require__(/*! ./tam-splitter-bar.component.scss */ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TamSplitterBarComponent);
    return TamSplitterBarComponent;
}());



/***/ }),

/***/ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tam-splitter-panel/tam-splitter-panel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tam-splitter-panel/tam-splitter-panel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  overflow: hidden auto;\n  transition-property: flex;\n  transition-duration: 0s;\n  transition-timing-function: linear; }\n"

/***/ }),

/***/ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tam-splitter-panel/tam-splitter-panel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TamSplitterPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TamSplitterPanelComponent", function() { return TamSplitterPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tam_splitter_tam_splitter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tam-splitter/tam-splitter.component */ "./src/app/components/tam-splitter/tam-splitter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TamSplitterPanelComponent = /** @class */ (function () {
    function TamSplitterPanelComponent(splitterComponent, renderer, elRef) {
        this.splitterComponent = splitterComponent;
        this.renderer = renderer;
        this.elRef = elRef;
        this._order = null;
        this._size = null;
        this._visible = true;
        this.collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TamSplitterPanelComponent.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (v) {
            this._size = Number(v);
            this.splitterComponent.updatePanel(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TamSplitterPanelComponent.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (v) {
            v = Number(v);
            this._order = !isNaN(v) ? v : null;
            this.setStyleOrder(this._order);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TamSplitterPanelComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (v) {
            var _this = this;
            var sizeArr = this.splitterComponent.displayedPanels.map(function (value) { return value.size; });
            // prevent the event fired in the init process
            if (sizeArr.length > 0) {
                if (this.splitterComponent.useTransition) {
                    // if the useTransition is set true, then use 300 ms
                    if (this.splitterComponent.useTransition === true) {
                        this.splitterComponent.setTransitionTime(300);
                    }
                    else {
                        this.splitterComponent.setTransitionTime(this.splitterComponent.useTransition);
                    }
                }
                this.collapsedChange.emit({
                    collapsed: !v,
                    sizes: sizeArr,
                    collapsedComponentSize: this.size
                });
                // after the collapse event, set the transition back to 0s;
                if (this.splitterComponent.useTransition) {
                    if (this.splitterComponent.useTransition === true) {
                        setTimeout(function () {
                            _this.splitterComponent.setTransitionTime(0);
                        }, 300);
                    }
                    else {
                        setTimeout(function () {
                            _this.splitterComponent.setTransitionTime(0);
                        }, this.splitterComponent.useTransition);
                    }
                }
            }
            v = (typeof (v) === 'boolean') ? v : (v === 'false' ? false : true);
            this._visible = v;
            if (this.visible) {
                this.splitterComponent.showPanel(this);
            }
            else {
                this.splitterComponent.hidePanel(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    TamSplitterPanelComponent.prototype.ngOnInit = function () {
        if (this.splitterComponent) {
            this.splitterComponent.addPanel(this);
        }
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', '0');
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', '0');
    };
    TamSplitterPanelComponent.prototype.ngOnDestroy = function () {
        this.splitterComponent.removePanel(this);
    };
    TamSplitterPanelComponent.prototype.setStyleOrder = function (value) {
        this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
    };
    TamSplitterPanelComponent.prototype.setStyleTransitionTime = function (value) {
        this.renderer.setStyle(this.elRef.nativeElement, 'transition-duration', value);
    };
    TamSplitterPanelComponent.prototype.setStyleFlexbasis = function (value) {
        this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', value);
    };
    TamSplitterPanelComponent.prototype.getSizePixel = function (prop) {
        return this.elRef.nativeElement[prop];
    };
    TamSplitterPanelComponent.prototype.setStyleVisibleAndDir = function (isVisible, isDragging, direction) {
        if (isVisible === false) {
            this.setStyleFlexbasis('0');
            this.renderer.setStyle(this.elRef.nativeElement, 'overflow-x', 'hidden');
            this.renderer.setStyle(this.elRef.nativeElement, 'overflow-y', 'hidden');
            if (direction === 'vertical') {
                this.renderer.setStyle(this.elRef.nativeElement, 'max-width', '0');
            }
        }
        else {
            this.renderer.setStyle(this.elRef.nativeElement, 'overflow-x', 'hidden');
            this.renderer.setStyle(this.elRef.nativeElement, 'overflow-y', 'auto');
            this.renderer.removeStyle(this.elRef.nativeElement, 'max-width');
        }
        if (direction === 'horizontal') {
            this.renderer.setStyle(this.elRef.nativeElement, 'height', '100%');
            this.renderer.removeStyle(this.elRef.nativeElement, 'width');
        }
        else {
            this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
            this.renderer.removeStyle(this.elRef.nativeElement, 'height');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TamSplitterPanelComponent.prototype, "size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TamSplitterPanelComponent.prototype, "order", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TamSplitterPanelComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TamSplitterPanelComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TamSplitterPanelComponent.prototype, "visible", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TamSplitterPanelComponent.prototype, "collapsedChange", void 0);
    TamSplitterPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tam-splitter-panel',
            template: __webpack_require__(/*! ./tam-splitter-panel.component.html */ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.html"),
            styles: [__webpack_require__(/*! ./tam-splitter-panel.component.scss */ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_tam_splitter_tam_splitter_component__WEBPACK_IMPORTED_MODULE_1__["TamSplitterComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TamSplitterPanelComponent);
    return TamSplitterPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/tam-splitter/tam-splitter.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/tam-splitter/tam-splitter.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\n<ng-template ngFor let-area [ngForOf]=\"displayedPanels\" let-index=\"index\" let-last=\"last\">\n    <tam-splitter-bar *ngIf=\"last === false\" [direction]=\"direction\" [order]=\"index*2+1\" [width]=\"splitterBarWidth\" (mousedown)=\"startDragging($event, index*2+1, index+1)\"></tam-splitter-bar>\n\n</ng-template>"

/***/ }),

/***/ "./src/app/components/tam-splitter/tam-splitter.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/tam-splitter/tam-splitter.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%;\n  width: 100%;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/components/tam-splitter/tam-splitter.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tam-splitter/tam-splitter.component.ts ***!
  \*******************************************************************/
/*! exports provided: TamSplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TamSplitterComponent", function() { return TamSplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/count */ "./src/app/services/count.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TamSplitterComponent = /** @class */ (function () {
    function TamSplitterComponent(ngZone, elRef, cdRef, renderer) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.displayedPanels = [];
        this.hidedPanels = [];
        this.useTransition = false;
        // the type interface of the layout, that will effact the behavior of drag. Temporarily it has two types.
        this.type = 'standard';
        this.splitterBarWidth = 8;
        this.dragListeners = [];
        this.isDragging = false;
        this._direction = 'horizontal';
        this.dragStartValues = {
            sizePixelContainer: 0,
            sizePixelA: 0,
            sizePixelB: 0,
            sizePercentA: 0,
            sizePercentB: 0,
        };
        this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TamSplitterComponent.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (v) {
            var _this = this;
            v = (v === 'vertical') ? 'vertical' : 'horizontal';
            this._direction = v;
            this.displayedPanels.concat(this.hidedPanels).forEach(function (panel) {
                panel.setStyleVisibleAndDir(panel.visible, _this.isDragging, _this.direction);
            });
            this.build();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TamSplitterComponent.prototype, "cssFlexdirection", {
        get: function () {
            return (this.direction === 'horizontal') ? 'row' : 'column';
        },
        enumerable: true,
        configurable: true
    });
    TamSplitterComponent.prototype.ngOnInit = function () {
        if (typeof (this.useTransition) === "number" && this.useTransition < 100) {
            console.warn("if the input 'useTransition' is a number, it's a millisecond value. Please set a number between 100 and 1000,");
        }
    };
    TamSplitterComponent.prototype.ngAfterViewInit = function () {
        console.log(this.isType('macNotes'));
    };
    TamSplitterComponent.prototype.build = function () {
        if (this.displayedPanels.every(function (a) { return a.index !== null; })) {
            this.displayedPanels.sort(function (a, b) { return a.index - b.index; });
        }
        // Then set real order with multiples of 2, numbers between will be used by gutters.
        this.displayedPanels.forEach(function (panel, key) {
            panel.order = 2 * key;
        });
        this.refreshStyleSizes();
    };
    TamSplitterComponent.prototype.isType = function (type) {
        return this.type === type;
    };
    TamSplitterComponent.prototype.refreshStyleSizes = function () {
        var sumbarSize = this.splitterBarWidth * (this.displayedPanels.length - 1);
        this.displayedPanels.forEach(function (panel) {
            panel.setStyleFlexbasis("calc( " + panel.size + "% - " + sumbarSize * panel.size / 100 + "px )");
        });
    };
    TamSplitterComponent.prototype.addPanel = function (panel) {
        panel.index = Object(_services_count__WEBPACK_IMPORTED_MODULE_1__["default"])();
        if (panel.visible) {
            this.displayedPanels.push(panel);
        }
        else {
            this.hidedPanels.push(panel);
        }
        panel.setStyleVisibleAndDir(panel.visible, this.isDragging, this.direction);
        this.build();
    };
    TamSplitterComponent.prototype.updatePanel = function (panel) {
        // Only refresh if panel is displayed (No need to check inside 'hidedPanels')
        var item = this.displayedPanels.find(function (a) { return a === panel; });
        if (item) {
            this.build();
        }
    };
    TamSplitterComponent.prototype.showPanel = function (panel) {
        var area = this.hidedPanels.find(function (a) { return a === panel; });
        if (area) {
            panel.setStyleVisibleAndDir(panel.visible, this.isDragging, this.direction);
            var panels = this.hidedPanels.splice(this.hidedPanels.indexOf(area), 1);
            (_a = this.displayedPanels).push.apply(_a, panels);
            this.build();
        }
        var _a;
    };
    TamSplitterComponent.prototype.hidePanel = function (panel) {
        var area = this.displayedPanels.find(function (a) { return a === panel; });
        if (area) {
            panel.setStyleVisibleAndDir(panel.visible, this.isDragging, this.direction);
            var areas = this.displayedPanels.splice(this.displayedPanels.indexOf(area), 1);
            // areas.forEach(area => {
            //     area.order = 0;
            //     // area.size = 0;
            // })
            (_a = this.hidedPanels).push.apply(_a, areas);
            this.build();
        }
        var _a;
    };
    TamSplitterComponent.prototype.removePanel = function (panel) {
        if (this.displayedPanels.some(function (a) { return a === panel; })) {
            var area = this.displayedPanels.find(function (a) { return a === panel; });
            this.displayedPanels.splice(this.displayedPanels.indexOf(area), 1);
            this.build();
        }
        else if (this.hidedPanels.some(function (a) { return a === panel; })) {
            var area = this.hidedPanels.find(function (a) { return a === panel; });
            this.hidedPanels.splice(this.hidedPanels.indexOf(area), 1);
        }
    };
    TamSplitterComponent.prototype.setTransitionTime = function (ms) {
        this.displayedPanels.forEach(function (panel) {
            panel.setStyleTransitionTime(ms / 1000 + 's');
        });
    };
    /* below function is used for the drag event */
    TamSplitterComponent.prototype.startDragging = function (startEvent, barOrder, barNum) {
        var _this = this;
        startEvent.preventDefault();
        // Place code here to allow '(gutterClick)' event even if '[disabled]="true"'.
        this.currentbarNum = barNum;
        this.draggingWithoutMove = true;
        this.ngZone.runOutsideAngular(function () {
            _this.dragListeners.push(_this.renderer.listen('document', 'mouseup', function (e) { return _this.stopDragging(); }));
            _this.dragListeners.push(_this.renderer.listen('document', 'touchend', function (e) { return _this.stopDragging(); }));
            _this.dragListeners.push(_this.renderer.listen('document', 'touchcancel', function (e) { return _this.stopDragging(); }));
        });
        var panelA = this.displayedPanels.find(function (a) { return a.order === barOrder - 1; });
        var alterPanelA; // the alternative of A panel
        if (barOrder === 3 && this.displayedPanels.length === 3 && this.direction === "horizontal" && this.isType('macNotes')) {
            alterPanelA = this.displayedPanels.find(function (a) { return a.order === 0; });
        }
        var panelB;
        // as notes on mac does, when user drag the left panel, its width should give the last one.
        if (barOrder === 1 && this.displayedPanels.length === 3 && this.direction === "horizontal" && this.isType('macNotes')) {
            panelB = this.displayedPanels.find(function (a) { return a.order === 4; });
        }
        else {
            panelB = this.displayedPanels.find(function (a) { return a.order === barOrder + 1; });
        }
        if (!panelA || !panelB) {
            return;
        }
        var prop = (this.direction === 'horizontal') ? 'offsetWidth' : 'offsetHeight';
        this.dragStartValues.sizePixelContainer = this.elRef.nativeElement[prop];
        this.dragStartValues.sizePixelA = panelA.getSizePixel(prop);
        this.dragStartValues.sizePixelB = panelB.getSizePixel(prop);
        this.dragStartValues.sizePercentA = panelA.size;
        this.dragStartValues.sizePercentB = panelB.size;
        var start;
        if (startEvent instanceof MouseEvent) {
            start = {
                x: startEvent.screenX,
                y: startEvent.screenY,
            };
        }
        else if (startEvent instanceof TouchEvent) {
            start = {
                x: startEvent.touches[0].screenX,
                y: startEvent.touches[0].screenY,
            };
        }
        else {
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            _this.dragListeners.push(_this.renderer.listen('document', 'mousemove', function (e) { return _this.dragEvent(e, start, panelA, panelB, alterPanelA); }));
            _this.dragListeners.push(_this.renderer.listen('document', 'touchmove', function (e) { return _this.dragEvent(e, start, panelA, panelB, alterPanelA); }));
        });
        this.isDragging = true;
    };
    TamSplitterComponent.prototype.dragEvent = function (event, start, panelA, panelB, alterPanelA) {
        if (!this.isDragging) {
            return;
        }
        var end;
        if (event instanceof MouseEvent) {
            end = {
                x: event.screenX,
                y: event.screenY,
            };
        }
        else if (event instanceof TouchEvent) {
            end = {
                x: event.touches[0].screenX,
                y: event.touches[0].screenY,
            };
        }
        else {
            return;
        }
        this.draggingWithoutMove = false;
        this.drag(start, end, panelA, panelB, alterPanelA);
    };
    TamSplitterComponent.prototype.drag = function (start, end, panelA, panelB, alterPanelA) {
        // ¤ AREAS SIZE PIXEL
        var devicePixelRatio = window.devicePixelRatio || 1;
        var offsetPixel = (this.direction === 'horizontal') ? (start.x - end.x) : (start.y - end.y);
        // comment from damon.du  I don't know why we need this
        // offsetPixel = offsetPixel / devicePixelRatio;
        var newSizePixelA = this.dragStartValues.sizePixelA - offsetPixel;
        var newSizePixelB = this.dragStartValues.sizePixelB + offsetPixel;
        // ¤ AREAS SIZE PERCENT
        // NEW_PERCENT = START_PERCENT / START_PIXEL * NEW_PIXEL;
        if (this.dragStartValues.sizePercentA === 0) {
            panelB.size = this.dragStartValues.sizePercentB / this.dragStartValues.sizePixelB * newSizePixelB;
            panelA.size = this.dragStartValues.sizePercentB - panelB.size;
        }
        else if (this.dragStartValues.sizePercentB === 0) {
            panelA.size = this.dragStartValues.sizePercentA / this.dragStartValues.sizePixelA * newSizePixelA;
            panelB.size = this.dragStartValues.sizePercentA - panelA.size;
        }
        else {
            // based on the logical percentage panel width(A and B);
            panelA.size = this.dragStartValues.sizePercentA / this.dragStartValues.sizePixelA * newSizePixelA;
            panelB.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelA.size;
            if (panelA.size >= panelA.max) {
                panelA.size = panelA.max;
                panelB.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelA.size;
            }
            else if (panelA.size <= panelA.min) {
                panelA.size = panelA.min;
                // handle the macNotes behaivor
                if (alterPanelA) {
                    // calculate alterA percentage with the size.
                    var sizePixelalterA = this.dragStartValues.sizePixelContainer - this.dragStartValues.sizePixelA - this.dragStartValues.sizePixelB;
                    var offsetPixelalterA = offsetPixel - (this.dragStartValues.sizePixelA - this.dragStartValues.sizePixelContainer * panelA.min / 100);
                    var newSizePixelalterA = sizePixelalterA - offsetPixelalterA;
                    if (newSizePixelalterA <= this.dragStartValues.sizePixelContainer * alterPanelA.min / 100) {
                        alterPanelA.size = alterPanelA.min;
                    }
                    else {
                        alterPanelA.size = newSizePixelalterA / this.dragStartValues.sizePixelContainer * 100;
                        panelB.size = 100 - panelA.size - alterPanelA.size;
                    }
                }
                else {
                    panelB.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelA.size;
                }
            }
            else {
                panelB.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelA.size;
            }
            if (panelB.size >= panelB.max) {
                if (alterPanelA) {
                    panelB.size = panelB.max;
                }
                else {
                    panelB.size = panelB.max;
                    panelA.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelB.size;
                }
            }
            else if (panelB.size <= panelB.min) {
                panelB.size = panelB.min;
                panelA.size = (this.dragStartValues.sizePercentA + this.dragStartValues.sizePercentB) - panelB.size;
            }
        }
        var sizeArr = this.displayedPanels.map(function (value) { return value.size; });
        if (sizeArr.length > 0) {
            this.sizeChange.emit({
                barNum: this.currentbarNum,
                sizes: sizeArr
            });
        }
        this.refreshStyleSizes();
    };
    TamSplitterComponent.prototype.stopDragging = function () {
        if (this.isDragging === false && this.draggingWithoutMove === false) {
            return;
        }
        while (this.dragListeners.length > 0) {
            var fct = this.dragListeners.pop();
            if (fct) {
                fct();
            }
        }
        this.isDragging = false;
        this.draggingWithoutMove = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TamSplitterComponent.prototype, "useTransition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TamSplitterComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TamSplitterComponent.prototype, "splitterBarWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TamSplitterComponent.prototype, "direction", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TamSplitterComponent.prototype, "sizeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.flex-direction'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TamSplitterComponent.prototype, "cssFlexdirection", null);
    TamSplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tam-splitter',
            template: __webpack_require__(/*! ./tam-splitter.component.html */ "./src/app/components/tam-splitter/tam-splitter.component.html"),
            styles: [__webpack_require__(/*! ./tam-splitter.component.scss */ "./src/app/components/tam-splitter/tam-splitter.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TamSplitterComponent);
    return TamSplitterComponent;
}());



/***/ }),

/***/ "./src/app/components/tam.module.ts":
/*!******************************************!*\
  !*** ./src/app/components/tam.module.ts ***!
  \******************************************/
/*! exports provided: TamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TamModule", function() { return TamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _tam_splitter_tam_splitter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tam-splitter/tam-splitter.component */ "./src/app/components/tam-splitter/tam-splitter.component.ts");
/* harmony import */ var _tam_splitter_panel_tam_splitter_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tam-splitter-panel/tam-splitter-panel.component */ "./src/app/components/tam-splitter-panel/tam-splitter-panel.component.ts");
/* harmony import */ var _tam_splitter_bar_tam_splitter_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tam-splitter-bar/tam-splitter-bar.component */ "./src/app/components/tam-splitter-bar/tam-splitter-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TamModule = /** @class */ (function () {
    function TamModule() {
    }
    TamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tam_splitter_tam_splitter_component__WEBPACK_IMPORTED_MODULE_2__["TamSplitterComponent"],
                _tam_splitter_panel_tam_splitter_panel_component__WEBPACK_IMPORTED_MODULE_3__["TamSplitterPanelComponent"],
                _tam_splitter_bar_tam_splitter_bar_component__WEBPACK_IMPORTED_MODULE_4__["TamSplitterBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            exports: [_tam_splitter_tam_splitter_component__WEBPACK_IMPORTED_MODULE_2__["TamSplitterComponent"],
                _tam_splitter_panel_tam_splitter_panel_component__WEBPACK_IMPORTED_MODULE_3__["TamSplitterPanelComponent"],
                _tam_splitter_bar_tam_splitter_bar_component__WEBPACK_IMPORTED_MODULE_4__["TamSplitterBarComponent"]
            ]
        })
    ], TamModule);
    return TamModule;
}());



/***/ }),

/***/ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tam-splitter splitterBarWidth=3 [direction]=\"snippetView.direction\" (sizeChange)=\"sizeChange($event)\" [useTransition]=\"100\"\n    [type]=\"'macNotes'\">\n    <tam-splitter-panel [size]=\"snippetView.refinedByWidth\" [max]=\"snippetView.refinedByMax\" [min]=\"snippetView.refinedByMin\"\n        [visible]=\"snippetView.refineByShow\" (collapsedChange)=\"collapsedChange($event)\">\n        <h3>Left Panel</h3>\n        <p>when draging the first bar, the width of center panel should be frozing.</p>\n    </tam-splitter-panel>\n    <tam-splitter-panel [visible]=\"snippetView.middleShow\" [size]=\"snippetView.middleWidth\" [max]=\"snippetView.middleMax\"\n        [min]=\"snippetView.middleMin\">\n        <h3>Center Panel</h3>\n        <p>when draging the second bar, the increase or decrease will get from the center panel at priority, and from\n            the left panel.</p>\n    </tam-splitter-panel>\n    <tam-splitter-panel [size]=\"snippetView.previewWidth\" [max]=\"snippetView.previewMax\" [min]=\"snippetView.previewMin\">\n        <h3>Right Panel</h3>\n    </tam-splitter-panel>\n</tam-splitter>\n<button (click)=\"collapse()\">collapse</button>\n<button class=\"btn\" (click)=\"changeDir()\">change</button>"

/***/ }),

/***/ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\nbutton {\n  position: fixed;\n  bottom: 10px;\n  left: 10px; }\n\nbutton.btn {\n    right: 10px;\n    left: auto; }\n"

/***/ }),

/***/ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.ts ***!
  \**************************************************************************/
/*! exports provided: MacNotesSplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacNotesSplitterComponent", function() { return MacNotesSplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MacNotesSplitterComponent = /** @class */ (function () {
    function MacNotesSplitterComponent() {
        this.snippetView = {
            direction: "horizontal",
            refinedByWidth: 20,
            refinedByMax: 30,
            refinedByMin: 10,
            refineByShow: true,
            middleWidth: 30,
            middleMax: 40,
            middleMin: 20,
            middleShow: true,
            previewWidth: 50,
            previewMax: 70,
            previewMin: 30
        };
    }
    MacNotesSplitterComponent.prototype.ngOnInit = function () {
    };
    MacNotesSplitterComponent.prototype.collapse = function () {
        this.snippetView.refineByShow = !this.snippetView.refineByShow;
    };
    MacNotesSplitterComponent.prototype.changeDir = function () {
        // this.snippetView.middleShow = !this.snippetView.middleShow;
        this.snippetView.direction = this.snippetView.direction === "horizontal" ? "vertical" : "horizontal";
    };
    MacNotesSplitterComponent.prototype.collapsedChange = function (e) {
        if (e.collapsed) {
            this.snippetView.previewWidth = e.collapsedComponentSize + e.sizes[e.sizes.length - 1];
        }
        else {
            this.snippetView.previewWidth = e.sizes[e.sizes.length - 1] - e.collapsedComponentSize;
        }
    };
    MacNotesSplitterComponent.prototype.sizeChange = function (e) {
        // console.log(e)
    };
    MacNotesSplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mac-notes-splitter',
            template: __webpack_require__(/*! ./mac-notes-splitter.component.html */ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.html"),
            styles: [__webpack_require__(/*! ./mac-notes-splitter.component.scss */ "./src/app/pages/mac-notes-splitter/mac-notes-splitter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MacNotesSplitterComponent);
    return MacNotesSplitterComponent;
}());



/***/ }),

/***/ "./src/app/pages/nested-splitter/nested-splitter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nested-splitter/nested-splitter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tam-splitter splitterBarWidth=3>\n    <tam-splitter-panel [size]=\"20\" [max]=\"30\" [min]=\"10\">\n        Refined By Panel\n    </tam-splitter-panel>\n\n    <tam-splitter-panel [size]=\"80\">\n\n        <tam-splitter splitterBarWidth=3 [direction]=\"'vertical'\">\n            <tam-splitter-panel [size]=\"30\" [max]=\"40\" [min]=\"20\">\n                Side List Panel\n            </tam-splitter-panel>\n\n            <tam-splitter-panel [size]=\"70\" [max]=\"80\" [min]=\"60\">\n                Preview Panel\n            </tam-splitter-panel>\n        </tam-splitter>\n    </tam-splitter-panel>\n\n</tam-splitter>"

/***/ }),

/***/ "./src/app/pages/nested-splitter/nested-splitter.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/nested-splitter/nested-splitter.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/nested-splitter/nested-splitter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/nested-splitter/nested-splitter.component.ts ***!
  \********************************************************************/
/*! exports provided: NestedSplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedSplitterComponent", function() { return NestedSplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NestedSplitterComponent = /** @class */ (function () {
    function NestedSplitterComponent() {
    }
    NestedSplitterComponent.prototype.ngOnInit = function () {
    };
    NestedSplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nested-splitter',
            template: __webpack_require__(/*! ./nested-splitter.component.html */ "./src/app/pages/nested-splitter/nested-splitter.component.html"),
            styles: [__webpack_require__(/*! ./nested-splitter.component.scss */ "./src/app/pages/nested-splitter/nested-splitter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NestedSplitterComponent);
    return NestedSplitterComponent;
}());



/***/ }),

/***/ "./src/app/pages/simple-splitter/simple-splitter.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/simple-splitter/simple-splitter.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tam-splitter splitterBarWidth=3 [direction]=\"snippetView.direction\" (sizeChange)=\"sizeChange($event)\" [useTransition]=\"100\">\n    <tam-splitter-panel [size]=\"snippetView.refinedByWidth\" [max]=\"snippetView.refinedByMax\" [min]=\"snippetView.refinedByMin\"\n        [visible]=\"snippetView.refineByShow\" (collapsedChange)=\"collapsedChange($event)\">\n        Refined By Panel\n    </tam-splitter-panel>\n    <tam-splitter-panel [visible]=\"snippetView.middleShow\" [size]=\"snippetView.middleWidth\" [max]=\"snippetView.middleMax\" [min]=\"snippetView.middleMin\">\n        Side List Panel\n    </tam-splitter-panel>\n    <tam-splitter-panel [size]=\"snippetView.previewWidth\" [max]=\"snippetView.previewMax\" [min]=\"snippetView.previewMin\">\n        Preview Panel\n    </tam-splitter-panel>\n</tam-splitter>\n<button (click)=\"collapse()\">collapse</button>\n<button class=\"btn\" (click)=\"changeDir()\">change</button>"

/***/ }),

/***/ "./src/app/pages/simple-splitter/simple-splitter.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/simple-splitter/simple-splitter.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\nbutton {\n  position: fixed;\n  bottom: 10px;\n  left: 10px; }\n\nbutton.btn {\n    right: 10px;\n    left: auto; }\n"

/***/ }),

/***/ "./src/app/pages/simple-splitter/simple-splitter.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/simple-splitter/simple-splitter.component.ts ***!
  \********************************************************************/
/*! exports provided: SimpleSplitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleSplitterComponent", function() { return SimpleSplitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleSplitterComponent = /** @class */ (function () {
    function SimpleSplitterComponent() {
        this.snippetView = {
            direction: "horizontal",
            refinedByWidth: 20,
            refinedByMax: 30,
            refinedByMin: 10,
            refineByShow: true,
            middleWidth: 30,
            middleMax: 40,
            middleMin: 20,
            middleShow: true,
            previewWidth: 50,
            previewMax: 70,
            previewMin: 30
        };
    }
    SimpleSplitterComponent.prototype.ngOnInit = function () {
    };
    SimpleSplitterComponent.prototype.collapse = function () {
        this.snippetView.refineByShow = !this.snippetView.refineByShow;
    };
    SimpleSplitterComponent.prototype.changeDir = function () {
        // this.snippetView.middleShow = !this.snippetView.middleShow;
        this.snippetView.direction = this.snippetView.direction === "horizontal" ? "vertical" : "horizontal";
    };
    SimpleSplitterComponent.prototype.collapsedChange = function (e) {
        if (e.collapsed) {
            this.snippetView.previewWidth = e.collapsedComponentSize + e.sizes[e.sizes.length - 1];
        }
        else {
            this.snippetView.previewWidth = e.sizes[e.sizes.length - 1] - e.collapsedComponentSize;
        }
    };
    SimpleSplitterComponent.prototype.sizeChange = function (e) {
        console.log(e);
    };
    SimpleSplitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'simple-splitter',
            template: __webpack_require__(/*! ./simple-splitter.component.html */ "./src/app/pages/simple-splitter/simple-splitter.component.html"),
            styles: [__webpack_require__(/*! ./simple-splitter.component.scss */ "./src/app/pages/simple-splitter/simple-splitter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleSplitterComponent);
    return SimpleSplitterComponent;
}());



/***/ }),

/***/ "./src/app/services/count.ts":
/*!***********************************!*\
  !*** ./src/app/services/count.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function count() {
    var num = 0;
    return function () {
        num++;
        return num;
    };
}
var index = count();
/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/didi/JavaScript/angular-splitter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map