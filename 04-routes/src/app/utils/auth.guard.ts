import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router
    ) { }

  canActivate(
    next : ActivatedRouteSnapshot,
    state : RouterStateSnapshot

  ): boolean | Observable<boolean>  {
    return this.authService.login().pipe(
      map( isAuth => {
        if(isAuth) {
         console.log(isAuth);
          return isAuth
        } else {
          this.router.navigate(['/users']);
        }
        return isAuth
      })
    );
  }

canActivateChild(
  route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot

  ): boolean | Observable<boolean> {
    return this.canActivate(route, state);
  }

}