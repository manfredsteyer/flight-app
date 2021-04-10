// src/app/app.module.ts

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { SharedModule } from './shared/shared.module';
import { CustomPreloadingStrategy } from './shared/custom-preloading.strategy';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { OAuthModule } from 'angular-oauth2-oidc';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { debug } from './+state/meta.reducer';

@NgModule({
   imports: [
      // Hinzufügen:
      SharedModule.forRoot(),
      RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: CustomPreloadingStrategy}),
      HttpClientModule,
      OAuthModule.forRoot(),
      BrowserModule,
      StoreModule.forRoot({}, {
         metaReducers: [debug]
      }),
      EffectsModule.forRoot([]),
      !environment.production ? StoreDevtoolsModule.instrument() : []
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
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
   }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
