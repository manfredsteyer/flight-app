// src/app/flight-booking/+state/flight-booking.reducer.ts

import { Action, createReducer, on } from '@ngrx/store';
import { Flight } from '../flight';
import * as FlightBookingActions from './flight-booking.actions';

export const flightBookingFeatureKey = 'flightBooking';

export interface FlightBookingAppState {
  [flightBookingFeatureKey]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  loading: boolean;
  error: unknown;
  hide: number[];
}

export const initialState: FlightBookingState = {
  flights: [],
  loading: false,
  error: {},
  hide: [4]
};


export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.flightsLoaded, (state, action) => {
    const flights = action.flights;
    const loading = false;
    return {...state, flights, loading};
  }),

  on(FlightBookingActions.loadFlights, (state, action) => {
    const flights = [] as Flight[];
    const loading = false;
    return {...state, flights, loading};
  }),

  on(FlightBookingActions.loadFlightsError, (state, action) => {
    const flights = [] as Flight[];
    const loading = false;
    const error = action.error;
    return {...state, flights, loading, error};
  }),
);

