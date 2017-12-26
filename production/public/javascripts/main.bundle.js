webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\r\n\tmargin: 20px 0;\r\n\tborder: 0;\r\n\tborder-top: 1px dashed #c5c5c5;\r\n\tborder-bottom: 1px dashed #f7f7f7;\r\n}\r\n\r\n\r\n.learn a {\r\n\tfont-weight: normal;\r\n\ttext-decoration: none;\r\n\tcolor: #b83f45;\r\n}\r\n\r\n.learn a:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: #787e7e;\r\n}\r\n\r\n\r\n.todo {\r\n\tbackground: #fff;\r\n    margin: 0px 0 40px 0;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todo label {\r\n\tfont-size: 35px;\r\n}\r\n\r\n.todo h2 {\r\n\tposition: absolute;\r\n\ttop: -120px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(75, 66, 66, 0.699);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\nlabel span {\r\n\tmargin-left: 1em;\r\n\tfont-size: 12px;\r\n\tcolor:  rgba(53, 51, 51, 0.829);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.status {\r\n\tfont-size: 12px;\r\n    margin-left: 60px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.labels {\r\n\tfont-size: 12px;\r\n    margin-left: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.view {\r\n\tposition: relative;\r\n\theight: 6em;\r\n\tcursor: pointer;\r\n}\r\n\r\n.destroy span {\r\n\tcursor: pointer;\r\n\tfont-size: 12px;\r\n\tposition: absolute;\r\n\ttop: 12px;\r\n\tmargin-left: -4em;\r\n}\r\n\r\n.err {\r\n\tcolor: red;\r\n}\r\n\r\n.learn h3,\r\n.learn h4,\r\n.learn h5 {\r\n\tmargin: 10px 0;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2;\r\n\tcolor: #000;\r\n}\r\n\r\n.learn h3 {\r\n\tfont-size: 24px;\r\n}\r\n\r\n.learn h4 {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.learn h5 {\r\n\tmargin-bottom: 0;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.learn ul {\r\n\tpadding: 0;\r\n\tmargin: 0 0 30px 25px;\r\n}\r\n\r\n.learn li {\r\n\tline-height: 20px;\r\n}\r\n\r\n.learn p {\r\n\tfont-size: 15px;\r\n\tfont-weight: 300;\r\n\tline-height: 1.3;\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#issue-count {\r\n\tdisplay: none;\r\n}\r\n\r\n.quote {\r\n\tborder: none;\r\n\tmargin: 20px 0 60px 0;\r\n}\r\n\r\n.quote p {\r\n\tfont-style: italic;\r\n}\r\n\r\n.quote p:before {\r\n\tcontent: '\\201C';\r\n\tfont-size: 50px;\r\n\topacity: .15;\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: 3px;\r\n}\r\n\r\n.quote p:after {\r\n\tcontent: '\\201D';\r\n\tfont-size: 50px;\r\n\topacity: .15;\r\n\tposition: absolute;\r\n\tbottom: -42px;\r\n\tright: 3px;\r\n}\r\n\r\n.quote footer {\r\n\tposition: absolute;\r\n\tbottom: -40px;\r\n\tright: 0;\r\n}\r\n\r\n.quote footer img {\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.quote footer a {\r\n\tmargin-left: 5px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.speech-bubble {\r\n\tposition: relative;\r\n\tpadding: 10px;\r\n\tbackground: rgba(0, 0, 0, .04);\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.speech-bubble:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 30px;\r\n\tborder: 13px solid transparent;\r\n\tborder-top-color: rgba(0, 0, 0, .04);\r\n}\r\n\r\n.learn-bar > .learn {\r\n\tposition: absolute;\r\n\twidth: 272px;\r\n\ttop: 8px;\r\n\tleft: -300px;\r\n\tpadding: 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: rgba(255, 255, 255, .6);\r\n\ttransition-property: left;\r\n\ttransition-duration: 500ms;\r\n}\r\n\r\n@media (min-width: 899px) {\r\n\t.learn-bar {\r\n\t\twidth: auto;\r\n\t\tpadding-left: 300px;\r\n\t}\r\n\r\n\t.learn-bar > .learn {\r\n\t\tleft: 8px;\r\n\t}\r\n}\r\n\r\nhtml,\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbutton {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tcolor: inherit;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\tline-height: 1.4em;\r\n\tbackground: #f5f5f5;\r\n\tcolor: #4d4d4d;\r\n\tmin-width: 230px;\r\n\tmax-width: 550px;\r\n\tmargin: 0 auto;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tfont-weight: 300;\r\n}\r\n\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.todoapp {\r\n\tbackground: #fff;\r\n\tmargin: 130px 0 40px 0;\r\n\tposition: relative;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todoapp input::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::-moz-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp h1 {\r\n\tposition: absolute;\r\n\ttop: -120px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(175, 47, 47, 0.15);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.side {\r\n\tmargin-left: 10em;\r\n}\r\n\r\n.btni {\r\n    width: 80%;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 20px 8px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    line-height: 20px;\r\n    font-family: \"Fira Sans\", sans-serif;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    outline: none;\r\n    border: none;\r\n    background-color: #00E3AE;\r\n    background: linear-gradient(320.44deg, #00E3AE 0%, rgb(39, 128, 212) 100%);\r\n    transition: all ease 0.2s;\r\n    border-radius: 100px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n@media(max-width: 1024px){\r\n    .btni{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n.btni:hover {\r\n    background: linear-gradient(320.44deg, rgb(63, 182, 230) 0%, rgb(177, 165, 107) 100%);\r\n    transition: all ease 0.2s;\r\n}\r\n\r\n.new-todo,\r\n.edit {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\tfont-size: 24px;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tline-height: 1.4em;\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n\tpadding: 6px;\r\n\tborder: 1px solid #999;\r\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n\tbox-sizing: border-box;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo {\r\n\tpadding: 16px 16px 16px 60px;\r\n\tborder: none;\r\n\tbackground: rgba(0, 0, 0, 0.003);\r\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}\r\n\r\n.main {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\nlabel[for='toggle-all'] {\r\n\tdisplay: none;\r\n}\r\n\r\n.toggle-all {\r\n\tposition: absolute;\r\n\ttop: -55px;\r\n\tleft: -12px;\r\n\twidth: 60px;\r\n\theight: 34px;\r\n\ttext-align: center;\r\n\tborder: none; /* Mobile Safari */\r\n}\r\n\r\n.toggle-all:before {\r\n\tcontent: '\\276F';\r\n\tfont-size: 22px;\r\n\tcolor: #e6e6e6;\r\n\tpadding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggle-all:checked:before {\r\n\tcolor: #737373;\r\n}\r\n\r\n.todo-list {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.todo-list li {\r\n\tposition: relative;\r\n\tfont-size: 24px;\r\n\tborder-bottom: 1px solid #ededed;\r\n}\r\n\r\n.todo-list li:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.todo-list li.editing {\r\n\tborder-bottom: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.todo-list li.editing .edit {\r\n\tdisplay: block;\r\n\twidth: 506px;\r\n\tpadding: 12px 16px;\r\n\tmargin: 0 0 0 43px;\r\n}\r\n\r\n.todo-list li.editing .view {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n\ttext-align: center;\r\n\twidth: 40px;\r\n\t/* auto, since non-WebKit browsers doesn't support input styling */\r\n\theight: auto;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tmargin: auto 0;\r\n\tborder: none; /* Mobile Safari */\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n}\r\n\r\n.todo-list li .toggle:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.todo-list li .toggle:checked:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.todo-list li label {\r\n\tword-break: break-all;\r\n\tpadding: 15px 60px 15px 15px;\r\n\tmargin-left: 45px;\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\ttransition: color 0.4s;\r\n}\r\n\r\n.todo-list li.completed label {\r\n\tcolor: #d9d9d9;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todo-list li .destroy {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 10px;\r\n\tbottom: 0;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tmargin: auto 0;\r\n\tfont-size: 30px;\r\n\tcolor: #cc9a9a;\r\n\tmargin-bottom: 11px;\r\n\ttransition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list li .destroy:hover {\r\n\tcolor: #af5b5e;\r\n}\r\n\r\n.todo-list li .destroy:after {\r\n\tcontent: '\\D7';\r\n}\r\n\r\n.todo-list li:hover .destroy {\r\n\tdisplay: block;\r\n}\r\n\r\n.todo-list li .edit {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li.editing:last-child {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n.footer {\r\n\tcolor: #777;\r\n\tpadding: 10px 15px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.footer:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\theight: 50px;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n\t            0 8px 0 -3px #f6f6f6,\r\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n\t            0 16px 0 -6px #f6f6f6,\r\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.todo-count {\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-count strong {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.filters {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tleft: 0;\r\n}\r\n\r\n.filters li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.filters li a {\r\n\tcolor: inherit;\r\n\tmargin: 3px;\r\n\tpadding: 3px 7px;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.filters li a:hover {\r\n\tborder-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters li a.selected {\r\n\tborder-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tline-height: 20px;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.info {\r\n\tmargin: 65px auto 0;\r\n\tcolor: #bfbfbf;\r\n\tfont-size: 10px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-align: center;\r\n}\r\n\r\n.info p {\r\n\tline-height: 1;\r\n}\r\n\r\n.info a {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.info a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n/*\r\n\tHack to remove background from Mobile Safari.\r\n\tCan't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n\t.toggle-all,\r\n\t.todo-list li .toggle {\r\n\t\tbackground: none;\r\n\t}\r\n\r\n\t.todo-list li .toggle {\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.toggle-all {\r\n\t\t-webkit-transform: rotate(90deg);\r\n\t\ttransform: rotate(90deg);\r\n\t\t-webkit-appearance: none;\r\n\t\t-moz-appearance: none;\r\n\t\t     appearance: none;\r\n\t}\r\n}\r\n\r\n@media (max-width: 430px) {\r\n\t.footer {\r\n\t\theight: 50px;\r\n\t}\r\n\r\n\t.filters {\r\n\t\tbottom: 10px;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>Add a new Todo</h1>\n  </header>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-8\">\n    <section class=\"todo\" >\n        <form [formGroup]=\"myform\" (ngSubmit)=\"addnewtodo(myform)\">\n            <fieldset>\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control new-todo\" required>\n                <p class=\"has-danger text-center\" *ngIf=\"!myform.controls.name.valid  && (isSubmit)\">Enter name it is imported</p>\n              </div>\n            <div class=\"form-group\">\n              <label>Status</label>\n              <select class=\"form-control\" formControlName=\"status\" required>\n                <option *ngFor=\"let stat of status\" [value]=\"stat\">{{stat}}</option> \n              </select>\n              <p class=\"has-danger text-center\" *ngIf=\"!myform.controls.status.valid  && (isSubmit)\">Select status it is imported</p>\n            </div>\n            <div class=\"form-group\">\n                <label>Label</label>\n                <select class=\"form-control\" formControlName=\"labels\" required>\n                  <option *ngFor=\"let label of labels\" [value]=\"label\">{{label}}</option>\n                </select>\n                <p class=\"has-danger text-center\" *ngIf=\"!myform.controls.labels.valid  && (isSubmit)\">Select labels it is imported</p>\n              </div>\n              <div class=\"form-group\">\n                  <label>Status</label>\n                  <input type=\"datetime-local\" formControlName=\"date\" class=\"form-control new-todo\" required datevalid>\n                  <p class=\"has-danger text-center\"  *ngIf=\"!myform.controls.date.valid  && (isSubmit)\">Select date it is imported</p>\n              </div>\n              <div class=\"form-group text-center\">\n                <button type=\"submit\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light btni\">Add New Todo</button>\n              </div>\n              </fieldset>\n          </form>   \n    </section>\n   </div>\n   <div class=\"col-md-offset-1 col-md-3\">\n     <a routerLink=\"/dashboard\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light btni side\">Dashboard</a>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-new/add-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewComponent = (function () {
    function AddNewComponent(api, router) {
        this.api = api;
        this.router = router;
        this.status = [
            'New',
            'In progress',
            'Completed'
        ];
        this.labels = [
            'Personal',
            'Work',
            'Shopping',
            'Others'
        ];
        this.isSubmit = false;
    }
    AddNewComponent.prototype.ngOnInit = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)]),
            status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            labels: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
    };
    AddNewComponent.prototype.addnewtodo = function (myform) {
        var _this = this;
        if (!this.myform.valid) {
            this.isSubmit = true;
            return;
        }
        var token = localStorage.getItem('token');
        this.data = this.myform.value;
        this.data.token = token;
        this.api.settodoList(token, this.data).then(function (lists) {
            if (lists.json().hasOwnProperty('success') && !lists.json().success) {
                localStorage.removeItem('token');
                _this.router.navigateByUrl('');
            }
            else {
                _this.router.navigateByUrl('dashboard');
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return AddNewComponent;
}());
AddNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-new',
        template: __webpack_require__("../../../../../src/app/add-new/add-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-new/add-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AddNewComponent);

var _a, _b;
//# sourceMappingURL=add-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_status_status_component__ = __webpack_require__("../../../../../src/app/components/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ensure_authenticated_service__ = __webpack_require__("../../../../../src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_redirect_service__ = __webpack_require__("../../../../../src/app/services/login-redirect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_new_add_new_component__ = __webpack_require__("../../../../../src/app/add-new/add-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_login_redirect_service__["a" /* LoginRedirect */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_login_redirect_service__["a" /* LoginRedirect */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__components_status_status_component__["a" /* StatusComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_ensure_authenticated_service__["a" /* EnsureAuthenticated */]]
    },
    {
        path: 'addnew',
        component: __WEBPACK_IMPORTED_MODULE_7__add_new_add_new_component__["a" /* AddNewComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_status_status_component__ = __webpack_require__("../../../../../src/app/components/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ensure_authenticated_service__ = __webpack_require__("../../../../../src/app/services/ensure-authenticated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_redirect_service__ = __webpack_require__("../../../../../src/app/services/login-redirect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_new_add_new_component__ = __webpack_require__("../../../../../src/app/add-new/add-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__valids_datevalid__ = __webpack_require__("../../../../../src/app/valids/datevalid.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_status_status_component__["a" /* StatusComponent */],
            __WEBPACK_IMPORTED_MODULE_12__add_new_add_new_component__["a" /* AddNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__valids_datevalid__["a" /* datevalid */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__services_ensure_authenticated_service__["a" /* EnsureAuthenticated */],
            __WEBPACK_IMPORTED_MODULE_10__services_login_redirect_service__["a" /* LoginRedirect */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btni{\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 20px 8px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    line-height: 20px;\r\n    font-family: \"Fira Sans\", sans-serif;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    outline: none;\r\n    border: none;\r\n    background-color: #00E3AE;\r\n    background: linear-gradient(320.44deg, #00E3AE 0%, rgb(39, 128, 212) 100%);\r\n    transition: all ease 0.2s;\r\n    border-radius: 100px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n\r\n.btni:hover {\r\n    background: linear-gradient(320.44deg, rgb(63, 182, 230) 0%, rgb(177, 165, 107) 100%);\r\n    transition: all ease 0.2s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\" class=\"front-login-register\">\n  <div class=\"login-box\">\n      <div class=\"white-box\">\n\n    <form class=\"form-horizontal form-material\" id=\"loginform\" (ngSubmit)=\"onLogin()\" novalidate>\n        <h3 class=\"box-title m-b-20\">Sign In</h3>\n        <span style=\"color:#df6c6e;\">\n                            </span>\n     <div class=\"form-group\">\n        <div class=\"col-xs-12\">\n          <label for=\"email\">User Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter User Name\" [(ngModel)]=\"user.name\" name=\"name\" required>\n        </div>\n      </div>\n     <div class=\"form-group\">\n        <div class=\"col-xs-12\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n        </div>\n    </div>\n    <div class=\"form-group text-center m-t-20\">\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light btni\">Sign In</button>\n        </div>\n      </div>\n      <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n              <p>Don't have an account? <a routerLink=\"/register\" class=\"text-primary m-l-5\"><b>Sign Up</b></a></p>\n          </div>\n      </div>\n    </form>\n  </div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.auth.login(this.user)
            .then(function (user) {
            localStorage.setItem('token', user.json().token);
            _this.router.navigateByUrl('/dashboard');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/pipes/due_date.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            var date1 = new Date(a.due_date);
            var date2 = new Date(b.due_date);
            if (date1 < date2) {
                return -1;
            }
            else if (date1 > date2) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: "orderby"
    })
], OrderByPipe);

//# sourceMappingURL=due_date.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btni{\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 20px 8px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    line-height: 20px;\r\n    font-family: \"Fira Sans\", sans-serif;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    outline: none;\r\n    border: none;\r\n    background-color: #00E3AE;\r\n    background: linear-gradient(320.44deg, #00E3AE 0%, rgb(39, 128, 212) 100%);\r\n    transition: all ease 0.2s;\r\n    border-radius: 100px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n\r\n.btni:hover {\r\n    background: linear-gradient(320.44deg, rgb(63, 182, 230) 0%, rgb(177, 165, 107) 100%);\r\n    transition: all ease 0.2s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"wrapper\" class=\"front-login-register\">\n    <div class=\"login-box\">\n        <div class=\"white-box\">\n    <form class=\"form-horizontal form-material\" id=\"loginform\" (ngSubmit)=\"onRegister()\" novalidate>\n        <h3 class=\"box-title m-b-20\">Sign Up</h3>\n        <span style=\"color:#df6c6e;\">\n                            </span>\n       <div class=\"form-group\">\n        <div class=\"col-xs-12\">\n           <label for=\"email\">User Name</label>\n           <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter User Name\" [(ngModel)]=\"user.name\" name=\"name\" required>\n       </div>\n      </div>\n      <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <div class=\"col-md-12\">\n              <div class=\"checkbox checkbox-primary p-t-0\">\n                  <input id=\"checkbox-signup\" type=\"checkbox\" required=\"\">\n                  <label for=\"checkbox-signup\"> I agree to all <a href='#'>Terms</a>.</label>\n              </div>\n          </div>\n      </div>\n      <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n              <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light btni\" type=\"submit\" name=\"signup\">Sign Up</button>\n          </div>\n      </div>\n    <div class=\"form-group m-b-0\">\n        <div class=\"col-sm-12 text-center\">\n            <p>Already have an account? <a routerLink=\"\" class=\"text-primary m-l-5\"><b>Sign In</b></a></p>\n        </div>\n    </div>\n    </form>\n  </div>\n</div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.auth.register(this.user)
            .then(function (user) {
            localStorage.setItem('token', user.json().token);
            _this.router.navigateByUrl('/dashboard');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr {\r\n\tmargin: 20px 0;\r\n\tborder: 0;\r\n\tborder-top: 1px dashed #c5c5c5;\r\n\tborder-bottom: 1px dashed #f7f7f7;\r\n}\r\n\r\n\r\n.learn a {\r\n\tfont-weight: normal;\r\n\ttext-decoration: none;\r\n\tcolor: #b83f45;\r\n}\r\n\r\n.learn a:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: #787e7e;\r\n}\r\n\r\n\r\n.todo {\r\n\tbackground: #fff;\r\n    margin: 0px 0 40px 0;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todo label {\r\n\tfont-size: 35px;\r\n}\r\n\r\n.todo h2 {\r\n\tposition: absolute;\r\n\ttop: -120px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(75, 66, 66, 0.699);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\nlabel span {\r\n\tmargin-left: 1em;\r\n\tfont-size: 12px;\r\n\tcolor:  rgba(53, 51, 51, 0.829);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.status {\r\n\tfont-size: 12px;\r\n    margin-left: 60px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.labels {\r\n\tfont-size: 12px;\r\n    margin-left: 10px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.view {\r\n\tposition: relative;\r\n\theight: 6em;\r\n\tcursor: pointer;\r\n}\r\n\r\n.destroy span {\r\n\tcursor: pointer;\r\n\tfont-size: 12px;\r\n\tposition: absolute;\r\n\ttop: 12px;\r\n\tmargin-left: -4em;\r\n}\r\n\r\n\r\n.learn h3,\r\n.learn h4,\r\n.learn h5 {\r\n\tmargin: 10px 0;\r\n\tfont-weight: 500;\r\n\tline-height: 1.2;\r\n\tcolor: #000;\r\n}\r\n\r\n.learn h3 {\r\n\tfont-size: 24px;\r\n}\r\n\r\n.learn h4 {\r\n\tfont-size: 18px;\r\n}\r\n\r\n.learn h5 {\r\n\tmargin-bottom: 0;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.learn ul {\r\n\tpadding: 0;\r\n\tmargin: 0 0 30px 25px;\r\n}\r\n\r\n.learn li {\r\n\tline-height: 20px;\r\n}\r\n\r\n.learn p {\r\n\tfont-size: 15px;\r\n\tfont-weight: 300;\r\n\tline-height: 1.3;\r\n\tmargin-top: 0;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#issue-count {\r\n\tdisplay: none;\r\n}\r\n\r\n.quote {\r\n\tborder: none;\r\n\tmargin: 20px 0 60px 0;\r\n}\r\n\r\n.quote p {\r\n\tfont-style: italic;\r\n}\r\n\r\n.quote p:before {\r\n\tcontent: '\\201C';\r\n\tfont-size: 50px;\r\n\topacity: .15;\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: 3px;\r\n}\r\n\r\n.quote p:after {\r\n\tcontent: '\\201D';\r\n\tfont-size: 50px;\r\n\topacity: .15;\r\n\tposition: absolute;\r\n\tbottom: -42px;\r\n\tright: 3px;\r\n}\r\n\r\n.quote footer {\r\n\tposition: absolute;\r\n\tbottom: -40px;\r\n\tright: 0;\r\n}\r\n\r\n.quote footer img {\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.quote footer a {\r\n\tmargin-left: 5px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.speech-bubble {\r\n\tposition: relative;\r\n\tpadding: 10px;\r\n\tbackground: rgba(0, 0, 0, .04);\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.speech-bubble:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 100%;\r\n\tright: 30px;\r\n\tborder: 13px solid transparent;\r\n\tborder-top-color: rgba(0, 0, 0, .04);\r\n}\r\n\r\n.learn-bar > .learn {\r\n\tposition: absolute;\r\n\twidth: 272px;\r\n\ttop: 8px;\r\n\tleft: -300px;\r\n\tpadding: 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: rgba(255, 255, 255, .6);\r\n\ttransition-property: left;\r\n\ttransition-duration: 500ms;\r\n}\r\n\r\n@media (min-width: 899px) {\r\n\t.learn-bar {\r\n\t\twidth: auto;\r\n\t\tpadding-left: 300px;\r\n\t}\r\n\r\n\t.learn-bar > .learn {\r\n\t\tleft: 8px;\r\n\t}\r\n}\r\n\r\nhtml,\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbutton {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbackground: none;\r\n\tfont-size: 100%;\r\n\tvertical-align: baseline;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tcolor: inherit;\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n\tline-height: 1.4em;\r\n\tbackground: #f5f5f5;\r\n\tcolor: #4d4d4d;\r\n\tmin-width: 230px;\r\n\tmax-width: 550px;\r\n\tmargin: 0 auto;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n\tfont-weight: 300;\r\n}\r\n\r\n:focus {\r\n\toutline: 0;\r\n}\r\n\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n.todoapp {\r\n\tbackground: #fff;\r\n\tmargin: 130px 0 40px 0;\r\n\tposition: relative;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todoapp input::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::-moz-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp input::input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp h1 {\r\n\tposition: absolute;\r\n\ttop: -120px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(175, 47, 47, 0.15);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.btni {\r\n\tmargin-left: 10em;\r\n    width: 60%;\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    padding: 20px 8px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    line-height: 20px;\r\n    font-family: \"Fira Sans\", sans-serif;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    outline: none;\r\n    border: none;\r\n    background-color: #00E3AE;\r\n    background: linear-gradient(320.44deg, #00E3AE 0%, rgb(39, 128, 212) 100%);\r\n    transition: all ease 0.2s;\r\n    border-radius: 100px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n@media(max-width: 1024px){\r\n    .btni{\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n.btni:hover {\r\n    background: linear-gradient(320.44deg, rgb(63, 182, 230) 0%, rgb(177, 165, 107) 100%);\r\n    transition: all ease 0.2s;\r\n}\r\n\r\n.new-todo,\r\n.edit {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\tfont-size: 24px;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tline-height: 1.4em;\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n\tpadding: 6px;\r\n\tborder: 1px solid #999;\r\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n\tbox-sizing: border-box;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo {\r\n\tpadding: 16px 16px 16px 60px;\r\n\tborder: none;\r\n\tbackground: rgba(0, 0, 0, 0.003);\r\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}\r\n\r\n.main {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\nlabel[for='toggle-all'] {\r\n\tdisplay: none;\r\n}\r\n\r\n.toggle-all {\r\n\tposition: absolute;\r\n\ttop: -55px;\r\n\tleft: -12px;\r\n\twidth: 60px;\r\n\theight: 34px;\r\n\ttext-align: center;\r\n\tborder: none; /* Mobile Safari */\r\n}\r\n\r\n.toggle-all:before {\r\n\tcontent: '\\276F';\r\n\tfont-size: 22px;\r\n\tcolor: #e6e6e6;\r\n\tpadding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggle-all:checked:before {\r\n\tcolor: #737373;\r\n}\r\n\r\n.todo-list {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.todo-list li {\r\n\tposition: relative;\r\n\tfont-size: 24px;\r\n\tborder-bottom: 1px solid #ededed;\r\n}\r\n\r\n.todo-list li:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.todo-list li.editing {\r\n\tborder-bottom: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.todo-list li.editing .edit {\r\n\tdisplay: block;\r\n\twidth: 506px;\r\n\tpadding: 12px 16px;\r\n\tmargin: 0 0 0 43px;\r\n}\r\n\r\n.todo-list li.editing .view {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n\ttext-align: center;\r\n\twidth: 40px;\r\n\t/* auto, since non-WebKit browsers doesn't support input styling */\r\n\theight: auto;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tmargin: auto 0;\r\n\tborder: none; /* Mobile Safari */\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n}\r\n\r\n.todo-list li .toggle:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\r\n}\r\n\r\n.todo-list li .toggle:checked:after {\r\n\tcontent: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\r\n}\r\n\r\n.todo-list li label {\r\n\tword-break: break-all;\r\n\tpadding: 15px 60px 15px 15px;\r\n\tmargin-left: 45px;\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\ttransition: color 0.4s;\r\n}\r\n\r\n.todo-list li.completed label {\r\n\tcolor: #d9d9d9;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todo-list li .destroy {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 10px;\r\n\tbottom: 0;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tmargin: auto 0;\r\n\tfont-size: 30px;\r\n\tcolor: #cc9a9a;\r\n\tmargin-bottom: 11px;\r\n\ttransition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list li .destroy:hover {\r\n\tcolor: #af5b5e;\r\n}\r\n\r\n.todo-list li .destroy:after {\r\n\tcontent: '\\D7';\r\n}\r\n\r\n.todo-list li:hover .destroy {\r\n\tdisplay: block;\r\n}\r\n\r\n.todo-list li .edit {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list li.editing:last-child {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n.footer {\r\n\tcolor: #777;\r\n\tpadding: 10px 15px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.footer:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\theight: 50px;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n\t            0 8px 0 -3px #f6f6f6,\r\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n\t            0 16px 0 -6px #f6f6f6,\r\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.todo-count {\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-count strong {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.filters {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tleft: 0;\r\n}\r\n\r\n.filters li {\r\n\tdisplay: inline;\r\n}\r\n\r\n.filters li a {\r\n\tcolor: inherit;\r\n\tmargin: 3px;\r\n\tpadding: 3px 7px;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.filters li a:hover {\r\n\tborder-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters li a.selected {\r\n\tborder-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tline-height: 20px;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.info {\r\n\tmargin: 65px auto 0;\r\n\tcolor: #bfbfbf;\r\n\tfont-size: 10px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-align: center;\r\n}\r\n\r\n.info p {\r\n\tline-height: 1;\r\n}\r\n\r\n.info a {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.info a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n/*\r\n\tHack to remove background from Mobile Safari.\r\n\tCan't use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n\t.toggle-all,\r\n\t.todo-list li .toggle {\r\n\t\tbackground: none;\r\n\t}\r\n\r\n\t.todo-list li .toggle {\r\n\t\theight: 40px;\r\n\t}\r\n\r\n\t.toggle-all {\r\n\t\t-webkit-transform: rotate(90deg);\r\n\t\ttransform: rotate(90deg);\r\n\t\t-webkit-appearance: none;\r\n\t\t-moz-appearance: none;\r\n\t\t     appearance: none;\r\n\t}\r\n}\r\n\r\n@media (max-width: 430px) {\r\n\t.footer {\r\n\t\theight: 50px;\r\n\t}\r\n\r\n\t.filters {\r\n\t\tbottom: 10px;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"todoapp\">\n    <header class=\"header\">\n      <h1>Todos</h1>\n      <input class=\"new-todo\" placeholder=\"Search todo list\" autofocus=\"\" (ngModelChange)=\"search($event)\" [(ngModel)]=\"searchitem\">\n    </header>\n</section>\n<div class=\"container\">\n    <div class=\"row\">\n     <div class=\"col-md-8\">\n      <section class=\"todo\" >\n         <ul class=\"todo-list\">\n           <li *ngFor=\"let todo of todos; let i = index\">\n             <div  class=\"view\">\n               <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo, i)\" [checked]=\"checkit(todo.status)\">\n               <label>{{todo.name}} <span>{{ todo.due_date | date: 'd EEE yyyy' }}</span></label>\n               <span class=\"status\"><b>Status:</b> {{ todo.status[0] }}</span>\n               <span class=\"labels\"><b>Lable:</b> {{ todo.lables }} </span>\n               <button class=\"destroy\" (click)=\"removeTodo(todo, i)\"><span>Archive</span> </button>\n             </div>\n           </li>\n         </ul>\n       </section>\n     </div>\n     <div class=\"col-md-offset-1 col-md-3\">\n            <a routerLink=\"/addnew\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light btni\">Add New</a>\n            <section class=\"todo\">\n                \n            </section> \n     </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_due_date__ = __webpack_require__("../../../../../src/app/components/pipes/due_date.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusComponent = (function () {
    function StatusComponent(router, api) {
        this.router = router;
        this.api = api;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.api.gettodoList(this.token)
            .then(function (lists) {
            console.log(lists.json());
            if (lists.json().hasOwnProperty('success') && !lists.json().success) {
                localStorage.removeItem('token');
                _this.router.navigateByUrl('');
            }
            else {
                _this.todos = lists.json();
                _this.Lists = _this.todos;
                var objs = new __WEBPACK_IMPORTED_MODULE_3__pipes_due_date__["a" /* OrderByPipe */]();
                objs.transform(_this.todos);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    StatusComponent.prototype.toggleTodoComplete = function (todo, index) {
        var _this = this;
        if (this.checkit(todo.status)) {
            todo.status = ["New"];
        }
        else {
            todo.status = ["Completed"];
        }
        todo.token = this.token;
        this.api.archivetodoList(this.token, todo)
            .then(function (lists) {
            if (lists.json().hasOwnProperty('success') && !lists.json().success) {
                localStorage.removeItem('token');
                _this.router.navigateByUrl('');
            }
            else {
                _this.todos[index] = todo;
            }
        })
            .catch(function (err) {
            console.log("Error Occur", err);
        });
    };
    StatusComponent.prototype.remove = function (element, index) {
        console.log(element, index);
        this.todos.slice(index, 1);
    };
    StatusComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        return;
    };
    StatusComponent.prototype.checkit = function (data) {
        switch (data[0]) {
            case "Completed":
                return true;
            default:
                return false;
        }
    };
    StatusComponent.prototype.removeTodo = function (todo, index) {
        var _this = this;
        if (!todo.hidden)
            todo.hidden = true;
        else
            todo.hidden = false;
        todo.token = this.token;
        this.api.archivetodoList(this.token, todo)
            .then(function (lists) {
            if (lists.json().hasOwnProperty('success') && !lists.json().success) {
                localStorage.removeItem('token');
                _this.router.navigateByUrl('');
            }
            else {
                _this.remove(todo, index);
                todo.hidden = false;
            }
        })
            .catch(function (err) {
            console.log("Error Occur", err);
        });
    };
    StatusComponent.prototype.search = function (event) {
        if (event == "") {
            this.todos = this.Lists;
        }
        this.todos = this.Lists.filter(function (curr, index, arr) {
            if (curr.name.toLowerCase().indexOf(event.toLowerCase()) === -1) {
                return false;
            }
            return true;
        });
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'status',
        template: __webpack_require__("../../../../../src/app/components/status/status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/status/status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], StatusComponent);

var _a, _b;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, password) {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:8080';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AuthService.prototype.login = function (user) {
        var url = this.BASE_URL + "/auth";
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    AuthService.prototype.register = function (user) {
        var url = this.BASE_URL + "/auth/create";
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    };
    AuthService.prototype.gettodoList = function (token) {
        var url = this.BASE_URL + "/api?token=" + token;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.get(url, { headers: headers }).toPromise();
    };
    AuthService.prototype.settodoList = function (token, list) {
        var url = this.BASE_URL + "/api";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, list, { headers: headers }).toPromise();
    };
    AuthService.prototype.archivetodoList = function (token, list) {
        var url = this.BASE_URL + "/api/" + list._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, list, { headers: headers }).toPromise();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/ensure-authenticated.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnsureAuthenticated; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnsureAuthenticated = (function () {
    function EnsureAuthenticated(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    EnsureAuthenticated.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('');
            return false;
        }
    };
    return EnsureAuthenticated;
}());
EnsureAuthenticated = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EnsureAuthenticated);

var _a, _b;
//# sourceMappingURL=ensure-authenticated.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login-redirect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRedirect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRedirect = (function () {
    function LoginRedirect(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginRedirect.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        else {
            return true;
        }
    };
    return LoginRedirect;
}());
LoginRedirect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginRedirect);

var _a, _b;
//# sourceMappingURL=login-redirect.service.js.map

/***/ }),

/***/ "../../../../../src/app/valids/datevalid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datevalid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var datevalid = datevalid_1 = (function () {
    function datevalid() {
    }
    datevalid.prototype.validate = function (c) {
        var input = new Date(c.value);
        var curr = new Date();
        var isValid = (input > curr);
        console.log(isValid);
        var message = {
            'years': {
                'message': 'The year must be a valid number between '
            }
        };
        return isValid ? null : message;
    };
    return datevalid;
}());
datevalid = datevalid_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[datevalid]',
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: datevalid_1, multi: true }]
    })
], datevalid);

var datevalid_1;
//# sourceMappingURL=datevalid.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map