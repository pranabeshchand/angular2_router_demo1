"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n <div class=\"bs-component\">\n              <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n                <a class=\"navbar-brand\" routerLink=\"/\">Route</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n                  <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"/about\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"/services\">Service</a>\n                    </li> \n                  </ul>\n                  <form class=\"form-inline my-2 my-lg-0\">\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n                    <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n                  </form>\n                </div>\n              </nav>\n            </div>\n\n            <div class=\"container\">\n            <router-outlet></router-outlet>\n            </div> ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map