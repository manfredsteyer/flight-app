// src/app/ts/company-address.ts

import { AbstractAddress } from "./address";

export class CompanyAddress extends AbstractAddress {
    companyName: string = '';

    toCSV() {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}