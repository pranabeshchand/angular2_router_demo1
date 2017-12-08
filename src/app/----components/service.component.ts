import { Component } from '@angular/core';

@Component({
  selector: 'service',
  template: `
  


  <h1>Hello {{name}}</h1>`,
})
export class ServiceComponent  { name = 'Service'; }
