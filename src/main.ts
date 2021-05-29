import './app/ts/demo';

import { enableProdMode, LOCALE_ID, Provider, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import it from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData(it);

if (environment.production) {
  enableProdMode();
}

const providers: StaticProvider[] = [
  { provide: LOCALE_ID, useValue: 'it' }
];

platformBrowserDynamic().bootstrapModule(AppModule, { providers })
  .catch(err => console.error(err));
