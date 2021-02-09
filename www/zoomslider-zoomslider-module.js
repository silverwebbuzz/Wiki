(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["zoomslider-zoomslider-module"],{

/***/ "./src/app/zoomslider/zoomslider.module.ts":
/*!*************************************************!*\
  !*** ./src/app/zoomslider/zoomslider.module.ts ***!
  \*************************************************/
/*! exports provided: ZoomsliderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomsliderPageModule", function() { return ZoomsliderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _zoomslider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zoomslider.page */ "./src/app/zoomslider/zoomslider.page.ts");







var routes = [
    {
        path: '',
        component: _zoomslider_page__WEBPACK_IMPORTED_MODULE_6__["ZoomsliderPage"]
    }
];
var ZoomsliderPageModule = /** @class */ (function () {
    function ZoomsliderPageModule() {
    }
    ZoomsliderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_zoomslider_page__WEBPACK_IMPORTED_MODULE_6__["ZoomsliderPage"]]
        })
    ], ZoomsliderPageModule);
    return ZoomsliderPageModule;
}());



/***/ }),

/***/ "./src/app/zoomslider/zoomslider.page.html":
/*!*************************************************!*\
  !*** ./src/app/zoomslider/zoomslider.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"close\" mode=\"md\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n        {{current_slider_index}}/{{allImgs.length}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-slides *ngIf=\"allImgs\" pager=\"true\" loop=\"true\" #Slides_banner (ionSlideDidChange)=\"SlideDidChange()\" [options]=\"sliderOptions\">\r\n      <ion-slide *ngFor=\"let img of allImgs\">\r\n        <img [src]=\"ImgURL + img\" class=\"slide_pic\">\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/zoomslider/zoomslider.page.scss":
/*!*************************************************!*\
  !*** ./src/app/zoomslider/zoomslider.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide_pic {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%; }\n\nion-slides {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvem9vbXNsaWRlci9DOlxcaW9uaWMgcHJvamVjdFxcd2lraS9zcmNcXGFwcFxcem9vbXNsaWRlclxcem9vbXNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3pvb21zbGlkZXIvem9vbXNsaWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVfcGlje1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5pb24tc2xpZGVze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/zoomslider/zoomslider.page.ts":
/*!***********************************************!*\
  !*** ./src/app/zoomslider/zoomslider.page.ts ***!
  \***********************************************/
/*! exports provided: ZoomsliderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomsliderPage", function() { return ZoomsliderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");






var ZoomsliderPage = /** @class */ (function () {
    function ZoomsliderPage(config, navCtrl, acrouter, statusBar) {
        this.config = config;
        this.navCtrl = navCtrl;
        this.acrouter = acrouter;
        this.statusBar = statusBar;
        this.allImgs = [];
        this.ImgURL = this.config.newsURL;
        this.current_slider_index = 0;
        this.sliderOptions = {
            zoom: true,
            slidesPerView: 1,
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
    }
    ZoomsliderPage.prototype.ngOnInit = function () {
    };
    ZoomsliderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.acrouter.queryParams.subscribe(function (params) {
            if (params && params.allImgs) {
                _this.allImgs = JSON.parse(params.allImgs);
                _this.current_slider_index = 1;
            }
        });
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    ZoomsliderPage.prototype.SlideDidChange = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.current_slider_index = (index + 1);
        });
        //this.slider_thumb.slideTo(i + 1);
    };
    ZoomsliderPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides_banner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], ZoomsliderPage.prototype, "slider", void 0);
    ZoomsliderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zoomslider',
            template: __webpack_require__(/*! ./zoomslider.page.html */ "./src/app/zoomslider/zoomslider.page.html"),
            styles: [__webpack_require__(/*! ./zoomslider.page.scss */ "./src/app/zoomslider/zoomslider.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_5__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], ZoomsliderPage);
    return ZoomsliderPage;
}());



/***/ })

}]);
//# sourceMappingURL=zoomslider-zoomslider-module.js.map