import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { Constants } from '../interface/constants.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router:Router) {
    interval(1000).subscribe(x=>{
      this.isLogin();
    });
   }

  isLogin(){
    const user = window.localStorage.getItem(Constants.USER_DETAILS);
    if(user){
      this.isLoggedIn.next(true);
    }else{
      this.isLoggedIn.next(false);
    }
  }

  logOut(){
    window.localStorage.removeItem(Constants.USER_DETAILS);
    this.router.navigate(['/login']);
  }
}
