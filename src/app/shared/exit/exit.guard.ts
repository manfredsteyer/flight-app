// src/app/shared/exit/exit.guard.ts

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanExit {
  canExit(): Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CanExit> {
  canDeactivate(
    component: CanExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): Observable<boolean> {

    return component.canExit();
  }
}
