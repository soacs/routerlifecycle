import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'services',
  template: '<h1>Services Component</h1><div>This is content of the services.<br><br><br><br><br></div>',
  styleUrls: ['services.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServicesComponent {
  constructor(){
    console.log("CONSTRUCTOR  - ServicesComponent");
  }
}

