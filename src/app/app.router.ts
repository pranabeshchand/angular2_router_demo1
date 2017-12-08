import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { ServicesComponent } from "./services.component";

export const router: Routes = [
//{path: "",redirectTo: 'home', pathMatch:"full"},
{path: "",component: HomeComponent},
{path: "about",component: AboutComponent},
{path: "services",component: ServicesComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);