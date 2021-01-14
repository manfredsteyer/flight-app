// src/app/customer/customer.routes.ts

import { Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

export const CUSTOMER_ROUTES: Routes = [
    {
        path: 'customer/booking-history',
        component: BookingHistoryComponent
    }
];
