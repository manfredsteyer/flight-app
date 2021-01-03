// src/app/city.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  formatName(value: string, format: 'short' | 'long'): string {
    let short;
    let long;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      default:
        short = long = value;
          // Formatierung nicht möglich ...
    }

    if (format === 'long') {
      return long;
    }

    return short;
  }
}
