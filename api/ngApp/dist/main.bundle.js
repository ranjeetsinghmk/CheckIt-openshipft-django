webpackJsonp([0,3],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(82);
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
        this.base = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production ? "" : "http://127.0.0.1:8000";
    }
    UserService.prototype.authenticate = function (user) {
        return this.http.post(this.base + '/api-token-auth/', user).map(function (response) { return response.json(); });
    };
    UserService.prototype.getMyDetails = function () {
        return this.http.get(this.base + '/api/users/get_my_details/', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.searchInAll = function (query) {
        return this.http.get(this.base + '/api/users/?search=' + query).map(function (res) { return res.json(); });
    };
    UserService.prototype.getAll = function (url) {
        return this.http.get(url || this.base + '/api/users.json').map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.base + '/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.base + '/api/users/', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.base + '/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.base + '/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
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
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/user.service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: "\n    <div><h3>404 Page not found!</h3></div>\n    "
    })
], NotFoundCompontent);

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/app.notfound.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_util__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_util__["a"]; });

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/index.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(128);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(382)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* StringUtil */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/register.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_updates__ = __webpack_require__(51);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(383),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/app.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(81);
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
    HomeComponent.prototype.addUserWithDelay = function (users, i) {
        var _this = this;
        if (i >= users.length) {
            this.fetchingUsers = false;
            console.log('returning...');
            return;
        }
        setTimeout(function () {
            var user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */](users[i]);
            user.validateIt();
            _this.users.push(user);
            _this.addUserWithDelay(users, i + 1);
        }, 100);
    };
    HomeComponent.prototype.handleGetUsersResponse = function (data) {
        var _this = this;
        data.subscribe(function (data) {
            console.log('previous ' + data.previous);
            if (data.previous) {
                _this.previous = data.previous;
            }
            else {
                _this.users = [];
            }
            if (data.next) {
                _this.next = data.next;
            }
            if (data.count) {
                _this.count = data.count;
            }
            if (data.results) {
                console.log('Old usres: ' + _this.users.length);
                _this.addUserWithDelay(data.results, 0);
                _this.users;
            }
            console.log(_this.users.length);
        }, function (err) {
            _this.user_err = err;
        }, function () {
        });
    };
    HomeComponent.prototype.fetchNextUsers = function () {
        this.fetchingUsers = true;
        console.log("going for " + this.next);
        this.handleGetUsersResponse(this.userService.getAll(this.next));
    };
    HomeComponent.prototype.fetchUsers = function () {
        this.fetchingUsers = true;
        this.handleGetUsersResponse(this.userService.getAll(NaN));
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.authenticated = true; //this.userService.isAuthenticated();
        this.fetchUsers();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(384)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/home.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonComponent = (function () {
    function PersonComponent() {
    }
    return PersonComponent;
}());
PersonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(385)
    })
], PersonComponent);

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/component.person.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_updates__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, updateService) {
        this.route = route;
        this.router = router;
        this.updateService = updateService;
        this.detail = {};
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (paths) {
            var id = paths[1]['path'];
            _this.updateService.getDetails(id).subscribe(function (detail) {
                console.log('data', detail);
                _this.detail = detail;
            }, function (err) {
                console.error(err);
            }, function () {
                console.log("Fetch done");
            });
        });
        this.route.params.subscribe(function (params) {
            // this.title = params[''];
            console.log('parmas are ', params);
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'product-details',
        template: __webpack_require__(386),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_updates__["a" /* UpdatesService */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/detail.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(387),
        styles: [
            "\n        .products{\n            margin:0px auto;\n            width:100%;\n            height:100%;\n            background:#21283c66;\n            font-family:SegoeUI,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n            font-size: 20px;\n            color:wheat;\n        }\n        .header{\n            padding:15px;\n            width:100%;\n            margin:0px auto;\n        }\n        .small{\n            height:60px;\n        }\n        .cute-button {\n\t-moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\n\tbox-shadow:inset 0px 1px 0px 0px #bbdaf7;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5));\n\tbackground:-moz-linear-gradient(top, #79bbff 5%, #378de5 100%);\n\tbackground:-webkit-linear-gradient(top, #79bbff 5%, #378de5 100%);\n\tbackground:-o-linear-gradient(top, #79bbff 5%, #378de5 100%);\n\tbackground:-ms-linear-gradient(top, #79bbff 5%, #378de5 100%);\n\tbackground:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\n\tbackground-color:#79bbff;\n\t-moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n\tborder-radius:3px;\n\tborder:1px solid #84bbf3;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:12px;\n\tfont-weight:bold;\n\tpadding:4px 15px;\n    height:15px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #528ecc;\n}\n.cute-button:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #378de5), color-stop(1, #79bbff));\n\tbackground:-moz-linear-gradient(top, #378de5 5%, #79bbff 100%);\n\tbackground:-webkit-linear-gradient(top, #378de5 5%, #79bbff 100%);\n\tbackground:-o-linear-gradient(top, #378de5 5%, #79bbff 100%);\n\tbackground:-ms-linear-gradient(top, #378de5 5%, #79bbff 100%);\n\tbackground:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\n\tbackground-color:#378de5;\n}\n.cute-button:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n        "
        ]
    })
], ProductsComponent);

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/products.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 191;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(223);





console.log(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/main.js.map

/***/ }),

/***/ 216:
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
        this.name = parameters.name;
        this.name = this.getName();
        console.log(this.name);
        this.photo = this.photo;
    }
    User.prototype.getRP = function () {
        var photos = [
            'https://material.angularjs.org/latest/img/washedout.png',
            'http://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg',
            "http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg",
            "http://www.planwallpaper.com/static/images/9-credit-1.jpg",
            "http://www.dam7.com/Images/Puppy/images/myspace-puppy-images-0005.jpg",
            "http://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg"
        ];
        return photos[Math.floor(Math.random() * 10000) % photos.length];
    };
    User.prototype.validateIt = function () {
        if (!this.name) {
            this.name = this.getName();
        }
        if (!this.photo) {
            this.photo = this.getRP();
        }
    };
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

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/user.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(39);
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
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/alert.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
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
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/auth.service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_updates__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckItAutoComplete; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckItAutoComplete = (function () {
    function CheckItAutoComplete(updatesService, userService) {
        this.updatesService = updatesService;
        this.userService = userService;
        this.searchCntrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]();
    }
    CheckItAutoComplete.prototype.ngOnInit = function () {
        var _this = this;
        this.searchCntrl.valueChanges
            .startWith(null)
            .map(function (item) {
            console.log('Searching for ' + item);
            _this.userService.searchInAll(item).subscribe(function (data) {
                _this.filteredUsers = data;
            });
        });
    };
    // filter(name: string): User[] {
    //     return name ? this.items.filter(option => new RegExp(name, 'gi').test(option.name)) : this.items;
    // }
    CheckItAutoComplete.prototype.displayFn = function (item) {
        return item ? item.toString() : null;
    };
    return CheckItAutoComplete;
}());
CheckItAutoComplete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'checkit-autocomplete',
        template: __webpack_require__(381),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_updates__["a" /* UpdatesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], CheckItAutoComplete);

var _a, _b;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/autocomplete.js.map

/***/ }),

/***/ 220:
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

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/string-util.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular2_autosize_angular2_autosize__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__updates_updates_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_components_autocomplete__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_components_app_notfound__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__accounts_register_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_products_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_detail_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_index__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_updates__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_index__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__personalities_component_person__ = __webpack_require__(132);
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
            __WEBPACK_IMPORTED_MODULE_8__node_modules_angular2_autosize_angular2_autosize__["a" /* Autosize */],
            __WEBPACK_IMPORTED_MODULE_11__utils_components_autocomplete__["a" /* CheckItAutoComplete */],
            __WEBPACK_IMPORTED_MODULE_9__updates_updates_component__["a" /* UpdatesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__accounts_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__utils_components_app_notfound__["a" /* NotFoundCompontent */],
            __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__products_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__personalities_component_person__["a" /* PersonComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_index__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_18__services_index__["b" /* AlertService */], __WEBPACK_IMPORTED_MODULE_20__utils_index__["a" /* StringUtil */], __WEBPACK_IMPORTED_MODULE_19__services_updates__["a" /* UpdatesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/app.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_detail_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_components_app_notfound__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__personalities_component_person__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__accounts_register_component__["a" /* RegisterComponent */] },
    {
        path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */],
        children: [
            { path: 'core/:id', component: __WEBPACK_IMPORTED_MODULE_4__products_detail_component__["a" /* ProductDetailComponent */], pathMatch: 'full' },
        ]
    },
    {
        path: 'person/rjsdtr', component: __WEBPACK_IMPORTED_MODULE_6__personalities_component_person__["a" /* PersonComponent */],
    },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__utils_components_app_notfound__["a" /* NotFoundCompontent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/app.routing.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(130);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/index.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_updates__ = __webpack_require__(51);
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
    function UpdatesComponent(updatesService, route, router) {
        this.updatesService = updatesService;
        this.route = route;
        this.router = router;
        this.primary = "#e44";
        this.back_url = "./static/updates/assets/img/back.jpg";
        this.right_image = "./static/updates/assets/img/games.png";
        this.message = "Welcome";
    }
    // tmp(){
    // this.route.params
    //   // (+) converts string 'id' to a number
    //   .switchMap((params: Params) => this.service.getHero(+params['id']))
    //   .subscribe((hero: Hero) => this.hero = hero);
    // }
    UpdatesComponent.prototype.showDetails = function (url) {
        if (typeof (url) == 'number' && url > 0) {
            this.router.navigateByUrl('/products/core/' + url);
        }
        else if (url && url.length > 0) {
            if (new RegExp('^(http://)|(https://)', 'i').test(url)) {
                open(url, '_self');
            }
            else {
                this.router.navigateByUrl(url);
            }
        }
    };
    UpdatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updatesService.getUpdatesMenuItems().subscribe(function (data) { return _this.menus = data; }, function (err) {
            console.error(err);
        }, function () {
            console.log("Fetch done");
        });
    };
    return UpdatesComponent;
}());
UpdatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: "update-component",
        template: __webpack_require__(388),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_updates__["a" /* UpdatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_updates__["a" /* UpdatesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UpdatesComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/updates.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/polyfills.js.map

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 50px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background: #eee;\n  font-size: 16px;\n  line-height: 1.4;\n  -webkit-font-smoothing: antialiased;\n}\n\nh3 {\n  background-color: #cdb295;\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\n.small-demo {\n  min-height: 128px;\n  padding-bottom: 40px;\n  display: block;\n  background-color: #eee;\n}\n\n.colorNested, .colored, .coloredContainerX {\n  height:200px;\n}\n\n.taller {\n  height:300px;\n}\n\nmd-card {\n  background-color: white;\n}\n\ndiv.coloredContainerX > div, div.colorNested > div > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center;\n}\n\ndiv.coloredContainerX > div:nth-child(1), div.colorNested > div > div:nth-child(1), div.box1 {\n  background-color: #009688;\n}\n\ndiv.coloredContainerX > div:nth-child(2), div.colorNested > div > div:nth-child(2), div.box2 {\n  background-color: #3949ab;\n}\n\ndiv.coloredContainerX > div:nth-child(3), div.coloredChildren > div:nth-child(3), div.colorNested > div > div:nth-child(3), div.box3 {\n  background-color: #9c27b0;\n}\n\ndiv.coloredContainerX > div:nth-child(4), div.coloredChildren > div:nth-child(4), div.colorNested > div > div:nth-child(4) {\n  background-color: #b08752;\n}\n\ndiv.coloredContainerX > div:nth-child(5), div.coloredChildren > div:nth-child(5), div.colorNested > div > div:nth-child(5) {\n  background-color: #5ca6b0;\n}\n\ndiv.colored > div {\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  opacity: 0.9;\n  color: #fff;\n  text-align: center;\n}\n\ndiv.colored > div:nth-child(1), .one {\n  background-color: #009688;\n}\n\ndiv.colored > div:nth-child(2), .two {\n  background-color: #3949ab;\n}\n\ndiv.colored > div:nth-child(3), .three {\n  background-color: #9c27b0;\n}\n\n\ndiv.colored > div:nth-child(4), .four {\n  background-color: #8bc34a;\n}\n\ndiv.colored > div:nth-child(5), .five {\n  background-color: #03A9F4;\n}\n\ndiv.colored > div:nth-child(6), .six {\n  background-color: #c9954e;\n}\n\ndiv.colored > div:nth-child(7), .seven {\n  background-color: #FF5722;\n}\n\n.hint {\n  margin:5px;\n  font-size:0.9em;\n  color: #a3a3a3;\n  margin-bottom:0;\n}\n\n.title {\n  margin:5px;\n  font-size:0.9em;\n  color: #5c5c5c;\n}\n\n.box {\n  border: solid 1px gray;\n}\n\n\nbutton.md-primary {\n  margin-left:25px;\n}\n\n.demo-content {\n  background-color: ghostwhite;\n}\n\nmd-toolbar-row  button {\n  min-width: 150px;\n}\n\ndiv.colored.box.nopad > div {\n  padding: 0;\n}\n\n.intro {\n  margin-top: -52px;\n  margin-left: 15px;\n  color: #5c5c5c;\n}\n\n\n.blocks {\n  min-width: 75px;\n  min-height: 50px;\n  border-radius: 3px;\n}\n\n.black {\n  border-radius: 5px;\n  min-width: 75px;\n  min-height: 50px;\n  color: white;\n  background-color: #292929;\n  padding: 8px;\n  box-shadow: 0px 2px 5px 0 rgba(52, 47, 51, 0.63);\n  text-align: center;\n}\n\n.target {\n  background-color: #05ffb0;\n  color: #310736;\n  cursor: pointer;\n}\n\n.two_h {\n  min-height : 100px;\n}\n.two_w {\n  min-width: 125px;\n}\n\n.four_h {\n  min-height: 75px;\n}\n.four_w {\n  min-width: 100px;\n}\n\n.bigger {\n  padding: 0 20px;\n  padding-bottom: 30px;\n}\n\nmd-toolbar .md-toolbar-layout md-toolbar-row {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  min-height: 40px;\n}\n\n.demo-content .small-demo:first-child {\n  margin-top: 40px;\n}\n\nmd-card-content pre {\n  font-size: 12px;\n  white-space: pre-wrap;\n}\n\n.fxClass-all {\n  font-style: italic;\n}\n\n.fxClass-xs {\n  font-size: 10px;\n  color: blue!important;\n}\n.fxClass-sm {\n  font-size: 20px;\n  color: lightblue!important;\n}\n.fxClass-md {\n  font-size: 30px;\n  color: orange!important;\n}\n.fxClass-md2 {\n  font-weight: bold;\n}\n.fxClass-lg {\n  font-size: 40px;\n  color: lightgreen!important;\n}\n.fxClass-lg2 {\n  text-shadow: #5c5c5c;\n}\n\n.fixed { height:275px; }\n.menu-item-description{\n  opacity: 0;\n  color:white;\n  padding:5px;\n  font-size:12px;\n}\n\n.menu > .menuitem{\n  cursor:pointer; \n  width:200px;\n  height:200px; \n  background-size:cover;\n  background-color:black;\n}\n\n.menu > .menuitem:hover .menu-item-description{\n  background-color: black;\n  opacity: 0.7;\n  transition: background-color 0.5s linear;\n  transition: opacity 0.5s linear;\n}\n\n.menu > .menuitem:hover .menu-item-links{\n  height: auto;\n  -webkit-transform: height 2 linear;\n          transform: height 2 linear;\n}\n\n.menu-item-links{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  height: 0px;\n  overflow: hidden;\n  background-color: #333333;\n}\n\n.menu-item-links > li{\n  float: left;\n}\n.menu-item-links > li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 8px;\n    text-decoration: none;\n}\n\n.menu-item-links > li a:hover {\n    background-color: #111111;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

module.exports = "<!--<md-input-container>-->\n<input style=\"border:groove 0.5px #ee4ee4;padding:5px;border-radius:2px;margin:5px;\" mdInput placeholder=\"Search anything\"\n    [mdAutocomplete]=\"auto\" [formControl]=\"searchCntrl\">\n<!--</md-input-container>-->\n\n<md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\n    <md-option *ngFor=\"let item of filteredUsers | async\" [value]=\"item\">\n        {{ item }}\n    </md-option>\n</md-autocomplete>"

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #263238;min-height:300px;padding: 50px;\">\n    <md-card color=\"accent\" style=\"width:300px;margin:0px auto;\">\n        <md-card-title color=\"primary\">Register</md-card-title>\n        <md-card-content>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <md-input-container>\n                        <input mdInput type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" placeholder=\"Email\"\n                            required/>\n                    </md-input-container>\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <md-input-container>\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Password\" #password=\"ngModel\"\n                            required/>\n                    </md-input-container>\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && (!password1.valid) }\">\n                    <md-input-container>\n                        <input mdInput type=\"password\" class=\"form-control\" name=\"password1\" placeholder=\"Enter again\" [(ngModel)]=\"model.password1\"\n                            #password1=\"ngModel\" ng-mdch=\"emailReg\" required/>\n                    </md-input-container>\n                    <div *ngIf=\"f.submitted && !password1.valid && password.value != password1.value\" class=\"help-block\">Password is required</div>\n                </div>\n                <div *ngIf=\"error\" style=\"margin: 5px;\">\n                    <span style=\"color: red;\">{{error_message}}</span>\n                </div>\n\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" md-raised-button> <md-icon>done</md-icon> Register</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmdEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fmdgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <button md-button color=\"primary\" [routerLink]=\"['/']\">\n                <md-icon>clear</md-icon>Cancel</button>\n                </div>\n            </form>\n        </md-card-content>\n    </md-card>\n</div>\n<!--\n<md-card class=\"demo-card demo-basic\">\n    <md-toolbar color=\"primary\">Prefix + Suffix</md-toolbar>\n    <md-card-content>\n        <md-input placeholder=\"amount\" align=\"end\">\n            <span md-prefix>$&nbsp;</span>\n            <span md-suffix>.00</span>\n        </md-input>\n    </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n    <md-toolbar color=\"primary\">Divider Colors</md-toolbar>\n    <md-card-content>\n        <h4>Input</h4>\n        <md-input dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-input>\n        <md-input dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-input>\n        <md-input dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-input>\n\n        <h4>Textarea</h4>\n        <md-textarea dividerColor=\"primary\" placeholder=\"Default Color\" value=\"example\"></md-textarea>\n        <md-textarea dividerColor=\"accent\" placeholder=\"Accent Color\" value=\"example\"></md-textarea>\n        <md-textarea dividerColor=\"warn\" placeholder=\"Warn Color\" value=\"example\"></md-textarea>\n\n    </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card demo-basic\">\n    <md-toolbar color=\"primary\">Hints</md-toolbar>\n    <md-card-content>\n        <h4>Input</h4>\n        <p>\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\n                #characterCountHintExample>\n                <md-hint align=\"end\">{{characterCountHintExample.characterCount}} / 100</md-hint>\n            </md-input>\n        </p>\n\n        <h4>Textarea</h4>\n        <p>\n            <md-textarea placeholder=\"Character count (100 max)\" maxLength=\"100\" class=\"demo-full-width\" value=\"Hello world. How are you?\"\n                #characterCountHintExampleTextarea>\n                <md-hint align=\"end\">{{characterCountHintExampleTextarea.characterCount}} / 100</md-hint>\n            </md-textarea>\n        </p>\n    </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card\">\n    <md-card-title>\n        Hello\n        <md-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"First name\"></md-input>, how are you?\n    </md-card-title>\n    <md-card-content>\n        <p>\n            <md-input disabled placeholder=\"Disabled field\" value=\"Value\"></md-input>\n            <md-input required placeholder=\"Required field\"></md-input>\n        </p>\n        <p>\n            <md-input placeholder=\"100% width placeholder\" style=\"width: 100%\"></md-input>\n        </p>\n        <p>\n            <md-input placeholder=\"Character count (100 max)\" maxLength=\"100\" style=\"width: 100%\" #input>\n                <md-hint align=\"end\">{{input.characterCount}} / 100</md-hint>\n            </md-input>\n        </p>\n        <p>\n            <md-input placeholder=\"Show Hint Label\" style=\"width: 100%\" hintLabel=\"Hint label\"></md-input>\n        </p>\n\n        <p>\n            <md-input>\n                <md-placeholder>\n                    I\n                    <md-icon class=\"demo-icons\">favorite</md-icon> <b>bold</b> placeholder\n                </md-placeholder>\n                <md-hint>\n                    I also\n                    <md-icon class=\"demo-icons\">home</md-icon> <i>italic</i> hint labels\n                </md-hint>\n            </md-input>\n        </p>\n        <p>\n            <md-input placeholder=\"Show Hint Label With Character Count\" style=\"width: 100%\" hintLabel=\"Hint label\" characterCounter></md-input>\n        </p>\n        <p>\n            <md-checkbox [(ngModel)]=\"dividerColor\">Check to change the divider color:</md-checkbox>\n            <md-input [dividerColor]=\"dividerColor ? 'primary' : 'accent'\" [placeholder]=\"dividerColor ? 'Primary color' : 'Accent color'\"></md-input>\n        </p>\n        <p>\n            <md-checkbox [(ngModel)]=\"requiredField\"> Check to make required:</md-checkbox>\n            <md-input [required]=\"requiredField\" [placeholder]=\"requiredField ? 'Required field' : 'Not required field'\"></md-input>\n        </p>\n        <p>\n            <md-checkbox [(ngModel)]=\"floatingLabel\"> Check to make floating label:</md-checkbox>\n            <md-input [floatingPlaceholder]=\"floatingLabel\" [placeholder]=\"floatingLabel ? 'Floating label' : 'Not floating label'\"></md-input>\n        </p>\n\n        <p>\n            <md-input placeholder=\"Prefixed\" value=\"example\">\n                <div md-prefix>Example:&nbsp;</div>\n            </md-input>\n            <md-input placeholder=\"Suffixed\" value=\"123\" align=\"end\">\n                <span md-suffix>.00 €</span>\n            </md-input>\n            <br/> Both:\n            <md-input #email placeholder=\"Email Address\" value=\"angular-core\" align=\"end\">\n                <span md-prefix><md-icon [class.primary]=\"email.focused\" class=\"demo-icons demo-transform\">email</md-icon>&nbsp;</span>\n                <span md-suffix class=\"demo-transform\" [class.primary]=\"email.focused\">&nbsp;@gmail.com</span>\n            </md-input>\n        </p>\n\n        <p>\n            Empty:\n            <md-input></md-input>\n            <label>Label: <md-input></md-input></label>\n        </p>\n    </md-card-content>\n</md-card>\n\n<md-card class=\"demo-card\">\n    <table width=\"100%\">\n        <thead>\n            <td>Table</td>\n            <td colspan=\"3\">\n                <button (click)=\"addABunch(5)\">Add 5</button>\n                <button (click)=\"addABunch(10)\">Add 10</button>\n                <button (click)=\"addABunch(100)\">Add 100</button>\n                <button (click)=\"addABunch(1000)\">Add 1000</button>\n            </td>\n        </thead>\n        <tr *ngFor=\"let item of items; let i = index\">\n            <td>{{i+1}}</td>\n            <td>\n                <md-input type=\"number\" placeholder=\"value\" aria-label=\"hello\" [(ngModel)]=\"items[i].value\"></md-input>\n            </td>\n            <td>\n                <input type=\"number\" [(ngModel)]=\"items[i].value\">\n            </td>\n            <td>{{item.value}}</td>\n        </tr>\n    </table>\n</md-card>\n\n\n<md-card>\n    <h2>textarea autosize</h2>\n    <textarea md-autosize class=\"demo-textarea\"></textarea>\n</md-card>-->"

/***/ }),

/***/ 383:
/***/ (function(module, exports) {

module.exports = "<md-toolbar [color]=\"primary\" class=\"mat-elevation-z3\" style.xs=\"min-height:150px;\">\n    <div fxLayout=\"row\" style=\"margin:0px;width:100%;text-align: center;\" fxLayoutAlign=\"start\" style.xs=\"width:300px\" fxLayoutGap.xs=\"0px\"\n        fxLayoutAlign.xs=\"stretch\" fxLayout.xs=\"column\">\n        <img src=\"{{icon}}\" [routerLink]=\"['/']\" style=\"cursor:pointer;\" height=\"70\" width=\"70\" />\n        <span fxFlex></span>\n        <div style=\"text-align: center;margin: 0px;\" fxFlex=\"50\" [innerHtml]=\"creativeBlock\"></div>\n        <!--<div style=\"min-width:300px;\">\n            <checkit-autocomplete style=\"margin: 0px auto;\"></checkit-autocomplete>\n        </div>-->\n    </div>\n    <!--<button md-button color=\"primary\" [routerLink]=\"['/register']\">JOIN</button>\n    <button md-raised-button color=\"accent\">GETIN</button>-->\n</md-toolbar>\n<!--<button md-fab>\n    <md-icon class=\"md-24\">add</md-icon>\n</button>\n<button md-mini-fab>\n    <md-icon class=\"md-24\">add</md-icon>\n</button>-->\n<router-outlet></router-outlet>\n<footer>\n    <a md-button color=\"primary\" href=\"/\">Home</a>\n    <button md-mini-fab (click)=\"window.open('http://profile-dtr.rhcloud.com')\">\n            <md-icon class=\"md-24\">web</md-icon>\n    </button>\n    <button md-mini-fab href=\"http://www.youtube.com/channel/UC3HXVelR0xZ8BePzP-Dqw_w\">\n            <md-icon class=\"md-24\">video_library</md-icon>\n    </button>\n    <button md-mini-fab href=\"https://www.facebook.com/Profileatdtr.rj\">\n            <md-icon class=\"md-24\">face</md-icon>\n    </button>\n</footer>"

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "<update-component></update-component>\n<div *ngIf=\"authenticated\">\n    <md-grid-list cols=\"3\">\n        <md-grid-tile *ngFor=\"let user of users\">\n            <md-card>\n                <img md-card-image src=\"{{user.photo}}\" height=\"200\" width=\"250\">\n                <md-card-title>{{user.name}}</md-card-title>\n                <md-card-content>\n                    <p>You can also contact me on <a href=\"mailto:{{user.email}}\">Email</a></p>\n                </md-card-content>\n                <md-card-actions align=\"end\">\n                    <button md-button>FOLLOW</button>\n                    <button md-raised-button>TALK</button>\n                </md-card-actions>\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n    <div fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\" *ngIf=\"users && (users.length < count || users.length == 0)\">\n        <button (click)=\"fetchNextUsers()\" fxFlex=\"25\" *ngIf=\"!fetchingUsers\" md-raised-button color=\"accent\">LOAD MORE?</button>\n        <style>\n            .loader {\n                border: 16px solid #f3f3f3;\n                border-radius: 50%;\n                border-top: 16px solid #3498db;\n                width: 40px;\n                height: 40px;\n                -webkit-animation: spin 2s linear infinite;\n                animation: spin 2s linear infinite;\n            }\n            \n            @-webkit-keyframes spin {\n                0% {\n                    -webkit-transform: rotate(0deg);\n                }\n                100% {\n                    -webkit-transform: rotate(360deg);\n                }\n            }\n            \n            @keyframes spin {\n                0% {\n                    transform: rotate(0deg);\n                }\n                100% {\n                    transform: rotate(360deg);\n                }\n            }\n        </style>\n        <div class='loader' *ngIf=\"fetchingUsers\"></div>\n        <font color='red' size='12' *ngIf=\"user_err\">\n            {{user_err}}\n        </font>\n    </div>\n</div>"

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" style=\"padding:40px;background:#7f44b0;\">\n    <div fxFlex=\"20\" style=\"padding:2%;text-align: center;\">\n        <img src=\"{{detail.photo}}\" height=\"80\" width=\"80\" />\n        <span style=\"font-style: italic;font-size: 10px;color:white;\">{{detail.display_name}}</span>\n    </div>\n    <div fxFlex>\n        <blockquote>\n            <p>{{detail.desc}}</p>\n            <span style=\"font-style: italic;float: right;\">— {{detail.display_name}}</span>\n        </blockquote>\n    </div>\n</div>\n<div fxLayout=\"column\" *ngIf=\"detail\" style='font-family: \"Myriad Set Pro\",\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;'>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" *ngFor=\"let component of detail.components\" style=\"min-height: 400px;\" [style.background]=\"component.background\">\n        <div fxFlex style=\"padding: 20px;padding-left: 40px;\">\n            <h2>{{component.heading}}</h2>\n            <p>{{component.text}}</p>\n            <ul style=\"list-style: none;\" *ngIf=\"component.actions && component.actions.length > 0\">\n                <li *ngFor=\"let action of component.actions\" style=\"display: inline;\">\n                    <a href=\"{{action.target}}\" target=\"_blank\" style=\"text-decoration:none; \">\n                        <img *ngIf=\"action.icon\" src=\"{{action.icon}}\" height=\"50px\" width=\"50px\" />\n                        <span *ngIf=\"!action.icon\">\n                            {{action.title}}\n                        </span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div *ngIf=\"component.photo\" fxFlex=\"50\" style=\"padding: 20px;padding-right: 40px;\" [style.background]=\"component.background1\">\n            <img src=\"{{component.photo}}\" style=\"margin: 0px auto;\" />\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

module.exports = "<div class=\"products\">\n    <div fxLayout=\"row\" style=\"min-height:80px;padding:30px;text-align:center;\" fxLayoutGap fxLayout.xs=\"column\">\n        <span style=\"color:#fbf8e8;\">Smart Products</span> &nbsp; &nbsp;&nbsp; &nbsp;\n        <font size='2' style=\"font-style:italic;\">We are working hard for you, please write us back</font>\n        &nbsp; &nbsp;<span class=\"cute-button\"> contact</span>\n    </div>\n    <router-outlet>\n    </router-outlet>\n</div>"

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"menu\" fxLayoutAlign=\"center\" fxLayoutAlign.xs=\"center\" fxLayout.xs=\"column\" fxLayoutGap=\"15px\"\n    [ngStyle]=\"{'margin-top':'20px'}\" fxLayoutWrap>\n    <div fxLayout=\"column\" *ngFor=\"let item of menus\" [ngStyle]=\"{'background':'url('+item.photo+')', 'background-size':'cover', 'background-color':'black'}\"\n        class=\"menuitem\">\n        <span style=\"background-color: #f0f; padding: 5px;\" (click)=\"showDetails(item.detail)\">\n                <font color=\"white\" font=\"14\">{{item.title}}</font>\n        </span>\n        <div class=\"menu-item-description\" (click)=\"showDetails(item.detail)\" fxFlex>\n            {{item.desc}}\n        </div>\n        <ul class=\"menu-item-links\" *ngIf=\"item.links\">\n            <li *ngFor=\"let link of item.links\" [ngStyle]=\"{'display':'inline-block'}\">\n                <a href=\"{{link.target}}\">\n                    <img src=\"{{link.icon}}\" width=\"40px\" height=\"40px\" />\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(192);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);
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
        this.base = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production ? "" : "http://127.0.0.1:8000";
        localStorage.setItem(this.CREATIVE_TOP_MESSAGE_KEY, "\n        [\n            \"<font size='2' color='blue' >Welcome to CheckIt</font>\",\n            \"<font size='2' color='blue' >We are together creative</font>\",\n            \"<font size='2' color='blue' >Explore explore explore and explore</font>\"\n        ]\n        ");
        localStorage.setItem(this.MENUS_KEY, "\n        [\n            {\n                \"id\": \"m1\",\n                \"title\": \"CheckIt\",\n                \"photo\": \"./static/updates/assets/img/icon-games.png\",\n                \"desc\": \"Beautiful game for all. concentrate on it.\",\n                \"links\": [\n                    {\n                        \"name\": \"Amazon Apps store\",\n                        \"icon\": \"https://cdn1.iconfinder.com/data/icons/app-stores-2/512/amazon_app_store_2.png\",\n                        \"target\": \"https://www.amazon.com/rjsdtr-CheckIt/dp/B01604BGAC/\"\n                    }\n                ]\n            },\n            {\n                \"id\": \"m2\",\n                \"title\": \"Business\",\n                \"photo\": \"http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg\",\n                \"desc\": \"We provide platform for your business plan. Here you can design evething in no time with our creative UI.\"\n                \"links\":[\n                    {\n                        \"name\": \"\"\n                    }\n                ]\n            }, \n            {\n                \"id\": \"m3\",\n                \"title\": \"Explore\",\n                \"photo\":\"http://www.planwallpaper.com/static/images/9-credit-1.jpg\",\n                \"desc\": \"What is going on?? search for everything on a single platform. find the nice places in this World.\"\n            },\n            {\n                \"id\": \"m4\",\n                \"title\": \"Prove yourself\",\n                \"photo\": \"http://www.dam7.com/Images/Puppy/images/myspace-puppy-images-0005.jpg\",\n                \"desc\": \"Create a funtastic resume with a template of your choice FREE.\"\n            },\n            {\n                \"id\": \"m5\",\n                \"title\": \"Extra\",\n                \"photo\": \"http://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg\",\n                \"desc\": \"Know what are we here for? write us and much more things.\"\n            }\n            ]\n        ");
    }
    UpdatesService.prototype.getUpdatesMenuItems = function () {
        // let data = JSON.parse(localStorage.getItem(this.MENUS_KEY));
        // let maxDesc = 0;
        // return data;
        return this.http.get(this.base + '/api/products/menus.json').map(function (response) { return response.json()["results"]; });
    };
    UpdatesService.prototype.getDetails = function (id) {
        console.log('calling', this.base + '/api/products/details/' + id + '.json');
        return this.http.get(this.base + '/api/products/details/' + id + '.json').map(function (response) { return response.json(); });
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
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/updates.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(217);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(218);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(126);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });



//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/index.js.map

/***/ }),

/***/ 82:
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
//# sourceMappingURL=/home/ranjeetsingh/dev/CheckIt/redhat/api/api/ngApp/src/environment.js.map

/***/ })

},[439]);
//# sourceMappingURL=main.bundle.js.map