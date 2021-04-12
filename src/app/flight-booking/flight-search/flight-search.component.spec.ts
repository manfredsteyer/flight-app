// src/app/flight-booking/flight-search/flight-search.component.spec.ts

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightSearchComponent } from './flight-search.component';

// Hinzufügen:
import { SharedModule } from 'src/app/shared/shared.module';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { FlightService } from '../flight.service';
import { DummyFlightService } from '../dummy-flight.service';

// import { of } from 'rxjs';

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let flightService: FlightService;

  beforeEach(async () => {
    // Prüfling und seine Abhängigkeiten hinterlegen:
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, SharedModule ],
      declarations: [ FlightSearchComponent, FlightCardComponent ],
      providers: [
        { provide: FlightService, useClass: DummyFlightService}
      ]
    })
    .compileComponents();

    // Service auf Komponenten-Ebene tauschen:
    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useClass: DummyFlightService}
        ]
      }
    });

  });

  beforeEach(() => {
    // Komponente erzeugen
    fixture = TestBed.createComponent(FlightSearchComponent);
    // Komponenteninstnaz abrufen
    component = fixture.componentInstance;
    fixture.detectChanges();

    flightService = fixture.debugElement.injector.get(FlightService);
    spyOn(flightService, 'find').and.callThrough();

    // Alternativen
    // Einen fixen Wert zurückliefern
    // spyOn(flightService, 'find').and.returnValue(of([{id: 1, from: 'A', to: 'B', date: ''}]));
    // Eine Fake-Implementierung (Mock) aufrufen
    // spyOn(flightService, 'find').and.callFake((from, to) => of([{id: 1, from: 'A', to: 'B', date: ''}]));
    // Einen Fehler werfen
    // spyOn(flightService, 'find').and.throwError(new Error('Manfred needs some coffee!'));
  });

  // Anpassen:
  it('should have no loaded flights initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should have no loaded flights initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should search for flights when from and to are given', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();

    expect(component.flights.length).toBe(3);
    expect(flightService.find).toHaveBeenCalled();

    // Alternativen:
    // expect(flightService.find).toHaveBeenCalledWith('Hamburg', 'Graz');
    // expect(flightService.find).toHaveBeenCalledTimes(1);

  });

  it('should *not* search for flights *without* from and to', () => {
    component.from = '';
    component.to = '';
    component.search();

    expect(component.flights.length).toBe(0);
    expect(flightService.find).not.toHaveBeenCalled();
  });

});
