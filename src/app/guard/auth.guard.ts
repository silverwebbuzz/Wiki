import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Constants } from '../interface/constants.models';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  isLoggedIn = false;
  user_details = null;
  constructor(public auth: AuthenticationService, private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.user_details = JSON.parse(window.localStorage.getItem(Constants.USER_DETAILS));
    if(this.user_details){
      return true;
    }

    console.log('logim:',this.user_details);

    this.router.navigate(['/login']);
        return false;
  }
  
}
