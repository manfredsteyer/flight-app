import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Flight } from '../flight';
import * as fromFlightBooking from './flight-booking.reducer';
import { FlightBookingAppState, flightBookingFeatureKey } from './flight-booking.reducer';

export const selectFlightBookingState = createFeatureSelector<fromFlightBooking.FlightBookingState>(
  fromFlightBooking.flightBookingFeatureKey
);

export const selectAllFlights = createSelector(
  selectFlightBookingState,
  fbs => fbs.flights
);

export const selectFlightsToHide = createSelector(
  selectFlightBookingState,
  fbs => fbs.hide
);

export const selectFilteredFlights = createSelector(
  selectAllFlights,
  selectFlightsToHide,
  (flights, hide) => flights.filter(f => !hide.includes(f.id))
);


export const selectFlights = createSelector(
  (appState: FlightBookingAppState) => appState[flightBookingFeatureKey].flights,
  (appState: FlightBookingAppState) => appState[flightBookingFeatureKey].hide,
  (flights, hide) => flights.filter(f => !hide.includes(f.id))
);

export const selectFlightsWithParams = createSelector<FlightBookingAppState, number[], Flight[], number[], Flight[]>(
  (appState) => appState[flightBookingFeatureKey].flights,
  (appState) => appState[flightBookingFeatureKey].hide,
  (flights, hide, props) => flights.filter(f => !hide.includes(f.id) && !props.includes(f.id))
);
