import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Flight>('http://www.angular.at/api/flight/3')
      .pipe(
        map(flight => new Date(flight.date)),
        // Hier könnten weitere Operatoren stehen
      )
      .subscribe({
        next: value => console.log('date', value),
        error: err => console.error('error', err),
        complete: () => console.log('complete')
      });

    const subject = new Subject<string>();
    subject.next('A');
    subject.subscribe(value => console.debug('Subject says', value));
    subject.next('B');
    subject.next('C');

    const sender = new BehaviorSubject<string>('init');
    const receiver$ = sender.asObservable();
    receiver$.subscribe(value => console.debug('Subject says', value));
    sender.next('A');
    sender.next('B');
    sender.next('C');

    const simple$ = simpleObservable();
    simple$.subscribe({
      next: value => console.log('next', value),
      error: err => console.error('error', err),
      complete: () => console.log('complete')
    });

    const interval$ = simpleInterval();
    const sub = interval$.subscribe({
      next: value => console.log('next', value),
      error: err => console.error('error', err),
      complete: () => console.log('complete')
    });

    setTimeout(() => sub.unsubscribe(), 2500);
  }

}
