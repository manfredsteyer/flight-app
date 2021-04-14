// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightLookaheadComponent } from './flight-lookahead/flight-typeahead.component';

@NgModule({
   imports: [
      RouterModule.forRoot(APP_ROUTES),
      HttpClientModule,
      BrowserModule,
      FlightBookingModule,
      ReactiveFormsModule,
   ],
   declarations: [
      AppComponent,
      FlightLookaheadComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      AboutComponent,
      NotFoundComponent,
      BasketComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
