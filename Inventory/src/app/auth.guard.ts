import { Injectable } from "@angular/core";
import { AuthService } from "./shared/auth/auth.service";

import { CanActivate, Router } from "@angular/router";
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
     
      return true;
    } else {
    
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
