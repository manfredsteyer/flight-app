// src/app/flight-search/flight-search.component.ts

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';

  // Entfernen:
  // flights: Array<Flight> = [];

  // Hinzufügen:
  flights$ = this.flightService.flights$;

  selectedFlight: Flight | null = null;
  delayFilter = false;

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {

    // Entfernen:
    // this.flightService.find(this.from, this.to).subscribe({
    //  [...]
    // });

    // Hinzufügen:
    this.flightService.load(this.from, this.to);

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  delay(): void {
    this.flightService.delay();
  }

}
