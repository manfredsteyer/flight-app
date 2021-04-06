// src/app/flight.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultFlightService } from './default-flight.service';
import { Flight } from './flight';
import { FlightBookingApiModule } from './flight-booking-api.module';
import { FlightBookingModule } from './flight-booking.module';

@Injectable({
  providedIn: 'root',
  // Auf das Api-Modul des lazy Moduls verweisen:
  useClass: FlightBookingApiModule
})
export abstract class FlightService {

  // Hinzufügen
  abstract readonly flights$: Observable<Flight[]>;
  abstract load(from: string, to: string): void;
  abstract delay(): void;

  // Die Methode find ist nun abstrakt:
  abstract find(from: string, to: string): Observable<Flight[]>;

}
