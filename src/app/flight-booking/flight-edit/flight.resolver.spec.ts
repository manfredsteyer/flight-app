import { TestBed } from '@angular/core/testing';

import { FlightResolver } from './flight.resolver';

describe('FlightResolver', () => {
  let resolver: FlightResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FlightResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
