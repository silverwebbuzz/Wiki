(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news.page */ "./src/app/news/news.page.ts");







var routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]
    }
];
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_news_page__WEBPACK_IMPORTED_MODULE_6__["NewsPage"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ }),

/***/ "./src/app/news/news.page.html":
/*!*************************************!*\
  !*** ./src/app/news/news.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button fill=\"clear\" (click)=\"back()\">\r\n            <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n    <ion-title>news</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ng-container *ngIf=\"isLoaded; else elseTemplate\">\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshNews($event)\">\r\n          <ion-refresher-content pulling-icon=\"arrow-dropdown\" pulling-text=\"Pull to refresh\" refreshing-spinner=\"circles\"\r\n            refreshing-text=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher>\r\n        <ion-card *ngFor=\"let news of allNews\" class=\"card_news\" (click)=\"gotoNewDetails(news)\" routerLink=\"/newsdetails\">\r\n          <img [src]=\"getNewsImg(news)\" class=\"img_news\">\r\n          <ion-card-header class=\"card_header\">\r\n            <ion-card-subtitle class=\"card_subtitle\" role=\"heading\" aria-level=\"3\">By {{news.add_by_fname}}\r\n              {{news.add_by_lname}}, {{news.add_date | date}}</ion-card-subtitle>\r\n            <ion-card-title class=\"card_title\" role=\"heading\" aria-level=\"2\">{{news.title | titlecase}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"card_content\" [innerHTML]=\"news.sort_description\"></ion-card-content>\r\n        </ion-card>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <ion-spinner name=\"crescent\"></ion-spinner>\r\n      </ng-template>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/news/news.page.scss":
/*!*************************************!*\
  !*** ./src/app/news/news.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  margin: 0 auto;\n  display: block;\n  top: 40%; }\n\n.card_news {\n  margin: 5px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px 0px;\n  background: #fff; }\n\n.card_news .img_news {\n    height: 200px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    padding: 0px; }\n\n.card_news .card_header {\n    padding: 10px 10px 5px 10px; }\n\n.card_news .card_header .card_subtitle {\n      color: #666; }\n\n.card_news .card_header .card_title {\n      font-size: 20px; }\n\n.card_news .card_content {\n    padding: 0px 10px 10px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9DOlxcaW9uaWMgcHJvamVjdFxcd2lraS9zcmNcXGFwcFxcbmV3c1xcbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLFFBQVEsRUFBQTs7QUFHWjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBOztBQUpwQjtJQU9RLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7O0FBVnBCO0lBYVEsMkJBQTJCLEVBQUE7O0FBYm5DO01BZ0JZLFdBQVcsRUFBQTs7QUFoQnZCO01BbUJZLGVBQWUsRUFBQTs7QUFuQjNCO0lBdUJRLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogNDAlO1xyXG59XHJcblxyXG4uY2FyZF9uZXdze1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIC5pbWdfbmV3c3tcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkX2hlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XHJcblxyXG4gICAgICAgIC5jYXJkX3N1YnRpdGxle1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZF9jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/news.page.ts":
/*!***********************************!*\
  !*** ./src/app/news/news.page.ts ***!
  \***********************************/
/*! exports provided: NewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPage", function() { return NewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _interface_constants_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/constants.models */ "./src/app/interface/constants.models.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











var NewsPage = /** @class */ (function () {
    function NewsPage(config, service, common, auth, router, navCtrl, sanitizer, statusBar) {
        this.config = config;
        this.service = service;
        this.common = common;
        this.auth = auth;
        this.router = router;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.statusBar = statusBar;
        this.isLoaded = false;
        this.allNews = [];
    }
    NewsPage.prototype.ngOnInit = function () {
    };
    NewsPage.prototype.getNews = function (event) {
        var _this = this;
        this.service.getNews().subscribe(function (val) {
            _this.isLoaded = true;
            if (val.status) {
                _this.allNews = val.news_list;
                window.localStorage.setItem(_interface_constants_models__WEBPACK_IMPORTED_MODULE_8__["Constants"].ALL_NEWS, JSON.stringify(_this.allNews));
            }
            else {
                //this.common.presentToastWithOptions(val.message);
            }
            if (event) {
                event.target.complete();
            }
        }, function (err) {
            _this.isLoaded = false;
            if (event) {
                event.target.complete();
            }
            if (_this.common.isLoading) {
                _this.common.dismissLoading();
            }
            _this.common.presentToastWithOptions('Server Problem, Please try again.');
            console.log('Upload Err:', err);
        });
    };
    NewsPage.prototype.ionViewWillEnter = function () {
        this.getNews();
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    NewsPage.prototype.gotoNewDetails = function (news) {
        var navigationExtras = {
            queryParams: {
                news: JSON.stringify(news)
            }
        };
        this.router.navigate(['/newsdetails'], navigationExtras);
    };
    NewsPage.prototype.getNewsImg = function (news) {
        //console.log('news:',news);
        var img_url;
        if (news.image) {
            var img = news.image;
            var imgArray = img.split(',');
            img_url = this.config.newsURL + imgArray[0];
        }
        else {
            img_url = '../../assets/img/no-img.png';
        }
        var sanitizedContent = this.sanitizer.bypassSecurityTrustUrl(img_url);
        return sanitizedContent;
    };
    NewsPage.prototype.refreshNews = function (event) {
        this.getNews(event);
    };
    NewsPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    NewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.page.html */ "./src/app/news/news.page.html"),
            styles: [__webpack_require__(/*! ./news.page.scss */ "./src/app/news/news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_9__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]])
    ], NewsPage);
    return NewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=news-news-module.js.map