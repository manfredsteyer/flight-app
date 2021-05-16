import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FlightLookaheadService } from './flight-typeahead.service';

@Component({
    selector: 'app-flight-typeahead',
    templateUrl: './flight-typeahead.component.html'
})
export class FlightLookaheadComponent implements OnInit {

    flights$ = this.service.flights$;
    online$ = this.service.online$;
    error$ = this.service.error$;

    control = new FormControl();

    constructor(private service: FlightLookaheadService) {
    }

    ngOnInit(): void {
        this.control.valueChanges.subscribe(from => {
            this.service.search(from);
        });
    }

    refresh(): void {
        this.service.refresh();
    }

}
