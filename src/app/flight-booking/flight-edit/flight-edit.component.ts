// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Hinzufügen:
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private flightService: FlightService
    ) {

    // Hinzufügen:
    // this.formGroup = new FormGroup({
    //   id: new FormControl(),
    //   from: new FormControl('Graz',
    //     [Validators.required, Validators.minLength(3)]),
    //   to: new FormControl('Hamburg'),
    //   date: new FormControl(),
    //   delayed: new FormControl(false)
    // });

    this.formGroup = fb.group({
      id: [],
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
      date: [],
      delayed: []
    }, {
      updateOn: 'blur',
      validators : [roundTripValidator()]
    });

    // this.formGroup.patchValue({
    //   id: 17,
    //   from: 'Hier',
    //   to: 'Da',
    //   date: new Date().toISOString(),
    //   delayed: false
    // });

    this.formGroup.controls.delayed.statusChanges.subscribe(
      value => console.debug('delayed changed', value)
    );

    this.formGroup.statusChanges.subscribe(
      value => console.debug('whole form changed', value)
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
