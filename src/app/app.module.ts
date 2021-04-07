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
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from './shared/shared.module';
import { CustomPreloadingStrategy } from './shared/custom-preloading.strategy';

@NgModule({
   imports: [
      // Hinzufügen:
      SharedModule.forRoot(),
      RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: CustomPreloadingStrategy}),
      HttpClientModule,
      BrowserModule,
      // FlightBookingModule -- Würde Lazy Loading verhindern!!
   ],
   declarations: [
      AppComponent,
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
