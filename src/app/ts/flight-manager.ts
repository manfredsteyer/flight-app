// src/app/ts/flight-manager.ts
import { Flight } from '../flight-booking/flight';

export class FlightManager {

    private cache: Flight[];

    constructor(cache: Flight[] | null | undefined) {
        if (!cache) {
            cache = [];
        }
        this.cache = cache;
    }

    search3(from: string, to: string): Flight[] {
        return this.cache.filter(f => {
            return f.from === from && f.to === to;
        });
    }

    search2(from: string, to: string): Flight[] {
        const result: Flight[] = this.cache.filter(function (f: Flight) {
            return f.from === from && f.to === to;
        });
        return result;
    }

    search(from: string, to: string): Flight[] {
        const result = new Array<Flight>();
        for (const f of this.cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

}
