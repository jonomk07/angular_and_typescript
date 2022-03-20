import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';


import { Observable , of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        const user: User = JSON.parse(localStorage.getItem('userData') || '{}');

        if (!user) {
            return this.router.createUrlTree(['login']);
        }

        return this.http.get<boolean>(`http://localhost:3000/users/${user.sub}`).pipe(
            catchError( (err: HttpErrorResponse) => {
                this.router.createUrlTree(['login']);
                return of(false);
            }),
            map( data => {
                if (data) {
                    return true;
                }
                return this.router.createUrlTree(['login']);
            })
        );
    }
}

