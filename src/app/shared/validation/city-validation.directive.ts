// src/app/shared/validation/city-validation.directive.ts

// forwardRef importieren:
import { Directive, forwardRef } from '@angular/core';

// Diesen Import ergänzen:
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  // Selektor aktualisieren:
  selector: 'input[appCity]',

  // Provider eintragen:
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidationDirective,
      multi: true
    }
  ]
})
export class CityValidationDirective implements Validator {

  // Das Interface Validator und somit
  // dessen Methode validate implementieren
  public validate(c: AbstractControl): ValidationErrors {

    if (c.value === 'Graz'
      || c.value === 'Hamburg'
      || c.value === 'Frankfurt'
      || c.value === 'Wien'
      || c.value === 'Mallorca') {

      return {};
    }

    return {
      appCity: true
    };
  }
}
