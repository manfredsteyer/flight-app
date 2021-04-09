// src/app/shared/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthService {

  get userName(): string | null {
    const claims = this.oauthService.getIdentityClaims() as any;
    if (!claims) {
      return null;
    }

    return claims.given_name;
  }

  constructor(private oauthService: OAuthService) { }

  login(userName: string): void {
    this.oauthService.initLoginFlow();
  }

  logout(): void {
    this.oauthService.logOut();
  }

}
