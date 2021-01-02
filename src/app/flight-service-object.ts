// src/app/flight-service-object.ts

import { of } from 'rxjs';

export const flightServiceObject = {
    find: (from: string, to: string) => {
        console.debug('find', from, to);
        return of([
            { id: 1, from, to, date: new Date().toISOString() }
        ]);
    }
};
