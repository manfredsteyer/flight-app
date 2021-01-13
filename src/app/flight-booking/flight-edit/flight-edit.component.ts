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


@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  id = 0;
  showDetails = false;

  formGroup: FormGroup;
  routeFormGroup: FormGroup;
  categoriesFormArray: FormArray;

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
  }

}
