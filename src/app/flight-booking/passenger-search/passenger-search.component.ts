import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.scss']
})
export class PassengerSearchComponent implements OnInit {

  userName = this.authService.userName;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
