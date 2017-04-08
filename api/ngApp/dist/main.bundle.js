webpackJsonp([0,3],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(348);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(349);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(350);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });



//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatesService = (function () {
    function UpdatesService(http) {
        this.http = http;
        this.CREATIVE_TOP_MESSAGE_KEY = "creative_top_messages";
        this.MENUS_KEY = "menus";
        localStorage.setItem(this.CREATIVE_TOP_MESSAGE_KEY, "\n        [\n            \"<font size='2' color='blue' >Welcome to CheckIt</font>\",\n            \"<font size='2' color='blue' >We are together creative</font>\",\n            \"<font size='2' color='blue' >Explore explore explore and explore</font>\"\n        ]\n        ");
        localStorage.setItem(this.MENUS_KEY, "\n        [\n            {\n                \"id\": \"m1\",\n                \"title\": \"Products\",\n                \"photo\": \"http://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg\",\n                \"desc\": \"Explore our beautiful products. Experience great functions & UI with less efferts\"\n            },\n            {\n                \"id\": \"m2\",\n                \"title\": \"Business\",\n                \"photo\": \"http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg\",\n                \"desc\": \"We provide platform for your business plan. Here you can design evething in no time with our creative UI.\"\n            }, \n            {\n                \"id\": \"m3\",\n                \"title\": \"Explore\",\n                \"photo\":\"http://www.planwallpaper.com/static/images/9-credit-1.jpg\",\n                \"desc\": \"What is going on?? search for everything on a single platform. find the nice places in this World.\"\n            },\n            {\n                \"id\": \"m4\",\n                \"title\": \"Prove yourself\",\n                \"photo\": \"http://www.dam7.com/Images/Puppy/images/myspace-puppy-images-0005.jpg\",\n                \"desc\": \"Create a funtastic resume with a template of your choice FREE.\"\n            },\n            {\n                \"id\": \"m5\",\n                \"title\": \"Extra\",\n                \"photo\": \"http://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg\",\n                \"desc\": \"Know what are we here for? write us and much more things.\"\n            }\n            ]\n        ");
    }
    UpdatesService.prototype.getUpdatesMenuItems = function () {
        var data = JSON.parse(localStorage.getItem(this.MENUS_KEY));
        var maxDesc = 0;
        // data.forEach(item => {
        //     console.log("max " + maxDesc + " " + item.desc.length);
        //     if (item.desc.length > maxDesc) {
        //         maxDesc = item.desc.length;
        //     }
        // });
        // data.forEach(item => {
        //     for (let i = item.desc.length; i < maxDesc; i++) {
        //         item.desc += (Math.floor(Math.random() * 100000) % 2) ? " " : "2";
        //     }
        //     item.desc += "1";
        //     console.log('after ' + item.desc.length);
        // });
        return data;
    };
    UpdatesService.prototype.getTopCreativeMessage = function (old) {
        //Not want old
        var data = JSON.parse(localStorage.getItem(this.CREATIVE_TOP_MESSAGE_KEY));
        if (data.length == 0) {
            data = ["<font size='2' color='blue' >Welcome to CheckIt</font>"];
        }
        var result = data[Math.floor(Math.random() * 100000) % data.length];
        while (old == result) {
            result = data[Math.floor(Math.random() * 100000) % data.length];
        }
        return result;
    };
    return UpdatesService;
}());
UpdatesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UpdatesService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/updates.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export Profile */
var User = (function () {
    function User(parameters) {
        this.id = parameters.id;
        this.username = parameters.username;
        this.name = parameters.name;
        this.password = parameters.password;
        this.email = parameters.email;
        this.name = this.getName();
    }
    User.prototype.getName = function () {
        return this.name ? this.name : (this.email ? this.email.substring(0, this.email.indexOf('@')) : "");
    };
    User.prototype.toString = function () {
        return this.getName() + "(" + this.username + ")";
    };
    return User;
}());

var Profile = (function () {
    function Profile(parameters) {
    }
    return Profile;
}());

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/user.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundCompontent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundCompontent = (function () {
    function NotFoundCompontent() {
    }
    return NotFoundCompontent;
}());
NotFoundCompontent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: "\n    <div><h3>404 Page not found!</h3></div>\n    "
    })
], NotFoundCompontent);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.notfound.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_util__ = __webpack_require__(352);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_util__["a"]; });

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    function RegisterComponent(router, userService, alertService, stringUtil) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.stringUtil = stringUtil;
        this.model = {};
        this.loading = false;
        this.error = false;
    }
    RegisterComponent.prototype.getUserModel = function () {
        var um = {
            email: this.model.email,
            username: this.stringUtil.getUsername(this.model.email),
            password: this.model.password,
            name: ""
        };
        console.log(um);
        return um;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.error = false;
        this.error_message = "";
        this.userService.create(this.getUserModel())
            .subscribe(function (data) {
            console.log("Success " + data);
            _this.error = false;
            _this.error_message = "";
            // set success message and pass true paramater to persist the message after redirecting to the login page
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.error("Register Error " + error);
            _this.error = true;
            _this.error_message = error;
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__(516)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/register.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_updates__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(UpdatesService) {
        this.UpdatesService = UpdatesService;
        this.title = 'app works!';
        this.icon = './static/images/icon.png';
        this.toolbar_color = '#ee0';
        this.creativeBlock = "<font size='2' color='blue' >Creative block</font>";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.creativeBlock = this.UpdatesService.getTopCreativeMessage(this.creativeBlock);
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(2000, 2000);
        this.subscription = timer.subscribe(function (t) {
            _this.creativeBlock = _this.UpdatesService.getTopCreativeMessage(_this.creativeBlock);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(517),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.authenticated = false;
    }
    HomeComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.userService.getAll().map(function (re) {
            console.log("Going.. " + re);
            _this.users = re;
        });
        // this.users = this.userService.getAllLocal();
        // console.log(this.users);
        this.authenticated = true;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.authenticated = true; //this.userService.isAuthenticated();
        this.fetchUsers();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__(518)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/home.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductsComponent = (function () {
    function ProductsComponent() {
        this.COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#d7ccc8', '#bcaaa4', '#795548', '#d7ccc8', '#bcaaa4', '#8d6e63', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#cfd8dc', '#b0bec5', '#78909c'];
    }
    ProductsComponent.prototype.process = function () {
        var l = this.COLORS.length;
        var tmp = this.COLORS;
        for (var i = 0; i < this.COLORS.length; i++) {
            tmp[i] = this.COLORS[Math.floor(Math.random() * 100000) % this.COLORS.length];
        }
        console.log(tmp);
        return tmp;
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tiles = this.process();
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(2000, 2000);
        this.subscription = timer.subscribe(function (t) {
            _this.tiles = _this.process();
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        template: __webpack_require__(519)
    })
], ProductsComponent);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/products.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 286;


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(355);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user__["a"]; });

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/alert.service.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* unused harmony export AuthenticationService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/auth.service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.items = [
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 6, "email": "new@gmail.com", "username": "new" }),
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 5, "email": "asd@cd.com", "username": "as" }),
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 4, "email": "sfsd@asds.com", "username": "sfs" }),
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 3, "email": "user2@rjsite.com", "username": "user2" }),
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 2, "email": "user1@rjsite.com", "username": "user1" }),
            new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* User */]({ "id": 1, "email": "admin@rjsite.com", "username": "ranjeetsingh" })
        ];
    }
    UserService.prototype.authenticate = function (user) {
        return this.http.post('/api-token-auth/', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.getMyDetails = function () {
        return this.http.get('/api/users/get_my_details/', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAllLocal = function () {
        return this.items;
    };
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users/', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.isAuthenticated = function () {
        return true; //JSON.parse(localStorage.getItem('currentUser'));
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'Token ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/user.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(222);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckItAutoComplete; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckItAutoComplete = (function () {
    function CheckItAutoComplete() {
        this.searchCntrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]();
        this.items = [
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 6, "email": "new@gmail.com", "username": "new" }),
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 5, "email": "asd@cd.com", "username": "as" }),
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 4, "email": "sfsd@asds.com", "username": "sfs" }),
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 3, "email": "user2@rjsite.com", "username": "user2" }),
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 2, "email": "user1@rjsite.com", "username": "user1" }),
            new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]({ "id": 1, "email": "admin@rjsite.com", "username": "ranjeetsingh" })
        ];
    }
    CheckItAutoComplete.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredItems = this.searchCntrl.valueChanges
            .startWith(null)
            .map(function (item) { return item ? _this.filter(item) : _this.items; });
    };
    CheckItAutoComplete.prototype.filter = function (name) {
        return name ? this.items.filter(function (option) { return new RegExp(name, 'gi').test(option.name); }) : this.items;
    };
    CheckItAutoComplete.prototype.displayFn = function (item) {
        return item ? item.name : null;
    };
    return CheckItAutoComplete;
}());
CheckItAutoComplete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'checkit-autocomplete',
        template: __webpack_require__(515),
    })
], CheckItAutoComplete);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/autocomplete.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtil; });
var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.prototype.getUsername = function (email) {
        return email.substring(0, email.indexOf("@"));
    };
    return StringUtil;
}());

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/string-util.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__updates_updates_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_components_autocomplete__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_components_app_notfound__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__accounts_register_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_products_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_index__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_updates__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_index__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__utils_components_autocomplete__["a" /* CheckItAutoComplete */],
            __WEBPACK_IMPORTED_MODULE_7__updates_updates_component__["a" /* UpdatesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__accounts_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__utils_components_app_notfound__["a" /* NotFoundCompontent */],
            __WEBPACK_IMPORTED_MODULE_12__products_products_component__["a" /* ProductsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_index__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__services_index__["b" /* AlertService */], __WEBPACK_IMPORTED_MODULE_17__utils_index__["a" /* StringUtil */], __WEBPACK_IMPORTED_MODULE_16__services_updates__["a" /* UpdatesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_components_app_notfound__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });





var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__["a" /* RegisterComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */] },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__utils_components_app_notfound__["a" /* NotFoundCompontent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.routing.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(226);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_updates__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatesComponent = (function () {
    function UpdatesComponent(updatesService) {
        this.updatesService = updatesService;
        this.primary = "#e44";
        this.back_url = "./static/updates/assets/img/back.jpg";
        this.right_image = "./static/updates/assets/img/games.png";
        this.message = "Welcome";
    }
    UpdatesComponent.prototype.ngOnInit = function () {
        this.menus = this.updatesService.getUpdatesMenuItems();
    };
    return UpdatesComponent;
}());
UpdatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "update-component",
        template: __webpack_require__(520),
        styles: [__webpack_require__(512)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_updates__["a" /* UpdatesService */]) === "function" && _a || Object])
], UpdatesComponent);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/updates.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/environment.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/polyfills.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, "body {\n  margin: 50px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: #eee;\n  font-size: 16px;\n  line-height: 1.4;\n  -webkit-font-smoothing: antialiased;\n}\n\nh3 {\n  background-color: #cdb295;\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\n.small-demo {\n  min-height: 128px;\n  padding-bottom: 40px;\n  display: block;\n  background-color: #eee;\n}\n\n.colorNested, .colored, .coloredContainerX {\n  height:200px;\n}\n\n.taller {\n  height:300px;\n}\n\nmd-card {\n  background-color: white;\n}\n\ndiv.coloredContainerX > div, div.colorNested > div > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center;\n}\n\ndiv.coloredContainerX > div:nth-child(1), div.colorNested > div > div:nth-child(1), div.box1 {\n  background-color: #009688;\n}\n\ndiv.coloredContainerX > div:nth-child(2), div.colorNested > div > div:nth-child(2), div.box2 {\n  background-color: #3949ab;\n}\n\ndiv.coloredContainerX > div:nth-child(3), div.coloredChildren > div:nth-child(3), div.colorNested > div > div:nth-child(3), div.box3 {\n  background-color: #9c27b0;\n}\n\ndiv.coloredContainerX > div:nth-child(4), div.coloredChildren > div:nth-child(4), div.colorNested > div > div:nth-child(4) {\n  background-color: #b08752;\n}\n\ndiv.coloredContainerX > div:nth-child(5), div.coloredChildren > div:nth-child(5), div.colorNested > div > div:nth-child(5) {\n  background-color: #5ca6b0;\n}\n\ndiv.colored > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center;\n}\n\ndiv.colored > div:nth-child(1), .one {\n  background-color: #009688;\n}\n\ndiv.colored > div:nth-child(2), .two {\n  background-color: #3949ab;\n}\n\ndiv.colored > div:nth-child(3), .three {\n  background-color: #9c27b0;\n}\n\n\ndiv.colored > div:nth-child(4), .four {\n  background-color: #8bc34a;\n}\n\ndiv.colored > div:nth-child(5), .five {\n  background-color: #03A9F4;\n}\n\ndiv.colored > div:nth-child(6), .six {\n  background-color: #c9954e;\n}\n\ndiv.colored > div:nth-child(7), .seven {\n  background-color: #FF5722;\n}\n\n.hint {\n  margin:5px;\n  font-size:0.9em;\n  color: #a3a3a3;\n  margin-bottom:0;\n}\n\n.title {\n  margin:5px;\n  font-size:0.9em;\n  color: #5c5c5c;\n}\n\n.box {\n  border: solid 1px gray;\n}\n\n\nbutton.md-primary {\n  margin-left:25px;\n}\n\n.demo-content {\n  background-color: ghostwhite;\n}\n\nmd-toolbar-row  button {\n  min-width: 150px;\n}\n\ndiv.colored.box.nopad > div {\n  padding: 0;\n}\n\n.intro {\n  margin-top: -52px;\n  margin-left: 15px;\n  color: #5c5c5c;\n}\n\n\n.blocks {\n  min-width: 75px;\n  min-height: 50px;\n  border-radius: 3px;\n}\n\n.black {\n  border-radius: 5px;\n  min-width: 75px;\n  min-height: 50px;\n  color: white;\n  background-color: #292929;\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  text-align: center;\n}\n\n.target {\n  background-color: #05ffb0;\n  color: #310736;\n  cursor: pointer;\n}\n\n.two_h {\n  min-height : 100px;\n}\n.two_w {\n  min-width: 125px;\n}\n\n.four_h {\n  min-height: 75px;\n}\n.four_w {\n  min-width: 100px;\n}\n\n.bigger {\n  padding: 0 20px;\n  padding-bottom: 30px;\n}\n\nmd-toolbar .md-toolbar-layout md-toolbar-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  min-height: 40px;\n}\n\n.demo-content .small-demo:first-child {\n  margin-top: 40px;\n}\n\nmd-card-content pre {\n  font-size: 12px;\n  white-space: pre-wrap;\n}\n\n.fxClass-all {\n  font-style: italic;\n}\n\n.fxClass-xs {\n  font-size: 10px;\n  color: blue!important;\n}\n.fxClass-sm {\n  font-size: 20px;\n  color: lightblue!important;\n}\n.fxClass-md {\n  font-size: 30px;\n  color: orange!important;\n}\n.fxClass-md2 {\n  font-weight: bold;\n}\n.fxClass-lg {\n  font-size: 40px;\n  color: lightgreen!important;\n}\n.fxClass-lg2 {\n  text-shadow: #5c5c5c;\n}\n\n.fixed { height:275px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-input-container>\n        <input mdInput placeholder=\"Search products\" [mdAutocomplete]=\"auto\" [formControl]=\"searchCntrl\">\n    </md-input-container>\n\n    <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\n        <md-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\n            {{ item }}\n        </md-option>\n    </md-autocomplete>\n</div>"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #263238;min-height:300px;padding: 50px;\">\r\n    <md-card color=\"accent\" style=\"width:300px;margin:0px auto;\">\r\n        <md-card-title color=\"primary\">Register</md-card-title>\r\n        <md-card-content>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" placeholder=\"Email\"\r\n                            required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Password\" #password=\"ngModel\"\r\n                            required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && (!password1.valid) }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password1\" placeholder=\"Enter again\" [(ngModel)]=\"model.password1\"\r\n                            #password1=\"ngModel\" ng-mdch=\"emailReg\" required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !password1.valid && password.value != password1.value\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div *ngIf=\"error\" style=\"margin: 5px;\">\r\n                    <span style=\"color: red;\">{{error_message}}</span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" md-raised-button> <md-icon>done</md-icon> Register</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmdEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fmdgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <button md-button color=\"primary\" [routerLink]=\"['/']\">\r\n                <md-icon>clear</md-icon>Cancel</button>\r\n                </div>\r\n            </form>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>\r\n<!--\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Prefix + Suffix</md-toolbar>\r\n    <md-card-content>\r\n        <md-input placeholder=\"amount\" align=\"end\">\r\n            <span md-prefix>$&nbsp;</span>\r\n            <span md-suffix>.00</span>\r\n        </md-input>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Divider Colors</md-toolbar>\r\n    <md-card-content>\r\n        <h4>Input</h4>\r\n        <md-input dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-input>\r\n        <md-input dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-input>\r\n        <md-input dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-input>\r\n\r\n        <h4>Textarea</h4>\r\n        <md-textarea dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-textarea>\r\n        <md-textarea dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-textarea>\r\n        <md-textarea dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-textarea>\r\n\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Hints</md-toolbar>\r\n    <md-card-content>\r\n        <h4>Input</h4>\r\n        <p>\r\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\r\n                #characterCountHintExample>\r\n                <md-hint align=\"end\">{{characterCountHintExample.characterCount}} / 100</md-hint>\r\n            </md-input>\r\n        </p>\r\n\r\n        <h4>Textarea</h4>\r\n        <p>\r\n            <md-textarea placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\r\n                #characterCountHintExampleTextarea>\r\n                <md-hint align=\"end\">{{characterCountHintExampleTextarea.characterCount}} / 100</md-hint>\r\n            </md-textarea>\r\n        </p>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card\">\r\n    <md-card-title>\r\n        Hello\r\n        <md-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\"></md-input>, how are you?\r\n    </md-card-title>\r\n    <md-card-content>\r\n        <p>\r\n            <md-input disabled placeholder=\"Disabled field\" value=\"Value\"></md-input>\r\n            <md-input required placeholder=\"Required field\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"100% width placeholder\" style=\"width: 100%\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" style=\"width: 100%\" #input>\r\n                <md-hint align=\"end\">{{input.characterCount}} / 100</md-hint>\r\n            </md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Show Hint Label\" style=\"width: 100%\" hintLabel=\"Hint label\"></md-input>\r\n        </p>\r\n\r\n        <p>\r\n            <md-input>\r\n                <md-placeholder>\r\n                    I\r\n                    <md-icon class=\"demo-icons\">favorite</md-icon> <b>bold</b> placeholder\r\n                </md-placeholder>\r\n                <md-hint>\r\n                    I also\r\n                    <md-icon class=\"demo-icons\">home</md-icon> <i>italic</i> hint labels\r\n                </md-hint>\r\n            </md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Show Hint Label With Character Count\" style=\"width: 100%\" hintLabel=\"Hint label\" characterCounter></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"dividerColor\">Check to change the divider color:</md-checkbox>\r\n            <md-input [dividerColor]=\"dividerColor ? 'primary' : 'accent'\" [placeholder]=\"dividerColor ? 'Primary color' : 'Accent color'\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</md-checkbox>\r\n            <md-input [required]=\"requiredField\" [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"floatingLabel\"> Check to make floating label:</md-checkbox>\r\n            <md-input [floatingPlaceholder]=\"floatingLabel\" [placeholder]=\"floatingLabel ? 'Floating label' : 'Not floating label'\"></md-input>\r\n        </p>\r\n\r\n        <p>\r\n            <md-input placeholder=\"Prefixed\" value=\"example\">\r\n                <div md-prefix>Example:&nbsp;</div>\r\n            </md-input>\r\n            <md-input placeholder=\"Suffixed\" value=\"123\" align=\"end\">\r\n                <span md-suffix>.00 €</span>\r\n            </md-input>\r\n            <br/> Both:\r\n            <md-input #email placeholder=\"Email Address\" value=\"angular-core\" align=\"end\">\r\n                <span md-prefix><md-icon [class.primary]=\"email.focused\" class=\"demo-icons demo-transform\">email</md-icon>&nbsp;</span>\r\n                <span md-suffix class=\"demo-transform\" [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\r\n            </md-input>\r\n        </p>\r\n\r\n        <p>\r\n            Empty:\r\n            <md-input></md-input>\r\n            <label>Label: <md-input></md-input></label>\r\n        </p>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card\">\r\n    <table width=\"100%\">\r\n        <thead>\r\n            <td>Table</td>\r\n            <td colspan=\"3\">\r\n                <button (click)=\"addABunch(5)\">Add 5</button>\r\n                <button (click)=\"addABunch(10)\">Add 10</button>\r\n                <button (click)=\"addABunch(100)\">Add 100</button>\r\n                <button (click)=\"addABunch(1000)\">Add 1000</button>\r\n            </td>\r\n        </thead>\r\n        <tr *ngFor=\"let item of items; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>\r\n                <md-input type=\"number\" placeholder=\"value\" aria-label=\"hello\" [(ngModel)]=\"items[i].value\"></md-input>\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" [(ngModel)]=\"items[i].value\">\r\n            </td>\r\n            <td>{{item.value}}</td>\r\n        </tr>\r\n    </table>\r\n</md-card>\r\n\r\n\r\n<md-card>\r\n    <h2>textarea autosize</h2>\r\n    <textarea md-autosize class=\"demo-textarea\"></textarea>\r\n</md-card>-->"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<md-toolbar [color]=\"primary\" class=\"mat-elevation-z3\">\r\n    <img src=\"{{icon}}\" [routerLink]=\"['/']\" style=\"margin-top:50px;cursor:pointer;\" height=\"80\" width=\"80\" />\r\n    <span class=\"take-rest-space\"></span>\r\n    <button md-button color=\"primary\" [routerLink]=\"['/register']\">JOIN</button>\r\n    <button md-raised-button color=\"accent\">GETIN</button>\r\n    <md-toolbar-row>\r\n        <span class=\"take-rest-space\"></span>\r\n        <p [innerHtml]=\"creativeBlock\"></p>\r\n    </md-toolbar-row>\r\n</md-toolbar>\r\n<!--<button md-fab>\r\n    <md-icon class=\"md-24\">add</md-icon>\r\n</button>\r\n<button md-mini-fab>\r\n    <md-icon class=\"md-24\">add</md-icon>\r\n</button>-->\r\n<router-outlet></router-outlet>\r\n<footer>\r\n    <a md-button color=\"primary\" href=\"http://profile-dtr.rhcloud.com/\">Main Site</a>\r\n    <button md-mini-fab (click)=\"window.open('http://profile-dtr.rhcloud.com')\">\r\n            <md-icon class=\"md-24\">web</md-icon>\r\n    </button>\r\n    <button md-mini-fab href=\"http://www.youtube.com/channel/UC3HXVelR0xZ8BePzP-Dqw_w\">\r\n            <md-icon class=\"md-24\">video_library</md-icon>\r\n    </button>\r\n    <button md-mini-fab href=\"https://www.facebook.com/Profileatdtr.rj\">\r\n            <md-icon class=\"md-24\">face</md-icon>\r\n    </button>\r\n</footer>"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<update-component></update-component>\n<checkit-autocomplete style=\"margin: 0px auto;width: 400px;\"></checkit-autocomplete>\n<div *ngIf=\"authenticated\">\n    <md-grid-list cols=\"3\">\n        <md-grid-tile *ngFor=\"let user of users\">\n            <md-card>\n                <img md-card-image src=\"https://material.angularjs.org/latest/img/washedout.png\">\n                <md-card-title>{{user.name}}</md-card-title>\n                <md-card-content>\n                    <p>You can also contact me on <a href=\"mailto:{{user.email}}\">Email</a></p>\n                </md-card-content>\n                <md-card-actions align=\"end\">\n                    <button md-button>LIKE</button>\n                    <button md-button>SHARE</button>\n                </md-card-actions>\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n</div>"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-grid-list cols=\"8\">\n        <md-grid-tile *ngFor=\"let tile of tiles\">\n            <div [ngStyle]=\"{'background-color':tile, 'width':'100px', 'height':'100px'}\">\n\n            </div>\n        </md-grid-tile>\n        <md-grid-tile>\n            Still working.....\n        </md-grid-tile>\n    </md-grid-list>\n</div>"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<!--<div [ngStyle]=\"{background: 'url(/img/' + item.img + ')', width: '200px', height: '150px'\"></div>-->\n<div fxLayout=\"row\" [style.background]=\"'url(' + back_url + ')'\" [ngStyle]=\"{'margin-top':'5px', 'min-height':'300px', 'background-size': '600px'}\">\n    <div fxLayout=\"row\" fxFlex=\"80\" [ngStyle]=\"{}\">\n        <md-card *ngFor=\"let item of menus\" [routerLink]=\"['/products']\" [ngStyle]=\"{'cursor':'pointer', 'width':'200px'}\" flex=\"25\"\n            layout-wrap>\n            <img md-card-image src=\"{{item.photo}}\" height=\"100\" width=\"200\">\n            <md-card-title>{{item.title}}</md-card-title>\n            <md-card-content>\n                <p>{{item.desc}}</p>\n            </md-card-content>\n            <!--<md-card-actions align=\"end\">\n                    <button md-button>LIKE</button>\n                    <button md-button>SHARE</button>\n                </md-card-actions>-->\n        </md-card>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"right\" [style.background]=\"'url(' + right_image + ')'\" [ngStyle]=\"{'margin':'10px auto', 'height':'300px', 'width':'210px' ,'background':'url('+right_image+')', 'background-size':'cover'}\">\n\n    </div>\n</div>"

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);


/***/ })

},[564]);
//# sourceMappingURL=main.bundle.js.map