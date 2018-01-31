import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'home',
  template: '<h1>Home Component</h1><div>This is content of the home.<br><br><br><br><br></div>',
  styleUrls: ['home.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {

  constructor(){
    console.log("CONSTRUCTOR  - HomeComponent");
  }
}
