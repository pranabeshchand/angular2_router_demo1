"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var services_component_1 = require("./services.component");
exports.router = [
    //{path: "",redirectTo: 'home', pathMatch:"full"},
    { path: "", component: home_component_1.HomeComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "services", component: services_component_1.ServicesComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map