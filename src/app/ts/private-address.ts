// src/app/ts/private-address.ts

import { AbstractAddress } from "./address";

export class PrivateAddress extends AbstractAddress {
    firstName: string = '';
    lastName: string = '';

    constructor() {
        super(0);
    }

    fullAddress() {
        return this.firstName + " " + this.lastName + ", " + super.fullAddress();
    }

    toCSV() {
        return `${this.id};${this.firstName};${this.lastName};${this.street};${this.zipCode};${this.city}`;
    }
}
