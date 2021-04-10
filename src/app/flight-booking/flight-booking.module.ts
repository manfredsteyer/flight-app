// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

// ReactiveFormsMoudle hinzufügen:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightBookingApiModule } from './flight-booking-api.module';
import { StoreModule } from '@ngrx/store';
import * as fromFlightBooking from './+state/flight-booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightBookingEffects } from './+state/flight-booking.effects';

@NgModule({
  imports: [
    FlightBookingApiModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,

    // Einfügen:
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromFlightBooking.flightBookingFeatureKey, fromFlightBooking.reducer),
    EffectsModule.forFeature([FlightBookingEffects])
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightBookingComponent,
    FlightEditComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
