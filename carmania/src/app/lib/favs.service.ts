import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  constructor(
    private cookieService: CookieService
  ) {}

  checkFavState(postId: number) {
    // Check if POST ID is on the list
    if (this.checkFavExists(postId)) {
      return false; // ALREADY IN, DISABLE BUTTON
    } else {
      return true; // NOT IN, ENABLE BUTTON
    }
  }

  onToggleFav(postId: number) {
    let state: boolean;
    const allCookies = JSON.parse(this.cookieService.get('favs'));
    if (!this.checkFavExists(postId)) {
      // Add to favs
      allCookies.push(postId);
      state = false ;
    } else {
      // Remove from favs
      allCookies.splice( allCookies.indexOf(postId), 1);
      state = true ;
    }

    // set new state of favs
    this.cookieService.set('favs', JSON.stringify(allCookies));
    return state; // ENABLE / DISABLE BUTTON
  }


  getAllCookies() {
    // Get the favs, if does't exists, create an empty []
    if (this.cookieService.check('favs')) {
      return JSON.parse(this.cookieService.get('favs'));
    } else {
      this.cookieService.set('favs', '[]');
      return [];
    }
  }

  checkFavExists(postId: number) {
    const allCookies = this.getAllCookies();
    return allCookies.includes(postId);
  }


}
