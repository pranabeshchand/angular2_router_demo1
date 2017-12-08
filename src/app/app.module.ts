import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent }  from './app.component';
import { HomeComponent } from "./home.component";
import { AboutComponent }  from './about.component';
import { ServicesComponent }  from './services.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,routes ],
  declarations: [ AppComponent,AboutComponent ,ServicesComponent,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
