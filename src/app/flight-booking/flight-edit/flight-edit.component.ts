// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Hinzufügen:
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cityValidator } from '../../shared/validation/reactive/city-validator';
import { cityWithParamsValidator } from 'src/app/shared/validation/reactive/city-with-params-validator';
import { asyncCityValidator } from 'src/app/shared/validation/reactive/async-city-validator';
import { FlightService } from '../flight.service';
import { roundTripValidator } from 'src/app/shared/validation/reactive/round-trip-validator';
import { CanExit } from 'src/app/shared/exit/exit.guard';
import { Observable, Subject } from 'rxjs';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit, CanExit {

  id = 0;
  showDetails = false;

  formGroup: FormGroup;
  routeFormGroup: FormGroup;
  categoriesFormArray: FormArray;

  canExitSubject = new Subject<boolean>();
  showWarning = false;

  flight: Flight | undefined;

  metaData = [
    { label: 'FlugNummer', name: 'id', type: 'text' },
    { label: 'Route', name: 'route', type: 'readonly'},
    { label: 'Date', name: 'date', type: 'text' },
    { label: 'Delayed', name: 'delayed', type: 'checkbox' },
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService
  ) {

    this.categoriesFormArray = fb.array([]);

    this.routeFormGroup = fb.group({
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          cityWithParamsValidator(['Tripsdrill', 'Graz', 'Hamburg', 'Zürich'])
        ],
        [
          asyncCityValidator(flightService)
        ]
      ],
      to: ['Hamburg'],
    },
    {
      validators: [roundTripValidator()]
    });

    this.formGroup = fb.group({
      id: [],
      route: this.routeFormGroup,
      categories: this.categoriesFormArray,
      date: [],
      delayed: []
    });

    this.formGroup.controls.delayed.statusChanges.subscribe(
      value => console.debug('delayed changed', value)
    );

    this.formGroup.statusChanges.subscribe(
      value => console.debug('whole form changed', value)
    );

  }

  decide(decision: boolean): void {
    this.showWarning = false;
    this.canExitSubject.next(decision);
    this.canExitSubject.complete();
  }

  canExit(): Observable<boolean> {
    this.canExitSubject = new Subject<boolean>();
    this.showWarning = true;
    return this.canExitSubject;
  }

  addCategory(): void {
    this.categoriesFormArray.push(
      this.fb.group({
        categoryName: [],
        basePrice: []
      })
    );
  }

  save(): void {
    console.debug('form to save', this.formGroup.value);
    console.debug('id', this.formGroup.controls.id.value);
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });

    this.route.data.subscribe(data => {
      this.flight = data.flight;
      this.formGroup.patchValue(data.flight);
    });
  }

}
