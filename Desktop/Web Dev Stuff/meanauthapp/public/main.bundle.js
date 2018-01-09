webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pricing_pricing_component__ = __webpack_require__("../../../../../src/app/components/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fillerbooking_fillerbooking_component__ = __webpack_require__("../../../../../src/app/components/fillerbooking/fillerbooking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'navbar', component: __WEBPACK_IMPORTED_MODULE_2__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_8__components_pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__components_fillerbooking_fillerbooking_component__["a" /* FillerbookingComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_dir_highlight_directive__ = __webpack_require__("../../../../../src/app/test-dir/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_shrink_directive__ = __webpack_require__("../../../../../src/app/directives/shrink.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pricing_pricing_component__ = __webpack_require__("../../../../../src/app/components/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_fillerbooking_fillerbooking_component__ = __webpack_require__("../../../../../src/app/components/fillerbooking/fillerbooking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test_dir_highlight_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_11__directives_shrink_directive__["a" /* ShrinkDirective */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_fillerbooking_fillerbooking_component__["a" /* FillerbookingComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["HttpModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  width: 20rem;\n  margin: 0 auto; /* Added */\n  float: none; /* Added */\n  margin-top: 60px;\n}\n\n.container-fluid {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/laptopstock.png") + ");\n  background-color: gray;\n  background-position: center;\n  background-size: cover;\n  height: 700px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"card mb-3\">\n      <img class=\"card-img-top\" src=\"../../../assets/images/logo.jpg\" alt=\"Card image\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">About us</h4>\n        <p class=\"card-text\">NDTech is a small startup company that aims to bring IT solutions and mobile repair work into the 21st century. We are made up of a group of very passionate individuals driven by our desire to make life easier for our customers.</p>\n      </div>\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/contact']\" class=\"card-link\">Contact us</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/fillerbooking/fillerbooking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-new {\n  text-align: center;\n  height: auto;\n  width: 100%\n}\n\n.box {\n  position: absolute;\n  left:29%;\n  top: 40%;\n  height: 160px;\n  width: 500px;\n  background-color: #A8A7A8;\n  border-radius: 4px;\n  padding: 60px;\n  box-shadow: 0 0 15px #202020;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/fillerbooking/fillerbooking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-new\">\n  <div class=\"upper\"></div>\n  <div class=\"box\">\n    <div class=\"box-content\">\n      <p>\n        For booking, please call us at (954) 899-3211 or email us at NDTech101@gmail.com\n      </p>\n    </div>\n  </div>\n  <div class=\"lower\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/fillerbooking/fillerbooking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillerbookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FillerbookingComponent = (function () {
    function FillerbookingComponent() {
    }
    FillerbookingComponent.prototype.ngOnInit = function () {
    };
    FillerbookingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fillerbooking',
            template: __webpack_require__("../../../../../src/app/components/fillerbooking/fillerbooking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/fillerbooking/fillerbooking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FillerbookingComponent);
    return FillerbookingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n    margin-bottom: 0px;\n    background-color: gray;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/jumbo.png") + ");\n    background-position: 0% 55%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 350px;\n    color: white;\n}\n\n.jumbo-head {\n  margin-top: 70px;\n}\n\n.description-box {\n  margin-top: 15px;\n}\n\n.new-icon {\n  margin-top: 30px;\n  width: 100%;\n  height: 90px;\n  display:inline-block;\n  text-align: center;\n}\n\n.description-text {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.description {\n  padding: 30px;\n}\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n\n.fade-in {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fade-in.one {\n  -webkit-animation-delay: 0.s;\n  animation-delay: 0.4s;\n}\n\n.fade-in.two {\n  -webkit-animation-delay: 1.2s;\n  animation-delay: 1.2s;\n}\n\n.fade-in.three {\n  -webkit-animation-delay: 1.6s;\n  animation-delay: 1.6s;\n}\n\n.fade-in.four {\n  -webkit-animation-delay: 2.1s;\n  animation-delay: 2.1s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid text-center fade-in one\">\n  <div class='container-fluid'>\n    <h1 class=\"jumbo-head\">Don't want to go into the shop?</h1>\n    <p class=\"lead\">Have one of our certified technicians come to you</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/contact']\">Book an appointment</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"row description-box\">\n  <div class=\"col-md-4 description fade-in two\">\n    <span class=\"new-icon\"><img src=\"../../../assets/images/techs.png\"/></span>\n    <h3 class=\"text-center\">Reliable Technicians</h3>\n    <p class=\"description-text text-center\">NDTechs pride themselves on bringing top quality repairs to each and every customer.</p>\n  </div>\n  <div class=\"col-md-4 description fade-in three\">\n    <span class=\"new-icon\"><img src=\"../../../assets/images/service.png\"/></span>\n    <h3 class=\"text-center\">Customer-first Service</h3>\n    <p class=\"description-text text-center\">We know how stressful having a broken device can be; We make sure to provide the most seemless experience possible.</p>\n  </div>\n  <div class=\"col-md-4 description fade-in four\">\n    <span class=\"new-icon\"><img src=\"../../../assets/images/quickly.png\"/></span>\n    <h3 class=\"text-center\">Quick and Easy</h3>\n    <p class=\"description-text text-center\">Repairs take no more than 30 minutes; Your devices will be as good as new in no time.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-item {\n  text-transform: uppercase;\n  letter-spacing: 0.35em;\n}\n\n.navbar {\n  height: 4rem;\n}\n\n.site-logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/sitelogo.png") + ");\n  position: absolute;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  width:50px;\n  height:50px;\n  display: block;\n  float: left;\n  top: 3px;\n}\n\n.navbar-brand {\n}\n\n.logo-text {\n  margin-left: 42px;\n  margin-top: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" appShrink>\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><span class=\"site-logo\"></span><p class=\"logo-text\">Tech</p></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/pricing']\">Pricing</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pricing-table {\n  margin-top: 30px;\n}\n\n.jumbotron {\n  height: 250px;\n  top: 4rem;\n  position: absolute;\n  width: 100%;\n  background-color: #2A363B;\n  color: white;\n}\n\n.jumbo-head {\n  padding-top: 50px;\n  letter-spacing: 1em;\n  font-family: 'Raleway', sans-serif;\n}\n\n.container {\n  margin-top: 200px;\n}\n\n.card-title {\n  padding-top: 1.25rem;\n  padding-left: 1.25rem;\n  margin-left: 25px;\n}\n\n.table {\n  margin-top: .5rem;\n  margin-bottom: 0;\n}\n\n.card {\n  box-shadow: 0 0 15px #202020;\n  border-radius: 0px;\n  min-width: 297px;\n  border-bottom: 1px solid;\n}\n\n.logo {\n  height:40px;\n  width: 40px;\n  position: absolute;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: block;\n  float: left;\n  top: 7px;\n  left: 2px;\n\n}\n\n.apple-logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/apple-logo.png") + ");\n}\n\n.iphone-logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/iphone.png") + ");\n  top: 10px;\n  left: 5px;\n}\n\n.android-logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/android-logo.png") + ");\n}\n\n.ipad-logo {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/ipad.png") + ");\n  margin-top: 3px;\n}\n\n.tall {\n  height: 700px;\n}\n\n@@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  opacity: 0;\n  -webkit-animation: fadeIn 1s ease-in;\n          animation: fadeIn 1s ease-in;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.one {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.two {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n\n.three {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.four {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid text-center\">\n  <div class='container-fluid'>\n    <h2 class=\"jumbo-head fade-in one\">PRICING</h2>\n  </div>\n</div>\n\n<div class=\"container tall\">\n  <div class=\"row\">\n    <div class=\"card mx-auto fade-in two\">\n        <span class=\"iphone-logo logo\"></span><h4 class=\"card-title\">iPhone</h4>\n        <table class=\"table table-hover pricing-table\">\n        <thead>\n          <tr class=\"table-dark\">\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Repair Time</th>\n          </tr>\n        </thead>\n          <tbody>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 8 Plus</th>\n              <td>$114.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 8</th>\n              <td>$109.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 7 Plus</th>\n              <td>$99.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 7</th>\n              <td>$89.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 6S Plus</th>\n              <td>$84.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 6S</th>\n              <td>$79.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 6 Plus</th>\n              <td>$74.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 6</th>\n              <td>$69.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 5S/SE/5C</th>\n              <td>$54.99</td>\n              <td>30 minutes</td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n    <div class=\"card mx-auto fade-in three\">\n        <span class=\"android-logo logo\"></span><h4 class=\"card-title\">Android</h4>\n        <table class=\"table table-hover pricing-table\">\n        <thead>\n          <tr class=\"table-dark\">\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Repair Time</th>\n          </tr>\n        </thead>\n          <tbody>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy S8 Plus</th>\n              <td>$289.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy S8</th>\n              <td>$279.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy S7</th>\n              <td>$179.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy S6</th>\n              <td>$169.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy Note 8</th>\n              <td>$349.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Galaxy Note 5</th>\n              <td>$214.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">LG G5</th>\n              <td>$99.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Google Pixel 2</th>\n              <td>$179.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">Google Pixel 2 XL</th>\n              <td>$234.99</td>\n              <td>30 minutes</td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n    <div class=\"card mx-auto fade-in four\">\n        <span class=\"ipad-logo logo\"></span><h4 class=\"card-title\">iPad</h4>\n        <table class=\"table table-hover pricing-table\">\n        <thead>\n          <tr class=\"table-dark\">\n            <th scope=\"col\">Phone</th>\n            <th scope=\"col\">Price</th>\n            <th scope=\"col\">Repair Time</th>\n          </tr>\n        </thead>\n          <tbody>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPhone 3/4</th>\n              <td>$79.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad 2</th>\n              <td>$69.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Air</th>\n              <td>$89.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Air 2</th>\n              <td>$164.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Mini 1</th>\n              <td>$84.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Mini 2</th>\n              <td>$89.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Mini 3</th>\n              <td>$89.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad Mini 4</th>\n              <td>$149.99</td>\n              <td>30 minutes</td>\n            </tr>\n            <tr class=\"table-default\">\n              <th scope=\"row\">iPad 5</th>\n              <td>$99.99</td>\n              <td>30 minutes</td>\n            </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__("../../../../../src/app/components/pricing/pricing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      {{user.username}}\n    </li>\n    <li class=\"list-group-item\">\n      {{user.email}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".regis {\n  box-shadow: 5px 8px 10px grey;\n  border-style: solid 5px;\n  /*background-color: #D5D5D5*/\n}\n\n.formsContained {\n  height: 1000px;\n  background-color:\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"mx-auto w-50 p-3 regis\">\n        <h3>Register</h3>\n        <hr />\n        <br />\n        <form (submit)=\"onRegisterSubmit()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n          </div>\n          <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n        </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('you must fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //email validation
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('you must use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/shrink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ShrinkDirective = (function () {
    function ShrinkDirective(document) {
        this.document = document;
    }
    ShrinkDirective.prototype.onScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number > 100) {
            console.log('youre scrolling');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShrinkDirective.prototype, "onScroll", null);
    ShrinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appShrink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Document])
    ], ShrinkDirective);
    return ShrinkDirective;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"];
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/test-dir/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "../../../../../src/assets/images/android-logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQgCAhE0jodoAAAC2UlEQVRo3u2ZQUgUURjHf6sSGKuSqax5ENSsCMQi6OIhiOgQLIQdCxciiPAglEIgKJIZS3URPHjqEBRI1EVB6CQSEpKGp3AjKlgHatfWlb24u6+Dur6ZWWfe7r6FoPkeLPPm++b7//jemzdvZkHVpggpx4aYUo5VtgGStCpFtpJkQD9ABUvMK0XOs0SFatoqZYAst/lEiBcA+DhBgAABwMDAIIoAIMQlzpPVXwGAEeK0E2SaKMLSokwTpJ04I+URB2gmZRO2thTN5ZLvxXCVFwgMevWLNzGjJL7fZmjSKR8gUpC8QBAhoEu+jtWC5QWCVep0yFezkEu5wZjLULxhjI1cb4Hq0gEeS+mDABKQtX0AICidmXBL77Zi1dMv9WIAJA6Njkm/u9ZPg7NApQvAQ65IvW5+c4M7+A6J7kDQwIS0EhxB8L6Ywu9aDX+Kmn5yS3Ks+CE4p2Ee+7lQPMCZkuUBTv33AJ1OTuf9QILvGgAShYU3qe9mCrYK+yNKvqMrGeIB9aR4yX22gVuc1SD7mVeAn2fc5ChxnhImky9wXLp7ZwF4V/IqIBC8BmBWOjOeT76WHdNlPVoBekxndqg9GJV967JMyItaR9+crYouO4DfckmNVgBrtpxa+Wa8onkAHoAH4AF4AB6AB3AAkLR4trTqWLPl1A4A1kibQj5qBTBnS7NmB9giLIXMsagVYJE5qRfOX99KBjEQJJjc2zLp3BX7mSSBwGDQ+aNAo1QVnQC79W60ytlfzX5pLb3ZsvbszrdhBh3m+N3YGeCLFoBI8Zd2KnwbdmvbnCyF/io/S5L/wWVnAZ8rgo8OjgNwnSGT59HeKyxcY9jkCfMWgBgRhHN69z8sBOusA9Bt8Xxlae/otMXzLedxtX/oYeQBeAAegLttHtrfdInUZG1kpEU2TUvO00Ja8mRoK1e9nksyoybPqOR5Ui558HGPFVIs02fz9bFMihXuFpbyL3WrPxelNk5DAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTA4VDAyOjAyOjE3KzAxOjAwstNa2wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0wOFQwMjowMjoxNyswMTowMMOO4mcAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/apple-logo.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQgBMjc7g4o/AAAC7ElEQVRo3sWZ30tUQRSAv9arSKiVpIjlQ1FbUESSaKlImFESBUVEFkIm2D8QPQSR0IMZQUhFRSVET9WDEUoPgfUSJmRhIOTP1ALDMMssZP0xPbTF3d3undl1z90zD/sww3zfmXvu3rlzIf6RRi0v2SYws0GU0sw0CsU+7+GF9KD+tTVe488QsOG/eI0/a4MrFG3e4qvC8Ip6L/EpfIoQqPRSoC4C34flHT6JwQiBo17mfzwC38kSLwWeh+HHWO0lHj6H4H9R6C1+eQh+kt3e4qHIhu9lY/QTmN0uFjlkMsR0RM+G4O8ojdwhAIAfP6vIYYJ++hlhfjEZ7uA6o8yjUCzwgVYuUk0+qcH+ndRRRjYAWRzmNiNhRRmgle2xwUtCnm6hbZYublDDJnz4qeEu7x3HKhTPKIsOnsqVYN66Nms0SqE4Z45P5qnxtNG0BjO8j4cieIWiyeRf8pIYXqG4qsMXMCeID+j2ihZvBfGzHNLlf0oQP88x/fWXy3+Bk3p8gWD+F0xuwJti+EkynO55e1SYWMYUTUzpB2WL5f+dFU5Q+wrE+MwyiCdMmggUiAn0OnfZBbISLbBMTKAv0QIu78p2gQztRLHGWjOBn2IC680EviZaYEJMwJ9ogcrgxl0jMCYmsJTTJsPyBR/G06zUC1jBEz6Z1miyBi8EBebYr6sB6BCrAkjiASW6QeWCK/BnX7TZXcDHR2GFKc6T5qbQICygUIxT7VQDcF+wCv5GFrlu3a/FVyBg/1/0RQhcE1+BFsbdui0GhFegXGdYI4rv0Z8QWAwJCuw1uUq1YvhWszKx6BKqf7+ZAGwJ+QIUr3Y5mpulPu744ej23cm8i/PyR/3uuZUfcRQw2pSFxy5m4oRvifUrysG4HNo9IsUJoPeq4hbp/+2Zo4MBhoFc8ih1LLFm6hZ3ZJ9HW1hG33jMCTJDRiVTQRPdYUfcwxxxn9z0yhxgD0Wso5N22nnjklE6RRRTTDbdvOIeM+4T/wabG+91rBiq2QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMS0wOFQwMTo1MDo1NSswMTowMGluVbkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDEtMDhUMDE6NTA6NTUrMDE6MDAYM+0FAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/images/ipad.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQgCBhQgiLbjAAAA/ElEQVRo3u3ZMQrCMBTG8T9SlG6Cm56gIA69gJMIHsUDOTl4BY/g5gGEXkAHB3GtIo2Ti01t2qbq8H1ZSkLe+9GMD2yZsOWM8bjObBnjmAU3r81fK2Xm0j7k1Ep7g+FI+N6ukwPEDF1/VeWMiMsBUWvtrdUDinbuTD023tG19wsKrxj2HgGm6KBTpUobEUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAGCD2f93wJ6XL8B+OsnKE/CClg2GXQ1AVyISYE1RwZ1i+Sf4OF8d0MKQMrG+U6ueh6QOBeLLF9lcajuPrrNmAMwJ6s/urWlyvD6wMH38Bq+Or5/Aj73FzUbqYXyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTA4VDAyOjA2OjIwKzAxOjAw8BDDzAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0wOFQwMjowNjoyMCswMTowMIFNe3AAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/iphone.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAQgCCS8WG0MIAAABX0lEQVRo3u2ZsU4CQRCGP8ETgpdQeNIYkpOnoOIpjDUvQYlPwQPwAL6AJSUFLSUQiA16nQXRQpszmrizd85xXDP/NpfZ2ZnvdqbaAb/qjJhz4FOxDswZUaeAAmaq1L/XjMCX4twLMGbgsD7zJviH3PyxDRjzoL2BreOPEtqif5vEcWLrS1Hz7EV0HdYGTfFEk4bD2iWSk/hKEDqtl6z4EE4EtIRIrxoASS3FGdUNfCsRmy5LIVdF4OK0iYbqCMM0Qiy71HIHK0kGYAAGYAAGYAAGYAAGYAAGYAAGYAAGYAAGYAAGUDnAmWcvZg3Aihdl9Gt6ANyykVzyPNX20jClqPISVA6gea7/0TuPwB0X5cDFGeOoJR0AOiwzPGM5SZESTNgDsGeiD1IE4MnxdVKAe8fXUZXVAzv6APTZ6XvApyjHXHTBIodXpANwDy7/v9SDS5gepZQFopxgeJ2l0sf3X8PLOlqyl223AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTA4VDAyOjA5OjQ3KzAxOjAwAtOvSAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0wOFQwMjowOTo0NyswMTowMHOOF/QAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/jumbo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jumbo.d61baa5eba8919251db2.png";

/***/ }),

/***/ "../../../../../src/assets/images/laptopstock.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "laptopstock.0532be18b634f7e74517.png";

/***/ }),

/***/ "../../../../../src/assets/images/sitelogo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sitelogo.2213bb350a7e90b08310.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map