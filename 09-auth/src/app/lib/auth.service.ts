import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserService } from './user.service';


interface UserData {
  email: string;
  password: string;
}

export interface UserToken {
  accessToken: string;
}

export interface User {
  email: string;
  exp: number;
  iat: number;
  sub: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userChange = new BehaviorSubject<User|any>(null);

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  register(data: UserData) {
    return this.http.post<UserToken>('http://localhost:3000/api/auth/register', {
      email: data.email,
      password: data.password
    }).pipe(
      catchError(this.handleErrors),
      tap(response => {
        const user = this.userService.decodeUser(response);
        this.userChange.next(user);
        // console.log(response);
      }),
     
    )
  }


  login(data: UserData) {
    return this.http.post<UserToken>('http://localhost:3000/login', {
      email: data.email,
      password: data.password
    }).pipe(
      catchError(this.handleErrors),
      tap(response => {
        const user = this.userService.decodeUser(response);
        this.userChange.next(user);
      }),
    )
  }

  handleErrors(errObject: HttpErrorResponse) {
    if (errObject.status === 0 ){
      return throwError('Server is not available, try again later');
    }
    return throwError(errObject.error);
  }

  autoLogin() {

    // If you are confident that the localStorage.getItem() call can never 
    // return null you can use the non-null (!) assertion operator to tell typescript 
    // that you know what you are doing:
    // const loadUser = JSON.parse(localStorage.getItem('userData')!);
    
    const loadUser = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!loadUser) {
        // check if we do have something on the local storage, if no we exit.
        return;
    }

    const expirationDate = loadUser.exp * 1000;
    if (new Date().getTime() < expirationDate && loadUser) {
        this.userChange.next(loadUser);
    } else {
        ///  since the token is not valid anumore we clear the DATA
        this.logoutUser();
    }
    /// IF YOU HAD A REFRESHTOKEN
    /// make a request with the refresh token.
        // get a new token back..and start the whole process again

        /// const user = this.userService.decodeUser(response);
        /// this.userChange.next(user);
}

  logoutUser() {
    localStorage.removeItem('userData');
    this.userChange.next(null);
}

}