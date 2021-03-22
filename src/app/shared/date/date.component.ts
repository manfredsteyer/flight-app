// src/app/shared/date/date.component.ts

import { Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ControlValueAccessor {

  // Einzelteile des gebundenen Datums
  day: number | null = null;
  month: number | null = null;
  year: number | null = null;
  hour: number | null = null;
  minute: number | null = null;

  constructor(private c: NgControl) {
    // Das Control ist sein eigener ControlValueAccessor
    // Deswegen übergibt es sich selbst an Angular
    c.valueAccessor = this;
  }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(dateString: string): void {
    if (!dateString) {
      return;
    }

    // Übergebenes Datum in Einzelteile erlegen
    // Diese Einzelteile werden per Datenbindung
    // ausgegeben
    const date = new Date(dateString);
    this.day = date.getDate();
    this.month = date.getMonth() + 1;
    this.year = date.getFullYear();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  apply(): void {

    if (!this.year || !this.month || !this.day || !this.hour || !this.minute) {
      return;
    }

    // Einzelteile zu Datum zusammenfügen
    const date = new Date(this.year, this.month - 1, this.day, this.hour,
      this.minute);

    // Datum als ISO-String zurückmelden
    this.onChange(date.toISOString());
  }
}
