// src/app/flight-search/flight-search.component.ts

import { Component, Inject, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { FLIGHT_SERVICES } from '../tokens';

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

  constructor(@Inject(FLIGHT_SERVICES) private flightServices: FlightService[]) {
  }

  ngOnInit(): void {
  }

  search(): void {

    this.flights = [];

    const observables = this.flightServices.map(fs => fs.find(this.from, this.to));

    // Ergebnisse der einzelnen Observables mergen
    const observable = merge(...observables);
      // Entspricht merge(observables[0], observables[1], ...)

    observable.subscribe({
      next: (additionalFlights) => {
        this.flights = [...this.flights, ...additionalFlights];
          // Entspricht [this.flights[0], this.flights[1], ..., additionalFlights[0], additionalFlights[1], ...]
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
