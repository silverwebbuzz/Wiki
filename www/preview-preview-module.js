(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preview-preview-module"],{

/***/ "./src/app/preview/preview.module.ts":
/*!*******************************************!*\
  !*** ./src/app/preview/preview.module.ts ***!
  \*******************************************/
/*! exports provided: PreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function() { return PreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview.page */ "./src/app/preview/preview.page.ts");







var routes = [
    {
        path: '',
        component: _preview_page__WEBPACK_IMPORTED_MODULE_6__["PreviewPage"]
    }
];
var PreviewPageModule = /** @class */ (function () {
    function PreviewPageModule() {
    }
    PreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preview_page__WEBPACK_IMPORTED_MODULE_6__["PreviewPage"]]
        })
    ], PreviewPageModule);
    return PreviewPageModule;
}());



/***/ }),

/***/ "./src/app/preview/preview.page.html":
/*!*******************************************!*\
  !*** ./src/app/preview/preview.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" mode=\"ios\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Preview\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">First Name :</ion-col>\r\n    <ion-col size=\"6\">{{data.firstname | titlecase}}</ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">Last Name :</ion-col>\r\n    <ion-col size=\"6\">{{data.lastname | titlecase}}</ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">Email :</ion-col>\r\n    <ion-col size=\"6\">{{data.email}}</ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">Mobile Number :</ion-col>\r\n    <ion-col size=\"6\">{{data.mobileno}}</ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">Education Qualification :</ion-col>\r\n    <ion-col size=\"6\">{{data.qualification}}</ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"head\">Work Experience :</ion-col>\r\n    <ion-col size=\"6\">{{data.work_experiance}}</ion-col>\r\n  </ion-row>\r\n\r\n  <div class=\"format-div\" (click)=\"OpenDocuments()\">\r\n      <img [src]=\"fileImage\" class=\"format-img\"/>\r\n      <ion-label class=\"format-label\">Click to preview</ion-label>\r\n  </div>\r\n  \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/preview/preview.page.scss":
/*!*******************************************!*\
  !*** ./src/app/preview/preview.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px; }\n\n.head {\n  font-weight: bold; }\n\n.format-div {\n  border: 1px dotted #383a3e;\n  margin: 16px 8px 0px 8px; }\n\n.format-div .format-img {\n    height: 100px;\n    width: 100px;\n    display: block;\n    padding: 10px;\n    margin: auto; }\n\n.format-div .format-label {\n    display: block;\n    text-align: center;\n    padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9DOlxcaW9uaWMgcHJvamVjdFxcd2lraS9zcmNcXGFwcFxccHJldmlld1xccHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBYztFQUNkLHFCQUFpQjtFQUNqQixvQkFBZ0I7RUFDaEIsa0JBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwwQkFBMEI7RUFDMUIsd0JBQXdCLEVBQUE7O0FBRjVCO0lBTVEsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVksRUFBQTs7QUFWcEI7SUFjUSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6IDhweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG59XHJcblxyXG4uaGVhZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybWF0LWRpdntcclxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjMzgzYTNlOyBcclxuICAgIG1hcmdpbjogMTZweCA4cHggMHB4IDhweDtcclxuICAgIC8vYmFja2dyb3VuZDogI2YxZjFmMTtcclxuXHJcbiAgICAuZm9ybWF0LWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcclxuICAgICAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1hdC1sYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/preview/preview.page.ts":
/*!*****************************************!*\
  !*** ./src/app/preview/preview.page.ts ***!
  \*****************************************/
/*! exports provided: PreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPage", function() { return PreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");











var PreviewPage = /** @class */ (function () {
    function PreviewPage(config, navCtrl, route, document, fileOpener, common, transfer, file, router, statusBar) {
        var _this = this;
        this.config = config;
        this.navCtrl = navCtrl;
        this.route = route;
        this.document = document;
        this.fileOpener = fileOpener;
        this.common = common;
        this.transfer = transfer;
        this.file = file;
        this.router = router;
        this.statusBar = statusBar;
        this.data = [];
        this.fileImage = '';
        this.documentURL = this.config.documentURL;
        this.route.queryParams.subscribe(function (params) {
            if (params && params.resume) {
                _this.data = JSON.parse(params.resume);
            }
            if (_this.data.file_type == 'application/pdf') {
                _this.fileImage = '../../assets/img/pdf.png';
            }
            else if (_this.data.file_type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || _this.data.file_type == 'application/msword') {
                _this.fileImage = '../../assets/img/docx.png';
            }
            else {
                _this.fileImage = '../../assets/img/sample.png';
            }
            console.log(_this.data);
        });
    }
    PreviewPage.prototype.ngOnInit = function () {
    };
    PreviewPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f1f1f1');
    };
    PreviewPage.prototype.OpenDocuments = function () {
        var _this = this;
        // const options: DocumentViewerOptions = {
        //   title: 'My File'
        // }
        var url = this.documentURL + this.data.resume;
        var fileType = this.data.file_type;
        var fileName = this.data.resume.split('/');
        this.fileTransfer = this.transfer.create();
        this.fileTransfer
            .download(url, this.file.dataDirectory + fileName[1])
            .then(function (entry) {
            console.log("download complete: " + entry.toURL());
            _this.fileOpener
                .open(entry.toURL(), fileType)
                .then(function () { return console.log("File is opened"); })
                .catch(function (e) { console.log("Error opening file", e); _this.common.presentToastWithOptions('Viewer Not found.'); });
        });
        // this.document.viewDocument(url, fileType, options);
    };
    PreviewPage.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    PreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.page.html */ "./src/app/preview/preview.page.html"),
            styles: [__webpack_require__(/*! ./preview.page.scss */ "./src/app/preview/preview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"]])
    ], PreviewPage);
    return PreviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=preview-preview-module.js.map