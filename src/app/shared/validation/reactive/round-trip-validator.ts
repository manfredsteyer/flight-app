// src/app/shared/validation/reactive/round-trip-validator.ts

import { FormGroup, ValidatorFn } from '@angular/forms';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function roundTripValidator(): ValidatorFn {
    return (control) => {
        const formGroup = control as FormGroup;
        const from = formGroup.controls.from.value;
        const to = formGroup.controls.to.value;

        if (from === to) {
            return {
                roundTrip: true
            };
        }

        return null;
    };
}
