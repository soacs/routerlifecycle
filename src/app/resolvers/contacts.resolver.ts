
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

class StartupData {
  todaysDate: Date;
  contactList =  [{name: "John", phone: "212-456-6767"}, {name: "Peter", phone: "212-777-9999"}];

  constructor(){
  }
    fetchData() {
      return this.contactList;
  }
}

@Injectable()
export class ContactsResolver implements Resolve<any> {

  startup = new StartupData();

  constructor() {
    console.log("BEGIN constructor of ContactsResolver");
    console.log("END constructor of ContactsResolver");
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    console.log("BEGIN ContactseResolver");
    return this.startup.fetchData();
  }
}
