import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LifecycleComponent} from './components/lifecycle/lifecycle';
import {AppComponent} from "./components/application/application";
import {HomeComponent} from "./components/home/home";
import {ProductsComponent} from "./components/products/products";
import {ServicesComponent} from "./components/services/services";
import {BoatsComponent} from './components/boats/boats.component';
import {CarsComponent} from './components/cars/cars.component';
import {AuthorizeGuard} from "./guards/authorize.guard";
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsResolver} from "./resolvers/contacts.resolver";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent, canActivate: [AuthorizeGuard]},
  {path: 'contacts', component: ContactsComponent, resolve: {contacts: ContactsResolver}},
  {
    path: 'products', component: ProductsComponent,
    children: [
      {path: '', component: CarsComponent},
      {path: 'boats', component: BoatsComponent}
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  declarations: [AppComponent, HomeComponent, ProductsComponent, ServicesComponent, LifecycleComponent, BoatsComponent, CarsComponent, ContactsComponent],
  providers: [AuthorizeGuard, ContactsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
