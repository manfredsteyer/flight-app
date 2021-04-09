// src/app/flight-booking/flight-edit/flight.resolver.ts

import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Flight } from '../flight';
import { FlightBookingApiModule } from '../flight-booking-api.module';
import { FlightService } from '../flight.service';

@Injectable({
  //providedIn: 'root'
  providedIn: FlightBookingApiModule
})
// Resolve<Flight> nach implements angeben:
export class FlightResolver implements Resolve<Flight> {

  constructor(private flightService: FlightService) {
  }

  // Resolve<Flight> als Rückgabetyp angeben:
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
    const id = route.params.id;
    return this.flightService.findById(id); //.pipe(delay(7000));
  }
}
