// src/app/shared/validation/reactive/city-with-params-validator.ts

import { ValidatorFn } from '@angular/forms';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function cityWithParamsValidator(allowedCities: string[]): ValidatorFn {
    return (control) => {
        if (allowedCities.includes(control.value)) {
            return null;
        }
        return {
            city: true
        };
    };
}


