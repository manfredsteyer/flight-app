// src/app/shared/custom-preloading.strategy.ts

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data?.preload) {
      // Preloading anstoßen
      return fn();
    }
    // Kein Preloading anstoßen
    // Dummy-Observable zurückliefern
    return of([]);
  }
}
