// src/app/flight.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { Flight } from './flight';
import { flightServiceObject } from './flight-service-object';


@Injectable({
  providedIn: 'root',
  useValue: flightServiceObject
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
