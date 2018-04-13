webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pulldata_pulldata__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dataService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
        this.success = "#32db64";
        this.loader = false;
        this.showResponse = false;
        this.ip = '';
        this.userLocation = {
            origin: "Lagos",
            destination: "Port-Harcourt"
        };
    }
    // fetchRemoteData() {
    //   if (this.api_uri) {
    //     this.loader = true;
    //     this.showResponse = false;
    //     this.dataService.getRemoteData(this.api_uri).subscribe(
    //       res => {
    //         this.loader = false;
    //         this.showResponse = true;
    //         this.posts = res;
    //         console.log(this.posts);
    //       },
    //       err => {
    //         this.invalidURI();
    //       }
    //     );
    //   }
    //   else {
    //     this.noURI();
    //   }
    // }
    HomePage.prototype.noURI = function () {
        var toast = this.toastCtrl.create({
            message: 'Sorry bro! you need to enter a resource uri',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        this.loader = false;
    };
    HomePage.prototype.invalidURI = function () {
        var toast = this.toastCtrl.create({
            message: 'Oops! There is an issue with your resource uri',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        this.loader = false;
    };
    HomePage.prototype.successMsg = function () {
        var toast = this.toastCtrl.create({
            message: 'We are fetching your response',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.checkIp = function () {
        this.dataService.checkValidIP(this.ip).subscribe(function (data) {
            data;
        });
    };
    HomePage.prototype.getTravelInfo = function () {
        var _this = this;
        this.dataService.checkDirections(this.userLocation.origin, this.userLocation.destination)
            .then(function (res) {
            // console.log(res);
            var body = res['_body'];
            var parsed_body = JSON.parse(body);
            _this.response_data = parsed_body.routes[0];
            _this.legs = parsed_body.routes[0].legs[0];
            console.log(_this.response_data);
        }, function (err) {
            console.log('Error calling api', err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/damioduronbi/Desktop/ionicsandbox/src/pages/home/home.html"*/'<ion-content>\n  <div padding text-center>\n    <h1 padding-vertical>Is your API Resource URI valid?</h1>\n    <hr>\n    <p>This app takes in the user input and makes a GET request using the\n      <strong>HTTPClient</strong> service.</p>\n    <p>Also uses the\n      <strong>Toast Controller</strong> api to give a feedback to the user if no url is entered.</p>\n    <p>I also used the\n      <strong>ng-if</strong> directive to pull stunts with the loader and the response div.</p>\n    <br>\n    <ion-list margin-vertical>\n      <ion-item>\n        <ion-input text-center type="text" placeholder="Enter your API resource uri" [(ngModel)]="api_uri"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="secondary" (click)="fetchRemoteData()">Check resource Validity</button>\n  </div>\n  <div text-center>\n    <img *ngIf="loader" ion-avatar src="https://thumbs.gfycat.com/AggressiveGrouchyHammerkop-max-1mb.gif" alt="">\n  </div>\n  <div *ngIf="posts" text-center>\n    <div *ngIf="showResponse">\n      <h2 [style.color]="success">Success!</h2>\n      <strong>API Retrieved</strong>\n      <br>{{posts}}\n    </div>\n  </div>\n\n  <div margin>\n    <ion-list>\n      <ion-item>\n        <input type="text" placeholder="Enter your IP address" name="ip" [(ngModel)]="ip" (keyup.enter)="checkIp(ip)">\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div>\n    <h1>Get Your Travel Info</h1>\n    <ion-list margin-vertical>\n      <ion-item>\n        <ion-input text-center type="text" placeholder="Enter your location" [(ngModel)]="userLocation.origin"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input text-center type="text" placeholder="Enter your destination" [(ngModel)]="userLocation.destination"></ion-input>\n      </ion-item>\n      <button ion-button (click)="getTravelInfo()">Get Info</button>\n    </ion-list>\n\n    <div *ngIf="response_data">\n      <h3>{{response_data.summary}}</h3>\n      <p>You are travelling for about <strong>{{legs.distance.text}}</strong></p>\n      <ul>\n        <li *ngFor="let step of legs.steps">{{step.html_instructions}}</li>\n      </ul>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/damioduronbi/Desktop/ionicsandbox/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_pulldata_pulldata__["a" /* PulldataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulldataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PulldataProvider = /** @class */ (function () {
    // https://maps.googleapis.com/maps/api/directions/json?origin=Abeokuta, Ogun State&destination=Port-Harcourt&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs
    // https://maps.googleapis.com/maps/api/directions/jsonp?origin=Lagos&destination=Port-Harcourt&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs
    function PulldataProvider(http) {
        this.http = http;
        this.apiKey = "AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs";
        this.mapsUrl = "https://maps.googleapis.com/maps/api/directions/jsonp?";
        console.log('Hello PulldataProvider Called!');
    }
    // getRemoteData(remoteUrl) {
    //   return this.http.get<Data>(remoteUrl);
    // }
    PulldataProvider.prototype.checkValidIP = function (ip) {
        return this.http.get('https://check.getipintel.net/check.php?ip=' + ip);
    };
    PulldataProvider.prototype.checkDirections = function (origin, destination) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyDnfd0T0N0QjiEM94hxVfSIzKnpUm24zIs")
                .subscribe(function (res) { resolve(res); }, function (err) { reject(err); });
        });
    };
    PulldataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], PulldataProvider);
    return PulldataProvider;
}());

//# sourceMappingURL=pulldata.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pulldata_pulldata__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_pulldata_pulldata__["a" /* PulldataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/damioduronbi/Desktop/ionicsandbox/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/damioduronbi/Desktop/ionicsandbox/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map