"use strict";
(self["webpackChunkunity_exchange"] = self["webpackChunkunity_exchange"] || []).push([["main"],{

/***/ 1960:
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG),
/* harmony export */   "STACK_VALUE": () => (/* binding */ STACK_VALUE)
/* harmony export */ });
const BASE_URL_API = 'http://130.172.1.125:4040';
const WEB_SOCKET_API = 'http://130.172.1.244:4034';
const BASE_URL_v1 = 'http://130.172.1.166:4567';
// const BASE_URL_API = ' ';
// const WEB_SOCKET_API = ' ';
// const BASE_URL_v1 = ' ';
const CONFIG = {
  userLoginURL: WEB_SOCKET_API + "/api/exchange/casino/userCasinoLogin",
  getUserBalanceURL: WEB_SOCKET_API + "/api/exchange/users/balance/getUserBalance",
  asianCasinoPlacebetURL: WEB_SOCKET_API + "/api/exchange/users/casino/placebet",
  getCasinoEventOdds: WEB_SOCKET_API + "/api/exchange/users/pl/getCasinoPl",
  userGetStackURL: WEB_SOCKET_API + "/api/exchange/users/getUserBetStake",
  getRulesOfMarketURL: WEB_SOCKET_API + '/api/exchange/users/rules/casinoEventRules',
  videoStreamURL: WEB_SOCKET_API + '/api/exchange/users/streaming/casinoEventStreaming',
  casinoMatchedBetList: WEB_SOCKET_API + '/api/exchange/users/betlist/casinoMatchedBetList',
  getCasinoTheme: WEB_SOCKET_API + '/api/exchange/users/casino/casinoThemeConfig',
  casinoLobby: WEB_SOCKET_API + '/api/exchange/users/casino/casinoLobby',
  // getWhatsappNumber : BASE_URL_v1 + '/v1/exchange/users/getParentWhatsAppNo',
  // gghggfgfh
  userAuthURL: BASE_URL_v1 + "/user/login",
  getALLHomeMarketListURL: BASE_URL_v1 + "/front/all_events",
  placeLotteryBetURL: BASE_URL_v1 + '/exchange/user/lottery_placebet',
  getLotteryResultURL: BASE_URL_v1 + '/exchange/user/getlottery_result',
  getAllResultLotteryURL: BASE_URL_v1 + '/front/user/get_lotteryresult',
  getLotteryPlURL: BASE_URL_v1 + '/exchange/user/lottery_pl',
  /* DIAMOND API  START */
  // getCasinoEventOdds: BASE_URL_API +'/api/exchange/users/odds/getCasinoEventOdds',
  verifyTokenURL: BASE_URL_API + '/api/exchange/casino/userCasinoLogin',
  // getUserBalanceURL: BASE_URL_API + "/api/exchange/users/balance/getUserBalance",
  // asianCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/asian/placebet',
  eUCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/european/placebet',
  virtualCasinoPlacebetURL: BASE_URL_API + '/api/exchange/users/casino/virtual/placebet',
  // userGetStackURL: BASE_URL_API + "/api/exchange/users/getUserBetStake",
  getDealerListURL: BASE_URL_API + '/api/exchange/users/dealers/getCasinoDealers',
  // videoStreamURL: BASE_URL_API + '/api/exchange/users/streaming/getEventStreaming',
  getCasinoResultURL: BASE_URL_API + '/api/exchange/users/casino/getCasinoMarketResults',
  getResultChartDataURL: BASE_URL_API + '/api/exchange/users/casino/getBaccaratResultGraph',
  getAllMarketplURL: BASE_URL_API + '/api/exchange/users/pl/getCasinoPl',
  logoutUserURL: BASE_URL_API + '/api/exchange/casino/logOutUser',
  // getRulesOfMarketURL: BASE_URL_API + '/api/exchange/users/rules/getSportsRules',
  getSelectionPL: BASE_URL_API + '/api/exchange/users/pl/getSelectionCasinoPl',
  // casinoMatchedBetList: BASE_URL_API+ '/api/exchange/users/betlist/casinoMatchedBetList',
  userUpdateStackValueURL: BASE_URL_API + "/api/exchange/users/updateUserBetStake"
  // getCasinoTheme: BASE_URL_API + "/api/exchange/users/casino/getCasinoThemeConfig",
  /* DIAMOND API  END */
};

const STACK_VALUE = [{
  stakeName: '1000',
  stakeAmount: '1000'
}, {
  stakeName: '5000',
  stakeAmount: '5000'
}, {
  stakeName: '10000',
  stakeAmount: '10000'
}, {
  stakeName: '25000',
  stakeAmount: '25000'
}, {
  stakeName: '50000',
  stakeAmount: '50000'
}, {
  stakeName: '100000',
  stakeAmount: '100000'
}, {
  stakeName: '200000',
  stakeAmount: '200000'
}, {
  stakeName: '500000',
  stakeAmount: '500000'
}];

/***/ }),

/***/ 3247:
/*!*************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class DashboardComponent {
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 0,
  vars: 0,
  template: function DashboardComponent_Template(rf, ctx) {},
  styles: [".flex-container[_ngcontent-%COMP%]\n{\n    display: flex;\n}\n.flex-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    width:100px;\n    height: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXgtY29udGFpbmVyIHNwYW57XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4284:
/*!*****************************************************!*\
  !*** ./src/app/Partials/footer/footer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 22,
  vars: 0,
  consts: [[1, "mobile-footer-menu"], ["routerlinkactive", "active", "href", "#/home", 1, "ui-link", "active"], ["src", "assets/footer-logos/home.svg", 1, "icon-home"], ["routerlinkactive", "active", "href", "#/inplay", 1, "ui-link"], ["src", "assets/footer-logos/timer.svg", 1, "icon-inplay"], [1, "main-nav"], ["routerlinkactive", "active", "href", "#/sports", 1, "ui-link"], ["src", "assets/footer-logos/trophy.svg", 1, "icon-sports"], ["routerlinkactive", "active", "href", "#/multimarket", 1, "ui-link"], ["src", "assets/footer-logos/paper-push-pin.svg", 1, "icon-pin"], ["routerlinkactive", "active", 1, "ui-link"], ["src", "assets/footer-logos/user.svg", 1, "icon-account"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul")(2, "li")(3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li")(7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In-Play ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sports ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Multi Markets ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: [".support-wrap[_ngcontent-%COMP%]{\n    display: block;\n    color: rgba(0,0,0,.6);\n    font-size: 13px;\n    display: flex;\n}\n\n.support-wrap[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{\n    margin-right: 10px;\n    margin-bottom: 6px;\n    display: inline-block;\n}\ndl[_ngcontent-%COMP%] {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n}  \n.mobile-footer-menu[_ngcontent-%COMP%]\n{\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-image: linear-gradient(-180deg,#243a48 20%,#172732 91%);\n    color: #fff;\n    z-index: 9999;\n  \n}\n\n.mobile-footer-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 20vw;\n    height: 13.33333vw;\n    box-sizing: border-box;\n    color: #fff!important;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 3.2vw;\n    text-align: center;\n    line-height: 1.1;\n    padding: 1.86667vw 2.66667vw 0;\n    display: block;\n}\n\na[_ngcontent-%COMP%]{\n    \n    text-decoration: none;\n    background-color: transparent;\n}\n\n.mobile-footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n}\n.mobile-footer-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 7.33333vw;\n    height: 7.33333vw;\n    margin: 0 auto 0.53333vw;\n    display: block;\n}\n\n.mobile-footer-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    padding: 0;\n    margin-bottom: 0;\n}\n.mobile-footer-menu[_ngcontent-%COMP%]   .icon-sports[_ngcontent-%COMP%] {\n    width: 8.53333vw;\n    height: 6.93333vw;\n    margin: -2.13333vw auto 1.06667vw;\n}\n\n \n.mobile-footer-menu[_ngcontent-%COMP%]   .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    top: -4.26667vw;\n    width: 100%;\n    left: 0;\n    height: 4.53333vw;\n    background-image: url('download.svg');\n    \n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    pointer-events: none;\n    z-index: -1;\n    display: block;\n}\n\n.main-nav[_ngcontent-%COMP%]{\n    position: relative;;\n}\n\n@media only screen and (min-width: 992px) {\n    .mobile-footer-menu[_ngcontent-%COMP%] {\n      display: none;\n    }\n  \n   \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixxQ0FBa0U7SUFDbEUsOGFBQThhO0lBQzlhLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7TUFDRSxhQUFhO0lBQ2Y7OztFQUdGIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3VwcG9ydC13cmFwe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1cHBvcnQtd3JhcCBkbHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmRsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59ICBcbi5tb2JpbGUtZm9vdGVyLW1lbnVcbntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCMyNDNhNDggMjAlLCMxNzI3MzIgOTElKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICBcbn1cblxuLm1vYmlsZS1mb290ZXItbWVudSBhIHtcbiAgICB3aWR0aDogMjB2dztcbiAgICBoZWlnaHQ6IDEzLjMzMzMzdnc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMy4ydnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgcGFkZGluZzogMS44NjY2N3Z3IDIuNjY2Njd2dyAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5he1xuICAgIFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1vYmlsZS1mb290ZXItbWVudSB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tb2JpbGUtZm9vdGVyLW1lbnUgaW1nIHtcbiAgICB3aWR0aDogNy4zMzMzM3Z3O1xuICAgIGhlaWdodDogNy4zMzMzM3Z3O1xuICAgIG1hcmdpbjogMCBhdXRvIDAuNTMzMzN2dztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vYmlsZS1mb290ZXItbWVudSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubW9iaWxlLWZvb3Rlci1tZW51IC5pY29uLXNwb3J0cyB7XG4gICAgd2lkdGg6IDguNTMzMzN2dztcbiAgICBoZWlnaHQ6IDYuOTMzMzN2dztcbiAgICBtYXJnaW46IC0yLjEzMzMzdncgYXV0byAxLjA2NjY3dnc7XG59XG5cbiBcbi5tb2JpbGUtZm9vdGVyLW1lbnUgLm1haW4tbmF2IGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNC4yNjY2N3Z3O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA0LjUzMzMzdnc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Zvb3Rlci1sb2dvcy9kb3dubG9hZC5zdmdcIik7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDxzdmcgd2lkdGg9XCI3NVwiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT1cIjUwJVwiIHkxPVwiMTkuNTYlXCIgeDI9XCI1MCVcIiB5Mj1cIjkwLjY1JVwiIGlkPVwiYVwiPjxzdG9wIHN0b3AtY29sb3I9XCIlMjMyNDNBNDhcIiBvZmZzZXQ9XCIwJVwiLz48c3RvcCBzdG9wLWNvbG9yPVwiJTIzMTcyNzMyXCIgb2Zmc2V0PVwiMTAwJVwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTc0Ljk4IDE2SDc1djUwSDBWMTZoLjAyQy43IDE1LjMzIDE2LjM2LjAyIDM3LjUuMDJ2OC04QzU4LjY0LjAyIDc0LjMgMTUuMzMgNzQuOTggMTZ6XCIgZmlsbD1cInVybCglMjNhKVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIi8+PC9zdmc+KTsgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWFpbi1uYXZ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5tb2JpbGUtZm9vdGVyLW1lbnUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxuICAgXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9857:
/*!*****************************************************!*\
  !*** ./src/app/Partials/header/header.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/backend.service */ 600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function HeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6)(2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u00A0Bets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 13)(3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15)(5, "button", 16)(6, "b", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_3_Template_b_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.isLogin = !ctx_r4.isLogin);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 19)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function HeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "span", 21)(3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 25)(8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28)(11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class HeaderComponent {
  constructor(backendService) {
    this.backendService = backendService;
    this.isLogin = false;
  }
  ngOnInit() {
    this.getuserBalance();
  }
  getuserBalance() {
    //calling backend service here in header component.ts file
    this.backendService.GetBalance().subscribe(data => {
      console.log(data);
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_0__.BackendService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 5,
  vars: 4,
  consts: [[1, "site-header"], ["class", "logo-search", 4, "ngIf"], ["class", "bet-mb", 4, "ngIf"], ["class", "header-buttons", 4, "ngIf"], [4, "ngIf"], [1, "logo-search"], ["src", "assets/header-logo/unityexch-logo.png", "alt", "logo", 1, "site-logo"], ["type", "search", "placeholder", "  Search", "aria-label", "Search", 1, "form-control", "me-2", "searchbar"], [1, "bet-mb"], ["href", "javascript:;", "title", "Setting", 1, "open_bets"], ["src", "../../assets/download.svg"], [1, "header-buttons"], [1, "header-uname-pass"], ["type", "text", "placeholder", "Username", 1, "form-control", "me-2", "username"], ["type", "text", "placeholder", "Password", 1, "password", "form-control", "me-2"], [1, "login-signup"], [1, "btn", "btn-danger", "m-2", "login"], [2, "width", "33px", "height", "18px", 3, "click"], [1, "fa", "fa-sign-in-alt"], [1, "btn", "btn-warning", "signup"], ["_ngcontent-rly-c0", "", 1, ""], ["_ngcontent-rly-c0", "", 1, "head-refresh"], ["_ngcontent-rly-c0", "", "id", "menuRefresh", 2, "cursor", "pointer"], ["_ngcontent-rly-c0", "", "href", "javascript:;", "title", "Setting", 1, "a-referesh"], ["_ngcontent-rly-c0", "", "src", "../../../assets/transparent.gif"], ["_ngcontent-rly-c0", "", 1, "bet-setting", "ml-2"], ["_ngcontent-rly-c0", "", "href", "#/banking", 1, "a-setting"], ["_ngcontent-rly-c0", "", 1, "fa", "fa-bank", "fa-lg"], ["_ngcontent-rly-c0", "", 1, "bet-setting", "ml-2", "mr-1"], ["_ngcontent-rly-c0", "", "href", "javascript:;", "title", "Setting", 1, "a-setting"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 3, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_2_Template, 4, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 12, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 13, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogin);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: [".site-header[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    width: 100%;\n    margin: 0%;\n    padding: 7px;\n    height: 70px;\n    position: absolute;\n    flex-direction: row;\n\n}\n.searchbar[_ngcontent-%COMP%]{\n    height: 25px;\n    max-width: 400px;\n    margin-left: 30px;\n    border-radius: 0.2rem;\n\n}\n\n.logo-search[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.open-bets[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    \n\n}\n\n\n.header-buttons[_ngcontent-%COMP%]{\n   \n    display: flex;\n    margin-right: 2px;\n    align-items: center;\n    \n\n}\n\n.site-logo[_ngcontent-%COMP%]{\n    width: 160px;\n    \n    display: flex;\n   \n   margin-left: -4px;\n   height: 55px;\n    margin-left: -8px;\n    \n}\n.me-2[_ngcontent-%COMP%]{\n    border-radius: 0.2em;\n    margin-right: 1.5rem!important;\n   \n}\n.login[_ngcontent-%COMP%]{\n    \n    background: linear-gradient(-180deg, #f72424 0%, #bb1c00 100%);\n    border: none;\n    width: 80px;\n    font-size: 12px;\n    line-height: 7px;\n    height: 33px;\n    margin-right: 12px;\n    line-height: normal;\n    border-radius: 0.2rem;\n    height: 25px;\n    border-radius: 0.2rem;\n    \n}\n.signup[_ngcontent-%COMP%]{\n    background: linear-gradient(-180deg, #fd8f3b 0%, #fd3523 100%);\n    border: none;\n    font-size: 12px;\n    width: 80px;\n    height: 25px;\n    margin: 0 10px;\n    line-height: 7px;\n    color: white;\n    border-radius: 0.2rem;\n    \n}\n\n.header-uname-pass[_ngcontent-%COMP%]\n{\n    display: flex;\n    height: 25px;\n    \n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n}\n\n.login-signup[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n}\n\n.bets-mbl-show[_ngcontent-%COMP%] {\n    bottom: 0;\n    position: absolute;\n    left: 1px;\n    top: 9px;\n    width: 80px;\n}\n\n\n@media only screen and (max-width: 992px) {\n    .header-uname-pass[_ngcontent-%COMP%]  {\n      display: none;\n    }\n  }\n\n  @media only screen and (max-width: 1024px) {\n    .searchbar[_ngcontent-%COMP%] {\n      display: none;\n    }\n}\n\n\n@media only screen and (max-width: 992px)\n{\n    .signup[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]{\n    width: 80px;\n    height: 33px;\n    border-radius: 0.2rem;\n   }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix5aUVBQXlpRTs7QUFFN2lFOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0dBQ2QsaUJBQWlCO0dBQ2pCLGlCQUFpQjtHQUNqQixZQUFZO0lBQ1gsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDhCQUE4Qjs7QUFFbEM7QUFDQTs7SUFFSSw4REFBOEQ7SUFDOUQsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksOERBQThEO0lBQzlELFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7QUFDZjs7O0FBR0E7SUFDSTtNQUNFLGFBQWE7SUFDZjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxhQUFhO0lBQ2Y7QUFDSjs7O0FBR0E7O0lBRUk7SUFDQSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtHQUN0QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG59XG4uc2VhcmNoYmFye1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcblxufVxuXG4ubG9nby1zZWFyY2h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3Blbi1iZXRzIGltZ3tcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGZpbGw9XCJyZ2IoMjU1LDI1NSwyNTUpXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGQ9XCJNMTkuMzE0IDYuMzhjLS40MS0xLjA1Mi0uOTg3LTIuMDE4LTEuNzA4LTIuODYyLTEuNDktMS43NS0zLjU3NC0yLjk3LTUuOTQtMy4zNjhDMTEuMTI1LjA2IDEwLjU3IDAgMTAgMGMtLjU3IDAtMS4xMjQuMDYtMS42NjcuMTUtMi4zNjUuMzk4LTQuNDQ3IDEuNjItNS45NCAzLjM2Ny0uNzIuODQ1LTEuMjk3IDEuODEtMS43MDcgMi44NjNDLjI1IDcuNTA0IDAgOC43MjIgMCAxMGMwIDEuMTc1LjIxMyAyLjI5Ny41ODUgMy4zNDQuMzggMS4wNjYuOTI3IDIuMDUgMS42MiAyLjkxNCAxLjUwMyAxLjg2OCAzLjY2MiAzLjE3OCA2LjEyOCAzLjU5Mi41NDMuMDkgMS4wOTguMTUgMS42NjcuMTUuNTcgMCAxLjEyNC0uMDYgMS42NjctLjE1IDIuNDY2LS40MTQgNC42MjUtMS43MjQgNi4xMjctMy41OTIuNjk0LS44NjQgMS4yNDItMS44NDggMS42Mi0yLjkxMy4zNzMtMS4wNDcuNTg2LTIuMTcuNTg2LTMuMzQ1IDAtMS4yNzgtLjI1LTIuNDk2LS42ODYtMy42MnptLTEuMTczLjY3OGwtMS43NDcgMS4wMWMtLjMzMi0xLjA5NS0uOTM3LTIuMDctMS43MzUtMi44NDhsMS43NjQtMS4wMmMuNzQ2LjgyNiAxLjMzMyAxLjc5MyAxLjcyIDIuODU4ek0xNS4zNDggMTBjMCAyLjk0OC0yLjM5OCA1LjM0Ny01LjM0NyA1LjM0Ny0yLjk1IDAtNS4zNDctMi40LTUuMzQ3LTUuMzQ3IDAtMi45NDggMi4zOTgtNS4zNDcgNS4zNDctNS4zNDcgMi45NSAwIDUuMzQ3IDIuNCA1LjM0NyA1LjM0N3pNMTAgMS4zMzNjLjU3IDAgMS4xMjcuMDYgMS42NjcuMTY1djIuMDRjLS41MzQtLjEzNy0xLjA5LS4yMTgtMS42NjctLjIxOC0uNTc2IDAtMS4xMzMuMDgtMS42NjcuMjJWMS40OTdjLjU0LS4xMDYgMS4wOTctLjE2NSAxLjY2Ny0uMTY1ek0zLjU3OCA0LjJsMS43NjUgMS4wMmMtLjguNzc4LTEuNDA0IDEuNzUzLTEuNzM2IDIuODQ3TDEuODYgNy4wNTdjLjM4NS0xLjA2NS45NzMtMi4wMyAxLjcxOC0yLjg1NnptLTEuODIgOC40NjdsMS43NzUtMS4wMjRjLjI4MiAxLjExMi44NCAyLjExIDEuNjA0IDIuOTIzTDMuMzggMTUuNThjLS43MTctLjg0OC0xLjI3Mi0xLjgzNC0xLjYyMi0yLjkxM3ptOC4yNDIgNmMtLjU3IDAtMS4xMjctLjA2LTEuNjY3LS4xNjV2LTIuMDRjLjUzNC4xMzcgMS4wOS4yMTggMS42NjcuMjE4LjU3NiAwIDEuMTMzLS4wOCAxLjY2Ny0uMjJ2Mi4wNDJjLS41NC4xMDYtMS4wOTcuMTY1LTEuNjY3LjE2NXptNi42Mi0zLjA4N2wtMS43NTctMS4wMTRjLjc2My0uODEgMS4zMjItMS44MSAxLjYwNC0yLjkyM2wxLjc3NSAxLjAyNWMtLjM1IDEuMDc4LS45MDUgMi4wNjQtMS42MjIgMi45MTJ6bS02LjAwMy02LjMyNWMxLjE3NC40MTggMS42NDcuOTY2IDEuNjQ3IDEuODYyIDAgLjg4Ny0uNjIgMS42NDQtMS43NTUgMS44NDN2LjUxNGMwIC4yNy0uMjE4LjQ4OC0uNDg1LjQ4OHMtLjQ4My0uMjE4LS40ODMtLjQ4OHYtLjQ0NGMtLjM5LS4wMTgtLjc3Mi0uMDg4LTEuMDk4LS4xODctLjMzMi0uMS0uNTI2LS40NDgtLjQ0LS43ODdsLjAwNS0uMDE3Yy4wMzUtLjE0NS4xMy0uMjY1LjI1OC0uMzM1LjEzLS4wNy4yOC0uMDguNDItLjAzLjMyOC4xMTcuNzA4LjIgMS4xMS4yLjU2MyAwIC45NDctLjIyLjk0Ny0uNjE4IDAtLjM4LS4zMTUtLjYxOC0xLjA0NS0uODY3LTEuMDU2LS4zNTgtMS43NzUtLjg1Ni0xLjc3NS0xLjgyMiAwLS44NzcuNjEtMS41NjQgMS42NjctMS43NzN2LS40NThjMC0uMjg1LjI0LS41MTMuNTMtLjQ4Ni4yNS4wMjUuNDM2LjI0Ny40MzYuNXYuMzc1Yy4zNDcuMDE2LjYzNC4wNjIuODc1LjEyNS4zMTUuMDgyLjUwNC40MDYuNDIzLjcyM2wtLjAxLjAzNGMtLjAzNC4xNC0uMTI0LjI1OC0uMjQ4LjMyOHMtLjI3LjA4Ni0uNDA3LjA0M2MtLjIzOC0uMDc1LS41MzgtLjEzNy0uOTA4LS4xMzctLjY0MiAwLS44NDguMjgtLjg0OC41NiAwIC4zMjcuMzQ0LjUzNiAxLjE4My44NTV6XCIvPjwvc3ZnPlwiKTsgKi9cblxufVxuXG5cbi5oZWFkZXItYnV0dG9uc3tcbiAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcblxufVxuXG4uc2l0ZS1sb2dve1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICAvKiBoZWlnaHQ6IDY4cHg7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgIC8qIG1hcmdpbjogOHB4OyAqL1xuICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICBoZWlnaHQ6IDU1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgXG59XG4ubWUtMntcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSFpbXBvcnRhbnQ7XG4gICBcbn1cbi5sb2dpbntcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2Y3MjQyNCAwJSwgI2JiMWMwMCAxMDAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA3cHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIFxufVxuLnNpZ251cHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZkOGYzYiAwJSwgI2ZkMzUyMyAxMDAlKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBsaW5lLWhlaWdodDogN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgXG59XG5cbi5oZWFkZXItdW5hbWUtcGFzc1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIC8qIG1hcmdpbi1yaWdodDogMTJweDsgKi9cbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmxvZ2luLXNpZ251cHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZXRzLW1ibC1zaG93IHtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDlweDtcbiAgICB3aWR0aDogODBweDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmhlYWRlci11bmFtZS1wYXNzICB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnNlYXJjaGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KVxue1xuICAgIC5zaWdudXAgLmxvZ2lue1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzNweDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ 3247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _Partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partials/header/header.component */ 9857);
/* harmony import */ var _Partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/footer/footer.component */ 4284);




class AppComponent {
  constructor() {
    this.title = 'unity-exchange';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _Partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _Partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: [".nav-logo[_ngcontent-%COMP%]{\n    width: 69px;\n    height: 29px;\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7QUFFaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxvZ297XG4gICAgd2lkdGg6IDY5cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _Partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partials/header/header.component */ 9857);
/* harmony import */ var _Partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partials/footer/footer.component */ 4284);
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ 3247);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _Partials_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _Partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule]
  });
})();

/***/ }),

/***/ 600:
/*!*********************************************!*\
  !*** ./src/app/services/backend.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackendService": () => (/* binding */ BackendService)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ 1960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class BackendService {
  constructor(http) {
    this.http = http;
  }
  GetBalance() {
    return this.http.post(config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.getUserBalanceURL, {});
  }
}
BackendService.ɵfac = function BackendService_Factory(t) {
  return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BackendService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BackendService,
  factory: BackendService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2609), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map