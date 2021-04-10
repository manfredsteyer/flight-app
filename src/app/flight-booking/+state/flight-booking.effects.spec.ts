import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FlightBookingEffects } from './flight-booking.effects';

describe('FlightBookingEffects', () => {
  let actions$: Observable<any>;
  let effects: FlightBookingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlightBookingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FlightBookingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
