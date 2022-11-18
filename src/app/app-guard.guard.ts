import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
       let user_logged = true// services logged in or not 
       if(user_logged){
         return true
       } else{
         this.router.navigate(["login"])
      };
      return false
  }
  
}
