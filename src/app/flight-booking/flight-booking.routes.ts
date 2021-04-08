// src/app/flight-booking/flight-booking.routes.ts

import { Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { AuthGuard } from '../shared/auth/auth.guard';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: '',
        component: FlightBookingComponent,
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent
            }
        ]
    },
];
