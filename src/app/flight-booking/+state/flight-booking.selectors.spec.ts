import * as fromFlightBooking from './flight-booking.reducer';
import { selectFlightBookingState } from './flight-booking.selectors';

describe('FlightBooking Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFlightBookingState({
      [fromFlightBooking.flightBookingFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
