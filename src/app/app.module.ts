// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { FlightService } from './flight.service';
import { flightServiceObject } from './flight-service-object';
import { createFlightService } from './flight-service.factory';
import { DummyFlightService } from './dummy-flight.service';

@NgModule({
   imports: [
      FormsModule,
      HttpClientModule,
      BrowserModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FlightSearchComponent,
      FlightCardComponent,
      DateComponent
   ],
   providers: [
      {
         provide: DummyFlightService,
         useValue: flightServiceObject
      },
      {
         provide: FlightService,
         useExisting: DummyFlightService
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
