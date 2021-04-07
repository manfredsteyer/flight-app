// src/app/shared/shared.module.ts

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { StatusColorPipe } from './status-color.pipe';
import { StatusFilterPipe } from './status-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CityValidationDirective } from './validation/city-validation.directive';

// Von der CLI eingefügt
import { RoundTripValidationDirective } from './validation/round-trip-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';
import { ValidationErrorsComponent } from './validation/validation-errors/validation-errors.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective,
    ValidationErrorsComponent
  ],
  providers: [
    // Alle Provider hier entfernen!
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe,
    StatusFilterPipe,
    FormsModule,
    CommonModule,
    CityValidationDirective,
    RoundTripValidationDirective,
    AsyncCityValidationDirective,
    ValidationErrorsComponent
  ]
})
export class SharedModule {

  // Hinzufügen:
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }

}
