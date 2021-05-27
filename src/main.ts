import './app/ts/demo';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadTranslations } from '@angular/localize';

loadTranslations({
  'flightSearch-info': 'Liebesgrüße aus der main.ts!',
  'passenger-bookedTicket': 'Sie haben ein Ticket für {$INTERPOLATION} gebucht!',
  // eslint-disable-next-line max-len
  'passenger-forward': '{VAR_SELECT, select, male {Leiten Sie es ihm weiter} female {Leiten Sie es Ihr weiter} other {Leiten Sie es ihm/ ihr weiter}}.'

});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
