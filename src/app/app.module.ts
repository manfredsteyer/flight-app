// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { DateComponent } from './date/date.component';
import { BASE_URL, FLIGHT_SERVICES } from './tokens';
import { FlightService } from './flight.service';
import { DefaultFlightService } from './default-flight.service';
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
         provide: BASE_URL,
         useValue: 'http://www.angular.at/api/'
      },
      {
         provide: FLIGHT_SERVICES,
         useClass: DefaultFlightService,
         multi: true
      },
      {
         provide: FLIGHT_SERVICES,
         useClass: DummyFlightService,
         multi: true
      },



   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
