import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

import { UserToken , User } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {}

    decodeUser(token: UserToken) {
        try {
            const decoded:any = jwt_decode(token.accessToken);
            const expirationDate = decoded.exp * 1000;

            // new Date().getTime() = current time
            // decoded.exp * 1000 = when expired

            if (new Date().getTime() > expirationDate) {
                return null;
            }

            this.storeUser(decoded, token);
            return decoded;
        } catch {
            return null;
        }
    }
      // if you wondering where decoded and token are coming from 
      // they from the interface we created on the auth service 
      
    private storeUser(decoded: User , token: UserToken) {
       localStorage.setItem('userData', JSON.stringify(
         {
          email: decoded.email,
          exp: decoded.exp,
          iat: decoded.iat,
          sub: decoded.sub,
          token: token.accessToken
         }
       ));
    }

}
