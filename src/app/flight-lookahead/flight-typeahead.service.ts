/* eslint-disable @typescript-eslint/member-ordering */

// src\app\flight-lookahead\flight-typeahead.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';
import { OnlineService } from './online.service';

@Injectable({
  providedIn: 'root'
})
export class FlightLookaheadService {

  // Datenquellen
  private fromSubject = new BehaviorSubject<string>('');
  private refreshSubject = new Subject<void>();
  readonly online$ = this.onlineService.online$;

  // Datensenken
  readonly flights$: Observable<Flight[]>;
  errorSubject = new Subject<unknown>();
  readonly error$ = this.errorSubject.asObservable();

  constructor(
    private flightService: FlightService,
    private onlineService: OnlineService,
    ) {

    const debouncedInput$ = this.fromSubject.pipe(
      filter(input => input.length >= 3),
      debounceTime(300)
    );

    const inputRequest$ = combineLatest([debouncedInput$, this.online$]);

    const refreshRequest$ = this.refreshSubject.pipe(
        switchMap(_ => this.fromSubject),
        withLatestFrom(this.online$)
    );

    this.flights$ = merge(
        inputRequest$,
        refreshRequest$,
    ).pipe(
        filter(([_, online]) => online),
        map(([input, _]) => input),
        switchMap(input => this.load(input))
    );

  }

  search(from: string): void {
    this.fromSubject.next(from);
  }

  refresh(): void {
    this.refreshSubject.next();
  }

  private load(from: string) {
    return this.flightService.find(from, '').pipe(
      catchError(err => {
        this.errorSubject.next(err);
        return of([]);
      })
    );
  }

}
