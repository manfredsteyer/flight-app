import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, interval, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';

@Component({
    selector: 'app-flight-typeahead',
    templateUrl: './flight-typeahead.component.html'
})
export class FlightLookaheadComponent implements OnInit {

    // Quellen
    control = new FormControl();
    input$ = this.control.valueChanges;

    // Nicht schön. Wir reden später darüber.
    online = false;

    online$ = interval(2000).pipe(
        startWith(-1),
        map(() => Math.random() < 0.5),
        distinctUntilChanged(),
        tap(online => {
            this.online = online;
        })
    );

    // Ziel
    flights$: Observable<Flight[]>;

    constructor(private flightService: FlightService) {

        const debouncedInput$ = this.input$.pipe(
            filter(value => value.length >= 3),
            debounceTime(300),
        );

        this.flights$ = combineLatest([debouncedInput$, this.online$]).pipe(
            filter(([_, online]) => online),
            map(([input, _]) => input),
            switchMap(input => this.load(input))
        );

    }

    // Noch eine Quelle
    load(from: string): Observable<Flight[]> {
        return this.flightService.find(from, '');
    }

    ngOnInit(): void {
    }

}
