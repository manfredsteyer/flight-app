// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get userName(): string | null {
    return this.authService.userName;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login('Max');
  }

  logout(): void {
    this.authService.logout();
  }

}
