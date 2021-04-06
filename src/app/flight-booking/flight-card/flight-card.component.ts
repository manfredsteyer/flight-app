// src/app/flight-card/flight-card.component.ts

import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, Host, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnInit, OnChanges {

  @Input() item: Flight | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(
    private host: ElementRef,
    private ngZone: NgZone) {
    console.debug('ctor', this.item);
  }

  ngOnInit() {
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.debug('ngOnChanges', this.item);

    if (changes.item) {
      console.debug('ngOnChanges: item');
    }
    if (changes.selected) {
      console.debug('ngOnChanges: selected');
    }
  }

  select() {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(false);
  }

  blink(): void {
    // Unorthodox code for visualizing Change Detection
    //  don't use it in production ...
    this.host.nativeElement.firstChild.style = 'background-color: crimson';

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.host.nativeElement.firstChild.style = '';
      }, 500);
    });
  }

}
