// src/app/flight.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';
import { createFlightService } from './flight-service.factory';

@Injectable({
  // providedIn: 'root',
  // useFactory: createFlightService,
  // deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
