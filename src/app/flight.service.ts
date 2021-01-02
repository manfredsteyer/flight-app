// src/app/flight.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { Flight } from './flight';


@Injectable()
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
