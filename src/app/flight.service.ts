// src/app/flight.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root',
  // Diese Umleitung hinzufügen:
  useClass: DefaultFlightService
})
export abstract class FlightService {

  // Die Methode find ist nun abstrakt:
  abstract find(from: string, to: string): Observable<Flight[]>;

}
