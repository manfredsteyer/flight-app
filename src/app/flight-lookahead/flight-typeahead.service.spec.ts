import { Injectable } from '@angular/core';
import { fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { DummyFlightService } from '../flight-booking/dummy-flight.service';
import { FlightService } from '../flight-booking/flight.service';
import { FlightLookaheadService } from './flight-typeahead.service';
import { OnlineService } from './online.service';

@Injectable()
class DummyOnlineService {
  online$ = new BehaviorSubject<boolean>(true);
}

fdescribe('FlightLookaheadService', () => {
  let service: FlightLookaheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OnlineService, useClass: DummyOnlineService },
        { provide: FlightService, useClass: DummyFlightService },
      ]
    });

    service = TestBed.inject(FlightLookaheadService);
  });

  it('should load flights', waitForAsync(() => {

    service.flights$.subscribe(flights => {
      expect(flights.length).toBe(3);
      expect(flights[0].from).toBe('Wien');
    });

    service.search('Wien');

  }));

  it('should load flights (done)', (done: DoneFn) => {

    let counter = 0;
    service.flights$.subscribe(flights => {
      counter++;
      expect(flights.length).toBe(3);
      expect(flights[0].from).toBe('Wien');
      done();
    });

    service.search('Wien');

  });


  it('should debounce', fakeAsync(() => {

    let counter = 0;
    service.flights$.subscribe(flights => {
      counter++;
      expect(flights.length).toBe(3);
      expect(flights[0].from).toBe('Wien');
    });

    service.search('Graz');
    tick(200);
    service.search('Wien');
    tick(400); // e. g. promises

    // flushMicrotasks(); // e. g. setTimeout, event handlers

  }));

  it('should not debounce', fakeAsync(() => {

    let counter = 0;
    service.flights$.subscribe(flights => {
      counter++;
      expect(flights.length).toBe(3);

      if (counter === 1) {
        expect(flights[0].from).toBe('Graz');
      }

      if (counter === 2) {
        expect(flights[0].from).toBe('Wien');
      }
    });

    service.search('Graz');
    tick(400);
    service.search('Wien');
    tick(400);

  }));


});
