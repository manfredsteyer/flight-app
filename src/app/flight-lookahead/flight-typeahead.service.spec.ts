/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { BehaviorSubject, interval, Observable, of, timer } from 'rxjs';
import { delay, first, map, mapTo, shareReplay, startWith, take, tap } from 'rxjs/operators';
import { DummyFlightService } from '../flight-booking/dummy-flight.service';
import { FlightService } from '../flight-booking/flight.service';
import { FlightLookaheadService } from './flight-typeahead.service';
import { OnlineService } from './online.service';

import { cold, hot } from 'jasmine-marbles';
import { marbles } from 'rxjs-marbles';
import { Flight } from '../flight-booking/flight';

@Injectable()
class DummyOnlineService {
  //online$ = new BehaviorSubject<boolean>(true);

  // Das geht:
  // online$ = cold('f 500ms t', { f: false, t: true})
  //   .pipe(shareReplay({refCount:true, bufferSize: 1}));

  //innerOnline$ = cold('t', { f: false, t: true});

  //online$ = timer(2000).pipe(startWith(true), mapTo(true), shareReplay({refCount:true, bufferSize: 1}));
  online$ = cold('t 2000ms', {t: true}).pipe(shareReplay({refCount:true, bufferSize: 1}));

  // Das geht nicht (da wird über flights$ nichts emitted):
  // online$ = hot('^f 500ms t', { f: false, t: true});
    // Wie bekomme ich übrigens ein hot multicast observable?
}


fdescribe('FlightLookaheadService', () => {
  let service: FlightLookaheadService;



  beforeEach(marbles((m) => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OnlineService, useClass: DummyOnlineService },
        { provide: FlightService, useClass: DummyFlightService },
      ]
    });

    service = TestBed.inject(FlightLookaheadService);
  }));

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

  it('should not debounce (marbles)', marbles((m) => {

    cold('G 310ms W', {G: 'Graz', W: 'Wien'}).subscribe(v =>
      service.search(v)
    );

    const expected = {
      G: JSON.stringify(['Graz', 'Graz', 'Graz']),
      W: JSON.stringify(['Wien', 'Wien', 'Wien'])
    };

    const toCityList = (flights: Flight[]) => JSON.stringify(
        flights.map(f => f.from)
    );

    m.expect(service.flights$.pipe(map(f => toCityList(f)))).toBeObservable('300ms G 310ms W', expected);

  }));


  it('should not debounce (marbles2)', marbles((m) => {

    service.search('');
    cold('500ms G 310ms W', {G: 'Graz', W: 'Wien'}).subscribe(v =>
      service.search(v)
    );

    const expected = {
      G: JSON.stringify(['Graz', 'Graz', 'Graz']),
      W: JSON.stringify(['Wien', 'Wien', 'Wien'])
    };

    const toCityList = (flights: Flight[]) => JSON.stringify(
        flights.map(f => f.from)
    );

    m.expect(service.flights$.pipe(map(f => toCityList(f)))).toBeObservable('500ms 300ms G 310ms W', expected);

  }));

  fit('should unsubscribe', marbles((m) => {

    // service.search('Graz');
    // const sub = service.flights$.subscribe();
    // cold('----').subscribe(x => {
    //   sub.unsubscribe();
    // });

    const onlineService = TestBed.inject(OnlineService);
    m.expect(onlineService.online$).toBeObservable('t---|', {t:true});

  }));

});




