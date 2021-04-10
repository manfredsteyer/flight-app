import * as fromFlightBooking from './flight-booking.actions';

describe('loadFlightBookings', () => {
  it('should return an action', () => {
    expect(fromFlightBooking.flightsLoaded().type).toBe('[FlightBooking] Load FlightBookings');
  });
});
