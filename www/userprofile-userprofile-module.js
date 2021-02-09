(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userprofile-userprofile-module"],{

/***/ "./src/app/userprofile/userprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/*! exports provided: UserprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePageModule", function() { return UserprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile.page */ "./src/app/userprofile/userprofile.page.ts");







var routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_6__["UserprofilePage"]
    }
];
var UserprofilePageModule = /** @class */ (function () {
    function UserprofilePageModule() {
    }
    UserprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_6__["UserprofilePage"]]
        })
    ], UserprofilePageModule);
    return UserprofilePageModule;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.page.html":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      User Profile\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"page_userprofile\">\r\n\r\n  <ion-card class=\"card_header\">\r\n    <ion-card-header>\r\n      <img *ngIf=\"!userDetails.cover_image\" src=\"../../assets/img/no-img.png\" class=\"img_cover\" />\r\n      <img *ngIf=\"userDetails.cover_image\" [src]=\"coverImgURL + userDetails.cover_image\" class=\"img_cover\" />\r\n      <img *ngIf=\"!userDetails.profile_image\" src=\"../../assets/img/no-img.png\" class=\"img_profile\" />\r\n      <img *ngIf=\"userDetails.profile_image\" [src]=\"profileImgURL + userDetails.profile_image\" class=\"img_profile\" />\r\n    </ion-card-header>\r\n\r\n    <ion-button fill=\"clear\" class=\"btn_edit\" routerLink=\"/editprofile\"><ion-icon name=\"create\" mode=\"md\" color=\"dark\"></ion-icon></ion-button>\r\n\r\n    <ion-card-content>\r\n      <div class=\"lbl_header\">\r\n        <ion-label class=\"lbl_username\">{{userDetails.firstname | uppercase}} {{userDetails.lastname | uppercase}}\r\n        </ion-label>\r\n        <ion-label class=\"lbl_mobileno\">{{userDetails.mobileno}}</ion-label>\r\n        <ion-label class=\"lbl_skills\">{{userDetails.skill}}</ion-label>\r\n        <ion-label class=\"lbl_address\">{{userDetails.address | titlecase}}</ion-label>\r\n\r\n      </div>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n\r\n  <ion-card class=\"card_about\">\r\n    <ion-item lines=\"none\" class=\"lbl_heading\">\r\n      <ion-label>About</ion-label>\r\n    </ion-item>\r\n    <ion-label class=\"lbl_desc\" *ngIf=\"userDetails.about\">\r\n        {{userDetails.about}}\r\n    </ion-label>\r\n    <ion-label class=\"lbl_desc\" *ngIf=\"!userDetails.about\">\r\n        No Data Found.\r\n    </ion-label>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.page.scss":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page_userprofile {\n  --background: #f1f1f1; }\n  .page_userprofile ion-card-header {\n    padding: 0px;\n    height: 165px; }\n  .page_userprofile ion-card-content {\n    padding: 0px; }\n  .page_userprofile .card_header {\n    margin: 0px;\n    border-radius: 0px;\n    background: #fff; }\n  .page_userprofile .card_header .img_cover {\n      height: 100px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .page_userprofile .card_header .img_profile {\n      height: 100px;\n      width: 100px;\n      border: 5px solid #f1f1f1;\n      border-radius: 50px;\n      position: relative;\n      top: -48px;\n      left: 18px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .page_userprofile .card_header .btn_edit {\n      position: absolute;\n      right: 0px;\n      top: 100px; }\n  .page_userprofile .card_header .lbl_header .lbl_username {\n      display: block;\n      padding: 5px 10px 5px 10px;\n      font-size: 18px;\n      color: #000; }\n  .page_userprofile .card_header .lbl_header .lbl_skills {\n      display: block;\n      padding: 5px 10px 5px 10px;\n      font-size: 16px;\n      color: #000; }\n  .page_userprofile .card_header .lbl_header .lbl_company {\n      display: block;\n      padding: 5px 10px 5px 10px;\n      font-size: 14px;\n      color: #000; }\n  .page_userprofile .card_header .lbl_header .lbl_address {\n      display: block;\n      padding: 5px 10px 5px 10px;\n      font-size: 14px;\n      color: #000; }\n  .page_userprofile .card_header .lbl_header .lbl_mobileno {\n      display: block;\n      padding: 5px 10px 5px 10px;\n      font-size: 14px;\n      color: #000; }\n  .page_userprofile .card_about {\n    margin: 0px;\n    border-radius: 0px;\n    background: #fff;\n    padding: 0px 10px 10px 10px;\n    margin-top: 8px; }\n  .page_userprofile .card_about .lbl_heading {\n      display: block;\n      font-size: 16px;\n      padding: 0px 0px 0px 0px;\n      --padding-start: 0px; }\n  .page_userprofile .card_about .lbl_heading .btn_edit {\n        --padding-end: 0px; }\n  .page_userprofile .card_about .lbl_desc {\n      display: block;\n      font-size: 14px;\n      color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXHVzZXJwcm9maWxlXFx1c2VycHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBO0VBRGpCO0lBR1EsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUpyQjtJQU9RLFlBQVksRUFBQTtFQVBwQjtJQVVRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFaeEI7TUFlWSxhQUFhO01BQ2Isb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBO0VBaEI3QjtNQW1CWSxhQUFhO01BQ2IsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixVQUFVO01BQ1Ysb0JBQWlCO1NBQWpCLGlCQUFpQixFQUFBO0VBMUI3QjtNQTZCWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFVBQVUsRUFBQTtFQS9CdEI7TUFvQ2dCLGNBQWM7TUFDZCwwQkFBMEI7TUFDMUIsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQXZDM0I7TUEwQ2dCLGNBQWM7TUFDZCwwQkFBMEI7TUFDMUIsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQTdDM0I7TUFnRGdCLGNBQWM7TUFDZCwwQkFBMEI7TUFDMUIsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQW5EM0I7TUFzRGdCLGNBQWM7TUFDZCwwQkFBMEI7TUFDMUIsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQXpEM0I7TUE0RGdCLGNBQWM7TUFDZCwwQkFBMEI7TUFDMUIsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQS9EM0I7SUFvRVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGVBQWUsRUFBQTtFQXhFdkI7TUEyRVksY0FBYztNQUNkLGVBQWU7TUFDZix3QkFBd0I7TUFDeEIsb0JBQWdCLEVBQUE7RUE5RTVCO1FBaUZnQixrQkFBYyxFQUFBO0VBakY5QjtNQXFGWSxjQUFjO01BQ2QsZUFBZTtNQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX3VzZXJwcm9maWxle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE2NXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9oZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgIC5pbWdfY292ZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nX3Byb2ZpbGV7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IC00OHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bl9lZGl0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmxfaGVhZGVye1xyXG5cclxuICAgICAgICAgICAgLmxibF91c2VybmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGJsX3NraWxsc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGJsX2NvbXBhbnl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxibF9hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYmxfbW9iaWxlbm97XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZF9hYm91dHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgICAgICAubGJsX2hlYWRpbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblxyXG4gICAgICAgICAgICAuYnRuX2VkaXR7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibF9kZXNje1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.page.ts":
/*!*************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.ts ***!
  \*************************************************/
/*! exports provided: UserprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilePage", function() { return UserprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");






var UserprofilePage = /** @class */ (function () {
    function UserprofilePage(config, navCtrl, statusBar) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.userDetails = [];
        this.profileImgURL = this.config.profileURL;
        this.coverImgURL = this.config.coverURL;
    }
    UserprofilePage.prototype.ngOnInit = function () {
    };
    UserprofilePage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
        this.userDetails = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_3__["Constants"].USER_DETAILS));
        console.log('user:', this.userDetails);
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    UserprofilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    UserprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.page.html */ "./src/app/userprofile/userprofile.page.html"),
            styles: [__webpack_require__(/*! ./userprofile.page.scss */ "./src/app/userprofile/userprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
    ], UserprofilePage);
    return UserprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=userprofile-userprofile-module.js.map