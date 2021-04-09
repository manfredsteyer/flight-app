// src/app/shared/auth/auth.interceptor.ts

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (req.url.startsWith('http://www.angular.at')) {
          const headers = req.headers.set('Authorization', 'EXAMPLE_ACCESS_TOKEN');
          req = req.clone({ headers });
      }

      return next.handle(req).pipe(
          catchError(resp => this.handleError(resp))
      );
  }

  handleError(resp: HttpErrorResponse): Observable<HttpEvent<any>> {

      if (resp.status === 401 || resp.status === 403) {
          this.router.navigate(['/home', {needsLogin: true}]);
      }
      return throwError(resp);

  }
}
