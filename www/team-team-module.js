(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/team/team.page.ts");







var routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]
    }
];
var TeamPageModule = /** @class */ (function () {
    function TeamPageModule() {
    }
    TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
        })
    ], TeamPageModule);
    return TeamPageModule;
}());



/***/ }),

/***/ "./src/app/team/team.page.html":
/*!*************************************!*\
  !*** ./src/app/team/team.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Team\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ng-container *ngIf=\"isLoaded; else elseTemplate\">\r\n  <ion-slides pager=\"true\" [options]=\"sliderOptions\">\r\n    <ion-slide *ngFor=\"let user of Team\">\r\n        <ion-card>\r\n            <img *ngIf=\"user.user_image\" [src]=\"profileURL + user.user_image\"/>\r\n            <img *ngIf=\"!user.user_image\" src=\"../../assets/img/no-img.png\"/>\r\n            <ion-label class=\"username\">{{user.team_name}}</ion-label>\r\n            <ion-label class=\"skill-name\">{{user.skill_name}}</ion-label>\r\n          </ion-card>\r\n    </ion-slide>  \r\n  </ion-slides>\r\n</ng-container>\r\n<ng-template #elseTemplate>\r\n  <ion-spinner name=\"crescent\"></ion-spinner>\r\n</ng-template>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/team/team.page.scss":
/*!*************************************!*\
  !*** ./src/app/team/team.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #f1f1f1; }\n  ion-content ion-slides {\n    top: 50%;\n    transform: translateY(-50%); }\n  ion-content ion-slides ion-slide {\n      padding-bottom: 20px; }\n  ion-content ion-slides ion-slide ion-card {\n        background: #fff;\n        margin: 10px; }\n  ion-content ion-slides ion-slide ion-card img {\n          padding: 20px;\n          height: 250px;\n          width: 250px;\n          -o-object-fit: cover;\n             object-fit: cover; }\n  ion-content ion-slides ion-slide ion-card .username {\n          display: block;\n          text-align: center;\n          font-weight: bold;\n          font-size: 20px;\n          padding: 15px; }\n  ion-content ion-slides ion-slide ion-card .skill-name {\n          display: block;\n          text-align: center;\n          font-size: 18px;\n          padding-bottom: 25px; }\n  ion-content ion-spinner {\n    margin: 0 auto;\n    display: block;\n    top: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9DOlxcaW9uaWMgcHJvamVjdFxcd2lraS9zcmNcXGFwcFxcdGVhbVxcdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNBO0VBQ0UscUJBQWEsRUFBQTtFQURmO0lBSUksUUFBUTtJQUNSLDJCQUEyQixFQUFBO0VBTC9CO01BUU0sb0JBQW9CLEVBQUE7RUFSMUI7UUFXUSxnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0VBWnBCO1VBZVUsYUFBYTtVQUNiLGFBQWE7VUFDYixZQUFZO1VBQ1osb0JBQWlCO2FBQWpCLGlCQUFpQixFQUFBO0VBbEIzQjtVQXNCWSxjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsYUFBYSxFQUFBO0VBMUJ6QjtVQThCWSxjQUFjO1VBQ2Qsa0JBQWtCO1VBQ2xCLGVBQWU7VUFDZixvQkFBb0IsRUFBQTtFQWpDaEM7SUF1Q0ksY0FBYztJQUNkLGNBQWM7SUFDZCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmdyaWR7XHJcbi8vICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4vLyAgICAgLmJveC1jYXJke1xyXG4vLyAgICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4ICM1ZDVlNWU7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuLy8gICAgICAgICBtYXJnaW46IDBweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbi8vICAgICAgIH1cclxuICBcclxuLy8gICAgIC5wcm9kdWN0LXBpY3tcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuLy8gICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCAjQ0NDOyBcclxuLy8gICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgICAgIC50aXRsZXtcclxuLy8gICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuLy8gICAgICAgICAgIGNvbG9yOiAjMDAwOyBcclxuLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgICAgfVxyXG4gIFxyXG4vLyAgICAgICAgIC5jYXQtdGl0bGV7XHJcbi8vICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxyXG4vLyAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgIGlvbi1zbGlkZXtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudXNlcm5hbWV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbGwtbmFtZXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/team/team.page.ts":
/*!***********************************!*\
  !*** ./src/app/team/team.page.ts ***!
  \***********************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");







var TeamPage = /** @class */ (function () {
    function TeamPage(config, navCtrl, service, common, statusBar) {
        var _this = this;
        this.config = config;
        this.navCtrl = navCtrl;
        this.service = service;
        this.common = common;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.Team = null;
        this.profileURL = this.config.teamURL;
        this.sliderOptions = {
            zoom: false,
            slidesPerView: 1.2,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.service.getTeamMembers().subscribe(function (val) {
            _this.isLoaded = true;
            if (val.status) {
                _this.Team = val.team_data;
            }
            else {
                _this.common.presentToastWithOptions(val.message);
            }
        }, function (err) {
            _this.isLoaded = false;
            _this.common.presentToastWithOptions('Server Problem, Please try again.');
            console.log('Upload Err:', err);
        });
    }
    TeamPage.prototype.ngOnInit = function () {
    };
    TeamPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    TeamPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.page.html */ "./src/app/team/team.page.html"),
            styles: [__webpack_require__(/*! ./team.page.scss */ "./src/app/team/team.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], TeamPage);
    return TeamPage;
}());



/***/ })

}]);
//# sourceMappingURL=team-team-module.js.map