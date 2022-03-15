import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivateComponent {
  candDeactivate: () => boolean;
}


@Injectable ({
  providedIn: 'root'
})

export class CanDeactivateService implements CanDeactivate<DeactivateComponent> {
  canDeactivate(
    component: DeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.candDeactivate();
  }
}