// src/app/shared/validation/round-trip-validation.directive.ts

import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[appRoundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundTripValidationDirective,
      multi: true
    }
  ]

})
export class RoundTripValidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    const group = control as FormGroup;

    const from = group.controls?.from?.value;
    const to = group.controls?.to?.value;

    // Erst validieren, wenn Werte für beide Felder vorliegen:
    if (!from || !to) {
      return null;
    }

    if (from !== to) {
      // Kein Round Trip: Alles ok
      return null;
    }

    // Round Trip: Fehler melden
    return {
      appRoundTrip: true
    };

  }

}

