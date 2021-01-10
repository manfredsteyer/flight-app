// src/app/flight-search/flight-search.component.ts

import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightClass } from '../flight-class';
import { FlightService } from '../flight.service';
import { LuggageOption } from '../luggage-option';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  delayFilter = false;

  nonstop = false;

  flightClasses: FlightClass[] = [
    { id: 1, name: '1st Class' },
    { id: 2, name: 'Business Class' },
    { id: 3, name: 'Economy Class' }
  ];

  flightClass = this.flightClasses[2];

  basket: { [key: number]: boolean } = {
    3: true,
    5: true
  };

  luggageOptions: LuggageOption[] = [
    { id: 0, name: 'No luggage' },
    { id: 1, name: '1 piece of luggage' },
    { id: 2, name: '2 pieces of luggage' }
  ];

  luggage = this.luggageOptions[2];

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
  }

  search(): void {


    console.debug('search', this);

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => {
        console.debug('Error', err);
      }
    });

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
