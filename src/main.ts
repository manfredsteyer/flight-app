import './app/ts/demo';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { loadTranslations } from '@angular/localize';

// loadTranslations({
//   'flightSearch-info': 'Liebesgrüße aus der main.ts!',
//   'flightSearch-title': 'Flugsuche!!',
//   'flightSearch-flightsFound': '{$INTERPOLATION} wurden gefunden!'
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
