(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







var routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.html":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Forgot Password\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"main-page\">\r\n\r\n  <div class=\"grey-background\"></div>\r\n\r\n  <div class=\"container forgot-pass\">\r\n\r\n  <ion-card class=\"box\">\r\n  \r\n  <ion-label color=\"dark\" class=\"header-label\">\r\n    Forgot your password ?\r\n  </ion-label>\r\n\r\n  <form [formGroup]=\"forgot_form\" autocomplete=\"off\">\r\n  <ion-item lines=\"none\" class=\"input-container\">\r\n    <ion-label position=\"floating\" class=\"input-label\">\r\n      Email address\r\n    </ion-label>\r\n    <ion-input type=\"email\" formControlName=\"email\" class=\"input-box\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n    *ngIf=\"forgot_form.controls.email.hasError('required') && forgot_form.controls.email.touched\">\r\n    <p class=\"content\">Email Address is required!</p>\r\n  </ion-item>\r\n  \r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n    *ngIf=\"forgot_form.controls.email.hasError('pattern') && forgot_form.controls.email.touched\">\r\n    <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n  </ion-item>\r\n\r\n  <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n  *ngIf=\"forgot_form.controls.email.hasError('incorrect') && forgot_form.controls.email.touched\">\r\n  <p class=\"content\">Email does not exists!! Please enter registered email.</p>\r\n</ion-item>\r\n\r\n  <ion-button expand=\"full\" size=\"large\" color=\"dark\" class=\"btn-login\" (click)=\"forgotPassword()\">RESET MY PASSWORD</ion-button>\r\n  </form>\r\n\r\n  </ion-card>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ForgotpassPage = /** @class */ (function () {
    function ForgotpassPage(formBuilder, navCtrl, statusBar, common, service, router) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.common = common;
        this.service = service;
        this.router = router;
        this.forgotpass_fb();
    }
    ForgotpassPage.prototype.forgotpass_fb = function () {
        this.forgot_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])]
        });
    };
    ForgotpassPage.prototype.forgotPassword = function () {
        var _this = this;
        for (var v in this.forgot_form.controls) {
            this.forgot_form.controls[v].markAsTouched();
        }
        if (this.forgot_form.valid) {
            this.common.presentLoading();
            var body = {
                "email": this.forgot_form.value.email
            };
            this.service.ForgotPasswordUser(body).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                }
                else {
                    _this.forgot_form.controls['email'].setErrors({ 'incorrect': true });
                    _this.forgot_form.controls['email'].markAsTouched();
                }
                _this.common.presentToastWithOptions(val.message);
            }, function (err) {
                console.log('Forgot Password Err:', err);
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                _this.common.presentToastWithOptions('Server Problem, Please try again.');
            });
        }
    };
    ForgotpassPage.prototype.ngOnInit = function () {
    };
    ForgotpassPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ForgotpassPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.page.html */ "./src/app/forgotpass/forgotpass.page.html"),
            styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ForgotpassPage);
    return ForgotpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module.js.map