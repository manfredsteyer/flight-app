// src/app/shared/shared.module.ts

import { ApplicationRef, ComponentFactoryResolver, Inject, Injector, NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { SplitTabComponent } from './controls/split-tab/split-tab.component';
import { DataTableComponent } from './controls/data-table/data-table.component';
import { TableFieldDirective } from './controls/data-table/table-field.directive';
import { CustomTemplateOutletDirective } from './controls/data-table/custom-template-outlet.directive';
import { DialogOutletComponent } from './controls/dialog/dialog-outlet/dialog-outlet.component';
import { DemoDialogComponent } from './controls/dialog/demo-dialog/demo-dialog.component';
import { CustomComponentOutletDirective } from './controls/dialog/custom-component-outlet.directive';

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
    TabbedPaneComponent,
    TabNavigatorComponent,
    SplitTabComponent,
    DataTableComponent,
    TableFieldDirective,
    CustomTemplateOutletDirective,
    DialogOutletComponent,
    DemoDialogComponent,
    CustomComponentOutletDirective
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
    TabNavigatorComponent,
    SplitTabComponent,
    DataTableComponent,
    TableFieldDirective,
    CustomTemplateOutletDirective,
    DialogOutletComponent,
    DemoDialogComponent,
    CustomComponentOutletDirective
  ]
})
export class SharedModule {

  constructor(
    cvr: ComponentFactoryResolver,
    injector: Injector,
    appRef: ApplicationRef,
    @Inject(DOCUMENT) document: Document
    ) {
      const factory = cvr.resolveComponentFactory(DialogOutletComponent);
      const compRef = factory.create(injector);

      // Attach component's view so that Angular does change detection
      appRef.attachView(compRef.hostView);

      // Add component's DOM node to the view
      document.body.appendChild(compRef.location.nativeElement);
  }

}
