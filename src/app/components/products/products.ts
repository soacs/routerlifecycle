import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'products',
  template: `<div>
    <h1>Products Component</h1>This is content of the products.<br><br><br><br><br>
    <a [routerLink]="['./']">cars</a>     <a [routerLink]="['./boats']">boats</a><br><br>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['products.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductsComponent {
  constructor(private router: Router){
    console.log("CONSTRUCTOR  - ProductsComponent");
    console.log("router.url: " + router.url);
  }
}
