import { Component } from '@angular/core';

@Component({
  selector: 'about-app',
  template: `
  

  <h1>Hello {{name}}</h1>`,
})
export class HomeComponent  { 
name: string;
 constructor(){
 this.name = 'Home';
 }
 }
