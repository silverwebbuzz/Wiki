(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Sign In\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n\r\n<ion-content class=\"main-page\">\r\n\r\n    <div class=\"grey-background\"></div>\r\n\r\n  <div class=\"container\">\r\n\r\n  <ion-card class=\"box\">\r\n\r\n    <img src=\"../../assets/img/w.png\" class=\"logo\"/>\r\n\r\n  <form [formGroup]=\"login_form\" autocomplete=\"off\">\r\n  <ion-item lines=\"none\" class=\"input-container\">\r\n    <ion-label position=\"floating\" class=\"input-label\">\r\n      Username\r\n    </ion-label>\r\n    <ion-input type=\"text\" formControlName=\"username\" class=\"input-box\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n    *ngIf=\"login_form.controls.username.hasError('required') && login_form.controls.username.touched\">\r\n    <p class=\"content\">Username or Email is required!</p>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"login_form.controls.username.hasError('incorrect') && login_form.controls.username.touched\">\r\n      <p class=\"content\">Username or email does not exists.</p>\r\n    </ion-item>\r\n\r\n  <ion-item lines=\"none\" class=\"input-container\">\r\n    <ion-label position=\"floating\" class=\"input-label\">\r\n      Password\r\n    </ion-label>\r\n    <ion-input type=\"password\" formControlName=\"password\" class=\"input-box\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n    *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\r\n    <p class=\"content\">Password is required!</p>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\r\n      <p class=\"content\">Invalid password.</p>\r\n    </ion-item>\r\n    \r\n  <ion-button fill=\"clear\" size=\"small\" expand=\"full\" class=\"btn-forgot\" routerLink=\"/forgotpass\">Forgot Password ?</ion-button>\r\n\r\n  <ion-button expand=\"full\" size=\"large\" color=\"dark\" class=\"btn-login\" (click)=\"doLogin()\">SIGN IN</ion-button>\r\n\r\n  </form>\r\n\r\n  </ion-card>\r\n\r\n  <ion-button fill=\"clear\" size=\"large\" expand=\"full\" class=\"btn-signup\" routerLink=\"/register\">CREATE AN ACCOUNT</ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");










var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, statusBar, common, service, router, guard, formBuilder) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.common = common;
        this.service = service;
        this.router = router;
        this.guard = guard;
        this.formBuilder = formBuilder;
        this.login_fb();
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login_fb = function () {
        this.login_form = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        for (var v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
        }
        if (this.login_form.valid) {
            this.common.presentLoading();
            var body = {
                "username": this.login_form.value.username,
                "password": this.login_form.value.password
            };
            this.service.LoginUser(body).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    window.localStorage.setItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_DETAILS, JSON.stringify(val.user_detail));
                    _this.common.presentToastWithOptions("Login Successfully.");
                    _this.router.navigate(['/home']);
                }
                else {
                    if (val.field_name == "username") {
                        _this.login_form.controls['username'].setErrors({ 'incorrect': true });
                        _this.login_form.controls['username'].markAsTouched();
                    }
                    else if (val.field_name == "password") {
                        _this.login_form.controls['password'].setErrors({ 'incorrect': true });
                        _this.login_form.controls['password'].markAsTouched();
                    }
                    _this.common.presentToastWithOptions(val.message);
                }
            }, function (err) {
                console.log('Login Err:', err);
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                _this.common.presentToastWithOptions('Server Problem, Please try again.');
            });
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map