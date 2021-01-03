// src/app/flight.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from './flight';


@Injectable()
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
