// src/app/flight-card/flight-card.component.ts

import { Component, Input } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {

  @Input() item: Flight | null = null;
  @Input() selected = false;

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

}
