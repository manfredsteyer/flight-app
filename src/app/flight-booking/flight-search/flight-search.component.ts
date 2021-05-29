// src/app/flight-search/flight-search.component.ts

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightSearchComponent implements OnInit, OnDestroy {

  closeSubject = new Subject<void>();

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
    private translate: TranslateService,
    private flightService: FlightService) {
  }

  ngOnDestroy(): void {
    this.closeSubject.next();
  }

  ngOnInit(): void {
    this.translate.get('flights.info').pipe(
      takeUntil(this.closeSubject)
    )
    .subscribe(
      info => console.debug('info', info)
    );

    this.translate.get('flights.found', { count: 0 }).pipe(
      takeUntil(this.closeSubject)
    )
    .subscribe(
      found => console.debug('found', found)
    );
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
