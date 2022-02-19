// src/app/flight-search/flight-search.component.ts

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFlights } from '../+state/flight-booking.actions';
import { FlightBookingAppState, flightBookingFeatureKey } from '../+state/flight-booking.reducer';
import { selectFlights, selectFlightsWithParams } from '../+state/flight-booking.selectors';
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
  flights$ = this.store.select(selectFlightsWithParams([5]));

  selectedFlight: Flight | null = null;
  delayFilter = false;

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private store: Store<FlightBookingAppState>,
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
    // this.flightService.load(this.from, this.to);

    this.store.dispatch(loadFlights({from: this.from, to: this.to}));

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  delay(): void {
    this.flightService.delay();
  }

}
