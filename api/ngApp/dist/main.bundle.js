webpackJsonp([0,3],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(653);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(654);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(655);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });



//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_util__ = __webpack_require__(657);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_util__["a"]; });

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(443);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        template: __webpack_require__(819)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/register.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.icon = './static/images/checkit_icon.png';
        this.toolbar_color = '#ee0';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(820),
        styles: [__webpack_require__(815)]
    })
], AppComponent);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(266);
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
        // this.userService.getAll().map(re=>{
        //     console.log(re);
        //     this.users = re
        // })
        this.users = [{
                id: 1,
                username: "usr",
                email: "em@em.com",
                name: "First user",
                password: ""
            }, {
                id: 2,
                username: "usr",
                email: "em@em.com",
                name: "Second uses",
                password: ""
            }];
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.authenticated = this.userService.isAuthenticated();
        this.fetchUsers();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        template: __webpack_require__(821)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/home.component.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 496;


/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(660);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/main.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
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

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(125);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/auth.service.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(112);
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
    }
    UserService.prototype.authenticate = function (user) {
        return this.http.post('/api-token-auth/', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.getMyDetails = function () {
        return this.http.get('/api/users/get_my_details/', this.jwt()).map(function (response) { return response.json(); });
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
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Token ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/user.service.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
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
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ];
    }
    CheckItAutoComplete.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredItems = this.searchCntrl.valueChanges
            .startWith(null)
            .map(function (item) { return item ? _this.filter(item) : _this.items; });
    };
    CheckItAutoComplete.prototype.filter = function (name) {
        return name ? this.items.filter(function (option) { return new RegExp(name, 'gi').test(option); }) : this.items;
    };
    CheckItAutoComplete.prototype.displayFn = function (item) {
        return item ? item + " T" : item;
    };
    return CheckItAutoComplete;
}());
CheckItAutoComplete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'checkit-autocomplete',
        template: __webpack_require__(818),
    })
], CheckItAutoComplete);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/autocomplete.js.map

/***/ }),

/***/ 657:
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

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_components_autocomplete__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accounts_register_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_index__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_index__ = __webpack_require__(443);
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
            __WEBPACK_IMPORTED_MODULE_7__utils_components_autocomplete__["a" /* CheckItAutoComplete */],
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__accounts_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_index__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_index__["b" /* AlertService */], __WEBPACK_IMPORTED_MODULE_12__utils_index__["a" /* StringUtil */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(446);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__["a" /* RegisterComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/app.routing.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(445);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(658);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/index.js.map

/***/ }),

/***/ 661:
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

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/ranjeet/CheckIt/checkit-api/api/ngApp/src/polyfills.js.map

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(185)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-input-container>\n        <input mdInput placeholder=\"Search everything\" [mdAutocomplete]=\"auto\" [formControl]=\"searchCntrl\">\n    </md-input-container>\n\n    <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\n        <md-option *ngFor=\"let item of filteredItems | async\" [value]=\"item\">\n            {{ item }}\n        </md-option>\n    </md-autocomplete>\n</div>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #263238;min-height:300px;padding: 50px;\">\r\n    <md-card color=\"accent\" style=\"width:300px;margin:0px auto;\">\r\n        <md-card-title color=\"primary\">Register</md-card-title>\r\n        <md-card-content>\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" placeholder=\"Email\"\r\n                            required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Password\" #password=\"ngModel\"\r\n                            required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && (!password1.valid) }\">\r\n                    <md-input-container>\r\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password1\" placeholder=\"Enter again\" [(ngModel)]=\"model.password1\"\r\n                            #password1=\"ngModel\" ng-mdch=\"emailReg\" required/>\r\n                    </md-input-container>\r\n                    <div *ngIf=\"f.submitted && !password1.valid && password.value != password1.value\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n                <div *ngIf=\"error\" style=\"margin: 5px;\">\r\n                    <span style=\"color: red;\">{{error_message}}</span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" md-raised-button> <md-icon>done</md-icon> Register</button>\r\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmdEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fmdgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                    />\r\n                    <button md-button color=\"primary\" [routerLink]=\"['/']\">\r\n                <md-icon>clear</md-icon>Cancel</button>\r\n                </div>\r\n            </form>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>\r\n<!--\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Prefix + Suffix</md-toolbar>\r\n    <md-card-content>\r\n        <md-input placeholder=\"amount\" align=\"end\">\r\n            <span md-prefix>$&nbsp;</span>\r\n            <span md-suffix>.00</span>\r\n        </md-input>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Divider Colors</md-toolbar>\r\n    <md-card-content>\r\n        <h4>Input</h4>\r\n        <md-input dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-input>\r\n        <md-input dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-input>\r\n        <md-input dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-input>\r\n\r\n        <h4>Textarea</h4>\r\n        <md-textarea dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-textarea>\r\n        <md-textarea dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-textarea>\r\n        <md-textarea dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-textarea>\r\n\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card demo-basic\">\r\n    <md-toolbar color=\"primary\">Hints</md-toolbar>\r\n    <md-card-content>\r\n        <h4>Input</h4>\r\n        <p>\r\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\r\n                #characterCountHintExample>\r\n                <md-hint align=\"end\">{{characterCountHintExample.characterCount}} / 100</md-hint>\r\n            </md-input>\r\n        </p>\r\n\r\n        <h4>Textarea</h4>\r\n        <p>\r\n            <md-textarea placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\r\n                #characterCountHintExampleTextarea>\r\n                <md-hint align=\"end\">{{characterCountHintExampleTextarea.characterCount}} / 100</md-hint>\r\n            </md-textarea>\r\n        </p>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card\">\r\n    <md-card-title>\r\n        Hello\r\n        <md-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\"></md-input>, how are you?\r\n    </md-card-title>\r\n    <md-card-content>\r\n        <p>\r\n            <md-input disabled placeholder=\"Disabled field\" value=\"Value\"></md-input>\r\n            <md-input required placeholder=\"Required field\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"100% width placeholder\" style=\"width: 100%\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" style=\"width: 100%\" #input>\r\n                <md-hint align=\"end\">{{input.characterCount}} / 100</md-hint>\r\n            </md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Show Hint Label\" style=\"width: 100%\" hintLabel=\"Hint label\"></md-input>\r\n        </p>\r\n\r\n        <p>\r\n            <md-input>\r\n                <md-placeholder>\r\n                    I\r\n                    <md-icon class=\"demo-icons\">favorite</md-icon> <b>bold</b> placeholder\r\n                </md-placeholder>\r\n                <md-hint>\r\n                    I also\r\n                    <md-icon class=\"demo-icons\">home</md-icon> <i>italic</i> hint labels\r\n                </md-hint>\r\n            </md-input>\r\n        </p>\r\n        <p>\r\n            <md-input placeholder=\"Show Hint Label With Character Count\" style=\"width: 100%\" hintLabel=\"Hint label\" characterCounter></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"dividerColor\">Check to change the divider color:</md-checkbox>\r\n            <md-input [dividerColor]=\"dividerColor ? 'primary' : 'accent'\" [placeholder]=\"dividerColor ? 'Primary color' : 'Accent color'\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</md-checkbox>\r\n            <md-input [required]=\"requiredField\" [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\"></md-input>\r\n        </p>\r\n        <p>\r\n            <md-checkbox [(ngModel)]=\"floatingLabel\"> Check to make floating label:</md-checkbox>\r\n            <md-input [floatingPlaceholder]=\"floatingLabel\" [placeholder]=\"floatingLabel ? 'Floating label' : 'Not floating label'\"></md-input>\r\n        </p>\r\n\r\n        <p>\r\n            <md-input placeholder=\"Prefixed\" value=\"example\">\r\n                <div md-prefix>Example:&nbsp;</div>\r\n            </md-input>\r\n            <md-input placeholder=\"Suffixed\" value=\"123\" align=\"end\">\r\n                <span md-suffix>.00 €</span>\r\n            </md-input>\r\n            <br/> Both:\r\n            <md-input #email placeholder=\"Email Address\" value=\"angular-core\" align=\"end\">\r\n                <span md-prefix><md-icon [class.primary]=\"email.focused\" class=\"demo-icons demo-transform\">email</md-icon>&nbsp;</span>\r\n                <span md-suffix class=\"demo-transform\" [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\r\n            </md-input>\r\n        </p>\r\n\r\n        <p>\r\n            Empty:\r\n            <md-input></md-input>\r\n            <label>Label: <md-input></md-input></label>\r\n        </p>\r\n    </md-card-content>\r\n</md-card>\r\n\r\n<md-card class=\"demo-card\">\r\n    <table width=\"100%\">\r\n        <thead>\r\n            <td>Table</td>\r\n            <td colspan=\"3\">\r\n                <button (click)=\"addABunch(5)\">Add 5</button>\r\n                <button (click)=\"addABunch(10)\">Add 10</button>\r\n                <button (click)=\"addABunch(100)\">Add 100</button>\r\n                <button (click)=\"addABunch(1000)\">Add 1000</button>\r\n            </td>\r\n        </thead>\r\n        <tr *ngFor=\"let item of items; let i = index\">\r\n            <td>{{i+1}}</td>\r\n            <td>\r\n                <md-input type=\"number\" placeholder=\"value\" aria-label=\"hello\" [(ngModel)]=\"items[i].value\"></md-input>\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" [(ngModel)]=\"items[i].value\">\r\n            </td>\r\n            <td>{{item.value}}</td>\r\n        </tr>\r\n    </table>\r\n</md-card>\r\n\r\n\r\n<md-card>\r\n    <h2>textarea autosize</h2>\r\n    <textarea md-autosize class=\"demo-textarea\"></textarea>\r\n</md-card>-->"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<md-toolbar [color]=\"toolbar_color\">\r\n    <img src=\"{{icon}}\" [routerLink]=\"['/']\" style=\"background: #eee;\" style=\"cursor:pointer;\" height=\"40\" width=\"60\" />\r\n    <span class=\"take-rest-space\"></span>\r\n    <button md-button color=\"primary\" [routerLink]=\"['/register']\">JOIN</button>\r\n    <button md-raised-button color=\"accent\">GETIN</button>\r\n</md-toolbar>\r\n<!--<button md-fab>\r\n    <md-icon class=\"md-24\">add</md-icon>\r\n</button>\r\n<button md-mini-fab>\r\n    <md-icon class=\"md-24\">add</md-icon>\r\n</button>-->\r\n<router-outlet></router-outlet>\r\n<footer>\r\n    <a md-button color=\"primary\" href=\"http://profile-dtr.rhcloud.com/\">Main Site</a>\r\n    <button md-mini-fab (click)=\"window.open('http://profile-dtr.rhcloud.com')\">\r\n            <md-icon class=\"md-24\">web</md-icon>\r\n    </button>\r\n    <button md-mini-fab href=\"http://www.youtube.com/channel/UC3HXVelR0xZ8BePzP-Dqw_w\">\r\n            <md-icon class=\"md-24\">video_library</md-icon>\r\n    </button>\r\n    <button md-mini-fab  href=\"https://www.facebook.com/Profileatdtr.rj\">\r\n            <md-icon class=\"md-24\">face</md-icon>\r\n    </button>\r\n</footer>"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<checkit-autocomplete style=\"margin: 0px auto;width: 400px;\">\n</checkit-autocomplete>\n<div *ngIf=\"authenticated\">\n    <md-grid-list cols=\"3\">\n        <md-grid-tile *ngFor=\"let user of users\">\n            <md-card>\n                <img md-card-image src=\"https://material.angularjs.org/latest/img/washedout.png\">\n                <md-card-title>{{user.name}}</md-card-title>\n                <md-card-content>\n                    <p>You can also contact me on <a href=\"mailto:{{user.email}}\">Email</a></p>\n                </md-card-content>\n                <md-card-actions align=\"end\">\n                    <button md-button>LIKE</button>\n                    <button md-button>SHARE</button>\n                </md-card-actions>\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n</div>"

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(497);


/***/ })

},[865]);
//# sourceMappingURL=main.bundle.js.map