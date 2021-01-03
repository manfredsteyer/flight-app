// src/app/tokens.ts

import { InjectionToken } from '@angular/core';
import { FlightService } from './flight.service';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

// export const BASE_URL = new InjectionToken<string>('BASE_URL', {
//     providedIn: 'root',
//     factory: () => 'http://www.angular.at/api/'
// });

export const FLIGHT_SERVICES = new InjectionToken<FlightService>('FLIGHT_SERVICES');
