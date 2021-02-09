(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-profile-create-profile-module"],{

/***/ "./src/app/create-profile/create-profile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-profile/create-profile.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfilePageModule", function() { return CreateProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-profile.page */ "./src/app/create-profile/create-profile.page.ts");







var routes = [
    {
        path: '',
        component: _create_profile_page__WEBPACK_IMPORTED_MODULE_6__["CreateProfilePage"]
    }
];
var CreateProfilePageModule = /** @class */ (function () {
    function CreateProfilePageModule() {
    }
    CreateProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_profile_page__WEBPACK_IMPORTED_MODULE_6__["CreateProfilePage"]]
        })
    ], CreateProfilePageModule);
    return CreateProfilePageModule;
}());



/***/ }),

/***/ "./src/app/create-profile/create-profile.page.html":
/*!*********************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Create New Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"create_form\" autocomplete=\"off\">\n    \n    <ion-item lines=\"none\" class=\"input-container\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        First Name\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"firstname\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.firstname.hasError('required') && create_form.controls.firstname.touched\">\n      <p class=\"content\">Please Enter First Name!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-container\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        Last Name\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.lastname.hasError('required') && create_form.controls.lastname.touched\">\n      <p class=\"content\">Please Enter Last Name!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-container\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        Email\n      </ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.email.hasError('required') && create_form.controls.email.touched\">\n      <p class=\"content\">Email Address is required!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.email.hasError('pattern') && create_form.controls.email.touched\">\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\n    </ion-item>\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.email.hasError('incorrect') && create_form.controls.email.touched\">\n      <p class=\"content\">Email Address is already taken!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-container\">\n      <ion-label position=\"floating\" class=\"input-label\">\n        Username\n      </ion-label>\n      <ion-input type=\"text\" formControlName=\"username\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.username.hasError('required') && create_form.controls.username.touched\">\n      <p class=\"content\">Please Enter Userame!</p>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\n      *ngIf=\"create_form.controls.username.hasError('incorrect') && create_form.controls.username.touched\">\n      <p class=\"content\">Username is already taken!</p>\n    </ion-item>\n    \n    <ion-card class=\"card-note\">\n      <ion-label>\n        Password is auto generated and we will send in email.\n      </ion-label>\n    </ion-card>\n\n    </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" size=\"large\" color=\"dark\" style=\"margin: 0px;\" (click)=\"submit()\">\n    SUBMIT\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/create-profile/create-profile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  --padding-start: 8px; }\n  .input-container .input-label {\n    padding-left: 8px; }\n  .input-container .input-box {\n    border: 1px solid #000;\n    --padding-start: 8px; }\n  .card-note {\n  box-shadow: 0px 0px;\n  background: #f1f1f1;\n  border-radius: 0px;\n  padding: 8px;\n  font-size: 12px;\n  font-style: oblique;\n  margin: 32px 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXByb2ZpbGUvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXGNyZWF0ZS1wcm9maWxlXFxjcmVhdGUtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGlCQUFpQixFQUFBO0VBSnpCO0lBUVEsc0JBQXNCO0lBQ3RCLG9CQUFnQixFQUFBO0VBSXhCO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtY29udGFpbmVye1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcblxyXG4gICAgLmlucHV0LWxhYmVse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1ib3h7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtbm90ZXtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIG1hcmdpbjogMzJweCA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-profile/create-profile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-profile/create-profile.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfilePage", function() { return CreateProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");









var CreateProfilePage = /** @class */ (function () {
    function CreateProfilePage(navCtrl, statusBar, common, router, service, formBuilder) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.common = common;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.create_fb();
    }
    CreateProfilePage.prototype.ngOnInit = function () {
    };
    CreateProfilePage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    CreateProfilePage.prototype.create_fb = function () {
        this.create_form = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ])],
        });
    };
    ;
    CreateProfilePage.prototype.submit = function () {
        var _this = this;
        for (var v in this.create_form.controls) {
            this.create_form.controls[v].markAsTouched();
        }
        if (this.create_form.valid) {
            this.common.presentLoading();
            var userInfo = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].USER_DETAILS));
            var body = {
                "username": this.create_form.value.username,
                "firstname": this.create_form.value.firstname,
                "lastname": this.create_form.value.lastname,
                "email": this.create_form.value.email,
                "added_by": userInfo.id,
            };
            this.service.createUserProfile(body).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    //window.localStorage.setItem(Constants.USER_DETAILS, JSON.stringify(val.user_data));
                    _this.common.presentToastWithOptions(val.message);
                    _this.router.navigate(['/home']);
                }
                else {
                    if (val.fieldname == "username") {
                        _this.create_form.controls['username'].setErrors({ 'incorrect': true });
                        _this.create_form.controls['username'].markAsTouched();
                    }
                    else if (val.fieldname == "email") {
                        _this.create_form.controls['email'].setErrors({ 'incorrect': true });
                        _this.create_form.controls['email'].markAsTouched();
                    }
                    else {
                        _this.create_form.controls['username'].setErrors({ 'incorrect': true });
                        _this.create_form.controls['username'].markAsTouched();
                        _this.create_form.controls['email'].setErrors({ 'incorrect': true });
                        _this.create_form.controls['email'].markAsTouched();
                    }
                    _this.common.presentToastWithOptions(val.message);
                }
            }, function (err) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                _this.common.presentToastWithOptions('Server Problem, Please try again.');
                console.log('Create Profile Err:', err);
            });
        }
    };
    CreateProfilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CreateProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(/*! ./create-profile.page.html */ "./src/app/create-profile/create-profile.page.html"),
            styles: [__webpack_require__(/*! ./create-profile.page.scss */ "./src/app/create-profile/create-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateProfilePage);
    return CreateProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=create-profile-create-profile-module.js.map