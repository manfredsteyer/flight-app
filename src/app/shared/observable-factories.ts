// src/app/shared/observable-factories.ts

//
// These examples are provided for illustrative purposes only.
// In practice, one often falls back on existing factories
// ("creation operators") instead.
//

import { Observable } from 'rxjs';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function simpleObservable(): Observable<number> {
    return new Observable<number>(observer => {

        observer.next(4711);
        observer.next(815);
        // observer.error('Manfred braucht einen Kaffee!');
        observer.complete();

        return () => {
            console.log(`Sag' zum Abschied leise Servus!`);
        };
    });
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function simpleInterval(): Observable<number> {
    return new Observable<number>(observer => {
        let counter = 0;

        const handle = setInterval(() => {
            observer.next(counter);
            // observer.error('Habe mich verzählt ...')

            counter++;
            if (counter >= 3) {
                //clearInterval(handle);
                observer.complete();
            }
        }, 1000);

        return () => {
            clearInterval(handle);
            console.log(`Sag' zum Abschied leise Servus!`);
        };
    });
}
