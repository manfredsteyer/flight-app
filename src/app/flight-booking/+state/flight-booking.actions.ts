// src/app/flight-booking/+state/flight-booking.actions.ts

import { createAction, props } from '@ngrx/store';
import { Flight } from '../flight';

export const loadFlights = createAction(
  '[FlightBooking] loadFlights',
  props<{from: string; to: string}>()
);

export const flightsLoaded = createAction(
  '[FlightBooking] flightsLoaded',
  props<{flights: Flight[]}>()
);

export const loadFlightsError = createAction(
  '[FlightBooking] loadFlightsError',
  props<{error: unknown}>()
);
