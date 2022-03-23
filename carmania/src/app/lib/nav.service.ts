import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Nav {
  path: string;
  name: string;
  exact: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class NavService {
  sidenavStatus = new BehaviorSubject<boolean>(false);
  routes: Nav[] = [
    { path: '', name: 'Home', exact: true },
    { path: 'articles', name: 'Articles', exact: false },
    { path: 'contact', name: 'Contact', exact: false }
  ];

  toggleSidenav() {
    this.sidenavStatus.next(!this.sidenavStatus.value);
    console.log(this.sidenavStatus.value);
  }
}
