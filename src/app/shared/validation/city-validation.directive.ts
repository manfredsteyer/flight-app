// src/app/shared/validation/city-validation.directive.ts

// forwardRef importieren:
import { Directive, Input } from '@angular/core';

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

  @Input() appCity = '';

  // Das Interface Validator und somit
  // dessen Methode validate implementieren
  public validate(c: AbstractControl): ValidationErrors {

    const allowedCities = this.appCity.split(',');

    if (allowedCities.includes(c.value)) {
      return {};
    }

    return {
      appCity: true
    };
  }
}
