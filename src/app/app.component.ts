// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hello World!';
  showWaitInfo = false;

  constructor(
    private oauthService: OAuthService,
    private router: Router) {

      oauthService.configure(authConfig);
      oauthService.loadDiscoveryDocumentAndTryLogin();

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showWaitInfo = true;
      }
      else if (event instanceof NavigationEnd
        || event instanceof NavigationCancel
        || event instanceof NavigationError) {
        this.showWaitInfo = false;
      }
    });
  }
}
