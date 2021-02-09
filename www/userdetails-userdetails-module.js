(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userdetails-userdetails-module"],{

/***/ "./src/app/userdetails/userdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userdetails/userdetails.module.ts ***!
  \***************************************************/
/*! exports provided: UserdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsPageModule", function() { return UserdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userdetails.page */ "./src/app/userdetails/userdetails.page.ts");







var routes = [
    {
        path: '',
        component: _userdetails_page__WEBPACK_IMPORTED_MODULE_6__["UserdetailsPage"]
    }
];
var UserdetailsPageModule = /** @class */ (function () {
    function UserdetailsPageModule() {
    }
    UserdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_userdetails_page__WEBPACK_IMPORTED_MODULE_6__["UserdetailsPage"]]
        })
    ], UserdetailsPageModule);
    return UserdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/userdetails/userdetails.page.html":
/*!***************************************************!*\
  !*** ./src/app/userdetails/userdetails.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"UserDetail\">\r\n      {{UserDetail.firstname | titlecase}} {{UserDetail.lastname | titlecase}}\r\n    </ion-title>\r\n    <ion-buttons *ngIf=\"userResumes.length > 0\" slot=\"end\" (click)=\"uploadResume()\">\r\n      <ion-button>\r\n        <ion-icon name=\"add\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\r\n    <div *ngIf=\"userResumes.length > 0\">\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let resume of userResumes\" lines=\"full\" mode=\"md\" (click)=\"previewResume(resume)\">\r\n          <ion-label>\r\n            <h2>{{resume.firstname | titlecase}} {{resume.lastname | titlecase}}</h2>\r\n            <p>{{resume.email}}</p>\r\n          </ion-label>\r\n          <ion-icon name=\"arrow-dropright\" mode=\"ios\" color=\"dark\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    <div *ngIf=\"userResumes.length == 0\" class=\"middle\">\r\n      <ion-button expand=\"full\" color=\"dark\" (click)=\"uploadResume()\" class=\"upload-resume\">UPLOAD RESUME</ion-button>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-template #elseTemplate>\r\n    <ion-spinner name=\"crescent\"></ion-spinner>\r\n  </ng-template>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/userdetails/userdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/userdetails/userdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  margin: 0 auto;\n  display: block;\n  top: 40%; }\n\n.upload-resume {\n  width: 100%;\n  padding: 0px 25% 0px 25%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXHVzZXJkZXRhaWxzXFx1c2VyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJkZXRhaWxzL3VzZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogNDAlO1xyXG59XHJcbi51cGxvYWQtcmVzdW1le1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIHBhZGRpbmc6IDBweCAyNSUgMHB4IDI1JTsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/userdetails/userdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/userdetails/userdetails.page.ts ***!
  \*************************************************/
/*! exports provided: UserdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsPage", function() { return UserdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserdetailsPage = /** @class */ (function () {
    function UserdetailsPage(navCtrl, common, service, route, router, statusBar) {
        this.navCtrl = navCtrl;
        this.common = common;
        this.service = service;
        this.route = route;
        this.router = router;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.UserDetail = null;
        this.userResumes = [];
    }
    UserdetailsPage.prototype.ngOnInit = function () {
    };
    UserdetailsPage.prototype.previewResume = function (resumes) {
        var navigationExtras = {
            queryParams: {
                resume: JSON.stringify(resumes)
            }
        };
        this.router.navigate(['/preview'], navigationExtras);
    };
    UserdetailsPage.prototype.uploadResume = function () {
        var navigationExtras = {
            queryParams: {
                userDetail: JSON.stringify(this.UserDetail)
            }
        };
        this.router.navigate(['/resume'], navigationExtras);
    };
    UserdetailsPage.prototype.getUserDetails = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.userDetail) {
                _this.UserDetail = JSON.parse(params.userDetail);
            }
        });
        var body = {
            "userid": this.UserDetail.id
        };
        this.service.getUserDetails(body).subscribe(function (val) {
            console.log('val:', val);
            _this.isLoaded = true;
            if (val.status) {
                _this.userResumes = val.user_info;
            }
            else {
                //this.common.presentToastWithOptions(val.message);
            }
        }, function (err) {
            _this.isLoaded = false;
            if (_this.common.isLoading) {
                _this.common.dismissLoading();
            }
            _this.common.presentToastWithOptions('Server Problem, Please try again.');
            console.log('Upload Err:', err);
        });
    };
    UserdetailsPage.prototype.ionViewWillEnter = function () {
        this.getUserDetails();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    UserdetailsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    UserdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.page.html */ "./src/app/userdetails/userdetails.page.html"),
            styles: [__webpack_require__(/*! ./userdetails.page.scss */ "./src/app/userdetails/userdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], UserdetailsPage);
    return UserdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=userdetails-userdetails-module.js.map