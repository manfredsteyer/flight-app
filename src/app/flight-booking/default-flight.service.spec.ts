// src/app/flight-booking/default-flight.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DefaultFlightService } from './default-flight.service';

fdescribe('DefaultFlightServiceService', () => {
  let service: DefaultFlightService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // HttpClientTestingModule (!) anstatt HttpClientModule importieren:
      imports: [HttpClientTestingModule],

      // Kann beim Einsatz von Tree-shakable Providers entfallen:
      providers: [DefaultFlightService]
    });

    service = TestBed.inject(DefaultFlightService);

    // Hinzufügen:
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should call API with parameters', () => {

    // Methode in Prüfling anstoßen
    // Wichtig: Erst subscribe führt die (Fake)Http-Anfrage aus!
    service.find('Hamburg', 'Graz').subscribe(flights => {
      // Ergebnis prüfen
      expect(flights.length).toBe(1);
      expect(flights[0].from).toBe('A');
    });

    // Prüfen, ob eine Anfrage für die erwartet Url vorliegt
    const req = httpCtrl.expectOne('http://www.angular.at/api/flight?from=Hamburg&to=Graz');

    // Alternative:
    // const requests = httpCtrl.match(r =>
    //   r.url.includes('/api/flight')
    //   && r.method === 'GET'
    //   && r.params.get('from') === 'Hamburg');

    // const req = requests[0];

    // Fake-Antwort bereitstellen
    req.flush([{id: 1, from: 'A', to: 'B', date: ''}]);

  });
});
