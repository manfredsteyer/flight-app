import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Flight } from '../flight-booking/flight';
import { FlightService } from '../flight-booking/flight.service';

@Component({
    selector: 'app-flight-typeahead',
    templateUrl: './flight-typeahead.component.html'
})
export class FlightLookaheadComponent implements OnInit {

    // Quelle
    control = new FormControl();
    input$ = this.control.valueChanges;

    // Ziel
    flights$: Observable<Flight[]>;

    constructor(private flightService: FlightService) {
        this.flights$ = this.input$.pipe(
            filter(value => value.length >= 3),
            debounceTime(300),
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
