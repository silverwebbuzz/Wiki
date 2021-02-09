(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprofile-editprofile-module"],{

/***/ "./src/app/editprofile/editprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.module.ts ***!
  \***************************************************/
/*! exports provided: EditprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editprofile.page */ "./src/app/editprofile/editprofile.page.ts");







var routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]
    }
];
var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.page.html":
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Edit Profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <form [formGroup]=\"edit_form\" autocomplete=\"off\">\r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n          <ion-label position=\"floating\" class=\"input-label\">\r\n            First Name\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"firstname\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"edit_form.controls.firstname.hasError('required') && edit_form.controls.firstname.touched\">\r\n          <p class=\"content\">Please Enter First Name!</p>\r\n        </ion-item>\r\n    \r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n          <ion-label position=\"floating\" class=\"input-label\">\r\n            Last Name\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"lastname\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"edit_form.controls.lastname.hasError('required') && edit_form.controls.lastname.touched\">\r\n          <p class=\"content\">Please Enter Last Name!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n            <ion-label position=\"floating\" class=\"input-label\">\r\n              Mobile Number\r\n            </ion-label>\r\n            <ion-input type=\"number\" formControlName=\"phonenumber\" class=\"input-box\"></ion-input>\r\n          </ion-item>\r\n      \r\n          <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n            *ngIf=\"edit_form.controls.phonenumber.hasError('required') && edit_form.controls.phonenumber.touched\">\r\n            <p class=\"content\">Please Enter Mobile Number!</p>\r\n          </ion-item>\r\n    \r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n          <ion-label position=\"floating\" class=\"input-label\">\r\n            Skills\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"skills\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"edit_form.controls.skills.hasError('required') && edit_form.controls.skills.touched\">\r\n          <p class=\"content\">Please Enter Skills!</p>\r\n        </ion-item>\r\n    \r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n          <ion-label position=\"floating\" class=\"input-label\">\r\n            Address\r\n          </ion-label>\r\n          <ion-input type=\"text\" formControlName=\"address\" class=\"input-box\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"edit_form.controls.address.hasError('required') && edit_form.controls.address.touched\">\r\n          <p class=\"content\">Please Enter Address!</p>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <ion-label>Subscribe Newsletter</ion-label>\r\n          <ion-toggle slot=\"end\" color=\"medium\" [checked]=\"newsletter == 1\" (ionChange)=\"newsletterChange($event)\"></ion-toggle>\r\n        </ion-item>\r\n    \r\n        <ion-item lines=\"none\" class=\"input-container\">\r\n          <ion-label position=\"floating\" class=\"input-label\">\r\n            About\r\n          </ion-label>\r\n          <ion-textarea rows=\"3\" type=\"text\" formControlName=\"about\" class=\"input-box\"></ion-textarea>\r\n        </ion-item>\r\n\r\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n          *ngIf=\"edit_form.controls.about.hasError('required') && edit_form.controls.about.touched\">\r\n          <p class=\"content\">Please Enter Some Information!</p>\r\n        </ion-item>\r\n    \r\n        <div class=\"format-div\" *ngIf=\"imgCoverURL\">\r\n          <img [src]=\"imgCoverURL\" class=\"format-img\"/>\r\n          <ion-label class=\"format-label\">Cover Picture</ion-label>\r\n        </div>\r\n    \r\n        <div class=\"upload-btn-wrapper\">\r\n          <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Browse Cover Picture</ion-button>\r\n          <input type=\"file\" formControlName=\"coverpic\" (change)=\"fileCoverUpload($event)\" accept=\"image/*\"/>\r\n        </div>\r\n\r\n        <div class=\"format-div\" *ngIf=\"imgProfileURL\">\r\n            <img [src]=\"imgProfileURL\" class=\"format-img\"/>\r\n            <ion-label class=\"format-label\">Profile Picture</ion-label>\r\n          </div>\r\n      \r\n          <div class=\"upload-btn-wrapper\">\r\n            <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Browse Profile Picture</ion-button>\r\n            <input type=\"file\" formControlName=\"profilepic\" (change)=\"fileProfileUpload($event)\" accept=\"image/*\"/>\r\n          </div>\r\n    \r\n        </form>\r\n    \r\n    </ion-content>\r\n    \r\n    <ion-footer>\r\n      <ion-button expand=\"full\" size=\"large\" color=\"dark\" style=\"margin: 0px;\" (click)=\"submit()\">\r\n        SUBMIT\r\n      </ion-button>\r\n    </ion-footer>"

/***/ }),

/***/ "./src/app/editprofile/editprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  --padding-start: 8px; }\n  .input-container .input-label {\n    padding-left: 8px; }\n  .input-container .input-box {\n    border: 1px solid #000;\n    --padding-start: 8px; }\n  .upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 25px 8px 0px 8px; }\n  .format-div {\n  border: 1px dotted #383a3e;\n  margin: 16px 8px 0px 8px;\n  background: #f1f1f1; }\n  .format-div .format-img {\n    height: 250px;\n    width: 250px;\n    display: block;\n    padding: 10px;\n    margin: auto;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .format-div .format-label {\n    display: block;\n    text-align: center;\n    padding: 8px; }\n  .btn {\n  border: 2px solid #383a3e;\n  font-weight: bold;\n  margin: 8px 0px 24px 0px; }\n  .upload-btn-wrapper input[type=file] {\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXGVkaXRwcm9maWxlXFxlZGl0cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGlCQUFpQixFQUFBO0VBSnpCO0lBUVEsc0JBQXNCO0lBQ3RCLG9CQUFnQixFQUFBO0VBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCLEVBQUE7RUFFNUI7RUFDSSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBO0VBSHZCO0lBTVEsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7RUFYekI7SUFlUSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQTtFQUlwQjtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsd0JBQXdCLEVBQUE7RUFHMUI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lcntcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG5cclxuICAgIC5pbnB1dC1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtYm94e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDI1cHggOHB4IDBweCA4cHg7XHJcbn1cclxuLmZvcm1hdC1kaXZ7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgIzM4M2EzZTsgXHJcbiAgICBtYXJnaW46IDE2cHggOHB4IDBweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cclxuICAgIC5mb3JtYXQtaW1ne1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAyNTBweDsgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybWF0LWxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzgzYTNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDhweCAwcHggMjRweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/editprofile/editprofile.page.ts ***!
  \*************************************************/
/*! exports provided: EditprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePage", function() { return EditprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, formBuilder, common, service, router, statusBar) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.common = common;
        this.service = service;
        this.router = router;
        this.statusBar = statusBar;
        this.uploadCoverFile = null;
        this.uploadProfileFile = null;
        this.imgCoverURL = null;
        this.imgProfileURL = null;
        this.userDetails = null;
        this.userDetails = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_DETAILS));
        this.newsletter = this.userDetails.newslatter_subscribe;
        console.log('newsletter:', this.newsletter);
        this.edit_fb();
    }
    EditprofilePage.prototype.ngOnInit = function () {
    };
    EditprofilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EditprofilePage.prototype.edit_fb = function () {
        this.edit_form = this.formBuilder.group({
            firstname: [this.userDetails.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastname: [this.userDetails.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phonenumber: [this.userDetails.mobileno, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            skills: [this.userDetails.skill, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            address: [this.userDetails.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            about: [this.userDetails.about, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            coverpic: [null],
            profilepic: [null]
        });
    };
    ;
    EditprofilePage.prototype.fileCoverUpload = function (event) {
        var _this = this;
        this.uploadCoverFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadCoverFile);
        reader.onload = function (_event) {
            _this.imgCoverURL = reader.result;
        };
    };
    EditprofilePage.prototype.newsletterChange = function (event) {
        if (event.detail.checked) {
            this.newsletter = '1';
        }
        else {
            this.newsletter = '0';
        }
    };
    EditprofilePage.prototype.fileProfileUpload = function (event) {
        var _this = this;
        this.uploadProfileFile = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(this.uploadProfileFile);
        reader.onload = function (_event) {
            _this.imgProfileURL = reader.result;
        };
    };
    EditprofilePage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    EditprofilePage.prototype.submit = function () {
        var _this = this;
        for (var v in this.edit_form.controls) {
            this.edit_form.controls[v].markAsTouched();
        }
        if (this.edit_form.valid) {
            this.common.presentLoading();
            var formData = new FormData();
            formData.append('userid', this.userDetails.id);
            formData.append('firstname', this.edit_form.value.firstname);
            formData.append('lastname', this.edit_form.value.lastname);
            formData.append('address', this.edit_form.value.address);
            formData.append('mobileno', this.edit_form.value.phonenumber);
            formData.append('skill', this.edit_form.value.skills);
            formData.append('about', this.edit_form.value.about);
            formData.append('newslatter_subscribe', this.newsletter);
            formData.append('cover_image', this.uploadCoverFile);
            formData.append('profile_image', this.uploadProfileFile);
            this.service.editUserProfile(formData).subscribe(function (val) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    window.localStorage.setItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_5__["Constants"].USER_DETAILS, JSON.stringify(val.userdata));
                    _this.router.navigate(['/userprofile']);
                }
                else {
                }
                _this.common.presentToastWithOptions(val.message);
            }, function (err) {
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                _this.common.presentToastWithOptions('Server Problem, Please try again.');
                console.log('Upload Err:', err);
            });
        }
    };
    EditprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.page.html */ "./src/app/editprofile/editprofile.page.html"),
            styles: [__webpack_require__(/*! ./editprofile.page.scss */ "./src/app/editprofile/editprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], EditprofilePage);
    return EditprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=editprofile-editprofile-module.js.map