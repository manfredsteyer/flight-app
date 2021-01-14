// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
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
import { TabComponent } from './controls/tab/tab.component';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';

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
    ValidationErrorsComponent,
    TabComponent,
    TabbedPaneComponent
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
    ValidationErrorsComponent,
    TabComponent,
    TabbedPaneComponent,
  ]
})
export class SharedModule { }
