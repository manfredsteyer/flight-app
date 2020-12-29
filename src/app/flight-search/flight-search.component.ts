// src/app/flight-search/flight-search.component.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;

  date: string = new Date().toISOString();


  basket: any = {
    3: true,
    5: true
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.createDemoFlight();
  }

  createDemoFlight(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const newFlight: Flight = {
      id: 0,
      from: 'Gleisdorf',
      to: 'Graz',
      date: new Date().toISOString()
    };

    this.http.post<Flight>(url, newFlight, { headers }).subscribe({
      next: (flight) => {
        console.debug('Neue Id: ', flight.id);
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });
  }

  search(): void {

    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    this.http.get<Flight[]>(url, {headers, params}).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
