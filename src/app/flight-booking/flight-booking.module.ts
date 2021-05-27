// src/app/flight-booking/flight-booking.module.ts

import { InjectionToken, Injector, NgModule, SkipSelf } from '@angular/core';
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
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { map, startWith } from 'rxjs/operators';
import { connectTranslate } from '../shared/connect-translate';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/flight-booking/', '.json');
}

export const PARENT_TRANSLATE_SERVICE = new InjectionToken<TranslateService>('PARENT_TRANSLATE_SERVICE');

@NgModule({
  imports: [
    FlightBookingApiModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
      isolate: true,
    }),
    // Einfügen:
    ReactiveFormsModule,
    SharedModule
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
export class FlightBookingModule {
  constructor(private injector: Injector, @SkipSelf() private parentInjector: Injector) {
    connectTranslate(injector, parentInjector);
  }
}
