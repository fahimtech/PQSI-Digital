(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 5639);






const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules }), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/login.service */ 8579);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 5639);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var src_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app.service */ 2004);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3981);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }, src_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService, src_services_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4018:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 1659);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 7008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app.service */ 2004);







let HomeComponent = class HomeComponent {
    constructor(route, appService, fb) {
        this.route = route;
        this.appService = appService;
        this.fb = fb;
        this.showWelcome = true;
        this.profileData = [];
        this.showPostForm = false;
        this.addForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            job: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        this.getProfileData();
    }
    ionViewWillEnter() {
        this.showWelcome = true;
        this.showPostForm = false;
    }
    logout() {
        this.route.navigateByUrl('login');
    }
    continue() {
        this.showWelcome = false;
    }
    getProfileData() {
        this.appService.getData('api/users').subscribe(success => {
            console.log(success);
            this.profileData = success.data;
        }, error => { });
    }
    addSubmit() {
        if (this.addForm.valid) {
            console.log("data ===>", this.addForm.getRawValue());
            const params = {
                name: this.addForm.get("name").value,
                job: this.addForm.get("job").value
            };
            this.appService.postData('api/users', params).subscribe(success => {
                this.appService.showToast("Added Successfully!");
                this.addForm.reset();
            }, error => {
                this.appService.showToast("Oops, something went wrong. Please try again later.");
            });
        }
    }
    addUser() {
        this.showPostForm = true;
    }
    back() {
        this.showPostForm = false;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 5639:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */ 2090);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 3557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/login.service */ 8579);







let LoginComponent = class LoginComponent {
    constructor(fb, loginService, route) {
        this.fb = fb;
        this.loginService = loginService;
        this.route = route;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.loadProgress = 0;
        this.initializeForm();
    }
    ionViewDidLeave() {
        if (this.loadInterval) {
            clearInterval(this.loadInterval);
        }
    }
    initializeForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    validateLogin() {
        if (this.loginForm.valid) {
            console.log("data ===>", this.loginForm.getRawValue());
            if (this.loginService.validateLogin(this.loginForm.getRawValue())) {
                /*success response */
                this.loadInterval = setInterval(() => {
                    if (this.loadProgress < 1) {
                        this.loadProgress += 0.1;
                    }
                    else {
                        clearInterval(this.loadInterval);
                        this.errorMessage = "";
                        this.loadProgress = 0;
                        this.route.navigateByUrl('home');
                    }
                }, 100);
            }
            else {
                /* error response */
                this.errorMessage = "Invalid Credentials";
            }
            return;
        }
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _D_FAHIM_FAHIM_TECH_GITHUB_PQSI_Digital_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 9321:
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAccounts": () => (/* binding */ userAccounts)
/* harmony export */ });
const userAccounts = [
    {
        email: "test@pqsi.in",
        password: "pqsi123"
    }
];


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://reqres.in/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 2004:
/*!*************************************!*\
  !*** ./src/services/app.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 8260);





const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
let AppService = class AppService {
    constructor(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    getData(actionMethod) {
        return this.http.get(baseUrl + actionMethod);
    }
    postData(actionMethod, data) {
        return this.http.post(baseUrl + actionMethod, data);
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss().then(() => {
                console.log('Dismissed toast');
            });
            yield toast.present();
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ 8579:
/*!***************************************!*\
  !*** ./src/services/login.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/common/constants */ 9321);



let LoginService = class LoginService {
    constructor() { }
    validateLogin(credentials) {
        const matchingRecord = src_common_constants__WEBPACK_IMPORTED_MODULE_0__.userAccounts.filter((data) => {
            return (data.email === credentials.email && data.password === credentials.password);
        });
        return matchingRecord.length !== 0;
    }
};
LoginService.ctorParameters = () => [];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 1659:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app-header ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button type=\"button\" class=\"back-btn\" slot=\"start\" expand=\"block\" shape=\"round\" size=\"small\" (click)=\"back()\"\r\n      *ngIf=\"showPostForm\">\r\n      <ion-icon name=\"chevron-back-circle-outline\" class=\"back-ic\"></ion-icon>\r\n    </ion-button>\r\n    <ion-title class=\"header-title\">Home</ion-title>\r\n    <ion-button type=\"button\" class=\"logout-btn\" slot=\"end\" expand=\"block\" shape=\"round\" size=\"small\"\r\n      (click)=\"logout()\">\r\n      Logout <ion-icon name=\"log-out-outline\" class=\"logout-ic\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"app-home\" [fullscreen]=\"true\">\r\n  <div class=\"welcome-card\" *ngIf=\"showWelcome\">\r\n    <p class=\"welcome-msg\">Welcome, You have successfully logged in 👏 </p>\r\n    <ion-button type=\"button\" class=\"continue-btn\" slot=\"right\" expand=\"block\" shape=\"round\" size=\"medium\"\r\n      color=\"primary\" (click)=\"continue()\">Continue\r\n    </ion-button>\r\n  </div>\r\n  <section class=\"home-container\" *ngIf=\"!showWelcome\">\r\n    <ion-list class=\"profile-list\" *ngIf=\"!showPostForm\">\r\n      <ion-item class=\"profile-item ion-no-padding\" lines=\"none\" *ngFor=\"let data of profileData\">\r\n        <div class=\"profile-card\">\r\n          <ion-avatar class=\"profile-img\">\r\n            <img [src]=\"data.avatar\" shape=\"round\" alt=\"avatar\" class=\"avatar-img\" />\r\n          </ion-avatar>\r\n          <div class=\"profile-content\">\r\n            <div class=\"name-wrap\">\r\n              <span class=\"first-name\">{{data.first_name}}</span>\r\n              <span class=\"last-name\">{{data.last_name}}</span>\r\n            </div>\r\n            <p class=\"email-txt\">{{data.email}}</p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n    <form class=\"add-form\" [formGroup]=\"addForm\" (ngSubmit)=\"addSubmit()\" *ngIf=\"showPostForm\">\r\n      <div class=\"form-group\" *ngIf=\"showPostForm\">\r\n        <ion-item class=\"form-field ion-no-padding\">\r\n          <ion-icon class=\"ip-icon\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n          <ion-input class=\"form-control\" placeholder=\"Name\" type=\"text\" formControlName=\"name\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-item class=\"form-field ion-no-padding\">\r\n          <ion-icon class=\"ip-icon\" name=\"briefcase-outline\" slot=\"start\"></ion-icon>\r\n          <ion-input class=\"form-control\" placeholder=\"Job\" type=\"text\" formControlName=\"job\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <ion-button type=\"submit\" class=\"submit-btn\" color=\"primary\" expand=\"block\" shape=\"round\" size=\"medium\"\r\n        [disabled]=\"!addForm.valid\">Submit\r\n      </ion-button>\r\n    </form>\r\n  </section>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"!showPostForm && !showWelcome\">\r\n    <ion-fab-button (click)=\"addUser()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>");

/***/ }),

/***/ 2090:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"app-login\" [fullscreen]=\"true\">\r\n  <div class=\"shape-style shape-top\"></div>\r\n  <div class=\"shape-style shape-bottom\"></div>\r\n  <div class=\"cover-image\">\r\n    <img src=\"assets/images/mobile-login.svg\" class=\"cover-bg\" alt=\"image-not-found\" />\r\n  </div>\r\n  <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"validateLogin()\">\r\n    <div class=\"welcome-content\">\r\n      <h3 class=\"welcome-title\">Welcome Back 👋</h3>\r\n      <p class=\"welcome-txt\">I am happy to see you again. You can continue where you left off by logging in</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <ion-item class=\"form-field ion-no-padding\">\r\n        <ion-icon class=\"ip-icon\" name=\"at-outline\" slot=\"start\"></ion-icon>\r\n        <ion-input class=\"form-control\" placeholder=\"Email Adress\" type=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <p class=\"error-message\" *ngIf=\"loginForm.controls['email'].errors && loginForm.controls['email'].dirty\">\r\n        Invalid email.\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <ion-item class=\"form-field ion-no-padding\">\r\n        <ion-icon class=\"ip-icon\" name=\"key-outline\" slot=\"start\"></ion-icon>\r\n        <ion-input class=\"form-control\" placeholder=\"Password\" [type]=\"passwordType\" formControlName=\"password\">\r\n        </ion-input>\r\n        <ion-icon class=\"eye-icon\" [name]=\"passwordIcon\" slot=\"end\" (click)='hideShowPassword()'></ion-icon>\r\n      </ion-item>\r\n      <p class=\"error-message\">{{errorMessage}}</p>\r\n    </div>\r\n    <ion-button type=\"submit\" class=\"submit-btn\" color=\"primary\" expand=\"block\" shape=\"round\" size=\"medium\"\r\n      [disabled]=\"!loginForm.valid\">Login\r\n    </ion-button>\r\n    <div class=\"progress-bar\">\r\n      <ion-progress-bar color=\"primary\" [value]=\"loadProgress\"></ion-progress-bar>\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7008:
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = ".app-header {\n  position: relative;\n}\n.app-header ion-toolbar {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n}\n.app-header ion-toolbar .back-btn {\n  font-size: 20px;\n  margin: 0;\n  --padding-start: 15px;\n}\n.app-header ion-toolbar .header-title {\n  color: #fff;\n  font-size: 16px;\n}\n.app-header ion-toolbar .logout-btn {\n  width: auto;\n  --padding-start: 15px;\n  --padding-end: 10px;\n  --background: #fff;\n  --color: #3880ff;\n  font-weight: bold;\n  height: 30px;\n  margin-right: 6px;\n}\n.app-header ion-toolbar .logout-btn .logout-ic {\n  margin-left: 8px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.app-home {\n  position: relative;\n}\n.app-home::before {\n  content: \"\";\n  width: 100%;\n  height: 40px;\n  background: #3880ff;\n  position: absolute;\n  top: 0;\n  z-index: 9;\n}\n.app-home::after {\n  content: \"\";\n  width: 100%;\n  height: 40px;\n  background: #fff;\n  position: absolute;\n  top: 0;\n  z-index: 99;\n  border-top-left-radius: 100px;\n  border-top-right-radius: 100px;\n}\n.app-home .welcome-card {\n  margin-top: 50px;\n  padding: 0 30px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n.app-home .welcome-card p.welcome-msg {\n  font-size: 22px;\n  line-height: 31px;\n  text-align: center;\n  font-weight: bold;\n}\n.app-home .home-container {\n  position: relative;\n  margin-top: 40px;\n}\n.app-home .home-container .profile-list {\n  width: 100%;\n  padding: 0 20px;\n}\n.app-home .home-container .profile-list .profile-item {\n  margin-bottom: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ebf2fc;\n}\n.app-home .home-container .profile-list .profile-item .profile-card {\n  display: flex;\n  width: 100%;\n  grid-gap: 20px;\n  gap: 20px;\n  align-items: center;\n  padding: 10px;\n  background: #ebf3ff;\n  border-radius: 15px;\n}\n.app-home .home-container .profile-list .profile-item .profile-card .profile-img {\n  min-width: 55px;\n  min-height: 55px;\n}\n.app-home .home-container .profile-list .profile-item .profile-card .profile-content {\n  position: relative;\n  width: 100%;\n}\n.app-home .home-container .profile-list .profile-item .profile-card .profile-content .name-wrap {\n  font-size: 15px;\n  margin-bottom: 8px;\n  color: #121212;\n  font-weight: 600;\n  word-break: break-word;\n}\n.app-home .home-container .profile-list .profile-item .profile-card .profile-content .name-wrap .first-name {\n  margin-right: 6px;\n}\n.app-home .home-container .profile-list .profile-item .profile-card .profile-content .email-txt {\n  margin: 0;\n  font-size: 15px;\n  word-break: break-all;\n  line-height: 22px;\n}\n.app-home .home-container .add-form {\n  width: 80%;\n  position: relative;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBQ1o7QUFFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQVo7QUFHUTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRFo7QUFHWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBT0E7RUFDSSxrQkFBQTtBQUpKO0FBTUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFKUjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUpSO0FBTUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBTVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUpaO0FBS1k7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFIaEI7QUFLZ0I7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhwQjtBQUtvQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUh4QjtBQU1vQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUp4QjtBQUt3QjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBSDVCO0FBSTRCO0VBQ0ksaUJBQUE7QUFGaEM7QUFNd0I7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFKNUI7QUFVUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFSWiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuYmFjay1idG4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nb3V0LWJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgLS1jb2xvcjogIzM4ODBmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcblxyXG4gICAgICAgICAgICAubG9nb3V0LWljIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1ob21lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAud2VsY29tZS1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHAud2VsY29tZS1tc2cge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgLnByb2ZpbGUtbGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmYyZmM7XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBnYXA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmYzZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMjEyMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVtYWlsLXR4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkLWZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3557:
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".app-login {\n  width: 100%;\n}\n.app-login .shape-style {\n  position: relative;\n}\n.app-login .shape-style.shape-top::before {\n  content: \"\";\n  width: 110px;\n  height: 110px;\n  background: #407bff;\n  position: fixed;\n  top: -40px;\n  left: -40px;\n  z-index: 9;\n  border-radius: 100px;\n  opacity: 0.1;\n}\n.app-login .shape-style.shape-top::after {\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  background: #407bff;\n  position: fixed;\n  z-index: 9;\n  border-radius: 100px;\n  opacity: 0.2;\n  top: -10px;\n  left: 40px;\n}\n.app-login .shape-style.shape-bottom::before {\n  content: \"\";\n  width: 110px;\n  height: 110px;\n  background: #407bff;\n  position: fixed;\n  bottom: -40px;\n  right: -40px;\n  z-index: 9;\n  border-radius: 100px;\n  opacity: 0.1;\n}\n.app-login .shape-style.shape-bottom::after {\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  background: #407bff;\n  position: fixed;\n  z-index: 9;\n  border-radius: 100px;\n  opacity: 0.2;\n  bottom: -10px;\n  right: 40px;\n}\n.app-login .cover-image {\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 40px;\n  display: block;\n  text-align: center;\n}\n.app-login .cover-image .cover-bg {\n  height: 30vh;\n}\n.app-login .login-form {\n  padding: 40px 10.6vw;\n  width: 100%;\n}\n.app-login .login-form .welcome-content {\n  position: relative;\n  margin-bottom: 20px;\n}\n.app-login .login-form .welcome-content .welcome-title {\n  margin-top: 0;\n  color: #121212;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n.app-login .login-form .welcome-content .welcome-txt {\n  margin-top: 0;\n  font-size: 14px;\n  color: #b9bec6;\n  line-height: 23px;\n}\n.app-login .login-form .form-group {\n  position: relative;\n}\n.app-login .login-form .form-group .eye-icon {\n  font-size: 20px;\n  color: #37474f;\n}\n.app-login .login-form .submit-btn {\n  margin: 0;\n}\n.app-login .login-form .progress-bar {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBRVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFBaEI7QUFFWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUFoQjtBQUlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRmhCO0FBSVk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFGaEI7QUFPSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU9RO0VBQ0ksWUFBQTtBQUxaO0FBU0k7RUFDSSxvQkFBQTtFQUNBLFdBQUE7QUFQUjtBQVNRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVBaO0FBUVk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFOaEI7QUFTWTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUGhCO0FBV1E7RUFDSSxrQkFBQTtBQVRaO0FBV1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVRoQjtBQVlRO0VBQ0ksU0FBQTtBQVZaO0FBWVE7RUFDSSxnQkFBQTtBQVZaIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1sb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuc2hhcGUtc3R5bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJi5zaGFwZS10b3Age1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDA3YmZmO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MDdiZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNoYXBlLWJvdHRvbSB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MDdiZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC00MHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MDdiZmY7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdmVyLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmNvdmVyLWJnIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAxMC42dnc7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC53ZWxjb21lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIC53ZWxjb21lLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyMTIxMjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud2VsY29tZS10eHQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliZWM2O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmV5ZS1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzc0NzRmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map