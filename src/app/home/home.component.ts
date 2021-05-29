// src/app/home/home.component.ts

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, interval, merge, Observable, of, ReplaySubject, Subject, throwError, timer } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, filter, map, take, tap } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { simpleInterval, simpleObservable } from '../shared/observable-factories';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function timerAsPromise(time: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {

    if (time < 0) {
      reject();
    }

    setTimeout(() => resolve(time), time);
  });
}

from(timerAsPromise(500)).pipe(
  map(msec => msec / 1000)
)
.subscribe(v => console.debug('sec', v));

const promise = interval(500).pipe(take(4)).toPromise();
promise.then(v => console.debug('promise', v));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // this.http.get<Flight>('http://www.angular.at/api/flight/3')
    //   .pipe(
    //     map(flight => new Date(flight.date)),
    //     // Hier könnten weitere Operatoren stehen
    //   )
    //   .subscribe({
    //     next: value => console.log('date', value),
    //     error: err => console.error('error', err),
    //     complete: () => console.log('complete')
    //   });

    // const subject = new Subject<string>();
    // subject.next('A');
    // subject.subscribe(value => console.debug('Subject says', value));
    // subject.next('B');
    // subject.next('C');

    // const sender = new BehaviorSubject<string>('init');
    // const receiver$ = sender.asObservable();
    // receiver$.subscribe(value => console.debug('Subject says', value));
    // sender.next('A');
    // sender.next('B');
    // sender.next('C');

    // const simple$ = simpleObservable();
    // simple$.subscribe({
    //   next: value => console.log('next', value),
    //   error: err => console.error('error', err),
    //   complete: () => console.log('complete')
    // });

    // const interval$ = simpleInterval();
    // const sub = interval$.subscribe({
    //   next: value => console.log('next', value),
    //   error: err => console.error('error', err),
    //   complete: () => console.log('complete!!!')
    // });

    // setTimeout(() => sub.unsubscribe(), 2500);

    // of(4711).subscribe(v => console.log(v));

    // throwError('Need Coffee!').subscribe({
    //   next: (next) => console.error('next', next),
    //   error: (err) => console.error('err', err),
    //   complete: () => console.log('complete')
    // });

    // interval(1000).pipe(take(5)).subscribe(v => console.log(v));

    // from([1, 2, 3]).subscribe(v => console.log('next', v));

    // interval(200).pipe(
    //   take(5),
    //   debounceTime(300)
    // ).subscribe(v => console.log(v));

    // interval(200).pipe(
    //   take(5),
    //   filter(v => v % 2 === 0)
    // ).subscribe(v => console.log(v));

    // from([1, 1, 2, 2, 1]).pipe(
    //   distinctUntilChanged()
    // )
    // .subscribe(v => console.log('after distinct', v));

    // merge(
    //   from([1, 2, 3]),
    //   from([4, 5, 6])
    // ).subscribe(v => console.log(v));

    // interval(200    ).pipe(
    //   take(5),
    //   delay(2000),
    //   tap(v => console.debug('before filter', v)),
    //   filter(v => v % 2 === 0)
    // ).subscribe(v => console.log(v));

  }

}

