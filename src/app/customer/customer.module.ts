// src/app/customer/customer.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOMER_ROUTES } from './customer.routes';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    // Shared-Modul einfügen
    SharedModule,
    RouterModule.forChild(CUSTOMER_ROUTES)
  ],
  declarations: [BookingHistoryComponent]
})
export class CustomerModule { }
