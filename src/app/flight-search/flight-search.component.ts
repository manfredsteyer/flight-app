// src/app/flight-search/flight-search.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { DummyFlightService } from '../dummy-flight.service';
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

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(@Inject(FlightService) private flightServices: FlightService[]) {
  }

  ngOnInit(): void {
  }

  simpleSearch(): void {

    this.flights = [];

    const observables = [
      this.flightServices[0].find(this.from, this.to),
      this.flightServices[1].find(this.from, this.to),
    ];

    const observable = merge(observables[0], observables[1]);

    observable.subscribe({
      next: (additionalFlights) => {
        this.flights = [...this.flights, ...additionalFlights];
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });

  }

  search(): void {

    this.flights = [];

    const observables = this.flightServices.map(fs => fs.find(this.from, this.to));
    const observable = merge(...observables);
      // merge(observables[0], observables[1], ...)

    observable.subscribe({
      next: (additionalFlights) => {
        this.flights = [...this.flights, ...additionalFlights];
          // [this.flights[0], this.flights[1], ..., additionalFlights[0], additionalFlights[1], ...]
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
