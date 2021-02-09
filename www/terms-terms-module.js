(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-terms-module"],{

/***/ "./src/app/terms/terms.module.ts":
/*!***************************************!*\
  !*** ./src/app/terms/terms.module.ts ***!
  \***************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms.page */ "./src/app/terms/terms.page.ts");







var routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]
    }
];
var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
        })
    ], TermsPageModule);
    return TermsPageModule;
}());



/***/ }),

/***/ "./src/app/terms/terms.page.html":
/*!***************************************!*\
  !*** ./src/app/terms/terms.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Terms & Condition\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"main-page\">\r\n\r\n    <div class=\"grey-background\"></div>\r\n  \r\n    <div class=\"container\">\r\n  \r\n    <ion-card class=\"box\">\r\n\r\n        <ion-label color=\"dark\" [innerHTML]=\"TermPage.content\" class=\"header-label\">\r\n            \r\n        </ion-label>\r\n\r\n    </ion-card>\r\n\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/terms/terms.page.scss":
/*!***************************************!*\
  !*** ./src/app/terms/terms.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  background: #fff;\n  margin: 0px 16px 16px 16px;\n  height: calc(100vh - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMvQzpcXGlvbmljIHByb2plY3RcXHdpa2kvc3JjXFxhcHBcXHRlcm1zXFx0ZXJtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVybXMvdGVybXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDBweCAxNnB4IDE2cHggMTZweDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/terms/terms.page.ts":
/*!*************************************!*\
  !*** ./src/app/terms/terms.page.ts ***!
  \*************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.TermPage = null;
        var aboutUs = JSON.parse(window.localStorage.getItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_2__["Constants"].ALL_PAGES));
        this.TermPage = aboutUs.find(function (x) {
            x.page_id == 1;
            return x;
        });
    }
    TermsPage.prototype.ngOnInit = function () {
    };
    TermsPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    TermsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TermsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.page.html */ "./src/app/terms/terms.page.html"),
            styles: [__webpack_require__(/*! ./terms.page.scss */ "./src/app/terms/terms.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], TermsPage);
    return TermsPage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-terms-module.js.map