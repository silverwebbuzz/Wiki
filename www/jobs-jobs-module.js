(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-jobs-module"],{

/***/ "./src/app/jobs/jobs.module.ts":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.module.ts ***!
  \*************************************/
/*! exports provided: JobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs.page */ "./src/app/jobs/jobs.page.ts");







var routes = [
    {
        path: '',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]
    }
];
var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]]
        })
    ], JobsPageModule);
    return JobsPageModule;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.page.html":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button fill=\"clear\" (click)=\"back()\">\n          <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n        Jobs\n      </ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button fill=\"clear\">\n            <ion-icon name=\"search\" mode=\"md\" color=\"dark\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"page_jobs\">\n\n  <ion-item lines=\"none\" class=\"item_jobs\">\n    <ion-row class=\"row_jobs\">\n      <ion-col size=\"3\" class=\"col_img\">\n        <img src=\"../../assets/img/sc2.jpg\" class=\"img_logo\"/>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_lbl\">\n        <ion-label class=\"lbl_title\">Jobs Title</ion-label>\n        <ion-label class=\"lbl_company\">Company Name</ion-label>\n        <ion-label class=\"lbl_address\">Address</ion-label>\n        <ion-label class=\"lbl_time\">Posted Time</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/jobs/jobs.page.scss":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page_jobs {\n  --background: #f1f1f1; }\n  .page_jobs .item_jobs {\n    --padding-start: 0px;\n    margin: 5px; }\n  .page_jobs .item_jobs .row_jobs .col_img .img_logo {\n      height: 65px;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .page_jobs .item_jobs .row_jobs .col_lbl .lbl_title {\n      font-size: 18px;\n      font-weight: bold; }\n  .page_jobs .item_jobs .row_jobs .col_lbl .lbl_company {\n      font-size: 14px; }\n  .page_jobs .item_jobs .row_jobs .col_lbl .lbl_address {\n      font-size: 14px;\n      color: #666; }\n  .page_jobs .item_jobs .row_jobs .col_lbl .lbl_time {\n      font-size: 14px;\n      color: #666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9DOlxcaW9uaWMgcHJvamVjdFxcd2lraS9zcmNcXGFwcFxcam9ic1xcam9icy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBO0VBRGpCO0lBSVEsb0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQUxuQjtNQVVvQixZQUFZO01BQ1osV0FBVztNQUNYLG9CQUFpQjtTQUFqQixpQkFBaUIsRUFBQTtFQVpyQztNQWlCb0IsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBbEJyQztNQXFCb0IsZUFBZSxFQUFBO0VBckJuQztNQXdCb0IsZUFBZTtNQUNmLFdBQVcsRUFBQTtFQXpCL0I7TUE0Qm9CLGVBQWU7TUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qb2JzL2pvYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Vfam9ic3tcclxuICAgIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAuaXRlbV9qb2Jze1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4OyBcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgLnJvd19qb2Jze1xyXG4gICAgICAgICAgICAuY29sX2ltZ3tcclxuICAgICAgICAgICAgICAgIC5pbWdfbG9nb3tcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbF9sYmx7XHJcbiAgICAgICAgICAgICAgICAubGJsX3RpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sYmxfY29tcGFueXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGJsX2FkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxibF90aW1le1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/jobs/jobs.page.ts":
/*!***********************************!*\
  !*** ./src/app/jobs/jobs.page.ts ***!
  \***********************************/
/*! exports provided: JobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPage", function() { return JobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    JobsPage.prototype.ngOnInit = function () {
    };
    JobsPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    JobsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.page.html */ "./src/app/jobs/jobs.page.html"),
            styles: [__webpack_require__(/*! ./jobs.page.scss */ "./src/app/jobs/jobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], JobsPage);
    return JobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobs-jobs-module.js.map