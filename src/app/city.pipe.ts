// src/app/city.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {
  transform(value: string | undefined, fmt: 'long' | 'short'): string | undefined {

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

    if (fmt === 'long') {
      return long;
    }

    return short;

  }
}
