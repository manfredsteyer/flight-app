// src/app/flight-search/flight-search.component.ts

import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

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
  delayFilter = false;

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {

    this.flightService.find(this.from, this.to).subscribe({
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
