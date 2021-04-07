// src/app/shared/auth/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  userName: string | null = null;

  constructor() { }

  login(userName: string): void {
    this.userName = userName;
  }

  logout(): void {
    this.userName = null;
  }

}
