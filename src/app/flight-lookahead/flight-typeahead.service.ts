import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, interval, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, exhaustMap, filter, map, mergeMap, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';
import { OnlineService } from './online.service';

@Injectable({
  providedIn: 'root'
})
export class FlightLookaheadService {

  readonly flights$: Observable<Flight[]>;
  readonly online$ = this.onlineService.online$;

  private fromSubject = new BehaviorSubject<string>('');

  constructor(
    private flightService: FlightService,
    private onlineService: OnlineService,
    ) {

    const input$ = this.fromSubject.pipe(
      filter(input => input.length >= 3),
      debounceTime(300)
    );

    this.flights$ = combineLatest([input$, this.onlineService.online$]).pipe(
      filter(([_, online]) => online),
      map(([from, _]) => from),
      switchMap(from => this.flightService.find(from, ''))
    );
  }

  search(from: string): void {
    this.fromSubject.next(from);
  }

}
