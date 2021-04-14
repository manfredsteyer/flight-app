// src/app/dummy-flight.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 1, from, to: 'Flagranti', date: '2022-01-02T19:00+01:00' },
      { id: 2, from, to: 'Kognito', date: '2022-01-02T19:30+01:00' },
      { id: 3, from, to: 'Mallorca', date: '2022-01-02T20:00+01:00' }
    ]);
  }
}
