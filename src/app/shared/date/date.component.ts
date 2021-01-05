import { Component, Input, OnInit, OnChanges, EventEmitter, Output, SimpleChanges }
  from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit, OnChanges {

  @Input() date: string | null = null;
  @Output() dateChange = new EventEmitter<string>();

  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  hour: number | null = null;
  minute: number | null = null;

  constructor() {
    console.debug('date in constructor', this.date);
  }

  ngOnInit() {
    console.debug('date in ngOnInit', this.date);
  }

  ngOnChanges(change: SimpleChanges) {
    console.debug('date in ngOnChanges', this.date);

    if (!this.date) {
      return;
    }

    const date = new Date(this.date);
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  apply() {

    if (!this.year || !this.month || !this.day || !this.hour || !this.minute) {
      return;
    }

    const date = new Date(this.year, this.month - 1, this.day, this.hour,
      this.minute);
    this.dateChange.next(date.toISOString());
  }
}
