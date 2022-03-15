import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      delay(1000),
      tap( val => this.isLoggedIn )
    );
  }


}
