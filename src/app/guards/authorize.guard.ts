import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizeGuard implements CanActivate {

  canActivate() {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {

    let isAuthorized: boolean = Math.random() < 0.5;
    console.log("isAuthorized = " + isAuthorized);

    if (!isAuthorized) {
      console.log("AuthorizeGuard: The user is not authorized and can't navigate to billing page");
    }
    return isAuthorized;
  }
}
