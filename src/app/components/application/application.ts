import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  template: `<div>
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/services']">Services</a>
    <a [routerLink]="['/contacts']">Contacts</a>
    <input type="button" value="Product Page"
           (click)="navigateToProducts()"/>
    <input type="button" value="Services Page"
           (click)="navigateByUrlToServices()"/><br><br>
    <router-outlet></router-outlet>
    
    <app-lifecycle></app-lifecycle>
  </div>`,
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['application.css']
})
export class AppComponent implements OnInit {
  events: Observable<any>;
  constructor(private _router: Router) {
    console.log("CONSTRUCTOR  - AppComponent");
    console.log("_router.url: " + _router.url);
    console.log("_router.routerState: " + _router.routerState);
    console.log("_router.config: " + JSON.stringify(_router.config));

    this.events = this._router.events;
  }

  ngOnInit() {
   // this.events.subscribe(data=>console.log("SUBSCRIBED DATA: "+ data));
  }

  navigateToProducts() {
    console.log("Inside AppComonent.navigateToProducts()");
    this._router.navigate(["/products"]);
  }

  navigateByUrlToServices() {
    console.log("Inside AppComonent.navigateByUrlToServices()");
    this._router.navigateByUrl("/services", { skipLocationChange: true });
  }
}


