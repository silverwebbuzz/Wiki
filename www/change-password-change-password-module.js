(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");







var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]
    }
];
var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Change Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-label class=\"lbl-head\">Create a new password</ion-label>\r\n\r\n  <ion-label class=\"lbl-sub\">Passwords are case-sensitive and must be at least 8 characters.</ion-label>\r\n\r\n    <form [formGroup]=\"change_form\" autocomplete=\"off\">\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n        <ion-label position=\"floating\" class=\"input-label\">\r\n          Type your current password\r\n        </ion-label>\r\n        <ion-input type=\"password\" formControlName=\"oldpassword\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.controls.oldpassword.hasError('required') && change_form.controls.oldpassword.touched\">\r\n        <p class=\"content\">Please Enter Current Password!</p>\r\n      </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n        <ion-label position=\"floating\" class=\"input-label\">\r\n          Type your new password\r\n        </ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.controls.password.hasError('required') && change_form.controls.password.touched\">\r\n        <p class=\"content\">Please Enter New Password!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.controls.password.hasError('minlength') && change_form.controls.password.touched\">\r\n        <p class=\"content\">The password needs at least 8 characters.</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.controls.password.hasError('pattern') && change_form.controls.password.touched\">\r\n        <p class=\"content\">Please Enter One Upper Case and One Lower Case, One Spacial Characters and One Number</p>\r\n      </ion-item>\r\n  \r\n      <ion-item lines=\"none\" class=\"input-container\">\r\n        <ion-label position=\"floating\" class=\"input-label\">\r\n          Retype your new password\r\n        </ion-label>\r\n        <ion-input type=\"password\" formControlName=\"confirmpassword\" class=\"input-box\"></ion-input>\r\n      </ion-item>\r\n  \r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.controls.confirmpassword.hasError('required') && change_form.controls.confirmpassword.touched\">\r\n        <p class=\"content\">Please Enter Confirm Password!</p>\r\n      </ion-item>\r\n      <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n        *ngIf=\"change_form.get('confirmpassword').errors && change_form.get('confirmpassword').errors.confirmpassword\">\r\n        <p class=\"content\">Passwords must match!</p>\r\n      </ion-item>\r\n\r\n      <ion-button expand=\"full\" size=\"large\" color=\"dark\" class=\"btn-save\" (click)=\"submit()\">SAVE</ion-button>\r\n\r\n      </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  --padding-start: 8px; }\n  .input-container .input-label {\n    padding-left: 8px; }\n  .input-container .input-box {\n    border: 1px solid #000;\n    --padding-start: 8px; }\n  .btn-save {\n  margin: 50px 8px; }\n  .lbl-head {\n  display: block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 20px 8px; }\n  .lbl-sub {\n  display: block;\n  font-size: 14px;\n  padding: 10px 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxpb25pYyBwcm9qZWN0XFx3aWtpL3NyY1xcYXBwXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGlCQUFpQixFQUFBO0VBSnpCO0lBUVEsc0JBQXNCO0lBQ3RCLG9CQUFnQixFQUFBO0VBR3hCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1jb250YWluZXJ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuXHJcbiAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWJveHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgfVxyXG59XHJcbi5idG4tc2F2ZXtcclxuICAgIG1hcmdpbjogNTBweCA4cHg7XHJcbn1cclxuXHJcbi5sYmwtaGVhZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDhweDtcclxufVxyXG4ubGJsLXN1YntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helper/must-match.validator */ "./src/app/_helper/must-match.validator.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");









var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, statusBar, common, service, formBuilder) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.common = common;
        this.service = service;
        this.formBuilder = formBuilder;
        this.registration_fb();
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
    };
    ChangePasswordPage.prototype.registration_fb = function () {
        this.change_form = this.formBuilder.group({
            oldpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ])],
            confirmpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: _helper_must_match_validator__WEBPACK_IMPORTED_MODULE_5__["ConfirmPasswordValidator"].MatchPassword });
    };
    ;
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    ChangePasswordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ChangePasswordPage.prototype.submit = function () {
        var _this = this;
        var userInfo = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_DETAILS));
        for (var v in this.change_form.controls) {
            this.change_form.controls[v].markAsTouched();
        }
        if (this.change_form.valid) {
            this.common.presentLoading();
            var body = {
                "curr_password": this.change_form.value.oldpassword,
                "new_password": this.change_form.value.password,
                "userid": userInfo.id
            };
            this.service.updateProfilePassword(body).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    _this.change_form.reset();
                    _this.common.presentToastWithOptions(val.message);
                }
                else {
                    // if(val.fieldname == "username"){
                    //   this.registration_form.controls['username'].setErrors({'incorrect': true});
                    //   this.registration_form.controls['username'].markAsTouched();
                    // }else if(val.fieldname == "email"){
                    //   this.registration_form.controls['email'].setErrors({'incorrect': true});
                    //   this.registration_form.controls['email'].markAsTouched();
                    // }else{
                    //   this.registration_form.controls['username'].setErrors({'incorrect': true});
                    //   this.registration_form.controls['username'].markAsTouched();
                    //   this.registration_form.controls['email'].setErrors({'incorrect': true});
                    //   this.registration_form.controls['email'].markAsTouched();
                    // }
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
    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.page.html */ "./src/app/change-password/change-password.page.html"),
            styles: [__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map