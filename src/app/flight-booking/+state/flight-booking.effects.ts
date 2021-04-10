// src/app/flight-booking/+state/flight-booking.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, map, switchMap } from 'rxjs/operators';
import { FlightService } from '../flight.service';
import { flightsLoaded, loadFlights, loadFlightsError } from './flight-booking.actions';

@Injectable()
export class FlightBookingEffects {

  flightsLoad$ = createEffect(() => this.actions$.pipe(
          ofType(loadFlights),
          switchMap(a => this.flightService.find(a.from, a.to).pipe(
            map(flights => flightsLoaded({flights})),
            catchError(error => of(loadFlightsError({error})))
          )),
  ));

  constructor(
    private flightService: FlightService,
    private actions$: Actions) {}

}
