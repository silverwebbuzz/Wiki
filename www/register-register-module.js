(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Create an Account\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"main-page\">\r\n\r\n  <div class=\"grey-background\"></div>\r\n\r\n  <div class=\"container spc\">\r\n\r\n  <ion-card class=\"box\">\r\n\r\n  <form [formGroup]=\"registration_form\" autocomplete=\"off\">\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n        <ion-label>User Type</ion-label>\r\n        <ion-select formControlName=\"usertype\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option *ngFor=\"let ut of UserTypes; let i=index;\" [value]=\"ut.id\">{{ut.name | titlecase}}</ion-select-option>\r\n          </ion-select>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        First Name\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"firstname\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.firstname.hasError('required') && registration_form.controls.firstname.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Last Name\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"lastname\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.lastname.hasError('required') && registration_form.controls.lastname.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Email\r\n      </ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.email.hasError('required') && registration_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.email.hasError('pattern') && registration_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.email.hasError('incorrect') && registration_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is already taken!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Username\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"username\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.username.hasError('required') && registration_form.controls.username.touched\">\r\n      <p class=\"content\">Please Enter Userame!</p>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.username.hasError('incorrect') && registration_form.controls.username.touched\">\r\n      <p class=\"content\">Username is already taken!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Password\r\n      </ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.password.hasError('required') && registration_form.controls.password.touched\">\r\n      <p class=\"content\">Please Enter a Password!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.password.hasError('minlength') && registration_form.controls.password.touched\">\r\n      <p class=\"content\">The password needs at least 8 characters.</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.password.hasError('pattern') && registration_form.controls.password.touched\">\r\n      <p class=\"content\">Please Enter One Upper Case and One Lower Case, One Spacial Characters and One Number</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Confirm Password\r\n      </ion-label>\r\n      <ion-input type=\"password\" formControlName=\"confirmpassword\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.controls.confirmpassword.hasError('required') && registration_form.controls.confirmpassword.touched\">\r\n      <p class=\"content\">Please Enter a Confirm Password!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"registration_form.get('confirmpassword').errors && registration_form.get('confirmpassword').errors.confirmpassword\">\r\n      <p class=\"content\">Passwords must match!</p>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"full\" size=\"large\" color=\"dark\" class=\"btn-login\" (click)=\"submitRegister()\">CREATE AN ACCOUNT</ion-button>\r\n    </form>\r\n\r\n    </ion-card>\r\n\r\n    <ion-button fill=\"clear\" size=\"large\" expand=\"full\" class=\"btn-clear\" routerLink=\"/login\">Already have an account? &nbsp;\r\n      <ion-text color=\"dark\" style=\"font-weight: bold;\">SIGN IN</ion-text>\r\n    </ion-button>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spc {\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGN7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helper/must-match.validator */ "./src/app/_helper/must-match.validator.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");











var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, statusBar, service, auth, common, router, formBuilder) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.service = service;
        this.auth = auth;
        this.common = common;
        this.router = router;
        this.formBuilder = formBuilder;
        this.UserTypes = [];
        this.UserTypes = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_TYPES));
        this.registration_fb();
    }
    RegisterPage.prototype.registration_fb = function () {
        this.registration_form = this.formBuilder.group({
            usertype: [this.UserTypes[0].id],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)
                ])],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validator: _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["ConfirmPasswordValidator"].MatchPassword });
    };
    ;
    RegisterPage.prototype.submitRegister = function () {
        var _this = this;
        console.log('type:', this.registration_form.value.usertype);
        for (var v in this.registration_form.controls) {
            this.registration_form.controls[v].markAsTouched();
        }
        if (this.registration_form.valid) {
            this.common.presentLoading();
            var body = {
                "username": this.registration_form.value.username,
                "firstname": this.registration_form.value.firstname,
                "lastname": this.registration_form.value.lastname,
                "email": this.registration_form.value.email,
                "password": this.registration_form.value.password,
                "usertype": this.registration_form.value.usertype,
                "newslatter_subscribe": "1"
            };
            this.service.RegistrationUser(body).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    window.localStorage.setItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_DETAILS, JSON.stringify(val.user_data));
                    _this.common.presentToastWithOptions(val.message);
                    _this.router.navigate(['/home']);
                }
                else {
                    if (val.fieldname == "username") {
                        _this.registration_form.controls['username'].setErrors({ 'incorrect': true });
                        _this.registration_form.controls['username'].markAsTouched();
                    }
                    else if (val.fieldname == "email") {
                        _this.registration_form.controls['email'].setErrors({ 'incorrect': true });
                        _this.registration_form.controls['email'].markAsTouched();
                    }
                    else {
                        _this.registration_form.controls['username'].setErrors({ 'incorrect': true });
                        _this.registration_form.controls['username'].markAsTouched();
                        _this.registration_form.controls['email'].setErrors({ 'incorrect': true });
                        _this.registration_form.controls['email'].markAsTouched();
                    }
                    _this.common.presentToastWithOptions(val.message);
                }
            }, function (err) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                console.log('Registration Err:', err);
                _this.common.presentToastWithOptions('Server Problem, Please try again.');
            });
        }
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    RegisterPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map