// src/app/ts/flight-invoice.ts

import { Flight } from '../flight-booking/flight';

export class FlightInvoice<T extends Flight> {

    constructor(readonly subject: T, readonly price: number) {
    }

    toString(): string {
        const id = this.subject.id; // Klappt nun! 
        return `${id}: ${this.price}`;
    }

}
