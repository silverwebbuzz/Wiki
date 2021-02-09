(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-resume-module"],{

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageModule", function() { return ResumePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resume_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume.page */ "./src/app/resume/resume.page.ts");







var routes = [
    {
        path: '',
        component: _resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]
    }
];
var ResumePageModule = /** @class */ (function () {
    function ResumePageModule() {
    }
    ResumePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_resume_page__WEBPACK_IMPORTED_MODULE_6__["ResumePage"]]
        })
    ], ResumePageModule);
    return ResumePageModule;
}());



/***/ }),

/***/ "./src/app/resume/resume.page.html":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Resume\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"resume_form\" autocomplete=\"off\">\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        First Name\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"firstname\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.firstname.hasError('required') && resume_form.controls.firstname.touched\">\r\n      <p class=\"content\">Please Enter First Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Last Name\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"lastname\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.lastname.hasError('required') && resume_form.controls.lastname.touched\">\r\n      <p class=\"content\">Please Enter Last Name!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Email\r\n      </ion-label>\r\n      <ion-input type=\"email\" formControlName=\"email\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.email.hasError('required') && resume_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is required!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.email.hasError('pattern') && resume_form.controls.email.touched\">\r\n      <p class=\"content\">Please Enter a Valid Email Address!</p>\r\n    </ion-item>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.email.hasError('incorrect') && resume_form.controls.email.touched\">\r\n      <p class=\"content\">Email Address is already taken!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Mobile Number\r\n      </ion-label>\r\n      <ion-input type=\"number\" formControlName=\"phonenumber\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.phonenumber.hasError('required') && resume_form.controls.phonenumber.touched\">\r\n      <p class=\"content\">Please Enter Mobile Number!</p>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Education Qualification\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"qualification\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.qualification.hasError('required') && resume_form.controls.qualification.touched\">\r\n      <p class=\"content\">Please Enter Education Qualification!</p>\r\n    </ion-item>\r\n    \r\n    <ion-item lines=\"none\" class=\"input-container\">\r\n      <ion-label position=\"floating\" class=\"input-label\">\r\n        Work Experience\r\n      </ion-label>\r\n      <ion-input type=\"text\" formControlName=\"experience\" class=\"input-box\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.experience.hasError('required') && resume_form.controls.experience.touched\">\r\n      <p class=\"content\">Please Enter Work Experience!</p>\r\n    </ion-item>    \r\n\r\n    <div class=\"format-div\" *ngIf=\"uploadFile\">\r\n      <img [src]=\"fileImage\" class=\"format-img\"/>\r\n      <ion-label class=\"format-label\">{{fileName}}</ion-label>\r\n    </div>\r\n\r\n    <div class=\"upload-btn-wrapper\">\r\n      <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" class=\"btn\">Attach Resume</ion-button>\r\n      <input type=\"file\" formControlName=\"myfile\" (change)=\"fileUpload($event)\" accept=\".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"/>\r\n    </div>\r\n    <ion-item no-padding lines=\"none\" class=\"validator-error\"\r\n      *ngIf=\"resume_form.controls.myfile.hasError('required') && resume_form.controls.myfile.touched\">\r\n      <p class=\"content\">Please Select Your resume!</p>\r\n    </ion-item>\r\n\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" size=\"large\" color=\"dark\" style=\"margin: 0px;\" (click)=\"submit()\">\r\n    SUBMIT\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/resume/resume.page.scss":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n  --padding-start: 8px; }\n  .input-container .input-label {\n    padding-left: 8px; }\n  .input-container .input-box {\n    border: 1px solid #000;\n    --padding-start: 8px; }\n  .upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 25px 8px 0px 8px; }\n  .btn {\n  border: 2px solid #383a3e;\n  font-weight: bold;\n  margin: 8px 0px 24px 0px; }\n  .upload-btn-wrapper input[type=file] {\n  font-size: 38px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0; }\n  .format-div {\n  border: 1px dotted #383a3e;\n  margin: 16px 8px 0px 8px;\n  background: #f1f1f1; }\n  .format-div .format-img {\n    height: 100px;\n    width: 100px;\n    display: block;\n    padding: 10px;\n    margin: auto; }\n  .format-div .format-label {\n    display: block;\n    text-align: center;\n    padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0M6XFxpb25pYyBwcm9qZWN0XFx3aWtpL3NyY1xcYXBwXFxyZXN1bWVcXHJlc3VtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBZ0IsRUFBQTtFQURwQjtJQUlRLGlCQUFpQixFQUFBO0VBSnpCO0lBUVEsc0JBQXNCO0lBQ3RCLG9CQUFnQixFQUFBO0VBSXhCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCLEVBQUE7RUFHMUI7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHdCQUF3QixFQUFBO0VBRzFCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFVBQVUsRUFBQTtFQUdaO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTtFQUhyQjtJQU1NLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZLEVBQUE7RUFWbEI7SUFjTSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lcntcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG5cclxuICAgIC5pbnB1dC1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtYm94e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyNXB4IDhweCAwcHggOHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzODNhM2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogOHB4IDBweCAyNHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1hdC1kaXZ7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgIzM4M2EzZTsgXHJcbiAgICBtYXJnaW46IDE2cHggOHB4IDBweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG5cclxuICAgIC5mb3JtYXQtaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7IFxyXG4gICAgICAgIHdpZHRoOiAxMDBweDsgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybWF0LWxhYmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/resume/resume.page.ts":
/*!***************************************!*\
  !*** ./src/app/resume/resume.page.ts ***!
  \***************************************/
/*! exports provided: ResumePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePage", function() { return ResumePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ResumePage = /** @class */ (function () {
    function ResumePage(navCtrl, statusBar, common, router, route, service, formBuilder) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.common = common;
        this.router = router;
        this.route = route;
        this.service = service;
        this.formBuilder = formBuilder;
        this.User_details = '';
        this.uploadFile = null;
        this.fileType = '';
        this.fileName = '';
        this.fileImage = '';
        this.OtherUserDetail = null;
        this.User_details = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_6__["Constants"].USER_DETAILS));
        this.resume_fb();
    }
    ResumePage.prototype.ngOnInit = function () {
    };
    ResumePage.prototype.fileUpload = function (event) {
        this.uploadFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
        this.fileType = event.target.files[0].type;
        if (this.fileType == 'application/pdf') {
            this.fileImage = '../../assets/img/pdf.png';
        }
        else if (this.fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || this.fileType == 'application/msword') {
            this.fileImage = '../../assets/img/docx.png';
        }
        else {
            this.fileImage = '../../assets/img/sample.png';
        }
    };
    ResumePage.prototype.resume_fb = function () {
        this.resume_form = this.formBuilder.group({
            firstname: [this.User_details.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastname: [this.User_details.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [this.User_details.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            phonenumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qualification: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            experience: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            myfile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ;
    ResumePage.prototype.submit = function () {
        var _this = this;
        for (var v in this.resume_form.controls) {
            this.resume_form.controls[v].markAsTouched();
        }
        if (this.resume_form.valid) {
            this.common.presentLoading();
            var formData = new FormData();
            if (this.OtherUserDetail) {
                formData.append('userid', this.OtherUserDetail.id);
            }
            else {
                formData.append('userid', this.User_details.id);
            }
            formData.append('firstname', this.resume_form.value.firstname);
            formData.append('lastname', this.resume_form.value.lastname);
            formData.append('email', this.resume_form.value.email);
            formData.append('mobileno', this.resume_form.value.phonenumber);
            formData.append('qualification', this.resume_form.value.qualification);
            formData.append('work_experiance', this.resume_form.value.experience);
            formData.append('file', this.uploadFile);
            formData.append('extension', this.fileType);
            this.service.UploadUserResume(formData).subscribe(function (val) {
                console.log('val:', val);
                if (_this.common.isLoading) {
                    _this.common.dismissLoading();
                }
                if (val.status) {
                    var navigationExtras = {
                        queryParams: {
                            resume: JSON.stringify(val.data)
                        }
                    };
                    _this.router.navigate(['/preview'], navigationExtras);
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
    ResumePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
        this.route.queryParams.subscribe(function (params) {
            if (params && params.userDetail) {
                _this.OtherUserDetail = JSON.parse(params.userDetail);
            }
        });
    };
    ResumePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ResumePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.page.html */ "./src/app/resume/resume.page.html"),
            styles: [__webpack_require__(/*! ./resume.page.scss */ "./src/app/resume/resume.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ResumePage);
    return ResumePage;
}());



/***/ })

}]);
//# sourceMappingURL=resume-resume-module.js.map